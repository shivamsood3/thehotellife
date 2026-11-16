import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/how-we-review" },
  title: "How We Review",
  description:
    "How The Hotel Life turns personal hotel experiences into accountable reviews, with named writers, practical fact checks and clearly explained ratings.",
};

const criteria = [
  {
    title: "The Room",
    body: "Space, light, bed and bathroom, soundproofing, the small details of comfort, and, crucially, the gap between the entry-level room and the suite the press shots always show.",
  },
  {
    title: "Sense of Place",
    body: "Does the hotel feel like it could only exist here? We reward architecture, design and food that reflect their setting, and mark down anonymous international gloss.",
  },
  {
    title: "Service",
    body: "Warmth over stiffness, anticipation over box-ticking. We test it in small ways, with a special request, an odd hour or a problem, and see how the hotel responds.",
  },
  {
    title: "Food & Drink",
    body: "Breakfast is the meal that reveals a hotel. We also assess the flagship restaurant and the bar, the room where a hotel shows its personality.",
  },
  {
    title: "The Extras",
    body: "Spa, pool, grounds, and the signature experiences: the things that turn a good night's sleep into a reason to travel.",
  },
  {
    title: "Value",
    body: "Not whether it's cheap, because almost nothing we cover is, but whether the price is honest for what you actually get.",
  },
];

export default function HowWeReview() {
  return (
    <div className="pb-8">
      <header className="mt-10 max-w-2xl">
        <span className="eyebrow">Our Methodology</span>
        <h1 className="font-display mt-2 text-4xl font-medium leading-tight text-ink sm:text-5xl">
          How We Review
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">
          We consider the same six questions in every hotel review. Some reviews carry
          an overall rating; the written verdict remains the clearest account of why.
        </p>
      </header>

      <div className="rule-brass mt-8 w-full" />

      {/* Process */}
      <div className="mx-auto mt-12 max-w-2xl">
        <div className="prose-editorial">
          <h2>Every review begins with personal experience</h2>
          <p>
            The Hotel Life publishes personal editorial accounts, not anonymous hotel
            summaries. A review is shaped by the writer&apos;s experience of the property: how
            arrival felt, how the room worked, where the hotel came alive and where the promise
            fell short. Every story carries a named writer, a review date and a link back to
            this scoring framework so that the judgement has a visible owner and a consistent
            standard.
          </p>
          <h2>We pay attention to the ordinary moments</h2>
          <p>
            The useful evidence is rarely found in a staged tour. It is in the quality of sleep,
            the light in the room, breakfast when the dining room is busy, the ease of asking
            for help and whether service retains its warmth after the ceremonial welcome is
            over. We consider the celebrated spaces, but also the corridors, transfers, bills,
            acoustics and small acts of care that determine how a hotel actually feels to use.
          </p>
          <h2>Experience leads; facts are checked</h2>
          <p>
            A personal judgement and a changeable hotel fact are different things. Before
            publication, practical details such as room categories, restaurants, facilities,
            access and renovation status are checked against primary hotel sources, which are
            attached to the review where useful. Those checks support the writing; they do not
            replace the experience or turn hotel marketing into our opinion.
          </p>
          <h2>Commercial relationships do not edit the verdict</h2>
          <p>
            When a stay is hosted or complimentary, that support is disclosed on the review.
            Affiliate booking links are commercial links, not editorial evidence, and never
            alter a verdict. We do not publish undated sample rates as current prices.
            Where an overall rating appears, it is an editorial judgement out of five,
            informed by the six questions below and shown to one decimal place. It is
            not a mathematical average of six published sub-scores. A review without a
            rating has no numerical score; its recommendation is in the prose.
          </p>
        </div>
      </div>

      {/* Scoring */}
      <section className="mt-14">
        <div className="border-b border-line pb-4">
          <span className="eyebrow">The Score</span>
          <h2 className="font-display mt-1 text-3xl font-medium text-ink">
            Six questions behind each verdict
          </h2>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {criteria.map((c) => (
            <div key={c.title} className="rounded-md border border-line bg-white p-6">
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-xl font-medium text-ink">{c.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-2xl text-center">
        <p className="font-display text-2xl font-medium leading-snug text-ink">
          A five-star score isn&apos;t about price. It&apos;s about a hotel doing exactly
          what it sets out to do, flawlessly, and leaving you longing to return.
        </p>
        <Link
          href="/hotels"
          className="mt-8 inline-block rounded-full bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-widest text-paper transition-colors hover:bg-brass-deep"
        >
          See the reviews →
        </Link>
      </section>
    </div>
  );
}
