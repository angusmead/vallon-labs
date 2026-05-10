export function HeroVisual() {
  return (
    <svg
      viewBox="0 0 480 600"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-auto w-full max-w-[520px]"
    >
      <defs>
        <radialGradient id="hv-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#CCD8C4" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#CCD8C4" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Ambient ghost grid behind the diagram */}
      <g opacity="0.5">
        {Array.from({ length: 11 }).map((_, i) => (
          <line
            key={`v${i}`}
            x1={i * 48}
            y1={0}
            x2={i * 48}
            y2={600}
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="0.5"
          />
        ))}
        {Array.from({ length: 13 }).map((_, i) => (
          <line
            key={`h${i}`}
            x1={0}
            y1={i * 50}
            x2={480}
            y2={i * 50}
            stroke="rgba(255,255,255,0.04)"
            strokeWidth="0.5"
          />
        ))}
      </g>

      {/* Soft glow behind central node */}
      <circle cx="240" cy="300" r="180" fill="url(#hv-glow)" />

      {/* Connecting lines — drawn first so cards layer on top */}
      <path
        d="M240 112 L240 240"
        stroke="#CCD8C4"
        strokeWidth="0.6"
        strokeDasharray="3 4"
        opacity="0.55"
        fill="none"
      />
      <path
        d="M180 360 Q140 410 90 460"
        stroke="#CCD8C4"
        strokeWidth="0.6"
        strokeDasharray="3 4"
        opacity="0.55"
        fill="none"
      />
      <path
        d="M240 360 L240 460"
        stroke="#CCD8C4"
        strokeWidth="0.6"
        strokeDasharray="3 4"
        opacity="0.55"
        fill="none"
      />
      <path
        d="M300 360 Q340 410 390 460"
        stroke="#CCD8C4"
        strokeWidth="0.6"
        strokeDasharray="3 4"
        opacity="0.55"
        fill="none"
      />

      {/* Junction dots */}
      <circle cx="240" cy="112" r="2" fill="#CCD8C4" />
      <circle cx="240" cy="240" r="2" fill="#CCD8C4" />
      <circle cx="240" cy="360" r="2" fill="#CCD8C4" />
      <circle cx="90" cy="460" r="2" fill="#CCD8C4" opacity="0.7" />
      <circle cx="240" cy="460" r="2" fill="#CCD8C4" opacity="0.7" />
      <circle cx="390" cy="460" r="2" fill="#CCD8C4" opacity="0.7" />

      {/* Top input card */}
      <g>
        <rect
          x="140"
          y="40"
          width="200"
          height="72"
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="0.5"
          fill="rgba(255,255,255,0.02)"
        />
        <text
          x="156"
          y="66"
          fill="#CCD8C4"
          fontSize="9"
          letterSpacing="2"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          INPUT
        </text>
        <text
          x="156"
          y="92"
          fill="#F4F2ED"
          fontSize="14"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          Brief or lead
        </text>
      </g>

      {/* Vallon AI engine — centerpiece */}
      <g>
        <rect
          x="140"
          y="240"
          width="200"
          height="120"
          stroke="rgba(204,216,196,0.55)"
          strokeWidth="0.5"
          fill="rgba(204,216,196,0.05)"
        />
        <text
          x="156"
          y="266"
          fill="#CCD8C4"
          fontSize="9"
          letterSpacing="2"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          VALLON · AI
        </text>
        {/* Chevron mark, centered */}
        <path
          d="M216 292 L240 322 L264 292"
          stroke="#CCD8C4"
          strokeWidth="2.6"
          strokeLinecap="square"
          strokeLinejoin="miter"
          fill="none"
        />
        <text
          x="156"
          y="346"
          fill="#F4F2ED"
          fontSize="13"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          Systems Engine
        </text>
      </g>

      {/* Output cards */}
      {[
        { x: 20, label: "Website" },
        { x: 170, label: "Content" },
        { x: 320, label: "Automation" },
      ].map((o) => (
        <g key={o.label}>
          <rect
            x={o.x}
            y="460"
            width="140"
            height="72"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="0.5"
            fill="rgba(255,255,255,0.02)"
          />
          <text
            x={o.x + 16}
            y="486"
            fill="#CCD8C4"
            fontSize="9"
            letterSpacing="2"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            OUTPUT
          </text>
          <text
            x={o.x + 16}
            y="510"
            fill="#F4F2ED"
            fontSize="13"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            {o.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
