import Link from "next/link";
import { Icone } from "@/components/Icone";
import { ChampRecherche } from "@/components/Recherche";
import { Avatar, EnTete, Etiquette, Vide } from "@/components/ui";
import { TYPE_CLIENT_LABEL } from "@/lib/format";
import { contexteInterface } from "@/lib/serveur";
import { clientsService, etiquettesDe } from "@/lib/services/crm";
import { listerMembres } from "@/lib/services/comptes";
import { peutSync } from "@/lib/permissions";

export const metadata = { title: "Clients" };

const TYPES = ["particulier", "professionnel", "syndic", "bailleur"];

export default async function Clients({ searchParams }: { searchParams: { q?: string; type?: string; curseur?: string; moi?: string } }) {
  const ctx = await contexteInterface();
  const type = TYPES.includes(searchParams.type ?? "") ? searchParams.type : undefined;
  const [page, membres] = await Promise.all([
    clientsService.lister(ctx, { q: searchParams.q, filtres: { type, responsableId: searchParams.moi ? ctx.utilisateurId : undefined }, curseur: searchParams.curseur, limite: 40 }),
    listerMembres(ctx),
  ]);
  const etiq = await etiquettesDe(ctx, "clients", page.donnees.map((c) => c.id));
  const noms = Object.fromEntries(membres.map((m) => [m.utilisateurId, m.utilisateur.nom]));
  const lienFiltre = (p: Record<string, string | undefined>) => {
    const u = new URLSearchParams();
    for (const [k, v] of Object.entries({ q: searchParams.q, type, moi: searchParams.moi, ...p })) if (v) u.set(k, v);
    const s = u.toString();
    return s ? `/clients?${s}` : "/clients";
  };

  return (
    <div className="fondu">
      <EnTete
        titre="Clients"
        action={
          peutSync(ctx, "clients", "creer") && (
            <Link href="/clients/nouveau" className="btn btn-primaire btn-petit sm:!min-h-[40px] sm:!px-5 sm:!text-[15px]">
              <Icone nom="plus" className="h-[18px] w-[18px]" />
              Nouveau
            </Link>
          )
        }
      />
      <ChampRecherche valeur={searchParams.q} placeholder="Nom, e-mail, téléphone…" cachés={{ type, moi: searchParams.moi }} />
      <div className="defile-x -mx-4 mt-3 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0">
        <Link href={lienFiltre({ type: undefined })} className={`puce shrink-0 ${!type ? "puce-active" : ""}`}>
          Tous
        </Link>
        {TYPES.map((t) => (
          <Link key={t} href={lienFiltre({ type: t })} className={`puce shrink-0 ${type === t ? "puce-active" : ""}`}>
            {TYPE_CLIENT_LABEL[t]}
          </Link>
        ))}
        {ctx.role === "charge_affaires" && (
          <Link href={lienFiltre({ moi: searchParams.moi ? undefined : "1" })} className={`puce shrink-0 ${searchParams.moi ? "puce-active" : ""}`}>
            Mes clients
          </Link>
        )}
      </div>

      <div className="carte mt-5 overflow-hidden">
        {page.donnees.length === 0 ? (
          <Vide>{searchParams.q ? `Aucun client ne correspond à « ${searchParams.q} ».` : "Aucun client pour l'instant."}</Vide>
        ) : (
          <ul className="divide-y divide-trait/70">
            {page.donnees.map((c) => (
              <li key={c.id}>
                <Link href={`/clients/${c.id}`} className="flex items-center gap-3.5 px-5 py-3.5 transition-colors hover:bg-creux/60">
                  <Avatar nom={c.nom} />
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium">{c.nom}</p>
                    <p className="truncate text-[13px] text-doux">
                      {TYPE_CLIENT_LABEL[c.type]}
                      {c.telephone && ` · ${c.telephone}`}
                      {c.responsableId && noms[c.responsableId] && ` · ${noms[c.responsableId]}`}
                    </p>
                  </div>
                  <div className="hidden flex-wrap justify-end gap-1.5 sm:flex">
                    {(etiq[c.id] ?? []).map((e) => (
                      <Etiquette key={e.id} nom={e.nom} couleur={e.couleur} />
                    ))}
                  </div>
                  <Icone nom="retour" className="h-4 w-4 shrink-0 rotate-180 text-pale" />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      {page.curseurSuivant && (
        <div className="mt-4 text-center">
          <Link href={lienFiltre({ curseur: page.curseurSuivant })} className="btn btn-petit">
            Voir la suite
          </Link>
        </div>
      )}
    </div>
  );
}
