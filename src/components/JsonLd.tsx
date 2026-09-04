/**
 * Structured data (schema.org JSON-LD).
 *
 * Google reads this directly to understand what a page is, and it drives
 * rich results: breadcrumb trails in the SERP, review stars, article
 * metadata and the site name / logo in the knowledge panel.
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.thehotellife.com";

const MONTHS: Record<string, string> = {
  January: "01", February: "02", March: "03", April: "04", May: "05", June: "06",
  July: "07", August: "08", September: "09", October: "10", November: "11", December: "12",
};

/** Turn editorial month labels into the ISO dates expected by search engines. */
export function editorialDateToISO(value: string) {
  const match = value.match(/^([A-Za-z]+)\s+(\d{4})$/);
  return match && MONTHS[match[1]] ? `${match[2]}-${MONTHS[match[1]]}-01` : value;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function JsonLd({ data }: { data: Record<string, any> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

/** Publisher identity, emitted once sitewide from the root layout. */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "NewsMediaOrganization"],
  "@id": `${SITE_URL}/#organization`,
  name: "The Hotel Life",
  alternateName: "THL",
  url: SITE_URL,
  description:
    "An independent editorial guide to the world's most extraordinary hotels.",
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
  alternateName: ["THL", "thehotellife.com"],
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

/** Visible FAQ content represented for search engines and answer engines. */
export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/** Ranked destination collection with each hotel described as an entity. */
export function bestHotelsListSchema(list: {
  slug: string;
  title: string;
  dek: string;
  destination: string;
  country: string;
  updated: string;
  updatedISO: string;
  hotels: {
    rank: number;
    name: string;
    description: string;
    officialUrl: string;
  }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE_URL}/best-hotels/${list.slug}#list`,
    name: list.title,
    description: list.dek,
    url: `${SITE_URL}/best-hotels/${list.slug}`,
    numberOfItems: list.hotels.length,
    dateModified: list.updatedISO,
    inLanguage: "en-GB",
    author: { "@type": "Person", name: "Zinnia Thapar" },
    publisher: { "@id": `${SITE_URL}/#organization` },
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: list.hotels.map((hotel) => ({
      "@type": "ListItem",
      position: hotel.rank,
      item: {
        "@type": "Hotel",
        name: hotel.name,
        description: hotel.description,
        url: hotel.officialUrl,
        address: {
          "@type": "PostalAddress",
          addressLocality: list.destination,
          addressCountry: list.country,
        },
      },
    })),
  };
}

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
  imageAlt?: string;
  year: string;
  author?: string;
}) {
  const image = hotel.heroImage.startsWith("http")
    ? hotel.heroImage
    : `${SITE_URL}${hotel.heroImage}`;
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    "@id": `${SITE_URL}/hotels/${hotel.slug}#review`,
    url: `${SITE_URL}/hotels/${hotel.slug}`,
    mainEntityOfPage: `${SITE_URL}/hotels/${hotel.slug}`,
    inLanguage: "en-GB",
    datePublished: editorialDateToISO(hotel.year),
    dateModified: editorialDateToISO(hotel.year),
    reviewBody: hotel.excerpt,
    author: { "@type": "Person", name: hotel.author ?? "Zinnia Thapar" },
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
      image: { "@type": "ImageObject", url: image, caption: hotel.imageAlt ?? hotel.name },
      address: {
        "@type": "PostalAddress",
        addressLocality: hotel.city,
        addressCountry: hotel.country,
      },
      priceRange: `Indicative from USD ${hotel.priceFrom} per night; rates vary by date`,
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
  imageAlt?: string;
}) {
  const image = a.image.startsWith("http") ? a.image : `${SITE_URL}${a.image}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.excerpt,
    image: { "@type": "ImageObject", url: image, caption: a.imageAlt ?? a.title },
    author: { "@type": "Person", name: a.author },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: `${SITE_URL}${a.path}`,
    datePublished: editorialDateToISO(a.date),
    dateModified: editorialDateToISO(a.date),
    inLanguage: "en-GB",
  };
}
