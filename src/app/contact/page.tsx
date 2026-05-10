import type { Metadata } from "next";
import { Container } from "@/components/site/Container";
import { PageHero } from "@/components/site/PageHero";
import { CalEmbed } from "@/components/site/CalEmbed";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "A 30-minute discovery call to map where AI fits in your business. Brisbane, Australia.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        heading={<>Let&rsquo;s <em>talk.</em></>}
        sub="A 30-minute discovery call to map where AI fits in your business."
      />

      <section className="border-t-[0.5px] border-white/[0.12] py-25 max-md:py-16">
        <Container>
          <div className="grid grid-cols-[1fr_360px] gap-16 max-md:grid-cols-1 max-md:gap-10">
            {/* Cal.com embed */}
            <div className="min-h-[700px] overflow-hidden rounded-[6px] border-[0.5px] border-white/[0.12] bg-graphite-deep max-md:min-h-[620px]">
              <CalEmbed />
            </div>

            {/* Aside — direct contact + location */}
            <aside className="space-y-10 max-md:space-y-8">
              <div>
                <div className="mb-3 text-[11px] tracking-[0.18em] text-sage uppercase">
                  Direct
                </div>
                <p className="m-0 text-[14px] leading-[1.6] text-off-white/80">
                  Or skip the calendar and write to us.
                </p>
                <a
                  href="mailto:info@vallonlabs.com.au"
                  className="mt-2 inline-block border-b-[0.5px] border-sage/40 text-[14px] text-off-white transition-colors duration-200 ease-out hover:border-sage hover:text-sage"
                >
                  info@vallonlabs.com.au
                </a>
              </div>

              <div>
                <div className="mb-3 text-[11px] tracking-[0.18em] text-sage uppercase">
                  Located
                </div>
                <p className="m-0 text-[14px] leading-[1.6] text-off-white/80">
                  Australia. Working with clients across the country and beyond.
                </p>
              </div>

              <div>
                <div className="mb-3 text-[11px] tracking-[0.18em] text-sage uppercase">
                  Engagements
                </div>
                <p className="m-0 text-[14px] leading-[1.6] text-off-white/80">
                  Audits, project builds, and ongoing Operate retainers. Most
                  conversations begin with a free 30-minute call.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
