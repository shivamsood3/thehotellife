import { NextResponse } from "next/server";
import { recordClick } from "@/lib/affiliate-clicks";
import { getHotel } from "@/content/hotels";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Records a reader leaving for a booking partner.
 *
 * Named /api/outbound rather than /api/track, /api/analytics or
 * /api/affiliate-click on purpose. The common blocklists match on path
 * substrings as well as hosts, and "track", "analytics", "collect", "pixel"
 * and "beacon" are all patterns they look for. A neutral first-party path
 * describing what it does is the one shape that reliably survives.
 *
 * The response is deliberately empty and fast: the reader is already on their
 * way to the partner and nothing here should delay or block that.
 */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return new NextResponse(null, { status: 204 });
  }

  const hotel = String(body.hotel ?? "").slice(0, 80);

  // Only count slugs we actually publish. Without this the endpoint is an
  // open write into our own revenue reporting, and a single scripted loop
  // could make one property look like the best performer on the site.
  if (!hotel || !getHotel(hotel)) {
    return new NextResponse(null, { status: 204 });
  }

  const click = {
    hotel,
    network: String(body.network ?? "unknown").slice(0, 40),
    tracked: body.tracked === true,
    placement: String(body.placement ?? "unknown").slice(0, 40),
    ts: new Date().toISOString(),
  };

  try {
    await recordClick(click);
  } catch (err) {
    // A failed write must never surface to the reader: they have already left
    // for the partner and the booking still counts whatever happens here.
    console.error("[affiliate-click] store error:", err);
  }

  return new NextResponse(null, { status: 204 });
}
