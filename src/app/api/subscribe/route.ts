import { NextResponse } from "next/server";
import { saveSubscriber, subscriberStoreConfigured } from "@/lib/subscribers";
import { notifyInbox } from "@/lib/notify";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field. Silently accept bots.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const email = String(body.email ?? "").trim().toLowerCase();
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 422 }
    );
  }

  const meta = {
    ts: new Date().toISOString(),
    source: String(body.source ?? "site").slice(0, 40),
  };

  try {
    if (subscriberStoreConfigured()) {
      const isNew = await saveSubscriber(email, meta);
      // Fire-and-forget email notification (no-op unless configured).
      await notifyInbox(email, meta).catch(() => {});
      return NextResponse.json({ ok: true, alreadySubscribed: !isNew });
    }

    return NextResponse.json(
      { ok: false, error: "Subscriptions are temporarily unavailable. Please try again shortly." },
      { status: 503 }
    );
  } catch (err) {
    // Never tell a reader they are subscribed unless durable storage succeeded.
    console.error("[newsletter] store error:", err);
    return NextResponse.json(
      { ok: false, error: "We could not save your subscription. Please try again." },
      { status: 503 }
    );
  }
}
