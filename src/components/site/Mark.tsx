import { clsx } from "clsx";

export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 26 22"
      fill="none"
      aria-hidden="true"
      className={clsx("text-current", className)}
    >
      <path
        d="M2 2 L13 20 L24 2"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeMiterlimit="4"
      />
    </svg>
  );
}
