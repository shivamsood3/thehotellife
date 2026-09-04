import Image from "next/image";
import Link from "next/link";
import type { Guide } from "@/content/guides";

export default function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Link href={`/guides/${guide.slug}`} className="card-zoom group block">
      <div className="relative aspect-[3/2] overflow-hidden rounded-sm bg-paper-2">
        <Image
          src={guide.cardImage}
          alt={guide.imageAlt ?? `Travel guide to ${guide.destination}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-widest text-ink-soft backdrop-blur">
          Guide
        </span>
      </div>
      <div className="pt-4">
        <span className="eyebrow text-ink-muted">{guide.destination}</span>
        <h3 className="font-display mt-1 text-xl font-medium leading-tight text-ink transition-colors group-hover:text-brass-deep">
          {guide.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-soft">{guide.dek}</p>
        <p className="mt-3 text-xs font-medium text-ink-muted">
          {guide.readTime} min read · {guide.date}
        </p>
      </div>
    </Link>
  );
}
