import Image from "next/image";
import Link from "next/link";
import type { Hotel } from "@/content/hotels";

export function Stars({ rating }: { rating: number }) {
  return (
    <span className="inline-flex items-center gap-1 text-brass" aria-label={`${rating} out of 5`}>
      <span className="text-[0.7rem] tracking-widest">
        {"★".repeat(Math.round(rating))}
        <span className="text-line">{"★".repeat(5 - Math.round(rating))}</span>
      </span>
      <span className="font-sans text-xs font-semibold text-ink-soft">{rating.toFixed(1)}</span>
    </span>
  );
}

export default function HotelCard({
  hotel,
  size = "md",
}: {
  hotel: Hotel;
  size?: "sm" | "md" | "lg";
}) {
  const aspect = size === "lg" ? "aspect-[4/5]" : size === "sm" ? "aspect-[3/2]" : "aspect-[4/3]";

  return (
    <Link href={`/hotels/${hotel.slug}`} className="card-zoom group block">
      <div className={`relative ${aspect} overflow-hidden rounded-sm bg-paper-2`}>
        <Image
          src={hotel.cardImage}
          alt={hotel.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-widest text-ink-soft backdrop-blur">
          {hotel.category}
        </span>
      </div>
      <div className="pt-4">
        <div className="flex items-center justify-between gap-3">
          <span className="eyebrow text-ink-muted">
            {hotel.city}, {hotel.country}
          </span>
          <Stars rating={hotel.rating} />
        </div>
        <h3 className="font-display mt-1 text-xl font-medium leading-tight text-ink transition-colors group-hover:text-brass-deep">
          {hotel.name}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-soft">{hotel.excerpt}</p>
        <p className="mt-3 text-xs font-medium text-ink-muted">
          From <span className="text-ink">${hotel.priceFrom.toLocaleString()}</span> / night
        </p>
      </div>
    </Link>
  );
}
