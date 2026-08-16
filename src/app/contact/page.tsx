import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact · The Hotel Life",
  description:
    "Get in touch with The Hotel Life about editorial tips, corrections, partnerships and press.",
};

const channels = [
  {
    title: "Editorial & Tips",
    email: "editors@thehotellife.com",
    body: "A hotel we should review? A correction? A tip from behind the front desk? We read everything.",
  },
  {
    title: "Advertising & Partnerships",
    email: "partners@thehotellife.com",
    body: "Media kit, sponsorships and campaigns. See our advertise page for formats and audience.",
  },
  {
    title: "Press & General",
    email: "hello@thehotellife.com",
    body: "Everything else: press requests, syndication, and the occasional kind word.",
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
          We&apos;re a small team and we answer our own inbox. Pick the right door below and
          we&apos;ll get back to you within a couple of days.
        </p>
      </header>

      <div className="rule-brass mt-8 w-full" />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {channels.map((c) => (
          <div key={c.title} className="rounded-md border border-line bg-white p-7">
            <h2 className="font-display text-xl font-medium text-ink">{c.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{c.body}</p>
            <a
              href={`mailto:${c.email}`}
              className="mt-5 inline-block text-sm font-semibold text-brass-deep hover:underline"
            >
              {c.email}
            </a>
          </div>
        ))}
      </div>

      {/* Message form */}
      <section className="mx-auto mt-16 max-w-2xl">
        <h2 className="font-display text-2xl font-medium text-ink">Or send a note</h2>
        <form className="mt-6 space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-sm border border-line bg-white px-4 py-3 text-sm focus:border-brass focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-sm border border-line bg-white px-4 py-3 text-sm focus:border-brass focus:outline-none"
            />
          </div>
          <textarea
            rows={5}
            placeholder="Your message"
            className="w-full rounded-sm border border-line bg-white px-4 py-3 text-sm focus:border-brass focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-full bg-ink px-8 py-3 text-xs font-semibold uppercase tracking-widest text-paper transition-colors hover:bg-brass-deep"
          >
            Send message
          </button>
        </form>
      </section>
    </div>
  );
}
