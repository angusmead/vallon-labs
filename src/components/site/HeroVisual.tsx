import Image from "next/image";

export function HeroVisual() {
  return (
    <div className="relative w-full max-w-[560px]">
      {/* Soft sage glow anchoring the panel to the page */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-12 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(204,216,196,0.08) 0%, rgba(204,216,196,0) 70%)",
        }}
      />

      {/* Frame */}
      <div
        className="relative rounded-[14px] border-[0.5px] border-white/15 bg-graphite-deep p-3"
        style={{
          boxShadow:
            "0 30px 60px -20px rgba(0,0,0,0.55), 0 6px 14px -6px rgba(0,0,0,0.35)",
        }}
      >
        {/* Top strip — "window" header */}
        <div className="mb-2.5 flex items-center justify-between px-1.5 pt-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] tracking-[0.18em] text-sage/75 uppercase">
              Fig. 01
            </span>
            <span className="text-[10px] tracking-[0.18em] text-off-white/40 uppercase">
              · Orchestration
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
          </div>
        </div>

        {/* Image */}
        <Image
          src="/hero-systems.jpg"
          alt="Vallon Labs orchestration interface — workflow cards, AI scoring, and a project review surface"
          width={2048}
          height={2048}
          priority
          sizes="(max-width: 1024px) 100vw, 520px"
          className="block h-auto w-full rounded-[8px]"
        />

        {/* Bottom strip — caption */}
        <div className="mt-2.5 flex items-center justify-between px-1.5 pb-1">
          <span className="text-[10px] tracking-[0.16em] text-off-white/55 uppercase">
            Vallon · Operate · live
          </span>
          <span className="flex items-center gap-1.5 text-[9.5px] tracking-[0.14em] text-sage uppercase">
            <span className="relative h-1.5 w-1.5">
              <span className="absolute inset-0 rounded-full bg-sage" />
              <span className="absolute inset-0 animate-ping rounded-full bg-sage opacity-50" />
            </span>
            Active
          </span>
        </div>
      </div>

      {/* Architectural corner brackets — outside the frame */}
      <span
        aria-hidden
        className="absolute -top-3 -left-3 h-3 w-3 border-t-[1px] border-l-[1px] border-sage/50"
      />
      <span
        aria-hidden
        className="absolute -top-3 -right-3 h-3 w-3 border-t-[1px] border-r-[1px] border-sage/50"
      />
      <span
        aria-hidden
        className="absolute -bottom-3 -left-3 h-3 w-3 border-b-[1px] border-l-[1px] border-sage/50"
      />
      <span
        aria-hidden
        className="absolute -bottom-3 -right-3 h-3 w-3 border-b-[1px] border-r-[1px] border-sage/50"
      />
    </div>
  );
}
