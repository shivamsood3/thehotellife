import { BlobNotFoundError, head, put } from "@vercel/blob";
import { makeMonthlyNewsletter } from "@/lib/monthly-newsletter";
import { listSubscribers, subscriberStoreConfigured } from "@/lib/subscribers";
import { resendNewsletterConfigured, sendMonthlyBroadcast, syncNewsletterContact } from "@/lib/resend-newsletter";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret || request.headers.get("authorization") !== `Bearer ${secret}`) {
    return Response.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  const issue = makeMonthlyNewsletter(new Date(), process.env.NEWSLETTER_POSTAL_ADDRESS || "Preview address");
  if (new URL(request.url).searchParams.get("preview") === "1") {
    return Response.json(issue
      ? { ok: true, period: issue.period, subject: issue.subject, stories: issue.count, sendingEnabled: process.env.NEWSLETTER_ENABLED === "true" }
      : { ok: true, skipped: "No new monthly issue to send" });
  }
  if (process.env.NEWSLETTER_ENABLED !== "true") {
    return Response.json({ ok: false, error: "Monthly sending is not enabled" }, { status: 503 });
  }
  if (!process.env.BLOB_READ_WRITE_TOKEN || !subscriberStoreConfigured() || !resendNewsletterConfigured() || !process.env.NEWSLETTER_FROM || !process.env.NEWSLETTER_POSTAL_ADDRESS) {
    return Response.json({ ok: false, error: "Newsletter configuration is incomplete" }, { status: 503 });
  }

  // Regenerate with the configured address so the production footer is exact.
  const sendIssue = makeMonthlyNewsletter(new Date(), process.env.NEWSLETTER_POSTAL_ADDRESS);
  if (!sendIssue) return Response.json({ ok: true, skipped: "No new monthly issue to send" });

  const marker = `newsletter/sends/${sendIssue.period}.json`;
  try {
    await head(marker);
    return Response.json({ ok: true, skipped: "This issue has already been started" });
  } catch (error) {
    if (!(error instanceof BlobNotFoundError)) throw error;
  }

  const subscribers = await listSubscribers();
  if (!subscribers.length) return Response.json({ ok: true, skipped: "No subscribers" });

  // Reconcile legacy Blob signups and current signups before broadcasting.
  // Resend retains unsubscribe status; the sync never reactivates an opt-out.
  let active = 0;
  try {
    for (const email of subscribers) {
      if ((await syncNewsletterContact(email)) === "active") active++;
    }
  } catch (error) {
    console.error("[monthly-newsletter] Contact sync failed:", error);
    return Response.json({ ok: false, error: "Subscriber sync failed; nothing sent" }, { status: 503 });
  }
  if (!active) return Response.json({ ok: true, skipped: "No active subscribers" });

  // Atomic marker prevents duplicate broadcasts if the cron route is invoked twice.
  // A failed/ambiguous send keeps the marker for manual reconciliation.
  try {
    await put(marker, JSON.stringify({ period: sendIssue.period, status: "started", at: new Date().toISOString() }), {
      access: "private", addRandomSuffix: false, allowOverwrite: false, contentType: "application/json",
    });
  } catch (error) {
    if (error instanceof Error && /already exists|overwrite|conflict/i.test(error.message)) {
      return Response.json({ ok: true, skipped: "This issue has already been started" });
    }
    throw error;
  }

  try {
    const broadcastId = await sendMonthlyBroadcast(sendIssue);
    await put(marker, JSON.stringify({ period: sendIssue.period, status: "sent", broadcastId, at: new Date().toISOString() }), {
      access: "private", addRandomSuffix: false, allowOverwrite: true, contentType: "application/json",
    });
    return Response.json({ ok: true, period: sendIssue.period, broadcastId, active });
  } catch (error) {
    console.error("[monthly-newsletter] Broadcast outcome requires review:", error);
    return Response.json({ ok: false, error: "Broadcast outcome requires manual review before retrying" }, { status: 503 });
  }
}
