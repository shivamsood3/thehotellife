/**
 * Structured data (schema.org JSON-LD).
 *
 * Search and answer engines read this to understand the entities on a page.
 * Valid markup can make a page eligible for supported search features, but
 * eligibility never guarantees that a particular rich result will appear.
 */

import type { Hotel } from "@/content/hotels";
import {
  authorPath,
  authorProfiles,
  isHotelEditorialAuthor,
  type HotelEditorialAuthor,
} from "@/content/authors";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.thehotellife.com";

const MONTHS: Record<string, string> = {
  January: "01", February: "02", March: "03", April: "04", May: "05", June: "06",
  July: "07", August: "08", September: "09", October: "10", November: "11", December: "12",
};

/** Turn editorial month labels into the ISO dates expected by search engines. */
export function editorialDateToISO(value: string) {
  const exact = value.match(/^([A-Za-z]+)\s+(\d{1,2}),\s+(\d{4})$/);
  if (exact && MONTHS[exact[1]]) {
    return `${exact[3]}-${MONTHS[exact[1]]}-${exact[2].padStart(2, "0")}`;
  }
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

function personId(name: HotelEditorialAuthor) {
  const url = `${SITE_URL}${authorPath(name)}`;
  return url.includes("#") ? url : `${url}#person`;
}

export function personSchema(name: HotelEditorialAuthor) {
  const profile = authorProfiles[name];
  const path = authorPath(name);
  return {
    "@type": "Person",
    "@id": personId(name),
    name,
    url: `${SITE_URL}${path}`,
    ...(profile?.role ? { jobTitle: profile.role } : {}),
    ...(profile?.bio ? { description: profile.bio } : {}),
    ...(profile?.image ? {
      image: {
        "@type": "ImageObject",
        url: `${SITE_URL}${profile.image}`,
        contentUrl: `${SITE_URL}${profile.image}`,
        caption: profile.imageAlt ?? `Portrait of ${profile.name}`,
        width: 348,
        height: 348,
      },
    } : {}),
    ...(profile?.sameAs?.length ? { sameAs: profile.sameAs } : {}),
    worksFor: { "@id": `${SITE_URL}/#organization` },
  };
}

export function authorProfileSchema(profile: {
  name: HotelEditorialAuthor;
  slug: string;
  role: string;
  bio: string;
  image?: string;
  imageAlt?: string;
  sameAs?: string[];
}) {
  const url = `${SITE_URL}/authors/${profile.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      personSchema(profile.name),
      {
        "@type": "ProfilePage",
        "@id": `${url}#profile-page`,
        url,
        name: `${profile.name} — ${profile.role}`,
        description: profile.bio,
        inLanguage: "en-GB",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        mainEntity: { "@id": `${url}#person` },
      },
    ],
  };
}

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
    reviewSlug?: string;
  }[];
}) {
  const pageUrl = `${SITE_URL}/best-hotels/${list.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#list`,
        name: list.title,
        description: list.dek,
        url: pageUrl,
        numberOfItems: list.hotels.length,
        dateModified: list.updatedISO,
        inLanguage: "en-GB",
        author: { "@id": personId("Zinnia Thapar") },
        publisher: { "@id": `${SITE_URL}/#organization` },
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        itemListElement: list.hotels.map((hotel) => ({
          "@type": "ListItem",
          position: hotel.rank,
          url: hotel.reviewSlug ? `${SITE_URL}/hotels/${hotel.reviewSlug}` : hotel.officialUrl,
          item: {
            "@type": "Hotel",
            "@id": hotel.reviewSlug
              ? `${SITE_URL}/hotels/${hotel.reviewSlug}#hotel`
              : `${pageUrl}#hotel-${hotel.rank}`,
            name: hotel.name,
            description: hotel.description,
            url: hotel.reviewSlug ? `${SITE_URL}/hotels/${hotel.reviewSlug}` : hotel.officialUrl,
            sameAs: [hotel.officialUrl],
            address: {
              "@type": "PostalAddress",
              addressLocality: list.destination,
              addressCountry: list.country,
            },
          },
        })),
      },
      personSchema("Zinnia Thapar"),
    ],
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
export function hotelReviewSchema(hotel: Hotel) {
  const image = hotel.heroImage.startsWith("http")
    ? hotel.heroImage
    : `${SITE_URL}${hotel.heroImage}`;
  const pageUrl = `${SITE_URL}/hotels/${hotel.slug}`;
  const hotelId = `${pageUrl}#hotel`;
  const reviewId = `${pageUrl}#review`;
  const author = hotel.author ?? "Zinnia Thapar";
  const officialUrl = hotel.chainUrl ?? (
    hotel.directBookingUrl && !/(booking\.com|hotels\.com|ipms247\.com)/i.test(hotel.directBookingUrl)
      ? hotel.directBookingUrl
      : undefined
  );
  const reviewBody = hotel.sections
    .flatMap((section) => section.body)
    .join("\n\n");
  const citations = hotel.factCheckSources?.map((source) => source.url);
  const brandNames: Partial<Record<NonNullable<Hotel["chain"]>, string>> = {
    accor: "Accor",
    ihg: "IHG Hotels & Resorts",
    marriott: "Marriott International",
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: `${hotel.name}, ${hotel.city}: Review`,
        description: hotel.excerpt,
        inLanguage: "en-GB",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        primaryImageOfPage: { "@id": `${pageUrl}#primaryimage` },
        mainEntity: { "@id": reviewId },
        about: { "@id": hotelId },
      },
      {
        "@type": "ImageObject",
        "@id": `${pageUrl}#primaryimage`,
        url: image,
        contentUrl: image,
        caption: hotel.imageAlt ?? `${hotel.name} in ${hotel.city}, ${hotel.country}`,
        representativeOfPage: true,
      },
      {
        "@type": "Hotel",
        "@id": hotelId,
        name: hotel.name,
        description: hotel.excerpt,
        url: pageUrl,
        ...(officialUrl ? { sameAs: [officialUrl] } : {}),
        image: { "@id": `${pageUrl}#primaryimage` },
        mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
        address: {
          "@type": "PostalAddress",
          addressLocality: hotel.city,
          addressCountry: hotel.country,
        },
        containedInPlace: {
          "@type": "City",
          name: hotel.city,
          containedInPlace: { "@type": "Country", name: hotel.country },
        },
        priceRange: `Indicative from USD ${hotel.priceFrom} per night; rates vary by date`,
        ...(hotel.chain ? { brand: { "@type": "Brand", name: brandNames[hotel.chain] } } : {}),
        additionalProperty: hotel.quickFacts.map((fact) => ({
          "@type": "PropertyValue",
          name: fact.label,
          value: fact.value,
        })),
        subjectOf: { "@id": reviewId },
        review: { "@id": reviewId },
      },
      {
        "@type": "Review",
        "@id": reviewId,
        url: pageUrl,
        name: `${hotel.name}, ${hotel.city}: The Hotel Life review`,
        headline: `${hotel.name}, ${hotel.city}: Review`,
        description: hotel.excerpt,
        mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
        inLanguage: "en-GB",
        datePublished: editorialDateToISO(hotel.year),
        dateModified: editorialDateToISO(hotel.factChecked ?? hotel.year),
        reviewBody,
        reviewAspect: "Room, sense of place, service, food and drink, facilities, and value",
        author: { "@id": personId(author) },
        publisher: { "@id": `${SITE_URL}/#organization` },
        ...(citations?.length ? { citation: citations } : {}),
        reviewRating: {
          "@type": "Rating",
          ratingValue: hotel.rating,
          bestRating: 5,
          worstRating: 1,
        },
        itemReviewed: { "@id": hotelId },
      },
      personSchema(author),
    ],
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
  const articleUrl = `${SITE_URL}${a.path}`;
  const knownAuthor = isHotelEditorialAuthor(a.author) ? a.author : undefined;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${articleUrl}#article`,
        url: articleUrl,
        headline: a.title,
        description: a.excerpt,
        image: { "@type": "ImageObject", url: image, caption: a.imageAlt ?? a.title },
        author: knownAuthor
          ? { "@id": personId(knownAuthor) }
          : { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: a.author },
        publisher: { "@id": `${SITE_URL}/#organization` },
        mainEntityOfPage: articleUrl,
        datePublished: editorialDateToISO(a.date),
        dateModified: editorialDateToISO(a.date),
        inLanguage: "en-GB",
      },
      ...(knownAuthor ? [personSchema(knownAuthor)] : []),
    ],
  };
}
