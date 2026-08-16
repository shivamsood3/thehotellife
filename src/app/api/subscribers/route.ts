import { NextResponse } from "next/server";
import { kvConfigured, listSubscribers } from "@/lib/subscribers";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Retrieve the subscriber list. Protected by SUBSCRIBERS_TOKEN.
 *   GET /api/subscribers?token=SECRET          -> JSON
 *   GET /api/subscribers?token=SECRET&format=csv -> CSV download
 * (or pass the token as the `x-admin-token` header)
 */
export async function GET(req: Request) {
  const token = process.env.SUBSCRIBERS_TOKEN || "";
  const url = new URL(req.url);
  const provided = url.searchParams.get("token") || req.headers.get("x-admin-token") || "";

  // If no token is configured, the endpoint is locked entirely.
  if (!token || provided !== token) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  if (!kvConfigured()) {
    return NextResponse.json({
      ok: true,
      count: 0,
      subscribers: [],
      note: "Vercel KV not connected yet — signups are in the function logs until you connect a store.",
    });
  }

  const subscribers = await listSubscribers();

  if (url.searchParams.get("format") === "csv") {
    const csv = "email\n" + subscribers.join("\n") + "\n";
    return new NextResponse(csv, {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": 'attachment; filename="subscribers.csv"',
      },
    });
  }

  return NextResponse.json({ ok: true, count: subscribers.length, subscribers });
}
