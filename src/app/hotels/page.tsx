import type { Metadata } from "next";
import { hotels } from "@/content/hotels";
import HotelCard from "@/components/HotelCard";
import { AdSense } from "@/components/Ads";

export const metadata: Metadata = {
  title: "All Hotels · The World's Most Extraordinary Stays",
  description:
    "Every hotel we've reviewed, from grande dames to safari lodges. Honest, in-depth guides to the best places to stay around the world.",
};

export default function HotelsIndex() {
  return (
    <div className="pb-8">
      <header className="mt-10 max-w-2xl">
        <span className="eyebrow">The Collection</span>
        <h1 className="font-display mt-2 text-4xl font-medium leading-tight text-ink sm:text-5xl">
          Every Hotel, Reviewed
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">
          The complete index of stays worth crossing the world for, from a silent
          tower above Tokyo to a palazzo hung over the Amalfi Coast.
        </p>
      </header>

      <div className="rule-brass mt-8 w-full" />

      <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {hotels.map((h, i) => (
          <div key={h.slug} className="contents">
            <HotelCard hotel={h} />
            {/* In-grid AdSense every 6 cards */}
            {(i + 1) % 6 === 0 && (
              <div className="sm:col-span-2 lg:col-span-3 my-2">
                <AdSense format="leaderboard" slot="3000000001" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
