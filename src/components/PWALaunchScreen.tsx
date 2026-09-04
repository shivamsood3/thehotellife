"use client";

import { useEffect, useState } from "react";
import { HangerMark, Wordmark } from "@/components/Logo";

/**
 * The OS owns the first native PWA splash frame. This immediately follows it
 * with a short branded launch frame, shown only in installed/standalone mode.
 */
export default function PWALaunchScreen() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const standalone = window.matchMedia("(display-mode: standalone)").matches;
    if (!standalone) return;

    const timer = window.setTimeout(() => setHidden(true), 1300);
    return () => window.clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return (
    <div className="pwa-launch" role="status" aria-label="Opening The Hotel Life">
      <div className="pwa-launch-lockup">
        <HangerMark
          height={108}
          markColor="#FFFFFF"
          dotColor="#00A6DE"
          title="The Hotel Life"
        />
        <Wordmark size={31} color="#FFFFFF" />
        <span>Extraordinary hotels, considered properly.</span>
      </div>
    </div>
  );
}
