import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { guides, getGuide } from "@/content/guides";
import { getHotel } from "@/content/hotels";
import { AdSense } from "@/components/Ads";
import { Stars } from "@/components/HotelCard";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return { title: "Not found" };
  return {
    title: guide.title,
    description: guide.excerpt,
    openGraph: { title: guide.title, description: guide.excerpt, images: [guide.heroImage] },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const stayHotels = guide.hotelSlugs.map(getHotel).filter(Boolean);

  return (
    <article className="pb-8">
      {/* Hero */}
      <div className="relative mt-6 overflow-hidden rounded-md">
        <div className="relative aspect-[16/10] w-full sm:aspect-[16/7]">
          <Image src={guide.heroImage} alt={guide.title} fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
            <span className="eyebrow text-brass">{guide.destination}</span>
            <h1 className="font-display mt-3 max-w-4xl text-3xl font-medium leading-[1.1] text-white sm:text-5xl">
              {guide.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Byline */}
      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-line pb-6 text-sm text-ink-muted">
        <span>By {guide.author}</span>
        <span>{guide.readTime} min read</span>
        <span>{guide.date}</span>
      </div>

      {/* Body */}
      <div className="mx-auto mt-10 max-w-2xl">
        <p className="font-display text-2xl font-medium leading-snug text-ink">{guide.dek}</p>

        <div className="prose-editorial mt-8">
          {guide.sections.map((section, i) => (
            <div key={i}>
              {section.heading && <h2>{section.heading}</h2>}
              {section.body.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
              {i === 1 && (
                <div className="my-10">
                  <AdSense format="in-article" slot="4000000002" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Where to stay - links into hotel reviews */}
        {stayHotels.length > 0 && (
          <div className="mt-14 rounded-md border border-line bg-white p-6 sm:p-8">
            <span className="eyebrow">Where to Stay</span>
            <div className="mt-5 space-y-5">
              {stayHotels.map(
                (h) =>
                  h && (
                    <Link
                      key={h.slug}
                      href={`/hotels/${h.slug}`}
                      className="group flex gap-4 border-b border-line pb-5 last:border-0 last:pb-0"
                    >
                      <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-sm">
                        <Image src={h.cardImage} alt={h.name} fill className="object-cover" sizes="96px" />
                      </div>
                      <div>
                        <span className="eyebrow text-ink-muted">
                          {h.city}, {h.country}
                        </span>
                        <h3 className="font-display text-lg font-medium text-ink group-hover:text-brass-deep">
                          {h.name}
                        </h3>
                        <div className="mt-1">
                          <Stars rating={h.rating} />
                        </div>
                      </div>
                    </Link>
                  )
              )}
            </div>
          </div>
        )}
      </div>

      <div className="mt-16 text-center">
        <Link href="/guides" className="text-sm font-semibold text-brass-deep hover:underline">
          ← All guides
        </Link>
      </div>
    </article>
  );
}
