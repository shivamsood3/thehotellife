import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact · The Hotel Life",
  description:
    "Get in touch with The Hotel Life on WhatsApp about editorial tips, corrections, partnerships and press.",
};

const WA = "919810254606";
const wa = (text: string) => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.004c5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2Zm5.8 14.03c-.24.68-1.42 1.31-1.95 1.35-.5.05-1.13.26-3.8-.79-3.2-1.26-5.24-4.53-5.4-4.74-.16-.21-1.29-1.71-1.29-3.27 0-1.55.81-2.31 1.1-2.63.29-.32.63-.4.84-.4.21 0 .42 0 .6.01.19.01.45-.07.71.54.26.61.89 2.16.97 2.32.08.16.13.34.03.55-.11.21-.16.34-.32.53-.16.19-.34.42-.48.57-.16.16-.33.34-.14.66.19.32.85 1.4 1.83 2.27 1.26 1.12 2.32 1.47 2.64 1.63.32.16.5.13.69-.08.19-.21.79-.92.99-1.23.21-.32.42-.26.71-.16.29.11 1.84.87 2.16 1.03.32.16.53.24.61.37.08.14.08.79-.16 1.47Z" />
    </svg>
  );
}

const channels = [
  {
    title: "Editorial & Tips",
    body: "A hotel we should review? A correction? A tip from behind the front desk? We read everything.",
    text: "Hi, I have an editorial tip for The Hotel Life.",
  },
  {
    title: "Advertising & Partnerships",
    body: "Media kit, sponsorships and campaigns. See our advertise page for formats and audience.",
    text: "Hi, I'm interested in advertising with The Hotel Life.",
  },
  {
    title: "Press & General",
    body: "Everything else: press requests, syndication, and the occasional kind word.",
    text: "Hi, I'd like to get in touch with The Hotel Life.",
  },
];

export default function Contact() {
  return (
    <div className="pb-8">
      <header className="mt-10 max-w-2xl">
        <span className="eyebrow">Say Hello</span>
        <h1 className="font-display mt-2 text-4xl font-medium leading-tight text-ink sm:text-5xl">
          Contact
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">
          We&apos;re a small team, and the fastest way to reach us is WhatsApp. Pick the right
          door below and we&apos;ll get back to you within a couple of days.
        </p>
      </header>

      <div className="rule-brass mt-8 w-full" />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {channels.map((c) => (
          <div key={c.title} className="rounded-md border border-line bg-white p-7">
            <h2 className="font-display text-xl font-medium text-ink">{c.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{c.body}</p>
            <a
              href={wa(c.text)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brass-deep hover:underline"
            >
              <WhatsAppIcon />
              Message on WhatsApp
            </a>
          </div>
        ))}
      </div>

      {/* WhatsApp CTA */}
      <section className="mx-auto mt-16 max-w-2xl rounded-md border border-line bg-paper-2 px-6 py-12 text-center sm:px-12">
        <span className="eyebrow">One tap away</span>
        <h2 className="font-display mt-3 text-3xl font-medium text-ink">
          Prefer to just message us?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-ink-soft">
          Send us a note on WhatsApp and we&apos;ll pick it up as soon as we can. It&apos;s the
          quickest way to reach a real person on the team.
        </p>
        <a
          href={wa("Hi, I'd like to get in touch with The Hotel Life.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-8 py-3 text-xs font-semibold uppercase tracking-widest text-paper transition-colors hover:bg-brass-deep"
        >
          <WhatsAppIcon />
          Chat on WhatsApp
        </a>
        <p className="mt-4 text-xs text-ink-muted">+91 98102 54606</p>
      </section>
    </div>
  );
}
