import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Canonical host enforcement (Next 16 `proxy` convention, formerly
 * `middleware`).
 *
 * The site is reachable on its Vercel deployment domains as well as on
 * www.thehotellife.com. Left alone that is duplicate content: Google indexes
 * the same pages twice, splits ranking signals between them, and AdSense
 * reports them as separate sites.
 *
 * Any request arriving on a non-canonical host is permanently redirected to
 * the canonical one, preserving path and query. Preview deployments are left
 * alone so branch previews stay testable, and they are marked noindex
 * instead.
 */
const CANONICAL_HOST = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.thehotellife.com")
  .replace(/^https?:\/\//, "")
  .replace(/\/$/, "");

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const isProd = process.env.VERCEL_ENV === "production";
  const isLocal = host.startsWith("localhost") || host.startsWith("127.0.0.1");

  // Production traffic on the wrong host: send it to the canonical domain.
  if (isProd && !isLocal && host !== CANONICAL_HOST) {
    const url = request.nextUrl.clone();
    url.host = CANONICAL_HOST;
    url.protocol = "https:";
    url.port = "";
    return NextResponse.redirect(url, 308);
  }

  // Preview and any other non-canonical host stays reachable but unindexed.
  const response = NextResponse.next();
  if (!isLocal && host !== CANONICAL_HOST) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }
  return response;
}

export const config = {
  // Skip static assets and image optimisation; only pages need this.
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|webp|txt|xml|ico)$).*)"],
};
