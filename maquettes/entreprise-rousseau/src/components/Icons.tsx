type P = { className?: string };
const base = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true } as const;

export const PhoneIcon = ({ className = "h-5 w-5" }: P) => (
  <svg className={className} viewBox="0 0 24 24" {...base}>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
  </svg>
);
export const PinIcon = ({ className = "h-5 w-5" }: P) => (
  <svg className={className} viewBox="0 0 24 24" {...base}>
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
export const ArrowIcon = ({ className = "h-5 w-5" }: P) => (
  <svg className={className} viewBox="0 0 24 24" {...base}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
export const MailIcon = ({ className = "h-5 w-5" }: P) => (
  <svg className={className} viewBox="0 0 24 24" {...base}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);
export const ClockIcon = ({ className = "h-5 w-5" }: P) => (
  <svg className={className} viewBox="0 0 24 24" {...base}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);
export const CheckIcon = ({ className = "h-5 w-5" }: P) => (
  <svg className={className} viewBox="0 0 24 24" {...base}>
    <path d="m5 12 5 5 9-10" />
  </svg>
);
export const DropIcon = ({ className = "h-6 w-6" }: P) => (
  <svg className={className} viewBox="0 0 24 24" {...base}>
    <path d="M12 3s6 6.2 6 10.5a6 6 0 0 1-12 0C6 9.2 12 3 12 3Z" />
  </svg>
);
export const FlameIcon = ({ className = "h-6 w-6" }: P) => (
  <svg className={className} viewBox="0 0 24 24" {...base}>
    <path d="M12 3c1 3.5 5 5.5 5 10a5 5 0 0 1-10 0c0-2 1-3.2 2-4.4C10 10 12 8 12 3Z" />
  </svg>
);
export const ShowerIcon = ({ className = "h-6 w-6" }: P) => (
  <svg className={className} viewBox="0 0 24 24" {...base}>
    <path d="M5 21V7a4 4 0 0 1 4-4h2M11 3h4a3 3 0 0 1 3 3v1M7 12h10l-1 3H8zM9 18v2M12 18v2M15 18v2" />
  </svg>
);
export const StarIcon = ({ className = "h-4 w-4" }: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8 5.8 21.1 7 14.2 2 9.3l6.9-1Z" />
  </svg>
);
export const Stars = ({ className = "h-4 w-4", tone = "text-amber" }: P & { tone?: string }) => (
  <span className={`inline-flex gap-0.5 ${tone}`} aria-hidden="true">
    {[0, 1, 2, 3, 4].map((i) => (
      <StarIcon key={i} className={className} />
    ))}
  </span>
);
