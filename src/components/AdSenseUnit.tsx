"use client";

import { useEffect, useRef } from "react";

type Props = {
  client: string;
  slot: string;
  format: "leaderboard" | "rectangle" | "in-article" | "responsive";
  minHeight: number;
};

/**
 * A single AdSense display unit. Renders the <ins> and, once mounted,
 * asks AdSense to fill it. Guarded so React Strict Mode's double-invoke
 * (and any re-render) never pushes the same slot twice.
 */
export default function AdSenseUnit({ client, slot, format, minHeight }: Props) {
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    try {
      // @ts-expect-error - adsbygoogle is injected by the AdSense loader script
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {
      /* loader not ready yet; the queued push will run when it loads */
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", minHeight }}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format={format === "in-article" ? "fluid" : "auto"}
      data-ad-layout={format === "in-article" ? "in-article" : undefined}
      data-full-width-responsive="true"
    />
  );
}
