"use client";

import { useEffect, useRef } from "react";

/**
 * A single AdSense display unit.
 *
 * Client component because the unit has to be pushed onto the adsbygoogle
 * queue after the element exists in the DOM. The push is guarded so React
 * strict mode (which mounts twice in development) cannot double-push the
 * same slot, which AdSense rejects with "already have ads in them".
 */
export default function AdSenseUnit({
  client,
  slot,
  format,
  layout,
  minHeight,
  className = "",
}: {
  client: string;
  slot: string;
  format: string;
  layout?: string;
  minHeight: number;
  className?: string;
}) {
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    pushed.current = true;
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch {
      // AdSense not loaded (blocked, offline). Leaving the slot empty is fine.
    }
  }, []);

  return (
    <div className={`w-full ${className}`}>
      <ins
        className="adsbygoogle block"
        style={{ display: "block", minHeight }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format={format}
        {...(layout ? { "data-ad-layout": layout } : {})}
        data-full-width-responsive="true"
      />
    </div>
  );
}
