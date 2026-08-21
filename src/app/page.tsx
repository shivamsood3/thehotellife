import Image from "next/image";
import Link from "next/link";
import { hotels, getFeatured, regions } from "@/content/hotels";
import HotelCard, { Stars } from "@/components/HotelCard";
import { AdSense } from "@/components/Ads";
import NewsletterForm from "@/components/NewsletterForm";

export default function Home() {
  const featured = getFeatured();
  const hero = featured[0];
  const collection = hotels.slice(1, 7);
  const editorPick = featured[3] ?? hotels[4];

  return (
    <div className="pb-8">
      {/* ============ HERO ============ */}
      <section className="relative mt-6 overflow-hidden rounded-md">
        <div className="relative aspect-[3/4] min-h-[30rem] w-full sm:aspect-[16/8] sm:min-h-[26rem] lg:aspect-[16/7] lg:min-h-[34rem]">
          <Image
            src={hero.heroImage}
            alt={hero.name}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="hero-scrim absolute inset-0" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-14">
            <span className="eyebrow eyebrow-hero">The Hotel Life · Featured Stay</span>
            <h1 className="hero-text font-display mt-3 max-w-3xl text-4xl font-medium leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              {hero.tagline}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-white/85">
              <Stars rating={hero.rating} />
              <span className="text-sm">
                {hero.name}, {hero.city}, {hero.country}
              </span>
            </div>
            <Link
              href={`/hotels/${hero.slug}`}
              className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-widest text-ink transition-transform hover:translate-x-0.5"
            >
              Read the review →
            </Link>
          </div>
        </div>
      </section>

      {/* ============ INTRO STRIP ============ */}
      <section className="mx-auto mt-14 max-w-3xl text-center">
        <span className="eyebrow">An honest guide to extraordinary hotels</span>
        <p className="font-display mt-4 text-2xl font-medium leading-snug text-ink sm:text-[1.75rem]">
          We stay so you don&apos;t have to guess. No sponsored fluff, just the hotels
          around the world worth crossing a continent for, reviewed the way we&apos;d
          brief a friend.
        </p>
        <div className="rule-brass mx-auto mt-8 w-40" />
      </section>

      {/* ============ FEATURED COLLECTION ============ */}
      <section className="mt-16">
        <div className="flex items-end justify-between border-b border-line pb-4">
          <div>
            <span className="eyebrow">The Collection</span>
            <h2 className="font-display mt-1 text-3xl font-medium text-ink">
              Hotels Around the World
            </h2>
          </div>
          <Link
            href="/hotels"
            className="hidden text-sm font-semibold text-brass-deep hover:underline sm:block"
          >
            View all →
          </Link>
        </div>

        <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {collection.slice(0, 3).map((h) => (
            <HotelCard key={h.slug} hotel={h} />
          ))}
        </div>

        {/* In-feed AdSense, high-value placement between content rows */}
        <div className="my-12">
          <AdSense format="leaderboard" slot="1000000001" />
        </div>

        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {collection.slice(3, 6).map((h) => (
            <HotelCard key={h.slug} hotel={h} />
          ))}
        </div>
      </section>

      {/* ============ EDITOR'S PICK (full-bleed feature) ============ */}
      <section className="mt-20 overflow-hidden rounded-md bg-ink text-paper">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[320px] lg:min-h-[480px]">
            <Image
              src={editorPick.heroImage}
              alt={editorPick.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center gap-5 p-8 sm:p-12 lg:p-16">
            <span className="eyebrow eyebrow-hero">Editor&apos;s Pick</span>
            <h2 className="font-display text-3xl font-medium leading-tight sm:text-4xl">
              {editorPick.name}
            </h2>
            <p className="text-sm uppercase tracking-widest text-paper/50">
              {editorPick.city}, {editorPick.country}
            </p>
            <p className="text-lg leading-relaxed text-paper/80">
              &ldquo;{editorPick.standout}&rdquo;
            </p>
            <Link
              href={`/hotels/${editorPick.slug}`}
              className="mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-paper/40 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-paper transition-colors hover:bg-paper hover:text-ink"
            >
              Why we love it →
            </Link>
          </div>
        </div>
      </section>

      {/* ============ DESTINATIONS ============ */}
      <section className="mt-20">
        <div className="border-b border-line pb-4">
          <span className="eyebrow">Start Somewhere</span>
          <h2 className="font-display mt-1 text-3xl font-medium text-ink">
            Explore by Region
          </h2>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {regions.map((region, i) => {
            const rHotel = hotels.find((h) => h.region === region) ?? hotels[i];
            const count = hotels.filter((h) => h.region === region).length;
            return (
              <Link
                key={region}
                href="/destinations"
                className="card-zoom group relative aspect-[3/4] overflow-hidden rounded-sm"
              >
                <Image
                  src={rHotel.cardImage}
                  alt={region}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="hero-scrim absolute inset-0" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-display text-xl font-medium text-white">{region}</h3>
                  <p className="text-xs uppercase tracking-widest text-white/70">
                    {count} {count === 1 ? "stay" : "stays"}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ============ NEWSLETTER ============ */}
      <section className="mt-20 rounded-md border border-line bg-paper-2 px-6 py-14 text-center sm:px-12">
        <span className="eyebrow">The Concierge</span>
        <h2 className="font-display mx-auto mt-3 max-w-2xl text-3xl font-medium leading-tight text-ink sm:text-4xl">
          One extraordinary hotel in your inbox, every Sunday.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-ink-soft">
          Join 20,000 readers who trust The Hotel Life to find the stays worth the airfare.
          No spam, ever.
        </p>
        <NewsletterForm tone="light" source="homepage" className="mx-auto mt-8 max-w-md" />
      </section>
    </div>
  );
}
