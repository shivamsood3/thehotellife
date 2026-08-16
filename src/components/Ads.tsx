/**
 * Ad system for The Hotel Life
 * ------------------------------------------------------------------
 * Monetization surfaces:
 *   1. Google AdSense  — <AdSense /> responsive display units
 *   2. Hacoco          — <HacocoBanner /> top leaderboard (direct-sold)
 *   3. Antialias       — <AntialiasRail /> side skyscraper (direct-sold)
 *
 * To go live with AdSense:
 *   - set NEXT_PUBLIC_ADSENSE_CLIENT (e.g. "ca-pub-XXXXXXXXXXXXXXXX")
 *   - add the AdSense loader <Script> (see note in AdSense below)
 *   - create ad units in the AdSense dashboard and pass their slot IDs
 * Until a client ID is present, units render a styled placeholder so
 * the layout (and reserved space, to avoid layout shift) is preview-safe.
 *
 * Direct banners (Hacoco / Antialias): drop the creative image into
 * /public/ads and point `href` at the advertiser's landing page.
 */
import Image from "next/image";
import Link from "next/link";

const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "";

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

/** Top-of-page leaderboard sold directly to Hacoco. */
export function HacocoBanner() {
  const creative = "/ads/hacoco-leaderboard.jpg"; // drop creative here
  const href = "https://hacoco.example.com"; // advertiser landing page
  const hasCreative = false; // flip to true once creative is in /public/ads

  return (
    <div className="w-full border-b border-line bg-paper-2">
      <div className="mx-auto max-w-[1400px] px-4 py-2 sm:px-6 lg:px-10">
        <Link
          href={href}
          target="_blank"
          rel="sponsored noopener"
          className="group block"
          aria-label="Advertisement — Hacoco"
        >
          {hasCreative ? (
            <div className="relative mx-auto h-[90px] w-full max-w-[970px] overflow-hidden rounded-sm">
              <Image src={creative} alt="Hacoco" fill className="object-cover" sizes="970px" />
            </div>
          ) : (
            <div className="ad-slot mx-auto h-[90px] w-full max-w-[970px] rounded-sm">
              <span className="text-xs tracking-widest">
                HACOCO · TOP BANNER · 970 × 90
              </span>
            </div>
          )}
        </Link>
      </div>
    </div>
  );
}

/** Sticky side skyscraper sold directly to Antialias. Desktop only. */
export function AntialiasRail() {
  const creative = "/ads/antialias-skyscraper.jpg";
  const href = "https://antialias.example.com";
  const hasCreative = false;

  return (
    <aside className="hidden xl:block w-[300px] shrink-0 py-10">
      <div className="sticky top-28 space-y-6">
        <Link
          href={href}
          target="_blank"
          rel="sponsored noopener"
          className="group block"
          aria-label="Advertisement — Antialias"
        >
          {hasCreative ? (
            <div className="relative h-[600px] w-[300px] overflow-hidden rounded-sm">
              <Image src={creative} alt="Antialias" fill className="object-cover" sizes="300px" />
            </div>
          ) : (
            <div className="ad-slot h-[600px] w-[300px] rounded-sm">
              <span className="rotate-0 text-center text-xs leading-relaxed tracking-widest">
                ANTIALIAS
                <br />
                SIDE RAIL
                <br />
                300 × 600
              </span>
            </div>
          )}
        </Link>
        {/* Secondary AdSense rectangle below the direct-sold unit */}
        <AdSense format="rectangle" slot="0000000001" />
      </div>
    </aside>
  );
}
