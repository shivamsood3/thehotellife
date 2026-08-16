import type { Metadata } from "next";
import Search from "@/components/Search";

export const metadata: Metadata = {
  title: "Search · The Hotel Life",
  description: "Search The Hotel Life's reviews and guides by hotel, city, country or region.",
  robots: { index: false },
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;

  return (
    <div className="mx-auto max-w-2xl py-12 sm:py-16">
      <header className="mb-8">
        <span className="eyebrow">Find your stay</span>
        <h1 className="font-display mt-2 text-4xl font-medium text-ink sm:text-5xl">Search</h1>
      </header>
      <Search initialQuery={q ?? ""} />
    </div>
  );
}
