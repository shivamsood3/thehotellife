/**
 * House ad creatives, rendered as components rather than flat SVG files.
 *
 * Why components: an SVG loaded through <img> cannot use the site's web
 * fonts, so the old creatives fell back to Georgia/Arial and looked
 * generic. Rendering them in the page lets them use Fraunces and Inter,
 * stay crisp at any pixel density, and scale to their container.
 *
 * Both are sized to standard ad slots (300x600 and 300x420) via aspect
 * ratio, so they reserve the same space and avoid layout shift.
 */

/* ---------------------------------------------------------------- *
 * The AntiAlias - design & brand studio (300 x 600 skyscraper)
 * ---------------------------------------------------------------- */
export function AntialiasCreative() {
  return (
    <div className="font-ad-sans relative flex h-full w-full flex-col justify-between overflow-hidden bg-[#0b0b0c] p-7">
      {/* warm glow */}
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(217,160,102,0.30) 0%, rgba(217,160,102,0) 70%)",
        }}
      />
      {/* hairline frame */}
      <div className="pointer-events-none absolute inset-0 border border-white/10" />

      <div className="relative">
        {/* pixel dissolve motif: sharp squares softening into nothing,
            which is literally what anti-aliasing does */}
        <div className="mb-9 flex gap-[3px]">
          {[1, 0.72, 0.46, 0.26, 0.12].map((o, i) => (
            <div
              key={i}
              className="h-[9px] w-[9px]"
              style={{
                background: "#e6b078",
                opacity: o,
                borderRadius: `${i * 2.2}px`,
              }}
            />
          ))}
        </div>

        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.42em] text-white/40">
          The
        </p>
        <p className="font-ad-display mt-1 text-[2.35rem] font-semibold leading-none text-[#f4f2ee]">
          AntiAlias
        </p>
        <div className="mt-4 h-px w-12 bg-gradient-to-r from-[#e6b078] to-[#cf8f52]" />
      </div>

      <div className="relative">
        <p className="font-ad-display text-[1.6rem] leading-[1.28] text-[#f4f2ee]">
          Make
          <br />
          the edges
          <br />
          <span className="italic text-[#e6b078]">disappear.</span>
        </p>
        <p className="mt-6 text-[0.78rem] leading-relaxed text-white/55">
          A design and brand studio for
          <br />
          companies that sweat the pixels.
        </p>
      </div>

      <div className="relative">
        <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e6b078] to-[#cf8f52] px-6 py-3 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#141416]">
          See the work
          <span aria-hidden="true">→</span>
        </span>
        <p className="mt-5 text-[0.62rem] uppercase tracking-[0.24em] text-white/35">
          theantialias.com
        </p>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- *
 * Nikhaar Foundation (300 x 420)
 * ---------------------------------------------------------------- */
export function NikhaarCreative() {
  return (
    <div className="font-ad-sans relative flex h-full w-full flex-col justify-between overflow-hidden bg-[#08403b] p-7">
      <div
        className="pointer-events-none absolute -left-20 bottom--10 h-56 w-56 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(217,138,61,0.28) 0%, rgba(217,138,61,0) 70%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 border border-white/10" />

      <div className="relative">
        {/* sprout emblem */}
        <svg
          viewBox="0 0 40 44"
          className="mb-6 h-9 w-9"
          aria-hidden="true"
          fill="none"
        >
          <path
            d="M2 36C2 16 17 3 36 1c-2 20-16 33-34 35Z"
            fill="#d98a3d"
          />
          <path
            d="M7 42C9 26 21 16 35 13"
            stroke="#efeade"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.55"
          />
        </svg>

        <p className="font-ad-display text-[1.95rem] font-semibold leading-none text-[#f7ecdd]">
          Nikhaar
        </p>
        <p className="mt-2 text-[0.6rem] font-semibold uppercase tracking-[0.42em] text-[#9ec4bd]">
          Foundation
        </p>
        <div className="mt-4 h-px w-12 bg-gradient-to-r from-[#d98a3d] to-[#c07a2c]" />
      </div>

      <div className="relative">
        <p className="font-ad-display text-[1.35rem] leading-[1.3] text-[#f7ecdd]">
          Clean water.
          <br />
          Cleaner air.
          <br />
          <span className="italic text-[#e6a765]">Brighter futures.</span>
        </p>
        <p className="mt-5 text-[0.75rem] leading-relaxed text-[#c7ddd8]/80">
          Supporting Delhi&apos;s children through
          <br />
          education, water and clean air.
        </p>
      </div>

      <div className="relative">
        <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#d98a3d] to-[#c07a2c] px-5 py-2.5 text-[0.66rem] font-bold uppercase tracking-[0.12em] text-[#08403b]">
          Support our work
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </div>
  );
}
