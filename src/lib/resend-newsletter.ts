/** Resend's contact list powers newsletter delivery and its unsubscribe flow. */
const API = "https://api.resend.com";

export const resendNewsletterConfigured = () =>
  Boolean(process.env.RESEND_API_KEY && process.env.RESEND_SEGMENT_ID);

async function request(path: string, init: RequestInit = {}) {
  const response = await fetch(`${API}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
      ...init.headers,
    },
    cache: "no-store",
  });
  return response;
}

/** Never set unsubscribed=false on an existing Resend contact. */
export async function syncNewsletterContact(email: string): Promise<"active" | "unsubscribed"> {
  if (!resendNewsletterConfigured()) throw new Error("Resend newsletter is not configured");

  const contactPath = `/contacts/${encodeURIComponent(email)}`;
  const existing = await request(contactPath);
  if (existing.ok) {
    const contact = (await existing.json()) as { unsubscribed?: boolean };
    if (contact.unsubscribed) return "unsubscribed";
  } else if (existing.status === 404) {
    const created = await request("/contacts", {
      method: "POST",
      body: JSON.stringify({ email, segments: [{ id: process.env.RESEND_SEGMENT_ID }] }),
    });
    if (created.ok) return "active";
    // Another signup may have created it between our GET and POST.
    if (created.status !== 409) throw new Error(`Resend contact create failed: ${created.status}`);
  } else {
    throw new Error(`Resend contact lookup failed: ${existing.status}`);
  }

  const added = await request(`${contactPath}/segments/${process.env.RESEND_SEGMENT_ID}`, {
    method: "POST",
  });
  if (!added.ok && added.status !== 409) {
    throw new Error(`Resend segment add failed: ${added.status}`);
  }
  return "active";
}

export async function sendMonthlyBroadcast(input: {
  period: string;
  subject: string;
  html: string;
  text: string;
}): Promise<string> {
  if (!resendNewsletterConfigured() || !process.env.NEWSLETTER_FROM) {
    throw new Error("Resend broadcast is not configured");
  }
  const response = await request("/broadcasts", {
    method: "POST",
    body: JSON.stringify({
      segment_id: process.env.RESEND_SEGMENT_ID,
      from: process.env.NEWSLETTER_FROM,
      name: `The Concierge | ${input.period}`,
      subject: input.subject,
      html: input.html,
      text: input.text,
      send: true,
    }),
  });
  if (!response.ok) throw new Error(`Resend broadcast failed: ${response.status}`);
  const result = (await response.json()) as { id?: string };
  if (!result.id) throw new Error("Resend did not return a broadcast ID");
  return result.id;
}
