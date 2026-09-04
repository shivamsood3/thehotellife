/**
 * Affiliate link helpers for The Hotel Life.
 * ------------------------------------------------------------------
 * All programmes run through CJ (Commission Junction). For CJ to credit a
 * booking the click MUST pass through CJ's tracking redirect carrying our
 * publisher ID, so a plain booking.com or accor.com link earns nothing.
 *
 * Each advertiser is a separate CJ programme with its own link id, so each
 * gets its own env var holding a click-URL template:
 *
 *   NEXT_PUBLIC_BOOKING_DEEPLINK_BASE   Booking.com   (live)
 *   NEXT_PUBLIC_CJ_ACCOR_SOUTH_ASIA     Accor South Asia      6107059
 *   NEXT_PUBLIC_CJ_ACCOR_MIDDLE_EAST    Accor Middle East     6593809
 *   NEXT_PUBLIC_CJ_IHG_EUROPE           IHG Europe            4381309
 *   NEXT_PUBLIC_CJ_IHG_AMEA             IHG AMEA              4386835
 *
 * Two accepted template shapes, matching whatever CJ's Get Code gives you:
 *   1. contains "{url}" -> replaced with the URL-encoded destination
 *      e.g. https://www.kqzyfj.com/click-101861864-1234567?url={url}&sid={sid}
 *   2. ends with a slash -> the raw destination is appended
 *
 * Any programme left unconfigured simply does not render its button, so
 * this is safe to ship before the link ids exist.
 */
import type { Hotel, Region } from "@/content/hotels";

const SID_PREFIX = process.env.NEXT_PUBLIC_BOOKING_SID ?? "thehotellife";

const BOOKING_BASE = process.env.NEXT_PUBLIC_BOOKING_DEEPLINK_BASE ?? "";

/** CJ click templates for the hotel-chain programmes, by advertiser. */
const CHAIN_BASES: Record<string, string> = {
  "accor-south-asia": process.env.NEXT_PUBLIC_CJ_ACCOR_SOUTH_ASIA ?? "",
  "accor-middle-east": process.env.NEXT_PUBLIC_CJ_ACCOR_MIDDLE_EAST ?? "",
  "ihg-europe": process.env.NEXT_PUBLIC_CJ_IHG_EUROPE ?? "",
  "ihg-amea": process.env.NEXT_PUBLIC_CJ_IHG_AMEA ?? "",
};

/** Hotel groups we hold a CJ relationship with. */
export type Chain = "accor" | "ihg";

export const CHAIN_LABEL: Record<Chain, string> = {
  accor: "Accor",
  ihg: "IHG",
};

/**
 * Both groups run region-split programmes, so the same chain routes to a
 * different advertiser depending on where the hotel is. Getting this wrong
 * means the click is not credited, so it is derived rather than hand-set.
 */
function advertiserFor(chain: Chain, region: Region): string | null {
  if (chain === "accor") {
    if (region === "Asia") return "accor-south-asia";
    if (region === "Middle East & Africa") return "accor-middle-east";
    return null; // no Accor Europe or Americas programme yet
  }
  if (region === "Europe") return "ihg-europe";
  if (region === "Asia" || region === "Middle East & Africa") return "ihg-amea";
  return null; // no IHG Americas programme yet
}

/** Wrap a destination in a CJ click template. */
function wrap(base: string, destination: string, sid: string): string {
  if (!base) return destination;
  if (base.includes("{url}")) {
    return base
      .replace("{sid}", encodeURIComponent(sid))
      .replace("{url}", encodeURIComponent(destination));
  }
  return base + destination;
}

/** Plain Booking.com search, used when a hotel has no property page. */
function bookingSearch(hotel: Hotel): string {
  const query = encodeURIComponent(`${hotel.name} ${hotel.city}`);
  return `https://www.booking.com/searchresults.html?ss=${query}`;
}

/**
 * The primary "Check Availability" click-through.
 *
 * Booking.com's CJ programme strips the query string from the destination,
 * so only path-based property URLs survive the redirect. A hotel without a
 * verified bookingUrl therefore falls back to an untracked search, which at
 * least shows the reader the right hotel.
 */
export function affiliateBookingUrl(hotel: Hotel): string {
  if (hotel.directBookingUrl) return hotel.directBookingUrl;
  if (!hotel.bookingUrl) return bookingSearch(hotel);
  return wrap(BOOKING_BASE, hotel.bookingUrl, `${SID_PREFIX}-${hotel.slug}`);
}

/** True when the primary link is tracked and commission-earning. */
export function isAffiliateLink(hotel: Hotel): boolean {
  return Boolean(!hotel.directBookingUrl && hotel.bookingUrl && BOOKING_BASE);
}

/**
 * Secondary "book direct with the group" link, offered alongside
 * Booking.com. Returns null unless the hotel belongs to a chain we have a
 * programme for, in that hotel's region, with a link template configured
 * and a brand.com URL to send the reader to.
 */
export function chainBookingUrl(
  hotel: Hotel,
): { url: string; chain: Chain; label: string } | null {
  if (!hotel.chain || !hotel.chainUrl) return null;
  const advertiser = advertiserFor(hotel.chain, hotel.region);
  if (!advertiser) return null;
  const base = CHAIN_BASES[advertiser];
  if (!base) return null;
  return {
    url: wrap(base, hotel.chainUrl, `${SID_PREFIX}-${hotel.slug}-${hotel.chain}`),
    chain: hotel.chain,
    label: CHAIN_LABEL[hotel.chain],
  };
}
