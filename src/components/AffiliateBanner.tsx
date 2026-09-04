import Image from "next/image";

/**
 * CJ affiliate display creatives.
 *
 * The artwork is served from our own domain rather than from CJ's image
 * host. CJ serves creatives from ftjcfx.com (which redirects to yceml.net),
 * and both are listed on EasyList, so every ad blocker (Brave Shields,
 * uBlock, AdBlock) drops the request and the banner renders as an empty
 * box with no console error to explain it. Self-hosting the advertiser's
 * own artwork keeps the creative pixel-identical while making it actually
 * visible.
 *
 * The click still goes through CJ's tracking URL, which is what earns the
 * commission. That is a top-level navigation rather than a sub-resource
 * request, so blockers do not interfere with it.
 *
 * Trade-off: CJ counts impressions by serving the image, so impression and
 * EPC figures in their reports will under-report. Clicks, actions and
 * commission are unaffected.
 */

const CJ_PID = "101861864";

function CjCreative({
  linkId,
  src,
  width,
  height,
  alt,
  className = "",
}: {
  linkId: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
}) {
  if (!linkId) return null;
  return (
    <a
      href={`https://www.tkqlhce.com/click-${CJ_PID}-${linkId}`}
      target="_blank"
      rel="sponsored nofollow noopener noreferrer"
      className={`group block overflow-hidden rounded-sm ${className}`}
      aria-label={`Advertisement - ${alt}`}
    >
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        className="block h-auto w-full transition-opacity group-hover:opacity-95"
      />
    </a>
  );
}

const ACCORPLUS_300x600 = process.env.NEXT_PUBLIC_CJ_ACCORPLUS_300X600 ?? "";
const ACCORPLUS_728x90 = process.env.NEXT_PUBLIC_CJ_ACCORPLUS_728X90 ?? "";

/** 300x600 skyscraper for the side rail and the mobile stack. */
export function AccorPlusRail({ className = "" }: { className?: string }) {
  return (
    <CjCreative
      linkId={ACCORPLUS_300x600}
      src="/ads/accorplus-300x600.jpg"
      width={300}
      height={600}
      alt="Accor Plus membership"
      className={className}
    />
  );
}

/** 728x90 leaderboard for in-feed placements. */
export function AccorPlusLeaderboard({ className = "" }: { className?: string }) {
  return (
    <div className={`flex justify-center ${className}`}>
      <div className="w-full max-w-[728px]">
        <CjCreative
          linkId={ACCORPLUS_728x90}
          src="/ads/accorplus-728x90.jpg"
          width={728}
          height={90}
          alt="Accor Plus membership"
        />
      </div>
    </div>
  );
}
