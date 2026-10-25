import { imgSrc } from "@/lib/photos";
import { FlameMark } from "./Icons";

/** Logo d'origine (téléchargé au build depuis seragaz.fr, fond blanc) ; à défaut, sigle et nom dessinés aux couleurs du logo. */
export function Logo({ className = "h-11" }: { className?: string }) {
  const src = imgSrc("logo");
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt="SERAGAZ, société d'entretien et réparation d'appareils à gaz" width={380} height={139} className={`w-auto ${className}`} />;
  }
  return (
    <span className={`inline-flex items-center gap-2 ${className}`} aria-label="SERAGAZ">
      <FlameMark className="h-full w-auto py-0.5" />
      <span className="font-display text-[1.6rem] font-extrabold tracking-[0.06em] text-blue">SERAGAZ</span>
    </span>
  );
}
