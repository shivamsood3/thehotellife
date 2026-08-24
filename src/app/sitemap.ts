import type { MetadataRoute } from "next";
import { hotels } from "@/content/hotels";
import { guides } from "@/content/guides";
import { destinations } from "@/content/destinations";
import { articles } from "@/content/articles";

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.thehotellife.com"
).replace(/\/$/, "");

/**
 * lastmod must reflect when the *content* changed, not when the site was
 * built. Stamping every URL with build time tells Google all 107 pages
 * changed on every deploy, and Google responds by ignoring lastmod
 * altogether, which costs us crawl prioritisation. So derive it from each
 * piece's own review or publication date instead.
 */
function contentDate(value: string | undefined, fallback: string): Date {
  // Content dates look like "August 2026" or "March 2026".
  const parsed = value ? Date.parse(`1 ${value}`) : NaN;
  const date = new Date(Number.isNaN(parsed) ? fallback : parsed);
  // Some reviews carry a cover date slightly ahead of today. A lastmod in
  // the future is treated as untrustworthy, so never claim one.
  const today = new Date();
  return date > today ? today : date;
}

/** Stable date for evergreen pages whose copy rarely changes. */
const EVERGREEN = new Date("2026-08-24T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/hotels", priority: 0.9 },
    { path: "/destinations", priority: 0.8 },
    { path: "/guides", priority: 0.8 },
    { path: "/the-edit", priority: 0.8 },
    { path: "/about", priority: 0.5 },
    { path: "/how-we-review", priority: 0.5 },
    { path: "/advertise", priority: 0.4 },
    { path: "/newsletter", priority: 0.4 },
    { path: "/contact", priority: 0.4 },
    { path: "/privacy", priority: 0.2 },
    { path: "/terms", priority: 0.2 },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map(
    ({ path, priority }) => ({
      url: `${SITE_URL}${path}`,
      lastModified: EVERGREEN,
      changeFrequency: path === "" ? "daily" : "monthly",
      priority,
    }),
  );

  const hotelEntries: MetadataRoute.Sitemap = hotels.map((h) => ({
    url: `${SITE_URL}/hotels/${h.slug}`,
    lastModified: contentDate(h.year, "2026-08-01"),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const guideEntries: MetadataRoute.Sitemap = guides.map((g) => ({
    url: `${SITE_URL}/guides/${g.slug}`,
    lastModified: contentDate(g.date, "2026-08-01"),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const articleEntries: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${SITE_URL}/the-edit/${a.slug}`,
    lastModified: contentDate(a.date, "2026-08-01"),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const regionEntries: MetadataRoute.Sitemap = destinations.map((d) => ({
    url: `${SITE_URL}/destinations/${d.slug}`,
    lastModified: EVERGREEN,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    ...staticEntries,
    ...hotelEntries,
    ...guideEntries,
    ...articleEntries,
    ...regionEntries,
  ];
}
