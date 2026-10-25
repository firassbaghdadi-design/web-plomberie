import Link from "next/link";
import { PATHS, business } from "@/lib/site";
import { PhoneIcon } from "./Icons";

/** Barre d'appel fixe sur téléphone : appeler ou demander un devis, sans chercher. */
export function StickyCall() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-white/95 p-2 backdrop-blur md:hidden">
      <a href={`tel:${business.phoneTel}`} className="btn-line !py-3 text-sm">
        <PhoneIcon /> Appeler
      </a>
      <Link href={PATHS.contact} className="btn-primary !py-3 text-sm">
        Devis gratuit
      </Link>
    </div>
  );
}
