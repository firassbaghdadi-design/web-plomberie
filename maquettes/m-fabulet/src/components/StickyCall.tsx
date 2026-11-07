import Link from "next/link";
import { PATHS, business } from "@/lib/site";
import { PhoneIcon } from "./Icons";

/** Barre d'appel en bas d'écran, sur téléphone seulement. */
export function StickyCall() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-creme/10 bg-nuit-deep/90 p-2.5 backdrop-blur-md sm:hidden">
      <a href={`tel:${business.phoneTel}`} className="btn-cuivre min-h-[3rem] px-3 text-[0.74rem]" data-track="cta_tel_sticky"><PhoneIcon /> Appeler</a>
      <Link href={PATHS.contact} className="btn-line min-h-[3rem] px-3 text-[0.74rem]" data-track="cta_devis_sticky">Devis gratuit</Link>
    </div>
  );
}
