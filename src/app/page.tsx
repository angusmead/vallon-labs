import Link from "next/link";
import { Container } from "@/components/site/Container";
import { CTAPrimary } from "@/components/site/CTAPrimary";

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

const buildServices = [
  {
    label: "01",
    title: "AI Website Systems",
    desc: "Conversion-led websites built with AI-assisted workflows. Fast, modern, and engineered to generate leads.",
    href: "/services/website-systems",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="22" height="16" stroke="currentColor" strokeWidth="1" />
        <line x1="3" y1="10" x2="25" y2="10" stroke="currentColor" strokeWidth="1" />
        <circle cx="6" cy="7.5" r="0.6" fill="currentColor" />
        <circle cx="8.5" cy="7.5" r="0.6" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "02",
    title: "AI Content Systems",
    desc: "AI scripting engines and automated production workflows that turn one brief into video, written, and social output at scale.",
    href: "/services/content-systems",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M5 6 L13 6 L13 14 L5 14 Z" stroke="currentColor" strokeWidth="1" />
        <path d="M9 11 L11 9 L11 13 Z" fill="currentColor" />
        <line x1="16" y1="6" x2="24" y2="6" stroke="currentColor" strokeWidth="1" />
        <line x1="16" y1="9" x2="22" y2="9" stroke="currentColor" strokeWidth="1" />
        <line x1="16" y1="12" x2="24" y2="12" stroke="currentColor" strokeWidth="1" />
        <line x1="5" y1="18" x2="24" y2="18" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="5" y1="21" x2="20" y2="21" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        <line x1="5" y1="24" x2="22" y2="24" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      </svg>
    ),
  },
];

const operateServices = [
  {
    label: "03",
    title: "AI Business Automation",
    desc: "Workflows that eliminate repetitive admin, qualify leads, and modernise day-to-day operations.",
    href: "/services/business-automation",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth="1" />
        <circle cx="22" cy="6" r="2" stroke="currentColor" strokeWidth="1" />
        <circle cx="14" cy="22" r="2" stroke="currentColor" strokeWidth="1" />
        <line x1="7.5" y1="7.5" x2="13" y2="20.5" stroke="currentColor" strokeWidth="1" />
        <line x1="20.5" y1="7.5" x2="15" y2="20.5" stroke="currentColor" strokeWidth="1" />
        <line x1="8" y1="6" x2="20" y2="6" stroke="currentColor" strokeWidth="1" />
      </svg>
    ),
  },
  {
    label: "04",
    title: "AI Business Audits",
    desc: "A diagnostic of your current systems, with a clear roadmap for what to modernise first.",
    href: "/services/business-audits",
    icon: (
      <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="20" height="20" stroke="currentColor" strokeWidth="1" />
        <line x1="4" y1="14" x2="24" y2="14" stroke="currentColor" strokeWidth="1" />
        <line x1="14" y1="4" x2="14" y2="24" stroke="currentColor" strokeWidth="1" />
        <circle cx="19" cy="9" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
];

const processSteps = [
  {
    num: "01",
    title: "Audit",
    desc: "We map your current systems and identify the highest-leverage opportunities.",
  },
  {
    num: "02",
    title: "Build",
    desc: "We design and implement the websites, automations and workflows.",
  },
  {
    num: "03",
    title: "Operate",
    desc: "We refine, maintain and evolve the systems as your business grows.",
  },
];

const outcomes = [
  { lead: "Admin hours reduced by", em: "60–80%", trail: "on automated workflows." },
  { lead: "Lead response time cut from", em: "hours to minutes.", trail: "" },
  { lead: "Quoting cycles compressed from", em: "days to same-day.", trail: "" },
];

type Service = (typeof buildServices)[number];

function ServiceCard({ service, last }: { service: Service; last: boolean }) {
  return (
    <article
      className={`relative px-7 pt-9 pb-8 transition-colors duration-200 ease-out hover:bg-sage/[0.04] max-md:px-0 max-md:py-7 max-md:border-b-[0.5px] max-md:border-white/[0.12] ${
        last
          ? "max-md:border-b-0"
          : "border-r-[0.5px] border-white/[0.12] max-md:border-r-0"
      }`}
    >
      <div className="mb-7 block h-7 w-7 text-sage">{service.icon}</div>
      <div className="mb-3.5 text-[11px] tracking-[0.18em] text-sage uppercase">
        {service.label}
      </div>
      <h3 className="mb-3.5 text-[19px] leading-[1.25] font-medium tracking-tight text-off-white">
        {service.title}
      </h3>
      <p className="mb-6 text-[13px] leading-[1.6] text-off-white/75">{service.desc}</p>
      <Link
        href={service.href}
        className="group inline-flex items-center gap-1.5 text-[12px] text-sage transition-[gap] duration-200 ease-out hover:gap-2.5"
      >
        Learn more <span>→</span>
      </Link>
    </article>
  );
}

function PairBlock({
  num,
  title,
  desc,
  services,
}: {
  num: string;
  title: string;
  desc: string;
  services: Service[];
}) {
  return (
    <div className="mb-12 border-t-[0.5px] border-white/[0.12] pt-9 last:mb-0">
      <div className="mb-9 flex flex-wrap items-baseline gap-x-[18px] gap-y-2">
        <span className="font-serif text-[28px] font-normal text-sage italic">
          {num}
        </span>
        <h2 className="m-0 text-[26px] font-medium tracking-tighter text-off-white">
          {title}
        </h2>
        <p className="m-0 ml-auto max-w-[280px] text-[13px] leading-[1.55] tracking-[0.01em] text-off-white/70 max-md:m-0 max-md:max-w-full">
          {desc}
        </p>
      </div>
      <div className="grid grid-cols-2 border-t-[0.5px] border-white/[0.12] max-md:grid-cols-1">
        {services.map((service, i) => (
          <ServiceCard
            key={service.title}
            service={service}
            last={i === services.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

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
          <div className="mb-8 text-[11px] tracking-[0.18em] text-sage/85 uppercase">
            01 — The shift
          </div>
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
          <div className="mb-8 text-[11px] tracking-[0.18em] text-sage/85 uppercase">
            02 — What we do
          </div>
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
          <div className="mb-8 text-[11px] tracking-[0.18em] text-sage/85 uppercase">
            03 — How we work
          </div>
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
          <div className="mb-8 text-[11px] tracking-[0.18em] text-sage/85 uppercase">
            04 — Outcomes
          </div>
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

      {/* Closing CTA */}
      <section className="border-t-[0.5px] border-white/[0.12] bg-graphite-deep py-35 max-md:py-24">
        <Container>
          <h2 className="m-0 mb-6 max-w-[700px] text-[clamp(40px,7vw,72px)] leading-[1.04] font-medium tracking-tightest text-off-white [&_em]:font-serif [&_em]:font-normal [&_em]:text-sage [&_em]:italic">
            Let&rsquo;s build <em>something better.</em>
          </h2>
          <p className="m-0 mb-9 max-w-[380px] text-[14px] leading-[1.6] text-off-white/75">
            A 30-minute call to map where AI fits in your business.
          </p>
          <CTAPrimary href="/contact">Book a discovery call</CTAPrimary>
        </Container>
      </section>
    </>
  );
}
