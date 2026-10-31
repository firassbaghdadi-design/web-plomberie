import Link from "next/link";
import { PATHS, business } from "@/lib/site";
import { PhoneIcon } from "./Icons";

/** Barre d'appel fixe sur téléphone : appeler ou demander un devis, sans chercher. */
export function StickyCall() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t-2 border-ink bg-white md:hidden">
      <a href={`tel:${business.phoneTel}`} className="btn !min-h-[3.25rem] justify-center border-r border-ink text-sm text-ink" data-track="cta_tel">
        <PhoneIcon /> Appeler
      </a>
      <Link href={PATHS.contact} className="btn-primary !min-h-[3.25rem] justify-center text-sm" data-track="cta_devis">
        Devis gratuit
      </Link>
    </div>
  );
}
