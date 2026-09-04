import type { Hotel, Section } from "../hotels";

const fact = (hotel: Hotel, label: string) =>
  hotel.quickFacts.find((item) => item.label === label)?.value;

const wordCount = (hotel: Hotel) =>
  hotel.sections.flatMap((section) => section.body).join(" ").split(/\s+/).filter(Boolean).length;

const urbanCategories = /urban|city|grande dame|palace|icon|statement|palazzo/i;
const retreatCategories = /resort|retreat|lodge|safari|wilderness|island|beach|jungle|cliffside|alpine|wellness/i;

/**
 * Earlier reviews were commissioned as short catalogue notes. These service-led
 * sections give every one of those pages the same practical editorial backbone
 * as the newer long-form reviews without inventing restaurants, facilities or
 * first-person experiences that are not present in the source material.
 */
export const reviewDepthFor = (hotel: Hotel): Section[] => {
  if (wordCount(hotel) >= 700) return [];

  const location = fact(hotel, "Location") ?? `${hotel.city}, ${hotel.country}`;
  const rooms = fact(hotel, "Rooms") ?? fact(hotel, "Suites") ?? fact(hotel, "Villas") ?? "a deliberately considered room inventory";
  const bestFor = fact(hotel, "Best for") ?? hotel.category.toLowerCase();
  const isUrban = urbanCategories.test(hotel.category);
  const isRetreat = retreatCategories.test(hotel.category);
  const settingAdvice = isUrban
    ? `At an urban hotel, the address must earn its keep twice: it should simplify the day's movements and still feel worth returning to when the city has taken enough. ${location} is therefore not a footnote to this review but one of the principal reasons to book. Map the places that matter to you before choosing a room, because a celebrated lobby cannot compensate for spending the trip in traffic.`
    : isRetreat
      ? `This is a hotel to use as a destination, not merely a bed placed near one. The more remote or self-contained the setting, the more the quality of each day depends on the property's own food, transport and activities. Protect unprogrammed time, resist turning every morning into an excursion and allow the landscape around ${location} to do some of the work.`
      : `The address at ${location} determines the rhythm of the stay. Work out what can be reached comfortably, what requires a driver and what is best enjoyed without leaving the property. The right itinerary should make the hotel and its surroundings feel complementary rather than force a daily choice between them.`;

  const atmosphereAdvice = isUrban
    ? `The hotel's central tension is familiar to every great city stay: how much of the place outside should enter the experience. Its public rooms and service need to absorb the day's friction without sealing the guest inside an international bubble. The most rewarding stays alternate deliberately between the hotel and the neighbourhood, using the former as a reset rather than an escape hatch.`
    : isRetreat
      ? `Resort time expands quickly. A morning swim becomes lunch; lunch becomes an afternoon that has no need of a plan. That apparent effortlessness is the real test here. Beautiful architecture may secure the first photograph, but shade, privacy, sensible distances and staff who can read the pace of a day decide whether the spell lasts beyond it.`
      : `Atmosphere matters more than an inventory of amenities. The question is whether the building creates a convincing world and then lets guests inhabit it without constant explanation. At its best, ${hotel.name} makes its category—${hotel.category.toLowerCase()}—feel specific rather than generic, with the surrounding destination supplying the energy the hotel should not try to manufacture.`;

  return [
    {
      heading: "How the stay actually feels",
      body: [
        `${hotel.tagline.replace(/^[A-Z]/, (letter) => letter.toLowerCase())} is the promise, but the more useful measure is how naturally the hotel sustains it after arrival. The defining moment is ${hotel.standout.charAt(0).toLowerCase()}${hotel.standout.slice(1)} That image matters because it condenses the property's argument into something a guest can genuinely experience rather than a list of expensive materials.`,
        atmosphereAdvice,
      ],
    },
    {
      heading: "Rooms: what to book, and why",
      body: [
        `The published inventory—${rooms}—does not mean every key delivers the same stay. Outlook, floor, distance from public spaces and the age of the latest refurbishment can matter more than a category name written by a revenue team. Ask for the room's exact position and a current photograph if the view or layout is central to the trip; at this level, informed selection is not being difficult.`,
        `Do not automatically buy the largest room. Spend first on the feature that changes each morning: the stronger view, outdoor space, a genuinely separate living area or easier access for anyone travelling with mobility needs. Conversely, an entry room can be the intelligent choice when days will be spent outside and the hotel's public spaces carry most of its character. The useful upgrade is the one a guest will notice, not the one with the most flattering name.`,
      ],
    },
    {
      heading: "Food, drink and the shape of a day",
      body: [
        `A hotel restaurant should do more than prevent hunger. Breakfast establishes whether the operation understands mornings; the bar reveals whether local life enters after dark; dinner decides how willingly guests remain on the property. Reserve the meal that appears essential to the hotel's identity, but leave room for ${hotel.city}. A review that encourages every meal behind the same doors is not doing the destination—or the reader—many favours.`,
        `Before arrival, check which dining rooms are operating on the exact dates, whether the most desirable tables are held for residents and what is included in the rate. Seasonal hotels and resorts often alter hours with occupancy. City institutions may be busiest with non-residents precisely when a guest most wants a table. One clear email in advance is more effective than discovering at check-in that the signature experience is already full.`,
      ],
    },
    {
      heading: "Service, pace and privacy",
      body: [
        `Great service here should feel like judgement rather than choreography: a transfer timed correctly, a room problem owned by the first person who hears it, and recommendations calibrated to the guest instead of copied from a list. Ceremony can be pleasurable, especially in a ${hotel.category.toLowerCase()}, but it should never make a simple request more complicated. The real luxury is having friction removed before it becomes the story of the stay.`,
        `Privacy is equally personal. Some travellers want recognition at every doorway; others want the freedom to disappear. State preferences early and judge the response. A capable hotel can be warm without becoming overfamiliar, attentive without filling the day and confident enough to leave a guest alone. Those distinctions rarely appear on an amenities page, yet they are often what separates an expensive property from a genuinely excellent one.`,
      ],
    },
    {
      heading: "The honest trade-offs",
      body: [
        settingAdvice,
        `${hotel.name} is most persuasive for ${bestFor.toLowerCase()}. That does not make it universal. Travellers who need a different pace, a broader choice of restaurants, a more walkable address or a quieter social scene should take those priorities seriously even when the hotel is famous. The purpose of a recommendation is not to erase compromises; it is to identify the guest for whom those compromises will barely register.`,
      ],
    },
    {
      heading: "Before you book",
      body: [
        `Treat the displayed “from” rate as a starting point, not a quotation. Dates, taxes, meal plans, transfers and cancellation terms can change the real cost dramatically. Compare like with like, then check the hotel's own flexible offer alongside reputable booking platforms. If the direct rate is close, ask whether it carries useful inclusions rather than chasing a nominal saving that disappears at breakfast.`,
        `Two final questions prevent most disappointments: what is happening at the hotel during the stay, and what is happening around it? Renovations, private events, seasonal closures and local festivals can all transform an otherwise sound choice. Confirm the facilities that matter in writing, communicate any non-negotiable accessibility or dietary needs and arrive understanding the bargain this particular property asks you to make.`,
      ],
    },
  ];
};
