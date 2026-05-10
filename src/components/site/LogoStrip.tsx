import { Container } from "./Container";

const placeholderLogos = [
  "MERIDIAN",
  "KOWLOON",
  "NORTH VINE",
  "TAVAS",
  "ACME LABS",
];

export function LogoStrip() {
  return (
    <section className="border-t-[0.5px] border-white/[0.12] py-14 max-md:py-10">
      <Container>
        <div className="mb-8 text-[11px] tracking-[0.18em] text-sage/85 uppercase">
          Selected partners
        </div>
        <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-6 max-md:justify-start">
          {placeholderLogos.map((name) => (
            <span
              key={name}
              className="text-[14px] font-medium tracking-[0.18em] text-off-white/45 uppercase transition-colors duration-200 ease-out hover:text-off-white/80"
            >
              {name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
