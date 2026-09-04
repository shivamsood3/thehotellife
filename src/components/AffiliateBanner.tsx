/**
 * CJ affiliate display creatives.
 *
 * Unlike the house banners these are the advertiser's own artwork served
 * from CJ's image host, so they are plain <img> tags pointing at CJ rather
 * than components. CJ redirects the image host (ftjcfx.com -> yceml.net),
 * so both hosts must be present in the CSP img-src or the banner renders
 * blank with no console error to explain it.
 *
 * Set the link ids via env; a creative with no id configured renders
 * nothing, so this is safe to ship before the ids exist.
 */

const ACCORPLUS_300x600 = process.env.NEXT_PUBLIC_CJ_ACCORPLUS_300X600 ?? "";
const ACCORPLUS_728x90 = process.env.NEXT_PUBLIC_CJ_ACCORPLUS_728X90 ?? "";

function CjBanner({
  linkId,
  width,
  height,
  alt,
  className = "",
}: {
  linkId: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
}) {
  if (!linkId) return null;
  return (
    <a
      href={`https://www.tkqlhce.com/click-101861864-${linkId}`}
      target="_blank"
      rel="sponsored nofollow noopener noreferrer"
      className={`block ${className}`}
      aria-label={`Advertisement - ${alt}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://www.ftjcfx.com/image-101861864-${linkId}`}
        width={width}
        height={height}
        alt={alt}
        loading="lazy"
        className="block h-auto w-full"
      />
    </a>
  );
}

/** 300x600 skyscraper for the side rail and the mobile stack. */
export function AccorPlusRail({ className = "" }: { className?: string }) {
  return (
    <CjBanner
      linkId={ACCORPLUS_300x600}
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
        <CjBanner
          linkId={ACCORPLUS_728x90}
          width={728}
          height={90}
          alt="Accor Plus membership"
        />
      </div>
    </div>
  );
}
