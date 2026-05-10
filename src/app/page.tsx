import Link from "next/link";
import { Container } from "@/components/site/Container";
import { CTAPrimary } from "@/components/site/CTAPrimary";
import { ClosingCTA } from "@/components/site/ClosingCTA";
import { PairBlock } from "@/components/site/PairBlock";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { buildServices, operateServices } from "@/lib/services";

const heroGridStyle: React.CSSProperties = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
  backgroundSize: "56px 56px",
  WebkitMaskImage:
    "radial-gradient(ellipse at 65% 30%, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 70%)",
  maskImage:
    "radial-gradient(ellipse at 65% 30%, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 70%)",
  animation: "vl-drift 18s ease-in-out infinite alternate",
};

const processSteps = [
  { num: "01", title: "Audit", desc: "We map your current systems and identify the highest-leverage opportunities." },
  { num: "02", title: "Build", desc: "We design and implement the websites, automations and workflows." },
  { num: "03", title: "Operate", desc: "We refine, maintain and evolve the systems as your business grows." },
];

const outcomes = [
  { lead: "Admin hours reduced by", em: "60–80%", trail: "on automated workflows." },
  { lead: "Lead response time cut from", em: "hours to minutes.", trail: "" },
  { lead: "Quoting cycles compressed from", em: "days to same-day.", trail: "" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-30 pb-25 max-md:pt-20 max-md:pb-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={heroGridStyle}
        />
        <Container className="relative">
          <div className="mb-7 flex items-center gap-2.5 text-[11px] tracking-[0.18em] text-sage uppercase">
            <span className="block h-px w-6 bg-sage" />
            AI Systems Studio · Australia
          </div>
          <h1 className="m-0 mb-7 max-w-[720px] text-[clamp(40px,7vw,72px)] leading-[1.04] font-medium tracking-tightest text-off-white [&_em]:font-serif [&_em]:font-normal [&_em]:text-sage [&_em]:italic">
            Modern business systems, <em>powered by AI.</em>
          </h1>
          <p className="m-0 mb-10 max-w-[480px] text-[15px] leading-[1.6] text-off-white/[0.82]">
            Vallon Labs builds AI-powered websites, automation and workflows for
            businesses ready to operate in the era ahead.
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
        </Container>
      </section>

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

      {/* Section 04 — Outcomes */}
      <section className="border-t-[0.5px] border-white/[0.12] py-25 max-md:py-16">
        <Container>
          <SectionEyebrow>04 — Outcomes</SectionEyebrow>
          <div className="mt-2 flex flex-col">
            {outcomes.map((o, i) => (
              <div
                key={o.lead}
                className={`flex items-baseline gap-6 border-t-[0.5px] border-white/[0.12] py-[22px] ${
                  i === outcomes.length - 1 ? "border-b-[0.5px]" : ""
                }`}
              >
                <span
                  aria-hidden
                  className="block h-1.5 w-1.5 shrink-0 rounded-full bg-sage"
                />
                <p className="m-0 flex-1 font-serif text-[clamp(18px,2.2vw,22px)] leading-[1.35] font-normal tracking-[-0.005em] text-off-white/95">
                  {o.lead} <em className="text-sage italic">{o.em}</em>
                  {o.trail ? ` ${o.trail}` : ""}
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
