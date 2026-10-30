/**
 * Ad system for The Hotel Life
 * ------------------------------------------------------------------
 * Every surface here is sold or placed by us: house creatives for related
 * brands and the AccorPlus affiliate banner. Programmatic display was
 * removed deliberately — at this site's rates an affiliate booking is worth
 * roughly $72 against about $0.02 of display revenue per visitor, and the
 * ad furniture was undercutting the editorial tone that earns the booking.
 *
 * Direct banners use code-native creatives. Override their click-through
 * URLs with the corresponding NEXT_PUBLIC_* environment variables.
 */
import Link from "next/link";
import { AiWiseCreative, AntialiasCreative, AntialiasLeaderboardCreative, AntialiasSquareCreative, HacocoCreative, HacocoRailCreative, HacocoSquareCreative, NikhaarCreative, NikhaarSquareCreative } from "@/components/HouseBanners";
import { AccorPlusRail, AccorPlusSquare } from "@/components/AffiliateBanner";

const HACOCO_URL = process.env.NEXT_PUBLIC_HACOCO_URL ?? "https://www.hacococapital.com";
const ANTIALIAS_URL = process.env.NEXT_PUBLIC_ANTIALIAS_URL ?? "https://theantialias.com";
const NIKHAAR_URL = process.env.NEXT_PUBLIC_NIKHAAR_URL ?? "https://www.nikhaarfoundation.org";
const AI_WISE_URL = process.env.NEXT_PUBLIC_AI_WISE_URL ?? "https://www.youtube.com/@the.aiwise";

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

/** Top-of-page direct partner leaderboard. */
export function PartnerLeaderboard({ brand }: { brand: "antialias" | "ai-wise" }) {
  const isAiWise = brand === "ai-wise";
  return (
    <div className="w-full border-b border-line bg-paper-2">
      <div className="mx-auto max-w-[1400px] px-4 py-2 sm:px-6 lg:px-10">
        <Link
          href={isAiWise ? AI_WISE_URL : ANTIALIAS_URL}
          target="_blank"
          rel="sponsored noopener noreferrer"
          className="group block"
          aria-label={`Advertisement - ${isAiWise ? "AI Wise" : "The AntiAlias"}`}
        >
          <div className="relative mx-auto h-[76px] w-full max-w-[970px] overflow-hidden rounded-sm transition-opacity group-hover:opacity-95 sm:h-[90px]">
            {isAiWise ? <AiWiseCreative /> : <AntialiasLeaderboardCreative />}
          </div>
        </Link>
      </div>
    </div>
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

export type EditorialSponsorBrand = "accor" | "hacoco" | "nikhaar";

function EditorialSponsor({ brand, mobile }: { brand: EditorialSponsorBrand; mobile: boolean }) {
  if (brand === "accor") return mobile ? <AccorPlusSquare /> : <AccorPlusRail />;

  if (brand === "hacoco") {
    return (
      <RailAd
        href={HACOCO_URL}
        label="Hacoco, private real estate capital"
        ratio={mobile ? "1 / 1" : "300 / 600"}
      >
        {mobile ? <HacocoSquareCreative /> : <HacocoRailCreative />}
      </RailAd>
    );
  }

  return (
    <RailAd
      href={NIKHAAR_URL}
      label="Nikhaar Foundation"
      ratio={mobile ? "1 / 1" : "300 / 420"}
    >
      {mobile ? <NikhaarSquareCreative /> : <NikhaarCreative />}
    </RailAd>
  );
}

export function EditorialSponsorRail({ brand }: { brand: EditorialSponsorBrand }) {
  return (
    <aside className="hidden w-[300px] shrink-0 py-10 xl:block" aria-label="Sponsored partner">
      <EditorialSponsor brand={brand} mobile={false} />
    </aside>
  );
}

export function EditorialSponsorMobile({ brand }: { brand: EditorialSponsorBrand }) {
  return (
    <aside
      className="mx-auto max-w-[1400px] px-4 pb-14 sm:px-6 lg:px-10 xl:hidden"
      aria-label="Sponsored partner"
    >
      <div className="mx-auto w-full max-w-[360px]">
        <EditorialSponsor brand={brand} mobile />
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
