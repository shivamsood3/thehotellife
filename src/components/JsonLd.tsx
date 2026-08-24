/**
 * Structured data (schema.org JSON-LD).
 *
 * Google reads this directly to understand what a page is, and it drives
 * rich results: breadcrumb trails in the SERP, review stars, article
 * metadata and the site name / logo in the knowledge panel.
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.thehotellife.com";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function JsonLd({ data }: { data: Record<string, any> }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here: it is our own data, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Publisher identity, emitted once sitewide from the root layout. */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "The Hotel Life",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/icon-512.png`,
    width: 512,
    height: 512,
  },
  sameAs: ["https://www.instagram.com/thehotellifeofficial/"],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "The Hotel Life",
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-GB",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

/** Breadcrumb trail. Pass [{name, path}] from home downward. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

/**
 * A hotel review. Modelled as a Review of a Hotel so the rating is attached
 * to the thing being reviewed rather than to the page.
 */
export function hotelReviewSchema(hotel: {
  slug: string;
  name: string;
  city: string;
  country: string;
  excerpt: string;
  rating: number;
  priceFrom: number;
  heroImage: string;
  year: string;
}) {
  const image = hotel.heroImage.startsWith("http")
    ? hotel.heroImage
    : `${SITE_URL}${hotel.heroImage}`;
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    url: `${SITE_URL}/hotels/${hotel.slug}`,
    reviewBody: hotel.excerpt,
    author: { "@type": "Organization", name: "The Hotel Life" },
    publisher: { "@id": `${SITE_URL}/#organization` },
    reviewRating: {
      "@type": "Rating",
      ratingValue: hotel.rating,
      bestRating: 5,
      worstRating: 1,
    },
    itemReviewed: {
      "@type": "Hotel",
      name: hotel.name,
      image,
      address: {
        "@type": "PostalAddress",
        addressLocality: hotel.city,
        addressCountry: hotel.country,
      },
      priceRange: `From USD ${hotel.priceFrom} per night`,
    },
  };
}

/** A guide or essay. */
export function articleSchema(a: {
  path: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
}) {
  const image = a.image.startsWith("http") ? a.image : `${SITE_URL}${a.image}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.excerpt,
    image,
    author: { "@type": "Person", name: a.author },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: `${SITE_URL}${a.path}`,
    datePublished: a.date,
  };
}
