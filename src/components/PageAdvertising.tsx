"use client";

import { usePathname } from "next/navigation";
import {
  EditorialSponsorMobile,
  EditorialSponsorRail,
  type EditorialSponsorBrand,
} from "@/components/Ads";

function sponsorForPath(pathname: string): EditorialSponsorBrand | null {
  if (/^\/hotels\/[^/]+$/.test(pathname)) return "accor";
  if (/^\/guides\/[^/]+$/.test(pathname)) return "antialias";
  if (/^\/the-edit\/[^/]+$/.test(pathname)) return "nikhaar";
  return null;
}

/**
 * Keeps paid placements attached to substantial editorial pages only.
 * Utility, legal, confirmation, search and error routes render no advertising.
 */
export default function PageAdvertising({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const sponsor = sponsorForPath(pathname);

  return (
    <div className="flex-1 w-full">
      <div className="mx-auto flex w-full max-w-[1400px] gap-8 px-4 sm:px-6 lg:px-10">
        <main className="min-w-0 flex-1">{children}</main>
        {sponsor && <EditorialSponsorRail brand={sponsor} />}
      </div>
      {sponsor && <EditorialSponsorMobile brand={sponsor} />}
    </div>
  );
}
