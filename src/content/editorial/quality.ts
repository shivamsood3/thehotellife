type SectionLike = { heading?: string; body: string[] };

const countWords = (parts: string[]) =>
  parts.join(" ").trim().split(/\s+/).filter(Boolean).length;

export const assertSectionDepth = (
  label: string,
  entries: { slug: string; sections: SectionLike[] }[],
  minimumWords: number,
) => {
  const failures = entries
    .map((entry) => ({
      slug: entry.slug,
      words: countWords(entry.sections.flatMap((section) => section.body)),
    }))
    .filter((entry) => entry.words < minimumWords);

  if (failures.length) {
    throw new Error(
      `${label} below the ${minimumWords}-word editorial floor: ${failures
        .map((entry) => `${entry.slug} (${entry.words})`)
        .join(", ")}`,
    );
  }
};

export const assertRankedListDepth = (
  entries: {
    slug: string;
    intro: string[];
    planning: { heading: string; body: string }[];
    hotels: { description: string; caveat: string }[];
    faq: { question: string; answer: string }[];
  }[],
  minimumWords: number,
) => {
  const failures = entries
    .map((entry) => ({
      slug: entry.slug,
      words: countWords([
        ...entry.intro,
        ...entry.planning.flatMap((item) => [item.heading, item.body]),
        ...entry.hotels.flatMap((hotel) => [hotel.description, hotel.caveat]),
        ...entry.faq.flatMap((item) => [item.question, item.answer]),
      ]),
    }))
    .filter((entry) => entry.words < minimumWords);

  if (failures.length) {
    throw new Error(
      `Ranked lists below the ${minimumWords}-word editorial floor: ${failures
        .map((entry) => `${entry.slug} (${entry.words})`)
        .join(", ")}`,
    );
  }
};
