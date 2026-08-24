import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/content/destinations";
import { hotels } from "@/content/hotels";
import { AdSense } from "@/components/Ads";

export const metadata: Metadata = {
  alternates: { canonical: "/destinations" },
  title: "Destinations: The World's Great Hotels, by Region",
  description:
    "Explore the world's most extraordinary hotels by region: Europe, Asia, the Americas, and the Middle East & Africa.",
};

export default function DestinationsIndex() {
  return (
    <div className="pb-8">
      <header className="mt-10 max-w-2xl">
        <span className="eyebrow">Around the World</span>
        <h1 className="font-display mt-2 text-4xl font-medium leading-tight text-ink sm:text-5xl">
          Destinations
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">
          Four corners of the world, each with its own idea of what a great hotel should be.
          Start with a region and let it lead you somewhere unexpected.
        </p>
      </header>

      <div className="rule-brass mt-8 w-full" />

      <div className="mt-10 space-y-6">
        {destinations.map((d, i) => {
          const count = hotels.filter((h) => h.region === d.region).length;
          return (
            <Link
              key={d.slug}
              href={`/destinations/${d.slug}`}
              className="card-zoom group grid overflow-hidden rounded-md bg-white md:grid-cols-[1.1fr_1fr]"
            >
              <div className="relative min-h-[240px] overflow-hidden md:min-h-[300px]">
                <Image
                  src={d.heroImage}
                  alt={d.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:bg-gradient-to-r" />
              </div>
              <div className="flex flex-col justify-center gap-4 p-8 lg:p-12">
                <span className="eyebrow">
                  {count} {count === 1 ? "hotel" : "hotels"}
                </span>
                <h2 className="font-display text-3xl font-medium text-ink group-hover:text-brass-deep sm:text-4xl">
                  {d.name}
                </h2>
                <p className="text-base leading-relaxed text-ink-soft">{d.dek}</p>
                <span className="text-sm font-semibold text-brass-deep">Explore {d.name} →</span>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-12">
        <AdSense format="leaderboard" slot="5000000001" />
      </div>
    </div>
  );
}
