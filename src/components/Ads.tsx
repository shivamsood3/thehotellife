/**
 * Ad system for The Hotel Life
 * ------------------------------------------------------------------
 * Monetization surfaces:
 *   1. Google AdSense  — <AdSense /> responsive display units
 *   2. Hacoco          — <HacocoBanner /> top leaderboard (direct-sold)
 *   3. The AntiAlias   — <AntialiasRail /> side skyscraper (direct-sold)
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

const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "";
const HACOCO_URL = process.env.NEXT_PUBLIC_HACOCO_URL ?? "https://investwithhacoco.com";
const ANTIALIAS_URL = process.env.NEXT_PUBLIC_ANTIALIAS_URL ?? "https://theantialias.com";

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

  // Live mode — real AdSense unit.
  if (ADSENSE_CLIENT && slot) {
    return (
      <div className={`w-full ${className}`}>
        <ins
          className="adsbygoogle"
          style={{ display: "block", minHeight: size.h }}
          data-ad-client={ADSENSE_CLIENT}
          data-ad-slot={slot}
          data-ad-format={format === "in-article" ? "fluid" : "auto"}
          data-ad-layout={format === "in-article" ? "in-article" : undefined}
          data-full-width-responsive="true"
        />
      </div>
    );
  }

  // Preview placeholder — reserves the same vertical space (no CLS).
  return (
    <div className={`w-full ${className}`}>
      <div className="ad-slot rounded-sm" style={{ minHeight: size.h }}>
        <span className="text-xs tracking-widest">GOOGLE ADSENSE · {size.label}</span>
      </div>
    </div>
  );
}

/** Top-of-page leaderboard — house creative for Hacoco. */
export function HacocoBanner() {
  return (
    <div className="w-full border-b border-line bg-paper-2">
      <div className="mx-auto max-w-[1400px] px-4 py-2 sm:px-6 lg:px-10">
        <Link
          href={HACOCO_URL}
          target="_blank"
          rel="sponsored noopener noreferrer"
          className="group block"
          aria-label="Advertisement — Hacoco"
        >
          <div className="relative mx-auto w-full max-w-[970px] overflow-hidden rounded-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/ads/hacoco-leaderboard.svg"
              alt="Hacoco — Private Real Estate Capital"
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

/** Sticky side skyscraper — house creative for The AntiAlias. Desktop only. */
export function AntialiasRail() {
  return (
    <aside className="hidden xl:block w-[300px] shrink-0 py-10">
      <div className="sticky top-28 space-y-6">
        <Link
          href={ANTIALIAS_URL}
          target="_blank"
          rel="sponsored noopener noreferrer"
          className="group block"
          aria-label="Advertisement — The AntiAlias"
        >
          <div className="overflow-hidden rounded-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/ads/antialias-skyscraper.svg"
              alt="The AntiAlias — a design & brand studio"
              width={300}
              height={600}
              className="block h-auto w-[300px] transition-opacity group-hover:opacity-90"
            />
          </div>
        </Link>
        {/* Secondary AdSense rectangle below the direct-sold unit */}
        <AdSense format="rectangle" slot="0000000001" />
      </div>
    </aside>
  );
}
