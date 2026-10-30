import type { Metadata } from "next";
import { Fraunces, Inter, Outfit } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageAdvertising from "@/components/PageAdvertising";
import JsonLd, { organizationSchema, websiteSchema } from "@/components/JsonLd";
import PWALaunchScreen from "@/components/PWALaunchScreen";
import PWARegistration from "@/components/PWARegistration";
import ConsentBanner from "@/components/ConsentBanner";
import { CONSENT_DEFAULT_SCRIPT } from "@/lib/consent";

const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "";

// Google Ads conversion / remarketing tag. Hardcoded rather than read from
// NEXT_PUBLIC_*: the ID is public by nature (it ships in the page source),
// it does not differ between environments, and an env var that was never
// set in Vercel is precisely what stripped the AdSense loader and stalled
// that site review. One less thing that can silently evaluate to empty.
const GOOGLE_ADS_ID = "AW-966960684";

// Outfit is the brand typeface. Light 300 and SemiBold 600 carry the
// wordmark; the rest of the weights cover UI and body copy.
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

// Partner creatives keep their own typography instead of inheriting The
// Hotel Life's Outfit wordmark face. These variables are scoped by utility
// classes in HouseBanners.tsx.
const adFraunces = Fraunces({
  variable: "--font-ad-display",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

const adInter = Inter({
  variable: "--font-ad-sans",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.thehotellife.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "The Hotel Life",
  title: {
    default: "The Hotel Life | Independent Luxury Hotel Reviews",
    template: "%s · The Hotel Life",
  },
  description:
    "An editorial guide to the world's most extraordinary hotels. Honest reviews, insider intelligence, and the stays worth crossing the planet for.",
  keywords: [
    "luxury hotels",
    "hotel reviews",
    "travel guide",
    "best hotels in the world",
    "boutique hotels",
    "where to stay",
  ],
  alternates: { canonical: "/" },
  // Stable, unhashed icon URLs. Google needs a favicon at a consistent URL
  // that is square and a multiple of 48px, so favicon.ico ships 48 and 96
  // alongside the small tab sizes.
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-48.png", type: "image/png", sizes: "48x48" },
      { url: "/icon-96.png", type: "image/png", sizes: "96x96" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    title: "The Hotel Life",
    statusBarStyle: "default",
  },
  openGraph: {
    title: "The Hotel Life | Independent Luxury Hotel Reviews",
    description:
      "An editorial guide to the world's most extraordinary hotels. Honest reviews, insider intelligence, and the stays worth crossing the planet for.",
    type: "website",
    siteName: "The Hotel Life",
    url: SITE_URL,
    locale: "en_GB",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "The Hotel Life — independent luxury hotel reviews",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Hotel Life | Independent Luxury Hotel Reviews",
    description:
      "An editorial guide to the world's most extraordinary hotels.",
  },
  // Let Google show full-length previews and large image thumbnails.
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "The Hotel Life" }],
  creator: "The Hotel Life",
  publisher: "The Hotel Life",
  // Google AdSense ownership verification (<meta name="google-adsense-account">)
  ...(ADSENSE_CLIENT ? { other: { "google-adsense-account": ADSENSE_CLIENT } } : {}),
};

export const viewport = {
  themeColor: "#4A1D34",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${adFraunces.variable} ${adInter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        {/* Consent Mode v2 defaults. Must stay the first script here and
            stay beforeInteractive: AdSense and gtag both read consent state
            as they initialise, so a default that lands after them is a
            default they never saw. Everything advertising-related starts
            denied; ConsentBanner replays a stored or fresh choice. */}
        <Script
          id="consent-mode-default"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: CONSENT_DEFAULT_SCRIPT }}
        />
        {/* AdSense loader, beforeInteractive so it lands in the initial
            HTML for site verification, and Auto Ads can place units early.
            Deliberately NOT gated on ADSENSE_ENABLED: review crawls the page
            looking for this tag, so gating it is self-defeating — the site
            can never be approved, which is what "Site down or unavailable"
            was actually reporting. Nothing is served until Google approves
            the site, so shipping the loader early costs no impressions.
            ADSENSE_ENABLED still gates the ad units themselves in Ads.tsx,
            which is where an unapproved site would otherwise show gaps. */}
        {ADSENSE_CLIENT && (
          <Script
            id="adsbygoogle-init"
            strategy="beforeInteractive"
            async
            crossOrigin="anonymous"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
          />
        )}
        {/* Google Ads tag (gtag.js). afterInteractive is the documented
            strategy for gtag in Next: it still fires on every page load but
            does not block first paint. Note this fires config once per full
            document load; client-side route changes do not re-fire it, which
            matters for remarketing reach but not for conversion events. */}
        <Script
          id="google-ads-gtag-src"
          strategy="afterInteractive"
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
        />
        <Script id="google-ads-gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GOOGLE_ADS_ID}');`}
        </Script>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <PWARegistration />
        <PWALaunchScreen />
        <Header />
        <PageAdvertising>{children}</PageAdvertising>
        <ConsentBanner />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
