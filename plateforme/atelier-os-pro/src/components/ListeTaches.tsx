import Link from "next/link";
import { basculerTache } from "@/app/actions";
import { echeanceLibelle, aujourdhuiParis } from "@/lib/format";
import { contexteInterface } from "@/lib/serveur";
import { libelles, type Tache } from "@/lib/services/crm";
import { Icone } from "./Icone";

/** Liste de tâches cochables (server component : chaque case est un petit formulaire). */
export async function ListeTaches({ taches, chemin, masquerClient = false }: { taches: Tache[]; chemin: string; masquerClient?: boolean }) {
  const ctx = await contexteInterface();
  const noms = await libelles(ctx, { clients: taches.map((t) => t.clientId) });
  const jour = aujourdhuiParis();
  return (
    <ul>
      {taches.map((t) => {
        const faite = t.statut === "faite";
        const retard = !faite && t.echeance && t.echeance < jour;
        return (
          <li key={t.id} className="rang !items-start !py-3.5">
            <form action={basculerTache} className="pt-0.5">
              <input type="hidden" name="id" value={t.id} />
              <input type="hidden" name="statut" value={faite ? "a_faire" : "faite"} />
              <input type="hidden" name="chemin" value={chemin} />
              <button
                aria-label={faite ? `Rouvrir « ${t.titre} »` : `Marquer « ${t.titre} » comme faite`}
                className={`flex h-[22px] w-[22px] items-center justify-center rounded-full border-[1.5px] transition-colors duration-200 ${
                  faite ? "border-terre bg-terre text-white" : "border-pale hover:border-terre"
                }`}
              >
                {faite && <Icone nom="coche" className="h-3.5 w-3.5" />}
              </button>
            </form>
            <div className="min-w-0 flex-1">
              <p className={`leading-snug ${faite ? "text-pale line-through" : ""}`}>
                {t.priorite === "haute" && !faite && <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-terre align-middle" aria-label="Priorité haute" />}
                {t.titre}
              </p>
              <p className="mt-0.5 flex flex-wrap gap-x-2 text-[13px] text-doux">
                {t.echeance && <span className={retard ? "font-medium text-terre" : ""}>{echeanceLibelle(t.echeance, jour)}</span>}
                {!masquerClient && t.clientId && noms.clients[t.clientId] && (
                  <Link href={`/clients/${t.clientId}`} className="lien-discret">
                    {noms.clients[t.clientId]}
                  </Link>
                )}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
