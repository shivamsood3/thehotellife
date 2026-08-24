import type { ArticleSection } from "../articles";
import type { GuideSection } from "../guides";
import type { Section } from "../hotels";

export const legacyHotelAdditions: Record<string, Section[]> = {
  "the-plaza-new-york": [
    { heading: "Where it falls short", body: [
      "The Plaza's public mythology can work against the private experience. The Palm Court and retail concourse draw visitors all day, and arrival may feel like entering a landmark before it feels like entering a hotel. Some rooms lean heavily on gilded nostalgia while technology and small maintenance details reveal the age beneath the restoration.",
      "Service is capable but must negotiate enormous expectations and a complex mixed-use building. At this rate, book for Central Park, history and the pleasure of the address—not because it is New York's most serene or contemporary room."
    ]},
    { heading: "Who it is for", body: [
      "First-time visitors, celebratory families and travellers emotionally attached to old New York will understand the price. Design minimalists and guests wanting a discreet downtown rhythm will not. The Plaza is strongest as an event in the trip: two nights, tea in the Palm Court and a park-view morning before the city crowds arrive."
    ]}
  ],
  "burj-al-arab": [
    { heading: "The spectacle tax", body: [
      "The building is an icon, but icon status brings controlled access, day visitors and a degree of operational theatre around every movement. Interiors remain unapologetically maximal; what reads as thrilling to one guest will feel dated to another. Neither response is wrong, and no amount of neutral language can make the hotel subtle.",
      "Rates are only part of the cost. Premium dining, transfers and experiences can turn an already extravagant stay into a different financial category. Decide which rituals matter before arrival instead of attempting to consume the entire building."
    ]},
    { heading: "Who it is for", body: [
      "Book Burj Al Arab for the story, the duplex-suite excess and a service model that treats arrival as theatre. Do not book it for contemporary restraint, a walkable neighbourhood or a natural beach-resort atmosphere. One or two nights delivers the icon; a longer Dubai stay may be better balanced elsewhere."
    ]}
  ],
  "beverly-hills-hotel": [
    { heading: "The trade-offs", body: [
      "The bungalow fantasy comes with a campus-like plan, and room position changes privacy, walking distance and road sound. Entry rooms can feel modest beside the hotel's legend, making category selection more consequential than the pink facade suggests. The Polo Lounge remains a social stage as much as a restaurant.",
      "The address is excellent for Beverly Hills and poor for experiencing Los Angeles without a car. Traffic should shape every reservation; a dinner across town can consume the evening before it begins."
    ]},
    { heading: "Who it is for", body: [
      "This is for travellers who want Hollywood continuity rather than novelty: pool lunches, palm-print corridors and discreet people-watching. Stay elsewhere if design currency matters more than institutional character. The hotel earns affection through repetition, and makes most sense to guests willing to adopt its rituals."
    ]}
  ],
  "the-savoy-london": [
    { heading: "Where it can feel busy", body: [
      "The Savoy is a working landmark with restaurants, bars, celebrations and a constant stream of non-residents. The theatrical public life gives the hotel energy, but it also means the lobby rarely behaves as a private drawing room. Room orientation affects noise and view; a Thames-facing category is the meaningful splurge.",
      "The Edwardian and Art Deco styles vary across the building, so guests should state a preference rather than assume every published image represents every room. The hotel's age is character when maintained perfectly and inconvenience when it is not."
    ]},
    { heading: "Who it is for", body: [
      "Choose The Savoy for London history, river views and the pleasure of moving between the American Bar, theatreland and the Strand. Travellers seeking a small, residential hotel should look to Mayfair or Belgravia. This is a grand hotel in the literal sense: public, ceremonial and at its best when the guest enjoys the show."
    ]}
  ],
  "upper-house-hong-kong": [
    { heading: "The limits of the calm", body: [
      "The Upper House's refusal of conventional facilities is central to its appeal and its clearest limitation. There is no resort-scale spa or sprawling pool deck, and the intimate restaurant offering can feel narrow during a longer stay. Pacific Place supplies convenience, but the immediate environment is polished rather than atmospheric.",
      "Room technology and details have evolved, yet the hotel's real luxury remains space and service rather than novelty. Guests looking for spectacle may mistake confidence for absence."
    ]},
    { heading: "Who it is for", body: [
      "Ideal for repeat Hong Kong visitors, design-minded business travellers and anyone who values a large room over a long amenity list. The hotel behaves like an exceptionally serviced apartment above the city. That is either the entire point or not enough hotel, depending on the trip."
    ]}
  ],
  "amankila-bali": [
    { heading: "What age has changed", body: [
      "Amankila's architecture remains powerful because it was designed with the hill rather than imposed upon it. Individual suites, however, can show their years in ways the famous three-tier pool does not. Travellers paying contemporary Aman rates should distinguish graceful patina from equipment or finishes due for attention.",
      "East Bali's seclusion is a strength, but it lengthens airport transfers and reduces spontaneous dining. Plan the resort as a destination, not a base for crossing the island each day."
    ]},
    { heading: "Who it is for", body: [
      "Come for architecture, quiet and a less saturated side of Bali. Guests who want beach-club energy, restaurant variety or the newest villa technology will be happier elsewhere. Amankila remains compelling because its original idea was so strong; booking it requires valuing that idea more than novelty."
    ]}
  ],
  "la-mamounia": [
    { heading: "The grand-hotel compromise", body: [
      "La Mamounia is both hotel and Marrakech institution, which means its bars, gardens and restaurants attract a public beyond residents. That animation can be glamorous at dusk and tiring at peak hours. The large inventory also creates substantial variation in outlook; garden, pool and Koutoubia views deserve specific discussion.",
      "Renovations have kept the hotel polished, though the experience is more formal and self-contained than a riad. Guests should leave the gates every day. Marrakech cannot be understood only through a palace garden, however beautiful."
    ]},
    { heading: "Who it is for", body: [
      "The right choice for a first visit when scale, history and full-service facilities provide reassurance. Return visitors may prefer a small medina riad or a retreat outside town. La Mamounia is not intimate; it is magnificent, and should be booked by travellers who know the difference."
    ]}
  ],
  "park-hyatt-tokyo": [
    { heading: "Before you book", body: [
      "The Park Hyatt's power lies in proportion, views and cultural memory rather than an endless sense of newness. The Shinjuku location sits above the city's western business district, requiring a walk or car to many evening addresses. The vertical plan also makes lifts part of every journey.",
      "Room category and orientation determine how much Tokyo enters the experience. On clear days, distant mountains matter more than decorative updates. Ask about current renovation status and facility access for the exact dates, because a legend should still be judged as an operating hotel."
    ]},
    { heading: "Who it is for", body: [
      "Film romantics, architecture enthusiasts and travellers who want a view-driven refuge will still understand it immediately. Guests prioritising immediate street life, tiny bars and train convenience should choose a lower, more central base. The hotel's spell is real, but it works through altitude and remove."
    ]}
  ]
};

export const legacyGuideAdditions: Record<string, GuideSection[]> = {
  "barcelona-beyond-the-sagrada": [
    { heading: "How to make the city manageable", body: [
      "Group days by neighbourhood rather than bouncing between monuments. Pair the Gothic quarter with the waterfront, Eixample architecture with Gràcia, and Montjuïc with Poble-sec. Barcelona looks compact on a map and becomes exhausting when every day crosses it three times.",
      "Reserve major modernist sites directly and choose one interior per day. Summer requires shade, late meals and a hotel near the places you will actually visit. Spring and autumn provide the city at its most walkable, though major festivals and trade fairs can transform room rates overnight."
    ]},
    { heading: "A note on belonging", body: [
      "Barcelona is a Catalan capital and a lived city under intense housing and tourism pressure. Learn a few Catalan courtesies, keep noise down in residential streets and do not treat food markets as photographic sets. The better visit spends beyond the most crowded axis and recognises that access to a beautiful neighbourhood creates obligations as well as pleasure."
    ]}
  ],
  "first-safari-guide": [
    { heading: "The questions to ask before paying", body: [
      "Confirm whether drives are private or shared, how many guests sit in a vehicle, whether park fees and transfers are included and what the cancellation policy says about weather. Ask how guides are trained and how the lodge contributes to conservation and neighbouring communities. A beautiful tent is the least informative part of a safari quotation.",
      "For a first trip, four nights in one ecosystem is usually better than two nights in two. Wildlife does not appear on command, and a slower stay lets guides follow patterns instead of beginning from zero every morning."
    ]}
  ],
  "marrakech-sensory-guide": [
    { heading: "How not to exhaust Marrakech", body: [
      "The medina is most rewarding in concentrated doses. Plan one guided morning, one garden or museum after lunch and time at the hotel before evening. A precise meeting point is more useful than optimistic navigation, and licensed guides should be booked through a trusted source rather than acquired under pressure in the street.",
      "Stay inside the medina for immediacy or outside it for space, accepting that no property offers both perfectly. Three nights is a beginning; four allows the city to move from sensory event to intelligible place."
    ]}
  ],
  "paris-for-grown-ups": [
    { heading: "The reservation strategy", body: [
      "Book the one restaurant that defines the trip, then let cafés, markets and wine bars absorb the rest. Paris becomes brittle when every meal has a confirmation number. Museum timed entry is sensible; a schedule built from four timed entries a day is not.",
      "Choose a hotel by the version of Paris wanted at eight in the morning, not by a list of monuments. The Left Bank, Marais, western Right Bank and outer arrondissements create different trips. A room with enough light and somewhere to sit will matter more than a lobby designed for people who are not staying there."
    ]}
  ]
};

export const legacyArticleAdditions: Record<string, ArticleSection[]> = {
  "points-versus-cash": [
    { heading: "The calculation most people skip", body: [
      "Compare the redemption against the cash rate you would realistically pay, not the most inflated flexible rate on the screen. Include taxes, resort fees, breakfast and cancellation terms. Then account for points that could be used on a future trip with greater value. A redemption is not free; it is spending a currency with an opaque acquisition cost.",
      "Points are strongest when they unlock a stay that cash would make unreasonable, especially at peak dates or in destinations with few good alternatives. Cash is stronger when a modest independent hotel better suits the trip than a chain property chosen only because an award chart exists."
    ]}
  ],
  "the-case-against-the-resort-fee": [
    { heading: "What transparent pricing should look like", body: [
      "The first displayed rate should include every mandatory charge controlled by the hotel. Optional parking, spa treatments and meals can remain optional; a daily fee for Wi-Fi, pool access and local calls cannot. If every guest must pay it, it is the room rate wearing a second name.",
      "Hotels argue that bundled fees communicate value. They do the opposite. Value is clearest when inclusions are stated once, the total is visible before personal details are entered and the guest does not need a calculator to understand a night's sleep."
    ]}
  ]
};
