/**
 * The Hotel Life - editorial city & travel guides.
 * Longer-form pieces that sit alongside the hotel reviews.
 */
import type { Region } from "./hotels";
import { expansionGuides } from "./editorial/expansion-guides";
import { legacyGuideAdditions } from "./editorial/legacy-enrichment";

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

const guideCatalogue: Guide[] = [
  ...expansionGuides,
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
  {
    slug: "sri-lanka-in-ten-days",
    title: "Sri Lanka in Ten Days: Tea, Temples and the South Coast",
    destination: "Sri Lanka",
    region: "Asia",
    dek: "One small island packs in ancient cities, misty tea country, leopards and a coastline of perfect beaches. Here's how to string it together.",
    excerpt:
      "Sri Lanka rewards a loop rather than a single base. Our ten-day route runs from the cultural triangle down through the hills to the south coast, with the train ride everyone talks about in the middle.",
    author: "The Hotel Life Editors",
    readTime: 8,
    date: "February 2026",
    heroImage: U("1566296314736-6eaac1ca0cb9", 2000),
    cardImage: U("1566296314736-6eaac1ca0cb9", 1000),
    hotelSlugs: ["weligama-bay-marriott"],
    sections: [
      {
        body: [
          "Sri Lanka is small on the map and enormous in variety. In the space of a single week you can climb an ancient rock fortress, ride through cloud forest on a train, track leopards in a national park and end up flat on a beach with a king coconut in hand. The trick is not to try to see all of it, but to run one clean loop and let the island's rhythms carry you.",
        ],
      },
      {
        heading: "Start in the Cultural Triangle",
        body: [
          "Begin in the centre, around Sigiriya and Dambulla. Climb the Lion Rock early, before the heat and the crowds, and give an afternoon to the cave temples. This is the deep-history part of the trip, and two or three days is plenty before you start moving south.",
        ],
      },
      {
        heading: "Take the Train Through Tea Country",
        body: [
          "The stretch from Kandy to Ella is one of the world's great train journeys, hours of tea terraces, waterfalls and green hills sliding past an open door. Book a seat in advance, then base yourself in the hills for a couple of nights of cool air, tea-estate walks and early starts.",
        ],
      },
      {
        heading: "Finish on the South Coast",
        body: [
          "Come down to the coast for the final few days. The south is a string of beaches, surf towns and the lovely old fort city of Galle, with whale watching off Mirissa in season. This is where you stop moving and simply enjoy the island.",
        ],
      },
      {
        heading: "Where to Stay",
        body: [
          "For the south-coast leg, the Weligama Bay Marriott is an easy, comfortable base right on a calm surf bay, well placed for Mirissa, Galle and a lot of very good beaches.",
        ],
      },
    ],
    featured: true,
  },
  {
    slug: "barcelona-beyond-the-sagrada",
    title: "Barcelona Beyond the Sagrada: A Local's Rhythm",
    destination: "Barcelona, Spain",
    region: "Europe",
    dek: "See the Gaudi landmarks, of course. But the city really opens up when you learn to eat late, walk the back streets and follow the neighbourhoods.",
    excerpt:
      "Barcelona is more than its famous church. A guide to the barrios, the market stalls and the unhurried Mediterranean rhythm that turns a sightseeing trip into something closer to living there.",
    author: "The Hotel Life Editors",
    readTime: 6,
    date: "April 2026",
    heroImage: U("1583422409516-2895a77efded", 2000),
    cardImage: U("1583422409516-2895a77efded", 1000),
    hotelSlugs: [],
    sections: [
      {
        body: [
          "Almost everyone arrives in Barcelona with the same short list: the Sagrada Familia, Park Guell, a wander down Las Ramblas. Do them, early and with tickets booked. Then set the checklist aside, because the city Barcelonins actually live in reveals itself only once you slow to its pace, which means eating late, walking a lot, and treating whole afternoons as optional.",
        ],
      },
      {
        heading: "Follow the Neighbourhoods",
        body: [
          "Barcelona is a city of distinct barrios, and choosing one to wander is better than trying to see everything. The Gothic Quarter and El Born give you medieval lanes and tiny bars; Gracia feels like a village of leafy squares; the Eixample is all wide avenues and Modernista facades. Pick one a day and get pleasantly lost.",
        ],
      },
      {
        heading: "Eat Like a Local, Late",
        body: [
          "Lunch is the big meal and it starts around two; dinner rarely before nine. Skip the tourist traps on Las Ramblas and head for a neighbourhood vermuteria or a bar with a market counter. La Boqueria is wonderful but touristy, so try the quieter Mercat de Santa Caterina or Sant Antoni for the same colour with fewer selfie sticks.",
        ],
      },
    ],
  },
  {
    slug: "koh-samui-unhurried",
    title: "Koh Samui, Unhurried: Beaches, Waterfalls and Where to Stay",
    destination: "Koh Samui, Thailand",
    region: "Asia",
    dek: "Samui can be a party or a hideaway. Here's how to find the quiet coves, the jungle interior, and the right beach for the trip you actually want.",
    excerpt:
      "Thailand's second-biggest island has a beach for every mood, from the buzz of Chaweng to the calm of the north shore. A guide to picking your patch and slowing right down.",
    author: "The Hotel Life Editors",
    readTime: 6,
    date: "June 2026",
    heroImage: U("1604999565976-8913ad2ddb7c", 2000),
    cardImage: U("1604999565976-8913ad2ddb7c", 1000),
    hotelSlugs: ["w-koh-samui"],
    sections: [
      {
        body: [
          "Koh Samui gets an unfair reputation as either a full-moon party island or a package-holiday cliche. The truth is more interesting. It's big enough and green enough to be whatever you want, from a lively beach break to a genuinely restful hideaway, as long as you choose the right coast.",
        ],
      },
      {
        heading: "Choose Your Coast",
        body: [
          "Chaweng and Lamai on the east are the busy beaches, all bars, restaurants and nightlife. The north shore around Maenam and Bophut is calmer, with soft sand, sunset views and a foodie old town. The south and west are quieter still. Decide how much buzz you want before you book, because on Samui your beach is your whole trip.",
        ],
      },
      {
        heading: "Get Off the Sand",
        body: [
          "Give at least one day to the interior. Rent a car or take a tour up to the Na Muang waterfalls, the mountaintop viewpoints and the quiet inland temples. The contrast between the jungly heart of the island and its beaches is what makes Samui more than just another resort strip.",
        ],
      },
      {
        heading: "Where to Stay",
        body: [
          "For a design-led hideaway on the calmer north shore, W Koh Samui gives you a private pool villa even at entry level, with one of the island's best beach bars just down the hill.",
        ],
      },
    ],
    featured: true,
  },
  {
    slug: "bali-two-ways",
    title: "Bali, Two Ways: Jungle and Sea",
    destination: "Bali, Indonesia",
    region: "Asia",
    dek: "The classic Bali trip splits the island in half: a few days inland around Ubud, a few more on the coast. Here's how to balance the two.",
    excerpt:
      "Bali does two very different holidays at once, spiritual and green inland, sun-and-sea on the coast. The best trips do both. A guide to splitting your time and skipping the crowds.",
    author: "The Hotel Life Editors",
    readTime: 7,
    date: "June 2026",
    heroImage: U("1518548419970-58e3b4079ab2", 2000),
    cardImage: U("1518548419970-58e3b4079ab2", 1000),
    hotelSlugs: ["amankila-bali", "four-seasons-bali-sayan"],
    sections: [
      {
        body: [
          "Bali has been loved almost to breaking point in places, and first-timers often come away either enchanted or exhausted, depending on where they spent their time. The fix is simple: treat Bali as two trips in one. Start inland, in the green and the temples, then move to the coast to unwind. Do it in that order and you leave relaxed rather than frazzled.",
        ],
      },
      {
        heading: "Inland: Ubud and the Green Heart",
        body: [
          "Ubud is the cultural centre, surrounded by rice terraces, river valleys, yoga studios and temples. Base yourself just outside the town rather than in its busy middle, wake early for the terraces before the tour buses, and give yourself time for a proper spa day and a river walk. This is the restorative half of the trip.",
        ],
      },
      {
        heading: "The Coast: Choose Quiet",
        body: [
          "For the beach half, skip the traffic of Seminyak and Canggu unless nightlife is the point. The east and the Bukit peninsula are calmer and more beautiful, with dramatic cliffs, better swimming and a fraction of the crowds. It's a short drive for a completely different mood.",
        ],
      },
      {
        heading: "Where to Stay",
        body: [
          "Split your stay to match the trip: Four Seasons Sayan for the jungle-and-river magic near Ubud, then Amankila on the serene east coast for cliffs, privacy and that famous three-tiered pool.",
        ],
      },
    ],
    featured: true,
  },
  {
    slug: "rio-de-janeiro-first-timers",
    title: "Rio de Janeiro, Properly",
    destination: "Rio de Janeiro",
    region: "The Americas",
    dek: "A first visit to Rio is usually spent in the wrong places at the wrong times. Here is the version that works: the beaches by hour, the hills by weather, and the neighbourhoods worth your evenings.",
    excerpt:
      "Copacabana at seven, Ipanema at five, the Corcovado only on a clear morning. How to spend four days in Rio without wasting one of them in a queue.",
    author: "Shivam Sood",
    readTime: 9,
    date: "August 2026",
    heroImage: U("1483729558449-99ef09a8c325", 2000),
    cardImage: U("1483729558449-99ef09a8c325", 1000),
    hotelSlugs: ["copacabana-palace-rio"],
    featured: true,
    sections: [
      {
        body: [
          "Rio rewards timing more than any city I know. The same beach is transcendent at seven in the morning and unbearable at one in the afternoon. The same viewpoint is the best thing you will ever see, or a queue in cloud. Getting this right is most of the work.",
          "What follows assumes four days, which is the minimum that makes the flight worthwhile, and a base in the beach neighbourhoods rather than the centre.",
        ],
      },
      {
        heading: "The Beaches, by the Clock",
        body: [
          "Copacabana belongs to the early morning. Between six and eight it is a genuine civic space: swimmers, walkers, elderly men playing volleyball with astonishing competence, the whole crescent still cool. By midday it is hot and busy and you should be elsewhere.",
          "Ipanema is the late afternoon beach. Head for the stretch between postos nine and ten around four or five, when the light goes gold and the whole city seems to arrive. Stay for sunset at Arpoador, the rock at the eastern end, where people applaud when the sun goes down. It sounds unbearable and it is genuinely lovely.",
          "Rent a chair and umbrella from a beach vendor rather than carrying your own. It costs very little, they will bring you cold drinks all afternoon, and the whole arrangement is a pillar of local etiquette.",
        ],
      },
      {
        heading: "The Two Hills",
        body: [
          "Corcovado, with the statue, and Sugarloaf, the cable car. Both are worth doing and both are ruined by cloud, so watch the forecast and go the moment you get a clear morning rather than saving them for a planned day.",
          "Corcovado is best very early, ideally on the first train of the day, before the coach parties and before the cloud builds. Sugarloaf is better at the other end, an hour or so before sunset, so that you ride up in daylight and come down over a lit city.",
          "Buy timed tickets online for both. The queues at the ticket windows are the single biggest waste of time available to a visitor to Rio.",
        ],
      },
      {
        heading: "Santa Teresa and Lapa",
        body: [
          "Santa Teresa is the hill neighbourhood of cobbled streets, colonial houses and artists' studios, and it is where to spend a slow afternoon. Take the restored bonde tram up if it is running. Eat lunch somewhere with a terrace and a view down over the centre.",
          "Below it, Lapa is where Rio goes out. The arches are the landmark, the samba clubs around them are the reason to come, and Friday and Saturday are when it happens. Go with somebody who knows the city if you can, keep your phone in your pocket, and take a taxi both ways.",
        ],
      },
      {
        heading: "Eating",
        body: [
          "Do the churrascaria once, understand that it is enormous, and go hungry. More interesting is the botequim tradition, the corner bars serving cold beer and small plates, which is where Rio actually eats. Order the bolinho de bacalhau and a very cold chopp.",
          "Sunday feijoada is a genuine institution and effectively occupies an entire afternoon, which is the intended effect. Plan nothing afterwards.",
        ],
      },
      {
        heading: "Staying Sensible",
        body: [
          "Rio has real crime and pretending otherwise helps nobody. The practical version: carry a small amount of cash and one card, leave the watch in the safe, use a cheap phone on the street, take taxis or apps after dark rather than walking, and stay off the beaches at night entirely.",
          "Do this and you will almost certainly have no trouble at all. The city is far less frightening than its reputation and considerably more welcoming than most visitors expect.",
        ],
      },
    ],
  },
  {
    slug: "bangkok-for-people-who-think-they-know-it",
    title: "Bangkok for People Who Think They Know It",
    destination: "Bangkok",
    region: "Asia",
    dek: "Beyond the Grand Palace and the rooftop bars, the city is doing something far more interesting. A guide to the river, the old quarters, and the food that never makes the lists.",
    excerpt:
      "Most visitors see three temples and a sky bar and conclude they have done Bangkok. The city that repays a second visit is on the water, in the old shophouse quarters, and eating at ten at night.",
    author: "Shivam Sood",
    readTime: 9,
    date: "August 2026",
    heroImage: U("1528181304800-259b08848526", 2000),
    cardImage: U("1528181304800-259b08848526", 1000),
    hotelSlugs: ["mandarin-oriental-bangkok"],
    sections: [
      {
        body: [
          "Bangkok has an image problem with people who have visited once. They arrive, do the Grand Palace in punishing heat, take a photograph from a rooftop bar, eat something on Khao San Road, and leave with the impression of a city that is hot, chaotic and slightly exhausting.",
          "All of which is true and almost entirely beside the point. The Bangkok worth returning for runs on water, eats late, and is currently in the middle of one of the most interesting food and design moments in Asia.",
        ],
      },
      {
        heading: "Use the River",
        body: [
          "The single change that transforms a visit is treating the Chao Phraya as your main road. The orange-flag express boats run constantly, cost almost nothing, and move faster than any car in the city.",
          "From the river you reach Wat Arun, the old city, the flower market at Pak Khlong Talat and the whole of the west bank. Do the temples early, get back on a boat by eleven, and let the afternoon heat happen somewhere with air conditioning.",
          "The old canals of Thonburi, on the far bank, are the closest thing left to the city that was called the Venice of the East. A longtail for an hour in the late afternoon is the best money you will spend.",
        ],
      },
      {
        heading: "The Old Quarters",
        body: [
          "Talat Noi is a knot of shophouses, scrap-metal workshops and small shrines south of Chinatown, and it has become quietly one of the most rewarding places to walk in Bangkok. Go on foot, get lost deliberately, and stop when you find coffee.",
          "Chinatown itself, Yaowarat, is a night proposition. The street kitchens set up around six and run late, and it remains the best concentrated eating in the city. Look for the stalls with a queue of locals and no English menu.",
        ],
      },
      {
        heading: "Eating, Seriously",
        body: [
          "Bangkok now has a genuine fine-dining scene built on Thai ingredients rather than French technique, and it is worth planning around. Book well ahead for the big names, because the good rooms are small and the world has noticed.",
          "But the meals that stay with you are cheaper. Boat noodles in a cramped shop near Victory Monument. Grilled pork and sticky rice from a cart at seven in the morning. Khao man gai from a shop that sells nothing else. Follow crowds and cash-only signage.",
          "One practical note: order less than you think per round. It is normal to eat across several stops in an evening, and the whole system assumes it.",
        ],
      },
      {
        heading: "Getting About",
        body: [
          "The BTS Skytrain and MRT are fast, clean and cheap, and they cover most of what a visitor wants. Traffic at rush hour is genuinely immobile, so if a journey has a rail option, take it.",
          "Use the metered taxis rather than tuk-tuks for actual transport. Tuk-tuks are fun for a short novelty ride and consistently more expensive for anything else. Insist on the meter, or use a ride app.",
        ],
      },
      {
        heading: "When to Come",
        body: [
          "November to February is the cool dry season and the obvious answer. March to May is punishingly hot, with April the worst of it, though Songkran in mid-April is a genuine spectacle if you do not mind being soaked continuously for three days.",
          "The rainy months are underrated. It usually rains hard for an hour in the afternoon and then stops, the city is greener, the light is better, and hotel rates fall considerably.",
        ],
      },
    ],
  },
  {
    slug: "london-in-a-long-weekend",
    title: "London in a Long Weekend",
    destination: "London",
    region: "Europe",
    dek: "Three days in a city with four hundred years of things to do. The version that avoids the queues, the tourist restaurants and the mistake of trying to see everything.",
    excerpt:
      "One museum a day, dinner booked before you fly, and the neighbourhoods that actually reward a wander. A realistic plan for seventy-two hours in London.",
    author: "Shivam Sood",
    readTime: 8,
    date: "August 2026",
    heroImage: U("1513694203232-719a280e022f", 2000),
    cardImage: U("1513694203232-719a280e022f", 1000),
    hotelSlugs: ["the-connaught-london", "claridges-london", "the-savoy-london"],
    sections: [
      {
        body: [
          "The mistake people make in London is treating it as a list. The Tower, the Eye, Buckingham Palace, a musical, Oxford Street. It is possible to do all of that in three days and come away having experienced almost nothing of the city.",
          "London is a collection of villages that happens to contain some world-class institutions. The better plan is to pick one big thing a day and spend the rest of the time walking somewhere specific.",
        ],
      },
      {
        heading: "One Museum a Day, and Which One",
        body: [
          "They are free, they are extraordinary, and they will defeat you if you attempt more than one. The British Museum for the sheer sweep of it, though go at opening or in the last two hours. The National Gallery if you want great paintings in a manageable building. The V and A if you care about design, and it has the best museum cafe in London.",
          "Sir John Soane's Museum, a small architect's house near Holborn stuffed floor to ceiling with antiquities, is the one Londoners send friends to. Free, strange, and only takes an hour.",
        ],
      },
      {
        heading: "Walk These, Not Oxford Street",
        body: [
          "Marylebone, for a high street that still works, good bookshops and the sense of a village that got surrounded. Borough Market and then east along the river toward Tower Bridge, ideally on a weekday morning.",
          "Hampstead and the Heath for a proper half day, with the swimming ponds if the weather allows and a pub at the end of it. Columbia Road on a Sunday morning for the flower market, then Brick Lane and Spitalfields afterwards.",
          "Avoid Oxford Street entirely. It has nothing you cannot buy at home and it is the least pleasant half mile in central London.",
        ],
      },
      {
        heading: "Eating",
        body: [
          "Book before you fly. The good rooms in London go weeks out, and the restaurants with tables free on the day are almost always the ones aimed at people who did not plan.",
          "The city's real strength is its range rather than its grandest restaurants. A proper curry in Whitechapel, dim sum in Chinatown at eleven in the morning, a Sunday roast in a pub with a fire. Do at least one of each.",
          "Afternoon tea is a genuine pleasure and a genuine tourist trap depending entirely on where. The hotel dining rooms do it properly. Anywhere advertising it on a chalkboard does not.",
        ],
      },
      {
        heading: "Practicalities",
        body: [
          "Get an Oyster card or just tap a contactless card, which now works on everything and caps automatically. Walk more than you plan to. Central London is much smaller than the tube map suggests, and the map is famously not to scale.",
          "Theatre is worth doing and worth booking directly with the theatre rather than through a reseller. Same-day returns often appear at the box office in the morning for shows that look sold out.",
        ],
      },
      {
        heading: "When to Come",
        body: [
          "May, June and September are the best of it: long days, gardens working, and the city not yet in high summer crowds. July and August are busy and the transport is hot in a way the system was never designed for.",
          "Winter is underrated if you accept the dark. The museums are empty, the pubs are at their best, and hotel rates in January are the lowest of the year by a wide margin.",
        ],
      },
    ],
  },
  {
    slug: "morocco-beyond-marrakech",
    title: "Morocco Beyond Marrakech",
    destination: "Morocco",
    region: "Middle East & Africa",
    dek: "Most trips stop at the Jemaa el-Fnaa. The country that lies past it, the Atlas passes, the blue city, the Atlantic coast and the desert, deserves the extra week.",
    excerpt:
      "Marrakech is the door, not the room. A route through the Atlas, Fes, Chefchaouen and the coast, with honest advice on driving, guides and how long each place actually deserves.",
    author: "Shivam Sood",
    readTime: 10,
    date: "August 2026",
    heroImage: U("1539020140153-e479b8c22e70", 2000),
    cardImage: U("1539020140153-e479b8c22e70", 1000),
    hotelSlugs: ["royal-mansour-marrakech", "la-mamounia"],
    sections: [
      {
        body: [
          "Marrakech does a very effective job of convincing visitors that it is Morocco. It is not. It is a superb, theatrical, slightly exhausting introduction to a country that gets considerably more interesting the further you go from it.",
          "Give the city three nights, which is enough to do the medina, the gardens and one long dinner properly, and then commit the rest of the trip to somewhere else.",
        ],
      },
      {
        heading: "Over the Atlas",
        body: [
          "The drive south over the Tizi n'Tichka pass is one of the great road journeys in North Africa, and the new road has made it far less punishing than it used to be. Allow a full day rather than treating it as transport.",
          "Ait Ben Haddou, the fortified earthen village on the far side, is the obvious stop and deserves the stop despite the film-set associations. Stay the night rather than day-tripping from Marrakech: it empties out completely by six and the light on the kasbah at dusk is the reason to be there.",
          "Beyond it the Draa valley runs south through palmeries toward the desert. The dunes at Erg Chigaga are less visited than Merzouga and worth the extra effort if you have the time.",
        ],
      },
      {
        heading: "Fes, and Why It Beats Marrakech",
        body: [
          "Fes has the oldest and most intact medieval medina in the Arab world, and unlike Marrakech it is still primarily a working city rather than a visitor economy. It is harder, less polished, and considerably more rewarding.",
          "Hire a guide for the first day, genuinely. The medina has thousands of lanes and no logic that a visitor can hold, and a good guide turns a stressful morning into a revelation. Then spend the second day lost on purpose, which is safe and is the whole point.",
          "The tanneries are the famous sight and smell exactly as advertised. Go in the morning, accept the sprig of mint, and expect a sales pitch afterwards.",
        ],
      },
      {
        heading: "The Blue City and the Coast",
        body: [
          "Chefchaouen, up in the Rif mountains, is painted almost entirely in blue and is as photogenic as everyone says. It is also small, and a night or two is plenty. Go early in the morning for the lanes before the coaches arrive.",
          "On the Atlantic, Essaouira is the antidote to the interior: windy, low-rise, white and blue, with a working fishing port and no hard sell at all. It is the place people extend their stay in. Casablanca, honestly, can be skipped unless you are there for the mosque, which is magnificent.",
        ],
      },
      {
        heading: "Driving, Guides and Money",
        body: [
          "Driving in Morocco between cities is straightforward, the roads are good, and it buys you enormous freedom. Driving inside the old cities is not worth attempting. Park outside the walls and walk.",
          "A driver for the Atlas and desert leg is often cheaper than a rental once you account for one-way fees, and removes the mountain passes from your list of worries.",
          "Haggling is expected in the souks and is a social exchange rather than a confrontation. Start well below, stay friendly, and be prepared to walk away without hard feelings on either side.",
        ],
      },
      {
        heading: "When to Go",
        body: [
          "March to May and September to November. The interior in July and August is genuinely dangerous levels of hot, and the desert is unvisitable in the middle of the day.",
          "Winter is excellent in Marrakech and the coast, cold at night in the mountains, and snow can close the high passes. Ramadan changes opening hours and the atmosphere considerably, in ways that are interesting but worth knowing about in advance.",
        ],
      },
    ],
  },
  {
    slug: "big-sur-and-the-california-coast",
    title: "Driving the California Coast, Slowly",
    destination: "California",
    region: "The Americas",
    dek: "Highway 1 is not a route between two cities. It is the destination, and the single biggest mistake is trying to do it in a day.",
    excerpt:
      "San Francisco to Big Sur in three unhurried days: where to stop, which viewpoints are worth the pull-in, and why you should check the road closures before booking anything.",
    author: "Shivam Sood",
    readTime: 8,
    date: "August 2026",
    heroImage: U("1506905925346-21bda4d32df4", 2000),
    cardImage: U("1506905925346-21bda4d32df4", 1000),
    hotelSlugs: ["post-ranch-inn-big-sur"],
    sections: [
      {
        body: [
          "People treat Highway 1 as a way of getting from San Francisco to Los Angeles. It is a terrible way of doing that. It is slow, it bends constantly, and if you drive it in a day you will arrive exhausted having seen a great deal through a windscreen.",
          "Treat it instead as the trip itself. Three days from San Francisco to Big Sur and back, or onward, is the version that works.",
        ],
      },
      {
        heading: "Before You Book Anything",
        body: [
          "Check the road. Big Sur sits on an unstable coastline and landslides close sections of Highway 1 regularly, sometimes for a season, occasionally for over a year. Caltrans publishes current closures and they are authoritative.",
          "This matters because a closure can mean a four-hour inland detour or no southern access at all. Check before you book non-refundable hotels, and check again the week you travel.",
        ],
      },
      {
        heading: "Day One: South to Monterey",
        body: [
          "Leave San Francisco early and take the coast rather than the freeway. Half Moon Bay for coffee, then the long empty stretch past Pescadero. Ano Nuevo has elephant seals in season and is worth the stop.",
          "Santa Cruz or Monterey makes the first night. Monterey Bay Aquarium is genuinely one of the best in the world and deserves half a day rather than an hour. Cannery Row itself is largely a tourist strip and can be walked in twenty minutes.",
        ],
      },
      {
        heading: "Day Two: The Big Sur Coast",
        body: [
          "This is the day. Carmel first, then the stretch south that everybody photographs. Bixby Creek Bridge is the famous one and there is a proper pull-in just north of it. Go early, because by eleven the parking is a scrum.",
          "Point Lobos, just south of Carmel, is the underrated stop: cypress, coves, sea otters, and walking trails that get you out of the car for an hour. Julia Pfeiffer Burns State Park has the waterfall onto the beach, viewable from a short trail.",
          "Do not plan on lunch appearing when you want it. There are very few places to eat along this stretch and they fill. Carry water and something to eat.",
        ],
      },
      {
        heading: "Day Three: Slower",
        body: [
          "Give the third day to almost nothing. Walk in the redwoods at Pfeiffer Big Sur. Sit somewhere with the view. The coast rewards stillness far more than it rewards mileage.",
          "If you are continuing south, Hearst Castle at San Simeon is a genuinely strange and impressive detour, and the elephant seal colony at Piedras Blancas just beyond it is free and remarkable.",
        ],
      },
      {
        heading: "Practical Notes",
        body: [
          "Fuel is scarce and expensive along the Big Sur stretch. Fill up in Carmel or Cambria rather than assuming a station will appear.",
          "Mobile signal is absent for long sections, so download maps offline before you set out. Book accommodation well in advance, because there is very little of it and demand is constant.",
          "Fog is a summer feature rather than a summer risk. June and July mornings are often grey until midday. September and October are the clearest months and the best time to make this drive.",
        ],
      },
    ],
  },
  {
    slug: "italian-riviera-liguria",
    title: "The Italian Riviera, Without the Crush",
    destination: "Liguria",
    region: "Europe",
    dek: "Portofino and the Cinque Terre in the weeks when you can actually move, plus the harbour towns either side that nobody photographs and everybody prefers.",
    excerpt:
      "Liguria in high summer is a queue with a view. In late May or September it is the best coastline in Italy. Where to base yourself, and how to use the boats and trains.",
    author: "Shivam Sood",
    readTime: 8,
    date: "August 2026",
    heroImage: U("1516483638261-f4dbaf036963", 2000),
    cardImage: U("1516483638261-f4dbaf036963", 1000),
    hotelSlugs: ["splendido-portofino"],
    sections: [
      {
        body: [
          "The Ligurian coast has a scale problem. The famous places are very small and the number of people who want to see them is very large, and in July and August the arithmetic simply does not work.",
          "Come in the second half of May, or in September, and the same coast becomes one of the loveliest places in Europe. The water is warm enough, the restaurants have tables, and the villages return to being villages.",
        ],
      },
      {
        heading: "Where to Base Yourself",
        body: [
          "Portofino is exquisite and tiny, and staying there buys you the harbour in the early morning and late evening when the day visitors have gone. That is a genuine luxury and it is priced accordingly.",
          "Santa Margherita Ligure, ten minutes around the bay, is the sensible alternative: a proper town with a working seafront, better value, and boats to everywhere. Camogli, on the other side of the promontory, is the one people fall in love with, a tall painted fishing town with almost no international crowd.",
          "For the Cinque Terre, base in Levanto or Sestri Levante rather than in the five villages themselves. You get a real town, somewhere to park, and a short train ride in.",
        ],
      },
      {
        heading: "Use the Boats",
        body: [
          "The coastal ferries are the right way to move along this shore. They are frequent in season, they cost little, and approaching these villages from the water is how they were designed to be seen.",
          "The trip from Portofino or Camogli to San Fruttuoso, an abbey in a cove reachable only by boat or on foot, is the best half day on the coast. Swim off the beach in front of it.",
          "For the Cinque Terre the train is faster and runs constantly, but take the ferry at least once for the view back at the villages stacked up the cliffs.",
        ],
      },
      {
        heading: "Walking",
        body: [
          "The Cinque Terre paths are the famous walk and sections close regularly after landslides, so check status on the day. The Monterosso to Vernazza leg is the classic and it is genuinely steep, so treat it as a hike rather than a stroll.",
          "The quieter and arguably better walk is over the Portofino promontory from Camogli to San Fruttuoso, through pine and holm oak with the sea appearing below you. Two hours, properly worthwhile, and you can take the boat back.",
        ],
      },
      {
        heading: "Eating",
        body: [
          "This is the home of pesto, and it is worth understanding that the local version is served on trofie or trenette with potato and green beans in the same bowl, which sounds odd and is correct.",
          "Focaccia here is a breakfast food and Recco, just along the coast, makes a cheese-filled version that is worth a detour on its own. Anchovies from Monterosso, fresh or salted, are a genuine delicacy rather than a pizza topping.",
          "Book dinner. In the small harbour towns there are very few tables and they all go by seven.",
        ],
      },
      {
        heading: "Getting There and Around",
        body: [
          "Genoa is the nearest airport and the most sensible arrival. Pisa and Milan both work with a train connection. The coastal railway line is excellent, frequent and cheap, and it links almost everything you will want to see.",
          "A car is more liability than asset here. The coast road is narrow and slow, parking in the villages ranges from expensive to impossible, and Portofino restricts vehicles entirely in season. Take the train and the boats.",
        ],
      },
    ],
  },
];

export const guides: Guide[] = guideCatalogue.map((guide) => ({
  ...guide,
  sections: [...guide.sections, ...(legacyGuideAdditions[guide.slug] ?? [])],
}));

// ---- helpers -------------------------------------------------------------

export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);

export const getFeaturedGuides = () => guides.filter((g) => g.featured);

export const getGuidesByRegion = (region: Region) =>
  guides.filter((g) => g.region === region);
