import type { ReactNode } from "react";
import { Container } from "./Container";

export function PageHero({
  eyebrow,
  heading,
  sub,
}: {
  eyebrow: string;
  heading: ReactNode;
  sub?: ReactNode;
}) {
  return (
    <section className="pt-25 pb-16 max-md:pt-16 max-md:pb-10">
      <Container>
        <div className="mb-7 flex items-center gap-2.5 text-[11px] tracking-[0.18em] text-sage uppercase">
          <span className="block h-px w-6 bg-sage" />
          {eyebrow}
        </div>
        <h1 className="m-0 mb-6 max-w-[820px] text-[clamp(36px,6vw,60px)] leading-[1.06] font-medium tracking-tightest text-off-white [&_em]:font-serif [&_em]:font-normal [&_em]:text-sage [&_em]:italic">
          {heading}
        </h1>
        {sub && (
          <p className="m-0 max-w-[560px] text-[15px] leading-[1.6] text-off-white/[0.82]">
            {sub}
          </p>
        )}
      </Container>
    </section>
  );
}
