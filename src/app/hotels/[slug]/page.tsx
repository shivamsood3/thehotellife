import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { hotels, getHotel, getRelated } from "@/content/hotels";
import HotelCard, { Stars } from "@/components/HotelCard";
import { AdSense } from "@/components/Ads";

export function generateStaticParams() {
  return hotels.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const hotel = getHotel(slug);
  if (!hotel) return { title: "Not found" };
  return {
    title: `${hotel.name}, ${hotel.city}: Review`,
    description: hotel.excerpt,
    openGraph: {
      title: `${hotel.name} · The Hotel Life`,
      description: hotel.excerpt,
      images: [hotel.heroImage],
    },
  };
}

export default async function HotelPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const hotel = getHotel(slug);
  if (!hotel) notFound();

  const related = getRelated(slug);

  return (
    <article className="pb-8">
      {/* ===== HERO ===== */}
      <div className="relative mt-6 overflow-hidden rounded-md">
        <div className="relative aspect-[16/10] w-full sm:aspect-[16/7]">
          <Image
            src={hotel.heroImage}
            alt={hotel.name}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
            <span className="eyebrow text-brass">{hotel.category}</span>
            <h1 className="font-display mt-2 max-w-3xl text-4xl font-medium leading-[1.05] text-white sm:text-5xl">
              {hotel.name}
            </h1>
            <p className="mt-3 text-sm uppercase tracking-widest text-white/80">
              {hotel.city}, {hotel.country}
            </p>
          </div>
        </div>
      </div>

      {/* ===== META BAR ===== */}
      <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 border-b border-line pb-6">
        <Stars rating={hotel.rating} />
        <span className="text-sm text-ink-soft">
          From <span className="font-semibold text-ink">${hotel.priceFrom.toLocaleString()}</span>
          {hotel.priceNote ? ` / night · ${hotel.priceNote}` : " / night"}
        </span>
        <span className="text-sm text-ink-muted">Reviewed {hotel.year}</span>
      </div>

      {/* ===== BODY + SIDEBAR ===== */}
      <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_300px]">
        {/* Article */}
        <div className="min-w-0">
          <p className="font-display text-2xl font-medium leading-snug text-ink">
            {hotel.tagline}.
          </p>

          <div className="prose-editorial mt-8">
            {hotel.sections.map((section, i) => (
              <div key={i}>
                {section.heading && <h2>{section.heading}</h2>}
                {section.body.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
                {/* In-article AdSense after the first section */}
                {i === 0 && (
                  <div className="my-10 not-prose">
                    <AdSense format="in-article" slot="2000000001" />
                  </div>
                )}
              </div>
            ))}

            <blockquote>{hotel.standout}</blockquote>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          <div className="rounded-md border border-line bg-white p-6">
            <h3 className="eyebrow">The Essentials</h3>
            <dl className="mt-4 space-y-3">
              {hotel.quickFacts.map((fact) => (
                <div key={fact.label} className="flex justify-between gap-4 border-b border-line pb-3 last:border-0 last:pb-0">
                  <dt className="text-xs uppercase tracking-widest text-ink-muted">{fact.label}</dt>
                  <dd className="text-right text-sm font-medium text-ink">{fact.value}</dd>
                </div>
              ))}
            </dl>
            <button className="mt-6 w-full rounded-full bg-ink py-3 text-xs font-semibold uppercase tracking-widest text-paper transition-colors hover:bg-brass-deep">
              Check Availability
            </button>
            <p className="mt-3 text-center text-[0.65rem] text-ink-muted">
              We may earn a commission. It never affects our reviews.
            </p>
          </div>

          {/* Sidebar AdSense rectangle */}
          <AdSense format="rectangle" slot="2000000002" />
        </aside>
      </div>

      {/* ===== RELATED ===== */}
      <section className="mt-20">
        <div className="border-b border-line pb-4">
          <span className="eyebrow">Keep Exploring</span>
          <h2 className="font-display mt-1 text-3xl font-medium text-ink">You May Also Like</h2>
        </div>
        <div className="mt-8 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((h) => (
            <HotelCard key={h.slug} hotel={h} size="sm" />
          ))}
        </div>
      </section>

      <div className="mt-16 text-center">
        <Link href="/hotels" className="text-sm font-semibold text-brass-deep hover:underline">
          ← Back to all hotels
        </Link>
      </div>
    </article>
  );
}
