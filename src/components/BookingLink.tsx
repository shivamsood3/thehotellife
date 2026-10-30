"use client";

import { trackAffiliateClick } from "@/lib/analytics";

/**
 * The booking hand-off, wrapped so the click is recorded before the reader
 * leaves. Stays a plain anchor with a real href: the navigation must not
 * depend on JavaScript, and target="_blank" means the page is not unloading,
 * so the beacon has time to send without any sendBeacon gymnastics.
 */
export default function BookingLink({
  href,
  hotel,
  network,
  tracked,
  placement,
  className,
  children,
}: {
  href: string;
  hotel: string;
  network: string;
  tracked: boolean;
  placement: "review-sidebar" | "guide-list" | "best-hotels-list";
  className?: string;
  children: React.ReactNode;
}) {
  function record() {
    const payload = { hotel, network, tracked, placement };

    // Client-side analytics, for the dashboard view. Blockable, and that is
    // fine: the server copy below is the one that has to be right.
    trackAffiliateClick(payload);

    // Server-side copy. Same-origin and first-party, so content blockers do
    // not intercept it. sendBeacon is the correct primitive here: the browser
    // owns the request once queued, so it survives the page being left for
    // the partner, and it never delays the navigation.
    try {
      const body = JSON.stringify(payload);
      const sent =
        typeof navigator !== "undefined" &&
        typeof navigator.sendBeacon === "function" &&
        navigator.sendBeacon("/api/outbound", new Blob([body], { type: "application/json" }));

      if (!sent) {
        // Older browsers, or a beacon the browser declined to queue.
        void fetch("/api/outbound", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body,
          keepalive: true,
        }).catch(() => {});
      }
    } catch {
      // Measurement must never break the hand-off.
    }
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored nofollow noopener noreferrer"
      className={className}
      onClick={record}
    >
      {children}
    </a>
  );
}
