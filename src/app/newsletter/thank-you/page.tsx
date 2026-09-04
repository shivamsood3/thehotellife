import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Subscription Confirmed",
  description: "Your subscription to The Concierge from The Hotel Life is confirmed.",
  alternates: { canonical: "/newsletter/thank-you" },
  robots: { index: false, follow: true },
};

export default async function NewsletterThankYou({
  searchParams,
}: PageProps<"/newsletter/thank-you">) {
  const { status } = await searchParams;
  const existing = status === "existing";

  return (
    <div className="flex min-h-[62vh] items-center justify-center py-14 sm:py-20">
      <section className="w-full max-w-2xl overflow-hidden rounded-md border border-line bg-white text-center shadow-[0_24px_80px_rgba(74,29,52,0.08)]">
        <div className="h-2 bg-gradient-to-r from-cyan via-plum to-orange" />
        <div className="px-6 py-12 sm:px-12 sm:py-16">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan/10 text-cyan-deep" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="m5 12.5 4.2 4.2L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="eyebrow mt-7 block">The Concierge</span>
          <h1 className="font-display mt-3 text-4xl font-medium leading-tight text-ink sm:text-5xl">
            {existing ? "You’re already on the list." : "Your Sunday reading is sorted."}
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-ink-soft">
            {existing
              ? "We already have your address safely saved. There’s nothing else you need to do."
              : "Thank you for subscribing. Look out for one remarkable hotel, sharp travel intelligence and the places worth crossing the planet for."}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/hotels" className="rounded-full bg-ink px-7 py-3 text-xs font-semibold uppercase tracking-widest text-paper transition-colors hover:bg-brass-deep">
              Explore hotels
            </Link>
            <Link href="/guides" className="rounded-full border border-ink px-7 py-3 text-xs font-semibold uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-paper">
              Read the guides
            </Link>
          </div>
          <p className="mt-8 text-xs text-ink-muted">If it does not arrive, check your promotions or spam folder.</p>
        </div>
      </section>
    </div>
  );
}
