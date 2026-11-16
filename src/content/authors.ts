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
  image?: string;
  imageAlt?: string;
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
    image: "/authors/zinnia-thapar.jpeg",
    imageAlt: "Portrait of Zinnia Thapar, editor and travel writer at The Hotel Life",
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
