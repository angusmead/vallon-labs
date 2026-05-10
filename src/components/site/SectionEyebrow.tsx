import { clsx } from "clsx";

export function SectionEyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "mb-8 text-[11px] tracking-[0.18em] text-sage/85 uppercase",
        className
      )}
    >
      {children}
    </div>
  );
}
