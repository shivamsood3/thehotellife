import type { Metadata } from "next";
import { Fraunces, Inter, Outfit } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AntialiasRail, MobileRail } from "@/components/Ads";
import JsonLd, { organizationSchema, websiteSchema } from "@/components/JsonLd";
import PWALaunchScreen from "@/components/PWALaunchScreen";

const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "";

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
        {/* AdSense loader, beforeInteractive so it lands in the initial
            HTML for site verification, and Auto Ads can place units early. */}
        {ADSENSE_CLIENT && (
          <Script
            id="adsbygoogle-init"
            strategy="beforeInteractive"
            async
            crossOrigin="anonymous"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
          />
        )}
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <PWALaunchScreen />
        <Header />
        {/* Main + side ad rail */}
        <div className="flex-1 w-full">
          <div className="mx-auto flex w-full max-w-[1400px] gap-8 px-4 sm:px-6 lg:px-10">
            <main className="min-w-0 flex-1">{children}</main>
            <AntialiasRail />
          </div>
        </div>
        <MobileRail />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
