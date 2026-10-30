"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AD_CONSENT_KEYS, CONSENT_STORAGE_KEY, type ConsentChoice } from "@/lib/consent";

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

/**
 * Pushes the reader's choice to Google. Written against dataLayer directly
 * rather than window.gtag: the default script defines gtag as a function
 * declaration inside its own scope, so it is not reliably on window, while
 * the queue it writes to is.
 */
function sendConsent(choice: ConsentChoice) {
  const payload = Object.fromEntries(AD_CONSENT_KEYS.map((k) => [k, choice]));
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(["consent", "update", payload]);
}

/**
 * Consent notice, deliberately a bottom bar rather than a modal.
 *
 * It never covers the article, never blocks scrolling and never interrupts a
 * reader mid-sentence. The two choices carry equal visual weight, which is
 * not a style preference: UK GDPR and the EDPB's dark-pattern guidance both
 * treat a prominent Accept beside a buried Reject as consent that was not
 * freely given. A banner that nags is also a banner that costs pageviews, so
 * the compliant design and the commercial one agree here.
 */
export default function ConsentBanner() {
  // Render nothing until mounted. localStorage does not exist during the
  // server pass, so deciding visibility before then guarantees a hydration
  // mismatch on every page.
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(CONSENT_STORAGE_KEY)) setVisible(true);
    } catch {
      // Private mode or blocked storage: show the notice rather than assume
      // consent. A reader who cannot be remembered is asked each visit, which
      // is the honest failure direction.
      setVisible(true);
    }
  }, []);

  function choose(choice: ConsentChoice) {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, choice);
    } catch {
      // Storage unavailable: the choice still applies to this pageview.
    }
    sendConsent(choice);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie choices"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-paper/95 backdrop-blur-sm"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-4 py-4 sm:px-6 lg:px-10 md:flex-row md:items-center md:gap-8">
        <p className="flex-1 text-sm leading-relaxed text-ink-soft">
          We use cookies to measure our advertising. Decline and the site works
          exactly the same, minus the measurement.{" "}
          <Link href="/privacy" className="font-semibold text-brass-deep underline underline-offset-2">
            Privacy policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => choose("denied")}
            className="flex-1 rounded-full border border-ink px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-ink transition-colors hover:bg-ink hover:text-paper md:flex-none"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => choose("granted")}
            className="flex-1 rounded-full border border-ink bg-ink px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-paper transition-colors hover:bg-brass-deep hover:border-brass-deep md:flex-none"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
