/**
 * The Hotel Life content store.
 * Single source of truth for hotel guides. Swap this for a CMS or MDX later;
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
      "Thirty-three floors above Otemachi, Aman took the top of a corporate tower and made it the calmest room in Tokyo. It works because of everything it leaves out.",
    rating: 4.9,
    priceFrom: 1150,
    year: "August 2026",
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
    heroImage: U("1564501049412-61c2a3083791", 2000),
    cardImage: U("1564501049412-61c2a3083791", 1000),
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
    heroImage: U("1540541338287-41700207dee6", 2000),
    cardImage: U("1540541338287-41700207dee6", 1000),
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
    heroImage: U("1512918728675-ed5a9ecdebfd", 2000),
    cardImage: U("1512918728675-ed5a9ecdebfd", 1000),
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
    heroImage: U("1445019980597-93fa8acb246c", 2000),
    cardImage: U("1445019980597-93fa8acb246c", 1000),
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
    heroImage: U("1523805009345-7448845a9e53", 2000),
    cardImage: U("1523805009345-7448845a9e53", 1000),
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
    heroImage: U("1513635269975-59663e0ac1ad", 2000),
    cardImage: U("1513635269975-59663e0ac1ad", 1000),
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
    heroImage: U("1501785888041-af3ef285b470", 2000),
    cardImage: U("1501785888041-af3ef285b470", 1000),
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
    heroImage: U("1542314831-068cd1dbfeeb", 2000),
    cardImage: U("1542314831-068cd1dbfeeb", 1000),
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
    heroImage: U("1596436889106-be35e843f974", 2000),
    cardImage: U("1596436889106-be35e843f974", 1000),
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
    heroImage: U("1571003123894-1f0594d2b5d9", 2000),
    cardImage: U("1571003123894-1f0594d2b5d9", 1000),
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
    year: "December 2026",
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
