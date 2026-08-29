import type { Guide } from "../guides";

const U = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const expansionGuides: Guide[] = [
  {
    slug: "rajasthan-by-road",
    title: "Rajasthan by Road: Jaipur, Fort Barwara, Udaipur and Jodhpur",
    destination: "Rajasthan, India",
    region: "Asia",
    dek: "Four stops, one excellent driver and enough time to let the desert state reveal itself beyond the palace gates.",
    excerpt: "A considered 12-day route through Rajasthan, with the hotels worth the detour, the drives that need patience and a firm argument against changing cities every night.",
    author: "The Hotel Life Editors",
    readTime: 14,
    date: "August 2026",
    heroImage: "/hotels/rambagh-palace-jaipur.jpg",
    cardImage: "/hotels/rambagh-palace-jaipur.jpg",
    hotelSlugs: ["rambagh-palace-jaipur", "the-johri-jaipur", "six-senses-fort-barwara", "oberoi-udaivilas-udaipur", "umaid-bhawan-jodhpur"],
    featured: true,
    sections: [
      { body: [
        "Rajasthan encourages bad itineraries. A map makes its great cities look tantalisingly close; a list of palaces makes every stop feel indispensable. The result is often a week of predawn departures, late arrivals and photographs of monuments that the traveller was too tired to understand. The better journey is slower: Jaipur, Fort Barwara, Udaipur and Jodhpur over eleven or twelve nights, with a car and driver throughout and no apology for spending an afternoon by the pool.",
        "This route still contains splendour in unreasonable quantities, but it also makes room for the state beyond the postcard: vegetable markets waking before the forts, temple bells at dusk, village roads threaded with motorbikes and the particular blue-grey light that arrives over the Aravalli hills. Rajasthan is not a museum of former royalty. It is a densely lived-in place, and the finest trips hold both realities at once."
      ]},
      { heading: "Begin in Jaipur, but do not race it", body: [
        "Give Jaipur three nights. The first is for recovering from the journey and learning the rhythm of the city; the second and third are for looking properly. Reach Amber Fort early, before the courtyards harden under the sun, then descend by car rather than turning the morning into an endurance test. The City Palace rewards more attention than the Hawa Mahal photo stop, while Jantar Mantar is most compelling with a guide who can make its stone instruments intelligible.",
        "Leave one half-day unassigned. Jaipur's real texture lives between its monuments: jewellers working behind unpromising doors, block printers in Sanganer, old sweet shops and bazaars where wedding fabrics spill into the lane. A good local guide is invaluable, but ask for someone interested in craft and contemporary life rather than a procession of commission-paying emporia. Rambagh Palace remains the theatrical choice; book it for history and ceremony, not for urban intimacy."
      ]},
      { heading: "The road to Fort Barwara", body: [
        "From Jaipur, turn southeast toward Chauth ka Barwara. The drive is part of the argument for travelling overland: city edges give way to mustard fields, small settlements and long, level horizons. Six Senses Fort Barwara occupies a restored 14th-century fort above the village, its two palaces and temples gathered inside walls that took a decade to bring back to life. Stay two nights at minimum; three if Ranthambore is part of the plan.",
        "The fort is less about ticking off sights than changing tempo. Mornings can begin with the countryside from a rampart and end in a spa built around Indian systems of wellbeing. Ranthambore National Park is within reach, but a tiger sighting is never guaranteed and should not be treated as a hotel amenity. Go for the landscape, birdlife and the charged possibility of the forest. If wildlife is the trip's central purpose, add a dedicated lodge nearer the reserve rather than attempting a single rushed drive."
      ]},
      { heading: "Udaipur: the lake is the itinerary", body: [
        "The transfer to Udaipur is the route's longest serious day. Break it with lunch, carry water and resist the temptation to add another city simply because it appears on the road. On arrival, the first glimpse of Lake Pichola explains why Udaipur has absorbed so much romantic projection. The water turns architecture into theatre: palaces seem to float, hills soften at dusk and every terrace points toward the sunset.",
        "Three nights allows the city to become more than scenery. Visit the City Palace near opening, cross the lake by boat when the heat ebbs and walk the old-city lanes with patience for scooters, cows and sudden bottlenecks. The Oberoi Udaivilas offers space, gardens and a resort-like remove across the water; a smaller haveli in town offers immediacy. Neither is objectively correct. Decide whether you want Udaipur outside the door or composed as a view."
      ]},
      { heading: "Finish in Jodhpur", body: [
        "Jodhpur is the strongest ending because Mehrangarh has the scale and severity to cut through palace fatigue. Rising directly from a rocky escarpment, the fort is magnificent not only for its ramparts but for the museum within: palanquins, miniature paintings, arms and rooms whose surfaces reward slow looking. Go in the morning, then return toward sunset for the old city's blue houses and the fort's changing silhouette.",
        "Stay two or three nights. Umaid Bhawan Palace is the grand finale—a still-functioning royal residence whose scale borders on surreal—while RAAS places you beneath Mehrangarh in the old quarter. Spend time around the clock tower market, eat beyond the hotel at least once and leave space for Bishnoi country if community-led visits can be arranged responsibly. The city is drier, tougher and less prettified than Udaipur; that contrast is precisely why it belongs."
      ]},
      { heading: "The practical intelligence", body: [
        "A trusted car and driver is the essential luxury. Rajasthan's roads demand concentration, and self-driving saves neither time nor serenity. Confirm the vehicle, luggage capacity, daily hours, driver accommodation and expected gratuity before arrival. Flights can shorten the itinerary, but they also turn a journey into four unrelated city breaks. Use one only if time is genuinely tight.",
        "October to March brings the kindest weather, with cold desert mornings in December and January. Pack layers, sun protection and shoes that tolerate dust and uneven stone. Avoid changing hotels for one-night stays. Schedule the great monuments early, protect the middle of the day, and do not assume that a high room rate makes every hotel meal essential. Some of the trip's most memorable food will arrive on a steel plate well beyond a palace dining room."
      ]},
      { heading: "The route, distilled", body: [
        "Three nights Jaipur, two at Fort Barwara, three in Udaipur and three in Jodhpur makes an eleven-night journey with a humane pulse. Add one night wherever your flight schedule creates strain. The distances matter less than the texture of the roads and the unpredictability of traffic, so treat transfer days as travel days rather than empty space to be optimised.",
        "Most importantly, allow Rajasthan to be contradictory. Its beauty is real; so are the crowds, inequality, noise and friction. The journey becomes richer when palaces are understood as part of a living social landscape rather than an exotic stage set. Travel with curiosity, tip fairly, ask before photographing people and buy craft from workshops able to explain who made it. The state gives extravagantly to travellers who arrive with time and attention."
      ]}
    ]
  },
  {
    slug: "new-york-for-people-who-have-done-new-york",
    title: "New York for People Who Have Already Done New York",
    destination: "New York, United States",
    region: "The Americas",
    dek: "Skip the observation decks. The city's next layer is found on ferries, at lunch counters and in neighbourhoods that do not behave like attractions.",
    excerpt: "A return visitor's New York: six neighbourhood rituals, smarter hotel bases and the pleasure of leaving Manhattan without turning the day into an expedition.",
    author: "The Hotel Life Editors",
    readTime: 13,
    date: "August 2026",
    heroImage: "/hotels/the-plaza-new-york.jpg",
    cardImage: "/hotels/the-plaza-new-york.jpg",
    hotelSlugs: ["aman-new-york", "the-plaza-new-york"],
    sections: [
      { body: [
        "The second trip to New York is often better than the first. The compulsory skyline has been admired, the museum guilt has lifted and Times Square can be crossed without mistaking it for the centre of anything. What remains is the city New Yorkers actually negotiate: a chain of neighbourhoods, each with its own appetite and hours, connected by trains that can turn twenty minutes underground into a complete change of scene.",
        "The point is not to discover a secret New York—there is no neighbourhood waiting untouched for the discerning traveller—but to exchange landmarks for rituals. Take the ferry because the river changes your sense of the city. Eat lunch at a counter. Walk a residential street with no purchase at the end. Plan one serious thing each day and let the rest accrete around it."
      ]},
      { heading: "Choose a base with a point of view", body: [
        "Midtown is efficient, but efficiency is not always the aim. Downtown places Tribeca, Chinatown, the Lower East Side and the West Village within reach; Brooklyn Heights gives you brownstone mornings and Manhattan as a skyline rather than a wall. If you stay uptown, commit to it: Central Park at first light, the Frick, the Met and long walks rather than daily subway penance.",
        "Aman New York turns the Crown Building into an inward-looking sanctuary of fireplaces, stone and extraordinary quiet. It is a powerful reset button, though its rarefied, members-club atmosphere will not suit anyone seeking street-level spontaneity. The Plaza offers mythology and Central Park at the door. For a return visit, the best hotel is not the most famous one; it is the base that makes a different version of the city inevitable."
      ]},
      { heading: "Walk lower Manhattan sideways", body: [
        "Begin on the western edge and move east without a checklist. Tribeca's cast-iron facades give way to the compressed energies of Chinatown, then to the Lower East Side's tenements and galleries. The pleasure is in the seams: a churchyard beside a luxury shop, dumplings after an immaculate espresso, a wholesale business surviving beneath new apartments.",
        "Do not turn Chinatown into a food crawl of fifteen bites. Choose one meal, sit down and notice the dining room. Then walk. Visit the Tenement Museum if you want historical structure; otherwise let Eldridge, Orchard and Division Streets supply the narrative. End with a film downtown or a drink in a room too small to have a velvet rope."
      ]},
      { heading: "See the city from its water", body: [
        "New York's ferries are among its least ostentatious luxuries. The East River route rearranges the skyline and makes the geography suddenly legible; the Staten Island Ferry provides a broad harbour crossing without the choreography of a sightseeing cruise. On a clear morning, take the NYC Ferry toward Red Hook and arrive hungry.",
        "Red Hook feels set apart because it is. Warehouses, low houses and harbour edges sit beyond the easy reach of the subway. Walk the waterfront, eat something uncomplicated and look back toward lower Manhattan. The neighbourhood is not a theme park, so check opening days before crossing and avoid building the visit around a single social-media-famous shop."
      ]},
      { heading: "Queens for one properly chosen meal", body: [
        "Queens is too large and too various to be treated as an adventurous afternoon. Choose a neighbourhood and a cuisine: Jackson Heights for South Asian, Tibetan and Latin American food; Flushing for an enormous Chinese and Korean dining landscape; Astoria for Greek cooking and a slower residential rhythm. One destination, one meal, one long walk is enough.",
        "Go with a short list but not a minute-by-minute route. Restaurants change, queues materialise and the best discovery may be a bakery next door. The 7 train itself is part of the day, running elevated through a cross-section of the borough. Return to Manhattan after dark, when the skyline appears between stations like an unsolicited cinematic effect."
      ]},
      { heading: "Upper Manhattan, without rushing back", body: [
        "The Met Cloisters is not a substitute for the Metropolitan Museum; it is a different kind of encounter. Medieval art sits within courtyards and reconstructed architectural fragments above the Hudson, surrounded by Fort Tryon Park. Give it a morning and stay for the river paths rather than immediately descending to the train.",
        "Continue into Washington Heights for Dominican lunch or walk south through Harlem, choosing a destination with care rather than treating either neighbourhood as atmosphere. The essential rule for repeat visitors is to stop commuting mentally back to Midtown. Wherever you are, be there for the day."
      ]},
      { heading: "A New York day with almost nothing in it", body: [
        "Start with coffee and the newspaper. Walk the length of a neighbourhood. See a matinee or spend two hours in one museum wing. Have an early dinner at the bar of a restaurant where a reservation would otherwise be impossible, then walk home. New York can sustain this loose structure because every block supplies incident: dogs, scaffolding, arguments, excellent tailoring, terrible signage.",
        "Leave the newest opening to people whose job requires attendance. A city this old rewards repetition more than novelty. Return to the same park bench, the same bookstore, even the same dining room. The luxury is no longer access to New York's icons. It is having enough confidence to ignore them."
      ]}
    ]
  },
  {
    slug: "lake-como-without-the-circus",
    title: "Lake Como Without the Circus",
    destination: "Lake Como, Italy",
    region: "Europe",
    dek: "The lake is still transcendent. You simply need the right shore, the first ferry and the discipline not to chase every famous villa.",
    excerpt: "Where to base, how to move and when to go for a Lake Como trip defined by gardens, swimming and long lunches rather than queues for Bellagio.",
    author: "The Hotel Life Editors",
    readTime: 12,
    date: "August 2026",
    heroImage: U("1582719478250-c89cae4dc85b", 2000),
    cardImage: U("1582719478250-c89cae4dc85b", 1000),
    hotelSlugs: ["passalacqua", "villa-deste-lake-como"],
    sections: [
      { body: [
        "Lake Como suffers from being too photogenic. The same view that once drew composers and convalescents now draws day boats, wedding parties and a continuous summer procession through Bellagio's narrow lanes. Yet the lake itself has not become less beautiful. At seven in the morning, when the surface is pewter and the first ferry cuts a white line between mountains, it can still feel startlingly private.",
        "The trick is not finding an undiscovered village. It is designing the trip around the lake's hours rather than its fame: travel in May, June or September; stay on a shore you are content to inhabit; use public ferries; and give up the notion that Como, Bellagio, Varenna and three villas belong in one day."
      ]},
      { heading: "Pick one shore", body: [
        "For ceremony and classic hotels, the western shore remains persuasive. Cernobbio is convenient to Como; Moltrasio is quieter and beautifully placed; farther north, Tremezzo and Menaggio make the central lake's ferry network easy. Varenna offers rail access and a steep, romantic village, but its compact waterfront can become intensely busy by midday.",
        "Passalacqua in Moltrasio is the intimate splurge: 24 rooms across an 18th-century villa and its outbuildings, with seven acres descending to a private jetty. Villa d'Este is larger, grander and more public in spirit. Base choice should reflect temperament. If you want dinners beyond the hotel, check the village's actual evening options before falling for a view on a booking page."
      ]},
      { heading: "Let the ferry set the pace", body: [
        "The official Navigazione Laghi timetable is the only schedule that matters. Routes change seasonally, and the fast service is not available at every stop. Build each day around one outward boat and one realistic return, keeping the last ferry in mind. Taxis are limited and road traffic around the lake can turn a short distance into an expensive hour.",
        "On the water, the geography makes sense. Villas appear in their intended composition—facade, garden, mountain—while villages reveal how impossibly they cling to the edge. The ferry is not merely transport; it is the lake's best sightseeing experience, and one of the rare Italian pleasures improved by buying a timetable."
      ]},
      { heading: "Bellagio and Varenna, before lunch", body: [
        "Bellagio deserves its reputation, just not at two in the afternoon. Take the first practical boat, walk the lanes before the day-trippers arrive and continue beyond the polished centre to Pescallo or the gardens of Villa Melzi. By lunch, leave or settle somewhere away from the main stairways and accept that the town will change character.",
        "Varenna is smaller and, in the morning, gentler. Walk the lakefront, climb toward Castello di Vezio if the weather is kind, or spend time in the gardens of Villa Monastero. Do not attempt both villages plus a major villa unless your idea of leisure includes checking your watch every twelve minutes."
      ]},
      { heading: "The gardens are the masterpieces", body: [
        "Como's villas often receive attention as celebrity houses, but their gardens contain the deeper story: centuries of money, plant collecting and theatrical manipulation of slope and view. Villa Carlotta combines art with an extraordinary botanical garden; Villa del Balbianello occupies a promontory so perfectly composed that even the crowds cannot entirely diminish it.",
        "Reserve where required and arrive at opening. Choose one garden for the day, then have lunch. The mature version of a Lake Como itinerary recognises that a two-hour meal beside the water is not time stolen from sightseeing. It is the point of travelling here."
      ]},
      { heading: "Swim, walk, disappear", body: [
        "The lake should be entered, not only photographed. Ask the hotel about safe access, water conditions and boat traffic; private pontoons and lidos make the experience simpler. A morning swim followed by breakfast can justify an otherwise empty day. So can a hired wooden boat, though a public ferry delivers much of the visual pleasure for a fraction of the theatre.",
        "Walk above the water when temperatures permit. Old mule paths connect villages and reveal terraces, chapels and working gardens invisible from the road. The Greenway del Lago is the best-known route, but hotel staff can suggest shorter sections. Proper shoes matter: lakeside glamour has never improved wet stone steps."
      ]},
      { heading: "When the lake works", body: [
        "Late spring has gardens at their most expressive and long evenings without midsummer's full pressure. September brings warm water and softer light; October can be lovely but services begin to contract. July and August are possible if you accept heat, traffic and reservations as the price of entry. Winter is atmospheric, quiet and very limited.",
        "Four nights is the minimum; five or six allows weather to intervene without ruining the trip. Schedule one garden day, one central-lake ferry day and one day for nothing ambitious. Lake Como becomes exquisite again the moment you stop trying to collect it."
      ]}
    ]
  },
  {
    slug: "mexicos-pacific-coast-punta-mita-mandarina",
    title: "Mexico's Pacific Coast: Punta Mita, Mandarina and Beyond",
    destination: "Riviera Nayarit, Mexico",
    region: "The Americas",
    dek: "North of Puerto Vallarta, the coast moves from polished peninsula to jungle reserve, surf town and wide, empty beach.",
    excerpt: "A clear-eyed route through Riviera Nayarit, explaining which enclave fits whom—and why the best trip pairs resort seclusion with a town that has a life of its own.",
    author: "The Hotel Life Editors",
    readTime: 12,
    date: "August 2026",
    heroImage: U("1506905925346-21bda4d32df4", 2000),
    cardImage: U("1506905925346-21bda4d32df4", 1000),
    hotelSlugs: ["one-and-only-mandarina"],
    sections: [
      { body: [
        "The coast north of Puerto Vallarta is frequently sold as one seamless strip of sun, but its enclaves have very different personalities. Punta Mita is groomed and residential, Mandarina folds architecture into dense jungle, Sayulita is busy and social, while San Pancho settles into something slower and more community-minded. Choosing correctly matters more than choosing the grandest room.",
        "A week works best when it holds two tempos: several days inside an exceptional resort, followed by—or preceded by—a town where dinner requires walking past a plaza and where the beach is shared rather than managed. Trying to sample every stop turns a languid coast into a sequence of transfers."
      ]},
      { heading: "Punta Mita: polish and predictability", body: [
        "Punta Mita is a gated peninsula designed for travellers who want golf, villas, swimmable coves and restaurants without logistical friction. It excels for multigenerational groups because the infrastructure is legible and the days require little negotiation. It is also the coast's least spontaneous expression; a stay can pass without much contact with the surrounding region.",
        "Choose it when ease is the luxury. Confirm whether a villa includes club access, which beach clubs are available and how much a car will be needed. The distinction between Punta Mita, the private development, and Punta de Mita, the adjacent village, is small on a map and meaningful in practice."
      ]},
      { heading: "Mandarina: the jungle proposition", body: [
        "Mandarina is about immersion rather than a conventional beach holiday. One&Only's villas and treehouses sit among rainforest, cliffs and ridges above the Pacific, many with private plunge pools and enough vegetation to make neighbours disappear. The landscape supplies drama; the resort's architecture tries to stay subordinate to it.",
        "The trade-off is movement. The terrain is extensive and steep, so buggies become part of daily life, and room position materially affects convenience and view. Book Mandarina for privacy, riding, spa time and the sensation of waking in green canopy. If the only criterion is stepping from bed onto a broad swimming beach, ask detailed questions before selecting a category."
      ]},
      { heading: "Sayulita, selectively", body: [
        "Sayulita's surf-town image remains true in outline and complicated in reality. It is colourful, energetic and dense with restaurants, bars, boutiques and visitors. Arrive early for a lesson or walk, eat well, and recognise that anyone seeking empty sand and silence has come to the wrong place.",
        "The town can be a useful burst of energy between resort days, but it need not be the default base. Traffic and crowds peak on weekends. Travellers drawn by photographs of a sleepy fishing village should recalibrate; Sayulita's appeal now lies in its exuberance, not its secrecy."
      ]},
      { heading: "San Pancho and the farther coast", body: [
        "San Francisco—universally called San Pancho—offers a more measured alternative, with a central street running to a broad beach and a cultural life that feels rooted beyond tourism. It is not undiscovered, but evenings retain a local rhythm. Stay in a small hotel, walk to dinner and let one day remain entirely unplanned.",
        "Farther north, Chacala and the coast toward San Blas reward travellers willing to give up polish for space, seafood and a more elemental Pacific. Infrastructure thins, journey times expand and mosquitoes become part of the conversation. The reward is a shoreline no longer arranged as a resort product."
      ]},
      { heading: "Eat beyond the tasting menu", body: [
        "Resort kitchens along the coast are increasingly ambitious, but the region's essential meals are often simpler: fish shaken off the grill, aguachile sharpened with lime and chile, tacos eaten while still standing. Ask where cooks eat on their day off and spend money in independent restaurants as well as inside the gates.",
        "Be thoughtful with seafood. Seasons and local pressures change, and a responsible kitchen should be able to explain what it is serving. A long lunch under a palapa, with the Pacific audible beyond the tables, will usually outlast the memory of an elaborate imported-ingredient dinner."
      ]},
      { heading: "How to arrange the week", body: [
        "Puerto Vallarta's airport is the practical gateway. Transfer times depend heavily on traffic, and roads north can slow at weekends, so do not book a tight flight after a leisurely final lunch. Four nights at Mandarina or Punta Mita followed by three in San Pancho is balanced; reverse the order if you prefer the resort as a soft landing at the end.",
        "November to April brings dry, popular weather; summer is greener, hotter and wetter. Whale season adds another reason to come in winter, with responsible operators maintaining distance. Wherever you stay, remember that the coast is not a collection of hotel compounds. The journey becomes more memorable the moment the gates open."
      ]}
    ]
  },
  {
    slug: "kyoto-at-the-quiet-hours",
    title: "Kyoto at the Quiet Hours",
    destination: "Kyoto, Japan",
    region: "Asia",
    dek: "The city has not lost its grace; it has lost the middle of the day. See it at dawn, after dinner and in the spaces between the famous temples.",
    excerpt: "A humane Kyoto itinerary built around early starts, late walks, respectful behaviour and neighbourhoods that still breathe when the headline sights become congested.",
    author: "The Hotel Life Editors",
    readTime: 13,
    date: "August 2026",
    heroImage: U("1540959733332-eab4deabeeaf", 2000),
    cardImage: U("1540959733332-eab4deabeeaf", 1000),
    hotelSlugs: ["park-hyatt-kyoto"],
    sections: [
      { body: [
        "Kyoto's beauty has become a scheduling problem. At noon, the lanes below Kiyomizu-dera can feel less like a preserved city than a queue with tiled roofs. At six in the morning, the same stone is damp, shop shutters are closed and a monk on a bicycle may be the only person moving. Nothing about the architecture has changed. The hour has changed everything.",
        "A good Kyoto visit now depends on accepting an unusual rhythm: one major sight at opening, a quiet middle devoted to gardens, lunch or rest, and a return to the streets after the day groups leave. This is not a trick for beating other travellers. It is a way of reducing pressure on residential districts while recovering the contemplative quality the city deserves."
      ]},
      { heading: "Stay where dawn is useful", body: [
        "Higashiyama is the strategic choice for walkers. Park Hyatt Kyoto sits low against the slope near Kodaiji, with 70 rooms and the old lanes immediately outside. Before breakfast, Ninenzaka and Sannenzaka belong to residents, delivery workers and the occasional disciplined traveller. By nine, the transformation is complete.",
        "Downtown is better for restaurants, transport and evening energy; Arashiyama makes sense only if bamboo groves and western temples are central to the trip. Wherever you book, plot the first two hours of each day before arrival. A beautiful hotel can become an obstacle if leaving it requires crossing the city at rush hour."
      ]},
      { heading: "The eastern hills before breakfast", body: [
        "Walk to Kiyomizu-dera near opening, then descend slowly through the preserved slopes. Do not stage photographs in doorways or obstruct the lane for costume portraits. Continue toward Kodaiji, Kennin-ji or the southern end of the Philosopher's Path, choosing one temple to enter properly rather than collecting every gate.",
        "Gion is a living neighbourhood, not an open-air studio. Private lanes and photography restrictions should be respected, and geiko or maiko going to work are not public performers. The most meaningful encounters with Kyoto's arts are arranged—an evening performance, a tea experience led with context—not snatched with a camera."
      ]},
      { heading: "Use midday differently", body: [
        "When the famous precincts fill, retreat. Visit a museum, reserve a long lunch, spend an hour in a temple garden away from the central axis or return to the hotel. Kyoto rewards the ability to sit still: moss after rain, a screen painting in a dim room, the sound of a ladle at a basin.",
        "Head west to Nishiyama for a broader, less compressed landscape. Temples such as Yoshimine-dera demand more effort than central favourites and return it in mountain views and space. Public transport reaches farther than first-time visitors imagine, though a taxi used judiciously can preserve an afternoon."
      ]},
      { heading: "Arashiyama beyond the bamboo photograph", body: [
        "The bamboo grove is atmospheric at first light and a pedestrian channel soon after. Go early, then keep walking into Sagano, where small temples, gardens and residential lanes disperse the crowd. Okochi Sanso's garden offers a more satisfying sense of landscape than another pass through the central grove.",
        "Cross the river only if the rest of Arashiyama interests you. The district repays a full morning, not a taxi in, photograph and taxi out. In autumn and spring, assume extreme pressure and have a second plan. Kyoto is large enough that abandoning one celebrated view can lead to a better day."
      ]},
      { heading: "Eat with reservations—and humility", body: [
        "Kyoto's formal cooking can be one of travel's great experiences, but a meal should not become a test of access. Ask a trusted hotel concierge well ahead for one kaiseki dinner, then balance it with soba, tofu cuisine, grilled chicken, a market lunch and the quiet precision of a neighbourhood counter.",
        "Respect cancellation rules and arrive on time. Small restaurants may have only a handful of seats and no capacity to absorb a late table. Nishiki Market is best treated as a working food street rather than an all-you-can-sample attraction: eat where invited, do not walk while spilling food and notice what residents are buying."
      ]},
      { heading: "After dark", body: [
        "Kyoto regains mystery after dinner. Walk Shirakawa's canal, the outer paths of Yasaka Shrine or the Kamo River, where students and couples occupy the banks. Seasonal temple illuminations can be beautiful but heavily attended; a simple unlit lane often holds more atmosphere.",
        "Bars tend to be small, personal and difficult to decode from the street. Enter with courtesy, accept that not every door has room and let the bartender set the pace. The city's nightlife is not Tokyo miniaturised. Its best rooms feel closer to private studies with very good whisky."
      ]},
      { heading: "The sensible season", body: [
        "Cherry blossom and peak autumn colour are glorious and punishing. If those seasons matter deeply, book early and accept crowds without resentment. Late May, the rainy weeks of June and early winter can deliver softer rates, vivid gardens and more breathing room. Summer is hot and humid, though festival season has its own intensity.",
        "Stay four nights at minimum and five if the budget permits. Do not attach Kyoto as a one-night historical appendix to Tokyo. Wake early, take the afternoon slowly and walk again at night. The quiet city is still present; it simply keeps different hours now."
      ]}
    ]
  },
  {
    slug: "french-polynesia-decoded",
    title: "French Polynesia, Decoded: Choosing the Right Island",
    destination: "French Polynesia",
    region: "The Americas",
    dek: "Bora Bora is not the only answer. Match the island to the trip you actually want, then accept that the distances are part of the experience.",
    excerpt: "Tahiti, Moorea, Bora Bora, Taha'a, Huahine, Tetiaroa and the Tuamotus compared—with honest guidance on transfers, overwater villas and the cost of getting paradise wrong.",
    author: "The Hotel Life Editors",
    readTime: 14,
    date: "August 2026",
    heroImage: U("1514282401047-d79a71a590e8", 2000),
    cardImage: U("1514282401047-d79a71a590e8", 1000),
    hotelSlugs: ["the-brando"],
    sections: [
      { body: [
        "French Polynesia is often compressed into one image: an overwater villa, a hard blue lagoon and the volcanic silhouette of Bora Bora. The reality is 118 islands and atolls scattered over an area of ocean comparable in scale to a continent. Picking an island is therefore not a matter of ranking beauty. It is deciding how much culture, landscape, diving, privacy and logistical complexity you want around the lagoon.",
        "For a first trip, resist the urge to collect four islands in ten days. Flights may be short, but transfers consume mornings and weather has opinions. Two islands over nine or ten nights creates contrast without turning paradise into baggage handling. Three works over two full weeks."
      ]},
      { heading: "Tahiti: not merely the airport", body: [
        "Tahiti is the largest island and the cultural and administrative centre. Papeete's market, roulotte food trucks and waterfront provide an urban Polynesian context absent from self-contained resorts. Beyond the capital, the island turns lush and muscular: waterfalls, surf breaks, black-sand beaches and the quieter Taiarapu peninsula.",
        "Spend a night on arrival when the international schedule requires it, but consider two if food, history and contemporary culture matter. Travellers who flee directly to a private motu often leave with immaculate lagoon photographs and surprisingly little understanding of where they have been."
      ]},
      { heading: "Moorea: the best all-rounder", body: [
        "Moorea rises dramatically across the channel from Tahiti and combines mountain adventure, an accessible lagoon and a life beyond resort gates. You can hike, visit agricultural producers, snorkel, drive the island and still spend an afternoon doing absolutely nothing. Ferry access makes it the least complicated outer-island pairing with Tahiti.",
        "Choose Moorea for a honeymoon that needs activity, a first trip with limited time or a family holiday where everyone wants a different day. It has overwater bungalows, but they are not the island's only logic. A hillside or beachfront room can offer more privacy and a stronger relationship with the landscape for less money."
      ]},
      { heading: "Bora Bora: the maximal lagoon", body: [
        "Bora Bora remains extraordinary. Its central mountain and encircling reef create a lagoon of improbable gradations, and the best resorts position villas to face Mount Otemanu like theatre seats. For travellers seeking the archetypal honeymoon, it delivers with almost unnerving efficiency.",
        "It is also expensive, resort-dominated and more managed than romantic imagery suggests. Room orientation matters; so do boat-transfer fees and meal-plan prices. Three or four nights is often enough unless the purpose is total retreat. Pair it with an island that has roads, villages and a less perfected surface."
      ]},
      { heading: "Taha'a and Huahine: slower rewards", body: [
        "Taha'a shares a lagoon with Raiatea and is scented, quite literally, by vanilla plantations. Resorts tend toward intimacy, days toward boats and meals toward the island's produce. It suits couples who want a polished stay with less spectacle around it, and sailors drawn to the sacred and navigational history of neighbouring Raiatea.",
        "Huahine feels more independent and agricultural, with archaeological sites, fish traps, deep green interiors and a pace that resists over-programming. Accommodation is generally less extravagant. Choose it not as a cheaper Bora Bora, but because you prefer an island whose life remains more visible than its luxury inventory."
      ]},
      { heading: "Tetiaroa: privacy with a serious price", body: [
        "Tetiaroa is an atoll reached by private aircraft from Tahiti and largely synonymous with The Brando. Its 35 villas sit on a private motu within a landscape managed alongside scientific and conservation work. The privacy is real, the ecological systems more substantive than the usual resort gestures and the price correspondingly formidable.",
        "Come for seclusion, birdlife, a beautiful lagoon and an all-inclusive structure that removes daily calculation. Do not come expecting town life or endless restaurant choice. Tetiaroa is the culmination of a trip, not an introduction to Polynesia; pair it with Tahiti or Moorea so the experience has cultural depth as well as exquisite isolation."
      ]},
      { heading: "The Tuamotus: for the water", body: [
        "Rangiroa and Fakarava replace volcanic drama with immense atoll geometry. The land is almost a line; the ocean is the event. Divers come for passes alive with sharks, rays and pelagic species, while non-divers need to be genuinely content with snorkelling, cycling, reading and watching weather move across a flat horizon.",
        "Standards of luxury vary and that is part of the appeal. Fakarava's biosphere and village scale reward travellers who can relinquish the serviced choreography of Bora Bora. Build in buffer time: when a small aircraft and a wide ocean are involved, rigidity is not a useful travel style."
      ]},
      { heading: "The overwater-villa question", body: [
        "Book one if the dream matters, but do not assume it is categorically the best room. Overwater villas can have less shade, more wind, a longer walk to breakfast and surprisingly little visual privacy. Beach villas often offer gardens, easier swimming and a larger pool. Split the stay if possible: two or three nights over water, then a room with land beneath it.",
        "Check the sun direction, prevailing wind, reef depth and exact view. Ask whether the lagoon beneath the villa is swimmable at all tides. The phrase 'overwater' describes construction, not experience, and price alone does not correct a poor orientation."
      ]},
      { heading: "Money, seasons and the right combination", body: [
        "The local currency is the CFP franc. Resort meals, transfers and excursions accumulate quickly, so compare the complete trip rather than the headline room rate. May through October is generally drier and busier; the warmer wet season brings humidity, showers and richer vegetation. Conditions vary across archipelagos, and tropical weather resists guarantees.",
        "For a first ten-night journey, choose Tahiti plus Moorea and Bora Bora, or Moorea plus Tetiaroa if privacy outranks the icon. For two weeks, add Huahine, Taha'a or a Tuamotu according to interest. French Polynesia is too distant and too expensive to be treated like an island leaderboard. Choose the contrast that will give the journey a narrative."
      ]}
    ]
  }
];
