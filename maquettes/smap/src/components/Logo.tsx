import { business } from "@/lib/site";
import { logoFile } from "@/lib/photos";

/**
 * Logo d'origine s'il est publié sur le site actuel (téléchargé au build) ; sinon le nom « SMAP » en capitales espacées,
 * précédé d'un petit repère de plan (angle coté), avec la précision Paris 12e.
 */
export function Logo({ className = "", tone = "ink" }: { className?: string; tone?: "ink" | "white" }) {
  if (logoFile) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={logoFile.src} alt={business.name} width={logoFile.w} height={logoFile.h} className={`h-9 w-auto lg:h-10 ${className}`} />;
  }
  return (
    <span className={`inline-flex items-center gap-3.5 ${tone === "white" ? "text-white" : "text-ink"} ${className}`}>
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M3 21V3h18" />
        <path d="M3 15h7v6M10 15V9h11" opacity=".55" />
        <circle cx="21" cy="3" r="1.4" fill="currentColor" stroke="none" />
      </svg>
      <span className="text-[1.15rem] font-normal tracking-[0.3em] lg:text-[1.25rem]">SMAP</span>
      <span aria-hidden="true" className="hidden h-5 w-px bg-current opacity-25 min-[420px]:block" />
      <span className="num hidden text-[0.62rem] font-medium uppercase leading-[1.25] tracking-[0.2em] opacity-60 min-[420px]:block">
        Paris 12e
        <br />
        Depuis {business.founded}
      </span>
    </span>
  );
}
