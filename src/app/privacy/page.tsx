import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/privacy" },
  title: "Privacy Policy · The Hotel Life",
  description: "How The Hotel Life collects, uses and protects your information.",
};

export default function Privacy() {
  return (
    <div className="mx-auto max-w-2xl pb-8">
      <header className="mt-10">
        <span className="eyebrow">Legal</span>
        <h1 className="font-display mt-2 text-4xl font-medium text-ink">Privacy Policy</h1>
        <p className="mt-3 text-sm text-ink-muted">Last updated: October 2026</p>
      </header>

      <div className="rule-brass mt-6 w-full" />

      <div className="prose-editorial mt-8">
        <p>
          The Hotel Life (&ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy. This
          policy explains what we collect when you visit thehotellife.com, why, and the
          choices you have. By using the site you agree to the practices described here.
        </p>

        <h2>What we collect</h2>
        <p>
          <strong>Information you give us.</strong> When you subscribe to our newsletter or
          contact us, we collect the email address and any details you choose to provide.
        </p>
        <p>
          <strong>Information collected automatically.</strong> Like most websites, we log
          standard technical data such as IP address, browser type, pages visited and
          referring site, to understand how the site is used and to keep it secure.
        </p>

        <h2>Cookies &amp; advertising</h2>
        <p>
          We do not run programmatic advertising and we set no advertising or
          analytics cookies. Our traffic measurement is aggregate and cookieless, and
          it does not identify individual readers or follow them across other sites.
          Advertising on this site is sold directly by us. When you follow a booking
          link to a partner such as Hotels.com or Booking.com, that company sets its
          own cookies under its own privacy policy once you arrive, which is how a
          booking is credited to us.
        </p>

        <h2>Affiliate links and commission</h2>
        <p>
          Some booking links on this site are affiliate links, served through
          Commission Junction on behalf of partners including Booking.com,
          Hotels.com and Accor. If you follow one of these links and go on to
          book, we may earn a commission at no additional cost to you. Links
          that earn us a commission are labelled as partner links wherever
          they appear.
        </p>
        <p>
          When you click an affiliate link you are passed through the
          partner network&apos;s redirect, which sets its own cookie so the
          booking can be attributed to this site. That cookie is read by the
          network and the advertiser, not by us, and it typically expires
          within days. We never receive your payment details or booking
          information: we only see aggregate click and commission reporting.
        </p>
        <p>
          Commission never influences our reviews, ratings or which hotels we
          choose to cover. Where a hotel has no affiliate programme we link
          directly to the hotel and earn nothing, and we say so on the page.
        </p>

        <h2>How we use your information</h2>
        <p>
          We use what we collect to send the newsletter you asked for, respond to your
          messages, measure and improve our content, and display relevant advertising that
          helps keep The Hotel Life free to read.
        </p>

        <h2>Newsletter storage</h2>
        <p>
          Newsletter email addresses are held in the private subscriber store connected to this
          website. When our email service is active, we also share subscribed addresses with
          Resend so it can deliver The Concierge and manage unsubscribes. We retain the record
          for as long as you remain subscribed, or as needed to meet legal and security obligations.
        </p>

        <h2>Sharing</h2>
        <p>
          We do not sell your personal information. We share data only with the service
          providers who help us operate the site, for example our email and analytics
          providers and advertising partners, and only as needed to provide those services,
          or where required by law.
        </p>

        <h2>Your rights</h2>
        <p>
          Every newsletter email includes an unsubscribe link. You can also ask us to remove
          your address, access your information or
          delete the personal data we hold about you by messaging us on WhatsApp at{" "}
          <a
            href="https://wa.me/919810254606"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brass-deep hover:underline"
          >
            +91 98102 54606
          </a>
          . Depending on where you live, you may have additional rights under laws such as
          the GDPR or CCPA.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy? Message us on WhatsApp at{" "}
          <a
            href="https://wa.me/919810254606"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-brass-deep hover:underline"
          >
            +91 98102 54606
          </a>{" "}
          and we&apos;ll be glad to help.
        </p>
      </div>
    </div>
  );
}
