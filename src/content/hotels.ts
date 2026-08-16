/**
 * The Hotel Life — content store
 * Single source of truth for hotel guides. Swap this for a CMS/MDX later;
 * pages read only from these exported helpers.
 */

export type Region = "Europe" | "Asia" | "The Americas" | "Middle East & Africa";

export interface Section {
  heading?: string;
  body: string[]; // paragraphs
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
  heroImage: string;
  cardImage: string;
  quickFacts: { label: string; value: string }[];
  standout: string;
  sections: Section[];
  featured?: boolean;
}

const U = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const hotels: Hotel[] = [
  {
    slug: "aman-tokyo",
    name: "Aman Tokyo",
    city: "Tokyo",
    country: "Japan",
    region: "Asia",
    category: "Urban Sanctuary",
    tagline: "A vertical garden of silence above the world's busiest city",
    excerpt:
      "Thirty-three floors above Otemachi, Aman turned the penthouse of a corporate tower into the calmest room in Tokyo. The genius is restraint.",
    rating: 4.9,
    priceFrom: 1150,
    year: "August 2026",
    heroImage: U("1611892440504-42a792e24d32", 2000),
    cardImage: U("1611892440504-42a792e24d32", 1000),
    standout:
      "The 30-metre-long onsen bath, walled in black granite, looking out over the Imperial Palace gardens at dawn.",
    quickFacts: [
      { label: "Location", value: "Otemachi, Tokyo" },
      { label: "Rooms", value: "84 rooms & suites" },
      { label: "Opened", value: "2014" },
      { label: "Best for", value: "Design pilgrims, jet-lag recovery" },
    ],
    sections: [
      {
        body: [
          "You arrive expecting a hotel and instead walk into a shrine. The lift doors open onto the 33rd floor and a lobby that is essentially a single, enormous room — a soaring atrium wrapped in washi paper and dark timber, a genkan on a scale usually reserved for temples. Outside the floor-to-ceiling glass, Tokyo simply drops away.",
          "This is Aman's first city hotel, and the brand — famous for barefoot beach resorts — had to answer a hard question: what does serenity mean in a place with 37 million people? The answer, it turns out, is height, material, and an almost fanatical devotion to empty space.",
        ],
      },
      {
        heading: "The Rooms",
        body: [
          "Rooms start at a genuinely generous 71 square metres, which in central Tokyo is a form of decadence money can rarely buy. Each is centred on an engawa-style daybed pushed up against the window, and a deep furo bathtub positioned so you can lie back and watch the city glitter.",
          "The palette never wavers: camphor wood, stone, paper, and a single line of warm light tracing the ceiling. There are no gold taps, no marble lobbies, no chandeliers. It is luxury defined entirely by subtraction.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "Aman Tokyo is not the place for travellers who want their opulence loud. It is for the ones who understand that the rarest thing in a megacity is quiet — and are willing to pay for a perfect, engineered version of it.",
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
      "After a four-year, top-to-toe restoration, the address on Place Vendôme is once again the most romantic — and most photographed — hotel in France.",
    rating: 4.8,
    priceFrom: 1400,
    year: "July 2026",
    heroImage: U("1502602898657-3e91760cbb34", 2000),
    cardImage: U("1502602898657-3e91760cbb34", 1000),
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
          "When César Ritz opened his hotel in 1898, he invented much of what we now take for granted: the ensuite bathroom, the telephone in every room, the idea that a hotel could be a stage as much as a shelter. More than a century later, the Ritz is still writing the script.",
          "The 2012–2016 restoration was so thorough that the hotel effectively closed and rebuilt itself behind its Louis XVI façade. What emerged is not a museum but a living, gilded thing — softer, brighter, and far more comfortable than the grande dame it replaced.",
        ],
      },
      {
        heading: "The Rooms",
        body: [
          "The Coco Chanel Suite, where the designer lived for 34 years, is the one everyone wants. But even standard rooms carry the full Ritz language: swagged curtains, marble bathrooms, and hand-embroidered linens turned down each night with a Ritz-blue box of chocolates.",
          "The showpiece is the Grand Jardin — a private courtyard garden where breakfast, in warm months, feels like a scene borrowed from a film.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "Some hotels chase the future. The Ritz Paris perfects the past. If you want to understand where the entire idea of the luxury hotel came from, you stay here — and you stay at least two nights.",
        ],
      },
    ],
    featured: true,
  },
  {
    slug: "marina-bay-sands",
    name: "Marina Bay Sands",
    city: "Singapore",
    country: "Singapore",
    region: "Asia",
    category: "Icon",
    tagline: "The infinity pool that rewrote a city's skyline",
    excerpt:
      "Three towers, a ship balanced on top, and the most famous rooftop pool on earth. It's a spectacle — and, surprisingly, it earns the hype.",
    rating: 4.5,
    priceFrom: 520,
    year: "June 2026",
    heroImage: U("1564501049412-61c2a3083791", 2000),
    cardImage: U("1564501049412-61c2a3083791", 1000),
    standout:
      "Floating at the edge of the 150-metre SkyPark infinity pool at dusk, the entire Singapore skyline lit up below your chin.",
    quickFacts: [
      { label: "Location", value: "Marina Bay" },
      { label: "Rooms", value: "2,561 rooms & suites" },
      { label: "Opened", value: "2010" },
      { label: "Best for", value: "First-timers, that photo" },
    ],
    sections: [
      {
        body: [
          "Let's be honest about why you're here: the pool. The 57th-floor SkyPark infinity edge is one of the most recognisable images in modern travel, and no amount of critical detachment quite prepares you for the moment you actually swim to it.",
          "But Marina Bay Sands is more than one photograph. Moshe Safdie's three-tower design has become the visual shorthand for Singapore itself, and the resort underneath the boat is a small city of restaurants, a casino, a mall with a canal, and a museum shaped like a lotus.",
        ],
      },
      {
        heading: "The Rooms",
        body: [
          "Rooms are large, cool, and relentlessly modern, with the higher floors delivering skyline views that justify the climb in category. This is not a boutique experience — with 2,500-plus rooms, it never could be — but the operation is astonishingly smooth for its scale.",
          "Book a Club room for SkyPark access without the day-guest crowds, and aim for a bay-facing tower.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "Purists will sniff at the scale and the casino. Everyone else will have the time of their lives. Some experiences are famous because they're genuinely worth it, and that pool is one of them.",
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
      "It calls itself seven stars. It isn't — no such thing exists — but the sheer, gold-leafed audacity of the place is a destination in its own right.",
    rating: 4.4,
    priceFrom: 1600,
    year: "May 2026",
    heroImage: U("1540541338287-41700207dee6", 2000),
    cardImage: U("1540541338287-41700207dee6", 1000),
    standout:
      "Arriving by chauffeured Rolls-Royce across the private bridge, then riding to a duplex suite with a private butler on call around the clock.",
    quickFacts: [
      { label: "Location", value: "Jumeirah, Dubai" },
      { label: "Rooms", value: "202 duplex suites" },
      { label: "Opened", value: "1999" },
      { label: "Best for", value: "Maximalists, special occasions" },
    ],
    sections: [
      {
        body: [
          "There is no such thing as a subtle stay at the Burj Al Arab. Everything is a duplex suite, everything is butlered, and roughly 1,800 square metres of the interior is covered in 24-carat gold leaf. It is the physical embodiment of turn-of-the-millennium Dubai ambition, and it has aged into something almost nostalgic.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "As a piece of design restraint, it fails completely — and gloriously. You don't come to the Burj for taste. You come for the spectacle, and on that promise it has never once under-delivered.",
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
      "Behind the ramparts of the medina lies a 200-year-old garden and a hotel that has hosted everyone from Winston Churchill to the entire fashion set.",
    rating: 4.7,
    priceFrom: 750,
    year: "April 2026",
    heroImage: U("1512918728675-ed5a9ecdebfd", 2000),
    cardImage: U("1512918728675-ed5a9ecdebfd", 1000),
    standout:
      "Mint tea in the 200-year-old gardens at golden hour, orange blossom in the air and the Koutoubia minaret glowing pink beyond the palms.",
    quickFacts: [
      { label: "Location", value: "Medina, Marrakech" },
      { label: "Rooms", value: "209 rooms, suites & riads" },
      { label: "Opened", value: "1923" },
      { label: "Best for", value: "Gardens, romance, craft" },
    ],
    sections: [
      {
        body: [
          "Churchill painted here. He called it \"the most lovely spot in the whole world,\" and a century of guests have struggled to disagree. La Mamounia is a masterclass in Moroccan craft — zellige tilework, carved cedar, and hand-poured tadelakt plaster applied by artisans over years, not months.",
          "The gardens are the real star: nearly seven hectares of olive groves, rose beds and centenarian palms, laid out two centuries ago as a wedding gift from a sultan to his son.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "Few hotels marry grandeur and sense of place this completely. La Mamounia doesn't feel imported into Marrakech — it feels like the city's beating heart, dressed in its very best.",
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
      "A French Renaissance landmark at the corner of Fifth and 59th — equal parts fairy tale, film set, and living piece of New York mythology.",
    rating: 4.3,
    priceFrom: 895,
    year: "March 2026",
    heroImage: U("1445019980597-93fa8acb246c", 2000),
    cardImage: U("1445019980597-93fa8acb246c", 1000),
    standout:
      "Afternoon tea in the Palm Court under the restored stained-glass ceiling — a New York ritual that has survived a full century.",
    quickFacts: [
      { label: "Location", value: "Fifth Ave & Central Park" },
      { label: "Rooms", value: "282 rooms & suites" },
      { label: "Opened", value: "1907" },
      { label: "Best for", value: "Park views, classic New York" },
    ],
    sections: [
      {
        body: [
          "Since 1907, The Plaza has been the backdrop to New York's biggest moments, real and fictional — from the Beatles' first American press conference to Eloise's imagined rampages down its corridors. To stay here is to check into the city's collective memory.",
          "A gut renovation in the 2000s restored the mosaic floors and 24-carat gold-plated fixtures while quietly modernising everything behind the walls. The result is a hotel that photographs like 1907 and functions like today.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "It is touristy, and it knows it. But request a Central Park–facing room, take tea in the Palm Court, and you'll understand why this particular château has stayed famous for well over a century.",
        ],
      },
    ],
  },
  {
    slug: "belmond-hotel-caruso",
    name: "Belmond Hotel Caruso",
    city: "Ravello",
    country: "Italy",
    region: "Europe",
    category: "Cliffside Retreat",
    tagline: "An 11th-century palazzo suspended over the Amalfi Coast",
    excerpt:
      "1,000 feet above the Tyrrhenian Sea, a former bishop's palace holds the most photographed infinity pool in Italy — and a view that ruins you for anywhere else.",
    rating: 4.9,
    priceFrom: 1300,
    year: "August 2026",
    heroImage: U("1582719478250-c89cae4dc85b", 2000),
    cardImage: U("1582719478250-c89cae4dc85b", 1000),
    standout:
      "Swimming to the edge of the infinity pool as it seems to pour straight off the cliff into the blue of the Amalfi coastline.",
    quickFacts: [
      { label: "Location", value: "Ravello, Amalfi Coast" },
      { label: "Rooms", value: "50 rooms & suites" },
      { label: "Opened", value: "restored 2005" },
      { label: "Best for", value: "Honeymoons, that view" },
    ],
    sections: [
      {
        body: [
          "Ravello sits high above the tourist crush of the Amalfi Coast, and the Caruso sits highest of all — an 11th-century palazzo whose frescoed ceilings and marble columns were painstakingly recovered during a restoration that took the better part of a decade.",
          "The infinity pool, cantilevered over a thousand feet of sheer drop, has become one of the defining images of Italian summer. It deserves the fame. Few man-made spaces frame the natural world so perfectly.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "This is the coast at its most rarefied — above the day-trippers, above the traffic, above almost everything. Come for a honeymoon, or come to propose. Either way, you'll leave changed.",
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
      "Conservation-first safari at its most refined — glass-walled suites, a private reserve teeming with leopard, and a level of service that feels almost telepathic.",
    rating: 4.9,
    priceFrom: 2100,
    priceNote: "all-inclusive",
    year: "July 2026",
    heroImage: U("1516426122078-c23e76319801", 2000),
    cardImage: U("1516426122078-c23e76319801", 1000),
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
          "Singita built its reputation on a simple idea: that luxury and conservation are not opposites but partners. Every rate helps fund the protection of hundreds of thousands of hectares of African wilderness, and the guiding is among the best on the continent.",
          "The suites — glass, stone and canvas, open to the bush — dissolve the line between inside and out. You fall asleep to the sound of the reserve and wake to it too.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "A safari here is not cheap, and it should not be. This is travel with a conscience and a view — proof that the most meaningful luxury of all might be a wild place, kept wild.",
        ],
      },
    ],
  },
  {
    slug: "hotel-cipriani-venice",
    name: "Belmond Hotel Cipriani",
    city: "Venice",
    country: "Italy",
    region: "Europe",
    category: "Island Retreat",
    tagline: "A garden hideaway a two-minute boat ride from St Mark's — and a world away",
    excerpt:
      "On the tip of Giudecca, the Cipriani offers the one thing Venice never can: space. Olympic-length pool, Casanova's old garden, and no crowds at breakfast.",
    rating: 4.8,
    priceFrom: 1450,
    year: "August 2026",
    heroImage: U("1523805009345-7448845a9e53", 2000),
    cardImage: U("1523805009345-7448845a9e53", 1000),
    standout:
      "Crossing the lagoon at dusk on the hotel's private teak launch, the domes of San Marco going gold as the city lights come up behind you.",
    quickFacts: [
      { label: "Location", value: "Giudecca, Venice" },
      { label: "Rooms", value: "96 rooms & suites" },
      { label: "Opened", value: "1958" },
      { label: "Best for", value: "Space, gardens, arriving by boat" },
    ],
    sections: [
      {
        body: [
          "Venice is a masterpiece you have to share with forty thousand day-trippers. The Cipriani's genius is that it removes you from all of it without removing you from the city. The hotel's own motoscafo meets you at St Mark's and, ninety seconds later, deposits you into three acres of walled gardens where the loudest sound is birdsong.",
          "Giuseppe Cipriani — the man who invented the Bellini and the carpaccio at nearby Harry's Bar — opened this place in 1958 as a refuge for people who could go anywhere and wanted, above all, not to be bothered. Sixty-five years on, that remains the entire point.",
        ],
      },
      {
        heading: "The Rooms",
        body: [
          "Interiors are Venetian in the grown-up sense — Fortuny fabrics, Murano glass, marble bathrooms — without tipping into pastiche. The suites in the Palazzo Vendramin annex come with a butler and a private terrace over the water that is, frankly, worth the entire trip.",
          "But the real luxury is horizontal: the saltwater pool, one of the largest in Italy, was reputedly built the wrong length by mistake and nobody ever complained.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "If it is your first time in Venice, stay in the thick of it. If it is your fourth, and you have earned the right to watch the circus from a garden across the water — this is the only address that matters.",
        ],
      },
    ],
    featured: true,
  },
  {
    slug: "claridges-london",
    name: "Claridge's",
    city: "London",
    country: "United Kingdom",
    region: "Europe",
    category: "Grande Dame",
    tagline: "The Art Deco drawing room of Mayfair, and Britain's unofficial second palace",
    excerpt:
      "Royalty checks in under pseudonyms, the foyer serves the best afternoon tea in London, and the service runs like a Swiss watch wearing white gloves.",
    rating: 4.8,
    priceFrom: 990,
    year: "July 2026",
    heroImage: U("1513635269975-59663e0ac1ad", 2000),
    cardImage: U("1513635269975-59663e0ac1ad", 1000),
    standout:
      "Tea beneath the shimmering Chihuly chandelier in the foyer, a pianist playing, as three generations of a family celebrate something they won't explain.",
    quickFacts: [
      { label: "Location", value: "Mayfair, London" },
      { label: "Rooms", value: "190 rooms & suites" },
      { label: "Opened", value: "1856" },
      { label: "Best for", value: "Afternoon tea, quiet grandeur" },
    ],
    sections: [
      {
        body: [
          "During the Second World War, so many exiled monarchs sheltered at Claridge's that a Churchill aide reportedly asked to speak to \"the King\" and had to specify which one. That sense of the hotel as a kind of neutral embassy for the very grand has never entirely faded.",
          "The building is a study in restrained Art Deco — sweeping black-and-white marble, silver, and mirror — and the service is the finest in London: anticipatory without being obsequious, warm without being familiar. Staff remember your name, your drink, and the fact that you don't like to be spoken to before coffee.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "Some London hotels are flashier and several are newer. None feels quite so much like being let in on a very old, very civilised secret. Book the tea even if you don't stay.",
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
    heroImage: U("1551882547-ff40c63fe5fa", 2000),
    cardImage: U("1551882547-ff40c63fe5fa", 1000),
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
          "F. Scott Fitzgerald set Tender Is the Night here, thinly disguised as the Hôtel des Étrangers, and the place has been trading on — and living up to — that mythology ever since. During the Cannes festival it fills with a wattage of celebrity that makes the paparazzi weep with frustration at the gates.",
          "For decades it famously refused all credit cards, a policy that filtered its clientele more effectively than any velvet rope. The pool, carved out of the white rock above the sea, remains one of the most beautiful man-made things on the entire coast.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "It is absurdly expensive and gloriously unbothered about it. This is the Riviera as it exists in the collective imagination — and, remarkably, the reality still delivers.",
        ],
      },
    ],
    featured: true,
  },
  {
    slug: "badrutts-palace-st-moritz",
    name: "Badrutt's Palace",
    city: "St. Moritz",
    country: "Switzerland",
    region: "Europe",
    category: "Alpine Grande Dame",
    tagline: "The turreted castle that invented the winter holiday",
    excerpt:
      "A fairy-tale silhouette above a frozen lake, where the Engadine light, the Cresta Run, and 130 years of aristocratic après-ski all still hold court.",
    rating: 4.6,
    priceFrom: 1250,
    year: "January 2026",
    heroImage: U("1501785888041-af3ef285b470", 2000),
    cardImage: U("1501785888041-af3ef285b470", 1000),
    standout:
      "Skiing back to the door as the alpenglow turns the Engadine peaks rose-pink, then thawing by the fire in the Renaissance Bar with a glass of something Swiss and expensive.",
    quickFacts: [
      { label: "Location", value: "St. Moritz, Engadine" },
      { label: "Rooms", value: "155 rooms & suites" },
      { label: "Opened", value: "1896" },
      { label: "Best for", value: "Winter sport, mountain glamour" },
    ],
    sections: [
      {
        body: [
          "Johannes Badrutt is the man who, legend has it, bet a group of English summer guests in 1864 that St Moritz was even more beautiful under snow — and if he was wrong, he'd cover their travel. He won. In doing so he more or less invented alpine winter tourism, and his family's Palace has presided over it ever since.",
          "The hotel is unapologetically grand: a stone tower, wood-panelled halls, and the extraordinary Engadine light pouring off the frozen lake. There is a formality here that has largely vanished elsewhere, and in this setting it feels not stuffy but correct.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "This is the mountain holiday at its most storied. Come for the skiing; stay for the sense that you've stepped into a world that decided, sometime around 1910, that it was perfect exactly as it was.",
        ],
      },
    ],
  },
  {
    slug: "peninsula-hong-kong",
    name: "The Peninsula Hong Kong",
    city: "Hong Kong",
    country: "Hong Kong SAR",
    region: "Asia",
    category: "Grande Dame",
    tagline: "The Grande Dame of the Far East, with a fleet of green Rolls-Royces to prove it",
    excerpt:
      "Since 1928, the Peninsula has been Kowloon's answer to grand European hotels — colonnaded lobby, harbour views, and a helipad on the roof.",
    rating: 4.7,
    priceFrom: 780,
    year: "May 2026",
    heroImage: U("1542314831-068cd1dbfeeb", 2000),
    cardImage: U("1542314831-068cd1dbfeeb", 1000),
    standout:
      "Afternoon tea in the gilded lobby as a string quartet plays on the mezzanine — a colonial-era ritual that Hong Kong has somehow kept alive through everything.",
    quickFacts: [
      { label: "Location", value: "Tsim Sha Tsui, Kowloon" },
      { label: "Rooms", value: "300 rooms & suites" },
      { label: "Opened", value: "1928" },
      { label: "Best for", value: "Harbour views, classic service" },
    ],
    sections: [
      {
        body: [
          "The Peninsula was built to receive passengers stepping off the Orient Express's eastern connections, and it still carries that whiff of golden-age travel — the fourteen custom Rolls-Royce Phantoms in Peninsula green, the page boys in white, the sheer ceremony of arrival.",
          "A modern tower added harbour-facing rooms with views across to the Hong Kong Island skyline that are, at night, close to overwhelming. Technology is quietly everywhere: nail dryers in the bathrooms, tablets controlling every drape and light, a rooftop helipad for the impatient.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "A masterclass in how a historic hotel stays relevant without losing its soul. The tea is a tourist ritual; the harbour-view suites are the real reason to book.",
        ],
      },
    ],
  },
  {
    slug: "soneva-fushi-maldives",
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
    heroImage: U("1439066615861-d1af74d74000", 2000),
    cardImage: U("1439066615861-d1af74d74000", 1000),
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
          "When Sonu and Eva Shivdasani opened Soneva Fushi on a jungly, uninhabited island in 1995, they inverted the rules of tropical luxury: no marble, no shoes, no ostentation. Instead: enormous villas of timber and thatch hidden in the foliage, each with a private pool and a garden you could get lost in.",
          "Three decades on, it remains the benchmark, and one of the most quietly sustainable resorts in the region — its own water, its own vegetables, a serious waste-to-wealth programme, and a resident astronomer for the rooftop observatory.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "Overwater villas photograph better, but nothing beats the feeling of a private jungle that happens to open onto a coral reef. This is the Maldives with substance as well as sand.",
        ],
      },
    ],
    featured: true,
  },
  {
    slug: "oberoi-udaivilas-udaipur",
    name: "The Oberoi Udaivilas",
    city: "Udaipur",
    country: "India",
    region: "Asia",
    category: "Palace Hotel",
    tagline: "A modern palace on Lake Pichola that out-palaces the actual palaces",
    excerpt:
      "Built as a maharana's residence would have been, with domes, courtyards and reflecting pools mirrored in the lake. Regularly voted among the finest hotels on earth.",
    rating: 4.9,
    priceFrom: 900,
    year: "March 2026",
    heroImage: U("1596436889106-be35e843f974", 2000),
    cardImage: U("1596436889106-be35e843f974", 1000),
    standout:
      "Being rowed across Lake Pichola to dinner as the City Palace lights come on, the domes of Udaivilas glowing behind you like something out of a dream.",
    quickFacts: [
      { label: "Location", value: "Lake Pichola, Udaipur" },
      { label: "Rooms", value: "83 rooms & suites" },
      { label: "Opened", value: "2002" },
      { label: "Best for", value: "Romance, Rajasthani grandeur" },
    ],
    sections: [
      {
        body: [
          "Udaipur is India's most romantic city, a place of white palaces floating on lakes, and the Oberoi group had the confidence to add to that skyline rather than merely convert an old building. Udaivilas was designed from scratch in the tradition of a Mewar palace — 30 acres of domes, frescoed courtyards, and a private lakefront that once belonged to the royal hunting grounds.",
          "It should feel like a pastiche. Instead, thanks to genuine craftsmanship — hand-laid stone, gold-leaf ceilings, semi-precious inlay — it feels like the real thing, only with air-conditioning and a spa.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "Proof that a new hotel, built with enough artistry and reverence, can earn a place among the icons. For a honeymoon, there may be no more beautiful room on the subcontinent.",
        ],
      },
    ],
    featured: true,
  },
  {
    slug: "park-hyatt-tokyo",
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
    heroImage: U("1618773928121-c32242e63f39", 2000),
    cardImage: U("1618773928121-c32242e63f39", 1000),
    standout:
      "A Suntory whisky in the New York Bar as the pianist plays and Tokyo spreads out fifty-two floors below — the exact frame Sofia Coppola made famous.",
    quickFacts: [
      { label: "Location", value: "Shinjuku, Tokyo" },
      { label: "Rooms", value: "155 rooms & suites" },
      { label: "Opened", value: "1994" },
      { label: "Best for", value: "Cinephiles, city views, jazz" },
    ],
    sections: [
      {
        body: [
          "For a generation of travellers, this hotel is inseparable from a film. Lost in Translation turned the Park Hyatt's top floors — the cloud-level pool, the wood-lined library, the New York Bar with its wall of glass — into a mood as much as a place: jet-lagged, insomniac, quietly romantic.",
          "The remarkable thing is how well it has aged. Where newer Tokyo hotels shout, the Park Hyatt murmurs, in warm timber and soft light. The rooms are huge by Tokyo standards, with deep tubs and windows framing Mount Fuji on clear winter mornings.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "It no longer holds the title of Tokyo's most cutting-edge hotel, and it doesn't want to. It offers something rarer — atmosphere — and few hotels anywhere have more of it.",
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
      "Aman built into the raw geology of the Colorado Plateau — a minimalist compound where a central pool curls around a 165-million-year-old rock.",
    rating: 4.9,
    priceFrom: 3400,
    priceNote: "suite",
    year: "August 2026",
    heroImage: U("1544644181-1484b3fdfc62", 2000),
    cardImage: U("1544644181-1484b3fdfc62", 1000),
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
          "Amangiri is less a hotel than a work of land art you can sleep in. The architects poured board-formed concrete the exact grey-gold of the surrounding rock, so the building seems to have been quarried rather than built. From a distance you can barely find it.",
          "The suites are monastic in the best sense — vast, spare, and oriented so that the desert becomes the only decoration. There are no televisions competing with the view, and the view, frankly, would win. Days are spent slot-canyoning, floating on Lake Powell, or doing gloriously nothing at all.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "The price is eye-watering and the experience nearly justifies it. If you want to understand what luxury minimalism actually means, this remote patch of Utah is where to learn it.",
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
      "Bungalows, banana-leaf wallpaper, and a poolside where studio history was written. Faded a touch, but the myth is fully intact.",
    rating: 4.4,
    priceFrom: 850,
    year: "July 2026",
    heroImage: U("1571003123894-1f0594d2b5d9", 2000),
    cardImage: U("1571003123894-1f0594d2b5d9", 1000),
    standout:
      "A Cobb salad in a green-leather booth at the Polo Lounge, watching an agent and a director pretend they're not making a deal three tables over.",
    quickFacts: [
      { label: "Location", value: "Sunset Boulevard, LA" },
      { label: "Rooms", value: "210 rooms & bungalows" },
      { label: "Opened", value: "1912" },
      { label: "Best for", value: "Old Hollywood, poolside scenes" },
    ],
    sections: [
      {
        body: [
          "Before there was a Beverly Hills, there was the hotel — built in 1912 on a bean field, with the town growing up around it. The famous Martin Brothers banana-leaf wallpaper, the pink stucco, the script logo: this is the aesthetic that half of Los Angeles has spent a century imitating.",
          "The bungalows, scattered through tropical gardens, are where the real legends played out — Marilyn, Garbo, the Taylor-Burton dramas. They remain the thing to book, private and hushed and thick with ghosts.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "As a functioning luxury hotel it has newer, sharper rivals across town. As a piece of living Hollywood mythology, it has no competition at all. Come for the poolside and the Polo Lounge, not the thread count.",
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
      "On stilts at the far edge of Newfoundland, a social-enterprise hotel where every dollar reinvests in the community and every window frames raw, roaring ocean.",
    rating: 4.8,
    priceFrom: 1975,
    priceNote: "full board, all-inclusive",
    year: "September 2026",
    heroImage: U("1470071459604-3b5ec3a7fe05", 2000),
    cardImage: U("1470071459604-3b5ec3a7fe05", 1000),
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
          "Fogo Island Inn is what happens when a hometown-born tech millionaire decides to save a dying fishing community with architecture. Every penny of surplus flows back into the island through a charitable foundation, which means your stay is also, quietly, an act of preservation.",
          "The building itself is startling: a long white modernist form balanced on stilts, angled at the sea like a ship about to launch. Inside, it's all handmade — quilts stitched by island women, furniture built in local workshops — and every one of the 29 suites stares straight down the throat of the Atlantic.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "Remote, expensive, and completely singular. You don't come to Fogo to relax by a pool; you come to feel the weather, eat extraordinary food, and remember that a hotel can be a force for good.",
        ],
      },
    ],
  },
  {
    slug: "explora-patagonia",
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
    year: "November 2026",
    heroImage: U("1517840901100-8179e982acb7", 2000),
    cardImage: U("1517840901100-8179e982acb7", 1000),
    standout:
      "Returning from an eight-hour trek to the base of the granite towers, muscles aching, to a hot tub perched over the Salto Chico waterfall as condors wheel overhead.",
    quickFacts: [
      { label: "Location", value: "Torres del Paine, Patagonia" },
      { label: "Rooms", value: "49 rooms" },
      { label: "Opened", value: "1993" },
      { label: "Best for", value: "Hikers, wild landscapes" },
    ],
    sections: [
      {
        body: [
          "Explora pioneered the idea of the luxury base camp — a comfortable, all-inclusive lodge planted deep inside a landscape most people only glimpse from a tour bus. This one sits right on the shore of Lake Pehoé, with the jagged Paine massif filling every window.",
          "The model is refreshingly active: your rate includes dozens of guided explorations, from gentle lakeside walks to punishing full-day treks, led by guides who read the fickle Patagonian weather like a language. You hike hard, eat well, and sleep like the dead.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "This is not a place to lie down; it's a place to be moved through one of the planet's great wildernesses in comfort. For anyone who measures a holiday in kilometres walked, it is close to perfect.",
        ],
      },
    ],
  },
  {
    slug: "one-and-only-cape-town",
    name: "One&Only Cape Town",
    city: "Cape Town",
    country: "South Africa",
    region: "Middle East & Africa",
    category: "Urban Resort",
    tagline: "Table Mountain on one side, the working waterfront on the other",
    excerpt:
      "A polished marina resort at the foot of Table Mountain, with island spa suites, a serious wine list, and one of the best views in any city on earth.",
    rating: 4.6,
    priceFrom: 640,
    year: "December 2026",
    heroImage: U("1587734195503-904fca47e0e9", 2000),
    cardImage: U("1587734195503-904fca47e0e9", 1000),
    standout:
      "Breakfast on the terrace as the morning cloud — the famous 'tablecloth' — pours slowly over the top of Table Mountain and dissolves in the sun.",
    quickFacts: [
      { label: "Location", value: "V&A Waterfront, Cape Town" },
      { label: "Rooms", value: "131 rooms & suites" },
      { label: "Opened", value: "2009" },
      { label: "Best for", value: "City-and-nature, wine, families" },
    ],
    sections: [
      {
        body: [
          "Cape Town is one of the most dramatically sited cities anywhere, and this resort makes the most of it — a low, contemporary spread of buildings around a private marina, with Table Mountain looming so close it feels theatrical. The best rooms look straight at it; accept nothing less.",
          "There's a genuine sense of place here, from the Cape wine cellar to the local artwork, and the location puts you a stroll from the V&A Waterfront's restaurants and the boats out to Robben Island.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "A rare resort that delivers both a great city and a great landscape without asking you to choose. Use it as a luxurious launch pad for the Cape — the Winelands and the coast are an easy drive.",
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
    year: "October 2026",
    heroImage: U("1549294413-26f195200c16", 2000),
    cardImage: U("1549294413-26f195200c16", 1000),
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
          "There is exactly one reason Giraffe Manor is one of the most photographed hotels on the planet, and it is precisely as magical as the pictures suggest. The resident herd of Rothschild's giraffes — an endangered subspecies the estate helps protect — wanders up from the neighbouring sanctuary each morning and evening, angling its heads through the manor's windows in search of treats.",
          "Beyond the giraffes, the manor itself is a lovely 1930s stone house, all fireplaces, chintz and colonial-era charm, with just twelve rooms. It books out a year ahead, and the wait is worth it.",
        ],
      },
      {
        heading: "The Verdict",
        body: [
          "A one-trick hotel, perhaps — but what a trick. Pair it with a proper safari, treat it as a two-night bookend to a Kenyan trip, and prepare for the most charming breakfast of your life.",
        ],
      },
    ],
    featured: true,
  },
];

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
