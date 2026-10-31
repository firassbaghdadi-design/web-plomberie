import { business } from "@/lib/site";
import { logoFile } from "@/lib/photos";

/**
 * Logo d'origine s'il est publié sur le site actuel (téléchargé au build) ; sinon le nom tel que le site l'écrit,
 * « CLAIRON », composé en capitales espacées, avec l'année de création.
 */
export function Logo({ className = "", tone = "ink" }: { className?: string; tone?: "ink" | "white" }) {
  if (logoFile) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={logoFile.src} alt={business.name} width={logoFile.w} height={logoFile.h} className={`h-9 w-auto lg:h-10 ${className}`} />;
  }
  return (
    <span className={`inline-flex items-center gap-3.5 ${tone === "white" ? "text-white" : "text-ink"} ${className}`}>
      <span className="text-[1.08rem] font-normal tracking-[0.3em] lg:tracking-[0.34em] lg:text-[1.18rem]">CLAIRON</span>
      <span aria-hidden="true" className="hidden h-5 w-px bg-current opacity-25 min-[420px]:block" />
      <span className="num hidden text-[0.62rem] font-medium uppercase leading-[1.25] tracking-[0.2em] opacity-60 min-[420px]:block">
        Paris 15e
        <br />
        Depuis {business.founded}
      </span>
    </span>
  );
}
