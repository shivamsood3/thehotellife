/** Code-native direct-client creatives: sharp at every density and responsive. */

export function HacocoCreative() {
  return (
    <div className="font-ad-sans relative flex h-full min-h-[76px] w-full items-center overflow-hidden bg-[#071326] px-5 text-[#f4efe4] sm:min-h-[90px] sm:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_-120%,rgba(224,184,91,0.34),transparent_48%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#b98a31] via-[#f0d47f] to-[#b98a31]" />

      <div className="relative flex shrink-0 items-center gap-3 sm:gap-4">
        <div className="grid h-9 w-9 place-items-center border border-[#d9b85d] sm:h-11 sm:w-11">
          <div className="h-3.5 w-3.5 bg-[#e3c66d] sm:h-4 sm:w-4" />
        </div>
        <div>
          <p className="font-ad-display text-lg font-semibold tracking-[0.2em] sm:text-2xl">HACOCO</p>
          <p className="mt-0.5 hidden text-[0.48rem] font-semibold uppercase tracking-[0.31em] text-[#9eacc2] sm:block">
            Private real estate capital
          </p>
        </div>
      </div>

      <div className="relative mx-7 hidden h-10 w-px shrink-0 bg-white/15 md:block" />
      <div className="relative hidden min-w-0 flex-1 md:block">
        <p className="font-ad-display text-lg leading-tight lg:text-xl">Own a piece of prime India.</p>
        <p className="mt-1 text-[0.68rem] text-[#aab5c8] lg:text-xs">
          Curated real-estate opportunities across South Delhi and beyond.
        </p>
      </div>

      <span className="relative ml-auto inline-flex shrink-0 items-center gap-3 rounded-full bg-[#e2c260] px-4 py-2.5 text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#071326] sm:px-6 sm:text-[0.68rem]">
        Explore <span aria-hidden="true">↗</span>
      </span>
    </div>
  );
}

export function AntialiasCreative() {
  return (
    <div className="font-ad-sans relative flex h-full w-full flex-col overflow-hidden bg-[#f3f0e9] p-7 text-[#101010]">
      <div className="pointer-events-none absolute -right-28 top-36 h-64 w-64 rounded-full bg-[#2749f5] blur-[2px]" />
      <div className="pointer-events-none absolute -right-16 top-44 h-44 w-44 rounded-full border-[18px] border-[#f4cf46]" />
      <div className="pointer-events-none absolute inset-3 border border-black/15" />

      <div className="relative flex items-start justify-between border-b border-black/20 pb-5">
        <div>
          <p className="text-[0.52rem] font-bold uppercase tracking-[0.34em]">Since 2014</p>
          <p className="mt-2 text-[0.62rem] font-medium uppercase tracking-[0.14em] text-black/55">
            Design · Systems · AI
          </p>
        </div>
        <span className="grid h-9 w-9 place-items-center rounded-full bg-black text-sm text-white">A</span>
      </div>

      <div className="relative mt-8">
        <p className="text-[2.35rem] font-black leading-[0.9] tracking-[-0.075em]">
          THE<br />ANTI<br />ALIAS
        </p>
      </div>

      <div className="relative mt-auto bg-[#101010] p-5 text-white">
        <p className="font-ad-display text-[1.25rem] leading-[1.22]">
          We build digital systems that make companies feel more valuable.
        </p>
        <div className="mt-6 flex items-center justify-between border-t border-white/20 pt-4">
          <span className="text-[0.6rem] font-bold uppercase tracking-[0.16em]">Selected work</span>
          <span className="text-[#f4cf46]" aria-hidden="true">↗</span>
        </div>
      </div>
    </div>
  );
}

export function NikhaarCreative() {
  return (
    <div className="font-ad-sans relative flex h-full w-full flex-col overflow-hidden bg-[#f5ead7] p-7 text-[#173f38]">
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-[#ef9c4a]" />
      <div className="pointer-events-none absolute -bottom-8 -right-7 h-40 w-40 rounded-full border-[2px] border-[#f5ead7]/70" />
      <div className="pointer-events-none absolute -bottom-2 right-8 h-28 w-28 rounded-full border border-[#f5ead7]/70" />

      <div className="relative flex items-center justify-between border-b border-[#173f38]/20 pb-4">
        <div>
          <p className="font-ad-display text-[1.65rem] font-semibold leading-none">Nikhaar</p>
          <p className="mt-1.5 text-[0.52rem] font-bold uppercase tracking-[0.34em]">Foundation</p>
        </div>
        <svg viewBox="0 0 32 36" className="h-9 w-8" aria-hidden="true" fill="none">
          <path d="M2 31C2 14 15 3 30 1c-2 17-13 28-28 30Z" fill="#e98935" />
          <path d="M6 35C8 22 17 14 28 10" stroke="#173f38" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      <div className="relative mt-7">
        <p className="text-[0.55rem] font-bold uppercase tracking-[0.23em] text-[#bd642b]">Small acts. Lasting change.</p>
        <p className="font-ad-display mt-3 text-[1.65rem] leading-[1.08]">
          Clean water.<br />Cleaner air.<br /><span className="italic">Brighter futures.</span>
        </p>
        <p className="mt-5 max-w-[12rem] text-[0.72rem] leading-relaxed text-[#173f38]/70">
          Supporting children through education, water and clean-air initiatives.
        </p>
      </div>

      <div className="relative mt-auto flex items-center gap-2 text-[0.6rem] font-bold uppercase tracking-[0.16em]">
        Support the work <span aria-hidden="true">↗</span>
      </div>
    </div>
  );
}
