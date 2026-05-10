import type { Metadata } from "next";
import { Container } from "@/components/site/Container";
import { PageHero } from "@/components/site/PageHero";
import { ClosingCTA } from "@/components/site/ClosingCTA";

export const metadata: Metadata = {
  title: "Perspective",
  description:
    "Notes on building modern systems. Essays on AI, automation, and the shape of modern businesses.",
};

export default function PerspectivePage() {
  return (
    <>
      <PageHero
        eyebrow="Perspective"
        heading={<>Notes on building <em>modern systems.</em></>}
        sub="Essays on AI, automation, and the shape of modern businesses. New writing publishes here."
      />

      <section className="border-t-[0.5px] border-white/[0.12] py-25 max-md:py-16">
        <Container>
          <div className="border-t-[0.5px] border-b-[0.5px] border-white/[0.12] py-16 text-center max-md:py-12">
            <p className="m-0 font-serif text-[clamp(20px,2.6vw,28px)] leading-[1.35] font-normal tracking-soft text-off-white/90 [&_em]:text-sage [&_em]:italic">
              <em>First essays publishing soon.</em>
            </p>
            <p className="m-0 mt-4 text-[13px] text-off-white/60">
              Until then, the work is in the systems we&rsquo;re building.
            </p>
          </div>
        </Container>
      </section>

      <ClosingCTA
        heading={<>Talk to us <em>directly.</em></>}
        sub="A 30-minute discovery call beats a thousand essays."
      />
    </>
  );
}
