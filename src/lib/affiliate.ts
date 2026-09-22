/**
 * Affiliate routing for The Hotel Life.
 * ------------------------------------------------------------------
 * One primary "Check Availability" link per hotel. Never a menu: a single
 * confident recommendation converts better than a row of options, and it
 * keeps the click attributable to exactly one programme.
 *
 * Resolution order: configured Hotels.com property link, configured
 * Booking.com property link, configured chain programme, official direct
 * fallback, then a clearly identified OTA search. A saved official URL must
 * not suppress a known commission-capable property link.
 *
 * Affiliate links run through CJ's redirect carrying our publisher id.
 * Configuration is not proof of active programme approval or a payable stay.
 * Each programme therefore has its
 * own click-template env var. Any programme without a template configured is
 * skipped entirely rather than emitting an untracked link.
 *
 * Note on CJ and query strings, verified per programme:
 *   Booking.com STRIPS the destination's query string, so only path-based
 *   property URLs survive and a hotel without one cannot be tracked there.
 *   A Hotels.com search can carry tracking but is NOT confirmation that the
 *   reviewed hotel is listed. Keep search fallbacks visible in the audit.
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

export type BookingLink = {
  url: string;
  /** Where the reader lands, for the disclosure line. */
  network: "Booking.com" | "Hotels.com" | "the hotel" | string;
  /** Whether a configured affiliate wrapper is present, not a payout guarantee. */
  tracked: boolean;
  destinationType: "property" | "search" | "official";
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
      destinationType: hotel.hotelsUrl ? "property" : "search",
    };
  }
  return { url: destination, network: "Hotels.com", tracked: false, destinationType: hotel.hotelsUrl ? "property" : "search" };
}

export function primaryBookingLink(hotel: Hotel): BookingLink {
  // Exact listings outrank untracked official links and generic searches.
  if (hotel.hotelsUrl && TEMPLATES.hotels) {
    return { url: wrap(TEMPLATES.hotels, hotel.hotelsUrl, `${SID_PREFIX}-${hotel.slug}-hotels`), network: "Hotels.com", tracked: true, destinationType: "property" };
  }
  if (hotel.bookingUrl && TEMPLATES.booking) {
    return { url: wrap(TEMPLATES.booking, hotel.bookingUrl, `${SID_PREFIX}-${hotel.slug}-booking`), network: "Booking.com", tracked: true, destinationType: "property" };
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
        destinationType: "property",
      };
    }
  }

  if (hotel.directBookingUrl) {
    return { url: hotel.directBookingUrl, network: "the hotel", tracked: false, destinationType: "official" };
  }
  // No verified property route: a tracked search is useful but not equivalent
  // to a listed, bookable hotel. The audit and link label distinguish it.
  if (TEMPLATES.hotels) {
    return hotelsComAffiliateLink(hotel);
  }

  // 4. No programme configured at all: still send the reader somewhere useful.
  return {
    url: hotel.hotelsUrl ?? hotel.bookingUrl ?? `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(`${hotel.name} ${hotel.city}`)}`,
    network: hotel.hotelsUrl ? "Hotels.com" : "Booking.com",
    tracked: false,
    destinationType: hotel.hotelsUrl || hotel.bookingUrl ? "property" : "search",
  };
}
