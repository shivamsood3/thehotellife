import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AntialiasRail } from "@/components/Ads";

const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://thehotellife.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "The Hotel Life: The World's Most Extraordinary Hotels",
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
  openGraph: {
    title: "The Hotel Life",
    description:
      "An editorial guide to the world's most extraordinary hotels.",
    type: "website",
    siteName: "The Hotel Life",
  },
  // Google AdSense ownership verification (<meta name="google-adsense-account">)
  ...(ADSENSE_CLIENT ? { other: { "google-adsense-account": ADSENSE_CLIENT } } : {}),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full`}
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
        <Header />
        {/* Main + side ad rail */}
        <div className="flex-1 w-full">
          <div className="mx-auto flex w-full max-w-[1400px] gap-8 px-4 sm:px-6 lg:px-10">
            <main className="min-w-0 flex-1">{children}</main>
            <AntialiasRail />
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
