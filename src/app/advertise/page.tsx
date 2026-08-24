import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/advertise" },
  title: "Advertise · The Hotel Life",
  description:
    "Reach an affluent, high-intent travel audience. Display, sponsorship and newsletter formats on The Hotel Life.",
};

const stats = [
  { value: "100K", label: "Monthly visitors" },
  { value: "20K", label: "Newsletter subscribers" },
  { value: "3:40", label: "Avg. time on page" },
  { value: "52%", label: "Repeat visitors book within 30 days" },
];

const formats = [
  {
    name: "Leaderboard Takeover",
    partner: "as run by Hacoco",
    spec: "970 × 90 · sitewide, above the masthead",
    body: "Our most visible unit. The first thing every reader sees, on every page, sticky through the scroll. Sold as an exclusive sitewide sponsorship by the month.",
    price: "from $650 / mo",
  },
  {
    name: "Side Rail Skyscraper",
    partner: "as run by Antialias",
    spec: "300 × 600 · sticky, article & index pages",
    body: "A tall, high-impact canvas that travels down the page beside our editorial. Ideal for brand storytelling and campaign creative.",
    price: "from $450 / mo",
  },
  {
    name: "In-Feed & In-Article Display",
    partner: "Google AdSense & direct",
    spec: "Responsive · native placements",
    body: "Contextual units woven between our reviews and guides. Available programmatically via AdSense, or sold direct for premium campaigns.",
    price: "from $6 CPM",
  },
  {
    name: "Sponsored Review",
    partner: "Editorial partnership",
    spec: "Full guide · clearly labelled",
    body: "A complete, honest, professionally written review of your property, clearly marked as a partnership. We only accept hotels we'd genuinely recommend.",
    price: "from $900",
  },
  {
    name: "Newsletter Sponsorship",
    partner: "The Concierge, weekly",
    spec: "20K opt-in subscribers · 52% open rate",
    body: "A dedicated placement in our Sunday edition, in front of an engaged, high-spending travel audience that asked to hear from us.",
    price: "from $350 / send",
  },
];

export default function Advertise() {
  return (
    <div className="pb-8">
      {/* Hero */}
      <section className="mt-6 rounded-md bg-ink px-6 py-16 text-paper sm:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Partner With Us</span>
          <h1 className="font-display mt-3 text-4xl font-medium leading-tight sm:text-5xl">
            Reach travellers at the moment they&apos;re deciding where to spend.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-paper/70">
            The Hotel Life reaches an affluent, high-intent audience actively planning
            luxury travel, and trusting us to tell them where to go.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl font-medium text-brass-deep sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-widest text-paper/50">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Formats */}
      <section className="mt-16">
        <div className="max-w-2xl">
          <span className="eyebrow">The Media Kit</span>
          <h2 className="font-display mt-1 text-3xl font-medium text-ink">
            Formats &amp; Placements
          </h2>
          <p className="mt-3 text-base leading-relaxed text-ink-soft">
            From high-impact sitewide takeovers to native, contextual display. All rates are
            indicative, and we&apos;ll build a package around your campaign.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {formats.map((f) => (
            <div
              key={f.name}
              className="grid gap-4 rounded-md border border-line bg-white p-6 sm:grid-cols-[1.4fr_2fr_auto] sm:items-center sm:gap-8 sm:p-8"
            >
              <div>
                <h3 className="font-display text-xl font-medium text-ink">{f.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-widest text-brass-deep">
                  {f.partner}
                </p>
                <p className="mt-2 text-xs text-ink-muted">{f.spec}</p>
              </div>
              <p className="text-sm leading-relaxed text-ink-soft">{f.body}</p>
              <div className="text-sm font-semibold text-ink sm:text-right">{f.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto mt-16 max-w-2xl rounded-md border border-line bg-paper-2 px-6 py-12 text-center sm:px-12">
        <span className="eyebrow">Let&apos;s talk</span>
        <h2 className="font-display mt-3 text-3xl font-medium text-ink">
          Request the full media kit
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-ink-soft">
          Message us on WhatsApp with a note about your brand and campaign, and we&apos;ll
          send audience data, rates and availability within 48 hours.
        </p>
        <a
          href="https://wa.me/919810254606?text=Hi%2C%20I%27d%20like%20the%20full%20media%20kit%20for%20The%20Hotel%20Life."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-8 py-3 text-xs font-semibold uppercase tracking-widest text-paper transition-colors hover:bg-brass-deep"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.004c5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2Zm5.8 14.03c-.24.68-1.42 1.31-1.95 1.35-.5.05-1.13.26-3.8-.79-3.2-1.26-5.24-4.53-5.4-4.74-.16-.21-1.29-1.71-1.29-3.27 0-1.55.81-2.31 1.1-2.63.29-.32.63-.4.84-.4.21 0 .42 0 .6.01.19.01.45-.07.71.54.26.61.89 2.16.97 2.32.08.16.13.34.03.55-.11.21-.16.34-.32.53-.16.19-.34.42-.48.57-.16.16-.33.34-.14.66.19.32.85 1.4 1.83 2.27 1.26 1.12 2.32 1.47 2.64 1.63.32.16.5.13.69-.08.19-.21.79-.92.99-1.23.21-.32.42-.26.71-.16.29.11 1.84.87 2.16 1.03.32.16.53.24.61.37.08.14.08.79-.16 1.47Z" />
          </svg>
          Message us on WhatsApp
        </a>
      </section>
    </div>
  );
}
