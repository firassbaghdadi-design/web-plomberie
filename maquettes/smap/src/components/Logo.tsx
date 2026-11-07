import { business } from "@/lib/site";
import { logoFile } from "@/lib/photos";

/**
 * Logo d'origine s'il est publié sur le site actuel (téléchargé au build) ; sinon le nom « SMAP » en serif,
 * précédé de trois petits échantillons superposés (terre cuite, zellige, laiton), avec la précision Paris 12e.
 */
export function Logo({ className = "", tone = "ink" }: { className?: string; tone?: "ink" | "white" }) {
  if (logoFile) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={logoFile.src} alt={business.name} width={logoFile.w} height={logoFile.h} className={`h-9 w-auto lg:h-10 ${className}`} />;
  }
  return (
    <span className={`inline-flex items-center gap-3.5 ${tone === "white" ? "text-white" : "text-ink"} ${className}`}>
      <span aria-hidden="true" className="relative block h-7 w-6 shrink-0">
        <span className="absolute bottom-0 left-0 h-6 w-3 origin-bottom -rotate-12 rounded-[1px] bg-[#2d5a4d]" />
        <span className="absolute bottom-0 left-1.5 h-6 w-3 origin-bottom rotate-3 rounded-[1px] bg-[#c9a159]" />
        <span className="absolute bottom-0 left-3 h-6 w-3 origin-bottom rotate-[18deg] rounded-[1px] bg-accent" />
      </span>
      <span className="font-serif text-[1.75rem] leading-none tracking-[0.04em] lg:text-[1.95rem]">SMAP</span>
      <span aria-hidden="true" className="hidden h-6 w-px bg-current opacity-25 min-[420px]:block" />
      <span className="num hidden text-[0.6rem] font-medium uppercase leading-[1.3] tracking-[0.2em] opacity-60 min-[420px]:block">
        Paris 12e
        <br />
        Depuis {business.founded}
      </span>
    </span>
  );
}
