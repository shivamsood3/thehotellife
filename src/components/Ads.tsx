/**
 * Ad system for The Hotel Life
 * ------------------------------------------------------------------
 * Monetization surfaces:
 *   1. Google AdSense  - <AdSense /> responsive display units
 *   2. Hacoco          - <HacocoBanner /> top leaderboard (direct-sold)
 *   3. The AntiAlias   - <AntialiasRail /> side skyscraper (direct-sold)
 *
 * To go live with AdSense:
 *   - set NEXT_PUBLIC_ADSENSE_CLIENT (e.g. "ca-pub-XXXXXXXXXXXXXXXX")
 *   - add the AdSense loader <Script> (see note in AdSense below)
 *   - create ad units in the AdSense dashboard and pass their slot IDs
 * Until a client ID is present, units render a styled placeholder so
 * the layout (and reserved space, to avoid layout shift) is preview-safe.
 *
 * Direct banners (Hacoco / AntiAlias) ship with house creatives in
 * /public/ads. Override the click-through URLs with
 * NEXT_PUBLIC_HACOCO_URL / NEXT_PUBLIC_ANTIALIAS_URL.
 */
import Link from "next/link";
import { AntialiasCreative, NikhaarCreative } from "@/components/HouseBanners";

const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "";
const HACOCO_URL = process.env.NEXT_PUBLIC_HACOCO_URL ?? "https://investwithhacoco.com";
const ANTIALIAS_URL = process.env.NEXT_PUBLIC_ANTIALIAS_URL ?? "https://theantialias.com";
const NIKHAAR_URL = process.env.NEXT_PUBLIC_NIKHAAR_URL ?? "https://www.nikhaarfoundation.org";

type AdSenseProps = {
  slot?: string;
  /** "leaderboard" | "rectangle" | "in-article" | "responsive" */
  format?: "leaderboard" | "rectangle" | "in-article" | "responsive";
  className?: string;
};

const SIZES: Record<NonNullable<AdSenseProps["format"]>, { h: number; label: string }> = {
  leaderboard: { h: 90, label: "728 × 90" },
  rectangle: { h: 250, label: "300 × 250" },
  "in-article": { h: 280, label: "Fluid · In-Article" },
  responsive: { h: 250, label: "Responsive" },
};

export function AdSense({ slot, format = "responsive", className = "" }: AdSenseProps) {
  const size = SIZES[format];

  // Live mode: Google Auto Ads is enabled (loader present + toggled in the
  // AdSense dashboard). Auto Ads chooses placements itself, so we render
  // nothing here - no empty manual slots, no policy risk. `slot` is kept in
  // the API for a future switch back to manual units.
  void slot;
  if (ADSENSE_CLIENT) return null;

  // Preview placeholder - only when no publisher ID is configured (local dev).
  // Shows where ad inventory lives without shipping empty boxes to production.
  return (
    <div className={`w-full ${className}`}>
      <div className="ad-slot rounded-sm" style={{ minHeight: size.h }}>
        <span className="text-xs tracking-widest">GOOGLE ADSENSE · {size.label}</span>
      </div>
    </div>
  );
}

/** Top-of-page leaderboard - house creative for Hacoco. */
export function HacocoBanner() {
  return (
    <div className="w-full border-b border-line bg-paper-2">
      <div className="mx-auto max-w-[1400px] px-4 py-2 sm:px-6 lg:px-10">
        <Link
          href={HACOCO_URL}
          target="_blank"
          rel="sponsored noopener noreferrer"
          className="group block"
          aria-label="Advertisement - Hacoco"
        >
          <div className="relative mx-auto w-full max-w-[970px] overflow-hidden rounded-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/ads/hacoco-leaderboard.svg"
              alt="Hacoco - Private Real Estate Capital"
              width={970}
              height={90}
              className="h-auto w-full transition-opacity group-hover:opacity-90"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}

/**
 * Side rail of direct-sold house banners (desktop only). Scrolls with the page
 * rather than sticking, so every banner in the stack is reachable no matter how
 * many we add. New banners: drop a creative in /public/ads and add a <RailAd/>.
 */
function RailAd({
  href,
  label,
  ratio,
  children,
}: {
  href: string;
  label: string;
  /** width / height of the ad slot, keeps space reserved (no layout shift) */
  ratio: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="sponsored noopener noreferrer"
      className="group block"
      aria-label={`Advertisement - ${label}`}
    >
      <div
        className="overflow-hidden rounded-sm shadow-sm transition-opacity group-hover:opacity-95"
        style={{ aspectRatio: ratio }}
      >
        {children}
      </div>
    </Link>
  );
}

export function AntialiasRail() {
  return (
    <aside className="hidden xl:block w-[300px] shrink-0 py-10">
      <div className="space-y-6">
        <RailAd
          href={ANTIALIAS_URL}
          label="The AntiAlias, a design & brand studio"
          ratio="300 / 600"
        >
          <AntialiasCreative />
        </RailAd>
        <RailAd
          href={NIKHAAR_URL}
          label="Nikhaar Foundation"
          ratio="300 / 420"
        >
          <NikhaarCreative />
        </RailAd>
      </div>
    </aside>
  );
}

/**
 * Mobile / tablet version of the side-rail banners. The rail is hidden below xl,
 * so this renders the same house banners inline near the foot of the page so
 * they still get seen on phones. Banners scale to the container.
 */
export function MobileRail() {
  return (
    <section className="xl:hidden mx-auto max-w-[1400px] px-4 pb-14 sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-[300px] flex-col items-stretch gap-6">
        <RailAd
          href={ANTIALIAS_URL}
          label="The AntiAlias, a design & brand studio"
          ratio="300 / 600"
        >
          <AntialiasCreative />
        </RailAd>
        <RailAd
          href={NIKHAAR_URL}
          label="Nikhaar Foundation"
          ratio="300 / 420"
        >
          <NikhaarCreative />
        </RailAd>
      </div>
    </section>
  );
}
