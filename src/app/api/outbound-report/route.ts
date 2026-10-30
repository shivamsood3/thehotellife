import { NextResponse } from "next/server";
import { clickStoreConfigured, readClickTotals } from "@/lib/affiliate-clicks";
import { getHotel } from "@/content/hotels";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Per-hotel affiliate click totals. Protected by SUBSCRIBERS_TOKEN, passed as
 * the x-admin-token header, matching the subscriber export so there is one
 * admin credential rather than two.
 *
 * Returns the estimated value alongside the count: at a $895 median nightly
 * rate and 4% commission a booked two-night stay pays about $72, so a click
 * is worth roughly $1.80 at a 2.5% booking rate. The estimate is a planning
 * figure, not revenue — CJ remains the system of record for what is owed.
 */
const VALUE_PER_CLICK = 1.8;

export async function GET(req: Request) {
  const token = process.env.SUBSCRIBERS_TOKEN || "";
  const provided = req.headers.get("x-admin-token") || "";
  if (!token || provided !== token) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  if (!clickStoreConfigured()) {
    return NextResponse.json({
      ok: true,
      clicks: [],
      note: "No durable store connected. Clicks are still written to the Vercel runtime logs; search them for [affiliate-click].",
    });
  }

  const totals = await readClickTotals();
  const clicks = totals.map((t) => {
    const h = getHotel(t.hotel);
    return {
      ...t,
      name: h?.name ?? t.hotel,
      city: h?.city ?? null,
      estimatedValueUsd: Number((t.clicks * VALUE_PER_CLICK).toFixed(2)),
    };
  });

  return NextResponse.json({
    ok: true,
    totalClicks: clicks.reduce((n, c) => n + c.clicks, 0),
    estimatedValueUsd: Number(clicks.reduce((n, c) => n + c.estimatedValueUsd, 0).toFixed(2)),
    clicks,
  });
}
