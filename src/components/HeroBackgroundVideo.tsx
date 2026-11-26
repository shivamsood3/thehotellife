"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const POSTER = "/videos/hero-poster.jpg";
const MOBILE_VIDEO = "/videos/hero-720p.mp4";
const DESKTOP_VIDEO = "/videos/hero-1080p.mp4";

export default function HeroBackgroundVideo() {
  const [source, setSource] = useState<string | null>(null);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 768px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const selectSource = () => {
      setSource(reducedMotion.matches ? null : mobile.matches ? MOBILE_VIDEO : DESKTOP_VIDEO);
    };

    selectSource();
    mobile.addEventListener("change", selectSource);
    reducedMotion.addEventListener("change", selectSource);

    return () => {
      mobile.removeEventListener("change", selectSource);
      reducedMotion.removeEventListener("change", selectSource);
    };
  }, []);

  return (
    <div className="absolute inset-0">
      <Image
        src={POSTER}
        alt=""
        fill
        preload
        sizes="100vw"
        className="object-cover"
      />
      {source && (
        <video
          key={source}
          src={source}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={POSTER}
          aria-hidden="true"
          tabIndex={-1}
          className="absolute inset-0 h-full w-full object-cover"
          onError={() => setSource(null)}
        />
      )}
    </div>
  );
}
