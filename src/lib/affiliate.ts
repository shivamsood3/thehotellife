/**
 * Affiliate routing for The Hotel Life.
 * ------------------------------------------------------------------
 * One primary "Check Availability" link per hotel. Never a menu: a single
 * confident recommendation converts better than a row of options, and it
 * keeps the click attributable to exactly one programme.
 *
 * Resolution order:
 *   1. directBookingUrl  -> the hotel's own booking engine, for properties
 *                           that sell direct only. Untracked, and labelled
 *                           as such.
 *   2. a chain programme -> when the property belongs to a group we hold an
 *                           ACTIVE booking relationship with, in its region.
 *   3. otherwise         -> split between the general OTAs we are live with,
 *                           deterministically by slug so the split is stable
 *                           across builds and comparable in CJ reports.
 *
 * Everything runs through CJ, so a click only earns if it passes through
 * CJ's redirect carrying our publisher id. Each programme therefore has its
 * own click-template env var. Any programme without a template configured is
 * skipped entirely rather than emitting an untracked link.
 *
 * Note on CJ and query strings, verified per programme:
 *   Booking.com STRIPS the destination's query string, so only path-based
 *   property URLs survive and a hotel without one cannot be tracked there.
 *   Hotels.com PRESERVES it, so a search URL works. That makes Hotels.com a
 *   universal tracked fallback and is why every hotel that is not
 *   direct-only ends up with an earning link.
 */
import type { Hotel, Region } from "@/content/hotels";

const SID_PREFIX = process.env.NEXT_PUBLIC_BOOKING_SID ?? "thehotellife";

/** CJ click templates. Empty means "not configured, do not use". */
const TEMPLATES = {
  booking: process.env.NEXT_PUBLIC_BOOKING_DEEPLINK_BASE ?? "",
  hotels: process.env.NEXT_PUBLIC_CJ_HOTELS_COM ?? "",
  "accor-south-asia": process.env.NEXT_PUBLIC_CJ_ACCOR_SOUTH_ASIA ?? "",
  "accor-middle-east": process.env.NEXT_PUBLIC_CJ_ACCOR_MIDDLE_EAST ?? "",
  "ihg-europe": process.env.NEXT_PUBLIC_CJ_IHG_EUROPE ?? "",
  "ihg-amea": process.env.NEXT_PUBLIC_CJ_IHG_AMEA ?? "",
} as const;

export type Chain = "accor" | "ihg" | "marriott";

const CHAIN_LABEL: Record<Chain, string> = {
  accor: "Accor",
  ihg: "IHG",
  marriott: "Marriott",
};

/**
 * Chain programmes are split by region, so the same group routes to a
 * different advertiser depending on where the hotel is. Marriott has no CJ
 * programme in this account at all, so it never resolves.
 */
function chainAdvertiser(chain: Chain, region: Region): keyof typeof TEMPLATES | null {
  if (chain === "accor") {
    if (region === "Asia") return "accor-south-asia";
    if (region === "Middle East & Africa") return "accor-middle-east";
    return null;
  }
  if (chain === "ihg") {
    if (region === "Europe") return "ihg-europe";
    if (region === "Asia" || region === "Middle East & Africa") return "ihg-amea";
    return null;
  }
  return null;
}

/** Wrap a destination in a CJ click template. */
function wrap(template: string, destination: string, sid: string): string {
  if (template.includes("{url}")) {
    return template
      .replace("{sid}", encodeURIComponent(sid))
      .replace("{url}", encodeURIComponent(destination));
  }
  return template + destination;
}

/**
 * Stable per-hotel choice between the OTAs. A hash rather than a random
 * draw, because the pages are statically generated: a random split would
 * differ between server and client and change on every rebuild, making the
 * CJ numbers impossible to compare.
 */
function pick<T>(slug: string, options: T[]): T {
  let hash = 0;
  for (let i = 0; i < slug.length; i += 1) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return options[hash % options.length];
}

export type BookingLink = {
  url: string;
  /** Where the reader lands, for the disclosure line. */
  network: "Booking.com" | "Hotels.com" | "the hotel" | string;
  /** Whether this click can earn a commission. */
  tracked: boolean;
};

/** A Hotels.com-only link for ranked lists and other monetized hotel mentions. */
export function hotelsComAffiliateLink(hotel: {
  slug: string;
  name: string;
  city: string;
  hotelsUrl?: string;
}): BookingLink {
  const destination = hotel.hotelsUrl ??
    `https://www.hotels.com/Hotel-Search?destination=${encodeURIComponent(`${hotel.name} ${hotel.city}`)}`;
  if (TEMPLATES.hotels) {
    return {
      url: wrap(TEMPLATES.hotels, destination, `${SID_PREFIX}-${hotel.slug}-hotels`),
      network: "Hotels.com",
      tracked: true,
    };
  }
  return { url: destination, network: "Hotels.com", tracked: false };
}

export function primaryBookingLink(hotel: Hotel): BookingLink {
  // 1. Direct-only properties.
  if (hotel.directBookingUrl) {
    return { url: hotel.directBookingUrl, network: "the hotel", tracked: false };
  }

  // 2. Chain programme, when one is active for this group and region.
  if (hotel.chain && hotel.chainUrl) {
    const advertiser = chainAdvertiser(hotel.chain, hotel.region);
    const template = advertiser ? TEMPLATES[advertiser] : "";
    if (template) {
      return {
        url: wrap(template, hotel.chainUrl, `${SID_PREFIX}-${hotel.slug}-${hotel.chain}`),
        network: CHAIN_LABEL[hotel.chain],
        tracked: true,
      };
    }
  }

  // 3. General OTAs, split deterministically between whichever we can both
  //    track and land correctly for this specific hotel.
  const search = encodeURIComponent(`${hotel.name} ${hotel.city}`);
  const eligible: { network: BookingLink["network"]; url: string; template: string }[] = [];

  // Booking.com needs a path-based property URL: its programme drops the
  // query string, so a search URL would arrive as an empty results page.
  if (hotel.bookingUrl && TEMPLATES.booking) {
    eligible.push({
      network: "Booking.com",
      url: hotel.bookingUrl,
      template: TEMPLATES.booking,
    });
  }

  // Hotels.com keeps the query string, so a property URL is preferred but a
  // search still lands on the right hotel and still earns.
  if (TEMPLATES.hotels) {
    eligible.push({
      network: "Hotels.com",
      url:
        hotel.hotelsUrl ??
        `https://www.hotels.com/Hotel-Search?destination=${search}`,
      template: TEMPLATES.hotels,
    });
  }

  if (eligible.length > 0) {
    const chosen = pick(hotel.slug, eligible);
    return {
      url: wrap(chosen.template, chosen.url, `${SID_PREFIX}-${hotel.slug}`),
      network: chosen.network,
      tracked: true,
    };
  }

  // 4. No programme configured at all: still send the reader somewhere useful.
  return {
    url: hotel.bookingUrl ?? `https://www.booking.com/searchresults.html?ss=${search}`,
    network: "Booking.com",
    tracked: false,
  };
}
