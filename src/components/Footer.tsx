import Link from "next/link";

const COLUMNS = [
  {
    title: "Explore",
    links: [
      { label: "All Hotels", href: "/hotels" },
      { label: "Destinations", href: "/destinations" },
      { label: "City Guides", href: "/guides" },
      { label: "The Edit", href: "/the-edit" },
    ],
  },
  {
    title: "By Region",
    links: [
      { label: "Europe", href: "/destinations/europe" },
      { label: "Asia", href: "/destinations/asia" },
      { label: "The Americas", href: "/destinations/americas" },
      { label: "Middle East & Africa", href: "/destinations/mea" },
    ],
  },
  {
    title: "The Hotel Life",
    links: [
      { label: "About Us", href: "/about" },
      { label: "How We Review", href: "/how-we-review" },
      { label: "Advertise", href: "/advertise" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand + newsletter */}
          <div>
            <span className="font-display text-2xl font-medium">The Hotel Life</span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/60">
              An editorial guide to the world&apos;s most extraordinary hotels — the
              stays worth crossing the planet for.
            </p>
            <form className="mt-6 flex max-w-xs overflow-hidden rounded-full border border-paper/25">
              <input
                type="email"
                placeholder="Your email"
                className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-paper placeholder:text-paper/40 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-brass px-4 text-xs font-semibold uppercase tracking-widest text-ink transition-colors hover:bg-paper"
              >
                Join
              </button>
            </form>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="eyebrow text-paper/50">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-paper/70 transition-colors hover:text-brass"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-paper/15 pt-8 text-xs text-paper/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} The Hotel Life. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-paper">Privacy</Link>
            <Link href="/terms" className="hover:text-paper">Terms</Link>
            <Link href="/advertise" className="hover:text-paper">Advertise With Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
