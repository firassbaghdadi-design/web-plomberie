import Link from "next/link";
import { Icone } from "@/components/Icone";
import { ChampRecherche } from "@/components/Recherche";
import { EnTete, PastilleStatut, Vide } from "@/components/ui";
import { STATUT_CHANTIER_LABEL, euros, jourCourt } from "@/lib/format";
import { contexteInterface, optionsMembres, peutEcrire } from "@/lib/serveur";
import { chantiersService, libelles } from "@/lib/services/crm";

export const metadata = { title: "Chantiers" };

const STATUTS = Object.keys(STATUT_CHANTIER_LABEL);

export default async function Chantiers({ searchParams }: { searchParams: { q?: string; statut?: string; curseur?: string; moi?: string } }) {
  const ctx = await contexteInterface();
  const statut = STATUTS.includes(searchParams.statut ?? "") ? searchParams.statut : undefined;
  const page = await chantiersService.lister(ctx, {
    q: searchParams.q,
    filtres: { statut, chargeAffairesId: searchParams.moi ? ctx.utilisateurId : undefined },
    curseur: searchParams.curseur,
    limite: 40,
  });
  const [noms, { noms: membres }] = await Promise.all([libelles(ctx, { clients: page.donnees.map((c) => c.clientId) }), optionsMembres(ctx)]);
  const lien = (p: Record<string, string | undefined>) => {
    const u = new URLSearchParams();
    for (const [k, v] of Object.entries({ q: searchParams.q, statut, moi: searchParams.moi, ...p })) if (v) u.set(k, v);
    const s = u.toString();
    return s ? `/chantiers?${s}` : "/chantiers";
  };

  return (
    <div className="fondu">
      <EnTete
        titre="Chantiers"
        action={
          peutEcrire(ctx, "chantiers", "creer", true) && (
            <Link href="/chantiers/nouveau" className="btn btn-primaire btn-petit sm:!min-h-[40px] sm:!px-5 sm:!text-[15px]">
              <Icone nom="plus" className="h-[18px] w-[18px]" />
              Nouveau
            </Link>
          )
        }
      />
      <ChampRecherche valeur={searchParams.q} placeholder="Intitulé, référence…" cachés={{ statut, moi: searchParams.moi }} />
      <div className="defile-x -mx-4 mt-3 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
        <Link href={lien({ statut: undefined })} className={`puce shrink-0 ${!statut ? "puce-active" : ""}`}>
          Tous
        </Link>
        {STATUTS.map((s) => (
          <Link key={s} href={lien({ statut: s })} className={`puce shrink-0 ${statut === s ? "puce-active" : ""}`}>
            {STATUT_CHANTIER_LABEL[s]}
          </Link>
        ))}
        {ctx.role === "charge_affaires" && (
          <Link href={lien({ moi: searchParams.moi ? undefined : "1" })} className={`puce shrink-0 ${searchParams.moi ? "puce-active" : ""}`}>
            Mes chantiers
          </Link>
        )}
      </div>

      <div className="carte mt-5 overflow-hidden">
        {page.donnees.length === 0 ? (
          <Vide>Aucun chantier{statut ? ` « ${STATUT_CHANTIER_LABEL[statut].toLowerCase()} »` : ""}.</Vide>
        ) : (
          <ul className="divide-y divide-trait/70">
            {page.donnees.map((h) => (
              <li key={h.id}>
                <Link href={`/chantiers/${h.id}`} className="flex items-center gap-3 px-5 py-3.5 transition-colors hover:bg-creux/60">
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium">{h.titre}</p>
                    <p className="truncate text-[13px] text-doux">
                      {noms.clients[h.clientId]}
                      {h.dateDebut && ` · ${jourCourt(h.dateDebut)}${h.dateFin && h.dateFin !== h.dateDebut ? ` → ${jourCourt(h.dateFin)}` : ""}`}
                      {h.chargeAffairesId && membres[h.chargeAffairesId] && ` · ${membres[h.chargeAffairesId]}`}
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-1">
                    <PastilleStatut statut={h.statut} />
                    {h.montantEstimeHt ? <span className="text-[12.5px] tabular-nums text-doux">{euros(h.montantEstimeHt)} HT</span> : null}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      {page.curseurSuivant && (
        <div className="mt-4 text-center">
          <Link href={lien({ curseur: page.curseurSuivant })} className="btn btn-petit">
            Voir la suite
          </Link>
        </div>
      )}
    </div>
  );
}
