export function HeroVisual() {
  return (
    <div className="relative aspect-[5/6] w-full max-w-[560px]">
      {/* Ambient grid + radial glow background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 75%)",
          maskImage:
            "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 75%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 45%, rgba(204,216,196,0.08) 0%, rgba(204,216,196,0) 60%)",
        }}
      />

      {/* Decorative sparkles */}
      <Sparkle className="absolute top-[6%] left-[3%] h-3 w-3 text-sage/55" />
      <Sparkle className="absolute top-[18%] right-[2%] h-2.5 w-2.5 text-sage/40" />
      <Sparkle className="absolute bottom-[8%] right-[6%] h-2 w-2 text-sage/50" />
      <Dot className="absolute top-[40%] left-[2%] h-1 w-1 bg-sage/40" />
      <Dot className="absolute bottom-[28%] right-[1%] h-1 w-1 bg-sage/30" />

      {/* Main panel — back layer */}
      <div
        className="absolute top-[7%] left-[8%] flex h-[64%] w-[78%] flex-col overflow-hidden rounded-[3px] border-[0.5px] border-white/15 bg-graphite-deep"
        style={{
          boxShadow:
            "0 30px 60px -20px rgba(0,0,0,0.55), 0 6px 14px -6px rgba(0,0,0,0.35)",
        }}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between border-b-[0.5px] border-white/10 bg-white/[0.02] px-3.5 py-2.5">
          <div className="flex items-center gap-2">
            <svg
              viewBox="0 0 26 22"
              fill="none"
              aria-hidden="true"
              className="h-3 w-[14px] text-off-white/85"
            >
              <path
                d="M2 2 L13 20 L24 2"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="square"
                strokeLinejoin="miter"
              />
            </svg>
            <span className="text-[9px] tracking-[0.18em] text-off-white/60 uppercase">
              Vallon · Orchestration
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
          </div>
        </div>

        {/* Body: sidebar + content */}
        <div className="flex flex-1">
          {/* Sidebar */}
          <div className="flex w-[28%] flex-col gap-1 border-r-[0.5px] border-white/10 bg-white/[0.015] py-3 text-[9.5px]">
            {[
              { label: "Inbox", count: "3" },
              { label: "Workflows", count: "12", active: true },
              { label: "Audits", count: "" },
              { label: "Reports", count: "" },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex items-center justify-between gap-2 px-3 py-1.5 ${
                  item.active
                    ? "border-l-[1.5px] border-l-sage bg-sage/[0.06] text-sage"
                    : "border-l-[1.5px] border-l-transparent text-off-white/55"
                }`}
              >
                <span>{item.label}</span>
                {item.count && (
                  <span className="text-[8px] opacity-70">{item.count}</span>
                )}
              </div>
            ))}
            <div className="mt-auto border-t-[0.5px] border-white/10 px-3 pt-3 text-[8px] tracking-[0.16em] text-off-white/35 uppercase">
              Live · 12:04
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col gap-2 p-3">
            <div className="mb-1 flex items-center justify-between">
              <span className="text-[9.5px] tracking-[0.16em] text-sage/85 uppercase">
                Active workflow · Lead intake
              </span>
              <span className="flex items-center gap-1.5 text-[8.5px] text-off-white/60">
                <span className="relative h-1.5 w-1.5">
                  <span className="absolute inset-0 rounded-full bg-sage" />
                  <span className="absolute inset-0 animate-ping rounded-full bg-sage opacity-60" />
                </span>
                Live
              </span>
            </div>

            {/* Step card 1 — new lead */}
            <div className="flex items-center gap-2 rounded-[2px] border-[0.5px] border-white/10 bg-white/[0.025] px-2.5 py-2">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage/15 text-[8.5px] font-medium text-sage">
                SK
              </div>
              <div className="flex min-w-0 flex-1 flex-col">
                <span className="truncate text-[10px] text-off-white">
                  Sarah Kane
                </span>
                <span className="truncate text-[8.5px] text-off-white/50">
                  via lead form · 12:03
                </span>
              </div>
              <span className="rounded-full bg-white/[0.06] px-1.5 py-[2px] text-[8px] tracking-wide text-off-white/65 uppercase">
                New
              </span>
            </div>

            {/* Step card 2 — Vallon AI scoring */}
            <div className="flex items-center gap-2 rounded-[2px] border-[0.5px] border-sage/30 bg-sage/[0.04] px-2.5 py-2">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage/20">
                <svg
                  viewBox="0 0 26 22"
                  fill="none"
                  aria-hidden="true"
                  className="h-2.5 w-3 text-sage"
                >
                  <path
                    d="M2 2 L13 20 L24 2"
                    stroke="currentColor"
                    strokeWidth="2.6"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                  />
                </svg>
              </div>
              <div className="flex min-w-0 flex-1 flex-col">
                <span className="truncate text-[10px] text-off-white">
                  Vallon AI · scoring
                </span>
                <div className="mt-1 h-[2px] w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[78%] rounded-full bg-sage" />
                </div>
              </div>
              <span className="font-serif text-[16px] leading-none text-sage italic">
                92
              </span>
            </div>

            {/* Step card 3 — routed */}
            <div className="flex items-center gap-2 rounded-[2px] border-[0.5px] border-white/10 bg-white/[0.025] px-2.5 py-2">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-[8.5px] text-off-white/70">
                JM
              </div>
              <div className="flex min-w-0 flex-1 flex-col">
                <span className="truncate text-[10px] text-off-white">
                  Routed → James M.
                </span>
                <span className="truncate text-[8.5px] text-off-white/50">
                  Booked discovery call · 12:04
                </span>
              </div>
              <span className="text-[10px] text-sage">✓</span>
            </div>

            {/* Mini chart strip */}
            <div className="mt-1 flex items-end gap-[3px] border-t-[0.5px] border-white/10 px-1 pt-3">
              {[24, 38, 30, 52, 44, 64, 58, 72, 60, 84, 76, 92].map(
                (h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-[1px] bg-sage"
                    style={{ height: `${h * 0.36}px`, opacity: 0.25 + i * 0.05 }}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Floating notification card — front, top-right */}
      <div
        className="absolute top-[2%] right-0 w-[52%] rounded-[3px] border-[0.5px] border-white/20 bg-graphite/90 backdrop-blur-md"
        style={{
          boxShadow:
            "0 16px 30px -12px rgba(0,0,0,0.55), 0 4px 8px -2px rgba(0,0,0,0.35)",
        }}
      >
        <div className="flex items-center gap-3 px-3 py-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage/20 text-[10px] font-medium tracking-tight text-sage">
            +12
          </div>
          <div className="flex min-w-0 flex-1 flex-col">
            <span className="text-[11px] text-off-white">Leads routed</span>
            <span className="text-[9.5px] text-off-white/55">
              today · 60–80% auto-qualified
            </span>
          </div>
          <span className="rounded-full bg-sage/15 px-2 py-[2px] text-[8.5px] tracking-wide text-sage uppercase">
            Live
          </span>
        </div>
      </div>

      {/* Floating metric tile — front, bottom-left */}
      <div
        className="absolute bottom-[2%] left-0 w-[40%] rounded-[3px] border-[0.5px] border-white/20 bg-graphite/90 px-4 py-4 backdrop-blur-md"
        style={{
          boxShadow:
            "0 16px 30px -12px rgba(0,0,0,0.55), 0 4px 8px -2px rgba(0,0,0,0.35)",
        }}
      >
        <div className="mb-1 text-[9px] tracking-[0.16em] text-sage/85 uppercase">
          Response · avg
        </div>
        <div className="font-serif text-[44px] leading-none font-normal text-sage italic">
          1.8m
        </div>
        <div className="mt-2 flex items-center gap-1.5 text-[10px] text-off-white/65">
          <span className="text-sage">↓</span>
          <span>from 4h prior</span>
        </div>
      </div>

      {/* Floating mini stat — bottom-right */}
      <div
        className="absolute right-[4%] bottom-[12%] rounded-full border-[0.5px] border-white/20 bg-graphite/90 px-3 py-1.5 backdrop-blur-md"
        style={{
          boxShadow: "0 8px 20px -8px rgba(0,0,0,0.5)",
        }}
      >
        <div className="flex items-center gap-2">
          <span className="text-[9px] tracking-[0.16em] text-off-white/55 uppercase">
            Today
          </span>
          <span className="font-serif text-[14px] leading-none text-sage italic">
            94%
          </span>
        </div>
      </div>
    </div>
  );
}

function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" fill="none" aria-hidden="true" className={className}>
      <path
        d="M6 0 L6.6 5.4 L12 6 L6.6 6.6 L6 12 L5.4 6.6 L0 6 L5.4 5.4 Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Dot({ className }: { className?: string }) {
  return <span aria-hidden className={`block rounded-full ${className}`} />;
}
