import Link from "next/link";
import { HangerMark } from "@/components/Logo";

export default function NotFound() {
  return (
    <div className="flex min-h-[64vh] items-center justify-center py-14 sm:py-20">
      <section className="w-full max-w-3xl rounded-md border border-line bg-white px-6 py-14 text-center sm:px-12 sm:py-20">
        <HangerMark height={54} className="mx-auto" title="The Hotel Life" />
        <p className="font-display mt-7 text-7xl font-semibold leading-none text-paper-2 sm:text-9xl" aria-hidden="true">404</p>
        <span className="eyebrow mt-5 block">The route less travelled</span>
        <h1 className="font-display mt-3 text-4xl font-medium text-ink sm:text-5xl">This room cannot be found.</h1>
        <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-ink-soft">
          The page may have checked out, moved elsewhere, or never existed. Let us point you towards a stay that is very much worth finding.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="rounded-full bg-ink px-7 py-3 text-xs font-semibold uppercase tracking-widest text-paper hover:bg-brass-deep">Return home</Link>
          <Link href="/search" className="rounded-full border border-ink px-7 py-3 text-xs font-semibold uppercase tracking-widest text-ink hover:bg-ink hover:text-paper">Search the journal</Link>
        </div>
      </section>
    </div>
  );
}
