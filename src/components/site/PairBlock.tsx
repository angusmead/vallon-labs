import { ServiceCard, type ServiceCardProps } from "./ServiceCard";

export function PairBlock({
  num,
  title,
  desc,
  services,
}: {
  num: string;
  title: string;
  desc: string;
  services: ServiceCardProps[];
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
