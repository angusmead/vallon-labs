import Link from "next/link";
import type { ReactNode } from "react";

export type ServiceCardProps = {
  label: string;
  title: string;
  desc: string;
  href: string;
  icon: ReactNode;
};

export function ServiceCard({
  service,
  last,
}: {
  service: ServiceCardProps;
  last: boolean;
}) {
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
      <p className="mb-6 text-[13px] leading-[1.6] text-off-white/75">
        {service.desc}
      </p>
      <Link
        href={service.href}
        className="group inline-flex items-center gap-1.5 text-[12px] text-sage transition-[gap] duration-200 ease-out hover:gap-2.5"
      >
        Learn more <span>→</span>
      </Link>
    </article>
  );
}
