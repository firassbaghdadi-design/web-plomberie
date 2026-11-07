import Link from "next/link";
import { notFound } from "next/navigation";
import * as A from "@/app/actions";
import { FilActivite } from "@/components/FilActivite";
import { FormulaireChantier, FormulaireNote, FormulaireTache } from "@/components/Formulaires";
import { Icone } from "@/components/Icone";
import { ListeTaches } from "@/components/ListeTaches";
import { Notes } from "@/components/Notes";
import { EnTete, Etiquette, PastilleStatut, Titre, Vide } from "@/components/ui";
import { ErreurApi } from "@/lib/erreurs";
import { STATUT_CHANTIER_LABEL, euros, jourCourt } from "@/lib/format";
import { contexteInterface, optionsMembres, peutEcrire } from "@/lib/serveur";
import { estResponsableChantier, etiquettesDe, ficheChantier, sitesService } from "@/lib/services/crm";

const SUIVANT: Record<string, string[]> = {
  a_qualifier: ["en_devis", "planifie", "annule"],
  en_devis: ["planifie", "annule"],
  planifie: ["en_cours", "en_pause", "annule"],
  en_cours: ["termine", "en_pause"],
  en_pause: ["en_cours", "annule"],
  termine: ["en_cours"],
  annule: ["a_qualifier"],
};

export default async function FicheChantier({ params }: { params: { id: string } }) {
  const ctx = await contexteInterface();
  const f = await ficheChantier(ctx, params.id).catch((e) => {
    if (e instanceof ErreurApi && e.statut === 404) notFound();
    throw e;
  });
  const h = f.chantier;
  const chemin = `/chantiers/${h.id}`;
  const [{ actifs, noms }, sites, etiq, proprio] = await Promise.all([
    optionsMembres(ctx),
    sitesService.lister(ctx, { filtres: { clientId: h.clientId }, limite: 100 }),
    etiquettesDe(ctx, "chantiers", [h.id]),
    estResponsableChantier(ctx.db, ctx, h.id),
  ]);
  const ecrire = peutEcrire(ctx, "chantiers", "modifier", proprio);
  const ouvertes = f.taches.filter((t) => t.statut === "a_faire");
  const faites = f.taches.filter((t) => t.statut === "faite");

  return (
    <div className="fondu">
      <EnTete retour={{ href: `/clients/${f.client.id}`, label: f.client.nom }} surTitre={h.reference} titre={h.titre} />
      <div className="-mt-3 mb-6 flex flex-wrap items-center gap-2">
        <PastilleStatut statut={h.statut} />
        {(etiq[h.id] ?? []).map((e) => (
          <Etiquette key={e.id} nom={e.nom} couleur={e.couleur} />
        ))}
      </div>

      {ecrire && SUIVANT[h.statut] && (
        <div className="mb-6 flex flex-wrap gap-2" aria-label="Changer le statut">
          {SUIVANT[h.statut].map((s, i) => (
            <form key={s} action={A.changerStatutChantier}>
              <input type="hidden" name="id" value={h.id} />
              <input type="hidden" name="statut" value={s} />
              <button className={`btn btn-petit sm:!min-h-[40px] ${i === 0 ? "btn-primaire" : ""}`}>{i === 0 ? `Passer « ${STATUT_CHANTIER_LABEL[s]} »` : STATUT_CHANTIER_LABEL[s]}</button>
            </form>
          ))}
        </div>
      )}

      <div className="grid grid-cols-[minmax(0,1fr)] gap-x-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
        <div>
          <Titre>Détails</Titre>
          <div className="carte overflow-hidden">
            <dl className="divide-y divide-trait/70 text-[14.5px]">
              <div className="flex justify-between gap-4 px-5 py-3">
                <dt className="text-doux">Client</dt>
                <dd>
                  <Link href={`/clients/${f.client.id}`} className="text-terre">
                    {f.client.nom}
                  </Link>
                </dd>
              </div>
              {f.site && (
                <div className="flex justify-between gap-4 px-5 py-3">
                  <dt className="text-doux">Adresse</dt>
                  <dd className="text-right">
                    <a href={`https://maps.apple.com/?q=${encodeURIComponent(`${f.site.adresse} ${f.site.codePostal ?? ""} ${f.site.ville ?? ""}`)}`} target="_blank" rel="noreferrer" className="lien-discret !text-encre">
                      {f.site.adresse}, {f.site.codePostal} {f.site.ville}
                    </a>
                    {f.site.codeAcces && <span className="block text-[13px] text-doux">Code : {f.site.codeAcces}</span>}
                  </dd>
                </div>
              )}
              <div className="flex justify-between gap-4 px-5 py-3">
                <dt className="text-doux">Chargé d&apos;affaires</dt>
                <dd>{h.chargeAffairesId ? noms[h.chargeAffairesId] : "Non attribué"}</dd>
              </div>
              {(h.dateDebut || h.dateFin) && (
                <div className="flex justify-between gap-4 px-5 py-3">
                  <dt className="text-doux">Dates</dt>
                  <dd>
                    {jourCourt(h.dateDebut)}
                    {h.dateFin && h.dateFin !== h.dateDebut && ` → ${jourCourt(h.dateFin)}`}
                  </dd>
                </div>
              )}
              <div className="flex justify-between gap-4 px-5 py-3">
                <dt className="text-doux">Montant estimé</dt>
                <dd className="tabular-nums">{h.montantEstimeHt ? `${euros(h.montantEstimeHt)} HT` : "—"}</dd>
              </div>
            </dl>
            {h.description && <p className="whitespace-pre-line border-t border-trait/70 px-5 py-3.5 text-[14.5px] leading-relaxed">{h.description}</p>}
            {ecrire && (
              <details className="border-t border-trait/70">
                <summary className="btn-texte cursor-pointer px-5 py-2">Modifier</summary>
                <div className="px-5 pb-5">
                  <FormulaireChantier
                    chantier={h}
                    clientId={h.clientId}
                    sites={sites.donnees.map((s) => ({ id: s.id, clientId: s.clientId, nom: [s.libelle, s.adresse].filter(Boolean).join(" — ") }))}
                    membres={actifs.filter((m) => m.role !== "adv")}
                  />
                </div>
              </details>
            )}
          </div>

          <Titre>Documents</Titre>
          <div className="carte flex items-center gap-4 p-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-creux text-doux">
              <Icone nom="devis" className="h-5 w-5" />
            </span>
            <p className="text-[14px] text-doux">Devis, factures et photos du chantier arriveront ici avec les prochains modules.</p>
          </div>
        </div>

        <div className="mt-9 lg:mt-0">
          <Titre>Tâches</Titre>
          <div className="carte overflow-hidden">
            {ouvertes.length === 0 && faites.length === 0 ? <Vide>Aucune tâche.</Vide> : <ListeTaches taches={[...ouvertes, ...faites.slice(0, 5)]} chemin={chemin} masquerClient />}
            {peutEcrire(ctx, "taches", "creer", true) && (
              <div className="border-t border-trait/70">
                <FormulaireTache chantierId={h.id} clientId={h.clientId} chemin={chemin} membres={actifs} moi={ctx.utilisateurId} />
              </div>
            )}
          </div>

          <Titre>Notes</Titre>
          <div className="carte overflow-hidden">
            {peutEcrire(ctx, "notes", "creer", proprio) && <FormulaireNote chantierId={h.id} clientId={h.clientId} chemin={chemin} />}
            <Notes notes={f.notes} noms={noms} chemin={chemin} ctx={ctx} />
          </div>

          <Titre>Activité</Titre>
          <div className="carte overflow-hidden">
            <FilActivite activites={f.activite} noms={noms} />
          </div>

          {peutEcrire(ctx, "chantiers", "supprimer") && (
            <form action={A.supprimerChantier} className="mt-8 text-center">
              <input type="hidden" name="id" value={h.id} />
              <button className="btn-texte !text-[13px] text-doux hover:!text-terre">Supprimer ce chantier</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
