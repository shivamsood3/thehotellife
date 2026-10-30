import type { NextConfig } from "next";
import path from "node:path";

/**
 * Content-Security-Policy
 * -----------------------
 * Locked down by default, but pre-cleared for Google AdSense so the site
 * stays secure now and ads work the moment NEXT_PUBLIC_ADSENSE_CLIENT is set.
 * Ad networks need a broad img/frame/connect surface; everything that
 * actually stops attacks (object-src, base-uri, form-action, frame-ancestors)
 * stays tight.
 */
const GOOGLE_ADS = [
  "https://pagead2.googlesyndication.com",
  "https://*.googlesyndication.com",
  "https://*.googleadservices.com",
  "https://www.googletagservices.com",
  // gtag.js for the Google Ads conversion/remarketing tag. GOOGLE_ADS feeds
  // script-src, img-src, frame-src and connect-src, so one entry covers the
  // loader, the conversion pixels and the beacons it sends back.
  "https://www.googletagmanager.com",
  "https://*.google.com",
  "https://*.doubleclick.net",
  "https://*.gstatic.com",
  "https://adservice.google.com",
  "https://*.adtrafficquality.google",
].join(" ");

/**
 * Google fires its remarketing user-list pixel at the visitor's own country
 * domain as well as google.com (…/pagead/1p-user-list/<id>/?…&rmt_tld=1), and
 * CSP has no wildcard for TLDs, so *.google.com does not cover google.co.in.
 * Without these the local sync is blocked and remarketing match rates drop in
 * exactly the markets this site advertises in. Pixels only: these belong in
 * img-src and must NOT widen script-src. Add a market here when ads start
 * running in a country that is not listed.
 *
 * Needed in BOTH img-src (…/1p-user-list, a pixel) and connect-src
 * (…/1p-conversion, sent as a beacon). Still never script-src.
 */
const GOOGLE_CCTLD_ENDPOINTS = [
  "https://www.google.co.in",
  "https://www.google.co.uk",
  "https://www.google.ae",
  "https://www.google.com.sg",
  "https://www.google.com.hk",
  "https://www.google.com.au",
  "https://www.google.ca",
  "https://www.google.de",
  "https://www.google.fr",
  "https://www.google.it",
  "https://www.google.es",
  "https://www.google.co.jp",
].join(" ");

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
  `script-src 'self' 'unsafe-inline' 'unsafe-eval' ${GOOGLE_ADS}`,
  `style-src 'self' 'unsafe-inline'`,
  `img-src 'self' data: blob: https://images.unsplash.com ${EDITORIAL_IMAGE_HOSTS} ${GOOGLE_ADS} ${GOOGLE_CCTLD_ENDPOINTS} https://*.g.doubleclick.net`,
  `font-src 'self' data:`,
  `frame-src 'self' ${GOOGLE_ADS}`,
  `connect-src 'self' ${GOOGLE_ADS} ${GOOGLE_CCTLD_ENDPOINTS}`,
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
