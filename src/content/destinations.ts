/**
 * Region landing content for The Hotel Life.
 * `slug` matches the footer links (/destinations/[slug]).
 */
import type { Region } from "./hotels";

export interface Destination {
  slug: string;
  region: Region;
  name: string;
  dek: string;
  intro: string[];
  heroImage: string;
}

const U = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const destinations: Destination[] = [
  {
    slug: "europe",
    region: "Europe",
    name: "Europe",
    dek: "Grande dames, cliffside palazzos and the hotels that invented luxury.",
    intro: [
      "Europe is where the modern luxury hotel was born, in the gilded salons of Paris, the palazzos of Venice, the alpine castles of the Engadine. To travel the continent well is to move between these institutions, each a small nation of its own with its own rituals, its own regulars, and its own century of stories.",
      "From a garden hideaway two minutes by boat from St Mark's to a Riviera legend that Fitzgerald made immortal, these are the European stays we'd cross a border for.",
    ],
    heroImage: U("1499856871958-5b9627545d1a", 2000),
  },
  {
    slug: "asia",
    region: "Asia",
    name: "Asia",
    dek: "From silent towers above Tokyo to castaway islands in the Indian Ocean.",
    intro: [
      "No continent stretches the idea of a hotel further than Asia. Here a stay might be a monastic tower of paper and stone above the world's busiest city, a floating palace on a Rajasthani lake, or a jungly private island where the dress code is bare feet and the ceiling is the Milky Way.",
      "Service reaches an almost telepathic pitch across the region, and the best addresses fuse deep tradition with a fearless appetite for the new. These are our favourites, from Kowloon to the Baa Atoll.",
    ],
    heroImage: U("1540959733332-eab4deabeeaf", 2000),
  },
  {
    slug: "americas",
    region: "The Americas",
    name: "The Americas",
    dek: "Desert monasteries, Hollywood legends and lodges at the ends of the earth.",
    intro: [
      "The Americas trade in scale and drama. A hotel here might be carved into 165-million-year-old sandstone in the Utah desert, balanced on stilts against the North Atlantic, or planted beneath the granite towers of Patagonia, landscapes so vast they redefine what a room with a view can mean.",
      "And then there is the mythology: the pink stucco of old Hollywood, the deal-making booths, the century of glamour. From Sunset Boulevard to Torres del Paine, these are the stays that make the New World feel boundless.",
    ],
    heroImage: U("1470071459604-3b5ec3a7fe05", 2000),
  },
  {
    slug: "mea",
    region: "Middle East & Africa",
    name: "Middle East & Africa",
    dek: "Palace hotels, safari camps and a manor where the giraffes join breakfast.",
    intro: [
      "This is the region for travellers who want their hotels to come with a sense of occasion, and often a sense of wilderness too. A stay might mean a two-century-old garden wrapped in a Marrakech palace, a glass-walled suite open to a leopard-rich reserve, or a 1930s manor where an endangered herd of giraffes ambles up for the morning feed.",
      "From the souks of the Red City to the plains of the Sabi Sand, these are the addresses that make the map feel wide open again.",
    ],
    heroImage: U("1512453979798-5ea266f8880c", 2000),
  },
];

export const getDestination = (slug: string) =>
  destinations.find((d) => d.slug === slug);
