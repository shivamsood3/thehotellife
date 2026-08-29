import type { Hotel } from "../hotels";

const U = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const expansionHotels: Hotel[] = [
  {
    slug: "the-johri-jaipur",
    name: "The Johri",
    city: "Jaipur",
    country: "India",
    region: "Asia",
    category: "Walled City Haveli",
    tagline: "An eight-suite jewel box hidden inside Jaipur's most exhilarating bazaar",
    excerpt: "The Johri replaces palace acreage with old-city immersion: an 1871 haveli, eight intensely designed suites, Jaipur's most persuasive vegetarian hotel restaurant and a front door cars cannot reach.",
    rating: 4.7,
    priceFrom: 330,
    priceNote: "Approximate; seasonal and before taxes",
    year: "August 2026",
    heroImage: "https://www.thejohrijaipur.com/assets/img/entrance_to_the_hotel.jpg",
    cardImage: "https://www.thejohrijaipur.com/assets/img/entrance_to_the_hotel.jpg",
    standout: "Stepping through the brass-studded door from the jewellers' lane into the flower-filled courtyard—a compression of Jaipur's noise and grace into a few remarkable metres.",
    quickFacts: [
      { label: "Location", value: "Johri Bazaar, Walled City" },
      { label: "Rooms", value: "8 suites" },
      { label: "Opened", value: "2020" },
      { label: "Best for", value: "Design, food, old-city immersion" }
    ],
    featured: true,
    directBookingUrl: "https://live.ipms247.com/booking/book-rooms-thejohri",
    sections: [
      { body: [
        "Jaipur has never lacked grand hotels. It has former palaces with peacocks on the lawns, sandstone forts beyond the city and swimming pools long enough to turn an afternoon into an occupation. The Johri offers almost none of that. Its front door is hidden down a lane in Johri Bazaar, the jewellers' market at the centre of the walled Pink City. Cars cannot complete the journey. Porters meet guests for the last, vivid metres past sari shops, scooters, sweet counters, flower sellers and the constant theatre of a market that has no interest in becoming a hotel lobby.",
        "Then the door closes. Inside is Lal Haveli, an 1871 merchant house organised around a slender courtyard, its eight suites rising through several intensely coloured floors. The compression is astonishing: Jaipur at full volume on one side of the threshold; arches, palms and an almost conspiratorial calm on the other. The Johri is not an escape from the city so much as a secret room within it, and that difference explains both the hotel's considerable charm and its unavoidable compromises.",
        "This is the second Jaipur hotel from the group behind 28 Kothi, created by Abhishek Honawar and jeweller Siddharth Kasliwal. The partnership matters because The Johri understands the city from the inside. It does not offer a generic idea of Rajasthan assembled from carved screens and miniature paintings. Craft here is more particular, colour more fearless and the relationship with the bazaar outside more essential. The hotel earned a Michelin Key and a place on the World's 50 Best Hotels list in 2025, but its greatest luxury remains wonderfully unquantifiable: it gives visitors access to Jaipur without placing them at a polite distance from it."
      ]},
      { heading: "The arrival: the final metres on foot", body: [
        "The Johri's arrival is either a thrill or a warning, depending on the traveller. A driver can approach the bazaar but cannot pull up beneath a porte-cochère. Luggage disappears onto a handcart or into the care of staff while guests follow on foot through lanes that can feel feverish after a long journey. First-time visitors should arrange the hotel's transfer, keep the telephone number close and resist attempting the last turn with an impatient taxi driver.",
        "There is no polished transition zone. That is precisely why the arrival stays in the memory. The building does not dominate its surroundings; it reveals itself by degrees. A brass-studded blue-green door gives way to a cool passage, then to a courtyard where a small fountain, patterned stone and climbing foliage reset the senses. In a city inclined toward spectacle, The Johri's most dramatic gesture is concealment.",
        "The practical corollary should not be romanticised. Anyone with reduced mobility needs a detailed conversation before booking. The hotel has an elevator, but the historic plan still involves thresholds, passages and stairs, and the lane itself is uneven and crowded. Guests who expect effortless vehicle access at every hour will be happier elsewhere."
      ]},
      { heading: "A haveli with opinions", body: [
        "Lal Haveli was acquired in 1871 by Dhannalal Kasliwal Faujdar, a figure connected to Jaipur's civic and political history. Its reinvention by designer Naina Shah avoids the beige neutrality that has become luxury hospitality's default dialect. Scalloped arches frame chevron-striped columns. Embroidered headboards climb like gardens. Block-printed lampshades throw warm pools of light, and pastels—pistachio, marigold, rose and powder blue—are allowed to meet without an apology.",
        "The sources are Rajasthani, but the composition is contemporary. Antique furniture sits beside bespoke pieces; local stone, textiles and metalwork are treated as living materials rather than heritage props. In the Pukhraj Lounge, hand-painted murals turn Rajasthan's wilderness into a dreamscape of foliage and animals. Elsewhere, flowers and palms soften the building's verticality. The effect is more jewel box than museum, which suits a hotel conceived with one of Jaipur's best-known jewellery families.",
        "This is assertive decoration, and it will not seduce everyone. Travellers committed to limestone minimalism may find the accumulation too sweet; photographers will find a composition at every landing. The more important achievement is coherence. What could have become a catalogue of local motifs instead feels like a single, confident house—romantic without being nostalgic, decorative without losing architectural clarity."
      ]},
      { heading: "Eight suites, not eight copies", body: [
        "The suites take their names from precious materials and stones—Manek, Sona, Panna, Firoza, Sunela, Neelam, Moti and Moonga—and the names are more than a branding flourish. Each room carries its own palette and relationship to the courtyard. One may be washed in turmeric yellow and edged with scalloped white arches; another settles into blue, green or coral. Beds are enveloping, fabrics tactile and bathrooms comfortably modern without trying to outshine the rooms around them.",
        "The best suites possess the layered pleasure of a private apartment: a place to sit, something handmade within reach and a view that reveals the rhythm of the haveli rather than a generic city panorama. Soundproofed windows help temper the market, though no hotel at this address can promise the sensory blankness of a resort. Light, ceiling height and layout differ. At a property this small, room category should be chosen by conversation, not merely by price; ask what faces the courtyard, how much daylight arrives and whether any stairs lie between the lift and the door.",
        "There are no televisions, acres of marble or private terraces attached to every room. There is also no pool or gym. The Johri is a city house, and it should be booked as one. A traveller planning to spend entire days within the hotel may eventually feel the walls close in. Someone returning from Amber Fort, ateliers and the bazaars will find the scale intimate and restorative."
      ], image: {
        src: "https://www.thejohrijaipur.com/assets/img/W15.JPG",
        caption: "A suite at The Johri · Official hotel photography"
      }},
      { heading: "The restaurant is not an amenity", body: [
        "Many small hotels ask their dining rooms to be adequate. The Johri asks considerably more. Its restaurant has become a destination in its own right, drawing Jaipur residents and informed visitors into the haveli for an evolving vegetarian Indian menu. The cooking is rooted in regional memory but uninterested in museum preservation. Familiar forms are taken apart, lightened, sharpened and rebuilt with enough wit to feel contemporary rather than merely decorative.",
        "A drumstick 'paya' shorba borrows the depth and ritual of a meat broth without attempting a pale imitation. Pyaaz ki kachori arrives rethought rather than reverently reproduced; dal pakwaan gains polish without losing the salt, crunch and warmth that make the original compelling. Gucchi mushrooms, desert beans and local grains give the menu a sense of place. The kitchen's intelligence lies in knowing when to intervene and when to let a very good ingredient retain its accent.",
        "The room helps. Arches and plants create pockets of privacy, but the restaurant never becomes solemn. Lunch offers a cool retreat from the bazaar; dinner feels more grown-up, particularly once cocktails begin travelling from the lounge. Because the food is entirely vegetarian, committed carnivores should know what they are booking. Most will discover that the absence of meat is less noticeable than the presence of an actual culinary point of view.",
        "Breakfast is necessarily quieter and simpler, an important counterweight to dinner's ambition. A longer stay will still expose the limitations of having one principal restaurant, so eat beyond the hotel at least once. Yet few eight-room properties in India have a kitchen this persuasive, and fewer still would merit a reservation from someone sleeping elsewhere."
      ], image: {
        src: "https://www.thejohrijaipur.com/assets/img/The_Johri_Restaurant.jpg",
        caption: "The restaurant at Lal Haveli · Official hotel photography"
      }},
      { heading: "After the bazaar closes", body: [
        "The Pukhraj Lounge changes character with the light. In the afternoon it hosts high chai, a civilised pause after bargaining and traffic. By evening, its hand-painted wilderness gathers depth and the bar begins to feel like a salon hidden above the shops. The cocktail programme uses Indian botanicals and local spirits with more imagination than the usual palace-hotel list of global classics.",
        "There is particular pleasure in staying after Johri Bazaar lowers its shutters. The commercial pulse softens, the street empties by degrees and the haveli belongs more completely to its few residents. The hotel's massage offering is modest rather than spa-like, but a treatment can neatly bridge the hot afternoon and dinner. Do not expect a wellness complex; expect a quiet room, capable hands and the convenience of not leaving the house."
      ]},
      { heading: "Service and the privilege of smallness", body: [
        "Eight suites allow for genuine recognition. Staff learn breakfast preferences quickly, keep track of cars and make the kind of local introductions that matter in Jaipur: which workshop is worth the drive, when a bazaar will be bearable and how long an apparently short journey will actually take. The most useful service is interpretive. The hotel sits within one of India's great craft cities, and a thoughtful recommendation is worth more than another ceremonial welcome.",
        "Smallness is not the same as infallibility. With little institutional distance between guest and operation, every lapse becomes visible. A missed transfer or confused reservation cannot be absorbed by a large concierge team, and the intensity of the address makes arrival coordination particularly important. Confirm airport or railway collection in writing, share a working mobile number and ask exactly where the meeting point will be. The hotel should make the complexity feel easy, but an informed guest will remove unnecessary ambiguity before setting out.",
        "When the machinery works, the atmosphere is unusually personal without becoming intrusive. The Johri does not behave like a private club or insist that intimacy means forced conversation. It understands the finer point of a small hotel: guests should feel known, never watched."
      ]},
      { heading: "The Walled City bargain", body: [
        "Location is the hotel's defining amenity. Hawa Mahal, the City Palace and Jantar Mantar are close; more important, the surrounding lanes offer jewellers, textile merchants, temples, food stalls and the continuous human detail that disappears when Jaipur is experienced only through a car window. An early walk before the shops fully open reveals the walled city in a more contemplative register. Later, step outside and the day arrives all at once.",
        "That immediacy exacts a price. Traffic is slow, pollution can be tiring and a return journey at the wrong hour may require patience. The Johri does not provide Rambagh Palace's lawns, Rajmahal Palace's broad arrival or a resort's buffer from the city. What it offers is contact. Choosing between them is not a question of quality but of appetite.",
        "For a first visit to Jaipur, two or three nights here create a powerful education in the old city. For a longer Rajasthan holiday, the clever combination is contrast: The Johri for texture and walking access, followed by a palace or countryside retreat for gardens, swimming and silence. Staying only beyond the walls makes Jaipur easier. Staying here makes it more legible."
      ]},
      { heading: "What to know before booking", body: [
        "Book The Johri if design, food and urban immersion rank above facilities. Do not book it for a fly-and-flop weekend beside a pool; there is none. Families who enjoy exploring may love the colour and compact scale, but parents of very young children should discuss room layouts and the building's stairs. Guests with meaningful mobility requirements need specific guidance rather than a generic assurance that an elevator exists.",
        "Two nights is the minimum and three feels ideal. Request the hotel's assistance for the first arrival, particularly after dark. If quiet is paramount, ask for the current assessment of the calmest suite; the building has evolved from five to eight rooms, and older online reviews do not always describe the hotel that exists today. Reserve dinner even when staying in-house, because the restaurant attracts outside guests.",
        "Rates can look high beside larger Jaipur hotels, especially when measured by facilities. The better comparison is with a beautifully serviced private house in an irreplaceable location. You are paying for design, scarcity and the ability to cross a threshold directly into the old city—not for a long list of recreational infrastructure."
      ]},
      { heading: "The verdict", body: [
        "The Johri is one of Jaipur's most complete small hotels because it knows exactly what it cannot be. It does not compete with palaces on acreage, pools or royal theatre. Instead, it turns an 1871 haveli into an intimate expression of the contemporary city: craft-literate, colour-drunk, gastronomically ambitious and embedded in the commerce that made Jaipur famous.",
        "Its limitations are inseparable from its identity. The lane that frustrates a car is the lane that gives the hotel meaning. The lack of resort facilities keeps attention on the city. The tiny room count makes service personal and operational missteps conspicuous. Accept that bargain and The Johri becomes more than a beautiful place to sleep. It becomes an argument for encountering Jaipur at close range—and one of the few hotels for which the walk to the front door is part of the reason to come."
      ]}
    ]
  },
  {
    slug: "six-senses-fort-barwara",
    name: "Six Senses Fort Barwara",
    city: "Chauth ka Barwara",
    country: "India",
    region: "Asia",
    category: "Restored Fort",
    tagline: "A 14th-century Rajasthan fort remade as a deeply considered retreat",
    excerpt: "Fort Barwara succeeds because the restoration retains weight and imperfection. Forty-eight suites, temple bells and a serious spa make this far more than a palace-shaped stopover to Ranthambore.",
    rating: 4.7,
    priceFrom: 900,
    priceNote: "Seasonal; meals, transfers and safari drives may be extra",
    year: "August 2026",
    heroImage: "https://media.sixsenses.com/B60H3R33/at/8zkh3xmrhmr4f7sk98njhj3x/Fort_Exterior_View.jpg?format=webp&width=1920&height=1080&fit=crop",
    cardImage: "https://media.sixsenses.com/B60H3R33/at/8zkh3xmrhmr4f7sk98njhj3x/Fort_Exterior_View.jpg?format=webp&width=1200&height=800&fit=crop",
    standout: "Dusk on the ramparts, when the restored walls glow above the village and the fort feels connected to Rajasthan rather than sealed off from it.",
    quickFacts: [
      { label: "Location", value: "Chauth ka Barwara, Rajasthan" },
      { label: "Rooms", value: "48 suites" },
      { label: "Opened", value: "2021" },
      { label: "Best for", value: "Slow itineraries, spa, Ranthambore pairings" }
    ],
    featured: true,
    sections: [
      { body: [
        "A fort is not an easy thing to turn into a hotel. Corridors refuse to align, walls carry their own logic and every demand of modern comfort risks sanding away the age that made the place worth saving. Six Senses Fort Barwara took a decade over the problem. The result preserves two palaces, two temples and a 14th-century defensive presence while inserting 48 suites of remarkable scale.",
        "The hotel rises above Chauth ka Barwara village between Jaipur and Ranthambore. That relationship matters. Temple sound, fields and rooftops remain part of the view; the property does not pretend to float in an empty, royal Rajasthan invented for visitors."
      ]},
      { heading: "Arrival and atmosphere", body: [
        "The final approach is deliberately dramatic, but the fort settles quickly after check-in. Courtyards, ramps and stone passages create a sequence rather than a single lobby reveal. Restoration is legible: surfaces are not polished into false newness, and the buildings retain enough mass to make contemporary furniture feel temporary.",
        "There is ceremony, as Rajasthan hotels tend to require, though the deeper pleasure comes later when scheduled welcome gives way to the ordinary life of the walls. At night, the property can feel wonderfully removed. It is not, however, a casual base for independent exploration; a car and forethought are essential."
      ]},
      { heading: "The suites", body: [
        "Suites begin at a generous 70 square metres and rise through five specialty categories to genuinely palatial proportions. The eastern wing looks toward countryside, the western toward the village. Neither description alone captures privacy or outlook, so it is worth asking for current photographs of the exact category.",
        "Interiors use muted textiles, carved details and broad expanses of stone without converting history into costume. Bathrooms are large and beds excellent. Some rooms inherit the quirks of the old structure—changes in level, unusual circulation, light that varies by position. That irregularity is part of the fort's appeal, but guests with mobility concerns should discuss placement before arrival."
      ]},
      { heading: "Food and drink", body: [
        "The strongest meals draw from Rajasthan without treating regional food as a nightly theme. Millet, local vegetables, slow-cooked meats and sharp pickles bring specificity to menus that also accommodate the international expectations of a wellness resort. Breakfast is most persuasive when it remains focused rather than attempting every cuisine at once.",
        "Because alternatives require a journey, the hotel holds unusual power over the dining experience. A longer stay can expose repetition, and the final bill grows quickly when packages exclude meals. Ask about board arrangements and special dinners in advance; romance is improved by knowing which parts carry a supplement."
      ]},
      { heading: "Spa and days", body: [
        "Wellness is not an appendix here. The Six Senses spa draws on Ayurveda and other Indian traditions alongside contemporary treatments, with programmes that can give a three-night stay useful structure. The setting—quiet stone, water and enclosed courtyards—does much of the therapeutic work before a treatment begins.",
        "Ranthambore drives can be arranged, though the reserve is not immediately outside the gate and wildlife never follows a hotel timetable. The fort also offers village, craft and countryside experiences. Choose those that create genuine exchange rather than a performance of rural life, and leave at least one day for the property itself."
      ]},
      { heading: "Service", body: [
        "Service is warm and highly attentive, sometimes more attentive than a guest seeking silence may require. The operation is strongest when staff translate a complicated historic building into ease—buggy arrangements, meal timing, spa coordination—without making the guest feel managed.",
        "As in many destination resorts, execution can be vulnerable at full occupancy because almost every request passes through the hotel's own network. Clear plans help, but the property should carry the coordination. A guest paying this rate should not become the project manager of a safari departure."
      ]},
      { heading: "What to know", body: [
        "Fort Barwara works best as two or three nights within a Rajasthan road journey, not as a rushed overnight. It is remote enough that arrival after dark wastes the best first impression. Winter mornings can be cold, summer heat formidable and outdoor dining weather-dependent.",
        "Families are welcomed, yet the architecture involves steps and long routes. Travellers expecting Jaipur-style shopping outside the gate will find something much quieter. The reward is proportion: a fort stay that has room to breathe."
      ]},
      { heading: "The verdict", body: [
        "One of India's most convincing recent heritage conversions. It combines architectural seriousness, large rooms and credible wellness without reducing Rajasthan to gilt and nostalgia. The food plan and logistics deserve scrutiny, but given enough time Fort Barwara becomes the rare detour that changes the rhythm of the entire trip."
      ]}
    ]
  },
  {
    slug: "aman-new-york",
    name: "Aman New York",
    city: "New York",
    country: "United States",
    region: "The Americas",
    category: "Urban Sanctuary",
    tagline: "Fireplaces, silence and a monumental spa above Fifth Avenue",
    excerpt: "Aman has built an almost acoustically impossible refuge inside the Crown Building. The 83 suites and three-floor spa are exceptional; the price and private-club atmosphere are equally impossible to ignore.",
    rating: 4.6,
    priceFrom: 2500,
    priceNote: "Before taxes; dining and many spa treatments extra",
    year: "August 2026",
    heroImage: "https://www.aman.com/sites/default/files/styles/central_carousel_extra_large_2x/public/2026-03/Aman-New-York--USA---Accommodation--Premier-Suite-56th.webp?itok=6iR0Fb3Q",
    cardImage: "https://www.aman.com/sites/default/files/styles/central_carousel_small/public/2026-03/Aman-New-York--USA---Accommodation--Premier-Suite-56th.webp?itok=Mtds2V4u",
    standout: "The 25,000-square-foot spa, where a pool, hammam and banya make Midtown disappear with astonishing efficiency.",
    quickFacts: [
      { label: "Location", value: "Fifth Avenue at 57th Street" },
      { label: "Rooms", value: "83 suites" },
      { label: "Opened", value: "2022" },
      { label: "Best for", value: "Privacy, spa weekends, total quiet" }
    ],
    featured: true,
    sections: [
      { body: [
        "Aman New York is a paradox built in stone and excellent soundproofing. It sits in the Crown Building at Fifth Avenue and 57th Street, one of the most exposed intersections in Manhattan, yet its interior seems designed to deny the existence of the city below. Street noise vanishes. Lighting drops. Doors close with the finality of vaults.",
        "For Aman, whose mystique was made in remote landscapes, New York posed a difficult question: can seclusion exist without distance? The answer is yes, if one has Jean-Michel Gathy, three floors for a spa and room rates high enough to make nearly every alternative feel moderate."
      ]},
      { heading: "The arrival", body: [
        "Entry is discreet to the point of ambiguity. The lift delivers guests to a dark, monumental interior with a garden terrace beyond. Materials—oak, stone, parchment-like surfaces—speak the established Aman language, while enormous proportions keep the design from feeling like a transplanted resort reception.",
        "The controlled access creates genuine calm, but also a social character closer to a private club than a classic New York hotel. Travellers who enjoy an animated lobby and spontaneous drink will find the atmosphere over-filtered. Those who regard anonymity as the ultimate amenity may feel they have finally been understood."
      ]},
      { heading: "The suites", body: [
        "All 83 accommodations are suites, and each contains a working fireplace—an extravagant, emotionally effective feature in a Manhattan bedroom. Interiors borrow from Japanese residential calm: screens, low lines, pale woods and deep stone baths. Entry categories are already large by city standards; the sense of space matters as much as the square footage.",
        "Technology is integrated discreetly, beds are superb and external sound is almost eerily absent. The palette can feel severe on a grey day, and anyone seeking colour or a recognisably New York interior will not find it here. The city is framed as view rather than allowed into the room's personality."
      ]},
      { heading: "The spa", body: [
        "The 25,000-square-foot wellness complex is the hotel's clearest justification. Spread over three floors, it includes a long indoor pool, treatment rooms, hammam and banya facilities. Two private Spa Houses turn bathing traditions into bookable worlds of their own.",
        "This is not a token urban spa with four cabins beside the gym. It can occupy an entire day and materially alter a jet-lagged arrival. Access inclusions should be confirmed, because signature experiences add meaningfully to an already exceptional rate."
      ]},
      { heading: "Food and night", body: [
        "Arva serves polished Italian cooking; Nama focuses on Japanese washoku, while the subterranean Jazz Club provides the property's most New York-specific night out. Terraces on the 14th floor create an appealing separation from Fifth Avenue without losing the skyline.",
        "Restaurants are beautiful and controlled, sometimes to the point that dinner feels like an extension of the spa. The Jazz Club supplies welcome friction and sound. Guests should still eat outside the hotel: withdrawing from New York is pleasurable only when one has first participated in it."
      ]},
      { heading: "Service", body: [
        "Service is formal beneath a surface of ease. Staff remember preferences, coordinate across the building and protect privacy with conviction. At this price, however, tiny operational lapses become proportionally louder. A delayed request that would be forgettable elsewhere becomes difficult to reconcile with a rate comparable to a month's rent.",
        "The best interactions are concise and assured. The hotel does not need to explain its exclusivity; every threshold has already done so."
      ]},
      { heading: "What to know", body: [
        "The central location is excellent for uptown museums, shopping and business, less natural for travellers whose New York lives downtown or in Brooklyn. The club-like model limits the casual public life that makes many great city hotels compelling. Prices are not merely high but category-altering, and the experience should be judged accordingly.",
        "Book for two nights of recovery, a private celebration or a trip where the hotel itself is the purpose. It makes less sense as an expensive room left empty from breakfast to midnight."
      ]},
      { heading: "The verdict", body: [
        "Aman New York achieves something technically and atmospherically remarkable: silence and space at the heart of Midtown. The spa is among the city's defining hotel facilities and the suites are beautifully resolved. Yet the rarefied social mood and vertiginous pricing prevent universal recommendation. This is a magnificent sanctuary—provided you want sanctuary from New York while staying in New York."
      ]}
    ]
  },
  {
    slug: "passalacqua",
    name: "Passalacqua",
    city: "Moltrasio",
    country: "Italy",
    region: "Europe",
    category: "Lake Villa",
    tagline: "A 24-room Lake Como fantasy with the confidence of a private home",
    excerpt: "The De Santis family restored an 18th-century villa with colour, antiques and operatic generosity. Passalacqua is intimate by Lake Como standards and nearly impossible to experience casually.",
    rating: 4.9,
    priceFrom: 1700,
    priceNote: "Highly seasonal; lake-view categories command a substantial premium",
    year: "August 2026",
    heroImage: "https://www.passalacqua.it/media/w2epi3o5/passalacqua-lake-como-today.jpg?width=2275&height=1280&format=webp&v=1d9206c8038c060",
    cardImage: "https://www.passalacqua.it/media/w2epi3o5/passalacqua-lake-como-today.jpg?width=1200&height=800&format=webp&v=1d9206c8038c060",
    standout: "Seven acres of terraced garden descending through olive trees and fountains to a private jetty on Lake Como.",
    quickFacts: [
      { label: "Location", value: "Moltrasio, Lake Como" },
      { label: "Rooms", value: "24 rooms & suites" },
      { label: "Opened", value: "2022" },
      { label: "Best for", value: "Romance, gardens, unhurried lake days" }
    ],
    featured: true,
    sections: [
      { body: [
        "Passalacqua feels less designed than accumulated, which is the highest compliment available to a new hotel. The 18th-century villa in Moltrasio was acquired by the De Santis family—owners of Grand Hotel Tremezzo—in 2018 and restored over three years. It opened with 24 rooms, no fear of pattern and the self-possession of a house that has already lived several lives.",
        "Bellini composed La Sonnambula here in 1831; Churchill later visited. The hotel does not require those names to supply romance, but they establish the villa's historical register. This is not minimal luxury placed inside an old shell. It is a maximal, deeply personal interpretation of Lake Como domestic grandeur."
      ]},
      { heading: "The house and gardens", body: [
        "Rooms occupy the main Villa, the Palazz and Casa al Lago near the water. Between them, seven acres descend in terraces: formal beds, fountains, fruit trees, hidden seating, a pool and pathways that keep revealing another view. The private jetty turns the lake into a front door.",
        "The scale is intimate enough that gardens feel available rather than observed. Day visitors do not dominate the scene. Guests can disappear with a book, appear for lunch and disappear again, which is the rhythm the property handles best."
      ]},
      { heading: "The rooms", body: [
        "No two rooms resolve the building in quite the same way. Silk, carved wood, floral fabrics, chandeliers, marble and antiques are layered with a curator's nerve. Bathrooms introduce modern indulgence without draining character. The grandest suites are vast, but smaller rooms can be more emotionally coherent.",
        "Category choice matters. Main-villa rooms carry history and proximity to public spaces; Casa al Lago provides water-level romance; garden and lake outlooks differ. Ask for measurements, stairs and view rather than selecting on a poetic category name. This is a house of idiosyncrasies, and the right idiosyncrasy is personal."
      ]},
      { heading: "Food as hospitality", body: [
        "Dining avoids the hushed formality that can make Lake Como hotels feel like diplomatic functions. Meals move between terraces, rooms and garden settings, with Italian cooking presented through abundance and instinct rather than conceptual strain. Breakfast has the generosity of a family table, though the family in question owns exceptional china.",
        "The flexible approach encourages guests to stay in, which is delightful for several days and potentially insulating over a longer visit. Moltrasio and the lake deserve attention beyond the gates. Take a boat, eat elsewhere once and return grateful that the hotel's kitchen remains available."
      ]},
      { heading: "Pool, lake and quiet pleasures", body: [
        "The garden pool sits among striped umbrellas and mature planting, theatrical enough to have become an image of the hotel. The lake offers boating and swimming from the private edge when conditions allow. A small spa, open-air gym and garden activities fill the spaces between meals without turning the stay into a programme.",
        "Passalacqua is not a conventional resort with endless facilities. Its luxury lies in rooms, garden, staff and the sense that anything pleasant might be arranged. Guests who need a large spa, multiple restaurants and children's infrastructure should compare it honestly with the region's grander properties."
      ]},
      { heading: "Service", body: [
        "Service takes its cue from the house: expressive, warm and comfortable with small improvisations. Staff make suggestions without converting every hour into an appointment. At its best, the operation feels generous rather than transactional, a notable achievement at one of Europe's most expensive seasonal hotels.",
        "That intimacy creates high expectations. A guest notices when information fails to travel because the hotel has promised the opposite—recognition and continuity. The small room count generally makes those promises credible."
      ]},
      { heading: "What to know", body: [
        "Lake Como in high summer is crowded, and no hotel can eliminate traffic or ferry timetables. Passalacqua's seclusion is an advantage, but dinner elsewhere and village exploration require planning. The terraced landscape also means steps; accessibility needs should be discussed in detail.",
        "Rates fluctuate sharply by season. Late spring and September offer the strongest combination of gardens, swimming and movement around the lake. Stay at least three nights. A hurried visit reduces the property to a beautiful backdrop when its real achievement is atmosphere over time."
      ]},
      { heading: "The verdict", body: [
        "Passalacqua is an unusually complete act of hotel-making: historic without solemnity, luxurious without corporate gloss, and maximal without becoming theme. It asks an enormous price and then does the rare thing of making excess feel intimate. For a celebratory Lake Como stay, few properties are more persuasive."
      ]}
    ]
  },
  {
    slug: "one-and-only-mandarina",
    name: "One&Only Mandarina",
    city: "Riviera Nayarit",
    country: "Mexico",
    region: "The Americas",
    category: "Jungle Resort",
    tagline: "Treehouses and private villas folded into Pacific rainforest",
    excerpt: "Mandarina's landscape is the star: jungle ridges, cliffs and a sweep of Riviera Nayarit coast. Privacy is exceptional, though steep terrain and a dependence on buggies shape every stay.",
    rating: 4.6,
    priceFrom: 1600,
    priceNote: "Before taxes and resort charges; villa categories vary considerably",
    year: "August 2026",
    heroImage: "https://dam.kerzner.com/i/kerzner/oomm-resort-jetty-beach-club-sunset-1-jpg?w=2880&fmt=auto",
    cardImage: "https://dam.kerzner.com/i/kerzner/oomm-resort-jetty-beach-club-sunset-1-jpg?w=1200&fmt=auto",
    standout: "Waking in a treehouse above dense green canopy, with a private pool and the Pacific appearing beyond the leaves.",
    quickFacts: [
      { label: "Location", value: "Riviera Nayarit, north of Punta Mita" },
      { label: "Rooms", value: "Villas, treehouses & private homes" },
      { label: "Opened", value: "2020" },
      { label: "Best for", value: "Privacy, families, nature-rich resort stays" }
    ],
    sections: [
      { body: [
        "One&Only Mandarina does not sit beside the landscape; it disappears into it. Villas and treehouses are distributed across forested slopes above a Pacific cove, reached along winding paths through a development much larger than the hotel itself. From the best rooms, the first impression is almost entirely green.",
        "The project belongs to Riviera Nayarit's new generation of high-design enclaves, north of Punta Mita and Puerto Vallarta. Its proposition is not beach alone. It is jungle, altitude, privacy and a resort capable of keeping families, couples and active travellers occupied without forcing them into the same day."
      ]},
      { heading: "The villas and treehouses", body: [
        "Every accommodation is freestanding and comes with a private plunge pool. Treehouses rise into the canopy; cliff and panoramic villas open toward larger ocean views; family configurations trade some romance for useful space. Interiors combine warm timber, stone and Mexican craft in rooms that feel polished without shouting over the setting.",
        "Category is crucial. Vegetation grows, views evolve and the distance to restaurants varies. Ask whether privacy or open ocean matters more, and whether small children make stairs undesirable. The word 'treehouse' carries fantasy but also a practical reality of elevation."
      ]},
      { heading: "The buggy question", body: [
        "Mandarina is steep and spread out. Buggies are not an occasional convenience; they are the circulatory system. At quiet times, this feels effortless. At breakfast rush or during rain, waiting can puncture the illusion that the resort exists entirely around one villa.",
        "Guests who enjoy walking everywhere may feel constrained, while anyone with mobility needs should discuss exact routes before booking. The terrain creates the privacy and drama, so the trade-off cannot be designed away. It can only be managed brilliantly."
      ]},
      { heading: "Food and drink", body: [
        "Restaurants move between beach, garden and elevated viewpoints, with Mexican ingredients and live-fire cooking giving the strongest meals their identity. The range is broad enough for several nights, and private-villa dining is tempting when leaving the pool feels unnecessary.",
        "Prices match the captive-resort setting, and consistency matters at this level. A simple taco or grilled fish must receive the same attention as the signature dinner. Travellers staying a week should plan at least one meal beyond the resort to restore context and variety."
      ]},
      { heading: "Beach, spa and horses", body: [
        "The beach is beautiful but not the single organising image of the property. Sea conditions vary, and travellers imagining a calm Caribbean lagoon should reset expectations for the Pacific. Pools and sheltered areas widen the options.",
        "The spa draws strength from the forest, with treatment rooms integrated into the landscape. An equestrian centre and polo facilities distinguish Mandarina from standard beach resorts, while trails and water activities give energetic guests somewhere to go. The hotel is particularly good for families because children can have ambitious days without converting the adult pool into a playground."
      ]},
      { heading: "Service", body: [
        "Hosts coordinate the moving parts through messaging and in-person contact. When response times, buggies and reservations align, the complexity disappears and the resort feels remarkably personal. When they do not, geography magnifies every delay.",
        "This is the central service challenge: an expensive resort with difficult terrain must be more precise, not merely warmer, than a compact hotel. Clear communication about waits is better than optimistic promises."
      ]},
      { heading: "What to know", body: [
        "The airport transfer can stretch with traffic, so protect the arrival and departure days. Dry-season weather is most reliable; the greener wet season brings heat, humidity and showers. Wildlife and insects are features of a functioning tropical landscape, not operational failures.",
        "Choose Mandarina for the room, forest and range of activities. If nightlife, town access or effortless beach walking defines the holiday, Punta Mita or San Pancho may fit better. Four nights feels right; five allows one day to do nothing."
      ]},
      { heading: "The verdict", body: [
        "A spectacular piece of resort planning with villas that deliver authentic privacy and a landscape capable of carrying the high rate. Dependence on buggies and occasional operational friction are real drawbacks, not footnotes. Book the correct category, arrive with the right expectations and Mandarina can feel genuinely transporting."
      ]}
    ]
  },
  {
    slug: "park-hyatt-kyoto",
    name: "Park Hyatt Kyoto",
    city: "Kyoto",
    country: "Japan",
    region: "Asia",
    category: "Temple District Retreat",
    tagline: "A low-rise sanctuary woven into Higashiyama's historic slopes",
    excerpt: "With only 70 rooms beside Kodaiji, Park Hyatt Kyoto offers an unbeatable dawn address and design of exceptional restraint. The city's crowds remain outside; suite availability and pricing demand strategy.",
    rating: 4.8,
    priceFrom: 1300,
    priceNote: "Rates peak dramatically during blossom and autumn foliage seasons",
    year: "August 2026",
    heroImage: U("1493976040374-85c8e12f0c0e", 2000),
    cardImage: U("1493976040374-85c8e12f0c0e", 1000),
    standout: "Walking out before breakfast into empty Sannenzaka lanes, then returning to Yasaka Pagoda framed from the hotel.",
    quickFacts: [
      { label: "Location", value: "Higashiyama, beside Kodaiji" },
      { label: "Rooms", value: "70 rooms, including 9 suites" },
      { label: "Opened", value: "2019" },
      { label: "Best for", value: "First-light Kyoto, design, quiet city stays" }
    ],
    featured: true,
    sections: [
      { body: [
        "Park Hyatt Kyoto occupies one of the city's most consequential hotel sites. It is woven into Higashiyama below Kodaiji, beside preserved lanes that appear on every Kyoto itinerary and therefore belong to nobody by midday. Hotel guests possess one extraordinary advantage: they can enter those streets before breakfast and return after the crowds have gone.",
        "The property opened in 2019 with 70 rooms, including nine suites. Its low-rise architecture steps with the slope, framing Yasaka Pagoda and the city rather than competing with them. The achievement is not invisibility—this is unmistakably a very expensive hotel—but composure."
      ]},
      { heading: "Architecture and arrival", body: [
        "There is no giant urban lobby. Spaces unfold through timber, stone, screens, gardens and carefully edited views. A historic teahouse, Kyoyamato, remains part of the complex, anchoring the new construction to a longer hospitality history.",
        "Arrival by car can be slow when Higashiyama is congested, but once inside, quiet is immediate. The plan takes time to understand, and this mild disorientation feels appropriate in a building designed as a sequence of thresholds rather than a diagram."
      ]},
      { heading: "The rooms", body: [
        "Entry rooms are restrained, tactile and generously proportioned for Kyoto, using Japanese materials without turning them into decorative quotation. Window seats and views do much of the work. Bathrooms are beautifully resolved around deep tubs, stone and exact lighting.",
        "Only nine suites means upgrades and large categories are scarce, especially during peak seasons. Some rooms look inward or have more limited outlooks than the hotel's most published images suggest. Book the view deliberately; location is guaranteed, panorama is not."
      ]},
      { heading: "Food and drink", body: [
        "Yasaka serves teppanyaki with a city view, while the signature restaurant and lounge bring a refined international sensibility to the hotel. Kyoyamato offers a deeper encounter with Kyoto cuisine in a setting whose history predates the Park Hyatt around it.",
        "Breakfast is polished and calm, especially compared with the lanes outside. Yet Kyoto's food culture is too rich to remain within the property. Use the concierge early, respect small restaurants' cancellation rules and accept that the most memorable meal may be a simple bowl of noodles rather than the hardest reservation."
      ]},
      { heading: "Wellness and public space", body: [
        "The spa and fitness facilities are elegant but not resort-scale. This is a hotel for walking the city, returning for a bath and looking out over tiled roofs; anyone seeking a destination wellness complex should adjust expectations.",
        "Public rooms excel in the transition hours. Late afternoon light, a drink after temples close and the view after dark justify time inside. The atmosphere is hushed without becoming funereal, a balance many urban sanctuaries miss."
      ]},
      { heading: "Service", body: [
        "Service is precise, observant and capable of navigating Kyoto's logistical barriers. Concierges add real value when dining, taxis and seasonal openings require advance planning. Staff generally know when to provide information and when to leave silence intact.",
        "At peak occupancy, the demand for tables, cars and guides across the city exceeds any hotel's influence. Book early rather than interpreting the concierge desk as a magical access system. The most honest recommendation may be the less famous restaurant with space."
      ]},
      { heading: "What to know", body: [
        "The doorstep becomes crowded from mid-morning, and vehicle access can be frustrating. This is the price of sleeping inside Kyoto's most cinematic district. Travellers focused on downtown nightlife may prefer a more central base; those willing to shape days around dawn gain something irreplaceable.",
        "Spring and autumn rates can become extreme. Visit in early winter or the rainy season for a calmer equation. Stay three nights minimum, four or five if Kyoto is more than a stop between Tokyo and Osaka."
      ]},
      { heading: "The verdict", body: [
        "One of Japan's most accomplished city hotels, not because it offers the most facilities but because architecture, service and address serve the same idea. Park Hyatt Kyoto grants access to the city at its quietest hours. The limited suites and seasonal pricing require clear eyes; the experience, at its best, is exceptional."
      ]}
    ]
  },
  {
    slug: "capella-bangkok",
    name: "Capella Bangkok",
    city: "Bangkok",
    country: "Thailand",
    region: "Asia",
    category: "Riverside Resort",
    tagline: "A low-slung, deeply personal hotel at the edge of the Chao Phraya",
    excerpt: "Every one of Capella Bangkok's 101 rooms faces the river, but the seven pool villas bring the city almost to water level. Service is intimate, food formidable and the setting quietly addictive.",
    rating: 4.8,
    priceFrom: 700,
    priceNote: "River villas and peak dates rise substantially",
    year: "August 2026",
    heroImage: U("1528181304800-259b08848526", 2000),
    cardImage: U("1528181304800-259b08848526", 1000),
    standout: "A river-edge villa, where a private plunge pool and verandah make Bangkok feel less like a megacity than a constantly changing piece of theatre.",
    quickFacts: [
      { label: "Location", value: "Charoenkrung Road, Chao Phraya" },
      { label: "Rooms", value: "101 rooms, suites & villas" },
      { label: "Opened", value: "2020" },
      { label: "Best for", value: "Food, river life, personalised service" }
    ],
    featured: true,
    sections: [
      { body: [
        "Bangkok's luxury hotels have occupied the Chao Phraya for generations, but Capella relates to the river differently. Rather than rise above it, the building stretches low along the bank, placing every one of its 101 rooms, suites and villas toward the water. Barges, long-tail boats and storms become the moving architecture.",
        "The hotel sits within Chao Phraya Estate off Charoenkrung Road, near one of the city's most compelling food and creative districts. It feels like a resort from the river and a city hotel from the road—a dual identity that keeps a stay from becoming either too insulated or too frenetic."
      ]},
      { heading: "The rooms and villas", body: [
        "Rooms begin at an unusually generous scale, with broad balconies and restrained interiors that allow the view to provide colour. Baths are deep, beds excellent and technology intuitive. Suites add living space; the seven river-edge villas introduce verandahs and private plunge pools immediately beside the action.",
        "The villas are distinctive precisely because they are not hidden in tropical isolation. Boats pass, the opposite bank glows and Bangkok remains present. Guests seeking complete visual privacy may prefer an upper-floor suite; those wanting the river as companion should accept its movement and occasional sound."
      ]},
      { heading: "Food and drink", body: [
        "Côte by Mauro Colagreco gives the hotel its formal dining centre, translating Mediterranean ideas with Thai produce and the precision expected of a destination restaurant. Phra Nakhon handles Thai cooking by the river, while Stella and the Tea Lounge extend the evening without requiring a taxi.",
        "The range is strong enough to keep guests on property, but Charoenkrung makes that unnecessary. Some of Bangkok's most exciting eating lies nearby. The right stay alternates: one exacting dinner at Côte, one lunch by the river and one night following the city's appetite beyond the driveway."
      ]},
      { heading: "The pool and spa", body: [
        "The main pool faces the river with enough planting and space to maintain calm. It is a place for watching rather than escaping Bangkok. Auriga Wellness offers treatments and facilities polished to Capella's standard, though the urban site does not pretend to be a vast destination spa.",
        "Mornings can begin with movement or cultural programming and end in the pool before the heat gathers. The hotel's best wellness feature may simply be its low profile: after a day in traffic, horizontal space near water has genuine therapeutic force."
      ]},
      { heading: "The Culturists", body: [
        "Capella's Culturists function as highly connected hosts, shaping itineraries and remembering preferences without forcing the relationship. In Bangkok, where geography and traffic can defeat a beautiful plan, their practical judgment matters. A recommendation timed for the wrong side of rush hour is not a recommendation.",
        "Service throughout is warm, detailed and unusually personal for a 101-room hotel. The operation's strength lies in continuity: requests tend to travel, names are used naturally and problems are solved without a public performance of solving them."
      ]},
      { heading: "What to know", body: [
        "Riverside Bangkok is atmospheric but not universally convenient. Travellers with daily meetings in central Sukhumvit should study journey times, while leisure guests can use boats and plan neighbourhood days. The hotel shuttle and river transport can turn movement into pleasure, but not every destination sits on the water.",
        "Humidity, rain and river conditions shape outdoor life. Entry rooms already deliver the central promise, making an upgrade less essential than at view-dependent hotels. Choose a villa for the experience, not merely for additional square metres."
      ]},
      { heading: "The verdict", body: [
        "Capella Bangkok combines serious food, superb rooms and some of the city's most intuitive service in a building that understands its river. It is polished without becoming anonymous and intimate without pretending to be small. For travellers who want Bangkok present but softened, this is one of the city's strongest answers."
      ]}
    ]
  },
  {
    slug: "the-brando",
    name: "The Brando",
    city: "Tetiaroa",
    country: "French Polynesia",
    region: "The Americas",
    category: "Private Atoll",
    tagline: "Thirty-five villas, one protected atoll and luxury with unusually serious systems",
    excerpt: "The Brando pairs extraordinary seclusion with solar power, seawater air-conditioning and conservation work on Tetiaroa. The all-inclusive rate is vast; so is the sense of privilege.",
    rating: 4.9,
    priceFrom: 4200,
    priceNote: "All-inclusive packages vary; private air transfer is typically additional",
    year: "August 2026",
    heroImage: "https://thebrando.com/wp-content/uploads/2023/02/Home_Banner_Edit_Cover_1.jpg",
    cardImage: "https://thebrando.com/wp-content/uploads/2023/02/Home_Banner_Edit_Cover_1.jpg",
    standout: "Crossing Tetiaroa's lagoon with a naturalist, where seabirds, reef and motu make the resort feel like a visitor rather than the centre of the atoll.",
    quickFacts: [
      { label: "Location", value: "Tetiaroa atoll, north of Tahiti" },
      { label: "Rooms", value: "35 private villas & one residence" },
      { label: "Opened", value: "2014" },
      { label: "Best for", value: "Seclusion, honeymoons, conservation-minded luxury" }
    ],
    featured: true,
    sections: [
      { body: [
        "Tetiaroa is the fantasy before The Brando adds a single amenity: a ring of low motu, white sand and lagoon north of Tahiti, reached by a short private flight. The resort occupies one islet with 35 villas and a residence, leaving the atoll's wider ecological drama to define the stay.",
        "The Brando's famous association supplies mythology, but its relevance lies elsewhere. Few ultra-luxury resorts have integrated environmental systems and scientific work so deeply into the operation. Solar power, seawater air-conditioning and the Tetiaroa Society are not hidden backstage; they are part of why the property exists in this form."
      ]},
      { heading: "The villas", body: [
        "Villas sit behind private stretches of beach with plunge pools, outdoor space and a clean, Polynesian-influenced design that prioritises shade and air. One-, two- and three-bedroom categories accommodate couples and families without turning the island into a dense resort settlement.",
        "Interiors are comfortable rather than ostentatious. The room's purpose is to remove friction between bed, pool, beach and lagoon. Privacy is excellent, though nature remains present: sand, wind, insects and the daily rearrangement of a tropical shore are evidence of place, not defects."
      ]},
      { heading: "The lagoon and its life", body: [
        "Naturalist-led excursions provide the stay's intellectual centre. Bird colonies, reef systems, turtles and the atoll's history transform beautiful water into a living environment. The resort's research relationships allow guides to speak beyond the usual snorkelling script.",
        "Guests should participate. It is possible to spend a week moving only between villa and restaurant, but doing so misses the very argument that distinguishes The Brando from another private-island resort. Conservation is more convincing when the landscape is understood rather than used as scenery."
      ]},
      { heading: "Food and drink", body: [
        "Two restaurants and two bars cover polished French-Polynesian dining, relaxed beach meals and evenings built around an exceptional cellar. The all-inclusive model removes much of the low-level arithmetic that can make remote resorts feel relentlessly transactional.",
        "A limited number of kitchens must still sustain appetite over several days. Menus are strongest when local fish, fruit and Polynesian flavours take precedence over the generic vocabulary of international luxury. Dietary needs require advance discussion because the nearest alternative is an aircraft away."
      ]},
      { heading: "Spa and stillness", body: [
        "The spa is set among vegetation and uses the island's quiet as its primary material. Treatments, pool time and private beach dinners can create a honeymoon of near-total seclusion. Families are welcomed, but the prevailing mood remains calm rather than programmed.",
        "The deeper luxury is cognitive. There are no restaurant reservations across town, no traffic and no reason to check an itinerary. For some travellers this is release; for others, four nights will feel complete. Know which person you are before booking seven."
      ]},
      { heading: "The sustainability claim", body: [
        "Thousands of solar panels supply a substantial share of the resort's power, and seawater air-conditioning reduces the enormous cooling demand of a tropical operation. The property has achieved campus-wide LEED Platinum recognition and supports research and conservation through its relationship with Tetiaroa Society.",
        "None of this makes the journey impact-free. Guests generally arrive after long-haul flights and then transfer by private aircraft. The credible position is not perfection but unusually ambitious reduction, measurement and ecological contribution on the ground. The Brando deserves praise because the systems are serious, not because luxury has somehow ceased to consume."
      ]},
      { heading: "What to know", body: [
        "The headline rate is only the beginning of comparison. Confirm inclusions, aircraft transfers, spa treatments and premium items. Weather can affect flights and water activities, making buffer time before an international departure sensible.",
        "Tetiaroa has no village to explore and no nightlife beyond the resort. Pair it with Tahiti or Moorea for cultural and geographic contrast. Four or five nights delivers the experience; longer stays suit travellers who genuinely want repetition as ritual."
      ]},
      { heading: "The verdict", body: [
        "The Brando is one of the world's most persuasive private-island resorts because the atoll remains larger than the hotel. Privacy, thoughtful villas and an unusually credible environmental operation justify much of the mythology. The price and aviation footprint remain part of the truth. So does the rare feeling of inhabiting a beautiful place that the resort is actively trying to understand."
      ]}
    ]
  },
  {
    slug: "rosewood-sao-paulo",
    name: "Rosewood São Paulo",
    city: "São Paulo",
    country: "Brazil",
    region: "The Americas",
    category: "Cultural Landmark",
    tagline: "Brazilian art, historic masonry and maximal city life in Cidade Matarazzo",
    excerpt: "Rosewood turns a former maternity complex near Paulista Avenue into São Paulo's most layered hotel. The 180 rooms, six bars and restaurants, chapel and art collection create a destination with real local voltage.",
    rating: 4.8,
    priceFrom: 650,
    priceNote: "Rates vary by tower, room type and event calendar",
    year: "August 2026",
    heroImage: "https://picasso.rosewoodhotelgroup.com/transform/b0d0bf01-be50-4bce-873f-b0f057ce836d/RWSPO_Facilities_PublicSpaces",
    cardImage: "https://picasso.rosewoodhotelgroup.com/transform/b0d0bf01-be50-4bce-873f-b0f057ce836d/RWSPO_Facilities_PublicSpaces",
    standout: "A hotel-wide collection of Brazilian art that behaves as part of the architecture, not a neutral interior's cultural alibi.",
    quickFacts: [
      { label: "Location", value: "Cidade Matarazzo, by Paulista Avenue" },
      { label: "Rooms", value: "180 rooms & suites" },
      { label: "Opened", value: "2021" },
      { label: "Best for", value: "Design, nightlife, first-time São Paulo" }
    ],
    sections: [
      { body: [
        "São Paulo is often described through scale: more buildings, restaurants, traffic, art and people than a visitor can arrange into a single image. Rosewood São Paulo does not attempt to calm that energy into beige international luxury. It gathers it—historic brick, exuberant art, music, gardens and a Jean Nouvel tower—inside Cidade Matarazzo near Paulista Avenue.",
        "The site includes a former maternity hospital and the 1922 Santa Luzia chapel, restored as part of a complex that spent years moving from promise to reality. Philippe Starck's interiors are less about one signature look than a sequence of moods. The hotel feels Brazilian not because it deploys motifs, but because Brazilian artists and materials are allowed to dominate."
      ]},
      { heading: "Architecture and art", body: [
        "Old and new remain legible. The historic building supplies corridors, courtyards and a sense of accumulated life; the tower introduces a vertical garden and contemporary skyline presence. It is not a deferential restoration. The project enjoys collision.",
        "Art appears at every scale, commissioned from established and emerging Brazilian names. The collection rewards a guided walk, especially because some works carry stories tied to the site's former life. Unlike decorative programmes chosen after upholstery, this one shapes the hotel's identity."
      ]},
      { heading: "The rooms", body: [
        "Rooms vary according to building and position, using tropical woods, colour, crafted objects and residential proportions. Some lean dark and cocooning; others open toward city or garden. Bathrooms are sensuous and beds carry the polished assurance expected of Rosewood.",
        "The variety means booking by generic size is insufficient. Ask whether a historic-room atmosphere, tower outlook, quiet or proximity to nightlife matters most. The hotel contains several experiences under one name, and the most expensive category is not automatically the best match."
      ]},
      { heading: "Six places to eat and drink", body: [
        "Le Jardin acts as the all-day living room, Blaise brings a wood-fired sensibility, and Taraz looks toward South American cooking with live flame. Rabo di Galo channels São Paulo's music and cocktail culture; the rooftop Bela Vista Bar turns the city into backdrop.",
        "The breadth makes Rosewood a social destination rather than a hushed residents-only retreat. Locals arrive, music carries and the building has an evening life. That energy is a strength, though light sleepers and privacy seekers should choose room location carefully."
      ]},
      { heading: "Pools and wellness", body: [
        "Two pools offer different versions of escape, while the six-treatment-room spa provides a compact, polished reset. The facilities are significant for a dense urban hotel but do not turn the property into a conventional resort.",
        "São Paulo rewards movement, and Rosewood's central position makes culture and dining the larger wellness plan. Use the spa between city days rather than cancelling the city for it."
      ]},
      { heading: "Service", body: [
        "Service is warm, stylish and comfortable with the hotel's social pace. Staff can interpret a complex building and a still more complex city, from restaurant bookings to neighbourhood strategy. The operation is most persuasive when recommendations move beyond the obvious international list.",
        "A hotel with multiple venues and outside visitors must work harder to preserve the resident experience. Lift access, pool calm and breakfast flow are the practical tests. At busy moments, energy can tip into congestion; good room placement and timing restore the balance."
      ]},
      { heading: "What to know", body: [
        "Cidade Matarazzo is close to Paulista Avenue, an excellent point of orientation but not the whole city. Traffic means each day's geography should be planned intelligently; crossing São Paulo twice for lunch and dinner is an avoidable error. The immediate area offers culture, business and access to Jardins.",
        "This is not a neutral sanctuary. Music, art, restaurants and public life are part of the rate. Travellers wanting monastic quiet should look elsewhere; travellers wanting to understand São Paulo through a hotel will find unusually rich material."
      ]},
      { heading: "The verdict", body: [
        "Rosewood São Paulo is the compelling antidote to placeless luxury. Its scale and popularity occasionally create friction, but the art, architecture and food build a hotel that belongs unmistakably to its city. It does not offer refuge from São Paulo so much as a concentrated, beautifully serviced way into it."
      ]}
    ]
  }
];
