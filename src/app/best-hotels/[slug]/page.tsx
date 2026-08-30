import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { bestHotelsLists, getBestHotelsList } from "@/content/best-hotels";
import JsonLd, {
  bestHotelsListSchema,
  breadcrumbSchema,
  faqSchema,
} from "@/components/JsonLd";

export function generateStaticParams() {
  return bestHotelsLists.map((list) => ({ slug: list.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const list = getBestHotelsList(slug);
  if (!list) return { title: "Not found" };

  return {
    title: `10 Best Hotels in ${list.destination}, ${list.country} (2026)`,
    description: list.dek,
    alternates: { canonical: `/best-hotels/${list.slug}` },
    keywords: [
      `best hotels in ${list.destination}`,
      `luxury hotels in ${list.destination}`,
      `where to stay in ${list.destination}`,
      `${list.destination} hotels`,
    ],
    openGraph: {
      title: `The 10 Best Hotels in ${list.destination}, ${list.country}`,
      description: list.dek,
      type: "article",
      url: `/best-hotels/${list.slug}`,
      images: [{ url: list.heroImage }],
      modifiedTime: list.updatedISO,
      authors: ["Zinnia Thapar"],
    },
  };
}

export default async function BestHotelsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const list = getBestHotelsList(slug);
  if (!list) notFound();

  return (
    <article className="pb-8">
      <JsonLd data={bestHotelsListSchema(list)} />
      <JsonLd data={faqSchema(list.faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Best Hotels", path: "/best-hotels" },
          { name: list.destination, path: `/best-hotels/${list.slug}` },
        ])}
      />

      <header className="mt-8">
        <div className="relative h-[34rem] w-full overflow-hidden rounded-md sm:h-auto sm:min-h-[28rem] sm:aspect-[16/8]">
          <Image
            src={list.heroImage}
            alt={`The best hotels in ${list.destination}, ${list.country}`}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="hero-scrim absolute inset-0" />
          <div className="absolute inset-0 flex flex-col justify-end p-6 text-white sm:p-10 lg:p-14">
            <span className="eyebrow eyebrow-hero">The THL Shortlist · Updated {list.updated}</span>
            <h1 className="font-display mt-3 max-w-4xl text-4xl font-medium leading-[1.05] sm:text-5xl lg:text-6xl">
              {list.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg">
              {list.dek}
            </p>
          </div>
        </div>
      </header>

      <div className="mx-auto mt-12 max-w-4xl">
        <div className="prose-editorial">
          {list.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <aside className="mt-10 rounded-md border border-line bg-paper-2 p-6 sm:p-8">
          <h2 className="eyebrow">The list at a glance</h2>
          <ol className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {list.hotels.map((hotel) => (
              <li key={hotel.rank}>
                <a
                  href={`#hotel-${hotel.rank}`}
                  className="flex gap-3 text-sm text-ink-soft hover:text-brass-deep"
                >
                  <span className="font-semibold text-brass-deep">{hotel.rank}.</span>
                  <span>{hotel.name}</span>
                </a>
              </li>
            ))}
          </ol>
        </aside>

        <section className="mt-14">
          <span className="eyebrow">Plan the stay</span>
          <h2 className="font-display mt-2 text-3xl font-medium text-ink">
            Before choosing your hotel
          </h2>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {list.planning.map((item) => (
              <div key={item.heading} className="rounded-md border border-line bg-white p-6">
                <h3 className="font-display text-xl font-medium leading-snug text-ink">
                  {item.heading}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 border-t border-line">
          {list.hotels.map((hotel) => (
            <section
              key={hotel.rank}
              id={`hotel-${hotel.rank}`}
              className="scroll-mt-28 border-b border-line py-12"
            >
              <div className="grid gap-5 sm:grid-cols-[4.5rem_1fr]">
                <div className="font-display text-5xl font-medium text-brass/70">
                  {String(hotel.rank).padStart(2, "0")}
                </div>
                <div>
                  <span className="eyebrow">{hotel.location}</span>
                  <h2 className="font-display mt-2 text-3xl font-medium text-ink sm:text-4xl">
                    {hotel.name}
                  </h2>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs uppercase tracking-widest text-ink-muted">
                    <span className="rounded-full border border-line px-3 py-1.5">
                      Best for: {hotel.bestFor}
                    </span>
                    <span className="rounded-full border border-line px-3 py-1.5">
                      {hotel.style}
                    </span>
                  </div>
                  <p className="mt-6 text-[1.05rem] leading-8 text-ink-soft">
                    {hotel.description}
                  </p>
                  <div className="mt-6 border-l-2 border-brass pl-5">
                    <p className="text-sm leading-relaxed text-ink-soft">
                      <strong className="font-semibold text-ink">Know before booking:</strong>{" "}
                      {hotel.caveat}
                    </p>
                  </div>
                  <div className="mt-7 flex flex-wrap gap-3">
                    {hotel.reviewSlug && (
                      <Link
                        href={`/hotels/${hotel.reviewSlug}`}
                        className="rounded-full bg-ink px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-paper hover:bg-brass-deep"
                      >
                        Read the THL review
                      </Link>
                    )}
                    <a
                      href={hotel.officialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-ink px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-ink hover:bg-ink hover:text-paper"
                    >
                      Visit official site ↗
                    </a>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </section>

        <section className="mt-16">
          <span className="eyebrow">Questions, answered</span>
          <h2 className="font-display mt-2 text-3xl font-medium text-ink">
            Choosing a hotel in {list.destination}
          </h2>
          <dl className="mt-8 divide-y divide-line border-y border-line">
            {list.faq.map((item) => (
              <div key={item.question} className="py-7">
                <dt className="font-display text-xl font-medium text-ink">
                  {item.question}
                </dt>
                <dd className="mt-3 leading-relaxed text-ink-soft">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </section>

        <div className="mt-12 rounded-md bg-ink p-7 text-paper sm:p-9">
          <p className="eyebrow text-paper/50">Editorial note</p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-paper/70">
            This list is independently selected and contains no paid placements.
            The external buttons above go to official hotel websites; THL does not
            earn a commission from those links. Hotels evolve, so confirm current
            facilities and policies directly before booking.
          </p>
        </div>

        <div className="mt-14 text-center">
          <Link href="/best-hotels" className="text-sm font-semibold text-brass-deep hover:underline">
            ← All best-hotel lists
          </Link>
        </div>
      </div>
    </article>
  );
}
