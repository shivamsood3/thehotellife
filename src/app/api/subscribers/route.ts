import { NextResponse } from "next/server";
import { listSubscribers, subscriberStoreConfigured } from "@/lib/subscribers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Retrieve the subscriber list. Protected by SUBSCRIBERS_TOKEN.
 * Pass SUBSCRIBERS_TOKEN as the `x-admin-token` header. Keeping credentials
 * out of the URL prevents them leaking into browser history and request logs.
 */
export async function GET(req: Request) {
  const token = process.env.SUBSCRIBERS_TOKEN || "";
  const url = new URL(req.url);
  const provided = req.headers.get("x-admin-token") || "";

  // If no token is configured, the endpoint is locked entirely.
  if (!token || provided !== token) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  if (!subscriberStoreConfigured()) {
    return NextResponse.json({
      ok: true,
      count: 0,
      subscribers: [],
      note: "No durable subscriber store is connected.",
    });
  }

  const subscribers = await listSubscribers();

  if (url.searchParams.get("format") === "csv") {
    const csv = "email\n" + subscribers.join("\n") + "\n";
    return new NextResponse(csv, {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": 'attachment; filename="subscribers.csv"',
        "Cache-Control": "private, no-store",
      },
    });
  }

  return NextResponse.json(
    { ok: true, count: subscribers.length, subscribers },
    { headers: { "Cache-Control": "private, no-store" } }
  );
}
