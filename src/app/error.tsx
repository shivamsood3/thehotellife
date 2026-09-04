"use client";

import Link from "next/link";

export default function ErrorPage({ retry }: { error: Error & { digest?: string }; retry: () => void }) {
  return (
    <div className="flex min-h-[64vh] items-center justify-center py-14 sm:py-20">
      <section className="w-full max-w-2xl rounded-md border border-line bg-white px-6 py-14 text-center sm:px-12 sm:py-16">
        <span className="eyebrow">A temporary detour</span>
        <h1 className="font-display mt-3 text-4xl font-medium text-ink sm:text-5xl">Something interrupted the journey.</h1>
        <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-ink-soft">
          The page could not be prepared just now. Try once more, or return to the homepage while we straighten the pillows.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button onClick={() => retry()} className="rounded-full bg-ink px-7 py-3 text-xs font-semibold uppercase tracking-widest text-paper hover:bg-brass-deep">Try again</button>
          <Link href="/" className="rounded-full border border-ink px-7 py-3 text-xs font-semibold uppercase tracking-widest text-ink hover:bg-ink hover:text-paper">Return home</Link>
        </div>
      </section>
    </div>
  );
}
