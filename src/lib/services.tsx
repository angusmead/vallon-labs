import type { ReactNode } from "react";

const WebsiteIcon = (
  <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <rect x="3" y="5" width="22" height="16" stroke="currentColor" strokeWidth="1" />
    <line x1="3" y1="10" x2="25" y2="10" stroke="currentColor" strokeWidth="1" />
    <circle cx="6" cy="7.5" r="0.6" fill="currentColor" />
    <circle cx="8.5" cy="7.5" r="0.6" fill="currentColor" />
  </svg>
);

const ContentIcon = (
  <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <path d="M5 6 L13 6 L13 14 L5 14 Z" stroke="currentColor" strokeWidth="1" />
    <path d="M9 11 L11 9 L11 13 Z" fill="currentColor" />
    <line x1="16" y1="6" x2="24" y2="6" stroke="currentColor" strokeWidth="1" />
    <line x1="16" y1="9" x2="22" y2="9" stroke="currentColor" strokeWidth="1" />
    <line x1="16" y1="12" x2="24" y2="12" stroke="currentColor" strokeWidth="1" />
    <line x1="5" y1="18" x2="24" y2="18" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <line x1="5" y1="21" x2="20" y2="21" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <line x1="5" y1="24" x2="22" y2="24" stroke="currentColor" strokeWidth="1" opacity="0.5" />
  </svg>
);

const AutomationIcon = (
  <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth="1" />
    <circle cx="22" cy="6" r="2" stroke="currentColor" strokeWidth="1" />
    <circle cx="14" cy="22" r="2" stroke="currentColor" strokeWidth="1" />
    <line x1="7.5" y1="7.5" x2="13" y2="20.5" stroke="currentColor" strokeWidth="1" />
    <line x1="20.5" y1="7.5" x2="15" y2="20.5" stroke="currentColor" strokeWidth="1" />
    <line x1="8" y1="6" x2="20" y2="6" stroke="currentColor" strokeWidth="1" />
  </svg>
);

const AuditIcon = (
  <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <rect x="4" y="4" width="20" height="20" stroke="currentColor" strokeWidth="1" />
    <line x1="4" y1="14" x2="24" y2="14" stroke="currentColor" strokeWidth="1" />
    <line x1="14" y1="4" x2="14" y2="24" stroke="currentColor" strokeWidth="1" />
    <circle cx="19" cy="9" r="1.2" fill="currentColor" />
  </svg>
);

export type ServiceDetail = {
  slug: string;
  pair: "build" | "operate";
  number: string;
  label: string;
  title: string;
  desc: string;
  href: string;
  icon: ReactNode;
  detail: {
    eyebrow: string;
    heading: ReactNode;
    sub: string;
    included: { title: string; copy: string }[];
    process: { num: string; title: string; desc: string }[];
    outcomes: { lead: string; em: string; trail?: string }[];
  };
};

export const services: ServiceDetail[] = [
  {
    slug: "website-systems",
    pair: "build",
    number: "01",
    label: "01",
    title: "AI Website Systems",
    desc: "Conversion-led websites built with AI-assisted workflows. Fast, modern, and engineered to generate leads.",
    href: "/services/website-systems",
    icon: WebsiteIcon,
    detail: {
      eyebrow: "Service · 01",
      heading: <>Websites that <em>generate leads.</em></>,
      sub: "Conversion-led websites built with AI-assisted workflows. Fast, modern, engineered for the era ahead.",
      included: [
        { title: "Strategy + IA", copy: "Offer architecture, audience clarity, conversion model." },
        { title: "Visual design", copy: "Modern, restrained, tuned to the offer — not a template." },
        { title: "AI-assisted production", copy: "Copy, asset, and code production accelerated end-to-end." },
        { title: "Modern build", copy: "Next.js on the edge, sub-second load, perfect Lighthouse." },
        { title: "Lead capture", copy: "Forms, booking flows, qualification logic wired in." },
        { title: "Analytics + SEO", copy: "On-page SEO, performance budget, conversion telemetry." },
      ],
      process: [
        { num: "01", title: "Map", desc: "Audit your current site and define the conversion model." },
        { num: "02", title: "Build", desc: "Design and engineering sprint, AI-assisted throughout." },
        { num: "03", title: "Launch", desc: "Staged release. Optimisation cycle locks in over the first 30 days." },
      ],
      outcomes: [
        { lead: "Page load times under", em: "1.5 seconds." },
        { lead: "Lead capture rates lifted", em: "3–5×", trail: "on rebuilt sites." },
        { lead: "Time-to-launch compressed from", em: "months to weeks." },
      ],
    },
  },
  {
    slug: "content-systems",
    pair: "build",
    number: "02",
    label: "02",
    title: "AI Content Systems",
    desc: "AI scripting engines and automated production workflows that turn one brief into video, written, and social output at scale.",
    href: "/services/content-systems",
    icon: ContentIcon,
    detail: {
      eyebrow: "Service · 02",
      heading: <>One brief, <em>every format.</em></>,
      sub: "AI scripting engines and automated production workflows that turn a single input into video, written and social output at scale.",
      included: [
        { title: "Voice engine", copy: "AI scripting tuned to your tone and topics." },
        { title: "Production pipeline", copy: "Automated assembly across formats and channels." },
        { title: "Multi-format output", copy: "Long video, short-form, written, social, email." },
        { title: "Brand consistency", copy: "Asset library and rules that keep every piece on-brand." },
        { title: "Distribution", copy: "Scheduling and routing to the right channels." },
        { title: "Feedback loop", copy: "Performance signal back into the engine." },
      ],
      process: [
        { num: "01", title: "Frame", desc: "Establish voice, formats, and distribution channels." },
        { num: "02", title: "Build", desc: "Engineer the scripting and production pipeline." },
        { num: "03", title: "Operate", desc: "Brief in, multi-format out. Continuous refinement." },
      ],
      outcomes: [
        { lead: "Output multiplied by", em: "4–8×", trail: "per brief." },
        { lead: "Production turnaround cut from", em: "weeks to days." },
        { lead: "Brand consistency held across", em: "every channel." },
      ],
    },
  },
  {
    slug: "business-automation",
    pair: "operate",
    number: "03",
    label: "03",
    title: "AI Business Automation",
    desc: "Workflows that eliminate repetitive admin, qualify leads, and modernise day-to-day operations.",
    href: "/services/business-automation",
    icon: AutomationIcon,
    detail: {
      eyebrow: "Service · 03",
      heading: <>Operations, <em>compressed.</em></>,
      sub: "Workflows that eliminate repetitive admin, qualify leads, and modernise day-to-day operations.",
      included: [
        { title: "Workflow audit", copy: "Map every repeatable, rules-based piece of work." },
        { title: "Cross-tool automation", copy: "CRM, email, scheduling, ops — wired together." },
        { title: "Lead qualification", copy: "AI scoring and routing to the right person, fast." },
        { title: "Notifications + escalation", copy: "Internal alerts only when humans need to act." },
        { title: "Reporting", copy: "Dashboards that show what's running and what's not." },
        { title: "Documentation", copy: "Plain-language guides for the people who use the systems." },
      ],
      process: [
        { num: "01", title: "Map", desc: "Identify the repeatable, rules-based work." },
        { num: "02", title: "Build", desc: "Engineer the automations. Test against real cases." },
        { num: "03", title: "Operate", desc: "Monitor, refine, and expand as the business grows." },
      ],
      outcomes: [
        { lead: "Admin time reduced by", em: "60–80%." },
        { lead: "Lead response time cut from", em: "hours to minutes." },
        { lead: "Quoting cycles compressed from", em: "days to same-day." },
      ],
    },
  },
  {
    slug: "business-audits",
    pair: "operate",
    number: "04",
    label: "04",
    title: "AI Business Audits",
    desc: "A diagnostic of your current systems, with a clear roadmap for what to modernise first.",
    href: "/services/business-audits",
    icon: AuditIcon,
    detail: {
      eyebrow: "Service · 04",
      heading: <>A clear-eyed <em>diagnostic.</em></>,
      sub: "A diagnostic of your current systems, with a clear roadmap for what to modernise first.",
      included: [
        { title: "Discovery sessions", copy: "Working sessions with operators across the business." },
        { title: "Systems map", copy: "A single diagram of every tool, workflow, and handoff." },
        { title: "Bottleneck analysis", copy: "Where time leaks. Where work duplicates. What slows down growth." },
        { title: "AI opportunity scoring", copy: "Where automation and AI return real leverage — not just novelty." },
        { title: "Modernisation roadmap", copy: "Prioritised plan, sequenced for impact and capacity." },
        { title: "Implementation estimates", copy: "Time, cost, and dependencies for each move." },
      ],
      process: [
        { num: "01", title: "Discover", desc: "Sessions with operators across the business." },
        { num: "02", title: "Map", desc: "Build the current-state systems diagram." },
        { num: "03", title: "Roadmap", desc: "Deliver the prioritised plan with time and cost." },
      ],
      outcomes: [
        { lead: "A clear view of", em: "every system", trail: "you operate on." },
        { lead: "Top", em: "3–5 modernisation moves", trail: "identified." },
        { lead: "Roadmap mapped against", em: "budget and capacity." },
      ],
    },
  },
];

export const buildServices = services.filter((s) => s.pair === "build");
export const operateServices = services.filter((s) => s.pair === "operate");

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
