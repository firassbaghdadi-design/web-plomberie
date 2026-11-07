import Link from "next/link";
import { PATHS, business } from "@/lib/site";
import { PhoneIcon } from "./Icons";

/** Barre d'appel fixe sur téléphone : appeler ou demander un devis, sans chercher. */
export function StickyCall() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-white/10 bg-brand-abyss/95 p-2 backdrop-blur md:hidden">
      <a href={`tel:${business.phoneTel}`} className="btn-ghost !min-h-[2.9rem] text-sm" data-track="cta_tel">
        <PhoneIcon /> Appeler
      </a>
      <Link href={PATHS.contact} className="btn-solid !min-h-[2.9rem] text-sm" data-track="cta_devis">
        Devis gratuit
      </Link>
    </div>
  );
}
