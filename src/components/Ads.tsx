/**
 * Ad system for The Hotel Life
 * ------------------------------------------------------------------
 * Monetization surfaces:
 *   1. Google AdSense  - <AdSense /> responsive display units
 *   2. Hacoco / AI Wise - <PartnerLeaderboard /> top leaderboard (direct-sold)
 *   3. The AntiAlias   - <AntialiasRail /> side skyscraper (direct-sold)
 *
 * To go live with AdSense:
 *   - set NEXT_PUBLIC_ADSENSE_CLIENT (e.g. "ca-pub-XXXXXXXXXXXXXXXX")
 *   - add the AdSense loader <Script> (see note in AdSense below)
 *   - create ad units in the AdSense dashboard and pass their slot IDs
 * Until a client ID is present, units render a styled placeholder so
 * the layout (and reserved space, to avoid layout shift) is preview-safe.
 *
 * Direct banners use code-native creatives. Override their click-through
 * URLs with the corresponding NEXT_PUBLIC_* environment variables.
 */
import Link from "next/link";
import { AiWiseCreative, AntialiasCreative, AntialiasSquareCreative, HacocoCreative, NikhaarCreative, NikhaarSquareCreative } from "@/components/HouseBanners";
import AdSenseUnit from "@/components/AdSenseUnit";
import { AccorPlusRail, AccorPlusSquare } from "@/components/AffiliateBanner";

const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "";
const HACOCO_URL = process.env.NEXT_PUBLIC_HACOCO_URL ?? "https://investwithhacoco.com";
const ANTIALIAS_URL = process.env.NEXT_PUBLIC_ANTIALIAS_URL ?? "https://theantialias.com";
const NIKHAAR_URL = process.env.NEXT_PUBLIC_NIKHAAR_URL ?? "https://www.nikhaarfoundation.org";
const AI_WISE_URL = process.env.NEXT_PUBLIC_AI_WISE_URL ?? "https://www.youtube.com/@the.aiwise";

/**
 * Real AdSense ad unit IDs, one per position type. Create the units in the
 * AdSense dashboard (Ads > By ad unit) and set these env vars; any position
 * left unset simply renders nothing and is left to Auto Ads.
 */
const SLOT_IDS: Record<NonNullable<AdSenseProps["format"]>, string> = {
  leaderboard: process.env.NEXT_PUBLIC_ADSENSE_SLOT_DISPLAY ?? "",
  rectangle: process.env.NEXT_PUBLIC_ADSENSE_SLOT_RECTANGLE ?? "",
  "in-article": process.env.NEXT_PUBLIC_ADSENSE_SLOT_IN_ARTICLE ?? "",
  responsive: process.env.NEXT_PUBLIC_ADSENSE_SLOT_DISPLAY ?? "",
};

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
  const configured = SLOT_IDS[format];

  // Live: a real ad unit exists for this position, so render it. These sit
  // alongside Auto Ads rather than replacing it; Google will not double up
  // on a position that already carries a manual unit.
  if (ADSENSE_CLIENT && configured) {
    return (
      <AdSenseUnit
        client={ADSENSE_CLIENT}
        slot={configured}
        format={format === "in-article" ? "fluid" : "auto"}
        layout={format === "in-article" ? "in-article" : undefined}
        minHeight={size.h}
        className={className}
      />
    );
  }

  // Publisher ID set but no unit created yet for this position: render
  // nothing rather than an empty box, and let Auto Ads decide.
  void slot;
  if (ADSENSE_CLIENT) return null;

  // Local dev with no publisher ID: show where inventory lives.
  return (
    <div className={`w-full ${className}`}>
      <div className="ad-slot rounded-sm" style={{ minHeight: size.h }}>
        <span className="text-xs tracking-widest">GOOGLE ADSENSE · {size.label}</span>
      </div>
    </div>
  );
}

/** Top-of-page direct partner leaderboard. */
export function PartnerLeaderboard({ brand }: { brand: "hacoco" | "ai-wise" }) {
  const isAiWise = brand === "ai-wise";
  return (
    <div className="w-full border-b border-line bg-paper-2">
      <div className="mx-auto max-w-[1400px] px-4 py-2 sm:px-6 lg:px-10">
        <Link
          href={isAiWise ? AI_WISE_URL : HACOCO_URL}
          target="_blank"
          rel="sponsored noopener noreferrer"
          className="group block"
          aria-label={`Advertisement - ${isAiWise ? "AI Wise" : "Hacoco"}`}
        >
          <div className="relative mx-auto h-[76px] w-full max-w-[970px] overflow-hidden rounded-sm transition-opacity group-hover:opacity-95 sm:h-[90px]">
            {isAiWise ? <AiWiseCreative /> : <HacocoCreative />}
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
        <AccorPlusRail />
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
      <div className="mx-auto flex w-full max-w-[360px] flex-col items-stretch gap-6">
        <AccorPlusSquare />
        <RailAd
          href={ANTIALIAS_URL}
          label="The AntiAlias, a design & brand studio"
          ratio="1 / 1"
        >
          <AntialiasSquareCreative />
        </RailAd>
        <RailAd
          href={NIKHAAR_URL}
          label="Nikhaar Foundation"
          ratio="1 / 1"
        >
          <NikhaarSquareCreative />
        </RailAd>
      </div>
    </section>
  );
}
