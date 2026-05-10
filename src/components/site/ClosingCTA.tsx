import type { ReactNode } from "react";
import { Container } from "./Container";
import { CTAPrimary } from "./CTAPrimary";

export function ClosingCTA({
  heading,
  sub,
  ctaLabel = "Book a discovery call",
  ctaHref = "/contact",
}: {
  heading: ReactNode;
  sub?: ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <section className="border-t-[0.5px] border-white/[0.12] bg-graphite-deep py-35 max-md:py-24">
      <Container>
        <h2 className="m-0 mb-6 max-w-[700px] text-[clamp(40px,7vw,72px)] leading-[1.04] font-medium tracking-tightest text-off-white [&_em]:font-serif [&_em]:font-normal [&_em]:text-sage [&_em]:italic">
          {heading}
        </h2>
        {sub && (
          <p className="m-0 mb-9 max-w-[420px] text-[14px] leading-[1.6] text-off-white/75">
            {sub}
          </p>
        )}
        <CTAPrimary href={ctaHref}>{ctaLabel}</CTAPrimary>
      </Container>
    </section>
  );
}
