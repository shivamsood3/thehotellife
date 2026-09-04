import type { MetadataRoute } from "next";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.thehotellife.com").replace(/\/$/, "");

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // API responses are not editorial pages and may contain private data.
        disallow: ["/api/"],
      },
      {
        // Explicit AI discovery and user-retrieval agents. These repeat the
        // wildcard policy so future crawler-specific rules cannot
        // accidentally prevent THL from appearing in answer engines.
        userAgent: [
          "OAI-SearchBot",
          "ChatGPT-User",
          "GPTBot",
          "Claude-SearchBot",
          "Claude-User",
          "ClaudeBot",
          "Google-Extended",
          "PerplexityBot",
        ],
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
