/** Code-native direct-client creatives: sharp at every density and responsive. */

export function HacocoCreative() {
  return (
    <div className="font-ad-sans relative flex h-full min-h-[76px] w-full items-center overflow-hidden bg-[#050a12] px-5 text-white sm:min-h-[90px] sm:px-7">
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[48%] bg-[linear-gradient(115deg,transparent,rgba(216,180,91,0.13))]" />
      <div className="pointer-events-none absolute -right-10 -top-24 h-56 w-56 rotate-12 border border-[#d8b45b]/25" />
      <div className="pointer-events-none absolute right-14 top-1/2 h-20 w-20 -translate-y-1/2 rotate-12 border border-[#d8b45b]/15" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[#d8b45b]" />

      <div className="relative flex shrink-0 items-center gap-3 sm:gap-4">
        <div className="relative grid h-9 w-9 place-items-center border border-[#d8b45b] sm:h-11 sm:w-11">
          <div className="h-3 w-3 bg-[#d8b45b] sm:h-4 sm:w-4" />
          <div className="absolute -bottom-1 -right-1 h-2 w-2 bg-[#050a12]" />
        </div>
        <div>
          <p className="font-ad-display text-lg font-semibold tracking-[0.18em] sm:text-2xl">HACOCO</p>
          <p className="mt-0.5 hidden text-[0.46rem] font-semibold uppercase tracking-[0.3em] text-[#d8b45b] sm:block">
            Private real estate capital
          </p>
        </div>
      </div>

      <div className="relative mx-6 hidden h-11 w-px shrink-0 bg-white/20 md:block" />
      <div className="relative hidden min-w-0 flex-1 md:block">
        <p className="text-[0.55rem] font-bold uppercase tracking-[0.25em] text-[#d8b45b]">Curated ownership</p>
        <p className="font-ad-display mt-1 text-lg leading-none lg:text-xl">Prime India. Precisely selected.</p>
      </div>

      <span className="relative ml-auto inline-flex shrink-0 items-center gap-3 border border-[#d8b45b] bg-[#d8b45b] px-4 py-2.5 text-[0.56rem] font-extrabold uppercase tracking-[0.16em] text-[#050a12] transition-colors group-hover:bg-white group-hover:border-white sm:px-6 sm:text-[0.66rem]">
        View opportunities <span aria-hidden="true">↗</span>
      </span>
    </div>
  );
}

export function AiWiseCreative() {
  return (
    <div className="font-ad-sans relative flex h-full min-h-[76px] w-full items-center overflow-hidden bg-[#050505] px-5 text-white sm:min-h-[90px] sm:px-7">
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-80" viewBox="0 0 970 90" preserveAspectRatio="none" aria-hidden="true">
        <g fill="none" stroke="#ff3b30" strokeWidth="2">
          <path d="M-30 5C55 5 42 78 132 78S210 12 300 12" />
          <path d="M-35 18C40 18 38 88 126 88S214 25 308 25" />
          <path d="M-24 -9C73 -9 61 64 142 64S219 -2 298 -2" />
          <path d="M675 92C724 44 749 18 806 22s79 53 184 36" />
          <path d="M653 94C712 31 751 5 814 10s83 49 183 31" />
          <path d="M706 96C748 55 769 34 815 36s76 51 180 39" />
        </g>
      </svg>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,59,48,0.09),transparent_48%)]" />

      <div className="relative flex shrink-0 items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-[#ff3b30] text-[0.72rem] font-black tracking-[-0.08em] sm:h-12 sm:w-12 sm:text-sm">
          AI
        </span>
        <div className="hidden sm:block">
          <p className="text-[0.52rem] font-bold uppercase tracking-[0.28em] text-white/55">New ideas, daily</p>
          <p className="mt-0.5 text-base font-black uppercase tracking-tight">AI Wise</p>
        </div>
      </div>

      <div className="relative mx-auto hidden text-center md:block">
        <p className="text-lg font-black uppercase leading-none tracking-[-0.025em] lg:text-xl">
          Become <span className="text-[#ff3b30]">AI</span> wise.
        </p>
        <p className="mt-1 text-[0.56rem] font-bold uppercase tracking-[0.22em] text-white/70">
          Tools · Experiments · Unfair advantages
        </p>
      </div>

      <div className="relative ml-3 min-w-0 flex-1 sm:hidden">
        <p className="text-base font-black uppercase leading-none">Become <span className="text-[#ff3b30]">AI</span> wise.</p>
        <p className="mt-1 text-[0.46rem] font-bold uppercase tracking-[0.12em] text-white/60">Think smarter. Work faster.</p>
      </div>

      <span className="relative ml-auto inline-flex shrink-0 items-center gap-2 border border-white/40 bg-white px-4 py-2.5 text-[0.56rem] font-extrabold uppercase tracking-[0.14em] text-black transition-colors group-hover:border-[#ff3b30] group-hover:bg-[#ff3b30] group-hover:text-white sm:px-5 sm:text-[0.64rem]">
        Watch <span aria-hidden="true">▶</span>
      </span>
    </div>
  );
}

export function AntialiasCreative() {
  return (
    <div className="font-ad-sans relative flex h-full w-full flex-col overflow-hidden bg-[#070707] p-7 text-white">
      <div className="pointer-events-none absolute -right-28 top-24 h-72 w-72 rounded-full bg-[#e6322a]/12 blur-2xl" />
      <div className="pointer-events-none absolute inset-3 border border-white/10" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-full bg-[#e6322a]" />

      <div className="relative flex items-start justify-between border-b border-white/15 pb-5">
        <div>
          <p className="text-[0.5rem] font-bold uppercase tracking-[0.32em] text-white/65">Since 2014</p>
          <p className="mt-2 text-[0.58rem] font-medium uppercase tracking-[0.16em] text-white/45">Design / Systems / AI</p>
        </div>
        <span className="grid h-10 w-14 place-items-center bg-[#e6322a] text-[0.58rem] font-black uppercase tracking-tight">Anti<br />Alias</span>
      </div>

      <div className="relative mt-10">
        <p className="text-[2.2rem] font-black leading-[0.95] tracking-[-0.065em] text-[#e6322a]">WE BUILD<br />DIGITAL<br />SYSTEMS</p>
        <p className="mt-3 text-[2rem] font-black leading-[0.95] tracking-[-0.065em] text-white">THAT MAKE<br />COMPANIES<br />VALUABLE.</p>
      </div>

      <div className="relative mt-auto">
        <p className="max-w-[13rem] text-[0.7rem] leading-relaxed text-white/55">Positioning-led design and modern development for ambitious companies.</p>
        <div className="mt-6 flex items-center justify-between border-t border-white/15 pt-4">
          <span className="text-[0.58rem] font-bold uppercase tracking-[0.18em]">View selected work</span>
          <span className="text-xl text-[#e6322a]" aria-hidden="true">↗</span>
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

export function AntialiasSquareCreative() {
  return (
    <div className="font-ad-sans relative flex h-full w-full flex-col overflow-hidden bg-[#070707] p-7 text-white">
      <div className="pointer-events-none absolute -right-16 -top-12 h-52 w-52 rounded-full bg-[#e6322a]/15 blur-2xl" />
      <div className="pointer-events-none absolute inset-3 border border-white/10" />
      <div className="relative flex items-center justify-between border-b border-white/15 pb-4">
        <p className="text-[0.52rem] font-bold uppercase tracking-[0.3em] text-white/60">Design / Systems / AI</p>
        <span className="grid h-11 w-14 place-items-center bg-[#e6322a] text-[0.58rem] font-black uppercase tracking-tight">Anti<br />Alias</span>
      </div>
      <div className="relative mt-8">
        <p className="text-[2rem] font-black leading-[0.92] tracking-[-0.06em] text-[#e6322a]">WE BUILD<br />DIGITAL SYSTEMS</p>
        <p className="mt-2 text-[1.65rem] font-black leading-[0.95] tracking-[-0.055em]">THAT MAKE<br />COMPANIES<br />VALUABLE.</p>
      </div>
      <div className="relative mt-auto flex items-center justify-between border-t border-white/15 pt-4">
        <span className="text-[0.58rem] font-bold uppercase tracking-[0.18em]">View selected work</span>
        <span className="text-xl text-[#e6322a]" aria-hidden="true">↗</span>
      </div>
    </div>
  );
}

export function NikhaarSquareCreative() {
  return (
    <div className="font-ad-sans relative flex h-full w-full flex-col overflow-hidden bg-[#f5ead7] p-7 text-[#173f38]">
      <div className="pointer-events-none absolute -bottom-20 -right-16 h-56 w-56 rounded-full bg-[#ef9c4a]" />
      <div className="pointer-events-none absolute -bottom-3 right-6 h-32 w-32 rounded-full border border-[#f5ead7]/70" />
      <div className="relative flex items-center justify-between border-b border-[#173f38]/20 pb-4">
        <div>
          <p className="font-ad-display text-[1.7rem] font-semibold leading-none">Nikhaar</p>
          <p className="mt-1.5 text-[0.5rem] font-bold uppercase tracking-[0.34em]">Foundation</p>
        </div>
        <svg viewBox="0 0 32 36" className="h-9 w-8" aria-hidden="true" fill="none">
          <path d="M2 31C2 14 15 3 30 1c-2 17-13 28-28 30Z" fill="#e98935" />
          <path d="M6 35C8 22 17 14 28 10" stroke="#173f38" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
      <div className="relative mt-7">
        <p className="text-[0.53rem] font-bold uppercase tracking-[0.21em] text-[#bd642b]">Small acts. Lasting change.</p>
        <p className="font-ad-display mt-3 text-[1.9rem] leading-[1.04]">Clean water.<br />Cleaner air.<br /><span className="italic">Brighter futures.</span></p>
      </div>
      <div className="relative mt-auto flex items-center gap-2 text-[0.6rem] font-bold uppercase tracking-[0.16em]">
        Support the work <span aria-hidden="true">↗</span>
      </div>
    </div>
  );
}
