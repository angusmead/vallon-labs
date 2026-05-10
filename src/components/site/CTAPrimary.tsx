import Link from "next/link";

export function CTAPrimary({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 rounded-full bg-off-white px-5 py-3 text-[13px] font-medium tracking-[0.01em] text-graphite transition-transform duration-200 ease-out hover:-translate-y-px"
    >
      {children}
      <span className="text-sage-deep transition-transform duration-200 ease-out group-hover:translate-x-0.5">
        →
      </span>
    </Link>
  );
}
