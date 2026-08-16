"use client";

import { useState } from "react";
import Link from "next/link";
import { HacocoBanner } from "./Ads";

const NAV = [
  { label: "Hotels", href: "/hotels" },
  { label: "Destinations", href: "/destinations" },
  { label: "Guides", href: "/guides" },
  { label: "The Edit", href: "/the-edit" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Direct-sold Hacoco leaderboard */}
      <HacocoBanner />

      <div className="border-b border-line bg-paper/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
          {/* Wordmark */}
          <Link href="/" className="group flex flex-col leading-none" onClick={() => setOpen(false)}>
            <span className="eyebrow text-[0.6rem] text-ink-muted">Est. 2016</span>
            <span className="font-display text-2xl font-medium tracking-tight text-ink sm:text-[1.7rem]">
              The Hotel Life
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-sm font-medium text-ink-soft transition-colors hover:text-brass-deep"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/newsletter"
              className="hidden rounded-full border border-ink px-5 py-2 text-xs font-semibold uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-paper sm:inline-block"
            >
              Subscribe
            </Link>
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center md:hidden"
            >
              <div className="space-y-1.5">
                <span
                  className={`block h-px w-6 bg-ink transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
                />
                <span className={`block h-px w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
                <span
                  className={`block h-px w-6 bg-ink transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="border-t border-line bg-paper md:hidden">
            <div className="mx-auto max-w-[1400px] px-4 py-4 sm:px-6">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-3 text-base font-medium text-ink-soft last:border-0 hover:text-brass-deep"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/newsletter"
                onClick={() => setOpen(false)}
                className="mt-4 block rounded-full bg-ink py-3 text-center text-xs font-semibold uppercase tracking-widest text-paper"
              >
                Subscribe
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
