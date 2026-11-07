import Link from "next/link";
import { notFound } from "next/navigation";
import * as A from "@/app/actions";
import { FilActivite } from "@/components/FilActivite";
import { FormulaireClient, FormulaireContact, FormulaireEtiquette, FormulaireNote, FormulaireSite, FormulaireTache } from "@/components/Formulaires";
import { Icone } from "@/components/Icone";
import { ListeTaches } from "@/components/ListeTaches";
import { Notes } from "@/components/Notes";
import { Avatar, EnTete, Etiquette, PastilleStatut, PastilleType, Titre, Vide } from "@/components/ui";
import { ErreurApi } from "@/lib/erreurs";
import { euros } from "@/lib/format";
import { contexteInterface, optionsMembres, peutEcrire } from "@/lib/serveur";
import { etiquettesService, ficheClient } from "@/lib/services/crm";

export default async function FicheClient({ params }: { params: { id: string } }) {
  const ctx = await contexteInterface();
  const f = await ficheClient(ctx, params.id).catch((e) => {
    if (e instanceof ErreurApi && e.statut === 404) notFound();
    throw e;
  });
  const [{ actifs, noms }, toutesEtiquettes] = await Promise.all([optionsMembres(ctx), etiquettesService.lister(ctx, { limite: 100 })]);
  const c = f.client;
  const chemin = `/clients/${c.id}`;
  const moi = c.responsableId === ctx.utilisateurId;
  const ecrire = peutEcrire(ctx, "clients", "modifier", moi);
  const ecrireContacts = peutEcrire(ctx, "contacts", "creer", moi);
  const ecrireNotes = peutEcrire(ctx, "notes", "creer", moi);
  const ecrireTaches = peutEcrire(ctx, "taches", "creer", true);
  const creerChantier = peutEcrire(ctx, "chantiers", "creer", moi);
  const supprimer = peutEcrire(ctx, "clients", "supprimer");
  const ouvertes = f.taches.filter((t) => t.statut === "a_faire");
  const posees = new Set(f.etiquettes.map((e) => e.id));

  return (
    <div className="fondu">
      <EnTete retour={{ href: "/clients", label: "Clients" }} surTitre={<PastilleType type={c.type} />} titre={c.nom} />

      <div className="-mt-3 mb-6 flex flex-wrap items-center gap-2">
        {f.etiquettes.map((e) => (
          <Etiquette key={e.id} nom={e.nom} couleur={e.couleur} />
        ))}
        {ecrire && (
          <details className="relative">
            <summary className="pastille cursor-pointer !bg-transparent ring-1 ring-trait hover:text-encre">+ Étiquette</summary>
            <div className="carte absolute left-0 top-full z-20 mt-2 w-[290px] p-3 shadow-haut">
              <div className="mb-3 flex flex-wrap gap-1.5">
                {toutesEtiquettes.donnees.map((e) => (
                  <form key={e.id} action={A.basculerEtiquette}>
                    <input type="hidden" name="etiquetteId" value={e.id} />
                    <input type="hidden" name="typeRessource" value="clients" />
                    <input type="hidden" name="ressourceId" value={c.id} />
                    <input type="hidden" name="retirer" value={String(posees.has(e.id))} />
                    <button className={`rounded-full transition-opacity ${posees.has(e.id) ? "" : "opacity-45 hover:opacity-100"}`} aria-pressed={posees.has(e.id)}>
                      <Etiquette nom={e.nom} couleur={e.couleur} />
                    </button>
                  </form>
                ))}
              </div>
              <FormulaireEtiquette typeRessource="clients" ressourceId={c.id} chemin={chemin} />
            </div>
          </details>
        )}
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {c.telephone && (
          <a href={`tel:${c.telephone.replace(/\s/g, "")}`} className="btn btn-primaire btn-petit sm:!min-h-[40px]">
            <Icone nom="telephone" className="h-[17px] w-[17px]" /> Appeler
          </a>
        )}
        {c.email && (
          <a href={`mailto:${c.email}`} className="btn btn-petit sm:!min-h-[40px]">
            <Icone nom="emails" className="h-[17px] w-[17px]" /> E-mail
          </a>
        )}
        {creerChantier && (
          <Link href={`/chantiers/nouveau?client=${c.id}`} className="btn btn-petit sm:!min-h-[40px]">
            <Icone nom="plus" className="h-[17px] w-[17px]" /> Chantier
          </Link>
        )}
      </div>

      <div className="grid grid-cols-[minmax(0,1fr)] gap-x-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
        <div>
          <Titre>Coordonnées</Titre>
          <div className="carte overflow-hidden">
            <dl className="divide-y divide-trait/70 text-[14.5px]">
              {[
                ["Téléphone", c.telephone],
                ["E-mail", c.email],
                ["Raison sociale", c.raisonSociale],
                ["SIRET", c.siret],
                ["Chargé d'affaires", c.responsableId ? noms[c.responsableId] : "Non attribué"],
                ["Origine", c.source],
              ]
                .filter(([, v]) => v)
                .map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 px-5 py-3">
                    <dt className="text-doux">{k}</dt>
                    <dd className="min-w-0 truncate text-right">{v}</dd>
                  </div>
                ))}
            </dl>
            {c.remarques && <p className="whitespace-pre-line border-t border-trait/70 px-5 py-3 text-[14px] text-doux">{c.remarques}</p>}
            {ecrire && (
              <details className="border-t border-trait/70">
                <summary className="btn-texte cursor-pointer px-5 py-2">Modifier</summary>
                <div className="px-5 pb-5">
                  <FormulaireClient client={c} membres={actifs.filter((m) => m.role !== "adv")} />
                </div>
              </details>
            )}
          </div>

          <Titre>Chantiers</Titre>
          <div className="carte overflow-hidden">
            {f.chantiers.length === 0 ? (
              <Vide
                action={
                  creerChantier && (
                    <Link href={`/chantiers/nouveau?client=${c.id}`} className="btn-texte">
                      Créer un chantier
                    </Link>
                  )
                }
              >
                Aucun chantier.
              </Vide>
            ) : (
              <ul className="divide-y divide-trait/70">
                {f.chantiers.map((h) => (
                  <li key={h.id}>
                    <Link href={`/chantiers/${h.id}`} className="flex items-center gap-3 px-5 py-3.5 transition-colors hover:bg-creux/60">
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-medium">{h.titre}</p>
                        <p className="text-[13px] text-doux">
                          {h.reference}
                          {h.montantEstimeHt ? ` · ${euros(h.montantEstimeHt)} HT` : ""}
                        </p>
                      </div>
                      <PastilleStatut statut={h.statut} />
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Titre>Contacts</Titre>
          <div className="carte overflow-hidden">
            {f.contacts.length === 0 && <Vide>Aucun contact.</Vide>}
            <ul className="divide-y divide-trait/70">
              {f.contacts.map((k) => (
                <li key={k.id} className="flex items-center gap-3 px-5 py-3.5">
                  <Avatar nom={`${k.prenom ?? ""} ${k.nom}`} taille={34} />
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium">
                      {[k.prenom, k.nom].filter(Boolean).join(" ")}
                      {k.principal && <span className="pastille ml-2 !py-0 text-[11px]">Principal</span>}
                    </p>
                    <p className="truncate text-[13px] text-doux">{[k.fonction, k.telephone, k.email].filter(Boolean).join(" · ")}</p>
                  </div>
                  {k.telephone && (
                    <a href={`tel:${k.telephone.replace(/\s/g, "")}`} aria-label={`Appeler ${k.nom}`} className="flex h-10 w-10 items-center justify-center rounded-full bg-creux text-terre">
                      <Icone nom="telephone" className="h-[18px] w-[18px]" />
                    </a>
                  )}
                  {ecrireContacts && (
                    <form action={A.supprimerContact}>
                      <input type="hidden" name="id" value={k.id} />
                      <input type="hidden" name="clientId" value={c.id} />
                      <button aria-label={`Supprimer ${k.nom}`} className="flex h-10 w-8 items-center justify-center text-pale hover:text-terre">
                        <Icone nom="fermer" className="h-4 w-4" />
                      </button>
                    </form>
                  )}
                </li>
              ))}
            </ul>
            {ecrireContacts && (
              <details className="border-t border-trait/70">
                <summary className="btn-texte cursor-pointer px-5 py-2">Ajouter un contact</summary>
                <FormulaireContact clientId={c.id} />
              </details>
            )}
          </div>

          <Titre>Adresses</Titre>
          <div className="carte overflow-hidden">
            {f.sites.length === 0 && <Vide>Aucune adresse.</Vide>}
            <ul className="divide-y divide-trait/70">
              {f.sites.map((s) => (
                <li key={s.id} className="flex items-start gap-3 px-5 py-3.5">
                  <Icone nom="adresse" className="mt-0.5 h-[18px] w-[18px] shrink-0 text-doux" />
                  <div className="min-w-0 flex-1">
                    {s.libelle && <p className="font-medium">{s.libelle}</p>}
                    <a
                      href={`https://maps.apple.com/?q=${encodeURIComponent(`${s.adresse} ${s.codePostal ?? ""} ${s.ville ?? ""}`)}`}
                      className="lien-discret text-[14px]"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {s.adresse}, {s.codePostal} {s.ville}
                    </a>
                    {(s.complement || s.codeAcces) && <p className="text-[13px] text-doux">{[s.complement, s.codeAcces && `Code : ${s.codeAcces}`].filter(Boolean).join(" · ")}</p>}
                  </div>
                  {ecrireContacts && (
                    <form action={A.supprimerSite}>
                      <input type="hidden" name="id" value={s.id} />
                      <input type="hidden" name="clientId" value={c.id} />
                      <button aria-label="Supprimer l'adresse" className="flex h-8 w-8 items-center justify-center text-pale hover:text-terre">
                        <Icone nom="fermer" className="h-4 w-4" />
                      </button>
                    </form>
                  )}
                </li>
              ))}
            </ul>
            {ecrireContacts && (
              <details className="border-t border-trait/70">
                <summary className="btn-texte cursor-pointer px-5 py-2">Ajouter une adresse</summary>
                <FormulaireSite clientId={c.id} />
              </details>
            )}
          </div>
        </div>

        <div className="mt-9 lg:mt-0">
          <Titre>Tâches</Titre>
          <div className="carte overflow-hidden">
            {ouvertes.length === 0 ? <Vide>Aucune tâche en cours.</Vide> : <ListeTaches taches={ouvertes} chemin={chemin} masquerClient />}
            {ecrireTaches && (
              <div className="border-t border-trait/70">
                <FormulaireTache clientId={c.id} chemin={chemin} membres={actifs} moi={ctx.utilisateurId} />
              </div>
            )}
          </div>

          <Titre>Notes</Titre>
          <div className="carte overflow-hidden">
            {ecrireNotes && <FormulaireNote clientId={c.id} chemin={chemin} />}
            <Notes notes={f.notes} noms={noms} chemin={chemin} ctx={ctx} />
          </div>

          <Titre>Activité</Titre>
          <div className="carte overflow-hidden">
            <FilActivite activites={f.activite} noms={noms} />
          </div>

          {supprimer && (
            <form action={A.supprimerClient} className="mt-8 text-center">
              <input type="hidden" name="id" value={c.id} />
              <button className="btn-texte !text-[13px] text-doux hover:!text-terre">Supprimer ce client et tous ses chantiers</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
