import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "That page has checked out. Browse our hotel reviews, destination guides and editor's collections instead.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center py-24 text-center sm:py-32">
      <span className="eyebrow text-brass-deep">Error 404</span>
      <h1 className="font-display mt-4 text-5xl font-medium leading-none text-ink sm:text-7xl">
        No room at this address.
      </h1>
      <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
        The page you were looking for has checked out, or perhaps never checked in. Let us
        point you somewhere worth staying.
      </p>

      <div className="rule-brass mt-10 w-40" />

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="rounded-full bg-ink px-7 py-3 text-xs font-semibold uppercase tracking-widest text-paper transition-colors hover:bg-brass-deep"
        >
          Back to home
        </Link>
        <Link
          href="/hotels"
          className="rounded-full border border-ink px-7 py-3 text-xs font-semibold uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-paper"
        >
          Browse all hotels
        </Link>
      </div>

      <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
        <Link href="/destinations" className="text-ink-soft hover:text-brass-deep">Destinations</Link>
        <Link href="/guides" className="text-ink-soft hover:text-brass-deep">Guides</Link>
        <Link href="/the-edit" className="text-ink-soft hover:text-brass-deep">The Edit</Link>
        <Link href="/newsletter" className="text-ink-soft hover:text-brass-deep">Newsletter</Link>
      </div>
    </div>
  );
}
