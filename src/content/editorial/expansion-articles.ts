import type { Article } from "../articles";

const U = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const expansionArticles: Article[] = [
  {
    slug: "hotel-breakfast-has-lost-the-plot",
    title: "The Hotel Breakfast Has Lost the Plot",
    kicker: "The Edit",
    dek: "Luxury was never meant to be 64 uncovered dishes, lukewarm eggs and a queue at the coffee machine. It is time to make breakfast smaller—and much better.",
    excerpt: "The grand hotel buffet has confused quantity with generosity for too long. A defence of short menus, proper coffee and breakfast cooked for the person who ordered it.",
    author: "Shivam Sood",
    readTime: 10,
    date: "August 2026",
    heroImage: U("1520250497591-112f2f40a3f4", 2000),
    cardImage: U("1520250497591-112f2f40a3f4", 1000),
    hotelSlugs: ["claridges-london", "passalacqua", "aman-tokyo"],
    featured: true,
    sections: [
      { body: [
        "Hotel breakfast used to be a promise: the day would begin before you were required to make a decision. Somewhere along the way, that promise became a trade exhibition. There are six kinds of milk, an omelette station flashing pagers, pastries sweating under lamps and a refrigerated wall of fruit that tastes of absolutely nothing. Everybody is offered everything; very little arrives at its best.",
        "The buffet survives because abundance photographs well and procurement departments understand it. But abundance is not the same as generosity. Generosity is coffee arriving while it is still hot, toast appearing with the eggs rather than nine minutes before them, and a waiter noticing that a guest with a notebook may prefer not to hear a speech about the yoghurt."
      ]},
      { heading: "The theatre of plenty", body: [
        "A vast buffet tells us that luxury means exemption from limits. It performs choice even when nobody wants to choose between three nearly identical bowls of melon. The cost is sensory clutter and food held at the wrong temperature, replenished for appearance rather than appetite. By ten-thirty, the display has become a portrait of excess waiting to be cleared.",
        "Food-waste research in hospitality repeatedly identifies buffets as a difficult format because production precedes demand. The moral problem matters, but so does the aesthetic one. Nothing feels less luxurious than watching trays of untouched food being wheeled away. A hotel asking guests to reuse towels while maintaining a breakfast landscape of routine surplus has misunderstood the hierarchy of its own impacts."
      ]},
      { heading: "The egg-station indignity", body: [
        "The live egg station is sold as personalisation. In practice, it makes the guest leave the table, repeat a room number, negotiate fillings and hover near a pan while companions begin eating. A perfectly staffed dining room has outsourced the most important breakfast item to a queue.",
        "Eggs are also the clearest test of a kitchen because they tolerate no holding. Cooked to order and carried directly to the table, they reveal timing, seasoning and attention. Displayed under a silver dome, they reveal only that the hotel had predicted your appetite before you arrived."
      ]},
      { heading: "What a great breakfast actually needs", body: [
        "The ideal menu is short enough to read once. One excellent local dish, one egg preparation, something warm and grain-based, fruit that belongs to the season, bread made or sourced with conviction, and coffee served by somebody who knows the difference between speed and haste. Add a small cold table if you must, but let every item earn its square inch.",
        "Regional identity matters more in the morning than another approximation of international brunch. Congee in Hong Kong, dosa in South India, grilled fish and rice in Japan, pan con tomate in Spain: these foods make a hotel specific. The global buffet, by contrast, creates the same room from Bangkok to Berlin, complete with an apologetic corner labelled 'local'."
      ]},
      { heading: "The room is part of the meal", body: [
        "Breakfast rooms are frequently designed for photographs taken at noon, not for human beings who have just woken. Music is too loud, tables are too close and the lighting could interrogate a suspect. A great room has daylight, acoustic softness and enough spacing that a solo guest can read without becoming the subject of the next table's conversation.",
        "Service should be alert but not aggressively cheerful. The morning traveller needs competence before personality: water, coffee, an explanation only when requested and a bill that does not require a search party. Hotels speak endlessly about intuitive service, yet breakfast is where intuition most often clocks in late."
      ]},
      { heading: "In defence of breakfast in bed", body: [
        "Room service is the legitimate alternative when it behaves like a meal rather than a delivery. The tray should fit the room, the coffee should be insulated and someone should explain how it will be collected. A small table by the window can turn jet lag into privacy; a trolley abandoned in the corridor turns it into housekeeping's problem.",
        "Hotels often price this pleasure as if toast has travelled business class. A modest delivery charge is understandable. A sequence of service fees, tray fees and discretionary gratuities attached to two eggs is antagonistic. If breakfast is included downstairs, a sensible supplement upstairs would make the room feel more luxurious while reducing pressure on the buffet."
      ]},
      { heading: "Smaller can feel more generous", body: [
        "The best breakfast I can imagine is not maximal. It is assured. It knows the farm that supplied the yoghurt, the baker who started at four and the precise minute a soft-boiled egg becomes firm. It offers enough, replenishes willingly and never turns restraint into stinginess.",
        "Hotels should retire the language of 'lavish spreads' and compete on execution. Publish a concise menu, measure waste, cook more things on demand and allow guests to ask for another plate without shame. Luxury has always depended on making difficult things appear simple. Sixty-four breakfast dishes do the opposite: they make a simple meal look exhausting."
      ]}
    ]
  },
  {
    slug: "room-service-club-sandwich-test",
    title: "The Room-Service Test: What One Club Sandwich Reveals About a Hotel",
    kicker: "Field Notes",
    dek: "It is not the glamorous order. That is precisely why the club sandwich remains hospitality's most efficient stress test.",
    excerpt: "Bread, chicken, bacon, lettuce and a promised delivery time: the ordinary room-service order that exposes a hotel's kitchen, communication and care.",
    author: "Shivam Sood",
    readTime: 9,
    date: "August 2026",
    heroImage: U("1445019980597-93fa8acb246c", 2000),
    cardImage: U("1445019980597-93fa8acb246c", 1000),
    hotelSlugs: ["aman-new-york", "capella-bangkok", "the-plaza-new-york"],
    sections: [
      { body: [
        "The club sandwich is not the most interesting thing on a room-service menu, and that is its strength. It cannot hide behind rarity, tableside smoke or a chef's biography. Nearly every international hotel knows the form: toasted bread, chicken, bacon, lettuce, tomato and mayonnaise, cut into triangles and secured with the little architectural stakes of a cocktail stick.",
        "Order it late, tired and hungry, and an entire hotel operation comes into focus. Does someone answer? Is the promised time believable? Does the tray arrive warm, complete and arranged for eating in the room the hotel actually designed? The sandwich is merely the payload. The test is everything around it."
      ]},
      { heading: "First, can you order it?", body: [
        "A QR code is not automatically progress. If it loads quickly, remembers the room and permits a simple modification, fine. If it opens a tiny PDF, demands an account and hides the closing time, the hotel has transferred administrative labour to a guest in pyjamas. A telephone answered by a calm human remains an excellent technology.",
        "The person taking the order should know the menu, repeat dietary requests and provide a realistic delivery window. 'As soon as possible' is not a time. Thirty-five minutes that becomes thirty is hospitality; twenty minutes that becomes fifty is a broken promise wearing optimism."
      ]},
      { heading: "The sandwich itself", body: [
        "The bread must be toasted enough to support three layers but not so hard that it shatters. Chicken should taste roasted rather than refrigerated, bacon should retain structure and tomato should be ripe enough to justify inclusion. The lettuce has one job—cold, clean snap—and fails it surprisingly often. Mayonnaise belongs in the sandwich, not in plastic sachets arranged like medical supplies.",
        "A club is a lesson in proportion. Too tall and it becomes a social-media prop impossible to eat; too thin and the price feels insulting. The finest versions are compact, seasoned and generous without requiring the diner to unhinge a jaw. Chips or fries must travel separately enough to remain crisp, a small logistical choice with enormous consequences."
      ]},
      { heading: "Read the tray", body: [
        "Room service reveals whether designers and operators have met. Is there a table at dining height? Does the trolley clear the armchair? Can the cloche be removed without relocating a laptop? A suite full of sculptural furniture may have nowhere to eat, which is how a guest ends up balancing dinner on a luggage rack beneath a commissioned artwork.",
        "The tray needs water, proper napkins, salt and pepper, the requested condiments and cutlery that does not arrive imprisoned in layers of plastic. Small wasteful abundance is not care. One complete, considered setting is care."
      ]},
      { heading: "Temperature is management", body: [
        "A warm sandwich and cold lettuce sound simple until they must travel from a basement kitchen through service corridors and lifts to the twenty-eighth floor. Temperature records the quality of that journey. Lukewarm fries may indicate distance, poor packaging, a delayed lift or an order left waiting for the cheque. The guest does not need to diagnose which one.",
        "Great hotels design backward from the room: menus are edited for travel, routes are timed and covers are not released before a runner is ready. The room-service chef is not cooking restaurant food and putting a lid on it. The chef is cooking for a different dining room, one that moves."
      ]},
      { heading: "The morning-after problem", body: [
        "Every tray eventually becomes an object nobody wants. The hotel should state how it will be collected and provide a frictionless method—a call, message or discreet scheduled pickup. Guests should not place dishes in corridors, but hotels that leave no alternative virtually invite it.",
        "A breakfast trolley beside the lift at three in the afternoon is more than untidy. It tells every arriving guest that departments are not speaking to one another. The final act of room service is removal, and the service is not complete until the room is a bedroom again."
      ]},
      { heading: "Why the ordinary order matters", body: [
        "Any kitchen can pay attention to caviar. The club sandwich asks whether the hotel can bring the same discipline to an order it has made a thousand times. Familiarity creates shortcuts; great operations turn repetition into consistency.",
        "The test is not whether the sandwich conforms to one sacred recipe. Local departures can be delightful: excellent regional bread, a sharp house pickle, chicken cooked with the kitchen's own accent. What matters is intention. At midnight, the traveller does not need culinary innovation. The traveller needs the reassuring evidence that somebody, somewhere below, still cares."
      ]}
    ]
  },
  {
    slug: "new-luxury-is-being-left-alone",
    title: "The New Luxury Is Being Left Alone",
    kicker: "Opinion",
    dek: "Not coldness, not neglect: the rare and sophisticated service of knowing exactly when to disappear.",
    excerpt: "Hotels have overcorrected from formality into compulsory friendship. The most intelligent service now reads boundaries, protects silence and does not require performance from the guest.",
    author: "Shivam Sood",
    readTime: 10,
    date: "August 2026",
    heroImage: U("1571003123894-1f0594d2b5d9", 2000),
    cardImage: U("1571003123894-1f0594d2b5d9", 1000),
    hotelSlugs: ["aman-tokyo", "the-brando", "six-senses-fort-barwara"],
    sections: [
      { body: [
        "Luxury hospitality has become very interested in friendship. Staff introduce themselves, explain their passions, ask what brings you here and sometimes sit down to take the order. A host messages before arrival, a butler appears after check-in and a 'curator' would like to know how the day made you feel. The intention is warmth. The result can be a holiday with the social obligations of a small wedding.",
        "The most sophisticated service is not invisible; it is adjustable. It can be gracious and expansive when a guest seeks connection, then recede without injury when the answer is a book, a bath and no conversation at all. Being left alone is not the absence of hospitality. Done properly, it is hospitality's highest form."
      ]},
      { heading: "The burden of being delighted", body: [
        "Hotels increasingly stage moments that require a response: petals spelling a message, desserts celebrating no occasion, tours of features the guest can plainly see. Each gesture asks the recipient to be appropriately moved. The traveller who wanted quiet now has a second job—reassuring the hotel that the hotel is doing wonderfully.",
        "Surprise is valuable when it solves a need or expresses genuine knowledge. It becomes theatre when deployed by checklist. A pot of the tea someone ordered yesterday is personal. A bath full of flowers that prevents anyone from using the bath is content production."
      ]},
      { heading: "Privacy is an operational skill", body: [
        "Real privacy begins with architecture—soundproofing, sightlines, entrances and outdoor spaces that do not face another villa—but it depends equally on operations. Housekeeping should not knock three times a day to offer services already declined. Pool staff should see an empty glass without opening a conversation. Technology should communicate preference, not produce more notifications.",
        "A 'do not disturb' sign must be treated as an instruction, not the opening move in a negotiation about turndown. The great hotel makes every service easy to summon and equally easy to refuse."
      ]},
      { heading: "Personalisation without surveillance", body: [
        "There is a line between remembering and monitoring. Knowing a returning guest prefers still water feels hospitable. Mentioning a detail extracted from social media feels invasive. As hotels collect more data, the temptation is to display knowledge as proof of care; restraint becomes as important as accuracy.",
        "The useful preferences are practical and volunteered: allergies, pillow firmness, communication channel, housekeeping time. The rest belongs to the guest. Personalisation should remove repetition, not reveal the size of a profile assembled backstage."
      ]},
      { heading: "Quiet has become a travel motive", body: [
        "Recent travel research from major hotel and booking companies points toward rest, solo time and lower-stimulation stays as explicit desires. The trend has acquired the ungainly name 'hushpitality', but the impulse is older: cities are loud, work is porous and many travellers are paying not to be entertained.",
        "Hotels respond by marketing silent breakfasts and phone-free spaces, then undermine them with pool DJs and constant programming. Quiet cannot be scheduled at eleven-thirty by the spa. It must survive the lift, corridor, restaurant and room."
      ]},
      { heading: "Service that can read the room", body: [
        "The ideal staff member offers one clear opening and notices the response. A short answer, headphones or eyes returning to a page are not discourtesy; they are information. Training should value this perception as highly as name use and product knowledge.",
        "This does not mean a return to icy formality. Warmth can exist in a sentence. Care can be expressed by placing water within reach, fixing a problem without narrating the fix and remembering not to ask the same question twice. The guest should feel held, not handled."
      ]},
      { heading: "The luxury of no", body: [
        "The best hotels give guests permission to decline. No turndown, no tour, no welcome ritual, no need to explain dinner plans. They understand that an empty itinerary is not a service gap waiting to be filled.",
        "Hospitality is often defined as making someone feel at home, but home is the place where silence requires no justification. The new luxury is a hotel attentive enough to know you are there and secure enough not to keep proving it."
      ]}
    ]
  },
  {
    slug: "can-a-hotel-be-sustainable-at-2000-a-night",
    title: "Can a Hotel Be Sustainable at $2,000 a Night?",
    kicker: "The Big Question",
    dek: "The bamboo toothbrush is not the answer. Luxury hotels need to disclose what they build, power, source and protect—and guests need to look beyond the linen card.",
    excerpt: "A clear-eyed examination of high-end hospitality's environmental claims, from embodied carbon and water to conservation funding and the inconvenient fact of the flight.",
    author: "Shivam Sood",
    readTime: 12,
    date: "August 2026",
    heroImage: U("1514282401047-d79a71a590e8", 2000),
    cardImage: U("1514282401047-d79a71a590e8", 1000),
    hotelSlugs: ["the-brando", "fogo-island-inn", "soneva-fushi-maldives"],
    sections: [
      { body: [
        "A two-thousand-dollar hotel room is an awkward place to discuss restraint. It may contain a private pool, an outdoor shower, imported stone and enough conditioned air for a small house. The guest may have crossed an ocean to reach it. Then, on the bedside table, a card requests that towels be reused for the planet.",
        "The contradiction is real, but it does not make the question pointless. Expensive hotels control large capital budgets, influential supply chains and ecologically valuable land. They can consume extravagantly, or they can fund systems and conservation work that smaller properties cannot. Price does not make a hotel sustainable. It can, however, remove many excuses for failing to try."
      ]},
      { heading: "Start with the building", body: [
        "The greenest conversation begins before opening day. Demolition, concrete, steel, glass and imported finishes carry embodied emissions that no refillable bottle can erase. Reusing an existing structure, building at lower density and designing for climate can matter more than a decade of guest-facing gestures.",
        "A hotel should be able to explain orientation, shading, ventilation, materials and habitat disturbance in plain language. If sustainability appears only in the bathroom amenities section of the website, it is probably decoration rather than design."
      ]},
      { heading: "Energy and water are the unglamorous truth", body: [
        "Air-conditioning, hot water, laundry, kitchens and pools create the daily footprint. Serious properties measure them, set reduction targets and publish progress against a baseline. Renewable electricity matters, as do efficient systems and the operational discipline to maintain them after the launch photographs are taken.",
        "Water deserves particular scrutiny in dry regions and on small islands. Private pools, golf courses and irrigated landscapes can place luxury consumption beside community scarcity. Ask where water comes from, how wastewater is treated and whether landscaping belongs to the climate. A desert lawn is not made responsible by a wooden room key."
      ]},
      { heading: "Food, waste and the supply chain", body: [
        "A kitchen's impact lies in what it buys, how far it travels and how much is discarded. Shorter menus, seasonal sourcing, plant-forward dishes and rigorous measurement of waste are more meaningful than a 'farm-to-table' label beside imported berries. Local sourcing must also mean fair contracts, not simply placing a nearby farmer in the brochure.",
        "Waste systems should extend beyond eliminating single-use plastics. Construction debris, food, glass, chemicals and discarded furniture all matter. The honest hotel can explain where these streams go; the evasive one offers a beach clean-up as an activity for guests."
      ]},
      { heading: "Conservation or beautiful enclosure?", body: [
        "Remote resorts often occupy landscapes with enormous ecological value. Their presence can fund scientific work, habitat protection and anti-poaching efforts, but it can also privatise access and disrupt the very ecosystems used in marketing. Credibility depends on independent expertise, measurable outcomes and long-term governance beyond the hotel's public-relations cycle.",
        "The Brando on Tetiaroa offers a useful case: solar power, seawater air-conditioning, a research partnership and conservation programmes are integral to the operation. It remains a far-flung luxury resort reached after long-haul travel. Both statements can be true. Sustainability begins with tolerating that discomfort."
      ]},
      { heading: "People belong in the definition", body: [
        "A hotel cannot credibly protect a reef while underpaying the people who maintain it. Employment conditions, training, local leadership, housing and procurement determine whether tourism value remains in the destination. Cultural performances are not community benefit if the underlying economic relationship is extractive.",
        "Guests can ask who owns the hotel, where senior managers come from and how local businesses participate. The answers will be imperfect. Transparency is more persuasive than a flawless narrative, because no large hospitality operation is impact-free."
      ]},
      { heading: "And then there is the flight", body: [
        "For many luxury trips, aviation dominates the footprint. A resort cannot solve that fact with on-property composting, and carbon offsets should not be treated as permission slips. Travellers can take fewer, longer trips; avoid unnecessary private aviation; choose rail where practical; and support credible climate action without pretending the emissions disappeared.",
        "The hotel still has responsibility for everything it controls. The flight does not excuse wasteful construction any more than an efficient building erases the flight. Mature environmental accounting resists the comfort of one villain."
      ]},
      { heading: "A better set of questions", body: [
        "Ignore the absence of plastic straws for a moment. Ask for energy and water intensity, renewable share, waste diversion, building certifications with scope, conservation outcomes and workforce data. Look for recognised criteria and public reporting, then read the fine print: a certified spa is not a certified resort.",
        "Can a hotel be sustainable at $2,000 a night? Not in the sense of leaving no trace. It can be vastly more responsible than its peers, restore more than it occupies and use the rate to finance better systems. At that price, ambition should not be optional—and neither should proof."
      ]}
    ]
  },
  {
    slug: "why-every-luxury-hotel-looks-the-same",
    title: "Why Every Luxury Hotel Now Looks the Same",
    kicker: "Design",
    dek: "Bouclé, travertine, fluted timber, one enormous olive tree: the global good-taste machine has made hotels beautiful, expensive and strangely placeless.",
    excerpt: "Inside the beige convergence of contemporary hotel design—and a plea for rooms that could only exist in the city outside them.",
    author: "Shivam Sood",
    readTime: 11,
    date: "August 2026",
    heroImage: U("1590490360182-c33d57733427", 2000),
    cardImage: U("1590490360182-c33d57733427", 1000),
    hotelSlugs: ["rosewood-sao-paulo", "la-mamounia", "the-datai-langkawi"],
    sections: [
      { body: [
        "You know the lobby before the taxi door opens. There will be limestone in a warm, difficult-to-name shade; rounded sofas upholstered in bouclé; fluted oak; black-framed glass; an olive tree older than the building; and a fragrance that suggests cedar without committing to a forest. The bar playlist will sound expensive and impossible to remember.",
        "This is the international language of contemporary luxury, perfected by algorithms, procurement catalogues and a thousand saved images. It is handsome. It is calming. It has also made hotels in Lisbon, Los Angeles and Singapore look as though the same tasteful person moved house three times and forgot to unpack."
      ]},
      { heading: "How good taste became a supply chain", body: [
        "Hotel design operates under brutal practical demands. Materials must survive luggage, cleaning chemicals and guests who treat furniture as gym equipment. Global brands need reliable suppliers, investors need recognisable value and renderings need to secure approval before a single local craftsperson is hired. Standardisation is not simply creative laziness; it is risk management.",
        "Social media then compresses the field further. A photogenic arch or sculptural staircase travels farther than a subtle plan, so the elements that perform well are repeated. Inspiration becomes reference, reference becomes brief and the brief arrives in another country with the location filed off."
      ]},
      { heading: "The beige alibi", body: [
        "Neutrality is presented as timelessness. Sometimes it is. Often it is a refusal to take responsibility for taste. Beige offends nobody in the investment meeting and asks little of a guest scrolling past the room. It also photographs consistently under imperfect light.",
        "The problem is not the colour itself. Monastic rooms, desert buildings and Japanese interiors prove how expressive restraint can be. The problem is neutrality without an idea: expensive surfaces arranged to communicate calm, with no relationship to climate, history or the life beyond reception."
      ]},
      { heading: "Local craft, applied as garnish", body: [
        "Faced with charges of placelessness, hotels add a woven panel, commission ceramic vessels and name the restaurant after a regional plant. Craft becomes the design equivalent of a herb placed on top of a finished dish. The work may be beautiful, but it cannot carry an interior conceived elsewhere.",
        "Real locality is structural. It appears in how a building admits shade, where people gather, which materials age well and what a room assumes about privacy. It involves artisans early enough to shape the project rather than decorate the deadline."
      ]},
      { heading: "Hotels that could not be anywhere else", body: [
        "The memorable counterexamples do not all shout. Geoffrey Bawa's Sri Lankan hotels feel inseparable from monsoon, garden and ruin. La Mamounia's procession of tile, plaster, cedar and courtyard belongs to Marrakech even after repeated restorations. The Datai disappears into Langkawi's rainforest because its architecture begins with the site rather than the object.",
        "Rosewood São Paulo takes a different route, filling a historic maternity complex and new tower with Brazilian art, colour and layered public life. Claridge's remains itself because generations have added to it without sanding away the eccentricity. Distinctiveness is not one visual style; it is the presence of conviction."
      ]},
      { heading: "The cost of photogenic perfection", body: [
        "Rooms designed as images often fail as rooms. The chair looks exquisite but cannot support a working back. The basin has no place for a wash bag. Lighting creates a flattering dusk everywhere except the mirror where someone attempts to shave. A hotel is architecture tested by wet towels and jet lag.",
        "The uniform visual language hides these failures because we recognise its codes as expensive. Travertine tells us to expect luxury before the shower pressure or soundproofing has offered evidence. Design should earn trust through use, not merely trigger it through materials."
      ]},
      { heading: "What should replace the template", body: [
        "Not themed interiors, historical pastiche or rooms burdened with every regional motif. The answer is research: into climate, domestic habits, art, landscape, urban form and the people who will operate the building. A contemporary hotel can be international in comfort and deeply particular in character.",
        "Designers also need clients willing to accept that character divides opinion. The room everybody 'likes' in a presentation is rarely the room anyone remembers five years later. Hotels become beloved through specificity, and specificity always risks somebody disliking the wallpaper."
      ]},
      { heading: "A plea for the strange chair", body: [
        "Keep the chair that makes sense only in this lobby. Hang art that has not been selected to match the cushions. Let old buildings retain a difficult corner and new ones admit the weather. Use colour without calling it a pop. Make the minibar look like it belongs to the city.",
        "Travellers do not cross oceans to inhabit the global mood board. The best hotel room should provide comfort, certainly, but also evidence: of where we are, who made it and why it could not have happened anywhere else."
      ]}
    ]
  },
  {
    slug: "case-for-checking-in-alone",
    title: "The Case for Checking In Alone",
    kicker: "The Solo Issue",
    dek: "A hotel behaves differently when there is nobody beside you. So do you.",
    excerpt: "Solo hotel stays are not consolation prizes or wellness clichés. They are a sharper way to see a place, test hospitality and recover ownership of time.",
    author: "Shivam Sood",
    readTime: 10,
    date: "August 2026",
    heroImage: U("1553062407-98eeb64c6a62", 2000),
    cardImage: U("1553062407-98eeb64c6a62", 1000),
    hotelSlugs: ["park-hyatt-kyoto", "capella-bangkok", "aman-new-york"],
    sections: [
      { body: [
        "A hotel room for one contains a peculiar amount of possibility. Both sides of the bed are yours. There is no negotiation about curtains, air-conditioning, breakfast time or whether the afternoon needs a plan. The room stops being accommodation shared between activities and becomes a small, private country with one citizen.",
        "Solo travel is often described through bravery or self-care, as though eating dinner alone requires either courage or a scented candle. It needs neither. Checking in alone is useful because it strips travel back to appetite: what do you want to do when nobody else's preference is available to answer the question?"
      ]},
      { heading: "Hotels are built for pairs", body: [
        "The industry still defaults to two. Packages include couples' massages, restaurants ask whether the other guest is joining and breakfast for one arrives with a faint administrative concern. A solo stay quickly reveals whether hospitality recognises an individual as complete or sees half an expected booking.",
        "The best hotels do not overcompensate. They offer a good table rather than hiding the single diner by the service station, speak naturally and avoid converting solitude into a problem to solve. Respect is more welcome than special treatment."
      ]},
      { heading: "The radical ownership of time", body: [
        "Travelling with people produces a continuous, often loving negotiation. Alone, the itinerary can change without discussion. A museum holds you for four hours; lunch is cancelled for cake; rain becomes an excuse to return to bed. This is not selfishness. It is one of the few adult experiences in which preference can operate without consequence for anyone else.",
        "That freedom can feel uncomfortable on the first day. We are accustomed to explaining choices. By the second, the silence around them becomes addictive."
      ]},
      { heading: "The room becomes more important", body: [
        "When nobody waits in the lobby, the hotel must support time spent inside. Natural light, a chair worth sitting in, a bath, a view and room service become more than amenities. So does safety: a well-managed entrance, discreet corridors and staff who never announce a room number aloud are foundational, not premium features.",
        "Choose location over resort inventory for a city stay. Being able to walk out for coffee or return easily after dinner gives the day confidence. In a remote property, examine communal dining, excursion minimums and transfer costs; single supplements can turn solitude into an unjustified luxury tax."
      ]},
      { heading: "Eating alone, properly", body: [
        "Book the restaurant you actually want. Ask for the bar or counter if it offers a view of the kitchen, not because a table is considered wasteful. Bring a book only if you intend to read it. A solo dinner can be intensely observant: the room's rhythm, service choreography and cooking arrive without the insulation of conversation.",
        "The staff should not rush the meal or stretch it into companionship. A brief exchange can be delightful; enforced chat can feel like an assessment. The goal is to be attended to without being supervised."
      ]},
      { heading: "What you notice", body: [
        "Alone, the machinery of a hotel becomes audible. You notice how reception speaks to the bell desk, whether housekeeping greets colleagues, how long the corridor stays cluttered and which guests receive the quickest attention. A companion usually supplies the stay's narrative. Without one, the hotel must reveal its own.",
        "Destinations change too. You listen longer, enter smaller shops and become more available to chance. Solitude is not constant introspection; often it is simply increased contact with the world because there is no familiar person beside you."
      ]},
      { heading: "Start with two nights", body: [
        "The first solo trip need not be a transcontinental test. Choose a city you can navigate, a hotel whose room you will enjoy and two nights with one reservation each day. Tell someone the plan, keep transport simple and pay for the location that removes late-night uncertainty.",
        "Do not fill the schedule to prove the trip was worthwhile. Order breakfast upstairs. Take the long route back. Sit in the lobby with nothing to accomplish. The case for checking in alone is ultimately the case for discovering that your own company does not need an activity programme."
      ]}
    ]
  }
];
