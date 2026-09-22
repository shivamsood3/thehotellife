import type { Article } from "../articles";

const common = { author: "Zinnia Thapar", date: "September 21, 2026", readTime: 5 };

export const septemberReportedFeatures: Article[] = [
  {
    ...common, slug: "room-category-worth-paying-for", title: "The Room Upgrade Worth Paying For", kicker: "The Better Booking",
    dek: "A bigger room is not always a better stay. Spend on the difference you will actually notice.",
    excerpt: "Sea view, private garden or a larger suite? How to judge hotel upgrades by layout, usable outdoor space and the total cost of your stay.",
    heroImage: "/hotels/soho-house-mumbai-official.png", cardImage: "/hotels/soho-house-mumbai-official.png", imageAlt: "Bedroom and balcony at Soho House Mumbai",
    hotelSlugs: ["soho-house-mumbai", "abode-by-the-beach-sri-lanka", "the-oberoi-rajvilas-jaipur"],
    sources: [{ label: "Soho House Mumbai bedrooms", url: "https://www.sohohouse.com/houses/soho-house-mumbai/bedrooms" }, { label: "Rajvilas accommodation", url: "https://www.oberoihotels.com/hotels-in-jaipur-rajvilas-resort/accommodation/" }, { label: "Abode suite choices", url: "https://www.abodeboutiquehotels.com/beach-rooms.php" }],
    relatedReading: [{ label: "Choose your Jaipur setting", url: "/guides/jaipur-palace-resort-or-haveli" }],
    sections: [
      { heading: "Buy a change in the day", body: [
        "The hotel upgrade is a remarkably successful piece of persuasion. A slightly grander name, a photograph taken from a generous angle and suddenly the room you were perfectly happy with looks like a failure of ambition. The antidote is not to refuse every upgrade. It is to identify what changes when you buy one. A door between the bed and the sitting room, a view you will spend time looking at, a terrace you can comfortably occupy: these are differences. A new adjective is not.",
        "Start by imagining a normal day on the trip. If you will leave after breakfast and return to sleep, a large sitting area has limited value. If one person wakes early while the other sleeps, a genuinely separate room can transform the stay. If your holiday is meant to involve doing very little, outdoor space may matter more than an elaborate indoor finish. The right upgrade solves a problem or creates a pleasure you can name.",
      ] },
      { heading: "The view can beat the square footage", body: [
        "Soho House Mumbai makes the distinction unusually clear: its booking catalogue separates city and sea-facing options. A bigger room does not automatically buy the outlook that drew you to the hotel. This is where category names become a poor substitute for reading. Compare the actual aspect first, then the floor plan, then the area. Reverse that order only if indoor space is the principal need.",
        "Ask what 'sea view' means for the category on offer. Is the water visible from the bed or only from one corner of the balcony? Is the outlook open or partial? These are legitimate questions, not attempts to negotiate perfection. The useful response is a photograph or an explanation of the particular room type. A generic gallery containing every suite in the building is not enough to settle the purchase.",
      ] },
      { heading: "Outdoor space has to be usable", body: [
        "Rajvilas's garden and patio distinctions illustrate a different kind of upgrade. Here the question is whether an outdoor extension changes the way you use the room. A place to sit privately with a book might be worth more than extra indoor floor area. But consider shade, season and your own habits. A terrace that you admire through the glass and never occupy is an expensive view of furniture.",
        "At Abode by the Beach, the two-suite choice also involves different bathing and outdoor arrangements. That is a reminder to think beyond size: an outdoor bath is delightful to some travellers and an inconvenience to others. There is no universal hierarchy in which more unusual automatically means more desirable. The best room is the one that agrees with how you like to live, including the unglamorous business of getting ready in the morning.",
      ] },
      { heading: "Compare the whole bill, not the nightly temptation", body: [
        "An upgrade quoted per night disguises its weight over a longer stay. Multiply the supplement by the number of nights, then check taxes and differences in meal inclusions or cancellation terms. A hypothetical extra £80 for five nights is £400 before any additional charges. Would you rather spend that amount on the room, an extra night, a private guide or a more convenient flight? There is no morally superior answer; there is only an honest comparison.",
        "Do not assume a suite includes breakfast, transfers or lounge access. Do not assume the cheaper rate has the same cancellation conditions. Read the two offers side by side. If the upgrade removes a real daily expense, account for that; if it bundles things you would not otherwise buy, do not count their advertised value as money saved.",
      ] },
      { heading: "The three questions to send reservations", body: [
        "Ask what physical differences separate your two shortlisted categories, which of those features are guaranteed, and whether the hotel can share representative photographs or a plan. Add the one requirement that matters most to you: quiet, step-free access, a separate sleeping area or a particular outlook. A clear preference is easier to act on than a request for 'something special'.",
        "Then give yourself permission to keep the original room. Spending intelligently sometimes means upgrading, sometimes staying longer and sometimes leaving the budget alone. The most satisfying hotel purchase is not the highest category you can just about afford. It is the room whose advantages remain obvious after the arrival excitement has passed—and whose bill does not make you resent the rest of the holiday.",
      ] },
    ],
  },
  {
    ...common, slug: "the-work-behind-a-palace-hotel", title: "The Work Behind a Palace Hotel", kicker: "People & Place",
    dek: "Beyond the carved doorway is a less photographed story: the skill required to keep an old building alive as a hotel.",
    excerpt: "What Haveli Dharampura's restoration reveals about craft, maintenance and the people behind a heritage hotel—and how to look beyond the palace label.",
    heroImage: "/hotels/haveli-dharampura-official.webp", cardImage: "/hotels/haveli-dharampura-official.webp", imageAlt: "Restored decorative façade at Haveli Dharampura, Old Delhi",
    hotelSlugs: ["haveli-dharampura-delhi", "the-oberoi-rajvilas-jaipur", "the-johri-jaipur"],
    sources: [{ label: "Dharampura's restoration account", url: "https://havelidharampura.com/restoration-story.html" }, { label: "Haveli Dharampura", url: "https://www.havelidharampura.com/" }, { label: "The Oberoi Rajvilas", url: "https://www.oberoihotels.com/hotels-in-jaipur-rajvilas-resort/" }],
    relatedReading: [{ label: "Palace resort or haveli?", url: "/guides/jaipur-palace-resort-or-haveli" }],
    sections: [
      { heading: "The doorway is the beginning, not the story", body: [
        "A carved doorway is easy to admire. The work required to keep it in a building that also contains bathrooms, electricity, luggage and paying guests is less easily photographed. Heritage hotels trade on the first image, but their more interesting story often lies in the second. Someone has to decide what can be retained, what must be repaired and how much intervention the building can tolerate without becoming a stage set of itself.",
        "The people involved are not all visible at check-in. Conservation specialists, craftspeople, engineers and maintenance teams occupy a different part of the hospitality story from the person offering a welcome drink. Their decisions affect the guest just as directly. A door that closes properly, a comfortable room that has not been gutted of its proportions, a courtyard that remains legible: these are achievements, even when no plaque explains them.",
      ] },
      { heading: "A documented example in Old Delhi", body: [
        "Haveli Dharampura's own restoration account describes a six-year process and the use of drawings and photographs to document the work. That detail is more revealing than a general claim of painstaking craftsmanship. Documentation means the intervention has a record: a way of distinguishing what was found from what was changed. For a guest interested in the building, it offers a better starting point than simply asking how old the hotel is.",
        "The account is the property's own, not an independent technical audit, and it should be read as such. Yet it gives travellers something specific to pursue. Which elements survived? What was reconstructed? What was learned during the work? Those questions shift attention from the glamour of owning a heritage address to the practical intelligence required to return it to use.",
      ] },
      { heading: "Maintenance is not the unromantic bit", body: [
        "We tend to imagine restoration as an event: a building is rescued, the doors open and the story is complete. A working hotel cannot behave that way. Guests arrive with cases, bathrooms are used repeatedly and service has to happen without turning every corridor into a back-of-house route. Looking after an older building is an ongoing negotiation, not a ribbon-cutting photograph.",
        "This is why the maintenance team deserves a place in how we think about service. A problem quietly resolved is as consequential as a recommendation elegantly delivered. It would be wrong to romanticise discomfort as proof of authenticity; equally, it is lazy to demand that every old building behave like a newly built tower. Good hospitality makes the limits clear and handles them intelligently. Guests can help by communicating actual needs before arrival rather than expecting historic architecture to anticipate every one of them.",
      ] },
      { heading: "New craftsmanship deserves accurate language too", body: [
        "A palace-inspired hotel is not the same as a former palace, and recognising the distinction does not diminish the skill in either. Rajvilas, for example, belongs to the resort conversation rather than requiring an invented royal biography. Its design can be appreciated for the environment it creates. An old haveli asks different questions about adaptation and surviving fabric.",
        "This matters because the loose language of heritage can make different kinds of work invisible. Conservation, reconstruction and new interpretation are not interchangeable. Ask the hotel to explain which applies. The most interesting answers usually contain decisions and compromises, rather than a string of adjectives. They also allow the people responsible for those decisions to emerge from behind the brand name.",
      ] },
      { heading: "How to be a more attentive guest", body: [
        "Begin by reading the hotel's restoration or architectural history, if it publishes one. Ask whether there is a building tour and whether craftspeople or designers are credited. Look at the relationship between public and private space, not only at ornamental details. Be curious without treating staff as an on-demand oral-history service in the middle of a busy shift.",
        "The reward is a richer understanding of what you are paying for. A good heritage hotel is not simply a collection of beautiful old surfaces. It is a continuing act of care, with real people making it habitable. Once you begin to notice that, the photographs become less conclusive. The doorway still matters—but so does the person who knows how to keep it working without erasing what made it worth saving.",
      ] },
    ],
  },
];
