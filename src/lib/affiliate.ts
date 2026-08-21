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

/** The plain Booking.com destination for a hotel (before CJ wrapping). */
export function bookingDestination(hotel: Hotel): string {
  if (hotel.bookingUrl) return hotel.bookingUrl;
  const query = encodeURIComponent(`${hotel.name} ${hotel.city}`);
  return `https://www.booking.com/searchresults.html?ss=${query}`;
}

/**
 * The click-through URL for the "Check Availability" button: the CJ
 * tracking link when configured, otherwise the plain destination.
 */
export function affiliateBookingUrl(hotel: Hotel): string {
  const dest = bookingDestination(hotel);
  if (!DEEPLINK_BASE) return dest;

  const sid = `${SID_PREFIX}-${hotel.slug}`;
  if (DEEPLINK_BASE.includes("{url}")) {
    return DEEPLINK_BASE.replace("{sid}", encodeURIComponent(sid)).replace(
      "{url}",
      encodeURIComponent(dest),
    );
  }
  // Raw-append form: base ends in a slash and takes the destination as-is.
  return DEEPLINK_BASE + dest;
}

/** Whether real affiliate tracking is wired up (for internal checks). */
export const affiliateEnabled = Boolean(DEEPLINK_BASE);
