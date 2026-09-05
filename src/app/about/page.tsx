import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { authorAnchor, authorProfiles } from "@/content/authors";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About · The Hotel Life",
  description:
    "The Hotel Life is an independent editorial guide to the world's most extraordinary hotels, with named writers and a public scoring methodology.",
};

const values = [
  {
    title: "Independence is the rule",
    body: "Commercial relationships do not buy favourable coverage. Hosted stays and material support are disclosed when they apply, and affiliate links never influence a score.",
  },
  {
    title: "We tell the truth",
    body: "If a famous hotel is coasting on its reputation, we say so. Our loyalty is to the reader deciding where to spend a small fortune, never to the hotel.",
  },
  {
    title: "We go deep, not wide",
    body: "We'd rather publish one review we'd stake a name on than ten anonymous summaries. Every story has a named editorial owner and is held to the same published scoring framework.",
  },
];

const contributors = ["Zinnia Thapar", "Shiv S", "Akash G", "AB"];

export default function About() {
  return (
    <div className="pb-8">
      {/* Hero */}
      <div className="relative mt-6 overflow-hidden rounded-md">
        <div className="relative aspect-[16/9] w-full sm:aspect-[16/6]">
          <Image
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=80"
            alt="The Hotel Life"
            fill
            preload
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
            <span className="eyebrow">Our Story</span>
            <h1 className="font-display mt-2 max-w-3xl text-4xl font-medium leading-tight text-white sm:text-5xl">
              We stay so you don&apos;t have to guess.
            </h1>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="mx-auto mt-12 max-w-2xl">
        <div className="prose-editorial">
          <p>
            The Hotel Life began with a simple frustration: that so much of what&apos;s
            written about luxury hotels reads like it was dictated by the hotel&apos;s own
            marketing department. Glowing, interchangeable, and utterly useless to anyone
            about to spend a month&apos;s rent on a single night&apos;s stay.
          </p>
          <p>
            So we set out to build the opposite: an independent guide to the world&apos;s
            most extraordinary hotels, written the way we&apos;d actually brief a friend.
            Which room to book and which to avoid. Whether the famous view lives up to the
            photographs. When a grand old name is worth it, and when you&apos;re just paying
            for the lobby.
          </p>
          <p>
            We cover the icons and the unknowns alike, from the grande dames of Europe to a
            manor in Nairobi where the giraffes join you for breakfast. What connects them
            is simple: they&apos;re the stays worth crossing a continent for, and we&apos;ll
            always tell you honestly when they&apos;re not.
          </p>
        </div>
      </div>

      {/* Values */}
      <section className="mt-16 rounded-md bg-ink px-6 py-14 text-paper sm:px-12">
        <div className="mx-auto max-w-4xl">
          <span className="eyebrow">What we stand for</span>
          <div className="mt-8 grid gap-10 sm:grid-cols-3">
            {values.map((v) => (
              <div key={v.title}>
                <h3 className="font-display text-xl font-medium text-paper">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/70">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contributors */}
      <section className="mx-auto mt-16 max-w-4xl">
        <div className="border-b border-line pb-4">
          <span className="eyebrow">Editorial accountability</span>
          <h2 className="font-display mt-1 text-3xl font-medium text-ink">Meet the bylines</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
            These are the named writers responsible for reviews, destination guides and
            The Edit. Zinnia Thapar leads the current commissioning slate, followed by
            Shiv S, Akash G and AB.
          </p>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {contributors.map((name, index) => (
            <div id={authorAnchor(name)} key={name} className="scroll-mt-8 rounded-md border border-line bg-white p-5">
              <div className="flex items-start justify-between gap-3">
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-brass-deep">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {name === "Zinnia Thapar" && authorProfiles[name]?.image && (
                  <Image
                    src={authorProfiles[name]!.image!}
                    alt={authorProfiles[name]!.imageAlt!}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                )}
              </div>
              <p className="font-display mt-5 text-xl font-medium text-ink">{name}</p>
              <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                Reviews, guides and editorial features
              </p>
              {name === "Zinnia Thapar" && authorProfiles[name] && (
                <Link href={`/authors/${authorProfiles[name]!.slug}`} className="mt-4 inline-block text-xs font-semibold text-brass-deep hover:underline">
                  Read profile →
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto mt-16 max-w-2xl text-center">
        <span className="eyebrow">Read on</span>
        <h2 className="font-display mt-3 text-3xl font-medium text-ink">
          Want to know exactly how we score a hotel?
        </h2>
        <p className="mt-4 text-base text-ink-soft">
          Our review methodology is public, detailed, and the same for a $200 room as a
          $3,000 suite.
        </p>
        <Link
          href="/how-we-review"
          className="mt-6 inline-block rounded-full border border-ink px-6 py-3 text-xs font-semibold uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-paper"
        >
          How We Review →
        </Link>
      </section>
    </div>
  );
}
