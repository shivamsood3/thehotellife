import type { MetadataRoute } from "next";
import { hotels } from "@/content/hotels";
import { guides } from "@/content/guides";
import { destinations } from "@/content/destinations";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://thehotellife.com").replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths = [
    "",
    "/hotels",
    "/destinations",
    "/guides",
    "/the-edit",
    "/about",
    "/how-we-review",
    "/advertise",
    "/newsletter",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const hotelEntries: MetadataRoute.Sitemap = hotels.map((h) => ({
    url: `${SITE_URL}/hotels/${h.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const guideEntries: MetadataRoute.Sitemap = guides.map((g) => ({
    url: `${SITE_URL}/guides/${g.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const regionEntries: MetadataRoute.Sitemap = destinations.map((d) => ({
    url: `${SITE_URL}/destinations/${d.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...hotelEntries, ...guideEntries, ...regionEntries];
}
