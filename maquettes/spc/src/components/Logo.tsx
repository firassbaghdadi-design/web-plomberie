import { LOGO } from "@/lib/photos";

/** Monogramme de repli : un toit et sa descente, en traits fins. Le vrai logo de SPC est récupéré au build. */
export function Monogram({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" fill="none">
      <path d="M5 17 13 10l8 7 8-7 6 4.5" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M35 14.5V31a3 3 0 0 1-3 3h-5" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M5 21v13h17" stroke="rgb(var(--accent-light))" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

/** Le logo de l'entreprise (repris de spc-services.fr) et, à côté, le sigle en grotesque large. */
export function Logo() {
  return (
    <span className="flex items-center gap-3">
      {LOGO ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={LOGO.src} alt="" width={LOGO.width} height={LOGO.height} className="h-9 w-auto max-w-[7.5rem] rounded-[2px] bg-white object-contain p-1 lg:h-10" />
      ) : (
        <Monogram className="h-9 w-9 shrink-0 lg:h-10 lg:w-10" />
      )}
      <span className="flex flex-col leading-none">
        <span className="text-[1.3rem] font-bold tracking-[0.04em] text-white [font-stretch:118%]">SPC</span>
        <span className="mt-1 hidden text-[0.56rem] font-medium uppercase tracking-[0.22em] text-white/60 sm:block">Plomberie · Couverture</span>
      </span>
    </span>
  );
}
