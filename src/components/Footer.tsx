import Link from "next/link";
import NewsletterForm from "./NewsletterForm";

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
              An editorial guide to the world&apos;s most extraordinary hotels, and the
              stays worth crossing the planet for.
            </p>
            <NewsletterForm tone="dark" source="footer" buttonLabel="Join" className="mt-6 max-w-xs" />
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
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/thehotellifeofficial/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="The Hotel Life on Instagram"
              className="text-paper/60 transition-colors hover:text-brass"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" />
              </svg>
            </a>
            <p>© {new Date().getFullYear()} The Hotel Life. All rights reserved.</p>
          </div>
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
