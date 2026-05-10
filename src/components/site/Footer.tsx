export function Footer() {
  return (
    <footer className="mt-auto">
      <div
        aria-hidden
        className="mx-auto h-px max-w-[1200px] opacity-40"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--color-sage), transparent)",
        }}
      />
      <div className="mx-auto max-w-[1200px] px-8 pt-9 pb-8">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-off-white/60">
          <span>Vallon Labs · Australia</span>
          <span>© 2026</span>
        </div>
      </div>
    </footer>
  );
}
