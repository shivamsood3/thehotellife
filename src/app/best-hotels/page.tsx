import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { bestHotelsLists } from "@/content/best-hotels";
import JsonLd, { breadcrumbSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Best Hotels: THL's Independent Destination Shortlists",
  description:
    "Independent, carefully edited lists of the best hotels in the world's great destinations, with candid advice on who each hotel suits—and who it does not.",
  alternates: { canonical: "/best-hotels" },
  openGraph: {
    title: "The Best Hotels, Chosen by The Hotel Life",
    description:
      "Ranked destination shortlists with clear reasons, useful caveats and no paid placements.",
    url: "/best-hotels",
  },
};

export default function BestHotelsIndex() {
  return (
    <div className="pb-8">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Best Hotels", path: "/best-hotels" },
        ])}
      />

      <header className="mt-10 max-w-3xl">
        <span className="eyebrow">The Shortlists</span>
        <h1 className="font-display mt-2 text-4xl font-medium leading-tight text-ink sm:text-5xl">
          The best hotels, with reasons
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-soft">
          Not an inventory of every five-star address. These are tightly edited,
          regularly checked destination lists that explain which hotel is right
          for which trip—and the compromises worth knowing before you book.
        </p>
      </header>

      <div className="rule-brass mt-8 w-full" />

      <section className="mt-10 grid gap-8 md:grid-cols-2">
        {bestHotelsLists.map((list) => (
          <Link
            key={list.slug}
            href={`/best-hotels/${list.slug}`}
            className="card-zoom group overflow-hidden rounded-md bg-white"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={list.heroImage}
                alt={`The best hotels in ${list.destination}, ${list.country}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="hero-scrim absolute inset-0" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <span className="eyebrow eyebrow-hero">10 hotels · {list.updated}</span>
                <h2 className="font-display mt-2 text-3xl font-medium">
                  {list.destination}, {list.country}
                </h2>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <p className="leading-relaxed text-ink-soft">{list.dek}</p>
              <span className="mt-5 inline-block text-sm font-semibold text-brass-deep">
                Read the complete list →
              </span>
            </div>
          </Link>
        ))}
      </section>

      <section className="mt-14 rounded-md border border-line bg-paper-2 p-7 sm:p-10">
        <span className="eyebrow">Our standard</span>
        <h2 className="font-display mt-2 text-2xl font-medium text-ink">
          Editorial judgement, never paid placement
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-ink-soft">
          Hotels cannot buy a position on these lists. Selection considers sense
          of place, rooms, service, food, design, location and value within the
          hotel&apos;s own category. Each entry includes a caveat because the best
          hotel in a destination is not automatically the best hotel for every
          traveller.
        </p>
        <Link
          href="/how-we-review"
          className="mt-5 inline-block text-sm font-semibold text-brass-deep hover:underline"
        >
          Read how we review →
        </Link>
      </section>
    </div>
  );
}
