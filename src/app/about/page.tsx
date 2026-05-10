import type { Metadata } from "next";
import { Container } from "@/components/site/Container";
import { PageHero } from "@/components/site/PageHero";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { ClosingCTA } from "@/components/site/ClosingCTA";
import { FramedFigure } from "@/components/site/FramedFigure";

export const metadata: Metadata = {
  title: "About",
  description:
    "Vallon Labs is a team of designers, creatives and digital operators based in Queensland. We watched AI rewrite the disciplines we know best — and built Vallon to do it for everyone else.",
};

const facts = [
  {
    label: "What we are",
    body: "Designers, creatives and digital operators turned AI builders. Two decades of combined instinct, brought into a new toolkit.",
  },
  {
    label: "Where we are",
    body: "Queensland-based. Working with clients across Australia. Increasingly beyond it.",
  },
  {
    label: "What we bring",
    body: "Working fluency in the AI stack. A clear-eyed view of where it returns real leverage — and where it's still noise.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        heading={<>Built by people who <em>fell in love</em> with the work.</>}
        sub="Vallon Labs is a team of designers, creatives and digital operators based in Queensland. Over the last few years, we watched AI quietly rewrite the disciplines we already knew."
      />

      {/* The obsession — long-form */}
      <section className="border-t-[0.5px] border-white/[0.12] py-25 max-md:py-16">
        <Container>
          <SectionEyebrow>Why we built this</SectionEyebrow>

          <div className="max-w-[680px] space-y-9">
            <p className="m-0 font-serif text-[clamp(18px,2.2vw,22px)] leading-[1.45] font-normal tracking-[-0.005em] text-off-white/90">
              We used these tools on our own briefs first. Websites that took
              weeks shipped in days. Content production that took a small team
              compressed into a workflow. Operations that quietly leaked hours
              started saving themselves.
            </p>

            <p className="m-0 font-serif text-[clamp(20px,2.6vw,28px)] leading-[1.35] font-normal tracking-soft text-off-white/95 italic [&_em]:not-italic [&_em]:text-sage">
              The change wasn&rsquo;t theoretical. It was on our screens, in our
              calendars, in our P&amp;Ls.{" "}
              <em>We couldn&rsquo;t stop thinking about it.</em>
            </p>

            <p className="m-0 font-serif text-[clamp(18px,2.2vw,22px)] leading-[1.45] font-normal tracking-[-0.005em] text-off-white/90">
              The doors AI is opening for modern businesses are bigger than most
              operators have the time to map. We&rsquo;ve already done the
              mapping for our own work. Vallon Labs exists to do it for everyone
              else — for businesses across Australia and beyond who are ready to
              operate in the era ahead.
            </p>
          </div>
        </Container>
      </section>

      {/* In the field — 2-col with framed phone */}
      <section className="border-t-[0.5px] border-white/[0.12] py-25 max-md:py-16">
        <Container>
          <div className="grid grid-cols-[1fr_minmax(0,520px)] items-center gap-x-16 gap-y-14 max-lg:grid-cols-1 max-lg:items-start">
            <div>
              <SectionEyebrow>In the field</SectionEyebrow>
              <h2 className="m-0 mb-7 max-w-[520px] text-[clamp(32px,5vw,52px)] leading-[1.08] font-medium tracking-tightest text-off-white [&_em]:font-serif [&_em]:font-normal [&_em]:text-sage [&_em]:italic">
                We use what we <em>ship.</em>
              </h2>
              <p className="m-0 max-w-[480px] font-serif text-[clamp(18px,2.2vw,22px)] leading-[1.45] font-normal tracking-[-0.005em] text-off-white/90">
                Every system we sell, we run inside Vallon first. Orchestration
                views, AI scoring, automated routing — load-tested on our own
                work long before it goes near a client engagement.
              </p>
            </div>

            <div className="flex justify-end max-lg:justify-start">
              <FramedFigure
                src="/about-phone.png"
                alt="Vallon Labs internal tooling — Deploy AI Customer Service Bot task assigned, in-progress, high priority"
                width={2048}
                height={2048}
                figureNumber="02"
                figureLabel="Service bot"
                caption="Vallon · Internal · in production"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Three-column facts */}
      <section className="border-t-[0.5px] border-white/[0.12] py-25 max-md:py-16">
        <Container>
          <SectionEyebrow>The shape of the studio</SectionEyebrow>
          <div className="grid grid-cols-3 gap-x-10 gap-y-10 max-md:grid-cols-1 max-md:gap-y-8">
            {facts.map((fact) => (
              <div
                key={fact.label}
                className="border-t-[0.5px] border-white/[0.12] pt-6"
              >
                <div className="mb-3 text-[11px] tracking-[0.18em] text-sage uppercase">
                  {fact.label}
                </div>
                <p className="m-0 text-[14px] leading-[1.6] text-off-white/80">
                  {fact.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ClosingCTA
        heading={<>Let&rsquo;s <em>build something better.</em></>}
        sub="A 30-minute call to map where AI fits in your business."
      />
    </>
  );
}
