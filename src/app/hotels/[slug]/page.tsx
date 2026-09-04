import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { hotels, getHotel, getRelated } from "@/content/hotels";
import HotelCard, { Stars } from "@/components/HotelCard";
import { AdSense } from "@/components/Ads";
import { primaryBookingLink } from "@/lib/affiliate";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import JsonLd, { hotelReviewSchema, breadcrumbSchema, faqSchema, editorialDateToISO } from "@/components/JsonLd";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.thehotellife.com";

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
    alternates: { canonical: `/hotels/${hotel.slug}` },
    description: hotel.excerpt,
    keywords: [hotel.name, `${hotel.name} review`, `luxury hotels in ${hotel.city}`, `where to stay in ${hotel.city}`],
    openGraph: {
      title: `${hotel.name} · The Hotel Life`,
      description: hotel.excerpt,
      type: "article",
      url: `/hotels/${hotel.slug}`,
      publishedTime: editorialDateToISO(hotel.year),
      modifiedTime: editorialDateToISO(hotel.year),
      authors: [hotel.author ?? "Zinnia Thapar"],
      images: [{ url: hotel.heroImage, alt: hotel.imageAlt ?? `${hotel.name} in ${hotel.city}` }],
    },
    twitter: { card: "summary_large_image", title: `${hotel.name}: Hotel Review`, description: hotel.excerpt, images: [hotel.heroImage] },
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
  const booking = primaryBookingLink(hotel);
  const bestFor = hotel.quickFacts.find((fact) => fact.label.toLowerCase() === "best for")?.value;
  const hotelFaq = [
    { question: `Where is ${hotel.name}?`, answer: `${hotel.name} is in ${hotel.city}, ${hotel.country}. ${hotel.quickFacts.find((fact) => fact.label.toLowerCase() === "location")?.value ?? "See the review for neighbourhood and arrival advice."}` },
    { question: `What is The Hotel Life's rating for ${hotel.name}?`, answer: `Our editors rate ${hotel.name} ${hotel.rating.toFixed(1)} out of 5 after assessing its sense of place, rooms, service, food, design and value.` },
    { question: `Who is ${hotel.name} best for?`, answer: bestFor ? `${hotel.name} is particularly well suited to ${bestFor.toLowerCase()}.` : `${hotel.name} suits travellers looking for a distinctive luxury stay in ${hotel.city}.` },
    { question: `How much does ${hotel.name} cost?`, answer: `Our ${hotel.year} review recorded an indicative starting rate of USD ${hotel.priceFrom.toLocaleString()} per night. Rates vary by date, room, taxes and availability; confirm a live quote before booking.` },
  ];

  return (
    <article className="pb-8">
      <JsonLd data={hotelReviewSchema(hotel)} />
      <JsonLd data={faqSchema(hotelFaq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Hotels", path: "/hotels" },
          { name: hotel.name, path: `/hotels/${hotel.slug}` },
        ])}
      />
      {/* ===== HERO ===== */}
      <div className="relative mt-6 overflow-hidden rounded-md">
        <div className="relative aspect-[4/5] w-full sm:aspect-[16/7]">
          <Image
            src={hotel.heroImage}
            alt={hotel.imageAlt ?? `${hotel.name} in ${hotel.city}, ${hotel.country}`}
            fill
            preload
            className="object-cover"
            sizes="100vw"
          />
          <div className="hero-scrim absolute inset-0" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
            <span className="eyebrow eyebrow-hero">{hotel.category}</span>
            <h1 className="hero-text font-display mt-2 max-w-3xl text-4xl font-medium leading-[1.05] text-white sm:text-5xl">
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
          Indicative from <span className="font-semibold text-ink">${hotel.priceFrom.toLocaleString()}</span>
          {hotel.priceNote ? ` / night · ${hotel.priceNote}` : " / night"}
        </span>
        <span className="text-sm text-ink-muted">
          By <span className="font-medium text-ink">{hotel.author}</span> · Reviewed {hotel.year}
        </span>
        <ShareWhatsApp
          url={`${SITE_URL}/hotels/${hotel.slug}`}
          title={`${hotel.name}, ${hotel.city}`}
          className="sm:ml-auto"
        />
      </div>

      {/* ===== BODY + SIDEBAR ===== */}
      <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_300px]">
        {/* Article */}
        <div className="min-w-0">
          <p className="font-display text-2xl font-medium leading-snug text-ink">
            {hotel.tagline}.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 border-y border-line py-3 text-xs text-ink-muted">
            <span>Editorial review by {hotel.author}</span>
            <span aria-hidden="true">·</span>
            <Link href="/how-we-review" className="font-semibold text-brass-deep hover:underline">
              Read our scoring methodology
            </Link>
            <span aria-hidden="true">·</span>
            <span>Indicative rate recorded with the {hotel.year} review</span>
          </div>

          <div className="prose-editorial mt-8">
            {hotel.sections.map((section, i) => (
              <div key={i}>
                {section.heading && <h2>{section.heading}</h2>}
                {section.body.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
                {section.image && (
                  <figure className="my-10 not-prose">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md sm:aspect-[3/2]">
                      <Image
                        src={section.image.src}
                        alt={section.image.caption ?? hotel.name}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 760px, 100vw"
                      />
                    </div>
                    {section.image.caption && (
                      <figcaption className="mt-3 text-center text-xs uppercase tracking-widest text-ink-muted">
                        {section.image.caption}
                      </figcaption>
                    )}
                  </figure>
                )}
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
            <a
              href={booking.url}
              target="_blank"
              rel="sponsored nofollow noopener noreferrer"
              className="mt-6 block w-full rounded-full bg-ink py-3 text-center text-xs font-semibold uppercase tracking-widest text-paper transition-colors hover:bg-brass-deep"
            >
              Check Availability
            </a>
            <p className="mt-3 text-center text-[0.65rem] text-ink-muted">
              {booking.tracked ? (
                <>
                  {booking.network} partner link. We may earn a commission, at
                  no cost to you. It never affects our reviews.
                </>
              ) : booking.network === "the hotel" ? (
                <>Official hotel booking link. THL does not earn a commission from this booking.</>
              ) : (
                <>{booking.network} link. THL does not currently earn a commission from this booking.</>
              )}
            </p>
            <p className="mt-2 text-center text-[0.65rem] leading-relaxed text-ink-muted">
              Displayed prices are editorial indications, not live quotes. Your dates, room and taxes may change the final rate.
            </p>
          </div>

          {/* Sidebar AdSense rectangle */}
          <AdSense format="rectangle" slot="2000000002" />
        </aside>
      </div>

      <section className="mx-auto mt-16 max-w-3xl border-t border-line pt-12">
        <span className="eyebrow">The essentials, answered</span>
        <h2 className="font-display mt-2 text-3xl font-medium text-ink">Planning a stay at {hotel.name}</h2>
        <dl className="mt-6 divide-y divide-line border-y border-line">
          {hotelFaq.map((item) => (
            <div key={item.question} className="py-6">
              <dt className="font-display text-xl font-medium text-ink">{item.question}</dt>
              <dd className="mt-2 leading-relaxed text-ink-soft">{item.answer}</dd>
            </div>
          ))}
        </dl>
      </section>

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
