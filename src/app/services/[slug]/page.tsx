import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/site/Container";
import { PageHero } from "@/components/site/PageHero";
import { ClosingCTA } from "@/components/site/ClosingCTA";
import { SectionEyebrow } from "@/components/site/SectionEyebrow";
import { services, getService } from "@/lib/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.desc,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const { detail } = service;
  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero
        eyebrow={detail.eyebrow}
        heading={detail.heading}
        sub={detail.sub}
      />

      {/* What's included */}
      <section className="border-t-[0.5px] border-white/[0.12] py-25 max-md:py-16">
        <Container>
          <SectionEyebrow>What&rsquo;s included</SectionEyebrow>
          <div className="grid grid-cols-2 gap-x-10 gap-y-10 max-md:grid-cols-1 max-md:gap-y-8">
            {detail.included.map((item) => (
              <div
                key={item.title}
                className="border-t-[0.5px] border-white/[0.12] pt-6"
              >
                <h3 className="m-0 mb-2 text-[16px] font-medium tracking-tight text-off-white">
                  {item.title}
                </h3>
                <p className="m-0 text-[13px] leading-[1.6] text-off-white/75">
                  {item.copy}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="border-t-[0.5px] border-white/[0.12] py-25 max-md:py-16">
        <Container>
          <SectionEyebrow>How it works</SectionEyebrow>
          <div className="mt-2 grid grid-cols-3 max-md:grid-cols-1 max-md:gap-8">
            {detail.process.map((step, i) => (
              <div
                key={step.num}
                className={`pr-6 max-md:pr-0 ${
                  i === detail.process.length - 1
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

      {/* Outcomes */}
      <section className="border-t-[0.5px] border-white/[0.12] py-25 max-md:py-16">
        <Container>
          <SectionEyebrow>Outcomes</SectionEyebrow>
          <div className="mt-2 flex flex-col">
            {detail.outcomes.map((o, i) => (
              <div
                key={o.lead}
                className={`flex items-baseline gap-6 border-t-[0.5px] border-white/[0.12] py-[22px] ${
                  i === detail.outcomes.length - 1 ? "border-b-[0.5px]" : ""
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

      {/* Other services */}
      <section className="border-t-[0.5px] border-white/[0.12] py-25 max-md:py-16">
        <Container>
          <SectionEyebrow>Also offered</SectionEyebrow>
          <div className="grid grid-cols-3 gap-x-8 gap-y-8 max-md:grid-cols-1">
            {otherServices.map((other) => (
              <Link
                key={other.slug}
                href={other.href}
                className="group block border-t-[0.5px] border-white/[0.12] pt-6 transition-colors duration-200 ease-out hover:border-sage/40"
              >
                <div className="mb-4 h-7 w-7 text-sage">{other.icon}</div>
                <div className="mb-3 text-[11px] tracking-[0.18em] text-sage uppercase">
                  {other.label}
                </div>
                <h3 className="m-0 mb-2 text-[16px] font-medium tracking-tight text-off-white">
                  {other.title}
                </h3>
                <span className="text-[12px] text-off-white/60 transition-colors duration-200 ease-out group-hover:text-sage">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <ClosingCTA
        heading={<>Start with a <em>conversation.</em></>}
        sub="A 30-minute discovery call to map where this fits in your business."
      />
    </>
  );
}
