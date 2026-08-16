import type { Metadata } from "next";
import { hotels } from "@/content/hotels";
import HotelCard from "@/components/HotelCard";
import { AdSense } from "@/components/Ads";

export const metadata: Metadata = {
  title: "The Edit · Our Most Opinionated Hotel Lists",
  description:
    "Curated collections from The Hotel Life: the best hotel pools, the great grande dames, where to honeymoon, and stays for the design-obsessed.",
};

const collections: { title: string; blurb: string; slugs: string[] }[] = [
  {
    title: "Pools Worth the Airfare",
    blurb:
      "Some swimming pools are amenities. These are destinations, carved into cliffs, cantilevered over oceans, wrapped around ancient rock.",
    slugs: ["belmond-hotel-caruso", "amangiri-utah", "marina-bay-sands", "hotel-du-cap-eden-roc"],
  },
  {
    title: "The Great Grande Dames",
    blurb:
      "The historic institutions that more or less invented the luxury hotel, and still set the standard a century later.",
    slugs: ["the-ritz-paris", "claridges-london", "peninsula-hong-kong", "the-plaza-new-york"],
  },
  {
    title: "Where to Honeymoon",
    blurb:
      "Rooms and views engineered for romance, from a floating palace in Udaipur to a jungle island in the Baa Atoll.",
    slugs: ["oberoi-udaivilas-udaipur", "soneva-fushi-maldives", "belmond-hotel-caruso", "la-mamounia"],
  },
  {
    title: "For the Design-Obsessed",
    blurb:
      "Architecture you can sleep inside: monastic concrete in the desert, a modernist ark on the Atlantic, silence engineered above Tokyo.",
    slugs: ["amangiri-utah", "fogo-island-inn", "aman-tokyo", "park-hyatt-tokyo"],
  },
  {
    title: "Into the Wild",
    blurb:
      "Luxury that comes with a landscape: leopards, granite towers, drifting icebergs and giraffes at the window.",
    slugs: ["singita-sabi-sand", "explora-patagonia", "giraffe-manor-nairobi", "fogo-island-inn"],
  },
];

export default function TheEdit() {
  return (
    <div className="pb-8">
      <header className="mt-10 max-w-2xl">
        <span className="eyebrow">Curated by our editors</span>
        <h1 className="font-display mt-2 text-4xl font-medium leading-tight text-ink sm:text-5xl">
          The Edit
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-soft">
          Our most opinionated lists: the hotels we&apos;d send you to for a specific
          reason, whether that&apos;s a once-in-a-lifetime pool or a honeymoon you&apos;ll
          never stop talking about.
        </p>
      </header>

      <div className="rule-brass mt-8 w-full" />

      <div className="mt-12 space-y-20">
        {collections.map((col, idx) => {
          const list = col.slugs
            .map((s) => hotels.find((h) => h.slug === s))
            .filter(Boolean);
          return (
            <div key={col.title}>
              <div className="max-w-2xl">
                <span className="eyebrow text-brass-deep">
                  No. {String(idx + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display mt-1 text-3xl font-medium text-ink">{col.title}</h2>
                <p className="mt-3 text-base leading-relaxed text-ink-soft">{col.blurb}</p>
              </div>
              <div className="mt-8 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
                {list.map((h) => h && <HotelCard key={h.slug} hotel={h} size="sm" />)}
              </div>

              {idx === 1 && (
                <div className="mt-16">
                  <AdSense format="leaderboard" slot="6000000001" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
