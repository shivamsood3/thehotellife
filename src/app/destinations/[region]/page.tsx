import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { destinations, getDestination } from "@/content/destinations";
import { hotels } from "@/content/hotels";
import { getGuidesByRegion } from "@/content/guides";
import HotelCard from "@/components/HotelCard";
import GuideCard from "@/components/GuideCard";
import { AdSense } from "@/components/Ads";

export function generateStaticParams() {
  return destinations.map((d) => ({ region: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ region: string }>;
}): Promise<Metadata> {
  const { region } = await params;
  const dest = getDestination(region);
  if (!dest) return { title: "Not found" };
  return {
    title: `${dest.name}: Where to Stay`,
    description: dest.dek,
    openGraph: { title: `${dest.name} · The Hotel Life`, description: dest.dek, images: [dest.heroImage] },
  };
}

export default async function RegionPage({
  params,
}: {
  params: Promise<{ region: string }>;
}) {
  const { region } = await params;
  const dest = getDestination(region);
  if (!dest) notFound();

  const regionHotels = hotels.filter((h) => h.region === dest.region);
  const regionGuides = getGuidesByRegion(dest.region);

  return (
    <div className="pb-8">
      {/* Hero */}
      <div className="relative mt-6 overflow-hidden rounded-md">
        <div className="relative aspect-[3/4] w-full sm:aspect-[16/6]">
          <Image src={dest.heroImage} alt={dest.name} fill priority className="object-cover" sizes="100vw" />
          <div className="hero-scrim absolute inset-0" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
            <span className="eyebrow eyebrow-hero">Destinations</span>
            <h1 className="hero-text font-display mt-2 text-4xl font-medium leading-tight text-white sm:text-6xl">
              {dest.name}
            </h1>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="mx-auto mt-10 max-w-2xl">
        <p className="font-display text-2xl font-medium leading-snug text-ink">{dest.dek}</p>
        <div className="prose-editorial mt-6">
          {dest.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      <div className="my-14">
        <AdSense format="leaderboard" slot="5100000001" />
      </div>

      {/* Hotels in region */}
      <section>
        <div className="border-b border-line pb-4">
          <span className="eyebrow">The Collection</span>
          <h2 className="font-display mt-1 text-3xl font-medium text-ink">
            Hotels in {dest.name}
          </h2>
        </div>
        <div className="mt-8 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {regionHotels.map((h) => (
            <HotelCard key={h.slug} hotel={h} />
          ))}
        </div>
      </section>

      {/* Guides in region */}
      {regionGuides.length > 0 && (
        <section className="mt-20">
          <div className="border-b border-line pb-4">
            <span className="eyebrow">Field Notes</span>
            <h2 className="font-display mt-1 text-3xl font-medium text-ink">
              {dest.name} Guides
            </h2>
          </div>
          <div className="mt-8 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {regionGuides.map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </div>
        </section>
      )}

      <div className="mt-16 text-center">
        <Link href="/destinations" className="text-sm font-semibold text-brass-deep hover:underline">
          ← All destinations
        </Link>
      </div>
    </div>
  );
}
