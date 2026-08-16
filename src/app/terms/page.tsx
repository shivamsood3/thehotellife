import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use · The Hotel Life",
  description: "The terms that govern your use of The Hotel Life.",
};

export default function Terms() {
  return (
    <div className="mx-auto max-w-2xl pb-8">
      <header className="mt-10">
        <span className="eyebrow">Legal</span>
        <h1 className="font-display mt-2 text-4xl font-medium text-ink">Terms of Use</h1>
        <p className="mt-3 text-sm text-ink-muted">Last updated: August 2026</p>
      </header>

      <div className="rule-brass mt-6 w-full" />

      <div className="prose-editorial mt-8">
        <p>
          Welcome to The Hotel Life. By accessing or using thehotellife.com, you agree to
          these terms. If you don&apos;t agree, please don&apos;t use the site.
        </p>

        <h2>Editorial independence</h2>
        <p>
          Our reviews reflect our genuine opinions. Where a stay is hosted, gifted, or part
          of a paid partnership, we disclose it clearly within the article. Sponsored content
          is always labelled as such. No advertiser controls our editorial verdicts.
        </p>

        <h2>Use of content</h2>
        <p>
          All content on this site, including text, photography, design and logos, is owned by The
          Hotel Life or its licensors and is protected by copyright. You may share links and
          brief quotations with attribution, but you may not republish, resell or reproduce
          our content in substance without written permission.
        </p>

        <h2>Accuracy &amp; affiliate links</h2>
        <p>
          We work hard to keep details like prices, openings and amenities accurate, but hotels
          change and errors happen; we make no warranty that everything is current or
          complete. Some links may be affiliate links, meaning we may earn a commission if
          you book through them. This never affects our reviews or what we choose to cover,
          and it comes at no extra cost to you.
        </p>

        <h2>Third-party links &amp; advertising</h2>
        <p>
          The site contains advertising and links to third-party websites. We are not
          responsible for the content, products or privacy practices of those sites, and a
          link is not an endorsement.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          The site and its content are provided &ldquo;as is&rdquo; for general information.
          To the fullest extent permitted by law, The Hotel Life is not liable for any loss
          arising from your use of, or reliance on, the site, including any travel or
          booking decisions you make based on our content.
        </p>

        <h2>Changes</h2>
        <p>
          We may update these terms from time to time. Continued use of the site after any
          change means you accept the revised terms.
        </p>

        <h2>Contact</h2>
        <p>
          Questions? Reach us at <strong>hello@thehotellife.com</strong>.
        </p>
      </div>
    </div>
  );
}
