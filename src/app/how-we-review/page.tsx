import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How We Review — The Hotel Life",
  description:
    "Our hotel review methodology: how we book, what we test, and how we score. The same standard for a $200 room and a $3,000 suite.",
};

const criteria = [
  {
    weight: "25%",
    title: "The Room",
    body: "Space, light, bed and bathroom, soundproofing, the small details of comfort — and crucially, the gap between the entry-level room and the suite the press shots always show.",
  },
  {
    weight: "20%",
    title: "Sense of Place",
    body: "Does the hotel feel like it could only exist here? We reward architecture, design and food that reflect their setting, and mark down anonymous international gloss.",
  },
  {
    weight: "20%",
    title: "Service",
    body: "Warmth over stiffness, anticipation over box-ticking. We test it in small ways — a special request, an odd hour, a problem — and see how the hotel responds.",
  },
  {
    weight: "15%",
    title: "Food & Drink",
    body: "Breakfast is the meal that reveals a hotel. We also assess the flagship restaurant and the bar — the room where a hotel shows its personality.",
  },
  {
    weight: "10%",
    title: "The Extras",
    body: "Spa, pool, grounds, and the signature experiences — the things that turn a good night's sleep into a reason to travel.",
  },
  {
    weight: "10%",
    title: "Value",
    body: "Not whether it's cheap — almost nothing we cover is — but whether the price is honest for what you actually receive.",
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
          Every hotel on The Hotel Life is scored against the same six criteria, whether
          it&apos;s a $200 boutique or a $3,000 palace suite. Here&apos;s exactly how it works.
        </p>
      </header>

      <div className="rule-brass mt-8 w-full" />

      {/* Process */}
      <div className="mx-auto mt-12 max-w-2xl">
        <div className="prose-editorial">
          <h2>We book like everyone else</h2>
          <p>
            Wherever possible we reserve anonymously and pay the going rate, arriving as an
            ordinary guest rather than an announced critic. It&apos;s the only way to see a
            hotel as you will see it. When a stay is hosted or complimentary, we say so
            clearly at the top of the review — and we hold it to exactly the same standard.
          </p>
          <h2>We test, we don&apos;t tour</h2>
          <p>
            A press tour shows you the best suite and the empty restaurant. We&apos;d rather
            sleep in the cheapest room, order room service at midnight, ask for something
            awkward, and check what the pool is like at 4pm when everyone wants a lounger.
            The truth of a hotel lives in those ordinary moments.
          </p>
        </div>
      </div>

      {/* Scoring */}
      <section className="mt-14">
        <div className="border-b border-line pb-4">
          <span className="eyebrow">The Score</span>
          <h2 className="font-display mt-1 text-3xl font-medium text-ink">
            Six criteria, out of five stars
          </h2>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {criteria.map((c) => (
            <div key={c.title} className="rounded-md border border-line bg-white p-6">
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-xl font-medium text-ink">{c.title}</h3>
                <span className="text-sm font-semibold text-brass-deep">{c.weight}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-2xl text-center">
        <p className="font-display text-2xl font-medium leading-snug text-ink">
          A five-star score isn&apos;t about price. It&apos;s about a hotel doing exactly
          what it sets out to do, flawlessly — and leaving you longing to return.
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
