import { NextResponse } from "next/server";
import { kvConfigured, saveSubscriber } from "@/lib/subscribers";
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
    if (kvConfigured()) {
      const isNew = await saveSubscriber(email, meta);
      // Fire-and-forget email notification (no-op unless configured).
      await notifyInbox(email, meta).catch(() => {});
      return NextResponse.json({ ok: true, alreadySubscribed: !isNew });
    }

    // No store connected yet - never lose the signup; capture in function logs.
    console.log("[newsletter] signup (KV not connected):", JSON.stringify({ email, ...meta }));
    await notifyInbox(email, meta).catch(() => {});
    return NextResponse.json({ ok: true, stored: false });
  } catch (err) {
    // Storage hiccup - log so the signup is recoverable, still thank the user.
    console.error("[newsletter] store error:", err);
    console.log("[newsletter] signup (fallback):", JSON.stringify({ email, ...meta }));
    return NextResponse.json({ ok: true, stored: false });
  }
}
