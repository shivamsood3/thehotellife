/**
 * Durable affiliate-click counts.
 *
 * Client-side analytics loses a real share of this data: Vercel Analytics,
 * like every hosted analytics script, sits on the common blocklists, and the
 * readers most likely to block it are exactly the affluent, privacy-minded
 * audience this site attracts. Losing a pageview to that is tolerable. Losing
 * a booking hand-off is not, because it is the only revenue signal there is.
 *
 * So the server counts them too. The route is same-origin and the write
 * happens server-side, which no content blocker can reach.
 *
 * Storage mirrors the newsletter's arrangement so there is one thing to
 * configure, not two:
 *   Redis  - preferred. Hash counters aggregate natively, so reading a
 *            per-hotel breakdown is one command rather than a scan.
 *   Blob   - fallback. One small record per click, listed by prefix.
 *   stdout - always. Structured JSON in the Vercel runtime logs, so the data
 *            exists from the first deploy even with nothing provisioned.
 */
import { list as listBlobs, put } from "@vercel/blob";

const REDIS_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || "";
const REDIS_TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || "";
const BLOB_TOKEN = process.env.BLOB_READ_WRITE_TOKEN || "";
const BLOB_PREFIX = "affiliate/clicks/";

/** Hash of all-time counts, and one hash per month for trend. */
const TOTAL_KEY = "affiliate:clicks";
const monthKey = (iso: string) => `affiliate:clicks:${iso.slice(0, 7)}`;

export const redisConfigured = (): boolean => Boolean(REDIS_URL && REDIS_TOKEN);
export const blobConfigured = (): boolean => Boolean(BLOB_TOKEN);
export const clickStoreConfigured = (): boolean => redisConfigured() || blobConfigured();

async function redis<T = unknown>(command: (string | number)[]): Promise<T> {
  const res = await fetch(REDIS_URL, {
    method: "POST",
    headers: { Authorization: `Bearer ${REDIS_TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify(command),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Redis request failed: ${res.status}`);
  return ((await res.json()) as { result: T }).result;
}

export interface ClickRecord {
  hotel: string;
  network: string;
  tracked: boolean;
  placement: string;
  ts: string;
}

export async function recordClick(click: ClickRecord): Promise<void> {
  // Always emit a structured line. It is the only record that needs no
  // provisioning, and it keeps the data useful while a store is being set up.
  console.log("[affiliate-click]", JSON.stringify(click));

  if (redisConfigured()) {
    await Promise.all([
      redis(["HINCRBY", TOTAL_KEY, click.hotel, 1]),
      redis(["HINCRBY", monthKey(click.ts), click.hotel, 1]),
    ]);
    return;
  }

  if (blobConfigured()) {
    // Random suffix rather than a deterministic name: two readers clicking the
    // same hotel in the same millisecond must not overwrite each other.
    await put(`${BLOB_PREFIX}${click.ts.slice(0, 10)}/${click.hotel}.json`, JSON.stringify(click), {
      access: "private",
      addRandomSuffix: true,
      contentType: "application/json",
    });
  }
}

/** Per-hotel totals, highest first. */
export async function readClickTotals(): Promise<{ hotel: string; clicks: number }[]> {
  if (redisConfigured()) {
    const flat = await redis<string[]>(["HGETALL", TOTAL_KEY]);
    const out: { hotel: string; clicks: number }[] = [];
    for (let i = 0; i < (flat?.length ?? 0); i += 2) {
      out.push({ hotel: flat[i], clicks: Number(flat[i + 1]) });
    }
    return out.sort((a, b) => b.clicks - a.clicks);
  }

  if (blobConfigured()) {
    const counts = new Map<string, number>();
    let cursor: string | undefined;
    do {
      const page = await listBlobs({ prefix: BLOB_PREFIX, cursor, limit: 1000 });
      for (const b of page.blobs) {
        // …/<date>/<hotel>-<randomsuffix>.json
        const file = b.pathname.split("/").pop() ?? "";
        const hotel = file.replace(/-[^-]*\.json$/, "").replace(/\.json$/, "");
        counts.set(hotel, (counts.get(hotel) ?? 0) + 1);
      }
      cursor = page.hasMore ? page.cursor : undefined;
    } while (cursor);
    return [...counts.entries()]
      .map(([hotel, clicks]) => ({ hotel, clicks }))
      .sort((a, b) => b.clicks - a.clicks);
  }

  return [];
}
