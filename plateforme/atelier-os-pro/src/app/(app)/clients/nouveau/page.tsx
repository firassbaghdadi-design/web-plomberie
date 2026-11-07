import { FormulaireClient } from "@/components/Formulaires";
import { EnTete } from "@/components/ui";
import { contexteInterface, optionsMembres } from "@/lib/serveur";

export const metadata = { title: "Nouveau client" };

export default async function NouveauClient() {
  const ctx = await contexteInterface();
  const { actifs } = await optionsMembres(ctx);
  const ca = actifs.filter((m) => m.role !== "adv");
  return (
    <div className="fondu mx-auto max-w-2xl">
      <EnTete titre="Nouveau client" retour={{ href: "/clients", label: "Clients" }} />
      <div className="carte p-5 sm:p-7">
        <FormulaireClient membres={ca} />
      </div>
    </div>
  );
}
