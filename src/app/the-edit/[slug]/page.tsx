import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { articles, getArticle } from "@/content/articles";
import { getHotel } from "@/content/hotels";
import HotelCard from "@/components/HotelCard";
import { AdSense } from "@/components/Ads";
import ShareWhatsApp from "@/components/ShareWhatsApp";
import JsonLd, { articleSchema, breadcrumbSchema, editorialDateToISO } from "@/components/JsonLd";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.thehotellife.com";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Not found" };
  return {
    title: article.title,
    alternates: { canonical: `/the-edit/${article.slug}` },
    description: article.excerpt,
    keywords: [article.kicker, "luxury hotel editorial", "hotel advice", "The Hotel Life"],
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      url: `/the-edit/${article.slug}`,
      publishedTime: editorialDateToISO(article.date),
      modifiedTime: editorialDateToISO(article.date),
      authors: [article.author],
      images: [{ url: article.heroImage, alt: article.imageAlt ?? article.title }],
    },
    twitter: { card: "summary_large_image", title: article.title, description: article.excerpt, images: [article.heroImage] },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = article.hotelSlugs.map(getHotel).filter(Boolean);
  const more = articles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <article className="pb-8">
      <JsonLd
        data={articleSchema({
          path: `/the-edit/${article.slug}`,
          title: article.title,
          excerpt: article.excerpt,
          author: article.author,
          date: article.date,
          image: article.heroImage,
          imageAlt: article.imageAlt,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "The Edit", path: "/the-edit" },
          { name: article.title, path: `/the-edit/${article.slug}` },
        ])}
      />
      {/* Hero */}
      <div className="relative mt-6 overflow-hidden rounded-md">
        <div className="relative aspect-[4/5] w-full sm:aspect-[16/7]">
          <Image
            src={article.heroImage}
            alt={article.imageAlt ?? article.title}
            fill
            preload
            className="object-cover"
            sizes="100vw"
          />
          <div className="hero-scrim absolute inset-0" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
            <span className="eyebrow eyebrow-hero">{article.kicker}</span>
            <h1 className="hero-text font-display mt-3 max-w-4xl text-3xl font-medium leading-[1.1] text-white sm:text-5xl">
              {article.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Byline */}
      <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-line pb-6 text-sm text-ink-muted">
        <span>By {article.author}</span>
        <span>{article.readTime} min read</span>
        <span>{article.date}</span>
        <ShareWhatsApp
          url={`${SITE_URL}/the-edit/${article.slug}`}
          title={article.title}
          className="sm:ml-auto"
        />
      </div>

      {/* Body */}
      <div className="mx-auto mt-10 max-w-2xl">
        <p className="font-display text-2xl font-medium leading-snug text-ink">
          {article.dek}
        </p>

        <div className="prose-editorial mt-8">
          {article.sections.map((section, i) => (
            <div key={i}>
              {section.heading && <h2>{section.heading}</h2>}
              {section.body.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
              {i === 1 && (
                <div className="my-10 not-prose">
                  <AdSense format="in-article" slot="7000000001" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Hotels referenced */}
      {related.length > 0 && (
        <section className="mt-20">
          <div className="border-b border-line pb-4">
            <span className="eyebrow">Mentioned in This Piece</span>
            <h2 className="font-display mt-1 text-3xl font-medium text-ink">
              Hotels Worth a Look
            </h2>
          </div>
          <div className="mt-8 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((h) => h && <HotelCard key={h.slug} hotel={h} size="sm" />)}
          </div>
        </section>
      )}

      {/* More reading */}
      <section className="mt-20">
        <div className="border-b border-line pb-4">
          <span className="eyebrow">Keep Reading</span>
          <h2 className="font-display mt-1 text-3xl font-medium text-ink">
            More from The Edit
          </h2>
        </div>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {more.map((a) => (
            <Link key={a.slug} href={`/the-edit/${a.slug}`} className="card-zoom group">
              <div className="relative aspect-[3/2] overflow-hidden rounded-sm">
                <Image
                  src={a.cardImage}
                  alt={a.imageAlt ?? a.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <span className="eyebrow mt-4 block">{a.kicker}</span>
              <h3 className="font-display mt-1 text-xl font-medium leading-snug text-ink group-hover:text-brass-deep">
                {a.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      <div className="mt-16 text-center">
        <Link href="/the-edit" className="text-sm font-semibold text-brass-deep hover:underline">
          ← Back to The Edit
        </Link>
      </div>
    </article>
  );
}
