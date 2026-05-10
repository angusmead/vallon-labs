import type { Metadata } from "next";
import { Container } from "@/components/site/Container";
import { PageHero } from "@/components/site/PageHero";

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
            {/* Cal.com embed slot */}
            <div className="min-h-[520px] rounded-[2px] border-[0.5px] border-white/[0.12] bg-graphite-deep p-10 max-md:min-h-[360px] max-md:p-6">
              <div className="mb-3 text-[11px] tracking-[0.18em] text-sage uppercase">
                Booking
              </div>
              <p className="m-0 max-w-[420px] font-serif text-[clamp(20px,2.4vw,26px)] leading-[1.32] font-normal tracking-soft text-off-white/95">
                Booking calendar <em className="text-sage italic">wiring in.</em>
              </p>
              <p className="m-0 mt-4 max-w-[420px] text-[13px] leading-[1.6] text-off-white/65">
                Cal.com is being set up now. Until then, reach out the old-fashioned
                way and we&rsquo;ll find a slot.
              </p>
            </div>

            {/* Aside — direct contact + location */}
            <aside className="space-y-10 max-md:space-y-8">
              <div>
                <div className="mb-3 text-[11px] tracking-[0.18em] text-sage uppercase">
                  Direct
                </div>
                <p className="m-0 text-[14px] leading-[1.6] text-off-white/80">
                  Email is fastest while the calendar is offline.
                </p>
                <p className="m-0 mt-2 text-[14px] text-off-white">
                  <span className="text-off-white/60">hello@vallon.labs</span>
                </p>
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
