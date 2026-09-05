export const editorialAuthors = [
  "Zinnia Thapar",
  "Shiv S",
  "Akash G",
  "AB",
] as const;

export type EditorialAuthor = (typeof editorialAuthors)[number];
export type HotelEditorialAuthor = EditorialAuthor | "Shivam Sood";

export interface AuthorProfile {
  name: HotelEditorialAuthor;
  slug: string;
  role: string;
  bio: string;
  sameAs?: string[];
}

/**
 * First-party profiles are deliberately limited to information supplied by
 * the contributor. External profile URLs corroborate identity; they are not
 * used as image hosts or silently copied into biography text.
 */
export const authorProfiles: Partial<Record<HotelEditorialAuthor, AuthorProfile>> = {
  "Zinnia Thapar": {
    name: "Zinnia Thapar",
    slug: "zinnia-thapar",
    role: "Editor and Travel Writer",
    bio: "Zinnia Thapar is an editor and travel writer at The Hotel Life. She leads the current commissioning slate and writes personal hotel reviews, destination guides and editorial features with particular attention to design, service, food and a property's sense of place.",
    sameAs: ["https://www.linkedin.com/in/zinniathapar/"],
  },
};

export const authorAnchor = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export function authorPath(name: HotelEditorialAuthor): string {
  const profile = authorProfiles[name];
  return profile ? `/authors/${profile.slug}` : `/about#${authorAnchor(name)}`;
}

export function getAuthorProfileBySlug(slug: string) {
  return Object.values(authorProfiles).find((profile) => profile?.slug === slug);
}

export function isHotelEditorialAuthor(name: string): name is HotelEditorialAuthor {
  return name === "Shivam Sood" || editorialAuthors.includes(name as EditorialAuthor);
}

/**
 * A deliberate 10-story byline mix: Zinnia leads the commissioning slate,
 * followed by Shiv, Akash and AB. Keeping the assignment in one place makes
 * the balance visible and easy to change when a CMS replaces this content
 * store.
 */
const bylineRotation: EditorialAuthor[] = [
  "Zinnia Thapar",
  "Zinnia Thapar",
  "Zinnia Thapar",
  "Zinnia Thapar",
  "Zinnia Thapar",
  "Shiv S",
  "Shiv S",
  "Akash G",
  "Akash G",
  "AB",
];

export function editorialAuthorForIndex(index: number): EditorialAuthor {
  return bylineRotation[index % bylineRotation.length];
}
