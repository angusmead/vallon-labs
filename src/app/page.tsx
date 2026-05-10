import Link from "next/link";
import { Container } from "@/components/site/Container";
import { CTAPrimary } from "@/components/site/CTAPrimary";
import { ClosingCTA } from "@/components/site/ClosingCTA";
import { PairBlock } from "@/components/site/PairBlock";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { FramedFigure } from "@/components/site/FramedFigure";
import { LogoStrip } from "@/components/site/LogoStrip";
import { AmbientGrid } from "@/components/site/AmbientGrid";
import { buildServices, operateServices } from "@/lib/services";

const processSteps = [
  { num: "01", title: "Audit", desc: "We map your current systems and identify the highest-leverage opportunities." },
  { num: "02", title: "Build", desc: "We design and implement the websites, automations and workflows." },
  { num: "03", title: "Operate", desc: "We refine, maintain and evolve the systems as your business grows." },
];

const outcomes = [
  {
    metric: "60–80%",
    label: "Admin hours reduced on automated workflows.",
  },
  {
    metric: "Minutes",
    label: "Lead response time, down from hours.",
  },
  {
    metric: "Same-day",
    label: "Quoting cycles, compressed from days.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-30 pb-25 max-md:pt-20 max-md:pb-16">
        <AmbientGrid />
        <Container className="relative">
          <div className="grid grid-cols-[1fr_minmax(0,520px)] items-center gap-x-16 gap-y-14 max-lg:grid-cols-1 max-lg:items-start">
            <div>
              <div className="mb-7 flex items-center gap-2.5 text-[11px] tracking-[0.18em] text-sage uppercase">
                <span className="block h-px w-6 bg-sage" />
                AI Systems Studio · Australia
              </div>
              <h1 className="m-0 mb-7 max-w-[640px] text-[clamp(40px,6.4vw,72px)] leading-[1.04] font-medium tracking-tightest text-off-white [&_em]:font-serif [&_em]:font-normal [&_em]:text-sage [&_em]:italic">
                Modern business systems, <em>powered by AI.</em>
              </h1>
              <p className="m-0 mb-10 max-w-[480px] text-[15px] leading-[1.6] text-off-white/[0.82]">
                Vallon Labs builds AI-powered websites, automation and workflows
                for businesses ready to operate in the era ahead.
              </p>
              <div className="flex flex-wrap gap-3.5">
                <CTAPrimary href="/contact">Book a discovery call</CTAPrimary>
                <Link
                  href="/services"
                  className="inline-flex items-center rounded-full border-[0.5px] border-white/[0.28] px-5 py-3 text-[13px] tracking-[0.01em] text-off-white transition-colors duration-200 ease-out hover:border-sage/55"
                >
                  View services
                </Link>
              </div>
            </div>

            <div className="flex justify-end max-lg:justify-start">
              <FramedFigure
                src="/hero-systems.jpg"
                alt="Vallon Labs orchestration interface — workflow cards, AI scoring, and a project review surface"
                width={2048}
                height={2048}
                figureNumber="01"
                figureLabel="Orchestration"
                caption="Vallon · Operate · live"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      <LogoStrip />

      {/* Section 01 — The shift */}
      <section className="border-t-[0.5px] border-white/[0.12] py-25 max-md:py-16">
        <Container>
          <SectionEyebrow>01 — The shift</SectionEyebrow>
          <p className="m-0 max-w-[620px] font-serif text-[clamp(22px,3vw,30px)] leading-[1.32] font-normal tracking-soft text-off-white/95 [&_em]:text-sage [&_em]:italic">
            Most businesses are operating with systems built for a slower era.
            Manual admin, disconnected tools, websites that don&rsquo;t generate
            leads.{" "}
            <em>
              The cost isn&rsquo;t just time — it&rsquo;s the gap between where
              a business is and where it could be.
            </em>
          </p>
        </Container>
      </section>

      {/* Section 02 — What we do */}
      <section className="border-t-[0.5px] border-white/[0.12] py-25 max-md:py-16">
        <Container>
          <SectionEyebrow>02 — What we do</SectionEyebrow>
          <p className="m-0 mb-14 max-w-[580px] font-serif text-[clamp(20px,2.4vw,26px)] leading-[1.32] font-normal tracking-soft text-off-white/95 [&_em]:text-sage [&_em]:italic">
            Two halves of one practice. <em>Build</em> creates the systems your
            business runs on. <em>Operate</em> keeps them sharp, working harder
            over time.
          </p>

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

      {/* Section 03 — How we work */}
      <section className="border-t-[0.5px] border-white/[0.12] py-25 max-md:py-16">
        <Container>
          <SectionEyebrow>03 — How we work</SectionEyebrow>
          <div className="mt-2 grid grid-cols-3 max-md:grid-cols-1 max-md:gap-8">
            {processSteps.map((step, i) => (
              <div
                key={step.num}
                className={`pr-6 max-md:pr-0 ${
                  i === processSteps.length - 1
                    ? ""
                    : "border-r-[0.5px] border-white/[0.12] max-md:border-r-0"
                }`}
              >
                <div className="mb-4 font-serif text-[36px] leading-none font-normal text-sage italic">
                  {step.num}
                </div>
                <h3 className="m-0 mb-2.5 text-[15px] font-medium tracking-[-0.01em] text-off-white">
                  {step.title}
                </h3>
                <p className="m-0 text-[13px] leading-[1.6] text-off-white/75">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Section 04 — Outcomes (big stat treatment) */}
      <section className="border-t-[0.5px] border-white/[0.12] py-25 max-md:py-16">
        <Container>
          <SectionEyebrow>04 — Outcomes</SectionEyebrow>
          <div className="grid grid-cols-3 gap-x-12 gap-y-14 max-md:grid-cols-1">
            {outcomes.map((o) => (
              <div
                key={o.metric}
                className="border-t-[0.5px] border-white/[0.12] pt-8"
              >
                <div className="mb-5 font-serif text-[clamp(56px,8.5vw,108px)] leading-[0.95] font-normal tracking-tightest text-sage italic">
                  {o.metric}
                </div>
                <p className="m-0 max-w-[260px] text-[14px] leading-[1.5] text-off-white/75">
                  {o.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ClosingCTA
        heading={<>Let&rsquo;s build <em>something better.</em></>}
        sub="A 30-minute call to map where AI fits in your business."
      />
    </>
  );
}
