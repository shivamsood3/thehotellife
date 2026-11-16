import type { Guide, GuideSection } from "../guides";

type Revision = Partial<Guide> & { sections: GuideSection[] };

export const priorityGuideRewrites: Record<string, Revision> = {
  "48-hours-in-tokyo": {
    updated: "November 16, 2026",
    title: "48 Hours in Tokyo: An Unhurried First-Timer's Route",
    dek: "Two days, two sides of the city and enough space between them to feel where you are.",
    excerpt: "A practical two-day Tokyo itinerary linking Asakusa and Yanaka with Meiji Jingu and Shibuya, plus hotel choices, timed visits and the bookings to make ahead.",
    sources: [
      { label: "GO TOKYO: Asakusa and Sensoji", url: "https://www.gotokyo.org/en/destinations/eastern-tokyo/asakusa/" },
      { label: "GO TOKYO: Yanaka and Nezu", url: "https://www.gotokyo.org/en/destinations/northern-tokyo/yanaka-and-nezu/index.html" },
      { label: "GO TOKYO: Tokyo itinerary and western neighbourhoods", url: "https://www.gotokyo.org/en/see-and-do/index.html" },
      { label: "Shibuya Scramble Square: SHIBUYA SKY admission and hours", url: "https://www.shibuya-scramble-square.com/en/index.html" },
    ],
    relatedReading: [
      { label: "Our Aman Tokyo review", url: "/hotels/aman-tokyo" },
      { label: "Our Park Hyatt Tokyo review", url: "/hotels/park-hyatt-tokyo" },
    ],
    sections: [
      { body: [
        "Tokyo defeats the traveller who tries to collect it. Two days are enough for an introduction, not a conquest, so we give each day one side of the city and resist the irresistible third stop. The first belongs to Asakusa and the older northern neighbourhoods; the second moves west to a shrine, street life and a view over the whole improbable arrangement. That division saves time on trains and gives each place room to feel like itself.",
        "We would choose a hotel according to the evening we want, not a map's apparent centre. Otemachi is useful for a quieter return and a strong rail network; Shinjuku is a more overtly urban base. Neither location turns Tokyo into a walkable weekend. A transit card, a little patience and one firm dinner reservation are more valuable than an itinerary timed to the minute."
      ] },
      { heading: "Day one, early: Asakusa before the shops open", body: [
        "We would reach Sensoji in Asakusa early enough to see the temple precinct before Nakamise becomes a shopping street. The temple's main hall opens at 6 a.m. for much of the year and at 6:30 a.m. from October through March, according to Tokyo's official visitor information; the grounds can be experienced even earlier. Those hours are worth checking again before travel. The point is not to perform solitude for a photograph, but to let the approach from Kaminarimon to Hozomon make sense before the midday crowd compresses it.",
        "Afterwards, eat breakfast near the station or take the morning slowly in the surrounding streets. We would not send a reader to a nameless side street for a particular dish without confirming that a kitchen is open. If food is the main purpose of the morning, choose and reserve a restaurant with a published menu and hours. Otherwise, save the appetite for lunch and follow the streets west towards Kappabashi, where kitchenware shops provide a better souvenir hunt than another row of generic gifts."
      ] },
      { heading: "Day one, afternoon: Yanaka rather than another icon", body: [
        "From Asakusa, move to Yanaka and Nezu rather than trying to add the entire east side of Tokyo. The official city guide points to Yanaka Ginza, Yanaka Cemetery and Nezu Shrine as anchors of a district where narrow lanes and small shops still matter. We would arrive by rail at Nippori, walk down towards Yanaka Ginza, then give ourselves permission to wander without a checklist. It is a different pleasure from Sensoji: less monumental, more attentive to ordinary scale.",
        "Keep a museum as the weather option. Ueno's museums are near enough to make a deliberate substitution if rain arrives, but trying to do a major collection and Yanaka in the same afternoon produces two abbreviated experiences. Dinner need not remain in this district. Return to the hotel, change and choose a restaurant within an easy journey of it. A twenty-minute cross-city transfer is tolerable at six; after a full day on foot, a second ambitious transfer feels like poor editing."
      ] },
      { heading: "Day two, morning: a forest before the crossing", body: [
        "The western day begins at Meiji Jingu and its wooded approach, then moves through Omotesando and Harajuku towards Shibuya. We like the sequence because the quiet comes first, before the commercial streets begin to gather force. Tokyo's official tourism guide also links these neighbourhoods on one route. We would walk the shrine grounds without rushing to the next photograph, then choose either design shops or a long lunch as the middle of the day. Trying to do both comprehensively is another way to turn a short trip into a list.",
        "Shibuya's crossing is worth seeing, but it is not worth organising an entire afternoon around. Cross it once, step aside and look at the city moving around you. If a high view appeals, book SHIBUYA SKY for a timed entry rather than hoping for a sunset ticket on the day. Its official site lists an observation area 229 metres up and publishes current hours and admission details; weather can affect the open-air roof. The indoor view and the outdoor one are not always interchangeable, so check conditions before committing the evening to it."
      ] },
      { heading: "Where to stay, and what to reserve", body: [
        "Aman Tokyo makes sense when we want the bedroom to be a real pause between the two days. Its Otemachi setting and high-floor rooms offer distance from the street without demanding a remote address. Park Hyatt Tokyo is a different proposition: Shinjuku, an explicit skyline and the public rooms that made it famous. The latter reopened in December 2025 after a major restoration, so old photographs and accounts cannot answer every current room question. We would choose it for that particular high-rise mood, then confirm the room orientation and the exact facilities we plan to use.",
        "We would reserve one dinner, a timed observation ticket if that is essential, and nothing else that cannot bear uncertainty. Check the opening days of any museum or restaurant that anchors the route. Let the weather move the order if necessary. Two days spent properly in these neighbourhoods will leave huge parts of Tokyo unseen. That is the honest outcome of a first visit, and a better one than having touched ten districts without understanding any of them."
      ] },
    ],
  },
};
