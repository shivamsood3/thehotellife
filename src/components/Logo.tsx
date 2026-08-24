"use client";

import { useId } from "react";

/**
 * The Hotel Life brand marks.
 *
 * The mark is a door hanger: a rounded tag with the hook keyhole cut out of
 * the top and a single accent dot near the foot. Geometry is taken directly
 * from the brand document (120 x 190 artboard), so proportions must not be
 * adjusted here; scale via the `height` prop instead.
 *
 * The keyhole is cut with an SVG mask, which needs a document-unique id.
 * useId gives one that is stable across server render and hydration, so
 * several marks can appear on the same page without colliding.
 */

export const BRAND = {
  plum: "#4A1D34",
  cyan: "#00A6DE",
  orange: "#F58220",
  linen: "#F7F5F4",
  white: "#FFFFFF",
} as const;

export function HangerMark({
  height = 60,
  markColor = BRAND.plum,
  dotColor = BRAND.cyan,
  className = "",
  title,
}: {
  height?: number;
  markColor?: string;
  dotColor?: string;
  className?: string;
  title?: string;
}) {
  const id = useId();
  const maskId = `thl-hanger-${id.replace(/:/g, "")}`;
  const width = Math.round((height * 120) / 190);

  return (
    <svg
      viewBox="0 0 120 190"
      width={width}
      height={height}
      className={className}
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      <defs>
        <mask id={maskId}>
          <rect x="0" y="0" width="120" height="190" fill="#000" />
          <rect x="2" y="2" width="116" height="186" rx="34" fill="#fff" />
          {/* hook opening: circle plus the slot running to the top edge */}
          <circle cx="60" cy="54" r="25" fill="#000" />
          <rect x="43" y="0" width="34" height="56" rx="17" fill="#000" />
        </mask>
      </defs>
      <rect
        x="0"
        y="0"
        width="120"
        height="190"
        fill={markColor}
        mask={`url(#${maskId})`}
      />
      <circle cx="60" cy="142" r="14" fill={dotColor} />
    </svg>
  );
}

/**
 * Wordmark. "The" is Outfit Light, "Hotel Life" is Outfit SemiBold, per the
 * brand rules. `oneLine` is the website header treatment; the stacked three
 * line version is the primary lockup.
 */
export function Wordmark({
  size = 30,
  oneLine = true,
  color,
  className = "",
}: {
  size?: number;
  oneLine?: boolean;
  color?: string;
  className?: string;
}) {
  if (oneLine) {
    return (
      <span
        className={`font-brand whitespace-nowrap leading-none ${className}`}
        style={{ fontSize: size, letterSpacing: "-0.01em", color }}
      >
        <span style={{ fontWeight: 300 }}>The </span>
        <span style={{ fontWeight: 600 }}>Hotel Life</span>
      </span>
    );
  }
  return (
    <span
      className={`font-brand flex flex-col ${className}`}
      style={{ fontSize: size, lineHeight: 0.98, color }}
    >
      <span style={{ fontWeight: 300, letterSpacing: "-0.01em" }}>The</span>
      <span style={{ fontWeight: 600, letterSpacing: "-0.02em" }}>Hotel</span>
      <span style={{ fontWeight: 600, letterSpacing: "-0.02em" }}>Life</span>
    </span>
  );
}

/** Header lockup: mark plus one-line wordmark. */
export function Logo({
  markHeight = 34,
  size = 22,
  markColor,
  dotColor,
  color,
  className = "",
}: {
  markHeight?: number;
  size?: number;
  markColor?: string;
  dotColor?: string;
  color?: string;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <HangerMark
        height={markHeight}
        markColor={markColor}
        dotColor={dotColor}
        title="The Hotel Life"
      />
      <Wordmark size={size} color={color} />
    </span>
  );
}
