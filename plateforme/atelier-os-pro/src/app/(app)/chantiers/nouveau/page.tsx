import { FormulaireChantier } from "@/components/Formulaires";
import { EnTete } from "@/components/ui";
import { contexteInterface, optionsMembres } from "@/lib/serveur";
import { clientsService, sitesService } from "@/lib/services/crm";

export const metadata = { title: "Nouveau chantier" };

export default async function NouveauChantier({ searchParams }: { searchParams: { client?: string } }) {
  const ctx = await contexteInterface();
  const [{ actifs }, clients, sites] = await Promise.all([optionsMembres(ctx), clientsService.lister(ctx, { limite: 100 }), sitesService.lister(ctx, { limite: 100 })]);
  // Un chargé d'affaires ne crée des chantiers que pour ses clients.
  const choix = ctx.role === "charge_affaires" ? clients.donnees.filter((c) => c.responsableId === ctx.utilisateurId) : clients.donnees;
  return (
    <div className="fondu mx-auto max-w-2xl">
      <EnTete titre="Nouveau chantier" retour={searchParams.client ? { href: `/clients/${searchParams.client}`, label: "Client" } : { href: "/chantiers", label: "Chantiers" }} />
      <div className="carte p-5 sm:p-7">
        <FormulaireChantier
          clients={choix.map((c) => ({ id: c.id, nom: c.nom })).sort((a, b) => a.nom.localeCompare(b.nom, "fr"))}
          clientId={searchParams.client}
          sites={sites.donnees.map((s) => ({ id: s.id, clientId: s.clientId, nom: [s.libelle, s.adresse].filter(Boolean).join(" — ") }))}
          membres={actifs.filter((m) => m.role !== "adv")}
        />
      </div>
    </div>
  );
}
