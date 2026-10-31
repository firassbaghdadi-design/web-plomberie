import { business } from "@/lib/site";

/** Pas de logo publié : le sigle EBL en capitales espacées, avec le nom complet et l'année de création. */
export function Logo({ className = "", tone = "ink" }: { className?: string; tone?: "ink" | "white" }) {
  return (
    <span className={`inline-flex items-center gap-3.5 ${tone === "white" ? "text-white" : "text-ink"} ${className}`}>
      <span className="text-[1.15rem] font-normal tracking-[0.32em] lg:text-[1.25rem]">EBL</span>
      <span aria-hidden="true" className="hidden h-5 w-px bg-current opacity-25 min-[420px]:block" />
      <span className="num hidden text-[0.6rem] font-medium uppercase leading-[1.3] tracking-[0.18em] opacity-60 min-[420px]:block">
        Entreprise Bernard Lemaître
        <br />
        Paris 14e · {business.founded}
      </span>
    </span>
  );
}
