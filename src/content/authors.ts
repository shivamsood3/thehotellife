export const editorialAuthors = [
  "Zinnia Thapar",
  "Shiv S",
  "Akash G",
  "AB",
] as const;

export type EditorialAuthor = (typeof editorialAuthors)[number];
export type HotelEditorialAuthor = EditorialAuthor | "Shivam Sood";

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
