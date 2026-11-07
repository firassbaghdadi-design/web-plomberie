import { LOGO } from "@/lib/photos";

/** Glyphe de secours : un « M » posé sur la fiole d'un niveau. */
export function Mark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" fill="none">
      <path d="M8 26V10l12 11 12-11v16" stroke="rgb(var(--accent-light))" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="7" y="31" width="26" height="5" rx="2.5" stroke="#f1eee8" strokeWidth="1" opacity=".45" />
      <ellipse cx="20" cy="33.5" rx="4" ry="1.3" fill="rgb(var(--accent-light))" />
    </svg>
  );
}

/** Le logo de l'entreprise lu sur son site au build, passé en ivoire pour la surimpression ; sinon le nom composé. */
export function Logo({ className = "h-9" }: { className?: string }) {
  if (LOGO) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={LOGO.src} width={LOGO.width} height={LOGO.height} alt="Monteil & Cie, plomberie chauffage couverture" className={`logo-ivory ${className} w-auto`} />;
  }
  return (
    <span className="flex items-center gap-3">
      <Mark className="h-9 w-9 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="text-[1.22rem] font-normal tracking-[-0.02em] text-ink">Monteil <span className="ital text-[1.3rem] text-ink/80">&amp; Cie</span></span>
        <span className="mt-1.5 text-[0.52rem] uppercase tracking-[0.32em] text-ink/60">Paris 11e · depuis 1964</span>
      </span>
    </span>
  );
}
