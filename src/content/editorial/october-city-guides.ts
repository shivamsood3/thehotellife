import type { Guide } from "../guides";

const common = { author: "Zinnia Thapar", date: "October 4, 2026", region: "Asia" as const, readTime: 4 };

export const octoberCityGuides: Guide[] = [
  {
    ...common,
    slug: "where-to-stay-in-hong-kong",
    title: "Where to Stay in Hong Kong: The Island, the Harbour or Kowloon?",
    destination: "Hong Kong",
    dek: "The most expensive view is not necessarily the best base. Choose a neighbourhood before you choose a skyline.",
    excerpt: "A Hong Kong hotel-area guide comparing Admiralty, Central, Wan Chai and Tsim Sha Tsui, with practical room-view and transport advice.",
    heroImage: "/hotels/upper-house-hong-kong-official.jpg",
    cardImage: "/hotels/upper-house-hong-kong-official.jpg",
    imageAlt: "The Upper House in Hong Kong's Admiralty district",
    hotelSlugs: ["jw-marriott-hotel-hong-kong", "upper-house-hong-kong", "peninsula-hong-kong", "hopewell-hotel-hong-kong"],
    sources: [{ label: "Hong Kong Tourism Board: getting around", url: "https://www.discoverhongkong.com/eng/travel-guide/traveller-essentials/getting-around.html" }, { label: "JW Marriott Hong Kong: Admiralty address", url: "https://www.marriott.com/en-us/hotels/hkgdt-jw-marriott-hotel-hong-kong/overview/" }],
    relatedReading: [{ label: "Ten best hotels in Hong Kong", url: "/best-hotels/hong-kong" }],
    sections: [
      { heading: "First, decide which Hong Kong you want at the door", body: [
        "A room over Victoria Harbour can be magnificent. It can also distract from a more consequential choice: where will you step out each morning? Hong Kong is a city of crossings, levels and neighbourhoods with distinct rhythms. A hotel that looks central on a small map may still require a detour to reach the places you actually intend to spend time. Start by pinning one or two daily priorities, not by collecting the most dramatic room photographs.",
        "For a short first stay with plans on both sides of the harbour, transport access is worth more than an abstractly fashionable postcode. For a slower return, choose the district whose streets you want to learn. The right base makes room for an unplanned bakery, a second walk after dinner and the pleasure of coming back to a familiar corner. Those experiences rarely appear in a hotel's facilities grid." ] },
      { heading: "Admiralty: the unromantic choice that works", body: [
        "Admiralty can seem like a place to pass through rather than to fall for. That is precisely why its best hotels are so useful. At Pacific Place, JW Marriott Hong Kong provides a substantial, full-service base with direct access to the transport network. The Upper House takes the same wider address in a more private, design-led direction. Choosing between them is not a question of which is objectively more luxurious; it is whether you want a broad hotel operation or a quieter sense of retreat.",
        "The trap is to think that convenience means surrendering atmosphere. Use Admiralty to make more of the city, not less: leave without a car, return for a pause, then head out again. If you are arriving with a difficult schedule or combining work and leisure, this flexibility can improve the whole trip. If your fantasy is to tumble from the lobby into a small, independent restaurant-lined street, select a different district." ] },
      { heading: "Central: for people who want the city close", body: [
        "Central puts restaurants, business addresses and much of Hong Kong Island's urban intensity within reach. It is a strong base when your days are anchored here, and particularly when you want a memorable bar or meal without treating every evening as a transfer. Four Seasons Hong Kong and Mandarin Oriental Hong Kong make different cases for staying in the centre: one with a contemporary waterfront scale, the other with the depth of a long-established city institution.",
        "Central's name can mislead the first-time visitor into assuming every sight is equally near. It is not a neutral midpoint for the whole territory. Look at the walking route as well as the straight-line distance, and decide whether your actual interests are on Hong Kong Island, across the water or farther out. If all your evenings are in Kowloon, a Central booking can turn a beautiful hotel into a repeated return journey." ] },
      { heading: "Wan Chai: more texture, less polish", body: [
        "Wan Chai rewards travellers who prefer a district with several layers visible at once. Its streets are not uniformly picturesque, which is part of the point: older shopfronts, newer towers and ordinary city life share the frame. The Hari offers a smaller, socially inclined hotel proposition; Hopewell Hotel provides a more expansive new base. Check their exact positions rather than assuming that the same neighbourhood name means identical walks and journeys.",
        "This can be a satisfying choice for repeat visitors willing to trade a ceremonial arrival for a neighbourhood they can actually use. It is less persuasive if the trip is built around seeing the classic Kowloon waterfront each evening. The district's energy is a benefit when you want to go out; it may not be what you want directly below your window. Ask about room aspect and street exposure, particularly if you are sensitive to noise." ] },
      { heading: "Tsim Sha Tsui: let the harbour be the evening", body: [
        "There is an obvious pleasure in ending the day on the Kowloon side with Hong Kong Island lit across the water. The Peninsula and Regent make that prospect central to their appeal, though their histories and hotel personalities differ considerably. Book a harbour-view category deliberately, not because the property's marketing features the skyline. A different-facing room can still be excellent, but it is a different purchase.",
        "Tsim Sha Tsui also works when your plans are concentrated on the Kowloon side and you like the energy of a busy waterfront district. It does not automatically make every island-side appointment easier. Before paying for an iconic view, imagine your ordinary morning: breakfast, the first journey, and the time you expect to return. If the hotel will serve mainly as a place to sleep, its most famous vista may not be the smartest place to allocate the budget." ] },
      { heading: "The booking test", body: [
        "Once the district is decided, ask three questions of the room: what exactly can be seen from it, how much time will you spend there in daylight, and what does the rate include? Harbour, partial harbour, city and mountain are not interchangeable labels. Likewise, breakfast, lounge access, extra beds and cancellation rules can change the comparison between two apparent bargains. Read the actual offer, not only the hotel name.",
        "For three nights, one base is usually enough. A split between island and Kowloon becomes more interesting on a longer trip, when the move alters the shape of the days rather than merely producing another checkout. Our first-visit default would be a well-connected island hotel and at least one deliberate evening across the harbour. But the more useful rule is simpler: book the version of Hong Kong you intend to inhabit, not just the photograph you want to bring home." ] },
    ],
  },
  {
    ...common,
    slug: "where-to-stay-in-singapore",
    title: "Where to Stay in Singapore: Beyond the Marina Bay Photograph",
    destination: "Singapore",
    dek: "Civic District history, a river warehouse, Orchard convenience or Sentosa seclusion: four cities within one city.",
    excerpt: "Choose the right Singapore hotel area—Marina Bay, the Civic District, the river, Orchard Road or Sentosa—with specific tradeoffs and hotel recommendations.",
    heroImage: "/hotels/raffles-singapore.jpg",
    cardImage: "/hotels/raffles-singapore.jpg",
    imageAlt: "The historic Raffles Singapore hotel in the Civic District",
    hotelSlugs: ["raffles-singapore", "marina-bay-sands"],
    sources: [{ label: "Singapore Tourism Board: neighbourhoods", url: "https://www.visitsingapore.com/neighbourhood/featured-neighbourhood/" }, { label: "Singapore Tourism Board: Singapore River", url: "https://www.visitsingapore.com/neighbourhood/featured-neighbourhood/singapore-river/" }],
    relatedReading: [{ label: "Ten best hotels in Singapore", url: "/best-hotels/singapore" }],
    sections: [
      { heading: "A city small enough to tempt bad planning", body: [
        "Singapore's size encourages the idea that the hotel address barely matters. On a map, the distances look modest; in the lived day, the difference between stepping into a gallery district, a shopping corridor and an island resort becomes substantial. The first question is not whether you want a pool. At this level, many hotels have one. It is which version of the city you would most enjoy returning to when the sightseeing stops.",
        "Think in mornings and evenings. Will breakfast be followed by museums, meetings, a walk by the water or a day designed around children? Will you want to head out again after dinner? A room with a skyline view can be wonderful, but it is only part of the answer. Singapore rewards travellers who choose a base for the rhythm of the trip rather than for a single photograph." ] },
      { heading: "Civic District: stay close to the city's memory", body: [
        "The Civic District gives a first visit an unusually legible starting point. Raffles Singapore is the grand expression of it: a suite hotel whose architecture, courtyards and service make the property itself a reason to travel. The temptation is to treat it as an attraction you sleep inside. Better to use its location, too, making time for the museums and public spaces nearby rather than sealing yourself into the hotel programme.",
        "A classic address does not mean a purely nostalgic stay. It can work beautifully for a traveller who wants a strong sense of place with urban life on the doorstep. The tradeoff is price and a certain formality; those who want a smaller, more contemporary hotel may prefer the river. Ask whether the room category, breakfast arrangements and cancellation terms fit the actual journey before committing to the icon." ] },
      { heading: "Marina Bay: spectacle with a practical price", body: [
        "Marina Bay is the Singapore of ambitious architecture, broad promenades and illuminated evenings. Marina Bay Sands gives you an enormous integrated resort and the guest-only rooftop pool; The Fullerton Bay Hotel places you closer to the water at a different scale; Mandarin Oriental Singapore offers another polished bay-area base. These are not variations on the same room with a different logo. One is a destination machine, one a more intimate waterfront address, one a substantial contemporary city hotel.",
        "Book here if the bay itself is part of the holiday. Be careful, though, about paying for a view you will barely see or assuming that an iconic rooftop supplies a peaceful swim. Public attractions and hotel-only facilities are different things; confirm the access attached to your exact reservation. The area is convenient for certain sights, but its grand public spaces may feel less like a lived-in neighbourhood than the river or Chinatown." ] },
      { heading: "The river: a smaller way into the city", body: [
        "Along the Singapore River, the atmosphere changes as you move from one quay to another. The Warehouse Hotel at Robertson Quay makes the case for a design-led stay in a converted historic building, with restaurants and waterside walking nearby. It is a compelling alternative to the giant bay hotels for travellers who value proportion, material character and a place that feels connected to its immediate streets.",
        "The river is not a single address, and a picturesque quay is not guaranteed silence. Check the location of the room within a small hotel and ask about evening noise if sleep is a priority. The reward is a stay with a more domestic scale: going out for coffee or dinner can feel like continuing your neighbourhood, rather than leaving a self-contained resort behind. That distinction is easy to overlook when every hotel photograph is shot after dark." ] },
      { heading: "Orchard and Sentosa: opposite answers", body: [
        "Orchard is useful when shopping, appointments and city convenience determine the schedule. The Singapore EDITION and Artyzen Singapore offer contrasting contemporary moods without making the bay view the point of the stay. If you plan to spend most of your time downtown, do not choose Sentosa simply because a resort photograph appears to offer more room for the money. The island creates a different holiday with its own transfer rhythm.",
        "For a deliberate pause, however, Sentosa earns its place. Capella Singapore folds heritage buildings into substantial grounds; The Barracks Hotel offers a smaller historic address. Both make more sense when you will actually devote time to the property and island. A one-night detour can feel rushed after the packing and transfer; a longer stay lets the geographical separation become a benefit. Families should compare beach access, children's facilities and room layouts, not just the word resort." ] },
      { heading: "The final filter", body: [
        "Pick one main base for a short stay and spend the saved transfer time on Singapore. If you are staying long enough to split the trip, make the second hotel a genuine change of setting—perhaps Civic District then Sentosa—not a move between two bay addresses that serve the same days. The hotel switch should expand the experience, not merely enlarge the packing list.",
        "Then compare total cost and what it buys: view, breakfast, flexible cancellation, guest-only facilities and space for everyone travelling. Singapore hotels are good at packaging very different propositions under equally persuasive photographs. The strongest booking is rarely the one with the most amenities in a list. It is the one that makes the daily shape of your trip feel natural from the first morning." ] },
    ],
  },
  {
    ...common,
    slug: "where-to-stay-in-bangkok-river-or-city",
    title: "Where to Stay in Bangkok: River Romance or City Momentum?",
    destination: "Bangkok, Thailand",
    dek: "A Chao Phraya terrace and a hotel by the Skytrain can be equally brilliant—and entirely different holidays.",
    excerpt: "Compare Bangkok's Chao Phraya river hotels with Sathorn, Ploenchit and Sukhumvit bases, plus practical advice on boats, room views and short stays.",
    heroImage: "/hotels/capella-bangkok-official.jpg",
    cardImage: "/hotels/capella-bangkok-official.jpg",
    imageAlt: "Capella Bangkok beside the Chao Phraya River",
    hotelSlugs: ["capella-bangkok", "mandarin-oriental-bangkok"],
    sources: [{ label: "Tourism Authority of Thailand: travelling by river boat", url: "https://www.tourismthailand.org/Articles/1-day-trip-boat-journey-in-bangkok-enjoy-a-great-time-alongside-the-river-with-bangkok-s-boat-service" }, { label: "Capella Bangkok: riverfront hotel", url: "https://capellahotels.com/en/capella-bangkok" }],
    relatedReading: [{ label: "Ten best hotels in Bangkok", url: "/best-hotels/bangkok" }, { label: "A different Bangkok itinerary", url: "/guides/bangkok-for-people-who-think-they-know-it" }],
    sections: [
      { heading: "Two excellent hotels can lead to two different Bangkoks", body: [
        "Bangkok asks for more honesty from a hotel booking than most cities. The temptation is to fall for a terrace above the Chao Phraya, then discover that nearly every appointment on your itinerary is elsewhere. Equally, a flawlessly located urban tower can make the trip efficient while leaving no room for the river that first drew you here. Before comparing brands, decide which hours you want to belong to the hotel and which to the city.",
        "The river versus city question is not a verdict on authenticity. Both are Bangkok. It is a question of sequence: do you want to begin and end the day at the water, or have the freedom to move quickly between shops, galleries, meetings and restaurants? Once that decision is made, the shortlist becomes much clearer." ] },
      { heading: "The Chao Phraya: stay for the changing light", body: [
        "Mandarin Oriental Bangkok gives the river an established, deeply rooted hotel address. Capella Bangkok offers a contemporary, more residential interpretation; Four Seasons Bangkok at Chao Phraya places art, restaurants and broad public spaces along the water. The Siam, farther upriver in Dusit, is quieter and more secluded again. These properties are not interchangeable simply because they share a riverbank or a boat transfer.",
        "Book a river hotel if you will give it a morning and an evening, not only a few hours between excursions. Confirm exactly what your room overlooks. A riverfront building can contain different aspects, floors and degrees of privacy. Ask also about the hotel's current boat arrangements and how they relate to public transport; a service that works well for a leisurely outing may not solve every cross-town journey." ] },
      { heading: "Boats are a pleasure, not a universal shortcut", body: [
        "The river can be a useful route as well as a memorable one, particularly when roads are slow. Thailand's tourism authority describes public boat services from Sathorn Pier; individual hotels may run their own shuttles. But routes, departure points and service hours differ. Do not translate a lovely photograph of a hotel launch into a promise that it will deposit you at every place on your itinerary.",
        "For a temple visit or an evening on another part of the river, boats may improve the day. For a fixed appointment inland, allow a route that does not depend on an optimistic connection. If you expect several tightly timed meetings, an urban hotel close to the right rail station or district may be more luxurious in practice than the loveliest waterside suite." ] },
      { heading: "Sathorn and Silom: urban Bangkok with a little breathing room", body: [
        "Sathorn and neighbouring Silom offer a more city-facing stay. The Sukhothai Bangkok builds tranquillity around lotus ponds rather than a river view; The Standard at Mahanakhon answers with a very different, sociable tower personality. Both make sense for travellers who want restaurants and a wider spread of city plans, but one asks you to slow down and the other to join the action.",
        "Look past a map label. Some addresses feel walkable; others are best used with a car or a short connection. Bangkok's heat changes the practical meaning of a modest distance, and a road that looks straightforward online may be unpleasant on foot. Ask the hotel about your most important destination before treating its postcode as an all-purpose solution." ] },
      { heading: "Ploenchit and the eastern city", body: [
        "For a trip organised around central shopping, work and meals away from the river, Ploenchit deserves attention. Park Hyatt Bangkok sits above Central Embassy; Rosewood Bangkok brings a more intimate, design-led mood nearby. Neither pretends to be a riverside escape. Their advantage is being closer to the daily life you may actually have planned, with good hotels to return to at the end of it.",
        "Further east, the broad Sukhumvit corridor is not one neighbourhood. A hotel name followed by 'Sukhumvit' tells you far less than its nearest station and the particular stretch of road. Choose this side of the city when the addresses you need are here. Do not do it merely because an attractive nightly rate seems to compensate for repeated cross-city journeys." ] },
      { heading: "How to decide in five minutes", body: [
        "Put your three most important plans on a map. If two cluster near the river and the hotel itself is a main pleasure, choose a waterfront address and protect time to enjoy it. If the pins scatter across business and shopping districts, start with the best-connected city hotel. For a longer journey, a split can make sense: begin with the city's momentum, finish beside the Chao Phraya with fewer obligations.",
        "For two nights, one well-chosen base is usually kinder. Confirm the exact room outlook, breakfast, transport and any lounge or pool-access restrictions before booking. And leave one interval unscheduled. Bangkok is particularly good at making you grateful for an hour spent watching it, rather than moving through it. Whether that hour belongs to a river terrace or a quiet garden is the answer your hotel choice should reflect." ] },
    ],
  },
];
