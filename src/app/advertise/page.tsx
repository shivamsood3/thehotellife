import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advertise · The Hotel Life",
  description:
    "Reach an affluent, high-intent travel audience. Display, sponsorship and newsletter formats on The Hotel Life.",
};

const stats = [
  { value: "480K", label: "Monthly readers" },
  { value: "40K", label: "Newsletter subscribers" },
  { value: "3:40", label: "Avg. time on page" },
  { value: "68%", label: "Book travel within 30 days" },
];

const formats = [
  {
    name: "Leaderboard Takeover",
    partner: "as run by Hacoco",
    spec: "970 × 90 · sitewide, above the masthead",
    body: "Our most visible unit. The first thing every reader sees, on every page, sticky through the scroll. Sold as an exclusive sitewide sponsorship by the month.",
    price: "from $4,500 / mo",
  },
  {
    name: "Side Rail Skyscraper",
    partner: "as run by Antialias",
    spec: "300 × 600 · sticky, article & index pages",
    body: "A tall, high-impact canvas that travels down the page beside our editorial. Ideal for brand storytelling and campaign creative.",
    price: "from $3,200 / mo",
  },
  {
    name: "In-Feed & In-Article Display",
    partner: "Google AdSense & direct",
    spec: "Responsive · native placements",
    body: "Contextual units woven between our reviews and guides. Available programmatically via AdSense, or sold direct for premium campaigns.",
    price: "CPM on request",
  },
  {
    name: "Sponsored Review",
    partner: "Editorial partnership",
    spec: "Full guide · clearly labelled",
    body: "A complete, honest, professionally written review of your property, clearly marked as a partnership. We only accept hotels we'd genuinely recommend.",
    price: "from $6,000",
  },
  {
    name: "Newsletter Sponsorship",
    partner: "The Concierge, weekly",
    spec: "40K opt-in subscribers · 52% open rate",
    body: "A dedicated placement in our Sunday edition, in front of an engaged, high-spending travel audience that asked to hear from us.",
    price: "from $1,800 / send",
  },
];

export default function Advertise() {
  return (
    <div className="pb-8">
      {/* Hero */}
      <section className="mt-6 rounded-md bg-ink px-6 py-16 text-paper sm:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow text-brass">Partner With Us</span>
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
              <div className="font-display text-3xl font-medium text-brass sm:text-4xl">
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
          Tell us about your brand and campaign, and we&apos;ll send audience data, rates and
          availability within 48 hours.
        </p>
        <a
          href="mailto:partners@thehotellife.com?subject=Media%20Kit%20Request"
          className="mt-6 inline-block rounded-full bg-ink px-8 py-3 text-xs font-semibold uppercase tracking-widest text-paper transition-colors hover:bg-brass-deep"
        >
          partners@thehotellife.com
        </a>
      </section>
    </div>
  );
}
