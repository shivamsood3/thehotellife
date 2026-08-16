/**
 * The Hotel Life - editorial city & travel guides.
 * Longer-form pieces that sit alongside the hotel reviews.
 */
import type { Region } from "./hotels";

export interface GuideSection {
  heading?: string;
  body: string[];
}

export interface Guide {
  slug: string;
  title: string;
  destination: string;
  region: Region;
  dek: string; // sub-headline
  excerpt: string;
  author: string;
  readTime: number; // minutes
  date: string;
  heroImage: string;
  cardImage: string;
  hotelSlugs: string[]; // "where to stay" - links into hotels.ts
  sections: GuideSection[];
  featured?: boolean;
}

const U = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const guides: Guide[] = [
  {
    slug: "48-hours-in-tokyo",
    title: "48 Hours in Tokyo, the Hotel Insider's Way",
    destination: "Tokyo, Japan",
    region: "Asia",
    dek: "How to fall for the world's most overwhelming city in two well-planned days.",
    excerpt:
      "Tokyo doesn't reward the frantic. Our two-day itinerary trades the checklist for a handful of exact, unforgettable moments, plus the two hotels worth basing yourself in.",
    author: "The Hotel Life Editors",
    readTime: 8,
    date: "August 2026",
    heroImage: U("1540959733332-eab4deabeeaf", 2000),
    cardImage: U("1540959733332-eab4deabeeaf", 1000),
    hotelSlugs: ["aman-tokyo", "park-hyatt-tokyo"],
    sections: [
      {
        body: [
          "The first thing to know about Tokyo is that you can't conquer it. The city holds thirty-seven million people and what feels like an infinite number of restaurants, and any attempt to 'do' it in a weekend ends with you slumped, defeated, on the Yamanote Line. So don't try. Two days in Tokyo should be about depth rather than breadth: a few precise, beautifully done experiences that leave you itching to come back.",
        ],
      },
      {
        heading: "Day One: Old Tokyo, Slowly",
        body: [
          "Start before the city does. Be at Senso-ji temple in Asakusa by seven, when the great red lantern hangs over an empty gate and incense smoke drifts through the quiet. By nine the tour groups arrive, and by then you should be gone, eating grilled eel for breakfast down a side street where no menu is in English.",
          "Spend the afternoon in the back lanes of Yanaka, one of the few districts to survive both the war and the bubble intact. Wooden houses, cat-filled temples, and a shopping street selling the same croquettes it sold in 1950. Finish at a sento, a neighbourhood bathhouse, and come out pink and reset.",
        ],
      },
      {
        heading: "Day Two: The City of the Future",
        body: [
          "Give the second day to modern Tokyo. Cross the Shibuya scramble at least once for the sheer choreographed madness of it, then head upward: a quiet coffee counter, an art museum, a department-store food hall in the basement where the packaging alone qualifies as design.",
          "As the light goes, find height. The bar at the top of your hotel will do, and so will any of the observation decks. Watch the largest city on earth switch on its lights, and take in the fact that you've seen almost none of it. That's exactly the right note to leave on.",
        ],
      },
      {
        heading: "Where to Stay",
        body: [
          "For silence and design, Aman Tokyo turns a corporate tower's summit into the calmest room in the city. For atmosphere and cinematic nostalgia, the Park Hyatt floats above Shinjuku in a haze of jazz and cloud. Either is a destination in its own right.",
        ],
      },
    ],
    featured: true,
  },
  {
    slug: "amalfi-coast-where-to-stay",
    title: "The Amalfi Coast: Where to Stay, Eat and Disappear",
    destination: "Amalfi Coast, Italy",
    region: "Europe",
    dek: "The most beautiful coastline in Europe is also the most crowded. Here's how to have it to yourself.",
    excerpt:
      "Positano is a postcard half the internet wants to stand inside. The trick to the Amalfi Coast is knowing when to go, where to sleep, and which town to base yourself in above the fray.",
    author: "The Hotel Life Editors",
    readTime: 7,
    date: "July 2026",
    heroImage: U("1582719478250-c89cae4dc85b", 2000),
    cardImage: U("1582719478250-c89cae4dc85b", 1000),
    hotelSlugs: ["belmond-hotel-caruso"],
    sections: [
      {
        body: [
          "There's a particular heartbreak reserved for the traveller who arrives in Positano in mid-August expecting la dolce vita and finds instead a vertical traffic jam of ten thousand people all trying to photograph the same church dome. The Amalfi Coast really is one of the most beautiful places on earth. In high season it's also one of the most oversubscribed, and the two facts are not unrelated.",
        ],
      },
      {
        heading: "Go in the Shoulders",
        body: [
          "The single most important decision is when. May, early June, and late September deliver warm sea, open restaurants, and a fraction of the crowds. July and August are for people who enjoy queueing for a lemon granita in 35-degree heat. Choose wisely.",
        ],
      },
      {
        heading: "Stay High, Not Low",
        body: [
          "Positano and Amalfi town sit at sea level, which means noise, crowds, and a permanent scrum at the beach clubs. Ravello, perched a thousand feet above, is the antidote: cool, green and quiet, with the coast's finest gardens and the most jaw-dropping views. Base yourself up here and drop down to the water only when you feel like it.",
          "For meals, skip the harbourfront tourist traps and climb. The best food on the coast is inland and uphill, in family trattorias serving handmade scialatielli and fish caught that morning.",
        ],
      },
      {
        heading: "Where to Stay",
        body: [
          "The Belmond Hotel Caruso in Ravello is an 11th-century palazzo with the most photographed infinity pool in Italy. It's the coast at its most rarefied, above the day-trippers, the traffic and very nearly everything else.",
        ],
      },
    ],
    featured: true,
  },
  {
    slug: "first-safari-guide",
    title: "Your First Safari: An Honest Beginner's Guide",
    destination: "Sub-Saharan Africa",
    region: "Middle East & Africa",
    dek: "Everything nobody tells you before your first game drive, from what to pack to how not to waste the trip.",
    excerpt:
      "A safari is the most rewarding luxury trip you can take, and one of the most misunderstood. Here's how to choose a camp, when to go, and why fewer days in more places is usually a mistake.",
    author: "The Hotel Life Editors",
    readTime: 9,
    date: "June 2026",
    heroImage: U("1516426122078-c23e76319801", 2000),
    cardImage: U("1516426122078-c23e76319801", 1000),
    hotelSlugs: ["singita-sabi-sand", "giraffe-manor-nairobi"],
    sections: [
      {
        body: [
          "Nothing quite prepares you for the first time a lion looks at you. Not the documentaries, not the guidebooks, not your guide's reassurances. A safari rearranges something in you, and it does so most powerfully the first time. It's also an expensive, logistically fiddly trip that's easy to get wrong. A little planning is the difference between the trip of a lifetime and a bumpy, dusty disappointment.",
        ],
      },
      {
        heading: "Fewer Camps, More Nights",
        body: [
          "The most common rookie error is cramming in too much. Three nights here, two there, a different bush flight every other morning. It sounds thorough and it's exhausting. Wildlife rewards patience. Pick two camps, stay at least three nights in each, and let the rhythm of the bush do its work. You'll see more by moving less.",
        ],
      },
      {
        heading: "Private Over Public",
        body: [
          "Where budget allows, choose a private conservancy over a national park. Fewer vehicles, permission to go off-road and off-hours, and guiding that borders on the telepathic. A leopard sighting shared with fifteen minibuses is a very different thing from one shared with no one at all.",
        ],
      },
      {
        heading: "Where to Stay",
        body: [
          "Singita, in the Sabi Sand bordering Kruger, is conservation-led safari at its most refined, with some of the best guiding on the continent. Bookend the wild days with a night at Giraffe Manor in Nairobi, where breakfast comes with the world's most charming interruptions.",
        ],
      },
    ],
  },
  {
    slug: "paris-for-grown-ups",
    title: "Paris for Grown-Ups: Beyond the Postcard",
    destination: "Paris, France",
    region: "Europe",
    dek: "You've done the Tower and the Louvre. Here's the Paris that reveals itself on the second, third and fourth visit.",
    excerpt:
      "The magic of Paris isn't in its monuments. It's in its rituals. A guide to the cafés, the hours and the arrondissements that turn a tourist into a temporary Parisian.",
    author: "The Hotel Life Editors",
    readTime: 6,
    date: "May 2026",
    heroImage: U("1499856871958-5b9627545d1a", 2000),
    cardImage: U("1499856871958-5b9627545d1a", 1000),
    hotelSlugs: ["the-ritz-paris"],
    sections: [
      {
        body: [
          "First-time Paris is a checklist: the Tower, the Louvre, a boat down the Seine. It's wonderful, and a lot of it is spent in queues. Second-time Paris is where the city actually begins, when you stop trying to see it and start trying to live in it, if only for a few days.",
        ],
      },
      {
        heading: "Adopt a Café",
        body: [
          "The single most Parisian thing you can do is nothing at all, slowly, at a café you return to. Order a coffee, take the outside table, and watch the street for an hour. Do this at the same place twice and the waiter will begin to nod at you. That small nod is worth more than any museum ticket.",
        ],
      },
      {
        heading: "Cross the River",
        body: [
          "Most visitors cluster on the Right Bank around the big sights. Cross to the Left, to Saint-Germain or the village streets of the 5th, and Paris softens into something more intimate: independent bookshops, tiny galleries, and food markets that have run twice a week for two centuries.",
        ],
      },
      {
        heading: "Where to Stay",
        body: [
          "If you're going to do Paris properly, do it from Place Vendôme. The Ritz Paris invented much of what we think of as the luxury hotel, and after its four-year restoration it is once again the most romantic address in the city.",
        ],
      },
    ],
  },
  {
    slug: "maldives-decoded",
    title: "The Maldives, Decoded: How to Choose the Right Island",
    destination: "Maldives",
    region: "Asia",
    dek: "Every resort is its own island, which makes choosing wrong genuinely costly. A field guide to picking your patch of paradise.",
    excerpt:
      "In the Maldives, your resort isn't in the destination. It is the destination. Get the choice right and it's heaven. Get it wrong and you're stuck. Here's how to decide.",
    author: "The Hotel Life Editors",
    readTime: 7,
    date: "April 2026",
    heroImage: U("1514282401047-d79a71a590e8", 2000),
    cardImage: U("1514282401047-d79a71a590e8", 1000),
    hotelSlugs: ["soneva-fushi-maldives"],
    sections: [
      {
        body: [
          "The Maldives is the only destination we know of where your choice of hotel is more or less irrevocable. Each resort occupies its own private island, sometimes an hour's seaplane flight from the next; there is no wandering into town, no changing your mind over dinner. You are, delightfully or otherwise, committed. Which makes the choice the single most important decision of the trip.",
        ],
      },
      {
        heading: "Villa or Overwater?",
        body: [
          "The overwater bungalow is the postcard, and for a couple it's hard to beat: a ladder from your deck straight into warm turquoise. But beach villas are often larger, cooler, better for families, and closer to the house reef. Snorkellers should check where the good coral actually is. Some islands have a spectacular reef a fin-kick away, while others need a boat.",
        ],
      },
      {
        heading: "How Far Is Too Far?",
        body: [
          "Closer atolls mean a short speedboat transfer. Farther-flung ones mean a scenic (and pricey) seaplane that stops flying at dusk. The remoter islands reward you with fewer crowds and better marine life. Just factor the transfer into your plans, because a late international arrival can cost you a night on a nearby island before you even reach paradise.",
        ],
      },
      {
        heading: "Where to Stay",
        body: [
          "Soneva Fushi more or less invented barefoot Maldivian luxury and it's still the benchmark: jungly, enormous villas, a superb house reef, and a real commitment to sustainability that most of its rivals only advertise.",
        ],
      },
    ],
    featured: true,
  },
  {
    slug: "marrakech-sensory-guide",
    title: "Marrakech: A Sensory Survival Guide",
    destination: "Marrakech, Morocco",
    region: "Middle East & Africa",
    dek: "The Red City assaults every sense at once. Here's how to surrender to it without being overwhelmed.",
    excerpt:
      "Marrakech is loud, dazzling, occasionally exhausting and completely intoxicating. A guide to navigating the medina, dodging the hustle, and finding the calm behind the chaos.",
    author: "The Hotel Life Editors",
    readTime: 6,
    date: "March 2026",
    heroImage: U("1512453979798-5ea266f8880c", 2000),
    cardImage: U("1512453979798-5ea266f8880c", 1000),
    hotelSlugs: ["la-mamounia"],
    sections: [
      {
        body: [
          "Marrakech does not do subtle. From the moment you step into the medina, the labyrinthine old city, it comes at you all at once: cumin and orange blossom and diesel, the call to prayer over the rooftops, motorbikes threading through the crowds, the hiss of a snake charmer's flute. Most first-timers find the opening hour a lot. The secret is to give in rather than resist, while keeping a calm base to retreat to.",
        ],
      },
      {
        heading: "Master the Medina",
        body: [
          "Getting lost in the souks is part of the experience, right up until it isn't. Drop a pin on your riad before you set off, accept that Google Maps will fail you among the covered alleys, and turn down offers of 'help' politely but firmly. The famous square, Jemaa el-Fnaa, is best at dusk, when the food stalls fire up and the whole thing turns into a swirling open-air theatre.",
        ],
      },
      {
        heading: "Find the Gardens",
        body: [
          "For every ounce of medina chaos there's a matching pocket of calm, usually behind an anonymous door. The Majorelle and Secret Gardens, the courtyards of the old palaces, the plunge pool of a quiet riad. Marrakech is a city built around hidden green rooms. Learn to duck into them and the city settles into a rhythm of stimulation and retreat.",
        ],
      },
      {
        heading: "Where to Stay",
        body: [
          "La Mamounia, Churchill's favourite, is a two-century-old garden wrapped in a palace hotel. It's the grandest possible base, close enough to walk into the medina and serene enough to make you forget it's there.",
        ],
      },
    ],
  },
];

// ---- helpers -------------------------------------------------------------

export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);

export const getFeaturedGuides = () => guides.filter((g) => g.featured);

export const getGuidesByRegion = (region: Region) =>
  guides.filter((g) => g.region === region);
