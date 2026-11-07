import { redirect } from "next/navigation";
import * as A from "@/app/actions";
import { FormulaireNouvelleOrganisation } from "@/components/Organisations";
import { EnTete, Titre } from "@/components/ui";
import { contexteInterface } from "@/lib/serveur";
import { listerOrganisations } from "@/lib/services/comptes";

export const metadata = { title: "Organisations" };

export default async function Organisations() {
  const ctx = await contexteInterface();
  if (!ctx.adminPlateforme) redirect("/");
  const orgs = await listerOrganisations(ctx);
  return (
    <div className="fondu mx-auto max-w-3xl">
      <EnTete surTitre="Administration plateforme" titre="Organisations" />
      <div className="carte overflow-hidden">
        <ul className="divide-y divide-trait/70">
          {orgs.map((o) => (
            <li key={o.id} className="flex items-center gap-3 px-5 py-3.5">
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium">
                  {o.nom}
                  {o.estPlateforme && <span className="pastille ml-2 !py-0 text-[11px]">Plateforme</span>}
                </p>
                <p className="text-[13px] text-doux">
                  {o.membres} membre{o.membres > 1 ? "s" : ""} · {o.clients} client{o.clients > 1 ? "s" : ""}
                </p>
              </div>
              {o.id === ctx.organisationId ? (
                <span className="pastille">Ouverte</span>
              ) : (
                <form action={A.changerOrganisation}>
                  <input type="hidden" name="organisationId" value={o.id} />
                  <button className="btn btn-petit">Ouvrir</button>
                </form>
              )}
            </li>
          ))}
        </ul>
      </div>
      <Titre>Nouvelle organisation</Titre>
      <div className="carte overflow-hidden">
        <FormulaireNouvelleOrganisation />
      </div>
    </div>
  );
}
