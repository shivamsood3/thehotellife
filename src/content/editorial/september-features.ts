import type { Article } from "../articles";
import type { Guide } from "../guides";

const U = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const septemberArticles: Article[] = [
  {
    slug: "great-indian-hotel-is-back",
    title: "The Great Indian Hotel Is Back",
    kicker: "Point of View",
    dek: "For years, Indian luxury was flattened into palace clichés or international anonymity. A more confident generation of hotels is finally speaking in its own voice.",
    excerpt: "India's best new and renewed hotels are moving beyond generic opulence, treating craft, food and history as living culture rather than decorative shorthand.",
    author: "Zinnia Thapar",
    readTime: 9,
    date: "September 2026",
    heroImage: U("1542314831-068cd1dbfeeb", 2000),
    cardImage: U("1542314831-068cd1dbfeeb", 1000),
    imageAlt: "An ornate Indian palace hotel courtyard glowing in warm evening light",
    hotelSlugs: ["the-johri-jaipur", "the-imperial-new-delhi", "taj-mahal-palace-mumbai"],
    featured: true,
    sections: [
      { body: [
        "Indian hotels have never lacked splendour. They have lacked permission to be specific. For much of the international luxury boom, the country was reduced to two exportable fantasies: the former palace, heavy with velvet and dynastic nostalgia, and the globally fluent business hotel, so polished that it could have landed in Singapore, Dubai or Dallas without changing a cushion.",
        "Neither form is inherently wrong. Rajasthan's palace hotels remain among the world's great stays, and India's best large operators perfected a culture of service that competitors still study. The problem began when these successful languages hardened into templates. Craft became motif, welcome became choreography and place became the mural behind reception.",
      ]},
      { heading: "Specificity is replacing spectacle", body: [
        "The most persuasive hotels now begin with a narrower question: what could exist only here? At The Johri in Jaipur, that answer is not another acreage-heavy palace but eight rooms hidden in a jewellers' bazaar. In Delhi, The Lodhi's jaali-filtered modernism and The Imperial's difficult colonial archive offer entirely different readings of the capital. Mumbai's Taj remains powerful because its relationship with the harbour is civic, not decorative.",
        "This is a shift from symbols to systems. Local stone matters, but so does the person who quarried it. A regional dish matters, but so do the memory and agriculture behind it. The new confidence lies in editing: one textile used with conviction is stronger than a lobby carrying every craft tradition in the country.",
      ]},
      { heading: "Food stopped behaving like an amenity", body: [
        "For decades, ambitious Indian hotel cooking often meant a French room, a pan-Asian room and an Indian room designed for visitors nervous about spice. Today the most interesting dining rooms reverse the hierarchy. Indian Accent treats nostalgia as material for invention. Loya examines the north through ingredients and technique. Small hotels build menus around the market outside rather than an international procurement catalogue.",
        "The result is not authenticity theatre. It is authorship. A kitchen can acknowledge trade, migration and the fact that no regional cuisine has ever stood still. Guests are invited into an argument about place rather than handed a tasting platter of stereotypes.",
      ]},
      { heading: "Service is learning to loosen its tie", body: [
        "Indian hospitality's instinct for care is formidable, but formal service can become surveillance: a chair pulled before the guest has decided to sit, a repeated 'sir' where a useful answer would do. The sharper hotels retain attentiveness while reducing ceremony. They recognise that privacy is service, that a WhatsApp message may be kinder than a telephone call and that luxury can mean being trusted to find breakfast unaided.",
        "This does not diminish warmth. It makes warmth responsive. The guest on a first trip may want guidance at every turn; the returning traveller may want keys, good coffee and silence. Reading the difference is the work.",
      ]},
      { heading: "The past is becoming more complicated", body: [
        "Heritage hotels have often sold history as atmosphere while editing out conflict. A more mature form of hospitality can preserve beauty without romanticising power. The Imperial's art and architecture are richer when read alongside the politics of New Delhi's creation. The Taj's modern identity includes both celebration and trauma. Palace hotels become more meaningful when the labour, patronage and changing function of the building are acknowledged.",
        "Hotels are not museums, but they are interpreters. A concise, intelligent explanation can deepen a corridor or meal without turning the stay into homework. Travellers increasingly recognise the difference between a story and a slogan.",
      ]},
      { heading: "What comes next", body: [
        "India does not need one definitive hotel style. It needs more difference: Himalayan inns built around mountain weather, coastal houses shaped by monsoon life, city hotels that belong to their neighbourhoods and resorts willing to leave portions of the landscape alone. The opportunity is enormous precisely because the country cannot be reduced to a single aesthetic.",
        "The great Indian hotel is back not because it has rediscovered grandeur, which never disappeared, but because it has rediscovered confidence. It no longer needs to translate every idea for an imagined foreign guest. The world can catch up.",
      ]},
    ],
  },
  {
    slug: "hotel-bar-belongs-to-the-city",
    title: "The Best Hotel Bar Belongs to the City",
    kicker: "Culture",
    dek: "A room filled only with residents is a waiting area with cocktails. The great hotel bar becomes interesting when the city decides it is theirs too.",
    excerpt: "Why enduring hotel bars need regulars, rituals and a life beyond the room key—and how to tell a genuine city institution from a photogenic set.",
    author: "Shiv S",
    readTime: 8,
    date: "September 2026",
    heroImage: U("1515003197210-e0cd71810b5f", 2000),
    cardImage: U("1515003197210-e0cd71810b5f", 1000),
    imageAlt: "A warmly lit hotel bar prepared for evening service",
    hotelSlugs: ["claridges-london", "the-ritz-paris", "taj-mahal-palace-mumbai"],
    sections: [
      { body: [
        "The quickest way to understand a hotel bar is to look for someone who does not need a room. A regular arriving without a reservation changes the chemistry. The bartender knows the drink; another guest shifts along; a conversation continues from last Thursday. Suddenly the space is not hospitality inventory but part of the city.",
        "Hotels frequently confuse glamour with life. They commission a marble counter, lower the lights and print a menu full of origin stories, then wonder why the room feels like an airport lounge after dark. A bar cannot be designed into belonging. It must earn repetition.",
      ]},
      { heading: "Regulars create the electricity", body: [
        "Residents bring curiosity and transience; locals bring memory. The collision is what makes a hotel bar seductive. At Claridge's, The Connaught or the Ritz Paris, the guest senses conversations that began before check-in and will continue after checkout. Mumbai's Harbour Bar carries civic meaning because generations have used it, not because a plaque declares it historic.",
        "This is why aggressive door policies are self-defeating. Exclusivity may manufacture demand, but a room filtered entirely for the same age, clothes and spending power becomes visually perfect and socially dead.",
      ]},
      { heading: "A signature drink is not a personality", body: [
        "Every hotel bar now wants a cocktail that photographs like architecture. The better test is the unfashionable order. Can the bartender make a cold martini, a balanced highball or a convincing drink without alcohol? Is there a glass of wine chosen for drinking rather than margin? Does the menu explain enough without forcing the guest through six paragraphs of mythology?",
        "Ritual matters when it solves something: the first bowl of nuts, water placed without request, a final drink remembered. Smoke, bells and tableside performance matter only when they improve flavour or mood. Otherwise the guest is trapped inside someone else's content.",
      ]},
      { heading: "The room must permit several kinds of evening", body: [
        "A great bar contains choices. A stool for the solo traveller, a corner where two people can speak privately, a table that tolerates dinner and enough light to recognise what arrived. Music should add a pulse without making every conversation public through shouting.",
        "The most valuable seat is often at the counter. It removes the social penalty of arriving alone and lets the bartender become host, guide and interpreter. Hotels that replace the counter with sofas lose that democratic edge.",
      ]},
      { heading: "Price is part of hospitality", body: [
        "Hotel bars will be expensive. Rent, staffing, glassware and late hours are real. But price becomes hostile when every small gesture carries a supplement or when the weakest wine costs enough to discourage a second glass. The room needs at least one generous route through the menu.",
        "Locals are the correction mechanism. If nobody from the neighbourhood returns without an expense account, the bar is not a city institution. It is a captive market.",
      ]},
      { heading: "The city should leak in", body: [
        "The best hotel bars do not mimic the street outside, but they absorb its appetite, humour and schedule. Madrid eats late. Tokyo values precision. Mumbai can move from business to celebration without a costume change. A bar becomes memorable when these rhythms survive the brand standards.",
        "Travellers should leave with more than a well-made drink. They should feel that the city has entered the room and sat down beside them. That is the trick no interior designer can complete alone.",
      ]},
    ],
  },
  {
    slug: "turndown-service-test",
    title: "The Turndown Test",
    kicker: "Service",
    dek: "A chocolate on the pillow is easy. The real art is returning a used room to calm without erasing the person staying in it.",
    excerpt: "Turndown service reveals whether a hotel understands privacy, observation and restraint—or merely follows an expensive housekeeping checklist.",
    author: "Akash G",
    readTime: 7,
    date: "September 2026",
    heroImage: U("1564501049412-61c2a3083791", 2000),
    cardImage: U("1564501049412-61c2a3083791", 1000),
    imageAlt: "A hotel bedroom prepared for evening turndown service",
    hotelSlugs: ["the-oberoi-mumbai", "aman-tokyo", "the-leela-palace-new-delhi"],
    sections: [
      { body: [
        "Turndown happens in the space between two versions of a hotel room. In the afternoon it contains evidence: an open suitcase, charging cables, shoes kicked beneath a chair, notes from a meeting and a wet towel left with more optimism than aim. At night the guest returns needing not perfection but relief.",
        "Poor turndown treats the room as a showroom. It relocates belongings, introduces decorative objects and folds everything with unnerving intimacy. Great turndown restores order while preserving ownership. The room feels calmer, yet still yours.",
      ]},
      { heading: "Observation without intrusion", body: [
        "The work begins with reading. Which side of the bed was used? Is the guest drinking still or sparkling water? Did the extra pillow move from the wardrobe? A considered attendant responds to these clues, placing water and slippers where they will be reached and leaving the preferred pillow alone.",
        "Observation becomes invasive when staff open luggage, arrange personal toiletries or over-handle clothing. The boundary is simple: solve evident needs; do not curate a stranger's possessions.",
      ]},
      { heading: "Light is the first amenity", body: [
        "The returning guest should be able to enter, see and reach the bathroom without confronting the full wattage of the room. Bedside lamps, a clear path and curtains drawn against reflective glass matter more than a gift. In warm climates, resetting temperature and humidity can be equally transformative.",
        "Hotels undermine this work with control panels that wake the entire suite or extinguish every light including the bathroom night-light. Turndown cannot compensate for hostile room design, but it reveals it immediately.",
      ]},
      { heading: "The edit matters", body: [
        "One bottle of water, one useful card and perhaps one edible thing are enough. Multiple leaflets, branded bookmarks, weather forecasts, slippers, mats and ornamental fabric turn the bed into a sales display the tired guest must dismantle.",
        "Local gestures work when they are edible, practical or genuinely beautiful. A small sweet from the kitchen can carry more place than an imported chocolate stamped with a logo. The luxury is curation, not volume.",
      ]},
      { heading: "Consent is part of service", body: [
        "Not everyone wants a second entry into the room. Hotels should make turndown easy to request, refuse or schedule, particularly when digital privacy signs have replaced physical cards. A missed preference is more disruptive than a bed left open.",
        "For families, timing matters; for solo travellers, security matters; for anyone sleeping off jet lag, a bell at six can feel like punishment. The most attentive hotel asks once and remembers.",
      ]},
      { heading: "What the room says at night", body: [
        "Turndown is not about preparing sheets. It is about anticipating the final ten minutes of a guest's day: water, darkness, charging, temperature and the path to sleep. Because the task is repetitive and largely invisible, it shows whether a hotel can sustain care when nobody is watching.",
        "The chocolate is welcome. The quiet competence around it is the luxury.",
      ]},
    ],
  },
];

export const septemberGuides: Guide[] = [
  {
    slug: "three-days-in-delhi",
    title: "Three Days in Delhi: The City in Layers",
    destination: "Delhi, India",
    region: "Asia",
    dek: "Old Delhi at breakfast, modern India along the ceremonial avenues and a final evening in Mehrauli: a route through the capital that respects its scale.",
    excerpt: "A deeply practical three-day Delhi itinerary covering Shahjahanabad, Lutyens' capital, Humayun's Tomb, Nizamuddin and Mehrauli without spending the trip trapped in traffic.",
    author: "Zinnia Thapar",
    readTime: 11,
    date: "September 2026",
    heroImage: U("1587474260584-136574528ed5", 2000),
    cardImage: U("1587474260584-136574528ed5", 1000),
    imageAlt: "The monumental architecture of New Delhi seen in soft daylight",
    hotelSlugs: ["the-imperial-new-delhi", "the-lodhi-new-delhi", "the-leela-palace-new-delhi", "oberoi-new-delhi"],
    featured: true,
    sections: [
      { body: [
        "Delhi is not one city but a sequence of capitals laid over one another, and any itinerary that treats it as a checklist will fail by lunchtime. Distances are deceptive, traffic changes without warning and the most rewarding places demand enough time for the eye to adjust. The answer is to organise by geography, begin early and allow one serious pause each day.",
        "Three days will not explain Delhi. They can establish its grammar: Mughal density, imperial geometry, medieval ruins, contemporary ambition and the food that connects them. Hire a knowledgeable driver for the longer transfers, but walk each district once you arrive.",
      ]},
      { heading: "Day one: Shahjahanabad before the crowd", body: [
        "Reach Jama Masjid early, when pigeons still own the courtyard and the red sandstone has not absorbed the day's heat. Dress respectfully and climb a minaret only if open and comfortable with steep stairs. From here, enter Old Delhi on foot with a guide who understands living neighbourhoods rather than treating them as spectacle.",
        "Eat breakfast according to appetite: nihari and khameeri roti near Jama Masjid, or jalebi, bedmi and chai closer to Chandni Chowk. Continue through the spice market and lanes towards the Red Fort, choosing either a proper visit or an exterior reading rather than rushing both. In the afternoon, retreat. Old Delhi is most rewarding before exhaustion turns curiosity into irritation.",
      ]},
      { heading: "Day two: the capital India inherited", body: [
        "Begin at Humayun's Tomb when the gates open. The garden-tomb gives Mughal geometry room to breathe and prepares the eye for monuments elsewhere in northern India. Walk or drive to Nizamuddin, where lunch and a measured visit reveal a dense spiritual and culinary district beside the formal gardens.",
        "After a rest, trace the broad avenues around India Gate, the new parliament district and Rashtrapati Bhavan. These spaces communicate power through distance and axis. End in Lodhi Gardens as residents reclaim monumental history for walking, running and picnics, then eat around Khan Market or at one of the city's serious hotel restaurants.",
      ]},
      { heading: "Day three: Mehrauli and the long view", body: [
        "Go south to the Qutub complex early. The minar is the landmark, but the surrounding mosque, iron pillar and carved fragments explain more about the collisions that formed Delhi. Continue into Mehrauli Archaeological Park if weather and conservation access permit; good footwear and a guide make the ruins legible.",
        "Spend late afternoon between a contemporary gallery, a design store or the Crafts Museum rather than adding another monument. For the final evening, return to Mehrauli for dinner with the Qutub silhouette nearby, or choose a neighbourhood restaurant in Defence Colony, Greater Kailash or Lodhi Colony according to where the hotel lies.",
      ]},
      { heading: "Where to stay", body: [
        "The Imperial is strongest for history and central access. The Oberoi combines polished service with views across the golf course and Humayun's Tomb. The Lodhi offers the largest sense of personal space and the city's most serious hotel fitness facilities. The Leela Palace suits travellers who want ceremony, generous rooms and a rooftop pool.",
        "Old Delhi's boutique hotels provide immersion but complicate vehicle access. Aerocity is efficient for a single airport night and dispiriting as a base for cultural exploration. In Delhi, choosing the wrong side of the city can cost several waking hours.",
      ]},
      { heading: "Eating without turning meals into logistics", body: [
        "Delhi rewards both appetite and planning. Reserve one destination restaurant, leave one meal to a market or neighbourhood and keep one evening close to the hotel. Street food is best approached through busy specialists with high turnover; a thoughtful guide is useful for both context and digestion.",
        "Do not attempt every famous dish in one afternoon. Chaat, kebabs, butter chicken, chole bhature and regional tasting menus belong to different rhythms. Delhi's food is a map of migration; give each meal enough space to say where it came from.",
      ]},
      { heading: "Practical Delhi", body: [
        "October to March brings the best walking weather, although winter air quality can be severe and visibility unpredictable. April to June heat demands early starts and long midday pauses; monsoon rain makes journeys slower. Check conditions rather than relying on romantic seasonal shorthand.",
        "Use the Metro selectively, app-based cars for straightforward routes and a hotel car or trusted driver when several stops must connect. Build buffers before flights and trains. Delhi becomes generous when the itinerary stops arguing with distance.",
      ]},
    ],
  },
  {
    slug: "mumbai-long-weekend",
    title: "Mumbai in a Long Weekend: Harbour to Bandra",
    destination: "Mumbai, India",
    region: "Asia",
    dek: "Art Deco at dawn, Colaba after breakfast, a working lunch in Fort and one excellent night north of the sea link: Mumbai without pretending traffic is incidental.",
    excerpt: "A long-weekend Mumbai guide joining Colaba, Fort, Marine Drive and Bandra with realistic travel times, neighbourhood food and the hotels that make each geography work.",
    author: "Shiv S",
    readTime: 11,
    date: "September 2026",
    heroImage: U("1529253355930-ddbe423a2ac7", 2000),
    cardImage: U("1529253355930-ddbe423a2ac7", 1000),
    imageAlt: "Mumbai's waterfront skyline and Arabian Sea at dusk",
    hotelSlugs: ["taj-mahal-palace-mumbai", "the-oberoi-mumbai"],
    featured: true,
    sections: [
      { body: [
        "Mumbai is long, tidal and impatient. The map encourages the fantasy that Colaba, Worli and Bandra can be gathered into one elegant day; traffic corrects it. A rewarding weekend therefore needs two geographical chapters: South Mumbai for the harbour, Gothic institutions and Art Deco sweep, then Bandra and the newer city for restaurants, studios and the energy around the sea link.",
        "The city reveals itself through thresholds: air-conditioned hotel to humid pavement, grand banking hall to a lane of repair shops, Arabian Sea to dense neighbourhood. Walk whenever the district allows it and use a car for the leaps between worlds.",
      ]},
      { heading: "Friday evening: arrive by the water", body: [
        "Base in South Mumbai for the first two nights. At the Taj, the Gateway of India is outside; at The Oberoi, Marine Drive supplies the view. Arrive, resist an ambitious cross-city reservation and walk the immediate waterfront. The light after rain or at the end of a clear winter day does more to introduce Mumbai than a narrated drive.",
        "Have a drink at Harbour Bar, Eau Bar or a Colaba institution, then dinner within a short radius. The first useful lesson of Mumbai is that a very good table nearby beats a fashionable one ninety minutes away.",
      ]},
      { heading: "Saturday: Colaba, Fort and the Oval", body: [
        "Start at the Gateway before tour groups and heat arrive. Walk Colaba's lanes towards the galleries around Kala Ghoda, then continue into Fort, looking up at Gothic spires, trading façades and the extraordinary density of working history. Time a museum visit for the hottest hours.",
        "After lunch, cross towards the Oval Maidan. On one side stands Victorian Gothic Mumbai; on the other, one of the world's great collections of Art Deco apartment buildings. Continue to Marine Drive for sunset, when the Queen's Necklace turns from curve to constellation. Saturday dinner can be formal, but leave room for a late kulfi or sandwich if the city insists.",
      ]},
      { heading: "Sunday: markets, neighbourhoods and the northern shift", body: [
        "Choose one morning market or specialist walk rather than treating working communities as drive-by attractions. Dadar's flowers, Crawford Market's produce or a guided food route each offers a different city. Context and respectful photography matter.",
        "Move north after lunch, ideally changing hotels if the flight leaves late the next day. Cross the sea link and let Bandra unfold on foot in sections: village lanes, old bungalows, contemporary shops and the promenades at Carter Road or Bandstand. Dinner belongs here, where independent restaurants reveal a younger, more experimental Mumbai.",
      ]},
      { heading: "Monday morning: Bandra before departure", body: [
        "Walk early while runners, dog walkers and fishermen still set the pace. Breakfast can be a bakery, an old café or the kind of restaurant that takes coffee seriously without making it ceremonial. If time allows, visit a studio, gallery or design shop by appointment rather than adding another distant landmark.",
        "Leave for the airport earlier than dignity suggests. Mumbai traffic is not a final obstacle to the trip; it is part of the city's physical reality and should be budgeted like weather.",
      ]},
      { heading: "Where to stay", body: [
        "The Taj Mahal Palace is the emotional first-visit choice: history, harbour and Colaba outside. The Oberoi is the precise South Mumbai choice, particularly for business and sea views. In central Mumbai, The St. Regis offers scale and dining; Four Seasons is convenient for Worli and Lower Parel. Soho House places the social city beside Juhu beach, though club energy will not suit everyone.",
        "Airport hotels solve airport problems. They are poor substitutes for neighbourhoods unless the stay is very short. A split stay can seem fussy, but for a trip spanning South Mumbai and Bandra it may save more time than it costs.",
      ]},
      { heading: "When to go and how to move", body: [
        "November to February is driest and most forgiving. March to May becomes hot and humid; the June-to-September monsoon is magnificent and disruptive, sometimes within the same hour. Shoes that tolerate water and a flexible diary matter more than an umbrella in serious rain.",
        "The suburban railway is the city's bloodstream but not an experiment for peak hour with luggage. Use local trains with context, the Metro where routes align and cars for cross-neighbourhood journeys. Ferries are useful and beautiful when operating. Mumbai rewards plans made in clusters and curiosity left unhurried within them.",
      ]},
    ],
  },
];
