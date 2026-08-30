/**
 * The Hotel Life - essays and reported pieces for The Edit.
 * Opinion and service journalism that sits alongside the hotel reviews
 * and the destination guides.
 */
import { expansionArticles } from "./editorial/expansion-articles";
import { legacyArticleAdditions } from "./editorial/legacy-enrichment";
import { editorialAuthorForIndex } from "./authors";

export interface ArticleSection {
  heading?: string;
  body: string[];
}

export interface Article {
  slug: string;
  title: string;
  kicker: string; // small label above the headline
  dek: string;
  excerpt: string;
  author: string;
  readTime: number;
  date: string;
  heroImage: string;
  cardImage: string;
  hotelSlugs: string[]; // related reviews
  sections: ArticleSection[];
  featured?: boolean;
}

const U = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const articleCatalogue: Article[] = [
  ...expansionArticles,
  {
    slug: "what-a-hotel-owes-you",
    title: "What a Hotel Actually Owes You",
    kicker: "Opinion",
    dek: "Thread count is a distraction. After a few hundred nights in other people's beds, here is the short list of things that genuinely separate a great hotel from an expensive one.",
    excerpt:
      "Marble does not make a hotel good. After a few hundred nights on the road, these are the six things that actually decide whether a stay is worth the money.",
    author: "Shivam Sood",
    readTime: 7,
    date: "August 2026",
    heroImage: U("1445019980597-93fa8acb246c", 2000),
    cardImage: U("1445019980597-93fa8acb246c", 1000),
    hotelSlugs: ["upper-house-hong-kong", "aman-tokyo", "claridges-london"],
    featured: true,
    sections: [
      {
        body: [
          "There is a particular kind of disappointment that only expensive hotels can deliver. You have paid a great deal of money. The lobby is enormous. There is a man in a top hat outside. And yet by the second morning you are quietly furious about the shower, or the breakfast queue, or the fact that nobody has learned your name.",
          "Luxury hotels have spent two decades competing on the wrong things. Thread counts, pillow menus, the size of the television. None of it matters much. What follows is the list I actually judge a hotel by, assembled over a few hundred nights of sleeping in other people's beds and paying for the privilege.",
        ],
      },
      {
        heading: "1. A bed you do not have to negotiate with",
        body: [
          "This sounds obvious and is routinely got wrong. A great hotel bed is firm enough to hold you, soft enough to forgive you, and made with linen that has been laundered rather than merely washed. You should be able to get into it without adjusting anything.",
          "The tell is the pillow. If a hotel offers you a menu of eleven pillows, it usually means the standard one is bad. The best hotels simply put the right pillow on the bed and say nothing about it.",
        ],
      },
      {
        heading: "2. Water pressure, and a shower you can work out in the dark",
        body: [
          "Nothing exposes a hotel faster than its bathroom. Water pressure is a plumbing decision made years before you arrived and cannot be faked with marble. Neither can a shower control that a jet-lagged adult can operate at four in the morning without turning on the lights and reading a diagram.",
          "The Upper House in Hong Kong understands this. So does Aman. A surprising number of famous, historic, absurdly expensive hotels do not.",
        ],
      },
      {
        heading: "3. Staff who are allowed to make decisions",
        body: [
          "The single clearest signal of a well-run hotel is whether the person in front of you can solve your problem without leaving to ask someone. Great hotels push authority downward. The concierge can comp the breakfast. The housekeeper can find you a different room.",
          "You can test this in about thirty seconds with a small, reasonable, slightly awkward request. Watch what happens. If the answer involves a manager, a form, and a delay, you have learned everything about how the next three days will go.",
        ],
      },
      {
        heading: "4. Silence, or a convincing impression of it",
        body: [
          "Noise is the most expensive thing to fix and the easiest thing to ignore in the design phase. Corridor doors that slam, lifts that ping, air conditioning that cycles on with a shudder at two in the morning, a restaurant extractor humming below your window.",
          "The hotels that get this right tend to be the ones that were built by people who intended to stay in them. It is not a coincidence that the quietest room I have slept in was thirty-three floors above one of the loudest cities on earth.",
        ],
      },
      {
        heading: "5. Breakfast that respects your morning",
        body: [
          "Breakfast is where hotels reveal what they actually think of you. A vast buffet under heat lamps says they are processing volume. Eggs cooked to order, good coffee arriving without a negotiation, and a table you do not have to queue for says they are looking after guests.",
          "The cost difference between these two approaches is much smaller than hotels pretend. The difference in how the day starts is enormous.",
        ],
      },
      {
        heading: "6. A sense of where you are",
        body: [
          "The greatest failure of modern luxury hotels is interchangeability. You could photograph a hundred five-star rooms built since 2010 and struggle to place any of them on a map. Beige, backlit onyx, an orchid, a Nespresso machine.",
          "The hotels worth crossing a continent for feel like they could not exist anywhere else. Kashmiri papier-mache and a wood stove in Gulmarg. Cedar and stone and mist. A palazzo where the water laps at the front door. That specificity is the whole point, and it is the first thing cut when a hotel is run by a spreadsheet.",
        ],
      },
      {
        heading: "The short version",
        body: [
          "Sleep, water, staff, silence, breakfast, and a sense of place. Everything else is decoration. If a hotel gets those six right, it can skip the pillow menu entirely and I will still recommend it to my friends.",
        ],
      },
    ],
  },
  {
    slug: "how-to-get-upgraded",
    title: "How to Actually Get Upgraded",
    kicker: "Service",
    dek: "No, you should not lie about your honeymoon. Here is what genuinely moves a hotel to give you a better room, from people who spend their working lives assigning them.",
    excerpt:
      "The honeymoon lie does not work and front desks can smell it. What actually earns a better room is duller, more effective, and mostly comes down to timing.",
    author: "Shivam Sood",
    readTime: 6,
    date: "August 2026",
    heroImage: U("1590490360182-c33d57733427", 2000),
    cardImage: U("1590490360182-c33d57733427", 1000),
    hotelSlugs: ["peninsula-hong-kong", "raffles-singapore", "the-savoy-london"],
    sections: [
      {
        body: [
          "Every few months a video goes around claiming that you can talk your way into a suite by mentioning an anniversary. Front desk staff find this very funny. They hear it several times a day, usually from people whose booking clearly says two nights, one room, no occasion.",
          "Upgrades are not a personality contest. They are an inventory problem. Once you understand that, the whole thing becomes much less mysterious and considerably more winnable.",
        ],
      },
      {
        heading: "Understand what an upgrade actually is",
        body: [
          "Hotels do not give away rooms out of generosity. They move guests upward when doing so solves something: a category that is overbooked, a room held for a guest who did not arrive, a suite that will otherwise sit empty and earn nothing tonight.",
          "This is why the same request lands completely differently on a Tuesday in February than on a Friday in high season. On a full night, there is nothing to give. Your charm is irrelevant to arithmetic.",
        ],
      },
      {
        heading: "Book direct, and book the category below the one you want",
        body: [
          "Guests who booked through a discount channel are the last to be moved, because the hotel earned the least from them and because those rates are often contractually locked to a room type. Booking directly, or through a partner the hotel actually values, puts you in a different pile.",
          "The other trick is structural. If you book the very cheapest room, there is a long ladder above you and hotels rarely move anyone more than one rung. Book one category up and you are already close enough that a single step lands somewhere genuinely nice.",
        ],
      },
      {
        heading: "Arrive at the right time",
        body: [
          "Early afternoon is the worst moment to ask. Housekeeping is mid-turnaround, the desk does not yet know what the night looks like, and nothing is certain.",
          "Late afternoon, once the day's no-shows have firmed up, is when the picture clarifies. If you can be flexible, checking in around six often puts you in front of someone who now knows exactly what is empty.",
        ],
      },
      {
        heading: "Say something true and specific",
        body: [
          "The winning line is not a story. It is a preference. High floor, away from the lift, quiet side if anything is going. That gives the person a concrete problem they can solve, and solving it often means moving you.",
          "If you genuinely are celebrating something, mention it when you book, not at the desk. It goes in the reservation notes, where the people who assign rooms will actually see it days in advance.",
        ],
      },
      {
        heading: "Be a guest they want to keep",
        body: [
          "Loyalty status helps, but so does being straightforwardly pleasant to deal with. Front desk teams have discretion and they spend it on people who are decent to them. This is not a trick, it is just how humans work.",
          "And if the answer is no, take it well. Hotels remember returning guests far better than most travellers expect, and the room you do not get this time is often the room you are given without asking on the next stay.",
        ],
      },
    ],
  },
  {
    slug: "shoulder-season-is-the-real-luxury",
    title: "Shoulder Season Is the Real Luxury",
    kicker: "Opinion",
    dek: "The best hotels in the world are cheaper, quieter and considerably better staffed in the weeks nobody is thinking about them.",
    excerpt:
      "Peak season buys you crowds and a surcharge. The two or three weeks either side of it buy you the same hotel, better attention, and often half the rate.",
    author: "Shivam Sood",
    readTime: 5,
    date: "August 2026",
    heroImage: U("1520250497591-112f2f40a3f4", 2000),
    cardImage: U("1520250497591-112f2f40a3f4", 1000),
    hotelSlugs: ["belmond-hotel-caruso", "badrutts-palace-st-moritz", "gritti-palace-venice"],
    sections: [
      {
        body: [
          "There is a fortnight either side of every high season when a hotel is at its absolute best and almost nobody books it. The weather has not really turned. The staff are rested rather than run into the ground. The restaurant can take you at eight. And the rate is often close to half.",
          "This is the single most reliable piece of travel advice I have, and the one people are most reluctant to take.",
        ],
      },
      {
        heading: "What peak season actually buys you",
        body: [
          "In August on the Amalfi Coast you are paying a substantial premium for the privilege of queueing. The terrace is full, the boat is booked, the staff are on their ninetieth consecutive day, and the town you came to see is largely other people photographing it.",
          "Late May or the second half of September give you the same coastline, the same lemon groves, warm enough water, and a hotel that has the capacity to actually look after you.",
        ],
      },
      {
        heading: "The staffing argument nobody makes",
        body: [
          "Service quality is not constant across a year. A hotel running at full occupancy for eleven straight weeks is a hotel where the best people are exhausted and the seasonal hires are still learning. The same property in the quiet weeks is calm, experienced and attentive.",
          "You will get the head concierge rather than whoever is covering. You will get a table without a negotiation. The difference is larger than any amenity.",
        ],
      },
      {
        heading: "Where this works best",
        body: [
          "Alpine hotels in late March, when the snow is still good and the school holidays have finished. Venice in November, cold and half empty and completely itself. Rajasthan in early March, before the heat arrives. Sri Lanka's south coast in the shoulder weeks either side of the monsoon.",
          "The exception is anywhere that closes. Some seasonal hotels shut entirely, and the fortnight before closing can mean half the restaurants are already dark. Ask before you book, and ask specifically what will still be open.",
        ],
      },
      {
        heading: "The one real trade",
        body: [
          "You are accepting weather risk. Some of those days will be grey, and a beach hotel in the rain is a different proposition. Choose places that have something to offer indoors, or somewhere the landscape is the point regardless of the sky.",
          "In exchange you get the hotel as it was designed to be experienced, rather than the hotel at maximum extraction. That seems to me a very good trade.",
        ],
      },
    ],
  },
  {
    slug: "points-versus-cash",
    title: "When to Burn Points, and When to Just Pay",
    kicker: "Service",
    dek: "A simple way to work out whether your hotel points are worth spending, without a spreadsheet or a loyalty forum rabbit hole.",
    excerpt:
      "Most people either hoard points forever or spend them badly. One quick calculation tells you which nights are worth redeeming and which you should simply pay for.",
    author: "Shivam Sood",
    readTime: 6,
    date: "August 2026",
    heroImage: U("1566073771259-6a8506099945", 2000),
    cardImage: U("1566073771259-6a8506099945", 1000),
    hotelSlugs: ["w-koh-samui", "weligama-bay-marriott", "park-hyatt-tokyo"],
    sections: [
      {
        body: [
          "Hotel loyalty points are a currency with no published exchange rate, which is exactly how the programmes like it. People either sit on a balance for years waiting for a perfect redemption that never comes, or blow the lot on a mediocre airport hotel because it felt free.",
          "There is a simpler way to think about it, and it takes about ten seconds per booking.",
        ],
      },
      {
        heading: "The only calculation you need",
        body: [
          "Divide the cash price of the room by the number of points it would cost. That gives you the value of one point for that specific night. Compare it against a baseline of roughly half a cent to one cent per point, which is broadly what the major programmes are worth.",
          "A room costing 300 dollars or 30,000 points gives you one cent per point, which is a fine redemption. The same 30,000 points against a 90 dollar room is a poor one. Pay cash and keep the points.",
        ],
      },
      {
        heading: "Where points genuinely shine",
        body: [
          "Expensive cities in high season, where cash rates spike but award charts often lag behind. Resort properties in peak weeks. Anywhere a hotel has decided to charge 900 dollars for a room it normally sells at 300.",
          "Points are at their best precisely when hotels are at their greediest, because award pricing usually moves more slowly than revenue management does.",
        ],
      },
      {
        heading: "Where they are usually wasted",
        body: [
          "Cheap nights, shoulder season, and anywhere a paid stay would have earned you meaningful status credit. Also anything with a hefty resort fee, since many programmes still charge those on award stays and the free night turns out to cost eighty dollars.",
          "Watch for the fifth-night-free benefits some programmes offer. On a week-long stay that can change the maths substantially in favour of redeeming.",
        ],
      },
      {
        heading: "A note on status",
        body: [
          "Chasing status for its own sake is usually a bad deal unless your travel is already paid for by someone else. The benefits that actually matter are late checkout and breakfast, and both can often be had by simply booking a rate that includes them.",
          "Points are a tool, not a scoreboard. Spend them when the arithmetic is good and stop treating the balance as savings.",
        ],
      },
    ],
  },
  {
    slug: "the-case-against-the-resort-fee",
    title: "The Case Against the Resort Fee",
    kicker: "Opinion",
    dek: "A charge for things you did not ask for, disclosed at the last possible moment. It is the worst habit in hospitality and it is spreading.",
    excerpt:
      "Resort fees exist to make a room look cheaper than it is. They corrode trust, distort comparison, and the best hotels in the world manage perfectly well without them.",
    author: "Shivam Sood",
    readTime: 5,
    date: "August 2026",
    heroImage: U("1571003123894-1f0594d2b5d9", 2000),
    cardImage: U("1571003123894-1f0594d2b5d9", 1000),
    hotelSlugs: ["marina-bay-sands", "beverly-hills-hotel", "burj-al-arab"],
    sections: [
      {
        body: [
          "You find the room. The rate looks reasonable. You go through the booking, hand over the card, and somewhere near the final screen a line appears: resort fee, 45 dollars per night, payable at the property. For the pool you were always going to use, the wifi that costs the hotel nothing, and a bottle of water.",
          "It is a small amount of money and an enormous amount of damage.",
        ],
      },
      {
        heading: "Why they exist",
        body: [
          "Resort fees are a pricing trick, not a service. Splitting the rate lets a hotel appear cheaper in the search results that decide most bookings, while collecting the same total. In some markets it also shifts money out of categories where commission or tax is calculated.",
          "None of these reasons has anything to do with the guest, which is precisely the problem.",
        ],
      },
      {
        heading: "What it does to trust",
        body: [
          "Hospitality runs on the assumption that the house is on your side. A charge introduced at the last moment, for things you did not choose, tells you the opposite before you have even arrived.",
          "The feeling lingers. Guests who have been surprised by a fee scrutinise every other line on the bill, and they are right to. It converts a relationship into a transaction that needs auditing.",
        ],
      },
      {
        heading: "The comparison problem",
        body: [
          "The deeper harm is that it breaks the ability to compare. Two hotels at 320 dollars are not the same hotel if one adds 50 dollars a night and the other does not. Multiply across a week and the cheaper looking option is comfortably more expensive.",
          "Regulators in several markets have started forcing all-in pricing at the first display, which is the correct fix and cannot come fast enough.",
        ],
      },
      {
        heading: "What good hotels do instead",
        body: [
          "The best hotels I know charge one number and include what a guest would reasonably expect. Wifi, the pool, the gym, the water by the bed. Some go further and make the minibar free, which costs them very little and buys extraordinary goodwill.",
          "If a hotel believes its pool is worth 45 dollars a night, it should put that in the room rate and let people decide. Confidence in your own pricing is itself a form of hospitality.",
        ],
      },
    ],
  },
  {
    slug: "one-bag-for-two-weeks",
    title: "One Bag, Two Weeks, Any Climate",
    kicker: "Service",
    dek: "How to pack for a fortnight that includes a safari, a city, and a dinner where you are expected to look like an adult, without checking a bag.",
    excerpt:
      "A repeatable packing system for long, mixed trips: one colour spine, three layers, and the small number of things worth spending real money on.",
    author: "Shivam Sood",
    readTime: 6,
    date: "August 2026",
    heroImage: U("1553062407-98eeb64c6a62", 2000),
    cardImage: U("1553062407-98eeb64c6a62", 1000),
    hotelSlugs: ["singita-sabi-sand", "the-oberoi-udaivilas", "claridges-london"],
    sections: [
      {
        body: [
          "The hardest trips to pack for are the mixed ones. Four days in a city, five on safari, three somewhere hot, and one dinner where shorts would be a mistake. Most people solve this by checking a very large bag and then wearing about a third of it.",
          "The alternative is a system rather than a list. Once you have it, packing takes twenty minutes and you stop thinking about it.",
        ],
      },
      {
        heading: "Pick one colour spine",
        body: [
          "Choose two neutrals that work together and build everything around them. Navy and stone, or olive and cream. Every top must work with every bottom. This single decision cuts what you carry by roughly a third, because nothing is stranded waiting for its one matching partner.",
          "Keep the colour discipline for outerwear and shoes too, which are the heaviest and least flexible things you will carry.",
        ],
      },
      {
        heading: "Three layers, not three wardrobes",
        body: [
          "A base layer you can wear alone in heat, a mid layer for evenings and aggressive air conditioning, and one shell that handles wind and rain. That combination covers roughly a forty degree range, which is more than most itineraries demand.",
          "Merino is worth the money here. It handles heat and cold, and it can be worn several days without announcing itself, which is the whole game on a long trip.",
        ],
      },
      {
        heading: "The laundry decision",
        body: [
          "Packing for fourteen days is the mistake. Pack for five and plan one laundry moment. Nearly every hotel above a certain level does same-day service, and where they do not, a sink and a travel line handle shirts and underwear overnight.",
          "This is the single change that takes a trip from a checked bag to a carry-on, and it is more reliable than any folding technique.",
        ],
      },
      {
        heading: "Where to spend, where not to",
        body: [
          "Spend on shoes, the bag itself, and the one jacket that has to work everywhere. These are used constantly, carry weight, and cheap versions fail at the worst moments. One pair of shoes that is smart enough for dinner and comfortable enough for a full day of walking removes an entire category from your luggage.",
          "Do not spend on packing cubes, travel-sized everything, or gadgets that solve problems you have never actually had. Hotels have hairdryers. Buy the sunscreen when you land.",
        ],
      },
      {
        heading: "The safari and black-tie problem",
        body: [
          "Safari camps almost always provide laundry and often lend you the neutral layers you forgot, so pack lighter than the brochure suggests. Two pairs of trousers is genuinely enough for a week of drives.",
          "For the one smart dinner, a linen or lightweight wool jacket compresses better than people expect and rescues an otherwise casual wardrobe. That single item is what lets you carry one bag and still walk into a grand dining room without feeling underdressed.",
        ],
      },
    ],
  },
];

export const articles: Article[] = articleCatalogue.map((article, index) => ({
  ...article,
  author: editorialAuthorForIndex(index),
  sections: [...article.sections, ...(legacyArticleAdditions[article.slug] ?? [])],
}));

// ---- helpers -------------------------------------------------------------

export const getArticle = (slug: string) =>
  articles.find((a) => a.slug === slug);

export const getFeaturedArticles = () => articles.filter((a) => a.featured);
