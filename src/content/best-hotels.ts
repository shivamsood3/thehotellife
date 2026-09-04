export interface BestHotelEntry {
  rank: number;
  name: string;
  location: string;
  bestFor: string;
  style: string;
  description: string;
  caveat: string;
  officialUrl: string;
  reviewSlug?: string;
}

export interface BestHotelsList {
  slug: string;
  destination: string;
  country: string;
  title: string;
  dek: string;
  updated: string;
  updatedISO: string;
  heroImage: string;
  heroAlt?: string;
  intro: string[];
  planning: { heading: string; body: string }[];
  hotels: BestHotelEntry[];
  faq: { question: string; answer: string }[];
}

export const bestHotelsLists: BestHotelsList[] = [
  {
    slug: "jaipur",
    destination: "Jaipur",
    country: "India",
    title: "The 10 Best Hotels in Jaipur, India",
    dek: "Ten exceptional ways to stay in the Pink City, from a maharaja's former residence and an eight-suite bazaar hideaway to a wilderness camp beneath the Aravallis.",
    updated: "August 2026",
    updatedISO: "2026-08-30",
    heroImage: "/hotels/rambagh-palace-jaipur.jpg",
    intro: [
      "Jaipur makes choosing a hotel unusually consequential. Stay inside the walled city and the bazaars, temples and observatories arrive at the front door, along with traffic, noise and the magnificent disorder of a place still busy being itself. Choose a palace beyond the walls and the city becomes a day trip framed by gardens, pools and ceremony. Retreat towards the Aravallis and Jaipur recedes further still, replaced by birdsong, scrub forest and a sense of space that the centre cannot provide.",
      "This is therefore not a ranking of thread counts. It is a shortlist of the ten Jaipur hotels with the clearest reason to exist. We favour buildings with a strong relationship to place, service that improves the journey and restaurants or experiences worth returning for. The order reflects overall distinction, but the right choice depends on whether you want palace theatre, design intimacy, family infrastructure or immediate access to the old city.",
    ],
    planning: [
      {
        heading: "Which part of Jaipur should you stay in?",
        body: "For a first visit, the walled city offers the richest immersion but the least effortless arrival. Central palace hotels around Civil Lines and Rambagh provide gardens and easier city access. Resorts near Kukas or Goner Road trade spontaneity for quiet, pools and space; allow generous driving time for sightseeing.",
      },
      {
        heading: "How many nights do you need?",
        body: "Three nights is the practical minimum: one for Amber and the hill forts, one for the City Palace, Jantar Mantar and the bazaars, and one with enough air around it for craft studios, shopping or the hotel itself. Four nights makes the city feel far less transactional.",
      },
      {
        heading: "When is the best time to visit?",
        body: "October to March brings the most forgiving temperatures. December and January evenings can be genuinely cold, while April to June heat changes the shape of every day. Monsoon months can be atmospheric and better value, but humidity and sudden rain reward flexible plans.",
      },
    ],
    hotels: [
      {
        rank: 1,
        name: "Rambagh Palace",
        location: "Bhawani Singh Road",
        bestFor: "A definitive palace stay",
        style: "Historic palace · 78 rooms and suites",
        description: "Rambagh remains Jaipur's grandest piece of hotel theatre because the building was not designed to resemble a royal residence: it was one. Marble latticework, long Mughal gardens, peacocks and rooms dense with history give the stay a sense of occasion that newer palace resorts can only construct. Suvarna Mahal occupies the former ballroom, the Polo Bar understands ceremony without becoming stiff, and the gardens create a rare buffer from the city. Service is elaborate and the best suites are genuinely transporting. For a milestone journey, it is still the Jaipur address against which the others are measured.",
        caveat: "Rates are formidable and public spaces can feel ceremonial rather than intimate. Ask about current renovation work and choose the room category carefully.",
        officialUrl: "https://www.tajhotels.com/en-in/hotels/rambagh-palace-jaipur",
        reviewSlug: "rambagh-palace-jaipur",
      },
      {
        rank: 2,
        name: "The Oberoi Rajvilas",
        location: "Goner Road",
        bestFor: "Resort calm and immaculate service",
        style: "Garden resort · rooms, villas and luxury tents",
        description: "Rajvilas places the fantasy of Rajasthan inside immaculate gardens, reflection pools and a fort-like estate on the city's eastern edge. The architecture is new rather than inherited, but the execution has aged with unusual grace. Rooms open towards gardens; villas bring pools and privacy; tented accommodation supplies romance without sacrificing a serious bathroom. A restored Shiva temple gives the grounds a spiritual centre, while Oberoi service makes complicated days in Jaipur feel remarkably simple. It is the strongest all-round choice for travellers who want sightseeing followed by silence, a beautiful pool and an operation that rarely shows its workings.",
        caveat: "This is a resort outside the urban fabric. Bazaar walks, spontaneous dinners and most sights require a car and realistic allowances for traffic.",
        officialUrl: "https://www.oberoihotels.com/hotels-in-jaipur-rajvilas-resort/",
      },
      {
        rank: 3,
        name: "Raffles Jaipur",
        location: "Kukas, near Amber",
        bestFor: "Contemporary palace fantasy",
        style: "New-build palace · 50 rooms and suites",
        description: "Raffles Jaipur is the most convincing recent argument for maximalism. Carved white marble, painted ceilings, inlay work and furniture made by local artisans fill a modern interpretation of a zenana, with the Aravallis beyond. All 50 rooms and suites have substantial outdoor space; many add a soaking tub or plunge pool. The spa, rooftop pool and butler service turn it into a self-contained retreat, while Amber Fort is considerably closer than central Jaipur. This is not a historic palace and does not pretend to be discreet. It succeeds through craftsmanship, generosity and a willingness to make every surface part of the performance.",
        caveat: "The Pink City is roughly 20 kilometres away. Book this for resort time and Amber access, not for stepping out into Jaipur after dinner.",
        officialUrl: "https://www.raffles.com/jaipur/",
      },
      {
        rank: 4,
        name: "Rajmahal Palace RAAS",
        location: "C-Scheme",
        bestFor: "Colour, privacy and a central address",
        style: "Royal residence · 13 keys",
        description: "Rajmahal Palace combines the scale of a royal house with the personality of a very small hotel. Its 13 rooms, suites and apartments are unapologetically decorative: patterned wallpapers, family portraits and saturated colour replace the predictable sandstone-and-brocade vocabulary of many heritage properties. Lawns and a pool provide breathing room, yet the central location keeps restaurants, shops and the old city within practical reach. The atmosphere is more private house party than grand hotel, with enough historic eccentricity to keep the polish interesting. For travellers who want palace character without a procession at every doorway, it is an especially persuasive compromise.",
        caveat: "With so few keys, rooms differ substantially in size, outlook and drama. Ask for precise details rather than booking by category name alone.",
        officialUrl: "https://www.raashotels.com/rajmahal-palace/",
      },
      {
        rank: 5,
        name: "The Johri",
        location: "Johri Bazaar, Walled City",
        bestFor: "Design, food and old-city immersion",
        style: "Restored 1871 haveli · 8 suites",
        description: "Hidden behind a brass-studded door in Jaipur's jewellers' market, The Johri offers the city's most concentrated boutique experience. Its eight suites turn local craft into something fresh and expressive—scalloped arches, embroidered headboards, hand-painted murals and colour used with nerve. The vegetarian restaurant is a destination in its own right, and the cocktail lounge feels particularly seductive once the bazaar quietens. No other hotel on this list places guests so immediately inside the walled city. The Johri is the choice for travellers who would trade acreage and facilities for atmosphere, strong design and a front door that opens directly into Jaipur's daily life.",
        caveat: "Cars cannot reach the entrance, and there is no pool or gym. Guests with mobility requirements should discuss the lane, stairs and exact suite access before booking.",
        officialUrl: "https://www.thejohrijaipur.com/",
        reviewSlug: "the-johri-jaipur",
      },
      {
        rank: 6,
        name: "Samode Haveli",
        location: "Gangapole, Walled City",
        bestFor: "Heritage character with a proper pool",
        style: "Historic haveli · 50 rooms",
        description: "Samode Haveli solves a problem that defeats many old-city hotels: it offers genuine historic atmosphere without asking guests to abandon the pleasures of a resort. Winding passages, frescoed salons and courtyards lead to 50 highly individual rooms, while the garden pool provides essential relief after a hot morning among the monuments. The two Sheesh Mahal suites carry original mirror and fresco work; simpler rooms still benefit from the building's accumulated character. Its position near the old city is useful, and rooftop sundowners restore perspective after the traffic below. It feels established rather than engineered for a camera, which is increasingly rare in Jaipur.",
        caveat: "Historic circulation means stairs and considerable variation between rooms. Celebrations and group business can change the normally intimate atmosphere, so check dates.",
        officialUrl: "https://samode.com/haveli/",
      },
      {
        rank: 7,
        name: "The Raj Palace",
        location: "Amer Road",
        bestFor: "Maximum historical opulence",
        style: "1727 palace · museum suites",
        description: "The Raj Palace is the list's most unrestrained encounter with royal Jaipur. Built in 1727 for the rulers of Chaumoo, it remains full of heirlooms, painted chambers, chandeliers, gold leaf and the sort of rooms that make minimalism appear a temporary misunderstanding. Its position on Amer Road is useful for both the walled city and the fort, and the courtyards and pool create welcome separation from the street. This is a deeply specific hotel rather than a universally soothing one. Travellers who want patina, storytelling and a room that could not plausibly exist in another country will forgive its occasional eccentricities.",
        caveat: "The aesthetic is museum-like and emphatically maximal. Maintenance and room finish can vary in historic buildings of this complexity; inspect recent category photographs.",
        officialUrl: "https://www.rajpalace.com/",
      },
      {
        rank: 8,
        name: "28 Kothi",
        location: "Civil Lines",
        bestFor: "Creative travellers and quiet intimacy",
        style: "Contemporary guesthouse · 5 rooms",
        description: "Five-room 28 Kothi is the antidote to Jaipur's palace arms race. French architect Georges Floret and designer Nur Kaoukji created a restrained, light-filled house where creamy walls, local craft, hand-painted murals and carefully judged colour do the work normally assigned to gilt. Civil Lines is peaceful and central enough for exploration, while terraces, a garden and Cafe Kothi encourage the rhythms of a private home. The hotel's connection to Jaipur's jewellery and design community gives it an insider quality that larger properties struggle to manufacture. Book it for conversation, calm and the feeling of temporarily acquiring an exceptionally tasteful address.",
        caveat: "Facilities are intentionally limited and there is no pool. With only five rooms, availability disappears quickly and the social atmosphere depends on the other guests.",
        officialUrl: "https://www.28kothi.com/",
      },
      {
        rank: 9,
        name: "Royal Heritage Haveli",
        location: "Khatipura",
        bestFor: "A relaxed, family-run heritage stay",
        style: "18th-century hunting lodge · all-suite hotel",
        description: "Personally overseen by its royal owners, Royal Heritage Haveli has the warmth and looseness that polished palace hotels often sacrifice. The former hunting lodge unfolds through frescoed rooms, lawns, courtyards and a temperature-controlled marble pool. Suites are spacious and decorative without feeling staged, the spa is more substantial than the hotel's scale suggests, and outdoor dining beneath the old kigelia tree makes evenings easy. Khatipura sits away from the principal tourist circuit, but the reward is room to breathe and rates that can look unusually sensible beside Jaipur's headline palaces. It is a strong choice for guests who value character over ceremony.",
        caveat: "The location is neither old-city immersive nor resort-remote; most journeys require a car. Weddings can affect the tranquillity, so ask before confirming.",
        officialUrl: "https://www.royalheritagehaveli.com/",
      },
      {
        rank: 10,
        name: "Dera Amer Wilderness Camp",
        location: "Kukas countryside",
        bestFor: "Nature, privacy and a complete change of pace",
        style: "Conservation-led camp · 6 tents",
        description: "Dera Amer offers an entirely different Jaipur: 180 acres of regenerated scrub forest, six safari-style tents and nights organised around birds, bonfires and the dark outline of the Aravallis. The Singh family has protected the land for decades, supporting neighbouring communities and maintaining a sanctuary for resident animals. Tents are properly comfortable, with attached bathrooms, heating or cooling and private service, but the point is the landscape rather than hardware. Dera Amer works beautifully as the second half of a split stay after two nights in town, when another palace corridor would feel less valuable than silence and a dawn walk.",
        caveat: "This is outside Jaipur and intentionally secluded. Wildlife ethics matter: understand any animal interaction before participating and book for the conservation setting, not a checklist encounter.",
        officialUrl: "https://www.deraamer.com/",
      },
    ],
    faq: [
      {
        question: "What is the best hotel in Jaipur for a first visit?",
        answer: "Rambagh Palace is the definitive palace experience, while The Johri is best for direct old-city immersion. Travellers who want a calm resort base should choose The Oberoi Rajvilas. The right answer depends more on location and style than on star rating.",
      },
      {
        question: "Should I stay inside Jaipur's walled city?",
        answer: "Stay inside or beside the walled city if markets, monuments and street life matter more than pools and vehicle access. Choose a central palace or outlying resort if gardens, quiet and an effortless arrival are priorities.",
      },
      {
        question: "Which Jaipur hotel is best for families?",
        answer: "The Oberoi Rajvilas, Rambagh Palace and Raffles Jaipur have the broadest combination of space, pools and organised service. Smaller havelis can work for older children but require more discussion about stairs, room layouts and transport.",
      },
      {
        question: "Are Jaipur palace hotels worth the price?",
        answer: "The best are worth it when the hotel is a meaningful part of the trip. If most days will be spent sightseeing, a smaller heritage hotel may provide more character per rupee. A split stay can deliver both immersion and palace leisure.",
      },
    ],
  },
  {
    slug: "goa",
    destination: "Goa",
    country: "India",
    title: "The 10 Best Hotels in Goa, India",
    dek: "The Goa stays that rise above the beach-resort blur: private villas, paddy-field hideaways, serious South Goa resorts and a seven-room fort at the edge of the sea.",
    updated: "August 2026",
    updatedISO: "2026-08-30",
    heroImage: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=2000&q=85",
    intro: [
      "Goa is not one destination but a long, complicated coastline stitched to villages, river islands, forest and an increasingly ambitious restaurant scene. North Goa carries the energy—Vagator sunsets, Assagao tables and late nights—while the south opens into longer beaches, larger resorts and a slower calendar. The most interesting small hotels often sit elsewhere entirely: above a hidden bay, behind paddy fields or inside a fort at the state's northern edge.",
      "Our ten choices are deliberately mixed. A 206-room resort and a nine-room seaside house answer different questions, yet each needs a distinct sense of place, consistently thoughtful hospitality and a reason to stay after the photograph has been taken. Beach quality matters, but so do food, privacy, architecture and what happens during the monsoon. This is an editorial ranking, not a price comparison, and the caveat beneath each entry is as important as the praise.",
    ],
    planning: [
      {
        heading: "North Goa or South Goa?",
        body: "Choose the north for restaurants, bars, boutiques and a more social trip; choose the south for broad beaches, resort grounds and quieter days. The drive between them is long enough that booking in the wrong half of the state can dominate a holiday. Split the stay if both matter.",
      },
      {
        heading: "When should you visit Goa?",
        body: "November to February brings dry weather and the busiest social season. March to May is hotter and often better value. The June-to-September monsoon turns Goa brilliantly green, but rough seas, closed beach facilities and reduced seasonal dining make it a different trip rather than a cheaper version of winter.",
      },
      {
        heading: "How long should you stay?",
        body: "Four nights works for one part of Goa; six or seven allows a north-south split without spending the holiday in transit. Confirm which airport is closer: Dabolim generally suits South Goa, while Manohar International is more practical for the north.",
      },
    ],
    hotels: [
      {
        rank: 1,
        name: "Ahilya by the Sea",
        location: "Nerul, North Goa",
        bestFor: "Romance, art and private-house calm",
        style: "Seaside house · 9 rooms across 3 villas",
        description: "Ahilya by the Sea feels collected rather than designed. Nine rooms occupy three villas at the edge of Dolphin Bay, surrounded by the owner's art, sculpture and gardens. Two pools catch different light; meals move around the property and draw on Goan, Italian and French cooking, often built around the day's catch. The mood is residential and deeply personal, with none of the lanyards, breakfast buffets or programmed cheer of a conventional resort. It is not on a broad swimming beach, yet the rocky waterline and views create something rarer in North Goa: a sense that the coast belongs, briefly, to the people staying there.",
        caveat: "The immediate shoreline is for looking rather than classic beach swimming. There are only nine rooms, limited resort infrastructure and little appetite for nightlife on the premises.",
        officialUrl: "https://ahilyabythesea.com/",
      },
      {
        rank: 2,
        name: "The St. Regis Goa Resort",
        location: "Mobor Beach, South Goa",
        bestFor: "The complete luxury-resort experience",
        style: "Beach resort · 206 rooms, suites and villas",
        description: "The former Leela has found renewed confidence as The St. Regis Goa. Its great advantage is physical: a vast tropical landscape of lagoons and mature planting opening onto peaceful Mobor Beach. Three pools, six restaurants, a substantial spa, a 12-hole par-three golf course and an excellent children's club make the resort unusually self-sufficient. Rooms lean calmer than the public spaces, while Manor Pool Suites and villas add the privacy the large footprint might otherwise lack. Butler service brings a personal layer to an operation of this scale. For families or travellers who want several excellent days without leaving the grounds, this is Goa's most complete proposition.",
        caveat: "It is a large resort and can feel busy around holidays and weddings. North Goa is a serious journey, and beach services are restricted during the monsoon.",
        officialUrl: "https://www.marriott.com/en-us/hotels/goixr-the-st-regis-goa-resort/overview/",
      },
      {
        rank: 3,
        name: "The Postcard Cuelim",
        location: "Cuelim, South Goa",
        bestFor: "Privacy, heritage and unstructured days",
        style: "Portuguese-influenced house · 6 rooms",
        description: "A six-room house overlooking a remarkable sweep of paddy fields, The Postcard Cuelim is built around light, quiet and the privilege of very little happening. A 350-year-old chapel anchors the property, while high ceilings, teak, marble and private patios retain a persuasive Portuguese-Goan character. Postcard's flexible approach—no rigid breakfast clock, no anxious programme of activities—suits travellers who understand that luxury can be the removal of friction rather than its replacement with spectacle. The beach is walkable rather than immediate, and that distance preserves the hotel's village stillness. Come to read, sleep, eat well and let the day resist optimisation.",
        caveat: "This is a tiny inland hideaway, not a full-service beach resort. Guests seeking multiple restaurants, a large spa or a social pool scene should choose differently.",
        officialUrl: "https://www.postcardresorts.com/hotels/the-postcard-cuelim",
      },
      {
        rank: 4,
        name: "Cabo Serai",
        location: "Cabo de Rama, South Goa",
        bestFor: "Ocean views, nature and wellness",
        style: "Eco-retreat · 8 cottages and 3 tents",
        description: "Cabo Serai occupies 15 acres of native forest above the Arabian Sea, with every cottage and tent angled towards water and sky. The elevated decks, guided nature walks, yoga, Ayurvedic treatments and locally focused food create a retreat that takes its landscape seriously. Cottages are generous and airy; tents bring guests closer to the canopy without abandoning comfort. A secluded beach and cliff-edge sundowners provide the obvious romance, but the more lasting pleasure is how little built environment interrupts the view. It is one of South Goa's clearest escapes from the standard resort template and particularly good for couples who can live without a scene.",
        caveat: "The final approach includes an unpaved kilometre and the hillside involves slopes and steps. Isolation is the point; spontaneous meals or nightlife elsewhere are not convenient.",
        officialUrl: "https://www.caboserai.com/",
      },
      {
        rank: 5,
        name: "Taj Exotica Resort & Spa, Goa",
        location: "Benaulim, South Goa",
        bestFor: "Families, space and a dependable beach holiday",
        style: "Classic beach resort · 140 rooms and suites",
        description: "Taj Exotica spreads across 56 acres behind a long Benaulim beachfront, giving an established resort the commodity newer properties struggle to acquire: space. Rooms and villas sit among lawns rather than on top of one another; the pool, nine-hole executive golf course, children's facilities and J Wellness Circle make multigenerational trips comparatively easy. The architecture is gently Indo-Portuguese, the service carries Taj's instinctive warmth and the best days require little more organisation than choosing between sea, shade and lunch. It is not Goa's most cutting-edge hotel, but reliability, generous grounds and a recently renovated pool give it enduring relevance.",
        caveat: "The scale can feel conventional beside Goa's smaller independents, and not every sea-view category delivers an uninterrupted ocean panorama. Confirm location within the grounds.",
        officialUrl: "https://www.tajhotels.com/en-in/hotels/taj-exotica-goa",
      },
      {
        rank: 6,
        name: "Alila Diwa Goa",
        location: "Majorda, South Goa",
        bestFor: "Design, paddy-field quiet and value",
        style: "Contemporary Goan resort · near Gonsua Beach",
        description: "Alila Diwa faces inward towards palms and paddy fields rather than performing directly at the sea. That decision gives the resort an unusually composed atmosphere: deep eaves, laterite tones, broad verandas and an infinity pool that seems to dissolve into rural Goa. Gonsua Beach is roughly 300 metres away with a shuttle available, while several restaurants and a capable spa make staying in easy. The Diwa Club forms a quieter resort within the resort, with its own pool, all-day breakfast and additional inclusions. For design-conscious travellers who want South Goa calm without top-tier palace pricing, it remains one of the coast's smartest choices.",
        caveat: "The beach is nearby, not at the end of the lawn. Groups and weddings can alter the mood, and the main resort and Diwa Club deliver meaningfully different experiences.",
        officialUrl: "https://www.hyatt.com/alila-hotels-and-resorts/en-US/goial-alila-diwa-goa",
      },
      {
        rank: 7,
        name: "ITC Grand Goa",
        location: "Arossim Beach, South Goa",
        bestFor: "Big-resort facilities and direct beach access",
        style: "Village-style resort · 246 rooms and suites",
        description: "ITC Grand Goa is built like an idealised coastal village, its rooms, waterways and bridges descending through 45 landscaped acres to Arossim Beach. The multilevel lagoon pool is among the state's most impressive, Kaya Kalp spa is genuinely substantial and six restaurants give a long stay enough range. Every room has a balcony or patio, while select categories add outdoor showers and small gardens. This is a strong practical answer for families, celebrations and travellers who want a resort with the infrastructure to absorb a week. Its Indo-Portuguese references are broad rather than intimate, but the grounds and beach access do real work.",
        caveat: "At 246 rooms, privacy depends on category and season. The resort hosts large events, so ask about weddings and request a room away from banquet activity.",
        officialUrl: "https://www.itchotels.com/in/en/itcgrandgoa-goa",
      },
      {
        rank: 8,
        name: "Elsewhere",
        location: "Northern Goa, beyond the Chapora River",
        bestFor: "A private, barefoot beach escape",
        style: "Family beach house and luxury tents",
        description: "Elsewhere has survived because it guards its sense of remove. Reached through fields and separated from the wider coast by a creek, the century-old family beach house and tents face a stretch of sand that feels improbably private for Goa. The aesthetic is unforced—old furniture, simple rooms, canvas and salt air—while birdlife and the landscape supply the entertainment. This is not polished resort luxury and would be diminished if it tried to become so. It belongs on the list for travellers seeking the Goa that exists between sea, village and memory, with distance from the state's increasingly manicured hospitality machine.",
        caveat: "The secluded location and simple infrastructure require a flexible traveller. Precise directions, transfers, meal arrangements and seasonal operation should all be confirmed directly.",
        officialUrl: "https://www.aseascape.com/",
      },
      {
        rank: 9,
        name: "W Goa",
        location: "Vagator Beach, North Goa",
        bestFor: "Nightlife, design and a social North Goa stay",
        style: "Contemporary beach resort · Vagator cliffside",
        description: "W Goa is the extrovert of this list, occupying a dramatic position above Vagator Beach with bold art, villas, a lively pool and sunsets designed to roll directly into dinner and music. The resort's work by Goan artist Subodh Kerkar gives its visual language more local intelligence than the brand's usual neon shorthand. Rooms are large, the Away Spa provides a necessary counterpoint and the location suits travellers with Assagao reservations and North Goa plans. Book a villa for greater privacy or embrace the shared energy. When the brief is a celebratory weekend rather than contemplative withdrawal, W understands the assignment better than most.",
        caveat: "Music, events and a fashionable crowd are features, not accidents. Guests seeking silence should avoid pool-adjacent rooms and confirm the entertainment calendar.",
        officialUrl: "https://www.marriott.com/en-us/hotels/goiwh-w-goa/overview/",
      },
      {
        rank: 10,
        name: "Fort Tiracol Heritage Hotel",
        location: "Tiracol, North Goa",
        bestFor: "History, seclusion and one extraordinary night",
        style: "17th-century fort · 7 rooms and suites",
        description: "At Goa's northern tip, Fort Tiracol watches the river meet the Arabian Sea from battlements that once served a very different purpose. Seven rooms and suites occupy the Portuguese-era fort around a courtyard and still-functioning church, giving the stay an atmosphere no conventional beach hotel can reproduce. Verandas frame the water, the restaurant draws on Goan and Mediterranean flavours, and the public visitors disappear after evening. This is less a base for discovering Goa than a destination at its edge. One or two nights can become the most memorable chapter of a longer coastal journey, particularly when paired with livelier days farther south.",
        caveat: "The fort is remote, public during the day and limited in facilities. Transport, ferry conditions and dining expectations should be arranged before arrival.",
        officialUrl: "https://www.forttiracol.in/",
      },
    ],
    faq: [
      {
        question: "What is the best luxury hotel in Goa?",
        answer: "The St. Regis Goa is the most complete large luxury resort, while Ahilya by the Sea is the strongest intimate stay. Taj Exotica is particularly dependable for families, and Cabo Serai is better for secluded nature and wellness.",
      },
      {
        question: "Is North Goa or South Goa better for luxury hotels?",
        answer: "South Goa has broader beaches and most of the large, self-contained resorts. North Goa has stronger access to restaurants and nightlife plus distinctive small stays such as Ahilya by the Sea. Neither is universally better; they suit different trips.",
      },
      {
        question: "Which Goa hotels have direct beach access?",
        answer: "The St. Regis Goa, Taj Exotica, ITC Grand Goa, W Goa and Elsewhere have immediate or direct access to the coast. Ahilya sits at the sea but not on a conventional swimming beach, while The Postcard Cuelim is a walk from the sand.",
      },
      {
        question: "Is Goa worth visiting during the monsoon?",
        answer: "Yes for greenery, food and a slower atmosphere, but not for a standard beach holiday. Sea conditions are rougher, many seasonal operations close and government restrictions limit beach services. Choose a hotel with good indoor spaces, dining and spa facilities.",
      },
    ],
  },
  {
    slug: "new-delhi",
    destination: "New Delhi",
    country: "India",
    title: "The 10 Best Hotels in New Delhi, India",
    dek: "Ten exceptional Delhi stays, from an Art Deco grande dame and a Lutyens-era landmark to a Mughal-inspired palace and the old city's most atmospheric haveli.",
    updated: "September 2026",
    updatedISO: "2026-09-04",
    heroImage: "https://tablecells.com/api/v1/files/public/01KY9WNE0247F8D82ED5JQCY7A-the-imperial-india-hero-image.png",
    heroAlt: "The white heritage façade and entrance of The Imperial New Delhi on Janpath",
    intro: [
      "Delhi asks more of a hotel than most cities. Its distances are considerable, its traffic can redraw an afternoon, and its layers—Sultanate, Mughal, colonial and urgently contemporary—refuse to sit in one tidy centre. The right address is therefore not simply a handsome room. It is a base that makes the capital legible, with a concierge who understands timing, a pool that can restore a hot day and restaurants good enough to keep you in when the city has exhausted you.",
      "Our ten choices reward a distinct sense of place, persuasive service and a reason to return after the first photograph. The ranking favours complete experiences, but there is no universal winner: The Imperial has history and swagger, The Oberoi precision and views, The Lodhi privacy, and Haveli Dharampura the thrilling inconvenience of Old Delhi at the door. Choose according to the Delhi you actually want to meet.",
    ],
    planning: [
      { heading: "Which neighbourhood works best?", body: "Lutyens' Delhi places monuments, Connaught Place and government avenues within practical reach. Lodhi Road and New Friends Colony suit design, dining and south-city appointments. Aerocity is efficient for short stopovers; Old Delhi is immersive, atmospheric and logistically demanding." },
      { heading: "How long should you stay?", body: "Allow three full days for a first visit and four if you want the city to breathe. Pair one day in Shahjahanabad with one among Humayun's Tomb and Lodhi Garden, then reserve time for museums, contemporary galleries, markets and meals that should never be rushed." },
      { heading: "When is Delhi at its best?", body: "October, November, February and March usually bring the kindest weather. Winter mornings can be foggy and air quality may be poor; May and June are punishingly hot. Check conditions before travelling and choose a hotel with strong indoor facilities in extreme seasons." },
    ],
    hotels: [
      { rank: 1, name: "The Imperial New Delhi", location: "Janpath", bestFor: "History, art and old-school ceremony", style: "Art Deco landmark · 235 rooms and suites", description: "Opened in 1936, The Imperial is Delhi's most persuasive grande dame: a white, palm-lined composition filled with colonial-era art, polished stone and the low hum of deals being made over tea. Eight acres of gardens soften its central Janpath position, while Spice Route remains one of the city's most memorable dining rooms. Bedrooms combine period weight with modern comfort, and the pool feels improbably removed from Connaught Place. It is unapologetically formal, occasionally theatrical and entirely specific to this capital.", caveat: "The historic style is richer than it is restrained, and room outlooks vary. Ask about the exact category and any private events around the gardens.", officialUrl: "https://www.theimperialindia.com/", reviewSlug: "the-imperial-new-delhi" },
      { rank: 2, name: "The Oberoi, New Delhi", location: "Dr Zakir Hussain Marg", bestFor: "Polish, views and exacting service", style: "Contemporary city hotel · 220 rooms and suites", description: "The Oberoi looks across Delhi Golf Club towards Humayun's Tomb and operates with the quiet competence that makes a complicated city feel simple. Its 2018 reinvention sharpened the interiors without erasing the hotel's established character; rooms are calm, technically excellent and protected by sophisticated air filtration. Restaurants range from the deservedly celebrated Omya to rooftop Baoshuan, while the club lounge and temperature-controlled pool make business and leisure equally convincing. Few Delhi hotels are as consistently composed from airport transfer to final bill.", caveat: "It can feel more internationally polished than locally eccentric. Golf-course views command a premium, so confirm orientation before paying for one.", officialUrl: "https://www.oberoihotels.com/hotels-in-new-delhi/", reviewSlug: "oberoi-new-delhi" },
      { rank: 3, name: "The Lodhi", location: "Lodhi Road", bestFor: "Space, privacy and contemporary Delhi", style: "Urban resort · 48 rooms and suites", description: "Kerry Hill's architecture gives The Lodhi the rare luxury of breathing room: deep balconies, stone screens, gardens and suites that feel closer to private apartments. Many rooms have plunge pools, the main pool runs a serious 50 metres and Indian Accent downstairs remains a destination in its own right. Its Lodhi Road address is well placed for Humayun's Tomb, galleries and the south of the city. Service is personal without becoming ceremonious. For travellers who want Delhi filtered through design, wellness and privacy, this is the capital's most assured urban resort.", caveat: "Pool suites are the defining experience and cost accordingly. The low-rise plan creates longer walks than a compact city hotel, and some rooms offer greater privacy than others.", officialUrl: "https://www.thelodhi.com/", reviewSlug: "the-lodhi-new-delhi" },
      { rank: 4, name: "The Leela Palace New Delhi", location: "Chanakyapuri", bestFor: "Palace-scale glamour", style: "Mughal-inspired palace hotel · 254 rooms and suites", description: "The Leela Palace answers diplomatic Delhi with domes, chandeliers, floral arrangements and service delivered at full volume. The scale is grand, but the 55-square-metre entry rooms prevent the experience feeling merely public. A rooftop infinity pool overlooks the tree canopy, ESPA provides a substantial retreat, and the dining—especially Jamavar and modern Japanese at Megu—can sustain several nights. Its Chanakyapuri location works beautifully for embassies and central monuments. This is the choice for guests who want New Delhi to feel like an occasion from the moment the car door opens.", caveat: "The maximalist aesthetic will overwhelm committed minimalists. Traffic towards Old Delhi remains significant, and rates rise steeply for suites and peak dates.", officialUrl: "https://www.theleela.com/the-leela-palace-new-delhi", reviewSlug: "the-leela-palace-new-delhi" },
      { rank: 5, name: "Taj Mahal, New Delhi", location: "Mansingh Road", bestFor: "A central classic with warm service", style: "Landmark luxury hotel · 213 rooms and suites", description: "Fresh from a major renewal, the Taj Mahal on Mansingh Road has recovered the confidence of a capital institution. The address is excellent—close to India Gate, Khan Market and the cultural spine of central Delhi—and the service carries Taj's characteristic warmth. Rooms are brighter and more contemporary than before, while Machan, House of Ming and Rick's retain the reassuring rhythm of places Delhi residents actually use. It lacks the gardens of The Imperial and the architectural calm of The Lodhi, but compensates with location, familiarity and an unusually dependable sense of welcome.", caveat: "Public spaces can be busy with meetings and local dining. The most desirable monument-facing rooms are limited, so request the precise outlook rather than relying on category language.", officialUrl: "https://www.tajhotels.com/en-in/hotels/taj-mahal-delhi" },
      { rank: 6, name: "ITC Maurya", location: "Diplomatic Enclave", bestFor: "Power dining and Indian luxury", style: "Diplomatic landmark · 437 rooms and suites", description: "ITC Maurya is woven into Delhi's political and business life, a large terraced hotel whose public rooms seem permanently charged with arrivals. Its most compelling reasons to stay are culinary: Bukhara remains an elemental pleasure of clay-oven cooking, while Dum Pukht turns Awadhi cuisine into ceremony. The art collection and Mauryan references give the scale an Indian intelligence, and the Kaya Kalp spa is a serious refuge. Book the Towers for a more tailored experience. For travellers whose Delhi is built around meetings and consequential dinners, the hotel remains difficult to replace.", caveat: "The 437-room scale can feel corporate, and standard categories are less distinctive than the public spaces. Traffic around the diplomatic quarter needs planning at peak hours.", officialUrl: "https://www.itchotels.com/in/en/itcmaurya-new-delhi" },
      { rank: 7, name: "The Claridges New Delhi", location: "Aurangzeb Road", bestFor: "Garden calm in Lutyens' Delhi", style: "1950s heritage hotel · 132 rooms and suites", description: "The Claridges occupies one of Delhi's loveliest positions, behind white walls and lawns on a broad Lutyens avenue. The mood is gentler than the capital's palace hotels: a horseshoe pool, shaded tables, polished corridors and a scale that encourages recognition. Pickwicks and Sevilla give the hotel local social life, while Lodhi Garden and Khan Market are close enough to shape an easy morning. Rooms vary after years of gradual evolution, but the best retain a residential charm. It is particularly good for repeat visitors who value neighbourhood and atmosphere over spectacle.", caveat: "Room condition and style can differ significantly, so study current photographs and ask what has been most recently refreshed. Event noise is worth checking on weekends.", officialUrl: "https://www.claridges.com/" },
      { rank: 8, name: "Andaz Delhi", location: "Aerocity", bestFor: "Design-minded airport stopovers", style: "Lifestyle hotel · 401 rooms and suites", description: "Andaz Delhi turns an airport district into something unexpectedly spirited. Rooms are large, daylight-filled and punctuated with locally commissioned details; each interprets one of 401 stories about Delhi. AnnaMaya's market-style kitchen gives the lobby genuine energy, while a pool, spa and extensive event facilities make an overnight connection feel less provisional. It is minutes from the terminals and well connected to Gurugram. Travellers with one night, an early flight or meetings west of the centre will find it far more rewarding than spending hours crossing the city for a famous address.", caveat: "Aerocity is a managed hospitality district, not an authentic Delhi neighbourhood. Choose it for airport efficiency; the principal monuments and Old Delhi sit a substantial drive away.", officialUrl: "https://www.hyatt.com/andaz/en-US/delaz-andaz-delhi" },
      { rank: 9, name: "Haveli Dharampura", location: "Chandni Chowk", bestFor: "Old Delhi immersion", style: "Restored Mughal-era haveli · 14 rooms", description: "Reaching Haveli Dharampura through Chandni Chowk's compressed lanes is part of its proposition. Beyond the carved doorway, a painstakingly restored courtyard rises through arcades to a rooftop with Jama Masjid and the old city in view. Rooms are relatively simple, but the architecture, Kathak evenings and location provide an intimacy with Shahjahanabad that no Lutyens hotel can imitate. Wake before the bazaars fully stir, walk to breakfast among the lanes and return for sunset above the rooftops. This is a cultural stay first and a conventional luxury hotel second.", caveat: "Cars cannot deliver you to the door, stairs are integral and street intensity begins immediately outside. Pack lightly and discuss accessibility before booking.", officialUrl: "https://www.havelidharampura.com/" },
      { rank: 10, name: "Roseate House New Delhi", location: "Aerocity", bestFor: "A polished one-night transit", style: "Contemporary airport hotel · 216 rooms and suites", description: "Roseate House is Aerocity's more composed independent alternative, with a dark, tailored interior, rooftop pool and enough dining variety to make a layover painless. Rooms are quiet and generously equipped, the spa is credible rather than token, and DEL—its all-day bistro—handles irregular flight schedules well. The hotel is strongest when treated as a precise tool: land late, recover properly, meet nearby or leave early without surrendering comfort. It will not reveal Delhi's soul, but it can protect the beginning or end of a journey from the city's distances.", caveat: "The airport location is the advantage and the limitation. Travellers planning several sightseeing days should move to central Delhi rather than commute repeatedly.", officialUrl: "https://www.roseatehotels.com/newdelhi/roseatehouse/" },
    ],
    faq: [
      { question: "What is the best luxury hotel in New Delhi?", answer: "The Imperial is the strongest historic all-rounder, The Oberoi the most consistently polished, The Lodhi best for privacy and The Leela Palace best for opulent spectacle. Your preferred neighbourhood and style should decide the final choice." },
      { question: "Where should a first-time visitor stay in Delhi?", answer: "Central New Delhi around Janpath, Mansingh Road, Lodhi Road or Chanakyapuri offers the easiest balance of monuments, restaurants and hotel infrastructure. Old Delhi is thrilling but better for confident travellers or a short split stay." },
      { question: "Which New Delhi hotel is closest to the airport?", answer: "Andaz Delhi and Roseate House are in Aerocity, minutes from Indira Gandhi International Airport. They are ideal for stopovers, early departures and Gurugram meetings, but less convenient for several days of central sightseeing." },
      { question: "How much do luxury hotels in New Delhi cost?", answer: "Rates move sharply with season, room type, events and tax. Winter is usually most expensive. Treat any published starting rate as indicative and compare the hotel's flexible rate with reputable booking platforms before confirming." },
    ],
  },
  {
    slug: "mumbai",
    destination: "Mumbai",
    country: "India",
    title: "The 10 Best Hotels in Mumbai, India",
    dek: "The Mumbai hotels that understand the city best, from an Indo-Saracenic icon on the harbour to sea-facing modern classics, a members' house and Colaba's cleverest boutique stay.",
    updated: "September 2026",
    updatedISO: "2026-09-04",
    heroImage: "https://live.staticflickr.com/1510/26119514800_9bb7893876_o.jpg",
    heroAlt: "The Taj Mahal Palace façade beside the Gateway of India in Mumbai",
    intro: [
      "Mumbai is a city where location can matter more than the room. South Mumbai holds Colaba, Kala Ghoda, Marine Drive and the great civic architecture; Bandra brings restaurants, studios and a more contemporary social life; Lower Parel places you among towers and malls; the airport corridor makes sense only when the next flight is the point. Crossing between them can consume hours. Choose the Mumbai you need before choosing the hotel you want.",
      "The best properties do more than insulate guests from the city's velocity. They frame it: harbour light from the Taj, the Queen's Necklace from The Oberoi, Arabian Sea sunsets at Soho House and the compressed creative energy of Abode. Our ranking balances character, service, food, location and the ability to make Mumbai feel exhilarating rather than exhausting. The caveats are deliberate; in this city, an honest compromise is more useful than a perfect photograph.",
    ],
    planning: [
      { heading: "South Mumbai or Bandra?", body: "Choose Colaba or Nariman Point for heritage, galleries, Marine Drive and a first visit. Bandra suits restaurants, nightlife and film or creative-industry appointments. Lower Parel is central on a map but traffic-dependent; airport hotels work best for transit rather than discovery." },
      { heading: "How many nights do you need?", body: "Three nights gives Mumbai a chance; four lets it unfold. Dedicate one day to Colaba and Kala Ghoda, one to the markets and old neighbourhoods, and one to Bandra. Build every itinerary by geography and leave generous buffers before reservations or flights." },
      { heading: "When should you visit?", body: "November to February is coolest and driest. March to May is humid, while the June-to-September monsoon can be cinematic and disruptive in equal measure. Sea-facing hotels are especially atmospheric in rain, but transport plans need flexibility." },
    ],
    hotels: [
      { rank: 1, name: "The Taj Mahal Palace, Mumbai", location: "Apollo Bunder, Colaba", bestFor: "History, harbour views and a first visit", style: "Indo-Saracenic icon · 285 rooms and suites", description: "Since 1903, the Taj has stood opposite the Gateway of India as both hotel and civic landmark. The Palace wing carries the history—domes, staircases, art and rooms with the harbour seemingly within reach—while the Tower supplies a more modern, efficient stay. Seven restaurants and a celebrated bar mean the building remains part of Mumbai's social life rather than a preserved monument. Service is warm, the pool courtyard improbably tranquil and Colaba immediately walkable. For a first visit, no other hotel offers such a complete introduction to the city's theatre.", caveat: "Palace and Tower rooms are markedly different experiences, and harbour views command a premium. Public areas draw visitors, so expect energy rather than seclusion.", officialUrl: "https://www.tajhotels.com/en-in/hotels/taj-mahal-palace-mumbai", reviewSlug: "taj-mahal-palace-mumbai" },
      { rank: 2, name: "The Oberoi, Mumbai", location: "Nariman Point", bestFor: "Sea views and flawless execution", style: "Modern luxury landmark · 287 rooms and suites", description: "At Nariman Point, The Oberoi turns the Arabian Sea and Marine Drive into the main event. The interiors are calm, the rooms intelligently planned and the service almost unnervingly exact: requests disappear, transfers run on time and breakfast understands both haste and appetite. Ziya and Vetro keep dinner in-house credible, while Eau Bar catches the curve of the Queen's Necklace after dark. The hotel lacks the Taj's architectural mythology but is easier to inhabit. For business travellers, repeat visitors and anyone who prizes seamlessness over spectacle, it may be Mumbai's best-functioning hotel.", caveat: "The businesslike tower architecture offers less romance than Colaba's heritage hotels. Pay close attention to view category; city-facing rooms miss much of the point.", officialUrl: "https://www.oberoihotels.com/hotels-in-mumbai/", reviewSlug: "the-oberoi-mumbai" },
      { rank: 3, name: "Soho House Mumbai", location: "Juhu", bestFor: "Creative energy and beach sunsets", style: "Members' club hotel · 38 bedrooms", description: "Soho House gives Mumbai a hotel that behaves like a living room for its film, fashion and media worlds. Thirty-eight bedrooms combine block prints, cane and confident colour; the rooftop pool and club spaces look west over Juhu Beach, producing some of the city's best sunset theatre. Cecconi's anchors the ground floor, while programming and a constantly shifting crowd make staying here socially porous. The service can be less ceremonious than at the grand hotels, but that informality is central to the appeal. Come to participate, not retreat—and expect the city to come upstairs with you.", caveat: "Club spaces can be lively and access rules change according to membership and events. This is a social hotel, not the choice for monastic quiet or South Mumbai sightseeing.", officialUrl: "https://www.sohohouse.com/houses/soho-house-mumbai" },
      { rank: 4, name: "The St. Regis Mumbai", location: "Lower Parel", bestFor: "Nightlife, shopping and high-rise glamour", style: "Contemporary tower hotel · 395 rooms and suites", description: "Rising above Lower Parel, The St. Regis is Mumbai at its most vertical and glossy. Rooms command enormous city views, but the real strength is the collection of restaurants and bars stacked through the tower, from Japanese at Koishii to sundowners at Asilo. Butler service gives the 395-room operation a human thread, and direct access to High Street Phoenix makes shopping unusually painless. The address works well for central business districts and nights out. It is less about neighbourhood texture than having several versions of Mumbai—dining, music, skyline—delivered to one elevator bank.", caveat: "Traffic around Lower Parel can be severe and the hotel is busy with events. Guests seeking walkable heritage Mumbai should stay farther south.", officialUrl: "https://www.marriott.com/en-us/hotels/bomxr-the-st-regis-mumbai/overview/" },
      { rank: 5, name: "Four Seasons Hotel Mumbai", location: "Worli", bestFor: "Contemporary comfort and rooftop evenings", style: "Modern city hotel · 202 rooms and suites", description: "Four Seasons brings a quieter international polish to Worli. The 202 rooms are generous by Mumbai standards, with broad windows, pale materials and service that remains personal even during business-heavy weeks. AER, the rooftop bar, is the obvious draw—a circular deck suspended over the city—but the spa, outdoor pool and consistently strong breakfast make the hotel work beyond sunset. The position is useful for Bandra-Kurla Complex, Lower Parel and South Mumbai when traffic cooperates. It is a dependable choice for travellers who want modern luxury without the constant pageantry of a landmark hotel.", caveat: "Worli is strategically central but not rewarding on foot, and journey times remain unpredictable. Some surrounding construction may affect particular outlooks.", officialUrl: "https://www.fourseasons.com/mumbai/" },
      { rank: 6, name: "Taj Lands End", location: "Bandra West", bestFor: "Bandra access and sea-facing family stays", style: "Large waterfront hotel · 493 rooms and suites", description: "At Bandra's southern tip, Taj Lands End looks across the sea towards the Bandra-Worli Sea Link and places guests close to the suburb's restaurants, studios and nightlife. The scale is substantial, but the lobby, lawns and pool provide enough space for families and long stays, while rooms on the right side receive magnificent water views. Ming Yang and Masala Bay give loyal guests reasons to dine in, and Taj service keeps the machinery warm. It is the most complete full-service option for travellers whose Mumbai sits north of Worli rather than around Colaba.", caveat: "Nearly 500 rooms mean conferences and weddings can change the atmosphere. South Mumbai attractions are a long drive, especially at peak times.", officialUrl: "https://www.tajhotels.com/en-in/hotels/taj-lands-end-mumbai" },
      { rank: 7, name: "Trident Nariman Point", location: "Nariman Point", bestFor: "Value, reliability and Marine Drive", style: "Waterfront business hotel · 555 rooms and suites", description: "Trident shares Nariman Point's great sweep of sea with its sibling The Oberoi and delivers much of the location at a gentler price. The 555-room scale is unmistakable, yet the operation is brisk, friendly and remarkably consistent. Sea-view rooms frame monsoon weather and Queen's Necklace lights beautifully; the pool sits almost at the water's edge, and multiple restaurants handle families and business schedules with ease. It is not a design pilgrimage, but for travellers who want South Mumbai, dependable standards and a full-service hotel without paying the city's highest rates, Trident is exceptionally useful.", caveat: "Choose a renovated sea-view room if budget allows. Large groups and airline crews can make breakfast and the lobby busy at predictable times.", officialUrl: "https://www.tridenthotels.com/hotels-in-mumbai-nariman-point/" },
      { rank: 8, name: "Abode Bombay", location: "Colaba", bestFor: "Boutique character on a sensible budget", style: "Independent heritage hotel · 20 rooms", description: "Above the bustle near the Gateway of India, Abode gives Colaba the intelligent small hotel it long needed. Vintage furniture, tiled floors, local art and thoughtful sourcing turn a century-old building into something warm rather than themed. Breakfast is excellent, staff connect guests with neighbourhood walks and independent businesses, and the lounge encourages lingering. The best rooms have high ceilings, freestanding tubs and street views; budget categories may share bathrooms. Abode cannot compete with the Taj's hardware, but it offers curiosity, conscience and a location that makes the city available the moment you step outside.", caveat: "There is no pool, gym or full restaurant, and the lift is tiny. Entry categories can have shared bathrooms, so read room details carefully before booking.", officialUrl: "https://www.abodeboutiquehotels.com/" },
      { rank: 9, name: "The Leela Mumbai", location: "Sahar, near the airport", bestFor: "A resort-like airport stay", style: "Garden hotel · 391 rooms and suites", description: "The Leela Mumbai hides eleven acres of gardens, waterfalls and a free-form pool behind one of the city's busiest airport corridors. That improbable green interior makes it far more restorative than the usual transit hotel. Rooms are classically comfortable, the spa and restaurants can support a stopover without leaving the grounds, and transfers to the international terminal are mercifully short. It is particularly effective before an early flight or after a late arrival, when travelling south for architectural romance makes little sense. The pleasure lies in how quickly Mumbai's noise falls away inside the gate.", caveat: "The airport location is poor for South Mumbai sightseeing and beachside Bandra. Décor is traditional rather than cutting edge, and corporate groups are common.", officialUrl: "https://www.theleela.com/the-leela-mumbai" },
      { rank: 10, name: "President, Mumbai – IHCL SeleQtions", location: "Cuffe Parade", bestFor: "South Mumbai convenience with local personality", style: "Neighbourhood classic · 287 rooms and suites", description: "The President occupies quieter Cuffe Parade, close enough to Colaba for galleries and restaurants but removed from the Gateway crowds. Rooms are compact and contemporary; the hotel's greater personality lives downstairs, where Thai Pavilion has been a city favourite for decades and Konkan Café explores India's western coast beneath a distinctive tiled roof. Service is warm and rates often undercut Mumbai's grandest addresses. This is a savvy repeat-visitor choice: less iconic than the Taj, less polished than The Oberoi, but rooted in local dining culture and genuinely easy to use.", caveat: "Many rooms are smaller than at newer luxury hotels and views vary. The location is convenient for the south, but distant from Bandra, BKC and the airports.", officialUrl: "https://www.seleqtionshotels.com/en-in/hotels/president-mumbai/" },
    ],
    faq: [
      { question: "What is the best hotel in Mumbai for a first visit?", answer: "The Taj Mahal Palace is the strongest first-visit choice for history, harbour views and walkable Colaba. The Oberoi is better for seamless modern luxury and Marine Drive; Abode is the characterful boutique alternative." },
      { question: "Should I stay in South Mumbai or Bandra?", answer: "Stay in South Mumbai for the Gateway of India, Kala Ghoda, Art Deco architecture and a first cultural visit. Choose Bandra or Juhu for restaurants, nightlife, film-industry appointments and easier access to the western suburbs." },
      { question: "Which Mumbai hotels have the best sea views?", answer: "The Oberoi and Trident frame Marine Drive and the Arabian Sea, the Taj overlooks Mumbai Harbour and the Gateway, Soho House faces Juhu Beach, and Taj Lands End looks towards the Sea Link. Always confirm the exact view category." },
      { question: "Which Mumbai hotel is best near the airport?", answer: "The Leela Mumbai is the most resort-like luxury option close to the international terminal. For a longer city visit, however, choose the neighbourhood where you will spend most of your time rather than optimizing only the airport transfer." },
    ],
  },
];

export const getBestHotelsList = (slug: string) =>
  bestHotelsLists.find((list) => list.slug === slug);
