import { LOGO } from "@/lib/photos";

/** Cadran de compteur en traits fins : la marque de la maquette. */
export function Mark({ className = "h-9 w-9" }: { className?: string }) {
  const ticks = Array.from({ length: 24 }, (_, i) => {
    const a = (i / 24) * Math.PI * 2;
    const long = i % 6 === 0;
    const r1 = 26, r2 = long ? 21 : 23.5;
    return <line key={i} x1={32 + Math.sin(a) * r1} y1={32 - Math.cos(a) * r1} x2={32 + Math.sin(a) * r2} y2={32 - Math.cos(a) * r2} stroke="rgb(var(--accent))" strokeWidth={long ? 2 : 1.2} strokeLinecap="round" />;
  });
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="none">
      <circle cx="32" cy="32" r="29" stroke="rgb(var(--accent))" strokeWidth="1.4" />
      {ticks}
      <g transform="rotate(38 32 32)"><line x1="32" y1="36" x2="32" y2="15" stroke="#a8873f" strokeWidth="2.4" strokeLinecap="round" /></g>
      <circle cx="32" cy="32" r="3.2" fill="#a8873f" />
    </svg>
  );
}

/** Le logo récupéré sur le site actuel s'il se lit sur fond blanc ; sinon le cadran et le nom en lettres fines. */
export function Logo() {
  if (LOGO) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={LOGO.src} alt="Bastien & Trebulle" width={LOGO.width} height={LOGO.height} className="h-9 w-auto lg:h-10" />;
  }
  return (
    <span className="flex items-center gap-2.5 sm:gap-3">
      <Mark className="h-8 w-8 shrink-0 sm:h-9 sm:w-9 lg:h-10 lg:w-10" />
      <span className="flex flex-col leading-none">
        <span className="text-[0.86rem] font-medium tracking-[0.04em] text-ink sm:text-[1.18rem] sm:tracking-[0.06em]">BASTIEN &amp; TREBULLE</span>
        <span className="mt-1.5 text-[0.5rem] font-medium uppercase tracking-[0.24em] text-ink-faint sm:text-[0.56rem] sm:tracking-[0.3em]">Paris XVIe · depuis 1880</span>
      </span>
    </span>
  );
}
