import { LOGO } from "@/lib/photos";

/** Monogramme de repli : un toit et sa descente, en traits fins. Le vrai logo de SPC est récupéré au build. */
export function Monogram({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" fill="none">
      <path d="M5 17 13 10l8 7 8-7 6 4.5" stroke="rgb(var(--accent))" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M35 14.5V31a3 3 0 0 1-3 3h-5" stroke="rgb(var(--accent))" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M5 21v13h17" stroke="#17191c" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

/** Le logo de l'entreprise (repris de spc-services.fr) et, à côté, le nom en toutes lettres en graisse fine. */
export function Logo() {
  return (
    <span className="flex items-center gap-3">
      {LOGO ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={LOGO.src} alt="" width={LOGO.width} height={LOGO.height} className="h-9 w-auto max-w-[7.5rem] object-contain lg:h-10" />
      ) : (
        <Monogram className="h-9 w-9 shrink-0 lg:h-10 lg:w-10" />
      )}
      <span className="flex flex-col leading-none">
        <span className="text-[1.15rem] font-normal tracking-[0.18em] text-ink">SPC</span>
        <span className="mt-1 hidden text-[0.56rem] font-medium uppercase tracking-[0.24em] text-ink-faint sm:block">Plomberie · Couverture</span>
      </span>
    </span>
  );
}
