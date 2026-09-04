import type { Metadata } from "next";
import Image from "next/image";
import { guides } from "@/content/guides";
import GuideCard from "@/components/GuideCard";
import { AdSense } from "@/components/Ads";

export const metadata: Metadata = {
  alternates: { canonical: "/guides" },
  title: "Travel Guides: Where to Go, When, and Where to Stay",
  description:
    "In-depth, honest travel guides from The Hotel Life, from 48 hours in Tokyo to choosing the right island in the Maldives.",
};

export default function GuidesIndex() {
  const [lead, ...rest] = guides;

  return (
    <div className="pb-8">
      <header className="mt-10 max-w-2xl">
        <span className="eyebrow">Field Notes</span>
        <h1 className="font-display mt-2 text-4xl font-medium leading-tight text-ink sm:text-5xl">
          Travel Guides
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">
          The practical companion to our hotel reviews: how to go, when to go, and how to
          have the great destinations of the world on your own terms.
        </p>
      </header>

      <div className="rule-brass mt-8 w-full" />

      {/* Featured lead guide */}
      <a href={`/guides/${lead.slug}`} className="card-zoom group mt-10 grid gap-8 overflow-hidden rounded-md bg-white lg:grid-cols-2">
        <div className="relative min-h-[280px] overflow-hidden lg:min-h-[420px]">
          <Image src={lead.cardImage} alt={lead.imageAlt ?? `Travel guide to ${lead.destination}`} fill preload className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
        <div className="flex flex-col justify-center gap-4 p-8 lg:p-12">
          <span className="eyebrow">{lead.destination}</span>
          <h2 className="font-display text-3xl font-medium leading-tight text-ink group-hover:text-brass-deep sm:text-4xl">
            {lead.title}
          </h2>
          <p className="text-base leading-relaxed text-ink-soft">{lead.excerpt}</p>
          <p className="text-xs font-medium text-ink-muted">
            {lead.readTime} min read · {lead.date}
          </p>
        </div>
      </a>

      <div className="my-12">
        <AdSense format="leaderboard" slot="4000000001" />
      </div>

      <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((g) => (
          <GuideCard key={g.slug} guide={g} />
        ))}
      </div>
    </div>
  );
}
