type AmbientGridProps = {
  origin?: string;
  size?: number;
  lineOpacity?: number;
  className?: string;
};

export function AmbientGrid({
  origin = "65% 30%",
  size = 56,
  lineOpacity = 0.06,
  className = "",
}: AmbientGridProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,${lineOpacity}) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,${lineOpacity}) 1px, transparent 1px)`,
        backgroundSize: `${size}px ${size}px`,
        WebkitMaskImage: `radial-gradient(ellipse at ${origin}, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 70%)`,
        maskImage: `radial-gradient(ellipse at ${origin}, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 70%)`,
        animation: "vl-drift 18s ease-in-out infinite alternate",
      }}
    />
  );
}
