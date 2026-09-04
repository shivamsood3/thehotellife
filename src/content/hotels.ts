/**
 * The Hotel Life content store.
 * Single source of truth for hotel guides. Swap this for a CMS or MDX later;
 * pages read only from these exported helpers.
 */
import { expansionHotels } from "./editorial/expansion-hotels";
import { legacyHotelAdditions } from "./editorial/legacy-enrichment";
import { editorialAuthorForIndex, type EditorialAuthor } from "./authors";

export type Region = "Europe" | "Asia" | "The Americas" | "Middle East & Africa";

export interface Section {
  heading?: string;
  body: string[]; // paragraphs
  /** Optional inline photograph rendered after this section's body. */
  image?: { src: string; caption?: string };
}

export interface Hotel {
  slug: string;
  name: string;
  city: string;
  country: string;
  region: Region;
  category: string; // e.g. "Grand Dame", "Urban Retreat"
  tagline: string;
  excerpt: string;
  rating: number; // out of 5
  priceFrom: number; // USD / night
  priceNote?: string;
  year: string; // review date
  /** Named editorial owner. Assigned centrally until author profiles move to a CMS. */
  author?: EditorialAuthor;
  heroImage: string;
  cardImage: string;
  quickFacts: { label: string; value: string }[];
  standout: string;
  sections: Section[];
  featured?: boolean;
  /** Optional official hotel booking engine for direct-only properties. */
  directBookingUrl?: string;
  /**
   * Hotel group, when the property belongs to one we hold a CJ affiliate
   * relationship with. Drives the secondary "book direct" link, routed to
   * the right regional advertiser. See src/lib/affiliate.ts.
   */
  chain?: "accor" | "ihg" | "marriott";
  /** The property's page on the chain's own site, for the chain link. */
  chainUrl?: string;
  /** Exact Hotels.com property URL, so that network can join the OTA split. */
  hotelsUrl?: string;
  /**
   * Optional exact Booking.com property URL for the affiliate "Check
   * Availability" link. If omitted, a Booking.com search for the hotel
   * name + city is used instead. See src/lib/affiliate.ts.
   */
  bookingUrl?: string;
}

const U = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const hotelCatalogue: Hotel[] = [
  ...expansionHotels,
  {
    slug: "aman-tokyo",
    name: "Aman Tokyo",
    city: "Tokyo",
    country: "Japan",
    region: "Asia",
    category: "Urban Sanctuary",
    tagline: "A vertical garden of silence above the world's busiest city",
    excerpt:
      "Thirty-three floors above Otemachi, Aman took the top of a corporate tower and made it the calmest room in Tokyo. It works because of everything it leaves out.",
    rating: 4.9,
    priceFrom: 1150,
    year: "August 2026",
    directBookingUrl: "https://www.aman.com/hotels/aman-tokyo",
    heroImage: U("1611892440504-42a792e24d32", 2000),
    cardImage: U("1611892440504-42a792e24d32", 1000),
    standout:
      "The 30-metre onsen bath, walled in black granite, with the Imperial Palace gardens laid out below it at dawn.",
    quickFacts: [
      { label: "Location", value: "Otemachi, Tokyo" },
      { label: "Rooms", value: "84 rooms & suites" },
      { label: "Opened", value: "2014" },
      { label: "Best for", value: "Design pilgrims, jet-lag recovery" },
    ],
    sections: [
      {
        body: [
          "You arrive expecting a hotel and walk into something closer to a shrine. The lift doors open on the 33rd floor and a lobby that is really one enormous room: a soaring atrium wrapped in washi paper and dark timber, with a genkan built on a scale you usually only see in temples. Beyond the glass, Tokyo just drops away.",
          "This was Aman's first city hotel, and a brand built on barefoot beach resorts had a hard question to answer. What does calm even mean in a place holding 37 million people? Its answer was height, materials you want to touch, and an almost obsessive amount of empty space.",
        ],
      },
      {
        heading: "The Rooms",
        body: [
          "Rooms start at 71 square metres, which in central Tokyo is a kind of decadence money usually can't buy. Each one is built around an engawa-style daybed pushed up to the window, and a deep furo tub set so you can lie back and watch the city glitter.",
          "The palette never changes: camphor wood, stone, paper, and one thin line of warm light along the ceiling. No gold taps, no chandeliers, nothing raising its voice. The luxury is all in what has been taken away.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "Aman Tokyo isn't for travellers who like their opulence loud. It's for the ones who know that the rarest thing in a huge city is quiet, and who will happily pay for a near-perfect version of it.",
        ],
      },
    ],
    featured: true,
  },
  {
    slug: "the-ritz-paris",
    name: "The Ritz Paris",
    city: "Paris",
    country: "France",
    region: "Europe",
    category: "Grande Dame",
    tagline: "The hotel that taught the world what luxury looks like",
    excerpt:
      "After a four-year restoration, the address on Place Vendôme is once again the most romantic (and most photographed) hotel in France.",
    rating: 4.8,
    priceFrom: 1400,
    year: "July 2026",
    directBookingUrl: "https://www.ritzparis.com/",
    heroImage: "/hotels/the-ritz-paris.jpg",
    cardImage: "/hotels/the-ritz-paris.jpg",
    standout:
      "A negroni at Bar Hemingway, where Colin Field still mixes the best martini in Europe under a ceiling of framed photographs.",
    quickFacts: [
      { label: "Location", value: "Place Vendôme, 1st" },
      { label: "Rooms", value: "142 rooms & suites" },
      { label: "Opened", value: "1898 · restored 2016" },
      { label: "Best for", value: "Romance, old-world grandeur" },
    ],
    sections: [
      {
        body: [
          "When César Ritz opened his hotel in 1898, he invented much of what we now take for granted. The ensuite bathroom. A telephone in every room. The idea that a hotel could be a stage as much as a shelter. More than a century later, the Ritz is still writing that script.",
          "The restoration that ran from 2012 to 2016 was so thorough that the hotel effectively closed and rebuilt itself behind its Louis XVI façade. What came back isn't a museum. It's softer, brighter and far more comfortable than the grande dame it replaced.",
        ],
      },
      {
        heading: "The Rooms",
        body: [
          "The Coco Chanel Suite, where the designer lived for 34 years, is the one everyone asks for. But even the standard rooms speak fluent Ritz: swagged curtains, marble bathrooms, and hand-embroidered linen turned down each night beside a Ritz-blue box of chocolates.",
          "The real showpiece is the Grand Jardin, a private courtyard garden where breakfast in warm weather feels borrowed from a film.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "Some hotels chase the future. The Ritz Paris perfects the past. If you want to understand where the whole idea of the luxury hotel came from, you stay here, and you stay at least two nights.",
        ],
      },
    ],
    featured: true,
  },
  {
    slug: "marina-bay-sands",
    bookingUrl: "https://www.booking.com/hotel/sg/marina-bay-sands.html",
    name: "Marina Bay Sands",
    city: "Singapore",
    country: "Singapore",
    region: "Asia",
    category: "Icon",
    tagline: "The infinity pool that rewrote a city's skyline",
    excerpt:
      "Three towers, a ship balanced on top, and the most famous rooftop pool on earth. It's a spectacle, and it earns the hype.",
    rating: 4.5,
    priceFrom: 520,
    year: "June 2026",
    heroImage: "/hotels/marina-bay-sands.jpg",
    cardImage: "/hotels/marina-bay-sands.jpg",
    standout:
      "Floating at the edge of the 150-metre SkyPark infinity pool at dusk, with the whole Singapore skyline lit up below your chin.",
    quickFacts: [
      { label: "Location", value: "Marina Bay" },
      { label: "Rooms", value: "2,561 rooms & suites" },
      { label: "Opened", value: "2010" },
      { label: "Best for", value: "First-timers, that photo" },
    ],
    sections: [
      {
        body: [
          "You know why you're here. It's the pool. The 57th-floor SkyPark infinity edge is one of the most recognisable images in modern travel, and no amount of cool detachment quite prepares you for the moment you actually swim out to it.",
          "There's more to the place than one photograph, though. Moshe Safdie's three-tower design has become the visual shorthand for Singapore itself, and the resort under the boat is a small city of restaurants, a casino, a mall with its own canal, and a museum shaped like a lotus.",
        ],
      },
      {
        heading: "The Rooms",
        body: [
          "Rooms are large, cool and relentlessly modern, and the higher floors hand you skyline views worth paying up for. With more than 2,500 rooms this was never going to feel like a boutique, but the operation is astonishingly smooth for its size.",
          "Book a Club room for SkyPark access without the day-guest crowds, and aim for a bay-facing tower.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "Purists will sniff at the scale and the casino. Everyone else will have the time of their lives. Some things are famous because they are actually worth it, and that pool is one of them.",
        ],
      },
    ],
    featured: true,
  },
  {
    slug: "burj-al-arab",
    name: "Burj Al Arab",
    city: "Dubai",
    country: "United Arab Emirates",
    region: "Middle East & Africa",
    category: "Statement",
    tagline: "The sail-shaped hotel that made Dubai a byword for excess",
    excerpt:
      "It calls itself seven stars. It isn't (there's no such thing), but the sheer gold-leafed audacity of the place is a destination in its own right.",
    rating: 4.4,
    priceFrom: 1600,
    year: "May 2026",
    bookingUrl: "https://www.booking.com/hotel/ae/burj-al-arab.html",
    heroImage: "/hotels/burj-al-arab.jpg",
    cardImage: "/hotels/burj-al-arab.jpg",
    standout:
      "Arriving by chauffeured Rolls-Royce across the private bridge, then riding up to a duplex suite with a butler on call around the clock.",
    quickFacts: [
      { label: "Location", value: "Jumeirah, Dubai" },
      { label: "Rooms", value: "202 duplex suites" },
      { label: "Opened", value: "1999" },
      { label: "Best for", value: "Maximalists, special occasions" },
    ],
    sections: [
      {
        body: [
          "There is no such thing as a subtle stay at the Burj Al Arab. Every room is a duplex suite, every guest gets a butler, and roughly 1,800 square metres of the interior is wrapped in 24-carat gold leaf. It's the physical embodiment of turn-of-the-millennium Dubai ambition, and it has aged into something almost nostalgic.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "As an exercise in restraint it fails completely, and gloriously. You don't come to the Burj for taste. You come for the spectacle, and on that it has never once let anyone down.",
        ],
      },
    ],
  },
  {
    slug: "la-mamounia",
    name: "La Mamounia",
    city: "Marrakech",
    country: "Morocco",
    region: "Middle East & Africa",
    category: "Palace Hotel",
    tagline: "Churchill's favourite hotel, still casting its spell",
    excerpt:
      "Behind the ramparts of the medina sits a 200-year-old garden and a hotel that has hosted everyone from Winston Churchill to the entire fashion set.",
    rating: 4.7,
    priceFrom: 750,
    year: "April 2026",
    directBookingUrl: "https://www.mamounia.com/",
    heroImage: "/hotels/la-mamounia.jpg",
    cardImage: "/hotels/la-mamounia.jpg",
    standout:
      "Mint tea in the old gardens at golden hour, orange blossom in the air and the Koutoubia minaret glowing pink beyond the palms.",
    quickFacts: [
      { label: "Location", value: "Medina, Marrakech" },
      { label: "Rooms", value: "209 rooms, suites & riads" },
      { label: "Opened", value: "1923" },
      { label: "Best for", value: "Gardens, romance, craft" },
    ],
    sections: [
      {
        body: [
          "Churchill painted here. He called it \"the most lovely spot in the whole world,\" and a century of guests have struggled to disagree. La Mamounia is a showcase of Moroccan craft, from the zellige tilework to the carved cedar and the hand-poured tadelakt plaster that artisans applied over years rather than months.",
          "The gardens are the real star. Nearly seven hectares of olive groves, rose beds and hundred-year-old palms, laid out two centuries ago as a wedding gift from a sultan to his son.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "Few hotels marry grandeur and sense of place this completely. La Mamounia never feels imported into Marrakech. It feels like the city's beating heart, dressed in its very best.",
        ],
      },
    ],
    featured: true,
  },
  {
    slug: "the-plaza-new-york",
    name: "The Plaza",
    city: "New York",
    country: "United States",
    region: "The Americas",
    category: "Grande Dame",
    tagline: "The château on Central Park that Eloise made famous",
    excerpt:
      "A French Renaissance landmark at Fifth and 59th: equal parts fairy tale, film set, and living piece of New York mythology.",
    rating: 4.3,
    priceFrom: 895,
    year: "March 2026",
    bookingUrl: "https://www.booking.com/hotel/us/the-plaza.html",
    heroImage: "/hotels/the-plaza-new-york.jpg",
    cardImage: "/hotels/the-plaza-new-york.jpg",
    standout:
      "Afternoon tea in the Palm Court under the restored stained-glass ceiling, a New York ritual that has survived a full century.",
    quickFacts: [
      { label: "Location", value: "Fifth Ave & Central Park" },
      { label: "Rooms", value: "282 rooms & suites" },
      { label: "Opened", value: "1907" },
      { label: "Best for", value: "Park views, classic New York" },
    ],
    sections: [
      {
        body: [
          "Since 1907 The Plaza has been the backdrop to New York's biggest moments, real and imagined, from the Beatles' first American press conference to Eloise's fictional rampages down its corridors. To stay here is to check into the city's collective memory.",
          "A gut renovation in the 2000s restored the mosaic floors and 24-carat gold-plated fixtures while quietly modernising everything behind the walls. The result is a hotel that photographs like 1907 and runs like today.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "It's touristy, and it knows it. But ask for a room facing Central Park, take tea in the Palm Court, and you'll understand why this particular château has stayed famous for well over a century.",
        ],
      },
    ],
  },
  {
    slug: "belmond-hotel-caruso",
    bookingUrl: "https://www.booking.com/hotel/it/caruso.html",
    name: "Belmond Hotel Caruso",
    city: "Ravello",
    country: "Italy",
    region: "Europe",
    category: "Cliffside Retreat",
    tagline: "An 11th-century palazzo suspended over the Amalfi Coast",
    excerpt:
      "A thousand feet above the Tyrrhenian Sea, a former bishop's palace holds the most photographed infinity pool in Italy, and a view that ruins you for anywhere else.",
    rating: 4.9,
    priceFrom: 1300,
    year: "August 2026",
    heroImage: U("1582719478250-c89cae4dc85b", 2000),
    cardImage: U("1582719478250-c89cae4dc85b", 1000),
    standout:
      "Swimming to the edge of the infinity pool as it seems to pour straight off the cliff into the blue of the coastline below.",
    quickFacts: [
      { label: "Location", value: "Ravello, Amalfi Coast" },
      { label: "Rooms", value: "50 rooms & suites" },
      { label: "Opened", value: "restored 2005" },
      { label: "Best for", value: "Honeymoons, that view" },
    ],
    sections: [
      {
        body: [
          "Ravello sits high above the tourist crush of the Amalfi Coast, and the Caruso sits highest of all. It's an 11th-century palazzo whose frescoed ceilings and marble columns were painstakingly recovered over a restoration that took the better part of a decade.",
          "The infinity pool, cantilevered over a thousand feet of sheer drop, has become one of the defining images of Italian summer. It deserves the fame. Few man-made spaces frame the natural world so perfectly.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "This is the coast at its most rarefied, above the day-trippers, above the traffic, above almost everything. Come for a honeymoon, or come to propose. Either way you'll leave changed.",
        ],
      },
    ],
    featured: true,
  },
  {
    slug: "singita-sabi-sand",
    name: "Singita Sabi Sand",
    city: "Kruger",
    country: "South Africa",
    region: "Middle East & Africa",
    category: "Safari Lodge",
    tagline: "Big Five luxury on the edge of the Kruger wilderness",
    excerpt:
      "Conservation-first safari at its most refined: glass-walled suites, a private reserve full of leopard, and service that feels almost telepathic.",
    rating: 4.9,
    priceFrom: 2100,
    priceNote: "all-inclusive",
    year: "July 2026",
    directBookingUrl: "https://singita.com/region-sabi-sand/",
    heroImage: "/hotels/singita-sabi-sand.jpg",
    cardImage: "/hotels/singita-sabi-sand.jpg",
    standout:
      "A leopard sighting at dawn from an open Land Cruiser, then breakfast in the bush as the reserve wakes up around you.",
    quickFacts: [
      { label: "Location", value: "Sabi Sand, Kruger" },
      { label: "Rooms", value: "Intimate lodges & suites" },
      { label: "Opened", value: "1993" },
      { label: "Best for", value: "Wildlife, conservation travel" },
    ],
    sections: [
      {
        body: [
          "Singita built its reputation on a simple idea: that luxury and conservation can work together rather than against each other. Every rate helps fund the protection of hundreds of thousands of hectares of African wilderness, and the guiding is among the best on the continent.",
          "The suites are glass, stone and canvas, open to the bush so the line between inside and out all but disappears. You fall asleep to the sound of the reserve and wake to it too.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "A safari here isn't cheap, and it shouldn't be. This is travel with a conscience and a view, and proof that the most meaningful luxury of all might be a wild place kept wild.",
        ],
      },
    ],
  },
  {
    slug: "hotel-cipriani-venice",
    bookingUrl: "https://www.booking.com/hotel/it/cipriani-venezia.html",
    name: "Belmond Hotel Cipriani",
    city: "Venice",
    country: "Italy",
    region: "Europe",
    category: "Island Retreat",
    tagline: "A garden hideaway two minutes by boat from St Mark's, and a world away",
    excerpt:
      "On the tip of Giudecca, the Cipriani offers the one thing Venice never can: space. An Olympic-length pool, Casanova's old garden, and no crowds at breakfast.",
    rating: 4.8,
    priceFrom: 1450,
    year: "August 2026",
    heroImage: "/hotels/hotel-cipriani-venice.jpg",
    cardImage: "/hotels/hotel-cipriani-venice.jpg",
    standout:
      "Crossing the lagoon at dusk on the hotel's private teak launch, the domes of San Marco turning gold as the city lights come up behind you.",
    quickFacts: [
      { label: "Location", value: "Giudecca, Venice" },
      { label: "Rooms", value: "96 rooms & suites" },
      { label: "Opened", value: "1958" },
      { label: "Best for", value: "Space, gardens, arriving by boat" },
    ],
    sections: [
      {
        body: [
          "Venice is a masterpiece you have to share with forty thousand day-trippers. The Cipriani's trick is that it lifts you out of all of it without taking you out of the city. The hotel's own motoscafo collects you at St Mark's and, ninety seconds later, sets you down in three acres of walled gardens where the loudest thing you'll hear is birdsong.",
          "Giuseppe Cipriani, the man who invented the Bellini and the carpaccio over at Harry's Bar, opened this place in 1958 as a refuge for people who could go anywhere and mostly wanted not to be bothered. Sixty-five years on, that is still the whole idea.",
        ],
      },
      {
        heading: "The Rooms",
        body: [
          "Interiors are Venetian in the grown-up sense, all Fortuny fabrics, Murano glass and marble bathrooms, and none of it tips into pastiche. The suites in the Palazzo Vendramin annex come with a butler and a private terrace over the water that is, on its own, worth the trip.",
          "The real luxury here is horizontal. The saltwater pool is one of the largest in Italy, reputedly built the wrong length by mistake, and nobody has ever once complained.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "If it's your first time in Venice, stay in the thick of it. If it's your fourth, and you've earned the right to watch the circus from a garden across the water, this is the only address that matters.",
        ],
      },
    ],
    featured: true,
  },
  {
    slug: "claridges-london",
    bookingUrl: "https://www.booking.com/hotel/gb/claridge-s.html",
    name: "Claridge's",
    city: "London",
    country: "United Kingdom",
    region: "Europe",
    category: "Grande Dame",
    tagline: "The Art Deco drawing room of Mayfair, and Britain's unofficial second palace",
    excerpt:
      "Royalty checks in under pseudonyms, the foyer pours the best afternoon tea in London, and the service runs like a Swiss watch in white gloves.",
    rating: 4.8,
    priceFrom: 990,
    year: "July 2026",
    heroImage: "/hotels/claridges-london.jpg",
    cardImage: "/hotels/claridges-london.jpg",
    standout:
      "Tea beneath the shimmering Chihuly chandelier in the foyer, a pianist playing, while three generations of a family celebrate something they won't explain.",
    quickFacts: [
      { label: "Location", value: "Mayfair, London" },
      { label: "Rooms", value: "190 rooms & suites" },
      { label: "Opened", value: "1856" },
      { label: "Best for", value: "Afternoon tea, quiet grandeur" },
    ],
    sections: [
      {
        body: [
          "During the Second World War so many exiled monarchs sheltered at Claridge's that a Churchill aide reportedly asked to speak to \"the King\" and had to be asked which one. That sense of the hotel as a neutral embassy for the very grand has never quite faded.",
          "The building is a study in restrained Art Deco, all sweeping black-and-white marble, silver and mirror, and the service is the finest in London: attentive without hovering, warm without being familiar. Staff remember your name, your drink, and the fact that you don't like to be spoken to before coffee.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "Some London hotels are flashier, and several are newer. None feels quite so much like being let in on a very old, very civilised secret. Book the tea even if you don't stay.",
        ],
      },
    ],
  },
  {
    slug: "hotel-du-cap-eden-roc",
    name: "Hôtel du Cap-Eden-Roc",
    city: "Antibes",
    country: "France",
    region: "Europe",
    category: "Riviera Legend",
    tagline: "The Riviera fantasy that Fitzgerald wrote and Hollywood never stopped booking",
    excerpt:
      "Twenty-two acres of pine and palm on the tip of Cap d'Antibes, a seawater pool blasted into the rock, and a cash-only history of impossible glamour.",
    rating: 4.7,
    priceFrom: 1800,
    priceNote: "high season",
    year: "June 2026",
    directBookingUrl: "https://www.oetkercollection.com/hotels/hotel-du-cap-eden-roc/",
    heroImage: "/hotels/hotel-du-cap-eden-roc.jpg",
    cardImage: "/hotels/hotel-du-cap-eden-roc.jpg",
    standout:
      "A negroni on the Eden-Roc terrace at the exact hour the Mediterranean turns from turquoise to ink, cicadas roaring in the pines behind you.",
    quickFacts: [
      { label: "Location", value: "Cap d'Antibes" },
      { label: "Rooms", value: "117 rooms, suites & villas" },
      { label: "Opened", value: "1870" },
      { label: "Best for", value: "Old-money glamour, the pool" },
    ],
    sections: [
      {
        body: [
          "F. Scott Fitzgerald set Tender Is the Night here, thinly disguised as the Hôtel des Étrangers, and the place has been trading on that mythology, and living up to it, ever since. During the Cannes festival it fills with a wattage of celebrity that leaves the paparazzi weeping at the gates.",
          "For decades it famously refused all credit cards, a policy that filtered its clientele more effectively than any velvet rope. The pool, carved out of the white rock above the sea, is still one of the most beautiful man-made things on the whole coast.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "It's absurdly expensive and gloriously unbothered about it. This is the Riviera as it lives in the imagination, and somehow the reality still delivers.",
        ],
      },
    ],
    featured: true,
  },
  {
    slug: "badrutts-palace-st-moritz",
    bookingUrl: "https://www.booking.com/hotel/ch/badrutt-s-palace-st-moritz.html",
    name: "Badrutt's Palace",
    city: "St. Moritz",
    country: "Switzerland",
    region: "Europe",
    category: "Alpine Grande Dame",
    tagline: "The turreted castle that invented the winter holiday",
    excerpt:
      "A fairy-tale silhouette above a frozen lake, where the Engadine light, the Cresta Run and 130 years of aristocratic après-ski all still hold court.",
    rating: 4.6,
    priceFrom: 1250,
    year: "January 2026",
    heroImage: "/hotels/badrutts-palace-st-moritz.jpg",
    cardImage: "/hotels/badrutts-palace-st-moritz.jpg",
    standout:
      "Skiing back to the door as the alpenglow turns the Engadine peaks rose-pink, then thawing out by the fire in the Renaissance Bar with a glass of something Swiss and expensive.",
    quickFacts: [
      { label: "Location", value: "St. Moritz, Engadine" },
      { label: "Rooms", value: "155 rooms & suites" },
      { label: "Opened", value: "1896" },
      { label: "Best for", value: "Winter sport, mountain glamour" },
    ],
    sections: [
      {
        body: [
          "Johannes Badrutt is the man who, so the story goes, bet a group of English summer guests in 1864 that St Moritz was even lovelier under snow, and offered to cover their travel if he was wrong. He won. In the process he more or less invented alpine winter tourism, and his family's Palace has presided over it ever since.",
          "The hotel is unapologetically grand: a stone tower, wood-panelled halls, and that extraordinary Engadine light pouring off the frozen lake. There's a formality here that has mostly vanished elsewhere, and in this setting it feels not stuffy but right.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "This is the mountain holiday at its most storied. Come for the skiing. Stay for the sense that you've stepped into a world that decided, sometime around 1910, that it was perfect exactly as it was.",
        ],
      },
    ],
  },
  {
    slug: "peninsula-hong-kong",
    bookingUrl: "https://www.booking.com/hotel/hk/the-peninsula-hong-kong.html",
    name: "The Peninsula Hong Kong",
    city: "Hong Kong",
    country: "Hong Kong SAR",
    region: "Asia",
    category: "Grande Dame",
    tagline: "The grande dame of the Far East, with a fleet of green Rolls-Royces to prove it",
    excerpt:
      "Since 1928 the Peninsula has been Kowloon's answer to the grand hotels of Europe: a colonnaded lobby, harbour views, and a helipad on the roof.",
    rating: 4.7,
    priceFrom: 780,
    year: "May 2026",
    heroImage: "/hotels/peninsula-hong-kong.jpg",
    cardImage: "/hotels/peninsula-hong-kong.jpg",
    standout:
      "Afternoon tea in the gilded lobby as a string quartet plays on the mezzanine, a colonial-era ritual Hong Kong has somehow kept alive through everything.",
    quickFacts: [
      { label: "Location", value: "Tsim Sha Tsui, Kowloon" },
      { label: "Rooms", value: "300 rooms & suites" },
      { label: "Opened", value: "1928" },
      { label: "Best for", value: "Harbour views, classic service" },
    ],
    sections: [
      {
        body: [
          "The Peninsula was built to receive passengers stepping off the Orient Express's eastern connections, and it still carries that whiff of golden-age travel: fourteen custom Rolls-Royce Phantoms in Peninsula green, page boys in white, the sheer ceremony of arrival.",
          "A modern tower added harbour-facing rooms with views across to the Hong Kong Island skyline that are, at night, close to overwhelming. The technology is quietly everywhere too, from nail dryers in the bathrooms to tablets that run every drape and light, and a rooftop helipad for the impatient.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "A lesson in how a historic hotel stays relevant without losing its soul. The tea is a tourist ritual. The harbour-view suites are the real reason to book.",
        ],
      },
    ],
  },
  {
    slug: "soneva-fushi-maldives",
    bookingUrl: "https://www.booking.com/hotel/mv/soneva-fushi.html",
    name: "Soneva Fushi",
    city: "Baa Atoll",
    country: "Maldives",
    region: "Asia",
    category: "Barefoot Luxury",
    tagline: "The original 'no news, no shoes' castaway fantasy, with a telescope on the roof",
    excerpt:
      "The resort that taught the Maldives that barefoot could mean luxurious. Vast Robinson Crusoe villas, an open-air cinema, and some of the best diving in the Indian Ocean.",
    rating: 4.9,
    priceFrom: 2200,
    priceNote: "villa, full board",
    year: "April 2026",
    heroImage: "/hotels/soneva-fushi-maldives.jpg",
    cardImage: "/hotels/soneva-fushi-maldives.jpg",
    standout:
      "Snorkelling straight off your villa's stretch of house reef at dawn, then eating breakfast with your feet in the sand while a manta ray glides past the jetty.",
    quickFacts: [
      { label: "Location", value: "Kunfunadhoo, Baa Atoll" },
      { label: "Villas", value: "71 villas" },
      { label: "Opened", value: "1995" },
      { label: "Best for", value: "Families, divers, true escape" },
    ],
    sections: [
      {
        body: [
          "When Sonu and Eva Shivdasani opened Soneva Fushi on a jungly, uninhabited island in 1995, they turned the rules of tropical luxury upside down. No marble, no shoes, no showing off. What they built instead were enormous villas of timber and thatch, hidden in the foliage, each with a private pool and a garden you could genuinely get lost in.",
          "Three decades on it's still the benchmark, and one of the most quietly sustainable resorts in the region. Its own water, its own vegetables, a serious waste-to-wealth programme, and a resident astronomer for the rooftop observatory.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "Overwater villas photograph better, but nothing beats a private jungle that happens to open onto a coral reef. This is the Maldives with substance as well as sand.",
        ],
      },
    ],
    featured: true,
  },
  {
    slug: "oberoi-udaivilas-udaipur",
    bookingUrl: "https://www.booking.com/hotel/in/the-oberoi-udaivilas.html",
    name: "The Oberoi Udaivilas",
    city: "Udaipur",
    country: "India",
    region: "Asia",
    category: "Palace Hotel",
    tagline: "A modern palace on Lake Pichola that out-palaces the actual palaces",
    excerpt:
      "Built the way a maharana's residence would have been, with domes, courtyards and reflecting pools mirrored in the lake. Regularly voted among the finest hotels on earth.",
    rating: 4.9,
    priceFrom: 900,
    year: "March 2026",
    heroImage: "/hotels/oberoi-udaivilas-udaipur.jpg",
    cardImage: "/hotels/oberoi-udaivilas-udaipur.jpg",
    standout:
      "Being rowed across Lake Pichola to dinner as the City Palace lights come on and the domes of Udaivilas glow behind you like something out of a dream.",
    quickFacts: [
      { label: "Location", value: "Lake Pichola, Udaipur" },
      { label: "Rooms", value: "83 rooms & suites" },
      { label: "Opened", value: "2002" },
      { label: "Best for", value: "Romance, Rajasthani grandeur" },
    ],
    sections: [
      {
        body: [
          "Udaipur is India's most romantic city, a place of white palaces floating on lakes, and the Oberoi group had the confidence to add to that skyline rather than simply convert an old building. Udaivilas was designed from scratch in the tradition of a Mewar palace: 30 acres of domes, frescoed courtyards, and a private lakefront that once belonged to the royal hunting grounds.",
          "It should feel like a pastiche. Instead, thanks to real craftsmanship, from the hand-laid stone to the gold-leaf ceilings and semi-precious inlay, it feels like the genuine article, only with air-conditioning and a spa.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "Proof that a new hotel, built with enough artistry and respect, can earn a place among the icons. For a honeymoon, there may be no more beautiful room on the subcontinent.",
        ],
      },
    ],
    featured: true,
  },
  {
    slug: "park-hyatt-tokyo",
    bookingUrl: "https://www.booking.com/hotel/jp/park-hyatt-tokyo.html",
    name: "Park Hyatt Tokyo",
    city: "Tokyo",
    country: "Japan",
    region: "Asia",
    category: "Urban Retreat",
    tagline: "The Lost in Translation hotel, floating above Shinjuku in a haze of jazz and cloud",
    excerpt:
      "Fifty-two floors up, the New York Bar still swings, the pool still floats under a glass vault, and the whole place still hums with cinematic melancholy.",
    rating: 4.6,
    priceFrom: 720,
    year: "February 2026",
    heroImage: "/hotels/park-hyatt-tokyo.jpg",
    cardImage: "/hotels/park-hyatt-tokyo.jpg",
    standout:
      "A Suntory whisky in the New York Bar as the pianist plays and Tokyo spreads out fifty-two floors below, the exact frame Sofia Coppola made famous.",
    quickFacts: [
      { label: "Location", value: "Shinjuku, Tokyo" },
      { label: "Rooms", value: "155 rooms & suites" },
      { label: "Opened", value: "1994" },
      { label: "Best for", value: "Cinephiles, city views, jazz" },
    ],
    sections: [
      {
        body: [
          "For a whole generation of travellers this hotel is inseparable from a film. Lost in Translation turned the Park Hyatt's top floors, the cloud-level pool, the wood-lined library, the New York Bar with its wall of glass, into a mood as much as a place: jet-lagged, sleepless, quietly romantic.",
          "What's striking is how well it has aged. Where newer Tokyo hotels shout, the Park Hyatt murmurs, in warm timber and soft light. The rooms are huge by Tokyo standards, with deep tubs and windows that frame Mount Fuji on clear winter mornings.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "It no longer holds the title of Tokyo's most cutting-edge hotel, and it isn't trying to. What it offers is something rarer, which is atmosphere, and few hotels anywhere have more of it.",
        ],
      },
    ],
  },
  {
    slug: "amangiri-utah",
    name: "Amangiri",
    city: "Canyon Point",
    country: "United States",
    region: "The Americas",
    category: "Desert Retreat",
    tagline: "A concrete monastery hidden in the folds of the Utah desert",
    excerpt:
      "Aman built into the raw geology of the Colorado Plateau: a minimalist compound where a central pool curls around a 165-million-year-old rock.",
    rating: 4.9,
    priceFrom: 3400,
    priceNote: "suite",
    year: "August 2026",
    directBookingUrl: "https://www.aman.com/resorts/amangiri",
    heroImage: "/hotels/amangiri-utah.jpg",
    cardImage: "/hotels/amangiri-utah.jpg",
    standout:
      "Floating in the central pool at dawn, wrapped around a wall of ancient sandstone, with nothing but silence and 900 square miles of empty desert in every direction.",
    quickFacts: [
      { label: "Location", value: "Canyon Point, Utah" },
      { label: "Suites", value: "34 suites & pavilions" },
      { label: "Opened", value: "2009" },
      { label: "Best for", value: "Solitude, design, big skies" },
    ],
    sections: [
      {
        body: [
          "Amangiri is less a hotel than a piece of land art you can sleep inside. The architects poured board-formed concrete in the exact grey-gold of the surrounding rock, so the building looks quarried rather than built. From a distance you can barely pick it out.",
          "The suites are monastic in the best way: vast, spare, and angled so the desert becomes the only decoration. There are no televisions fighting the view, and the view would win anyway. Days go on slot-canyon hikes, on Lake Powell, or on doing gloriously nothing at all.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "The price is eye-watering and the experience very nearly justifies it. If you want to understand what luxury minimalism actually means, this remote patch of Utah is where you learn it.",
        ],
      },
    ],
    featured: true,
  },
  {
    slug: "beverly-hills-hotel",
    name: "The Beverly Hills Hotel",
    city: "Los Angeles",
    country: "United States",
    region: "The Americas",
    category: "Hollywood Legend",
    tagline: "The Pink Palace, where Hollywood has done its deal-making since 1912",
    excerpt:
      "Bungalows, banana-leaf wallpaper, and a poolside where studio history was written. A touch faded now, but the myth is fully intact.",
    rating: 4.4,
    priceFrom: 850,
    year: "July 2026",
    bookingUrl: "https://www.booking.com/hotel/us/the-beverly-hills.html",
    heroImage: "/hotels/beverly-hills-hotel.jpg",
    cardImage: "/hotels/beverly-hills-hotel.jpg",
    standout:
      "A Cobb salad in a green-leather booth at the Polo Lounge, watching an agent and a director pretend they aren't making a deal three tables over.",
    quickFacts: [
      { label: "Location", value: "Sunset Boulevard, LA" },
      { label: "Rooms", value: "210 rooms & bungalows" },
      { label: "Opened", value: "1912" },
      { label: "Best for", value: "Old Hollywood, poolside scenes" },
    ],
    sections: [
      {
        body: [
          "Before there was a Beverly Hills, there was the hotel, built in 1912 on a bean field with the town growing up around it. The Martin Brothers banana-leaf wallpaper, the pink stucco, the script logo: this is the look half of Los Angeles has spent a century copying.",
          "The bungalows, scattered through the tropical gardens, are where the real legends played out, from Marilyn and Garbo to the Taylor-Burton dramas. They're still the thing to book, private and hushed and thick with ghosts.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "As a working luxury hotel it has newer, sharper rivals across town. As a piece of living Hollywood mythology it has no competition at all. Come for the poolside and the Polo Lounge, not the thread count.",
        ],
      },
    ],
  },
  {
    slug: "fogo-island-inn",
    name: "Fogo Island Inn",
    city: "Fogo Island",
    country: "Canada",
    region: "The Americas",
    category: "Design Outpost",
    tagline: "A radical modernist ark stranded on the edge of the North Atlantic",
    excerpt:
      "On stilts at the far edge of Newfoundland, a social-enterprise hotel where every dollar goes back into the community and every window frames raw, roaring ocean.",
    rating: 4.8,
    priceFrom: 1975,
    priceNote: "full board, all-inclusive",
    year: "August 2026",
    directBookingUrl: "https://fogoislandinn.ca/",
    heroImage: "/hotels/fogo-island-inn.jpg",
    cardImage: "/hotels/fogo-island-inn.jpg",
    standout:
      "Watching an iceberg drift past your floor-to-ceiling window from a wood-fired sauna on the rocks, the North Atlantic crashing a few metres below.",
    quickFacts: [
      { label: "Location", value: "Joe Batt's Arm, Newfoundland" },
      { label: "Rooms", value: "29 suites" },
      { label: "Opened", value: "2013" },
      { label: "Best for", value: "Design lovers, dramatic solitude" },
    ],
    sections: [
      {
        body: [
          "Fogo Island Inn is what happens when a hometown-born tech millionaire sets out to save a dying fishing community with architecture. Every penny of surplus flows back into the island through a charitable foundation, which means your stay is also, quietly, an act of preservation.",
          "The building itself is startling: a long white modernist form balanced on stilts, angled at the sea like a ship about to launch. Inside, it's all handmade, from the quilts stitched by island women to the furniture built in local workshops, and every one of the 29 suites stares straight down the throat of the Atlantic.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "Remote, expensive and completely singular. You don't come to Fogo to lie by a pool. You come to feel the weather, eat extraordinary food, and remember that a hotel can be a force for good.",
        ],
      },
    ],
  },
  {
    slug: "explora-patagonia",
    bookingUrl: "https://www.booking.com/hotel/cl/explora-torres-del-paine-conservation-reserve.html",
    name: "Explora Patagonia",
    city: "Torres del Paine",
    country: "Chile",
    region: "The Americas",
    category: "Wilderness Lodge",
    tagline: "A white lodge on a turquoise lake at the end of the world",
    excerpt:
      "Inside Torres del Paine National Park, an all-inclusive base camp for serious hikers, with guided treks by day and a spa over the water by night.",
    rating: 4.7,
    priceFrom: 2600,
    priceNote: "all-inclusive, 4-night min",
    year: "August 2026",
    heroImage: U("1517840901100-8179e982acb7", 2000),
    cardImage: U("1517840901100-8179e982acb7", 1000),
    standout:
      "Coming back from an eight-hour trek to the base of the granite towers, muscles aching, to a hot tub perched over the Salto Chico waterfall as condors wheel overhead.",
    quickFacts: [
      { label: "Location", value: "Torres del Paine, Patagonia" },
      { label: "Rooms", value: "49 rooms" },
      { label: "Opened", value: "1993" },
      { label: "Best for", value: "Hikers, wild landscapes" },
    ],
    sections: [
      {
        body: [
          "Explora pioneered the idea of the luxury base camp: a comfortable, all-inclusive lodge planted deep inside a landscape most people only glimpse from a tour bus. This one sits right on the shore of Lake Pehoé, with the jagged Paine massif filling every window.",
          "The model is refreshingly active. Your rate covers dozens of guided explorations, from gentle lakeside walks to punishing full-day treks, led by guides who read the fickle Patagonian weather like a language. You hike hard, eat well, and sleep like the dead.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "This isn't a place to lie down. It's a place to be moved through one of the planet's great wildernesses in comfort. For anyone who measures a holiday in kilometres walked, it's close to perfect.",
        ],
      },
    ],
  },
  {
    slug: "one-and-only-cape-town",
    bookingUrl: "https://www.booking.com/hotel/za/one-only-cape-town.html",
    name: "One&Only Cape Town",
    city: "Cape Town",
    country: "South Africa",
    region: "Middle East & Africa",
    category: "Urban Resort",
    tagline: "Table Mountain on one side, the working waterfront on the other",
    excerpt:
      "A polished marina resort at the foot of Table Mountain, with island spa suites, a serious wine list, and one of the best views of any city on earth.",
    rating: 4.6,
    priceFrom: 640,
    year: "August 2026",
    heroImage: U("1587734195503-904fca47e0e9", 2000),
    cardImage: U("1587734195503-904fca47e0e9", 1000),
    standout:
      "Breakfast on the terrace as the morning cloud, the famous 'tablecloth', pours slowly over the top of Table Mountain and dissolves in the sun.",
    quickFacts: [
      { label: "Location", value: "V&A Waterfront, Cape Town" },
      { label: "Rooms", value: "131 rooms & suites" },
      { label: "Opened", value: "2009" },
      { label: "Best for", value: "City-and-nature, wine, families" },
    ],
    sections: [
      {
        body: [
          "Cape Town is one of the most dramatically sited cities anywhere, and this resort makes the most of it: a low, contemporary spread of buildings around a private marina, with Table Mountain looming so close it feels theatrical. The best rooms look straight at it, so accept nothing less.",
          "There's a real sense of place here, from the Cape wine cellar to the local artwork, and the location puts you a short stroll from the V&A Waterfront's restaurants and the boats out to Robben Island.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "A rare resort that gives you both a great city and a great landscape without making you choose. Use it as a comfortable launch pad for the Cape, with the Winelands and the coast an easy drive away.",
        ],
      },
    ],
  },
  {
    slug: "giraffe-manor-nairobi",
    name: "Giraffe Manor",
    city: "Nairobi",
    country: "Kenya",
    region: "Middle East & Africa",
    category: "Boutique Manor",
    tagline: "The 1930s manor where the giraffes join you for breakfast",
    excerpt:
      "A creeper-clad country house on the edge of Nairobi where a herd of endangered Rothschild's giraffes pokes its heads through the windows at breakfast.",
    rating: 4.7,
    priceFrom: 1450,
    priceNote: "full board",
    year: "August 2026",
    directBookingUrl: "https://www.thesafaricollection.com/properties/giraffe-manor/",
    heroImage: "/hotels/giraffe-manor-nairobi.jpg",
    cardImage: "/hotels/giraffe-manor-nairobi.jpg",
    standout:
      "A giraffe's improbably long, dark tongue reaching in through the dining-room window to take a pellet from your palm, its eyelashes almost comically enormous.",
    quickFacts: [
      { label: "Location", value: "Langata, Nairobi" },
      { label: "Rooms", value: "12 rooms" },
      { label: "Opened", value: "1932 · hotel 2011" },
      { label: "Best for", value: "That breakfast, families, conservation" },
    ],
    sections: [
      {
        body: [
          "There's exactly one reason Giraffe Manor is one of the most photographed hotels on the planet, and it's every bit as magical as the pictures suggest. The resident herd of Rothschild's giraffes, an endangered subspecies the estate helps protect, wanders up from the neighbouring sanctuary each morning and evening and angles its heads through the manor's windows in search of treats.",
          "Beyond the giraffes, the manor itself is a lovely 1930s stone house, all fireplaces, chintz and colonial-era charm, with just twelve rooms. It books out a year ahead, and the wait is worth it.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "A one-trick hotel, maybe, but what a trick. Pair it with a proper safari, treat it as a two-night bookend to a Kenyan trip, and get ready for the most charming breakfast of your life.",
        ],
      },
    ],
    featured: true,
  },
  {
    slug: "khyber-himalayan-gulmarg",
    bookingUrl: "https://www.booking.com/hotel/in/khyber-mountain-resort-and-spa.html",
    name: "The Khyber Himalayan Resort & Spa",
    city: "Gulmarg",
    country: "India",
    region: "Asia",
    category: "Mountain Retreat",
    tagline: "A cedar-and-stone lodge at 8,500 feet, with the Pir Panjal filling every window",
    excerpt:
      "Kashmir's grandest mountain hotel sits right by the Gulmarg gondola, wrapped in deodar forest and snow for half the year. Ski in winter, trek in summer, and warm up by the fire either way.",
    rating: 4.6,
    priceFrom: 300,
    year: "January 2026",
    heroImage: "/hotels/khyber-himalayan-gulmarg.jpeg",
    cardImage: "/hotels/khyber-himalayan-gulmarg.jpeg",
    standout:
      "A butler lighting the wood stove in your room while fresh snow piles up on the balcony and the Pir Panjal range glows in the last of the light.",
    quickFacts: [
      { label: "Location", value: "Gulmarg, Kashmir" },
      { label: "Rooms", value: "85 rooms & suites" },
      { label: "Opened", value: "2012" },
      { label: "Best for", value: "Skiing, mountain air, honeymoons" },
    ],
    sections: [
      {
        body: [
          "Gulmarg is one of the highest ski resorts in the world, and for years there was nowhere really luxurious to stay in it. The Khyber changed that. Built from local stone and deodar cedar, it sits a snowball's throw from the famous gondola, close enough that you can be on the slopes minutes after breakfast.",
          "Inside it's all Kashmiri craft, from the hand-knotted carpets to the papier-mache detailing and the crackling fireplaces in the lounges. In winter it's a ski lodge in the grand sense; in summer it's a green, flower-strewn base for trekking and cool Himalayan air when the plains are baking.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "The most comfortable bed in the Indian Himalayas, in one of its most beautiful settings. Come for the snow, but the summer here is a quiet secret worth keeping.",
        ],
      },
    ],
    featured: true,
  },
  {
    slug: "weligama-bay-marriott",
    bookingUrl: "https://www.booking.com/hotel/lk/weligama-bay-marriott-resort-spa.html",
    name: "Weligama Bay Marriott Resort & Spa",
    city: "Weligama",
    country: "Sri Lanka",
    region: "Asia",
    category: "Beach Resort",
    tagline: "A surf-town resort on Sri Lanka's south coast, built for slow days by the sea",
    excerpt:
      "Overlooking the gentle crescent of Weligama Bay, this is an easy, family-friendly base for the island's best beaches, whale watching off Mirissa, and learning to surf.",
    rating: 4.6,
    priceFrom: 240,
    year: "February 2026",
    heroImage: "/hotels/weligama-bay-marriott.jpeg",
    cardImage: "/hotels/weligama-bay-marriott.jpeg",
    standout:
      "Breakfast on the terrace watching first-time surfers tumble off longboards in the calm bay, then a blue-whale boat out of nearby Mirissa.",
    quickFacts: [
      { label: "Location", value: "Weligama, South Coast" },
      { label: "Rooms", value: "199 rooms & suites" },
      { label: "Opened", value: "2017" },
      { label: "Best for", value: "Families, surfers, beach time" },
    ],
    sections: [
      {
        body: [
          "Weligama Bay is where half of Sri Lanka learns to surf, thanks to its soft, forgiving waves, and this resort has the best seat in the house. It is a big, comfortable, contemporary place rather than a boutique hideaway, and that is rather the point: it works beautifully for families and for anyone who wants the south coast made easy.",
          "The bay is a natural crescent, calm and safe, and the wider region is one of Sri Lanka's richest, close to the whale grounds off Mirissa, the fort town of Galle, and a string of beaches that get quieter the further you wander. From most of the sea-facing rooms you look straight down onto the break, where longboarders trade waves from breakfast until the light goes.",
        ],
      },
      {
        heading: "Checking In",
        body: [
          "Arrival sets the tone. The lobby is a tall, open-sided room that frames the ocean like a painting, with a run of sculptural ring chandeliers overhead and a polished floor that mirrors the palms outside. There is almost no wall between you and the water, so the first thing you feel is the breeze coming off the bay.",
          "It is a Marriott, so the machine runs smoothly: quick check-in, familiar loyalty perks, a concierge who can line up surf lessons, a Mirissa whale boat, or a driver to Galle without any fuss. What lifts it above a standard flag hotel is the setting and the staff, who are warm in a distinctly Sri Lankan way.",
        ],
        image: {
          src: "/hotels/weligama/1.jpeg",
          caption: "The open-sided lobby, framing the bay",
        },
      },
      {
        heading: "Days by the Water",
        body: [
          "The centrepiece is the dark, mirror-tiled infinity pool that reaches out toward the sand so that the water seems to pour into the sea beyond. It is long enough for actual laps, shallow enough at one end for children, and lined with loungers that stay comfortable even at midday.",
          "Below it, the beach is the real draw. The house reef keeps the bay gentle, which is exactly why the surf schools set up here, and you can walk straight off the property onto the sand. Spend a morning taking a lesson, dry off by the pool, and you have the whole rhythm of a Weligama day.",
        ],
        image: {
          src: "/hotels/weligama/2.jpeg",
          caption: "The mirror-black infinity pool, running to the beach",
        },
      },
      {
        heading: "After Dark",
        body: [
          "In the evening the resort softens and glows. The pool turns a deep lit blue, a fire bowl is lit beside the loungers, and the whole terrace takes on the feel of a beach club without the noise. Dinner tends to be relaxed and generous, heavy on Sri Lankan curries and just-landed seafood, and there is always somewhere to take a cocktail and listen to the surf you were riding a few hours earlier.",
        ],
        image: {
          src: "/hotels/weligama/3.jpeg",
          caption: "The pool and fire bowl after sunset",
        },
      },
      {
        heading: "Golden Hour on the Lawn",
        body: [
          "The best hour of the day happens on the lawn between the resort and the sea. Old pandanus and coconut trees lean over rows of loungers, festoon lights come on as the sky turns peach and lilac, and everyone drifts down to watch the last surfers head in. It is the kind of unhurried, end-of-day scene that makes you extend your stay by a night, then another.",
        ],
        image: {
          src: "/hotels/weligama/4.jpeg",
          caption: "Sunset over the seafront lawn",
        },
      },
      {
        heading: "The Verdict",
        body: [
          "Not the most characterful stay on the island, but one of the most practical and comfortable bases for the south coast, and a genuinely lovely one at that. Come to surf, eat well, watch whales off Mirissa, and slow right down with the bay laid out in front of you.",
        ],
      },
    ],
  },
  {
    slug: "jai-mahal-palace-jaipur",
    bookingUrl: "https://www.booking.com/hotel/in/jaimahal-palace.html",
    name: "Jai Mahal Palace",
    city: "Jaipur",
    country: "India",
    region: "Asia",
    category: "Palace Hotel",
    tagline: "A 260-year-old palace and eighteen acres of Mughal garden in the middle of the Pink City",
    excerpt:
      "A gentler, greener alternative to Jaipur's grander palace hotels, this Taj property wraps you in history and formal gardens a short drive from the bazaars and forts.",
    rating: 4.6,
    priceFrom: 200,
    year: "March 2026",
    heroImage: U("1524492412937-b28074a5d7da", 2000),
    cardImage: U("1524492412937-b28074a5d7da", 1000),
    standout:
      "A gin and tonic on the lawn at dusk as the palace facade turns amber and peacocks pick their way across eighteen acres of clipped Mughal garden.",
    quickFacts: [
      { label: "Location", value: "Civil Lines, Jaipur" },
      { label: "Rooms", value: "100 rooms & suites" },
      { label: "Opened", value: "1745 · hotel 1980s" },
      { label: "Best for", value: "First-time Rajasthan, gardens" },
    ],
    sections: [
      {
        body: [
          "Jaipur is India's palace-hotel capital, and while the Rambagh gets the headlines, the Jai Mahal quietly offers a lot of the same romance for rather less. The building dates to 1745, its facade a fine piece of Indo-Saracenic architecture, and its eighteen acres of formal Mughal gardens are among the loveliest hotel grounds in the city.",
          "Rooms are traditional and comfortable rather than cutting-edge, but the setting does the heavy lifting. You are minutes from the Hawa Mahal, the City Palace and the chaos of the bazaars, then back behind the walls to green calm.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "A wonderful, well-priced introduction to the Rajasthani palace experience. Save the splurge for a suite at the Rambagh another time; start your love affair with the Pink City here.",
        ],
      },
    ],
  },
  {
    slug: "pashan-garh-taj-safari",
    bookingUrl: "https://www.booking.com/hotel/in/pashangarh-panna-national-park.html",
    name: "Pashan Garh, A Taj Safari",
    city: "Panna",
    country: "India",
    region: "Asia",
    category: "Safari Lodge",
    tagline: "A dry-stone safari lodge on the edge of Panna's tiger country",
    excerpt:
      "Twelve private stone cottages above a wooded valley in Madhya Pradesh, and one of the best chances in central India to track tiger, leopard and the gharial-rich Ken River.",
    rating: 4.7,
    priceFrom: 320,
    priceNote: "full board",
    year: "April 2026",
    heroImage: "/hotels/pashan-garh-taj-safari.jpeg",
    cardImage: "/hotels/pashan-garh-taj-safari.jpeg",
    standout:
      "Coming back from a dawn drive to breakfast on your private stone terrace, the valley below still full of birdsong and mist.",
    quickFacts: [
      { label: "Location", value: "Panna National Park, MP" },
      { label: "Rooms", value: "12 stone cottages" },
      { label: "Opened", value: "2010" },
      { label: "Best for", value: "Tiger safari, wild solitude" },
    ],
    sections: [
      {
        body: [
          "Panna is one of India's great conservation comeback stories: tigers vanished here in the 2000s and were painstakingly reintroduced, and today the park is thriving again. Pashan Garh is the place to base yourself for it, a run of twelve dry-stone cottages inspired by African bush lodges but built entirely from local rock.",
          "The pace is all early drives and long, lazy afternoons, with expert naturalists reading the forest for you. Beyond the big cats there are sloth bears, the Ken River full of gharial and mugger crocodile, and the extraordinary temples of Khajuraho within reach.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "A serene, design-led safari lodge in a park that fewer travellers know, which is exactly its appeal. Pair it with Khajuraho for one of central India's most rewarding trips.",
        ],
      },
    ],
  },
  {
    slug: "oberoi-new-delhi",
    bookingUrl: "https://www.booking.com/hotel/in/the-oberoi-new-delhi.html",
    name: "The Oberoi, New Delhi",
    city: "New Delhi",
    country: "India",
    region: "Asia",
    category: "Urban Grande Dame",
    tagline: "The capital's most polished city hotel, looking out over the Delhi Golf Club and Humayun's Tomb",
    excerpt:
      "After a top-to-bottom rebuild, the Oberoi is once again the address in Delhi: serene, tech-forward, and run with the quiet precision the group is famous for.",
    rating: 4.7,
    priceFrom: 300,
    year: "May 2026",
    heroImage: U("1477587458883-47145ed94245", 2000),
    cardImage: U("1477587458883-47145ed94245", 1000),
    standout:
      "A cocktail on the rooftop as the sun drops behind Humayun's Tomb and the green of the golf course fades into the vast, humming city beyond.",
    quickFacts: [
      { label: "Location", value: "Golf Links, New Delhi" },
      { label: "Rooms", value: "220 rooms & suites" },
      { label: "Opened", value: "1965 · rebuilt 2018" },
      { label: "Best for", value: "Business, service, calm in the city" },
    ],
    sections: [
      {
        body: [
          "Delhi can overwhelm, and the Oberoi is the antidote. A three-year rebuild stripped the 1960s original back to its bones and rebuilt it as a calm, glass-and-stone sanctuary, with rooms that look out over the rare green of the Delhi Golf Club and the domes of Humayun's Tomb.",
          "Service is the real signature. The Oberoi group trains some of the best hotel staff in the world, and it shows in the small anticipations, the flawless food, and a spa and rooftop that make the heat and noise of the city melt away.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "The most refined base in the capital, and a masterclass in Indian hospitality. If you can, book a room on the tomb side and watch the light change over one of the world's great monuments.",
        ],
      },
    ],
  },
  {
    slug: "w-goa",
    bookingUrl: "https://www.booking.com/hotel/in/w-retreat-spa-goa.html",
    name: "W Goa",
    city: "Goa",
    country: "India",
    region: "Asia",
    category: "Beach Resort",
    tagline: "Goa's party-and-poolside flagship, perched above the sands of Vagator",
    excerpt:
      "Bold colour, a clifftop pool and a DJ-driven beach club, all above one of North Goa's best beaches. This is the loud, glamorous end of the Goan spectrum, and it's a lot of fun.",
    rating: 4.5,
    priceFrom: 300,
    year: "August 2026",
    heroImage: U("1582719508461-905c673771fd", 2000),
    cardImage: U("1582719508461-905c673771fd", 1000),
    standout:
      "Sundowners at the clifftop pool as the DJ warms up and the Arabian Sea turns copper below the red laterite headland of Vagator.",
    quickFacts: [
      { label: "Location", value: "Vagator, North Goa" },
      { label: "Rooms", value: "160 rooms & villas" },
      { label: "Opened", value: "2016" },
      { label: "Best for", value: "Nightlife, poolside, groups" },
    ],
    sections: [
      {
        body: [
          "Goa has always had two moods: sleepy and hedonistic. W Goa leans hard into the second. It sits on the headland above Vagator, all clashing colour and clever design, with a beach club, a great spa, and a pool scene that runs from lazy afternoons to full-volume nights.",
          "This is not the place for a quiet retreat, and it doesn't pretend to be. It's for travellers who want North Goa's energy on tap, with a stylish, well-run resort to come home to.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "The most fun you can have in North Goa without leaving your hotel. Come with friends, come in season, and don't expect an early night.",
        ],
      },
    ],
  },
  {
    slug: "w-koh-samui",
    bookingUrl: "https://www.booking.com/hotel/th/w-retreat-koh-samui.html",
    name: "W Koh Samui",
    city: "Koh Samui",
    country: "Thailand",
    region: "Asia",
    category: "Villa Resort",
    tagline: "An all-villa playground on Samui's northern shore, every villa with its own pool",
    excerpt:
      "Every room here is a private pool villa, spilling down a lush hillside to a white-sand beach and one of the island's best beach bars. Design-forward, high-energy, and genuinely spectacular.",
    rating: 4.7,
    priceFrom: 500,
    priceNote: "pool villa",
    year: "June 2026",
    heroImage: U("1537996194471-e657df975ab4", 2000),
    cardImage: U("1537996194471-e657df975ab4", 1000),
    standout:
      "Slipping into your own villa pool at midnight, the lights of fishing boats strung across the Gulf of Thailand and the beach bar's bass drifting up the hill.",
    quickFacts: [
      { label: "Location", value: "Maenam, Koh Samui" },
      { label: "Villas", value: "74 pool villas" },
      { label: "Opened", value: "2010" },
      { label: "Best for", value: "Couples, design lovers, privacy" },
    ],
    sections: [
      {
        body: [
          "The clever thing about W Koh Samui is that there are no ordinary rooms at all. Every one of the 74 units is a private villa with its own pool, tumbling down a green hillside to the sand, so even at full occupancy the place feels private and calm.",
          "By day it's all your-own-pool seclusion and a long, beautiful beach; by night the WooBar comes alive as one of the island's best sundowner spots. The design is playful and lavish, and the service hits the sweet spot between switched-on and relaxed.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "Samui's most stylish resort, and a rare one where the entry-level room is a private pool villa. Ideal for a couple who want privacy by day and a little glamour by night.",
        ],
      },
    ],
    featured: true,
  },
  {
    slug: "stay-wellbeing-phuket",
    bookingUrl: "https://www.booking.com/hotel/th/stay-well-being-amp-lifestyle-resort.html",
    name: "STAY Wellbeing & Lifestyle Resort",
    city: "Phuket",
    country: "Thailand",
    region: "Asia",
    category: "Wellness Resort",
    tagline: "A serious wellness retreat in Phuket's quiet south, at a surprisingly gentle price",
    excerpt:
      "Detox programmes, an enormous spa and a calm, garden-filled campus near Rawai make this one of the best-value wellbeing resorts in Southeast Asia.",
    rating: 4.6,
    priceFrom: 80,
    year: "July 2026",
    heroImage: U("1571003123894-1f0594d2b5d9", 2000),
    cardImage: U("1571003123894-1f0594d2b5d9", 1000),
    standout:
      "Finishing a week-long detox lighter and clearer than you arrived, then rewarding yourself with a slow massage as the cicadas start up in the garden.",
    quickFacts: [
      { label: "Location", value: "Rawai, South Phuket" },
      { label: "Rooms", value: "180 rooms & suites" },
      { label: "Opened", value: "2017" },
      { label: "Best for", value: "Detox, wellness, value" },
    ],
    sections: [
      {
        body: [
          "Wellness travel usually comes with a punishing price tag. STAY is the happy exception. Set in green gardens in the quieter south of Phuket, near Rawai and Nai Harn, it runs proper structured programmes, from detox and weight management to sleep and fitness, with a spa and hydrotherapy area far bigger than the modest rates suggest.",
          "It's not beachfront and it isn't trying to be a party resort. What it offers is space, calm, healthy food and genuine wellbeing expertise, at a fraction of what the big-name retreats charge.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "The smartest-value wellness stay in Phuket. Come to reset properly rather than to lie on a beach, and leave feeling like you actually did something for yourself.",
        ],
      },
    ],
  },
  {
    slug: "rambagh-palace-jaipur",
    bookingUrl: "https://www.booking.com/hotel/in/rambagh-palace.html",
    name: "Rambagh Palace",
    city: "Jaipur",
    country: "India",
    region: "Asia",
    category: "Palace Hotel",
    tagline: "The former residence of the Maharaja of Jaipur, and the grandest address in the Pink City",
    excerpt:
      "Peacocks on the lawns, marble corridors, and suites once lived in by a maharaja. This Taj flagship is the full Rajasthani fantasy, and it delivers on every inch of it.",
    rating: 4.9,
    priceFrom: 480,
    year: "March 2026",
    heroImage: "/hotels/rambagh-palace-jaipur.jpg",
    cardImage: "/hotels/rambagh-palace-jaipur.jpg",
    standout:
      "Afternoon tea in the Verandah Cafe as peacocks strut across the manicured lawns and a sitar player tunes up somewhere out of sight.",
    quickFacts: [
      { label: "Location", value: "Bhawani Singh Rd, Jaipur" },
      { label: "Rooms", value: "78 rooms & suites" },
      { label: "Opened", value: "1835 · hotel 1957" },
      { label: "Best for", value: "Romance, once-in-a-lifetime India" },
    ],
    sections: [
      {
        body: [
          "If you are going to do a palace hotel in Jaipur properly, this is the one. Rambagh was the home of the Maharaja of Jaipur until the 1950s, and it still feels like a private royal residence that happens to let you stay: 47 acres of gardens, marble halls, and suites hung with portraits and chandeliers.",
          "The service is warm and ceremonial in equal measure, the food is excellent, and the whole place hums with a sense of occasion. It is expensive by Indian standards and worth every rupee for the right trip.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "One of India's truly great hotels, and the definitive Jaipur splurge. For a honeymoon or a landmark birthday, few addresses on earth feel this special.",
        ],
      },
    ],
    featured: true,
  },
  {
    slug: "umaid-bhawan-jodhpur",
    bookingUrl: "https://www.booking.com/hotel/in/umaid-bhawan-place.html",
    name: "Umaid Bhawan Palace",
    city: "Jodhpur",
    country: "India",
    region: "Asia",
    category: "Palace Hotel",
    tagline: "One of the world's last great palaces, half of it still home to the royal family",
    excerpt:
      "An immense Art Deco palace on a hill above the Blue City, part royal residence, part museum, part Taj hotel. Staying here is like being a guest of the Maharaja, because in a sense you are.",
    rating: 4.9,
    priceFrom: 650,
    year: "April 2026",
    heroImage: "/hotels/umaid-bhawan-jodhpur.jpg",
    cardImage: "/hotels/umaid-bhawan-jodhpur.jpg",
    standout:
      "Standing under the great central dome at dusk, the sandstone glowing gold, knowing the Maharaja of Jodhpur is quite possibly at home in the wing next door.",
    quickFacts: [
      { label: "Location", value: "Above Jodhpur, Rajasthan" },
      { label: "Rooms", value: "64 rooms & suites" },
      { label: "Opened", value: "1943 · hotel 1972" },
      { label: "Best for", value: "Grand occasions, architecture" },
    ],
    sections: [
      {
        body: [
          "Umaid Bhawan is one of the largest private residences in the world, a colossal blend of Art Deco and Rajput design built through the 1930s and 40s. The royal family still lives in one wing, a museum occupies another, and the third is a Taj hotel of extraordinary grandeur.",
          "The scale is almost hard to process: soaring domed halls, a subterranean pool, gardens patrolled by peacocks, and views out over the fort and the indigo sprawl of the Blue City. It is theatrical in the best possible way.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "Not a boutique hideaway but a genuine living palace, and an experience quite unlike any other hotel in India. Come for the sheer, jaw-dropping scale of it.",
        ],
      },
    ],
  },
  {
    slug: "raffles-singapore",
    chain: "accor",
    chainUrl: "https://all.accor.com/hotel/A5S3/index.en.shtml",
    bookingUrl: "https://www.booking.com/hotel/sg/raffles.html",
    name: "Raffles Singapore",
    city: "Singapore",
    country: "Singapore",
    region: "Asia",
    category: "Grande Dame",
    tagline: "The colonial grande dame that gave the world the Singapore Sling",
    excerpt:
      "After a careful restoration, the all-suite Raffles is back to its shuttered, palm-filled, ceiling-fan best. Order a Sling at the Long Bar and let the peanut shells fall where they may.",
    rating: 4.8,
    priceFrom: 750,
    year: "May 2026",
    heroImage: "/hotels/raffles-singapore.jpg",
    cardImage: "/hotels/raffles-singapore.jpg",
    standout:
      "A Singapore Sling at the Long Bar, ceiling fans turning overhead and peanut shells crunching underfoot, exactly as it has been for over a century.",
    quickFacts: [
      { label: "Location", value: "Beach Road, Singapore" },
      { label: "Suites", value: "115 suites" },
      { label: "Opened", value: "1887 · restored 2019" },
      { label: "Best for", value: "History, romance, that cocktail" },
    ],
    sections: [
      {
        body: [
          "Few hotels are woven into a city's identity as tightly as Raffles is into Singapore's. Opened in 1887, it is a white colonial confection of verandahs, courtyards and palm-shaded walkways, and every room is a suite served by the hotel's famous butlers.",
          "A multi-year restoration finished in 2019 freshened everything without stripping away the romance. The Long Bar still serves the Singapore Sling it invented, and the whole place remains a cool, gracious escape from the glass-and-steel city around it.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "A living monument that still functions as a genuinely lovely hotel. Stay if you can; if not, at least go for the Sling and a wander through the courtyards.",
        ],
      },
    ],
    featured: true,
  },
  {
    slug: "amankila-bali",
    name: "Amankila",
    city: "Bali",
    country: "Indonesia",
    region: "Asia",
    category: "Cliffside Retreat",
    tagline: "Aman's Balinese classic, with a three-tiered infinity pool cascading toward the sea",
    excerpt:
      "On a quiet stretch of Bali's east coast, thatched pavilions step down a jungled cliff to one of the most photographed pools in Asia and a private beach club below.",
    rating: 4.9,
    priceFrom: 1050,
    year: "June 2026",
    directBookingUrl: "https://www.aman.com/resorts/amankila",
    heroImage: "/hotels/amankila-bali.jpg",
    cardImage: "/hotels/amankila-bali.jpg",
    standout:
      "The three-tiered infinity pool at dawn, each level spilling into the next and the whole thing seeming to pour off the cliff into the Lombok Strait.",
    quickFacts: [
      { label: "Location", value: "Manggis, East Bali" },
      { label: "Rooms", value: "34 free-standing suites" },
      { label: "Opened", value: "1992" },
      { label: "Best for", value: "Honeymoons, quiet, that pool" },
    ],
    sections: [
      {
        body: [
          "While the crowds pile into Seminyak and Ubud, Amankila keeps to itself on Bali's serene east coast. Its thatched suites are scattered down a forested cliff, connected by walkways and linked to a private beach club at the bottom, so you feel gloriously alone with the sea.",
          "The signature is that pool: three turquoise tiers stepping toward the horizon, one of the images that launched a thousand imitations. Beyond it lie the water palaces of Karangasem and some of the island's least spoiled temples and villages.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "The Bali of the imagination, on the quiet side of the island. For romance and privacy it is hard to beat anywhere in Southeast Asia.",
        ],
      },
    ],
    featured: true,
  },
  {
    slug: "four-seasons-bali-sayan",
    bookingUrl: "https://www.booking.com/hotel/id/four-seasons-resort-bali-at-sayan.html",
    name: "Four Seasons Resort Bali at Sayan",
    city: "Ubud",
    country: "Indonesia",
    region: "Asia",
    category: "Jungle Retreat",
    tagline: "A lily-pond rooftop and a valley of rice terraces on the edge of Ubud",
    excerpt:
      "You cross a bridge to a rooftop lotus pond, then descend into the jungle canopy of the Ayung River valley. This is Ubud's most dramatic arrival, and one of Bali's great spa retreats.",
    rating: 4.8,
    priceFrom: 850,
    year: "June 2026",
    heroImage: U("1602002418082-a4443e081dd1", 2000),
    cardImage: U("1602002418082-a4443e081dd1", 1000),
    standout:
      "Yoga at dawn on the deck as mist rises off the Ayung River and the terraced rice paddies wake up green and gold below you.",
    quickFacts: [
      { label: "Location", value: "Sayan, near Ubud" },
      { label: "Rooms", value: "60 suites & villas" },
      { label: "Opened", value: "1998 · renovated 2020s" },
      { label: "Best for", value: "Spa, jungle, spiritual Bali" },
    ],
    sections: [
      {
        body: [
          "The arrival alone is worth the trip: you walk across a timber bridge into a vast rooftop lotus pond, then wind down into the resort, which is folded into the jungle of the Ayung River valley. It's a piece of theatre that never gets old.",
          "This is the Ubud side of Bali, all rice terraces, river rafting, temples and wellness, and the Four Seasons does it with a serious spa, superb food, and villas that open straight onto the green. It's calmer and more grown-up than the island's beach scene.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "The best base for spiritual, green, inland Bali, with an arrival you'll never forget. Pair it with a few nights on the coast for the full island.",
        ],
      },
    ],
  },
  {
    slug: "the-datai-langkawi",
    bookingUrl: "https://www.booking.com/hotel/my/datai.html",
    name: "The Datai Langkawi",
    city: "Langkawi",
    country: "Malaysia",
    region: "Asia",
    category: "Rainforest Resort",
    tagline: "A ten-million-year-old rainforest, a private beach, and villas hidden in the canopy",
    excerpt:
      "On Langkawi's north-west tip, The Datai sits inside one of the oldest rainforests on earth, where hornbills and dusky langurs share the trees and the Andaman Sea laps a perfect beach.",
    rating: 4.8,
    priceFrom: 700,
    year: "July 2026",
    heroImage: "/hotels/the-datai-langkawi.jpg",
    cardImage: "/hotels/the-datai-langkawi.jpg",
    standout:
      "A resident naturalist pointing out a great hornbill in the canopy on the walk to breakfast, then that first sight of the empty, jungle-fringed beach.",
    quickFacts: [
      { label: "Location", value: "Datai Bay, Langkawi" },
      { label: "Rooms", value: "121 rooms, suites & villas" },
      { label: "Opened", value: "1993 · rebuilt 2018" },
      { label: "Best for", value: "Nature lovers, beach-and-jungle" },
    ],
    sections: [
      {
        body: [
          "The Datai's setting is genuinely rare: a resort built inside a rainforest thought to be around ten million years old, on a beach regularly rated among the best in the world. A major rebuild finished in 2018 modernised everything while keeping the trees, quite literally, growing through the architecture.",
          "It's a place for slow mornings, nature walks with the in-house naturalists, and long afternoons between the jungle pool and the Andaman Sea. Hornbills, monitor lizards and cheeky langurs are your neighbours.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "One of Asia's great beach-and-jungle resorts, and a genuine haven for anyone who loves the natural world. The wildlife here is part of the luxury.",
        ],
      },
    ],
  },
  {
    slug: "nihi-sumba",
    bookingUrl: "https://www.booking.com/hotel/id/nihi-sumba.html",
    name: "Nihi Sumba",
    city: "Sumba",
    country: "Indonesia",
    region: "Asia",
    category: "Wilderness Resort",
    tagline: "Surf, horses and raw wilderness on a remote Indonesian island few can find on a map",
    excerpt:
      "A famous private left-hand wave, horses cantering along an empty beach, and a spa reached by a two-hour trek. Nihi Sumba is barefoot luxury at its wildest and most soulful.",
    rating: 4.9,
    priceFrom: 1400,
    priceNote: "villa, full board",
    year: "August 2026",
    heroImage: "/hotels/nihi-sumba.jpg",
    cardImage: "/hotels/nihi-sumba.jpg",
    standout:
      "Riding a horse bareback along the surf at dawn on an empty two-mile beach, the island's wild interior rising green and untouched behind you.",
    quickFacts: [
      { label: "Location", value: "Sumba Island, Indonesia" },
      { label: "Villas", value: "27 villas" },
      { label: "Opened", value: "surf camp 1980s · resort 2015" },
      { label: "Best for", value: "Surfers, adventurers, disconnecting" },
    ],
    sections: [
      {
        body: [
          "Sumba lies a short flight but a whole world away from Bali, drier, wilder and far less touched. Nihi began life as a legendary surf camp built around a private left-hand wave, and it has grown into one of the most distinctive resorts anywhere without losing its soul.",
          "Days are spent surfing, riding the resort's beloved horses along the sand, trekking to the famous cliffside spa, or simply staring at a landscape that feels prehistoric. A share of proceeds funds the Sumba Foundation, which does serious work across the island.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "Barefoot luxury with genuine purpose and a real edge of adventure. Not for everyone, and all the better for it. One of the most memorable places we've ever stayed.",
        ],
      },
    ],
    featured: true,
  },
  {
    slug: "the-savoy-london",
    name: "The Savoy",
    city: "London",
    country: "United Kingdom",
    region: "Europe",
    category: "Grande Dame",
    tagline: "Theatreland's glittering Thames-side icon, Art Deco and Edwardian in equal measure",
    excerpt:
      "A riverside legend since 1889, with an American Bar that pours some of the world's most famous cocktails and a location in the very thick of the West End.",
    rating: 4.7,
    priceFrom: 800,
    year: "July 2026",
    bookingUrl: "https://www.booking.com/hotel/gb/the-savoy.html",
    heroImage: "/hotels/the-savoy-london.jpg",
    cardImage: "/hotels/the-savoy-london.jpg",
    standout:
      "A martini at the American Bar as the pianist plays, then a two-minute walk to a curtain-up in Covent Garden.",
    quickFacts: [
      { label: "Location", value: "Strand, London" },
      { label: "Rooms", value: "267 rooms & suites" },
      { label: "Opened", value: "1889" },
      { label: "Best for", value: "Theatre, cocktails, river views" },
    ],
    sections: [
      {
        body: [
          "The Savoy has been at the centre of London life since 1889, when it became the city's first truly modern luxury hotel, with electric lights and its own power station. It still splits neatly into two personalities: Edwardian grandeur on the river side, cool Art Deco on the Strand.",
          "The American Bar is the star turn, one of the oldest and most celebrated cocktail bars in the world, and the location could hardly be better for the theatres, restaurants and galleries of the West End. River-view rooms are the ones to book.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "A glamorous, superbly located London institution with a bar worth crossing town for. For a theatre-and-cocktails weekend in the capital, it's hard to beat.",
        ],
      },
    ],
  },
  {
    slug: "gritti-palace-venice",
    bookingUrl: "https://www.booking.com/hotel/it/gritti-palace.html",
    name: "The Gritti Palace",
    city: "Venice",
    country: "Italy",
    region: "Europe",
    category: "Palazzo",
    tagline: "A 15th-century Grand Canal palazzo with the best terrace in Venice",
    excerpt:
      "Once a doge's residence, the Gritti puts you right on the Grand Canal opposite Santa Maria della Salute, with a terrace made for lingering and Venetian antiques at every turn.",
    rating: 4.8,
    priceFrom: 950,
    year: "August 2026",
    heroImage: "/hotels/gritti-palace-venice.jpg",
    cardImage: "/hotels/gritti-palace-venice.jpg",
    standout:
      "A Bellini on the canal-side terrace at golden hour, watching gondolas glide past the great dome of the Salute directly opposite.",
    quickFacts: [
      { label: "Location", value: "Grand Canal, San Marco" },
      { label: "Rooms", value: "82 rooms & suites" },
      { label: "Opened", value: "1525 · hotel 1895" },
      { label: "Best for", value: "Canal views, romance, the terrace" },
    ],
    sections: [
      {
        body: [
          "Some Venice hotels are near the Grand Canal; the Gritti is on it, occupying a 15th-century palazzo once home to a doge. Every room is a jewel box of Venetian antiques, Rubelli silks and Murano glass, restored with the seriousness the setting deserves.",
          "The terrace is the thing everyone remembers, a run of tables right at the water's edge, looking straight across to Santa Maria della Salute. It is one of the great places in Europe to nurse a drink and watch a city drift by.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "The most romantic address on the Grand Canal, with a terrace worth the price on its own. For a special few nights in Venice, this is the one.",
        ],
      },
    ],
  },
  {
    slug: "four-seasons-george-v-paris",
    bookingUrl: "https://www.booking.com/hotel/fr/four-seasons-george-v-paris.html",
    name: "Four Seasons Hotel George V",
    city: "Paris",
    country: "France",
    region: "Europe",
    category: "Palace Hotel",
    tagline: "Off the Champs-Elysees, a palace hotel famous for its flowers and three Michelin restaurants",
    excerpt:
      "A 1928 Art Deco landmark a step from the Champs-Elysees, celebrated for extravagant floral displays, faultless service, and more Michelin stars than any other hotel in the world.",
    rating: 4.9,
    priceFrom: 1600,
    year: "July 2026",
    heroImage: "/hotels/four-seasons-george-v-paris.jpg",
    cardImage: "/hotels/four-seasons-george-v-paris.jpg",
    standout:
      "Walking into the marble courtyard to find another impossible, room-height floral installation, different every fortnight and worth a detour on its own.",
    quickFacts: [
      { label: "Location", value: "8th, near Champs-Elysees" },
      { label: "Rooms", value: "244 rooms & suites" },
      { label: "Opened", value: "1928" },
      { label: "Best for", value: "Special occasions, dining, service" },
    ],
    sections: [
      {
        body: [
          "The George V holds a claim no other hotel can match: three restaurants, three Michelin stars between them, under one roof. But even if you never ate here, you would remember the flowers, the vast, sculptural arrangements by Jeff Leatham that fill the marble halls and change with the seasons.",
          "Behind the spectacle is service of almost unnerving precision and rooms of quiet, gilded comfort a short stroll from the Champs-Elysees and the Seine. It is the Paris palace hotel taken to its logical, luxurious extreme.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "Perhaps the most polished hotel in Paris, and a destination for its flowers and its restaurants alone. Save it for the occasions that truly warrant it.",
        ],
      },
    ],
  },
  {
    slug: "bulgari-resort-dubai",
    name: "Bulgari Resort Dubai",
    city: "Dubai",
    country: "United Arab Emirates",
    region: "Middle East & Africa",
    category: "Design Resort",
    tagline: "Italian design on a private seahorse-shaped island, with a marina and a skyline view",
    excerpt:
      "On its own island minutes from downtown, the Bulgari trades Dubai's usual gold-and-glitz for sleek Italian restraint, a superyacht marina, and a beach club that draws the city's stylish set.",
    rating: 4.7,
    priceFrom: 1100,
    year: "May 2026",
    bookingUrl: "https://www.booking.com/hotel/ae/bulgari-resorts-dubai.html",
    heroImage: U("1540541338287-41700207dee6", 2000),
    cardImage: U("1540541338287-41700207dee6", 1000),
    standout:
      "An aperitivo at the marina as the yachts light up and the Burj Khalifa glitters across the water, feeling more Portofino than Persian Gulf.",
    quickFacts: [
      { label: "Location", value: "Jumeirah Bay Island" },
      { label: "Rooms", value: "101 rooms & suites" },
      { label: "Opened", value: "2017" },
      { label: "Best for", value: "Design, marina scene, style" },
    ],
    sections: [
      {
        body: [
          "Dubai is not short of grand hotels, but most shout. The Bulgari murmurs, in the cool Italian language of the jewellery house that created it. Set on a private, seahorse-shaped island linked to the mainland by a short bridge, it swaps gold leaf for stone, bronze and impeccable tailoring.",
          "There's a superyacht marina, a serious Italian restaurant, and a beach club that has become one of the city's most fashionable addresses, all within minutes of downtown yet feeling a world apart.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "The most tasteful luxury hotel in Dubai, and proof the city can do understated when it wants to. For style over spectacle, this is the pick.",
        ],
      },
    ],
  },
  {
    slug: "upper-house-hong-kong",
    name: "The Upper House",
    city: "Hong Kong",
    country: "Hong Kong SAR",
    region: "Asia",
    category: "Urban Retreat",
    tagline: "A calm, art-filled hideaway above Admiralty, with no lobby and no attitude",
    excerpt:
      "Andre Fu's serene interiors, unusually large rooms, and a top-floor restaurant with harbour views make this the thinking traveller's Hong Kong hotel. Quiet luxury, done to perfection.",
    rating: 4.8,
    priceFrom: 550,
    year: "May 2026",
    bookingUrl: "https://www.booking.com/hotel/hk/the-upper-house.html",
    heroImage: U("1590490360182-c33d57733427", 2000),
    cardImage: U("1590490360182-c33d57733427", 1000),
    standout:
      "Dinner at Salisterra on the top floor as the light drops and Hong Kong's forest of towers switches on around you.",
    quickFacts: [
      { label: "Location", value: "Admiralty, Hong Kong Island" },
      { label: "Rooms", value: "117 rooms & suites" },
      { label: "Opened", value: "2009" },
      { label: "Best for", value: "Design, calm, long stays" },
    ],
    sections: [
      {
        body: [
          "The Upper House does everything the opposite way to a typical grand hotel, and it works beautifully. There is no formal lobby, no check-in desk, no fuss. Instead you are shown quietly to a room designed by Andre Fu, generously large by Hong Kong standards, full of natural materials and clever, calming detail.",
          "The whole place feels more like a serene private residence than a hotel, right down to the free minibar and the art-lined stairwell. The rooftop restaurant, Salisterra, is a destination in its own right.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "The most soothing hotel in a frenetic city, and a favourite of people who travel for a living. If you value calm and design over marble and gold, book here.",
        ],
      },
    ],
  },
  {
    slug: "hopewell-hotel-hong-kong",
    bookingUrl: "https://www.booking.com/hotel/hk/hopewell.html",
    name: "Hopewell Hotel",
    city: "Hong Kong",
    country: "China",
    region: "Asia",
    category: "Skyline Hotel",
    tagline: "Wan Chai's tallest new stay, a thousand rooms with the harbour at your feet",
    excerpt:
      "The largest five-star hotel on Hong Kong Island, folded into the landmark Hopewell Centre II above Wan Chai, with big, high-floor rooms and sweeping views over the city and the harbour.",
    rating: 4.4,
    priceFrom: 150,
    year: "August 2026",
    heroImage: U("1590490360182-c33d57733427", 2000),
    cardImage: U("1590490360182-c33d57733427", 1000),
    standout:
      "Waking up on a high floor to the whole sweep of Wan Chai and the harbour beyond, then riding the lifts down into one of Hong Kong's most walkable neighbourhoods.",
    quickFacts: [
      { label: "Location", value: "Kennedy Road, Wan Chai" },
      { label: "Rooms", value: "1,000 rooms & suites" },
      { label: "Opened", value: "2024" },
      { label: "Best for", value: "Views, business, first-time Hong Kong" },
    ],
    sections: [
      {
        body: [
          "Hong Kong had not opened a hotel on this scale in years, and the Hopewell arrived at the end of 2024 with a real sense of occasion. It sits inside Hopewell Centre II, a landmark tower rising out of the slope above Wan Chai, and with a thousand rooms across 35 guest floors it is the biggest five-star hotel on Hong Kong Island.",
          "What that size buys you is space and height. Rooms start generous and climb from there, and because the building steps up the hillside, even the lower categories look out over the dense grid of Wan Chai toward the water. It is a modern, capable, view-first hotel rather than a historic grande dame, and for a first trip to Hong Kong that is often exactly what you want.",
        ],
      },
      {
        heading: "The Neighbourhood",
        body: [
          "Wan Chai is one of the most rewarding parts of the city to stay in: old wet markets and dai pai dong street kitchens on one block, cocktail bars and galleries on the next, and the tram rattling through the middle of it all. The convention centre, the Star Ferry, and Causeway Bay's shopping are all an easy walk or a short taxi away.",
          "The hotel leans into that energy with a broad set of restaurants and one of the largest column-free event spaces in town, so it pulls a lively mix of travellers, conference crowds, and locals in for dinner.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "Not the place for old-world romance, but a comfortable, well-run, genuinely impressive new base with some of the best-value high-floor views in Hong Kong. Book high, look out, and use Wan Chai as your way into the city.",
        ],
      },
    ],
  },
  {
    slug: "copacabana-palace-rio",
    bookingUrl: "https://www.booking.com/hotel/br/copacabana-palace.html",
    name: "Copacabana Palace, A Belmond Hotel",
    city: "Rio de Janeiro",
    country: "Brazil",
    region: "The Americas",
    category: "Grand Dame",
    tagline: "The white palace that taught Rio how to be glamorous",
    excerpt:
      "Ninety-something years on the Avenida Atlantica and still the most consequential address in Brazil, with a pool that has hosted more decisive conversations than most boardrooms.",
    rating: 4.8,
    priceFrom: 500,
    year: "August 2026",
    heroImage: U("1483729558449-99ef09a8c325", 2000),
    cardImage: U("1483729558449-99ef09a8c325", 1000),
    standout:
      "Late afternoon at the pool, when the light comes off the white facade and the whole terrace turns the colour of weak tea, and nobody in a deckchair is in any hurry at all.",
    quickFacts: [
      { label: "Location", value: "Copacabana, Rio de Janeiro" },
      { label: "Rooms", value: "239 rooms & suites" },
      { label: "Opened", value: "1923" },
      { label: "Best for", value: "Old-school glamour, beach, carnival" },
    ],
    sections: [
      {
        body: [
          "Rio built the Copacabana Palace before it quite knew what it wanted to be, and then spent a century becoming the city the hotel had imagined. It went up in 1923, a great wedding cake of a building facing a beach that was still half wilderness, and within a decade it had gathered every visiting film star, deposed monarch and dance band in the hemisphere.",
          "What is remarkable is how little of that has curdled into nostalgia. The Copa still functions as a working luxury hotel rather than a museum of one. Belmond has restored it carefully, resisting the temptation to modernise away the things that make it itself, and the result is a building that feels its age in the best possible way.",
        ],
      },
      {
        heading: "The Pool",
        body: [
          "You come for the pool, and you should. It is not the largest in Rio or the newest, but it is unquestionably the most consequential piece of water in Brazil. Politicians have been made and unmade around it. It has appeared in more films than most actors.",
          "In practice it is simply a very good pool, generously proportioned, lined with proper loungers, and staffed by people who understand the difference between attentive and intrusive. Order a caipirinha and watch an entire social order arrange itself around the deep end.",
        ],
      },
      {
        heading: "Rooms and the Question of Which Side",
        body: [
          "The rooms are large and comfortably traditional, with parquet, high ceilings and the sort of proportions that stopped being built decades ago. The decision that matters is the view. Ocean-facing rooms look straight out over Copacabana beach, which is spectacular and, on carnival weekends, extremely loud.",
          "Pool-side rooms are quieter and arguably more atmospheric, since you look down into the courtyard rather than out at the traffic on the Avenida. If you are here to sleep rather than to be photographed, take the pool.",
        ],
      },
      {
        heading: "Eating",
        body: [
          "Cipriani is the grand Italian restaurant and it is genuinely good, which is not always true of grand hotel restaurants with famous names. The Michelin attention it has attracted is deserved.",
          "But the more useful meal is breakfast on the terrace, taken slowly, with the beach filling up in front of you and the mountains behind still holding cloud. It is the best introduction to Rio the city offers.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "A genuine grande dame that has managed the difficult trick of aging without becoming a period piece. If you are going to Rio once, stay here, take a room over the pool, and give yourself one entirely unstructured afternoon.",
        ],
      },
    ],
    featured: true,
  },
  {
    slug: "mandarin-oriental-bangkok",
    bookingUrl: "https://www.booking.com/hotel/th/mandarin-oriental-bangkok.html",
    name: "Mandarin Oriental, Bangkok",
    city: "Bangkok",
    country: "Thailand",
    region: "Asia",
    category: "Grand Dame",
    tagline: "A hundred and forty years on the Chao Phraya, and still the benchmark for service",
    excerpt:
      "The hotel that more or less invented Asian luxury hospitality, sitting on the river with a staff-to-guest ratio and an institutional memory that nothing built since has matched.",
    rating: 4.9,
    priceFrom: 420,
    year: "August 2026",
    heroImage: U("1528181304800-259b08848526", 2000),
    cardImage: U("1528181304800-259b08848526", 1000),
    standout:
      "Breakfast on the Verandah with the river going past at working speed, longtails and rice barges and commuter ferries, while someone quietly remembers how you take your coffee.",
    quickFacts: [
      { label: "Location", value: "Chao Phraya riverside, Bangrak" },
      { label: "Rooms", value: "331 rooms & suites" },
      { label: "Opened", value: "1876" },
      { label: "Best for", value: "Service, the river, long stays" },
    ],
    sections: [
      {
        body: [
          "There is a reasonable argument that modern luxury hospitality was invented here. The Oriental opened on the Chao Phraya in 1876, and over the following century it developed a style of service that the rest of Asia studied, copied and eventually exported to the world.",
          "The remarkable thing is that the original is still the best. Not because the building is the grandest, and certainly not because the rooms are the most fashionable, but because the institutional knowledge has never been broken. Staff stay for decades. Families work here across generations. It shows in a hundred small moments a day.",
        ],
      },
      {
        heading: "The Two Hotels",
        body: [
          "Practically speaking there are two properties here. The Authors' Wing is the original nineteenth-century building, small, wood-panelled and hushed, with suites named for the writers who stayed in them. Somerset Maugham convalesced from malaria in one. Joseph Conrad passed through.",
          "The River Wing is the modern tower, and it is where most guests stay. The rooms are large, quiet and comfortable rather than exciting, and almost all of them face the water. Given that the river is the entire point, this is the correct arrangement.",
        ],
      },
      {
        heading: "The River",
        body: [
          "The Chao Phraya is not a decorative river. It is a working waterway, and watching it is genuinely absorbing: rice barges under tow, longtails at improbable speed, cross-river ferries loaded past any sensible limit.",
          "The hotel runs its own boats continuously, which turns the river into your transport rather than an obstacle. Getting to the old city by water, past the temples, is the single best thing about staying on this bank.",
        ],
      },
      {
        heading: "Eating and the Spa",
        body: [
          "Le Normandie is the formal French room and has held stars for years. The Chinese restaurant is excellent. But the meal people remember is afternoon tea in the Authors' Lounge, a white colonial room under a glass roof, which manages to be a tourist ritual and genuinely lovely at the same time.",
          "The spa sits across the river in a teak house and is reached by boat, which is a small piece of theatre that never gets old. The traditional Thai massage there remains the reference version.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "Newer hotels in Bangkok have better bathrooms, higher views and more Instagram appeal. None of them have this. Stay for the service, take a river-facing room, and give it long enough that the staff learn your name, which will take approximately one day.",
        ],
      },
    ],
    featured: true,
  },
  {
    slug: "royal-mansour-marrakech",
    bookingUrl: "https://www.booking.com/hotel/ma/royal-mansour-marrakech.html",
    name: "Royal Mansour",
    city: "Marrakech",
    country: "Morocco",
    region: "Middle East & Africa",
    category: "Palace Retreat",
    tagline: "Fifty-three private riads, built by a king, staffed through tunnels you never see",
    excerpt:
      "Commissioned by Mohammed VI and executed by 1,500 Moroccan craftsmen, this is less a hotel than a walled medina of private houses, with the entire service operation hidden underground.",
    rating: 4.9,
    priceFrom: 1300,
    year: "August 2026",
    heroImage: U("1539020140153-e479b8c22e70", 2000),
    cardImage: U("1539020140153-e479b8c22e70", 1000),
    standout:
      "Discovering that your riad has three floors, a private plunge pool on the roof, and that breakfast arrives without anyone appearing to have entered the building.",
    quickFacts: [
      { label: "Location", value: "Beside the Menara gardens, Marrakech" },
      { label: "Rooms", value: "53 private riads" },
      { label: "Opened", value: "2010" },
      { label: "Best for", value: "Privacy, craft, once-in-a-lifetime" },
    ],
    sections: [
      {
        body: [
          "The Royal Mansour was commissioned by the King of Morocco, and it was built the way things are built when the budget is not the primary constraint. Around 1,500 craftsmen worked on it for three years. The zellij tilework, the carved cedar, the sculpted plaster and the hand-beaten brass were all made on site by people who had trained for decades.",
          "The result is not a hotel in any conventional sense. It is a small walled medina of fifty-three private riads, each a house of two or three floors with its own courtyard, its own roof terrace and, in most cases, its own plunge pool.",
        ],
      },
      {
        heading: "The Tunnels",
        body: [
          "The detail everyone repeats, and it is true, is that the staff move through a network of underground passages. Housekeeping, room service and maintenance all arrive via a service stair inside your riad rather than by crossing the gardens.",
          "The effect is genuinely strange at first and then completely seductive. The gardens are always empty of trolleys and uniforms. Your breakfast appears. The turndown happens. You never see the mechanism, and after a day you stop wondering about it and simply enjoy the silence.",
        ],
      },
      {
        heading: "Living in a Riad",
        body: [
          "A riad here is a serious amount of space, typically a sitting room and courtyard on the ground floor, bedrooms above, and a roof terrace with a fireplace and a pool on top. Families and couples travelling together get something closer to a private villa than a hotel room.",
          "The craft is the point. Sit in the courtyard for ten minutes and you start noticing the tilework patterns, the way the cedar screens throw shadows, the fact that nothing in the room is machine-made. Very few hotels reward looking closely in this way.",
        ],
      },
      {
        heading: "The Spa, and the City",
        body: [
          "The spa is a three-storey white atrium in wrought iron that looks like a birdcage designed by a perfectionist, with a hammam that is the best in a city full of them. Give it a full afternoon rather than an hour.",
          "The one honest caveat is location. You are just outside the medina rather than inside it, which buys quiet and space but means Marrakech itself arrives by car. The hotel will drive you to the Jemaa el-Fnaa in minutes, but this is not a hotel you wander out of.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "Extravagant in a way that very few places on earth are, and much warmer than that sounds. If you can justify the rate once, this is the sort of hotel that recalibrates what you think is possible. Take a riad with a pool and stay at least three nights.",
        ],
      },
    ],
  },
  {
    slug: "the-connaught-london",
    name: "The Connaught",
    city: "London",
    country: "United Kingdom",
    region: "Europe",
    category: "Grand Dame",
    tagline: "Mayfair's most discreet address, and the best hotel bar in the world",
    excerpt:
      "Red brick and impeccable manners on a quiet Mayfair corner, with a martini trolley that has become a pilgrimage and service that has never needed to raise its voice.",
    rating: 4.8,
    priceFrom: 950,
    year: "August 2026",
    bookingUrl: "https://www.booking.com/hotel/gb/the-connaught-mayfair.html",
    heroImage: U("1513694203232-719a280e022f", 2000),
    cardImage: U("1513694203232-719a280e022f", 1000),
    standout:
      "The martini trolley arriving at your table in the Connaught Bar, where the gin is poured from a height and the whole ritual takes exactly as long as it should.",
    quickFacts: [
      { label: "Location", value: "Carlos Place, Mayfair" },
      { label: "Rooms", value: "121 rooms & suites" },
      { label: "Opened", value: "1815, rebuilt 1897" },
      { label: "Best for", value: "Discretion, dining, the bar" },
    ],
    sections: [
      {
        body: [
          "London has grander hotels and louder ones. It does not have a better-mannered one. The Connaught sits on a quiet corner of Mayfair behind red brick and white stone, and its entire operating philosophy appears to be that nobody should ever feel managed.",
          "It is the hotel of choice for people who could stay anywhere and would rather not be looked at while doing so. The lobby is small. There is no scene. The staff recognise returning guests and say nothing about it.",
        ],
      },
      {
        heading: "The Bar",
        body: [
          "The Connaught Bar has been at or near the top of every serious bar list for over a decade, and unusually for such things, it deserves it. The room is a silvery Cubist box by David Collins, the service is precise without being solemn, and the martini trolley is the best piece of theatre in London hospitality.",
          "You choose a gin or vodka, then a bitters from a small rank of bottles, and the drink is built at your table with unhurried ceremony. It costs a great deal and is worth doing at least once. Book, or arrive early, because it fills.",
        ],
      },
      {
        heading: "Rooms",
        body: [
          "The rooms split between traditional and contemporary, and both are done properly. Ceilings are high, bathrooms are marble and generous, and the soundproofing is genuinely excellent, which matters more in central London than almost anything else.",
          "Ask for something on the Carlos Place side facing the Tadao Ando water feature, or higher up at the back for absolute quiet. Avoid the lowest floors near the entrance if you are a light sleeper.",
        ],
      },
      {
        heading: "Eating",
        body: [
          "Helene Darroze at the Connaught holds three stars and is one of the few hotel restaurants in London that people book for its own sake rather than convenience. Jean-Georges at the Connaught, in the lighter room at the front, is the more useful everyday option and does an excellent lunch.",
          "Afternoon tea in the Espelette is significantly less of a production than at the more touristed London hotels, which is precisely its appeal.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "If you want to be seen, stay elsewhere. If you want the best-run hotel in Mayfair, a bar worth flying for, and a staff that will quietly remember everything, this is the one. Not on Booking.com, so book direct or through a travel agent with Maybourne access.",
        ],
      },
    ],
  },
  {
    slug: "post-ranch-inn-big-sur",
    name: "Post Ranch Inn",
    city: "Big Sur",
    country: "United States",
    region: "The Americas",
    category: "Cliffside Retreat",
    tagline: "Twelve hundred feet above the Pacific, with nothing between you and the horizon",
    excerpt:
      "Adults only, no televisions, and a set of timber and glass cabins built into a Big Sur ridge so carefully that from the road you cannot see the hotel at all.",
    rating: 4.8,
    priceFrom: 1600,
    year: "August 2026",
    directBookingUrl: "https://www.postranchinn.com/",
    heroImage: U("1506905925346-21bda4d32df4", 2000),
    cardImage: U("1506905925346-21bda4d32df4", 1000),
    standout:
      "The infinity pool on the cliff edge at dusk, when the fog comes in below you and you are looking down at the top of it.",
    quickFacts: [
      { label: "Location", value: "Highway 1, Big Sur, California" },
      { label: "Rooms", value: "39 rooms & houses" },
      { label: "Opened", value: "1992" },
      { label: "Best for", value: "Couples, disconnecting, the coast" },
    ],
    sections: [
      {
        body: [
          "Big Sur does not permit much building, and what little exists has to earn its place. Post Ranch Inn manages this better than anywhere else on the coast. Its rooms are timber and glass structures set into a ridge twelve hundred feet above the Pacific, several of them raised on stilts to avoid disturbing the root systems below.",
          "Drive past on Highway 1 and you would not know it was there. That restraint is the whole design argument, and thirty years on it still reads as modern.",
        ],
      },
      {
        heading: "The Rooms",
        body: [
          "There are several types and the choice genuinely matters. The Ocean Houses are cut into the hillside with grass roofs and full-width windows onto the water. The Tree Houses are raised among the redwoods and feel more sheltered, with less of the drama and more of the calm.",
          "All of them have a fireplace, a private deck and no television. There is no clock either. This is deliberate and takes about half a day to stop noticing and then becomes the best thing about the stay.",
        ],
      },
      {
        heading: "The Pools",
        body: [
          "There are two, and the famous one is the heated infinity pool on the cliff edge, which is open around the clock. Swimming there at night, in cold air over a dark ocean, is the memory most people take away.",
          "The second pool sits by the spa and is quieter, which on a busy weekend is worth knowing. The spa itself does treatments in a hut on the cliff with the doors open, weather permitting.",
        ],
      },
      {
        heading: "Practicalities Worth Knowing",
        body: [
          "It is adults only, which is unusual at this level and is the reason the property is as quiet as it is. Rates are all-inclusive of breakfast, and Sierra Mar, the restaurant, is built out over the drop with what is probably the best dining-room view in California.",
          "Highway 1 closes. Landslides shut sections of the road for months at a time, occasionally years, and it is worth checking access before you commit to non-refundable flights.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "Expensive, remote, and completely justified. Come for two or three nights with somebody you like, leave the laptop, and take an Ocean House if the budget stretches. Book direct, as it does not appear on the usual booking sites.",
        ],
      },
    ],
  },
  {
    slug: "splendido-portofino",
    name: "Splendido, A Belmond Hotel",
    city: "Portofino",
    country: "Italy",
    region: "Europe",
    category: "Riviera Classic",
    tagline: "A former monastery above Portofino harbour, and the Ligurian coast at its most composed",
    excerpt:
      "High on the hillside above the prettiest harbour in Italy, in a sixteenth-century monastery turned hotel, with terraced gardens dropping toward the sea.",
    rating: 4.8,
    priceFrom: 1300,
    priceNote: "seasonal, closed in winter",
    year: "August 2026",
    bookingUrl: "https://www.booking.com/hotel/it/splendido-amp-splendido-mare.html",
    heroImage: U("1516483638261-f4dbaf036963", 2000),
    cardImage: U("1516483638261-f4dbaf036963", 1000),
    standout:
      "The walk down through the terraced gardens to the harbour in the early evening, and the considerably slower walk back up after dinner.",
    quickFacts: [
      { label: "Location", value: "Above Portofino harbour, Liguria" },
      { label: "Rooms", value: "69 rooms & suites" },
      { label: "Opened", value: "1901" },
      { label: "Best for", value: "Riviera classicism, couples, boats" },
    ],
    sections: [
      {
        body: [
          "Portofino is a very small harbour that has spent a century absorbing a very large amount of glamour, and the Splendido is where most of it has stayed. The building began as a sixteenth-century Benedictine monastery, became a private villa, and opened as a hotel in 1901.",
          "It sits high on the hillside above the village, reached by a switchback drive through pine and olive, and the separation is the point. You look down on the harbour rather than sitting in it, which on an August afternoon is worth a great deal.",
        ],
      },
      {
        heading: "The Gardens and the Pool",
        body: [
          "The gardens are terraced down the slope in the Ligurian manner, all bougainvillea, lemon and clipped hedge, and they are maintained to an obsessive standard. Walking them in the early morning, before anyone else is up, is one of the quiet pleasures of the place.",
          "The saltwater pool sits on a terrace with the bay laid out below. It is not enormous and on peak days the loungers go early, which is the one genuine constraint on an otherwise faultless operation.",
        ],
      },
      {
        heading: "Rooms, and the Sister Hotel",
        body: [
          "Rooms are classically Italian rather than fashionably minimal, with painted furniture, tiled floors and, in the best of them, a private terrace over the water. The sea-view rooms are worth the premium here more than at almost any other hotel I can think of, because the view is the entire reason to be up the hill.",
          "Belmond also runs Splendido Mare down on the harbour front, which is a different and much smaller hotel. If you want to be in the village rather than above it, that is the one to book, and the two properties share facilities.",
        ],
      },
      {
        heading: "Getting About",
        body: [
          "The hotel runs a shuttle down to the harbour continuously, which you will use more than you expect, since the walk back up is genuinely steep. Boats can be arranged for the Cinque Terre, San Fruttuoso abbey, or simply an afternoon swimming off the point.",
          "Book a table at the harbour restaurants in advance in summer. Portofino has very few of them and the whole coast tries to eat there in August.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "The definitive Italian Riviera hotel, and one of the few places whose reputation and reality actually match. Come in late May or September, take a sea-view room, and do not attempt to walk up from the village after dinner.",
        ],
      },
    ],
  },
];

export const hotels: Hotel[] = hotelCatalogue.map((hotel, index) => {
  const additions = legacyHotelAdditions[hotel.slug];
  const author = editorialAuthorForIndex(index);
  if (!additions?.length) return { ...hotel, author };
  const finalSection = hotel.sections.slice(-1);
  return {
    ...hotel,
    author,
    sections: [...hotel.sections.slice(0, -1), ...additions, ...finalSection],
  };
});

// ---- helpers -------------------------------------------------------------

export const getHotel = (slug: string) => hotels.find((h) => h.slug === slug);

export const getFeatured = () => hotels.filter((h) => h.featured);

export const getRelated = (slug: string, limit = 3) => {
  const current = getHotel(slug);
  if (!current) return hotels.slice(0, limit);
  return hotels
    .filter((h) => h.slug !== slug)
    .sort((a) => (a.region === current.region ? -1 : 1))
    .slice(0, limit);
};

export const regions: Region[] = [
  "Europe",
  "Asia",
  "The Americas",
  "Middle East & Africa",
];
