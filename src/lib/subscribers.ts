/**
 * Newsletter subscriber storage — Vercel KV (Upstash Redis), no third parties.
 *
 * Talks to the KV REST API with plain fetch, so there's no SDK dependency and
 * it works whether the store injects KV_REST_API_* or UPSTASH_REDIS_REST_*.
 * Connect a store in the Vercel dashboard (Storage → Upstash for Redis →
 * connect to this project) and these env vars appear automatically.
 *
 * Data model:
 *   newsletter:subscribers  — a SET of unique emails (auto-dedupes)
 *   newsletter:log          — a LIST of {email, ts, source} for the audit trail
 */

const REDIS_URL =
  process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || "";
const REDIS_TOKEN =
  process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || "";

export const kvConfigured = (): boolean => Boolean(REDIS_URL && REDIS_TOKEN);

async function redis<T = unknown>(command: (string | number)[]): Promise<T> {
  const res = await fetch(REDIS_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${REDIS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(command),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`KV request failed: ${res.status}`);
  const data = (await res.json()) as { result: T };
  return data.result;
}

export interface SubscriberMeta {
  ts: string;
  source: string;
}

/** Save a subscriber. Returns true if newly added, false if already present. */
export async function saveSubscriber(
  email: string,
  meta: SubscriberMeta
): Promise<boolean> {
  const added = await redis<number>(["SADD", "newsletter:subscribers", email]);
  await redis(["LPUSH", "newsletter:log", JSON.stringify({ email, ...meta })]);
  return added === 1;
}

/** Full list of subscriber emails. */
export async function listSubscribers(): Promise<string[]> {
  return (await redis<string[]>(["SMEMBERS", "newsletter:subscribers"])) ?? [];
}

/** Count of subscribers. */
export async function countSubscribers(): Promise<number> {
  return (await redis<number>(["SCARD", "newsletter:subscribers"])) ?? 0;
}
