import { business } from "@/lib/site";

/** Pas de logo publié : le sigle EBL en Young Serif, trois filets seventies, le nom complet et l'année. */
export function Logo({ className = "", tone = "cream" }: { className?: string; tone?: "cream" | "ink" }) {
  return (
    <span className={`inline-flex items-center gap-3.5 ${tone === "cream" ? "text-cream-light" : "text-ink"} ${className}`}>
      <span aria-hidden="true" className="stripe-dot text-[1.6rem]">
        <i className="bg-olive-mist" /><i className="bg-mustard" /><i className="bg-tabac-light" />
      </span>
      <span className="font-serif text-[1.55rem] leading-none tracking-[0.08em] lg:text-[1.7rem]">EBL</span>
      <span className="num hidden text-[0.72rem] font-bold uppercase leading-[1.25] tracking-[0.16em] opacity-70 min-[420px]:block">
        Entreprise Bernard Lemaître
        <br />
        Paris 14e · {business.founded}
      </span>
    </span>
  );
}
