import Link from "next/link";
import { Mark } from "./Mark";

const links = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/approach", label: "Approach" },
  { href: "/perspective", label: "Perspective" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  return (
    <nav
      aria-label="Primary"
      className="sticky top-0 z-50 border-b-[0.5px] border-white/[0.12] bg-graphite/85 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-8 py-[18px] text-[13px]">
        <Link
          href="/"
          aria-label="Vallon Labs home"
          className="flex items-center gap-3.5 text-[15px] font-bold tracking-tight text-off-white"
        >
          <Mark className="h-[18px] w-[22px]" />
          <span>Vallon Labs</span>
        </Link>

        <div className="hidden gap-7 text-off-white/75 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors duration-200 ease-out hover:text-off-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="rounded-full border-[0.5px] border-sage/55 px-3.5 py-2 text-[12px] tracking-[0.02em] text-sage transition-colors duration-200 ease-out hover:bg-sage/[0.08]"
        >
          Book a call →
        </Link>
      </div>
    </nav>
  );
}
