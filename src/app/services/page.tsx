import type { Metadata } from "next";
import { Container } from "@/components/site/Container";
import { PageHero } from "@/components/site/PageHero";
import { PairBlock } from "@/components/site/PairBlock";
import { ClosingCTA } from "@/components/site/ClosingCTA";
import { buildServices, operateServices } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Two halves of one practice. Build creates the systems your business runs on. Operate keeps them sharp, working harder over time.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        heading={<>Systems for the <em>AI era.</em></>}
        sub="Two halves of one practice. Build creates the systems your business runs on. Operate keeps them sharp, working harder over time."
      />

      <section className="border-t-[0.5px] border-white/[0.12] py-25 max-md:py-16">
        <Container>
          <PairBlock
            num="01"
            title="Build"
            desc="The infrastructure layer — websites and content systems engineered for the AI era."
            services={buildServices}
          />
          <PairBlock
            num="02"
            title="Operate"
            desc="The intelligence layer — automation and audits that keep your systems sharp."
            services={operateServices}
          />
        </Container>
      </section>

      <ClosingCTA
        heading={<>Build the system. <em>Then operate it.</em></>}
        sub="A 30-minute call to map where AI fits in your business."
      />
    </>
  );
}
