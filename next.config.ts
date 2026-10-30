import type { NextConfig } from "next";
import path from "node:path";

/**
 * Content-Security-Policy
 * -----------------------
 * Locked down by default, but pre-cleared for Google AdSense so the site
 * stays secure now and ads work the moment NEXT_PUBLIC_ADSENSE_CLIENT is set.
 * Programmatic advertising was removed, and with it the wide Google ad
 * surface this policy used to carry. What remains is the editorial image
 * hosts and nothing else, so script-src, frame-src and connect-src are back
 * to 'self'. Re-opening any of these should require a deliberate reason.
 */
const EDITORIAL_IMAGE_HOSTS = [
  "https://media.sixsenses.com",
  "https://www.aman.com",
  "https://www.passalacqua.it",
  "https://dam.kerzner.com",
  "https://thebrando.com",
  "https://picasso.rosewoodhotelgroup.com",
  "https://www.thejohrijaipur.com",
  "https://tablecells.com",
  "https://thelodhi.com",
  "https://www.theleela.com",
  "https://live.staticflickr.com",
  "https://www.oberoihotels.com",
].join(" ");

const csp = [
  `default-src 'self'`,
  `script-src 'self' 'unsafe-inline' 'unsafe-eval'`,
  `style-src 'self' 'unsafe-inline'`,
  `img-src 'self' data: blob: https://images.unsplash.com ${EDITORIAL_IMAGE_HOSTS}`,
  `font-src 'self' data:`,
  `frame-src 'self'`,
  `connect-src 'self'`,
  `object-src 'none'`,
  `base-uri 'self'`,
  `form-action 'self'`,
  `frame-ancestors 'none'`,
  `upgrade-insecure-requests`,
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

const nextConfig: NextConfig = {
  // Never advertise the framework/version to attackers.
  poweredByHeader: false,
  reactStrictMode: true,

  // Pin the workspace root — a stray package-lock.json in the home dir
  // was confusing Turbopack's root inference.
  turbopack: {
    root: path.join(__dirname),
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      ...[
        "media.sixsenses.com",
        "www.aman.com",
        "www.passalacqua.it",
        "dam.kerzner.com",
        "thebrando.com",
        "picasso.rosewoodhotelgroup.com",
        "www.thejohrijaipur.com",
        "tablecells.com",
        "thelodhi.com",
        "www.theleela.com",
        "live.staticflickr.com",
        "www.oberoihotels.com",
      ].map((hostname) => ({ protocol: "https" as const, hostname, pathname: "/**" })),
    ],
  },

  async headers() {
    return [
      {
        source: "/favicon.ico",
        headers: [
          ...securityHeaders,
          { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" },
        ],
      },
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
