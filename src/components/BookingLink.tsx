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
  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored nofollow noopener noreferrer"
      className={className}
      onClick={() => trackAffiliateClick({ hotel, network, tracked, placement })}
    >
      {children}
    </a>
  );
}
