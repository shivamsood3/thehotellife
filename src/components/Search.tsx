"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { hotels } from "@/content/hotels";
import { guides } from "@/content/guides";

interface Item {
  type: "Hotel" | "Guide";
  title: string;
  sub: string;
  href: string;
  haystack: string;
}

const INDEX: Item[] = [
  ...hotels.map((h) => ({
    type: "Hotel" as const,
    title: h.name,
    sub: `${h.city}, ${h.country} · ${h.category}`,
    href: `/hotels/${h.slug}`,
    haystack: `${h.name} ${h.city} ${h.country} ${h.region} ${h.category} ${h.tagline} ${h.excerpt}`.toLowerCase(),
  })),
  ...guides.map((g) => ({
    type: "Guide" as const,
    title: g.title,
    sub: `${g.destination} · Guide`,
    href: `/guides/${g.slug}`,
    haystack: `${g.title} ${g.destination} ${g.region} ${g.dek} ${g.excerpt}`.toLowerCase(),
  })),
];

export default function Search({ initialQuery = "" }: { initialQuery?: string }) {
  const [query, setQuery] = useState(initialQuery);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    const terms = q.split(/\s+/);
    return INDEX.filter((item) => terms.every((t) => item.haystack.includes(t))).slice(0, 40);
  }, [query]);

  const q = query.trim();

  return (
    <div>
      <div className="relative">
        <svg
          className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-ink-muted"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
          <path d="m20 20-3.2-3.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <input
          autoFocus
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search hotels, cities, guides…"
          aria-label="Search"
          className="w-full rounded-full border border-line bg-white py-4 pl-14 pr-5 text-base text-ink placeholder:text-ink-muted focus:border-brass focus:outline-none"
        />
      </div>

      <div className="mt-8">
        {q.length >= 2 && (
          <p className="text-sm text-ink-muted">
            {results.length === 0
              ? `No matches for “${q}”. Try a city, country, or hotel name.`
              : `${results.length} result${results.length === 1 ? "" : "s"} for “${q}”`}
          </p>
        )}

        <ul className="mt-4 divide-y divide-line">
          {results.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="group flex items-center justify-between gap-4 py-4">
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-medium text-ink group-hover:text-brass-deep">
                    {item.title}
                  </h3>
                  <p className="truncate text-sm text-ink-soft">{item.sub}</p>
                </div>
                <span className="shrink-0 rounded-full border border-line px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-widest text-ink-muted">
                  {item.type}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {q.length < 2 && (
          <p className="mt-4 text-sm text-ink-muted">
            Start typing to search {hotels.length} hotels and {guides.length} guides.
          </p>
        )}
      </div>
    </div>
  );
}
