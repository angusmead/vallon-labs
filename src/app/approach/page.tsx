import type { Metadata } from "next";
import { Container } from "@/components/site/Container";
import { PageHero } from "@/components/site/PageHero";
import { ClosingCTA } from "@/components/site/ClosingCTA";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "How we work, in three movements. A repeatable arc — Audit, Build, Operate — that takes a business from disconnected to coherent.",
};

const stages = [
  {
    num: "01",
    title: "Audit",
    heading: <>Begin with <em>the map.</em></>,
    body: "Every project starts with a clear-eyed look at the systems you already operate on. We trace the workflows, the tools, the handoffs, the moments where time leaks. The audit is short — usually two weeks — and the deliverable is a single map of your current state plus the highest-leverage opportunities.",
    looks: ["Leakage and duplication", "Manual handoffs", "Tool sprawl", "Where AI returns real leverage"],
    delivers: "A systems map, a prioritised roadmap, and time/cost estimates against your budget and capacity.",
  },
  {
    num: "02",
    title: "Build",
    heading: <>Engineer it <em>cleanly.</em></>,
    body: "We design and ship the websites, automations and workflows. Builds run in tight sprints — usually four to eight weeks per system. AI-assisted production compresses the cycle without compromising the craft. Nothing ships that we wouldn't run ourselves.",
    looks: ["Conversion-led design", "Modern stack on the edge", "Tested against real cases", "Documentation built in"],
    delivers: "Production-ready systems with documentation and onboarding for your team.",
  },
  {
    num: "03",
    title: "Operate",
    heading: <>Keep it <em>sharp.</em></>,
    body: "Systems decay if no-one tends them. We stay engaged after launch — refining, monitoring, expanding. Most clients move into a monthly Operate engagement that scales with the business and folds in new automations as they're identified.",
    looks: ["Performance and reliability", "New automation opportunities", "Evolving with the business", "Quiet, continuous refinement"],
    delivers: "An ongoing partnership that keeps the systems modern as your business grows.",
  },
];

export default function ApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="Approach"
        heading={<>How we work, in <em>three movements.</em></>}
        sub="A repeatable arc — Audit, Build, Operate — that takes a business from disconnected to coherent."
      />

      {stages.map((stage) => (
        <section
          key={stage.num}
          className="border-t-[0.5px] border-white/[0.12] py-25 max-md:py-16"
        >
          <Container>
            <div className="mb-10 flex items-baseline gap-x-[18px] gap-y-2">
              <span className="font-serif text-[28px] font-normal text-sage italic">
                {stage.num}
              </span>
              <span className="text-[11px] tracking-[0.18em] text-sage/85 uppercase">
                {stage.title}
              </span>
            </div>

            <h2 className="m-0 mb-8 max-w-[820px] text-[clamp(32px,5vw,52px)] leading-[1.08] font-medium tracking-tightest text-off-white [&_em]:font-serif [&_em]:font-normal [&_em]:text-sage [&_em]:italic">
              {stage.heading}
            </h2>

            <p className="m-0 mb-12 max-w-[640px] font-serif text-[clamp(18px,2.2vw,22px)] leading-[1.4] font-normal tracking-[-0.005em] text-off-white/90">
              {stage.body}
            </p>

            <div className="grid grid-cols-2 gap-x-12 gap-y-8 max-md:grid-cols-1">
              <div className="border-t-[0.5px] border-white/[0.12] pt-5">
                <div className="mb-3 text-[11px] tracking-[0.18em] text-sage uppercase">
                  What we look for
                </div>
                <ul className="m-0 list-none space-y-1.5 p-0 text-[14px] text-off-white/80">
                  {stage.looks.map((item) => (
                    <li key={item} className="flex items-baseline gap-3">
                      <span
                        aria-hidden
                        className="block h-1 w-1 shrink-0 rounded-full bg-sage"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t-[0.5px] border-white/[0.12] pt-5">
                <div className="mb-3 text-[11px] tracking-[0.18em] text-sage uppercase">
                  What you receive
                </div>
                <p className="m-0 text-[14px] leading-[1.6] text-off-white/80">
                  {stage.delivers}
                </p>
              </div>
            </div>
          </Container>
        </section>
      ))}

      <ClosingCTA
        heading={<>Begin with <em>the audit.</em></>}
        sub="A 30-minute discovery call to map where this fits in your business."
      />
    </>
  );
}
