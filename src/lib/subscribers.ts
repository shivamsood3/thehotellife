/** Durable newsletter storage with private Vercel Blob and legacy Redis support. */
import { createHash } from "node:crypto";
import { BlobNotFoundError, get, head, list as listBlobs, put } from "@vercel/blob";

const REDIS_URL = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || "";
const REDIS_TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || "";
const BLOB_TOKEN = process.env.BLOB_READ_WRITE_TOKEN || "";
const BLOB_PREFIX = "newsletter/subscribers/";

export const kvConfigured = (): boolean => Boolean(REDIS_URL && REDIS_TOKEN);
export const blobConfigured = (): boolean => Boolean(BLOB_TOKEN);
export const subscriberStoreConfigured = (): boolean => kvConfigured() || blobConfigured();

async function redis<T = unknown>(command: (string | number)[]): Promise<T> {
  const res = await fetch(REDIS_URL, {
    method: "POST",
    headers: { Authorization: `Bearer ${REDIS_TOKEN}`, "Content-Type": "application/json" },
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

type SubscriberRecord = SubscriberMeta & { email: string };

function subscriberPath(email: string) {
  const digest = createHash("sha256").update(email).digest("hex");
  return `${BLOB_PREFIX}${digest}.json`;
}

async function saveToBlob(email: string, meta: SubscriberMeta): Promise<boolean> {
  const pathname = subscriberPath(email);
  try {
    await head(pathname);
    return false;
  } catch (error) {
    if (!(error instanceof BlobNotFoundError)) throw error;
  }

  try {
    await put(pathname, JSON.stringify({ email, ...meta } satisfies SubscriberRecord), {
      access: "private",
      addRandomSuffix: false,
      allowOverwrite: false,
      contentType: "application/json",
      cacheControlMaxAge: 60,
    });
    return true;
  } catch (error) {
    if (error instanceof Error && /already exists|overwrite|conflict/i.test(error.message)) return false;
    throw error;
  }
}

/** Save a subscriber. Returns true if newly added, false if already present. */
export async function saveSubscriber(email: string, meta: SubscriberMeta): Promise<boolean> {
  if (blobConfigured()) return saveToBlob(email, meta);
  if (kvConfigured()) {
    const added = await redis<number>(["SADD", "newsletter:subscribers", email]);
    await redis(["LPUSH", "newsletter:log", JSON.stringify({ email, ...meta })]);
    return added === 1;
  }
  throw new Error("No subscriber store is configured");
}

async function listBlobSubscribers(): Promise<string[]> {
  const subscribers: string[] = [];
  let cursor: string | undefined;
  do {
    const page = await listBlobs({ prefix: BLOB_PREFIX, cursor, limit: 1000 });
    const records = await Promise.all(page.blobs.map(async (blob) => {
      const result = await get(blob.pathname, { access: "private", useCache: false });
      if (!result || result.statusCode !== 200) return null;
      return (await new Response(result.stream).json()) as SubscriberRecord;
    }));
    subscribers.push(...records.flatMap((record) => record?.email ? [record.email] : []));
    cursor = page.hasMore ? page.cursor : undefined;
  } while (cursor);
  return subscribers;
}

export async function listSubscribers(): Promise<string[]> {
  if (blobConfigured()) return listBlobSubscribers();
  if (kvConfigured()) return (await redis<string[]>(["SMEMBERS", "newsletter:subscribers"])) ?? [];
  return [];
}

export async function countSubscribers(): Promise<number> {
  if (blobConfigured()) {
    let count = 0;
    let cursor: string | undefined;
    do {
      const page = await listBlobs({ prefix: BLOB_PREFIX, cursor, limit: 1000 });
      count += page.blobs.length;
      cursor = page.hasMore ? page.cursor : undefined;
    } while (cursor);
    return count;
  }
  if (kvConfigured()) return (await redis<number>(["SCARD", "newsletter:subscribers"])) ?? 0;
  return 0;
}
