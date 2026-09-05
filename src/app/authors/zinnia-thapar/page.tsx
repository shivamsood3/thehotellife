import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HotelCard from "@/components/HotelCard";
import JsonLd, { authorProfileSchema, breadcrumbSchema } from "@/components/JsonLd";
import { authorProfiles } from "@/content/authors";
import { hotels } from "@/content/hotels";

const profile = authorProfiles["Zinnia Thapar"]!;

export const metadata: Metadata = {
  title: `${profile.name}, ${profile.role}`,
  description: profile.bio,
  alternates: { canonical: `/authors/${profile.slug}` },
  openGraph: {
    title: `${profile.name} · ${profile.role} at The Hotel Life`,
    description: profile.bio,
    type: "profile",
    url: `/authors/${profile.slug}`,
    images: [{
      url: profile.image!,
      width: 348,
      height: 348,
      alt: profile.imageAlt!,
    }],
  },
  twitter: {
    card: "summary",
    title: `${profile.name} · ${profile.role} at The Hotel Life`,
    description: profile.bio,
    images: [profile.image!],
  },
};

export default function ZinniaThaparProfile() {
  const reviews = hotels.filter((hotel) => hotel.author === profile.name);

  return (
    <article className="pb-8">
      <JsonLd data={authorProfileSchema(profile)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: profile.name, path: `/authors/${profile.slug}` },
        ])}
      />

      <header className="mx-auto mt-12 max-w-3xl border-b border-line pb-10 text-center">
        <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full border-4 border-white bg-ink shadow-lg sm:h-36 sm:w-36">
          <Image
            src={profile.image!}
            alt={profile.imageAlt!}
            fill
            preload
            className="object-cover"
            sizes="144px"
          />
        </div>
        <span className="eyebrow mt-7 inline-block">Editorial profile</span>
        <h1 className="font-display mt-2 text-4xl font-medium leading-tight text-ink sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-brass-deep">
          {profile.role}
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
          {profile.bio}
        </p>
        <a
          href={profile.sameAs![0]}
          target="_blank"
          rel="me noopener noreferrer"
          className="mt-6 inline-block text-sm font-semibold text-brass-deep hover:underline"
        >
          View LinkedIn profile ↗
        </a>
      </header>

      <section className="mt-14">
        <div className="border-b border-line pb-4">
          <span className="eyebrow">Selected work</span>
          <h2 className="font-display mt-1 text-3xl font-medium text-ink">
            Hotel reviews by Zinnia Thapar
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            {reviews.length} personally written hotel reviews currently carry Zinnia&apos;s byline.
          </p>
        </div>
        <div className="mt-8 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((hotel) => <HotelCard key={hotel.slug} hotel={hotel} size="sm" />)}
        </div>
      </section>

      <div className="mt-16 text-center">
        <Link href="/about" className="text-sm font-semibold text-brass-deep hover:underline">
          Meet the editorial team →
        </Link>
      </div>
    </article>
  );
}
