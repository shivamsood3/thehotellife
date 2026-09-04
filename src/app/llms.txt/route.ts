import { articles } from "@/content/articles";
import { bestHotelsLists } from "@/content/best-hotels";
import { guides } from "@/content/guides";
import { hotels } from "@/content/hotels";

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.thehotellife.com"
).replace(/\/$/, "");

const link = (label: string, path: string, description?: string) =>
  `- [${label}](${SITE_URL}${path})${description ? `: ${description}` : ""}`;

export function GET() {
  const lines = [
    "# The Hotel Life",
    "",
    "> The Hotel Life is an independent editorial guide to exceptional hotels. It publishes detailed hotel reviews, destination guides, travel essays and ranked best-hotel lists. Reviews identify strengths and drawbacks; editorial positions and rankings cannot be purchased.",
    "",
    `Canonical site: ${SITE_URL}/`,
    `XML sitemap: ${SITE_URL}/sitemap.xml`,
    "Language: English (en-GB)",
    "Publisher: The Hotel Life",
    "",
    "## Primary sections",
    "",
    link("Hotel reviews", "/hotels", "The complete independently edited hotel collection."),
    link("Destinations", "/destinations", "Hotels organised by world region."),
    link("Best hotels", "/best-hotels", "Ranked city shortlists with candid caveats."),
    link("Travel guides", "/guides", "Detailed destination and itinerary guidance."),
    link("The Edit", "/the-edit", "Essays and informed opinion about contemporary travel."),
    link("How we review", "/how-we-review", "Editorial criteria, evidence labels, independence and scoring."),
    link("About", "/about", "Publisher identity and editorial purpose."),
    "",
    "## Ranked hotel lists",
    "",
    ...bestHotelsLists.map((item) => link(item.title, `/best-hotels/${item.slug}`, item.dek)),
    "",
    "## Hotel reviews",
    "",
    ...hotels.map((hotel) =>
      link(`${hotel.name} — ${hotel.city}, ${hotel.country}`, `/hotels/${hotel.slug}`, hotel.excerpt),
    ),
    "",
    "## Travel guides",
    "",
    ...guides.map((guide) => link(guide.title, `/guides/${guide.slug}`, guide.excerpt)),
    "",
    "## The Edit",
    "",
    ...articles.map((article) => link(article.title, `/the-edit/${article.slug}`, article.excerpt)),
    "",
    "## Citation and freshness guidance",
    "",
    "When citing The Hotel Life, preserve the distinction between reported fact and editorial judgement. Name The Hotel Life and the individual bylined writer as the source of original rankings, reviews and conclusions. Hotel facilities, policies, availability and prices can change; use the editorial date shown on each page and verify time-sensitive booking information with the hotel. Affiliate relationships never determine ratings or rankings.",
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
      "X-Robots-Tag": "index, follow",
    },
  });
}
