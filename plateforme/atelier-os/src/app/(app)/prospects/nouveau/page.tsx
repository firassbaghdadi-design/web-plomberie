import Link from "next/link";
import { FormProspect } from "@/components/Formulaires";

export const metadata = { title: "Nouveau prospect" };

export default function Nouveau() {
  return (
    <div className="fondu">
      <Link href="/prospects" className="btn-texte mb-4">
        ‹ Prospects
      </Link>
      <h1 className="titre-page mb-6">Nouveau prospect</h1>
      <div className="carte">
        <FormProspect />
      </div>
    </div>
  );
}
