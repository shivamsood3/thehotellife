/**
 * Business-event tracking, on top of Vercel Analytics (already installed and
 * cookieless, so it needs no consent banner).
 *
 * Only two events are recorded, because only two things make money here:
 *
 *   affiliate_click   a reader leaving for a booking partner. At a $895
 *                     median nightly rate and 4% Hotels.com commission, a
 *                     booked two-night stay pays about $72, so one click is
 *                     worth roughly $1.80 at a 2.5% booking rate. This is
 *                     the number to watch, and it also answers a question
 *                     nothing else can: which reviews actually drive stays.
 *
 *   newsletter_signup a reader worth more than one visit. Repeat readers
 *                     are where affiliate conversion actually happens.
 *
 * Deliberately not tracked: scroll depth, time on page, engagement proxies.
 * Those existed to feed Google Ads Smart Bidding enough volume to learn, and
 * there is no ad spend to optimise any more.
 */
import { track } from "@vercel/analytics";

/** Vercel Analytics rejects nested objects, so properties stay flat. */
type Primitive = string | number | boolean | null;

function emit(event: string, props: Record<string, Primitive>) {
  try {
    track(event, props);
  } catch {
    // Never let measurement break a booking hand-off or a signup. A missed
    // data point is cheap; a swallowed click is not.
  }
}

export function trackAffiliateClick(params: {
  hotel: string;
  network: string;
  /** False for direct hotel links, which earn nothing but still inform. */
  tracked: boolean;
  /** Where in the site the click came from, to compare placements. */
  placement: "review-sidebar" | "guide-list" | "best-hotels-list";
}) {
  emit("affiliate_click", { ...params });
}

export function trackNewsletterSignup(params: { source: string; isNew: boolean }) {
  emit("newsletter_signup", { ...params });
}
