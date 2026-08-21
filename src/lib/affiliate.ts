/**
 * Affiliate link helpers for The Hotel Life.
 * ------------------------------------------------------------------
 * We monetise "Check Availability" through the Booking.com affiliate
 * programme, which we joined via CJ (Commission Junction). For CJ to
 * credit a booking, the click MUST pass through CJ's tracking redirect
 * (e.g. anrdoezrs.net / tkqlhce.com / dpbolvw.net) carrying our publisher
 * ID. A plain booking.com link earns nothing.
 *
 * Configure with one env var, taken from CJ's "Deep Link" tool:
 *
 *   NEXT_PUBLIC_BOOKING_DEEPLINK_BASE
 *
 * Two accepted shapes (whichever matches the link CJ gives you):
 *   1. Contains the token "{url}" where the destination goes, e.g.
 *        https://www.anrdoezrs.net/links/PID/type/dlg/?url={url}
 *      -> {url} is replaced with the URL-encoded destination.
 *   2. Ends with a slash and takes the destination appended raw, e.g.
 *        https://www.anrdoezrs.net/links/PID/type/dlg/
 *      -> the raw destination URL is appended.
 *
 * Optional: NEXT_PUBLIC_BOOKING_SID is passed to CJ as the sub-id (sid)
 * so reports show which hotel drove each click. We set it to the slug.
 *
 * Until the base is set, links fall back to a plain Booking.com search so
 * the buttons still work (but do NOT earn). Nothing here embeds a script,
 * so no CSP change is needed: these are ordinary outbound links.
 */
import type { Hotel } from "@/content/hotels";

const DEEPLINK_BASE = process.env.NEXT_PUBLIC_BOOKING_DEEPLINK_BASE ?? "";
const SID_PREFIX = process.env.NEXT_PUBLIC_BOOKING_SID ?? "thehotellife";

/** Plain Booking.com search for a hotel, used when it has no property page. */
function bookingSearch(hotel: Hotel): string {
  const query = encodeURIComponent(`${hotel.name} ${hotel.city}`);
  return `https://www.booking.com/searchresults.html?ss=${query}`;
}

/**
 * The click-through for "Check Availability".
 *
 * Important: Booking.com's CJ programme strips the query string from the
 * destination, so a wrapped search URL (?ss=...) arrives as an empty search
 * page. Only path-based property URLs survive the redirect. Therefore:
 *
 *   - hotel.bookingUrl set  -> wrap it in CJ. Tracked, earns commission.
 *   - no bookingUrl         -> link straight to a Booking.com search. Not
 *                              tracked, but it actually shows the hotel,
 *                              which beats dumping the reader on a blank page.
 *
 * `bookingUrl` is only filled in for hotels verified to exist on
 * Booking.com; several (Aman, Ritz Paris, Singita, Amangiri and other
 * direct-only properties) are not listed there at all.
 */
export function affiliateBookingUrl(hotel: Hotel): string {
  if (!hotel.bookingUrl) return bookingSearch(hotel);
  if (!DEEPLINK_BASE) return hotel.bookingUrl;

  const sid = `${SID_PREFIX}-${hotel.slug}`;
  if (DEEPLINK_BASE.includes("{url}")) {
    return DEEPLINK_BASE.replace("{sid}", encodeURIComponent(sid)).replace(
      "{url}",
      encodeURIComponent(hotel.bookingUrl),
    );
  }
  // Raw-append form: base ends in a slash and takes the destination as-is.
  return DEEPLINK_BASE + hotel.bookingUrl;
}

/** True when this hotel's link is a tracked, commission-earning link. */
export function isAffiliateLink(hotel: Hotel): boolean {
  return Boolean(hotel.bookingUrl && DEEPLINK_BASE);
}
