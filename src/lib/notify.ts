/**
 * Optional email notification for new subscribers.
 * Disabled unless RESEND_API_KEY + NEWSLETTER_INBOX are set - the site works
 * fully (saving to the connected private store) without it. Add these later to also get a
 * heads-up email in your inbox for every signup.
 */
import type { SubscriberMeta } from "./subscribers";

const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
const INBOX = process.env.NEWSLETTER_INBOX || "";
const FROM = process.env.NEWSLETTER_FROM || "";

export async function notifyInbox(email: string, meta: SubscriberMeta): Promise<void> {
  if (!RESEND_API_KEY || !INBOX || !FROM) return;
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to: [INBOX],
      subject: `New subscriber: ${email}`,
      text: `New Hotel Life newsletter signup\n\nEmail:  ${email}\nSource: ${meta.source}\nWhen:   ${meta.ts}`,
    }),
  });
}
