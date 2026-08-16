import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "The Concierge — Our Weekly Newsletter",
  description:
    "One extraordinary hotel in your inbox every Sunday. Join 40,000 readers of The Hotel Life's weekly newsletter, The Concierge.",
};

const perks = [
  {
    title: "One hotel, done properly",
    body: "Each Sunday we go deep on a single extraordinary stay — the room to book, the catch to know, the reason to go.",
  },
  {
    title: "The insider's list",
    body: "Openings worth caring about, rates worth pouncing on, and the occasional address we've kept quiet until now.",
  },
  {
    title: "No noise, ever",
    body: "One email a week. No daily blasts, no shared data, no filler. Unsubscribe in one click whenever you like.",
  },
];

export default function Newsletter() {
  return (
    <div className="pb-8">
      <section className="mt-6 grid overflow-hidden rounded-md bg-ink text-paper lg:grid-cols-2">
        <div className="relative min-h-[280px] lg:min-h-full">
          <Image
            src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80"
            alt="The Concierge newsletter"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-col justify-center gap-5 p-8 sm:p-12 lg:p-16">
          <span className="eyebrow text-brass">The Concierge</span>
          <h1 className="font-display text-4xl font-medium leading-tight sm:text-5xl">
            One extraordinary hotel in your inbox, every Sunday.
          </h1>
          <p className="text-base leading-relaxed text-paper/70">
            Join 40,000 discerning travellers who trust The Hotel Life to find the stays
            worth the airfare. Free, weekly, and worth opening.
          </p>
          <form className="flex max-w-md overflow-hidden rounded-full border border-paper/25 bg-white/5">
            <input
              type="email"
              placeholder="you@email.com"
              className="min-w-0 flex-1 bg-transparent px-5 py-3.5 text-sm text-paper placeholder:text-paper/40 focus:outline-none"
            />
            <button className="bg-brass px-6 text-xs font-semibold uppercase tracking-widest text-ink transition-colors hover:bg-paper">
              Subscribe
            </button>
          </form>
          <p className="text-xs text-paper/40">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      <section className="mt-16">
        <div className="mx-auto grid max-w-4xl gap-10 sm:grid-cols-3">
          {perks.map((p) => (
            <div key={p.title}>
              <h3 className="font-display text-xl font-medium text-ink">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{p.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
