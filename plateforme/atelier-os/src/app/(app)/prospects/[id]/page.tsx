import Link from "next/link";
import { notFound } from "next/navigation";
import { readDb } from "@/lib/db";
import { EVENT_LABEL } from "@/lib/types";
import { AjoutEvenement, BoutonApi, ChoixStatut, Copier, FormProspect, PreparerEmail } from "@/components/Formulaires";
import { PastilleStatut, Titre, Vide } from "@/components/ui";
import { Icone } from "@/components/Icone";
import { formatDateHeure, formatJour } from "@/lib/dates";

export const dynamic = "force-dynamic";

const STATUT_EMAIL = { brouillon: "Brouillon", planifie: "Planifié", envoye: "Envoyé", echec: "Échec", annule: "Annulé" } as const;

export default async function Fiche({ params }: { params: { id: string } }) {
  const db = await readDb();
  const p = db.prospects.find((x) => x.id === params.id);
  if (!p) notFound();
  const evenements = db.evenements.filter((e) => e.prospectId === p.id).sort((a, b) => b.date.localeCompare(a.date));
  const emails = db.emails.filter((e) => e.prospectId === p.id).sort((a, b) => b.creeLe.localeCompare(a.creeLe));
  const relances = db.relances.filter((r) => r.prospectId === p.id).sort((a, b) => a.echeance.localeCompare(b.echeance));
  const nomModele = (id: string) => db.modeles.find((m) => m.id === id)?.nom ?? id;

  const infos: Array<[string, React.ReactNode]> = [
    ["Dirigeant", p.dirigeant || "—"],
    [
      "E-mail",
      p.emails.length ? (
        <span className="flex flex-col">
          {p.emails.map((m) => (
            <a key={m} href={`mailto:${m}`} className="break-all text-terre">
              {m}
            </a>
          ))}
        </span>
      ) : (
        "Pas d'adresse connue"
      ),
    ],
    ["Téléphone", p.telephone ? <a key="t" href={`tel:${p.telephone.replace(/\s/g, "")}`} className="text-terre">{p.telephone}</a> : "—"],
    ["Ville", [p.ville, p.arrondissement].filter(Boolean).join(" ") || "—"],
    ["Site actuel", p.siteActuel ? <a key="s" href={p.siteActuel} target="_blank" rel="noreferrer" className="break-all text-terre">{p.siteActuel.replace(/^https?:\/\//, "")}</a> : "—"],
    ["Maquette", p.maquetteUrl ? <a key="m" href={p.maquetteUrl} target="_blank" rel="noreferrer" className="break-all text-terre">{p.maquetteUrl.replace(/^https?:\/\//, "")}</a> : "Pas encore faite"],
    ["Score", p.score !== null ? `${p.score} / 100${p.vague ? ` · vague ${p.vague}` : ""}` : "—"],
    ["Offre", p.offre || "—"],
  ];

  return (
    <div className="fondu">
      <Link href="/prospects" className="btn-texte mb-3 -ml-1">
        <Icone nom="retour" className="h-4 w-4" /> Prospects
      </Link>
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div className="min-w-0">
          <h1 className="titre-page break-words">{p.entreprise}</h1>
          <p className="mt-1 flex flex-wrap items-center gap-2 text-doux">
            {[p.dirigeant, [p.ville, p.arrondissement].filter(Boolean).join(" ")].filter(Boolean).join(" · ")}
            {p.aRepondu && <span className="pastille">A répondu</span>}
            {p.stop && <span className="pastille">Ne plus contacter</span>}
          </p>
        </div>
        <ChoixStatut id={p.id} statut={p.statut} />
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {p.telephone && (
          <a href={`tel:${p.telephone.replace(/\s/g, "")}`} className="btn btn-primaire">
            <Icone nom="telephone" className="h-[18px] w-[18px]" /> Appeler
          </a>
        )}
        {p.maquetteUrl && (
          <a href={p.maquetteUrl} target="_blank" rel="noreferrer" className="btn">
            <Icone nom="lien" className="h-[18px] w-[18px]" /> Voir la maquette
          </a>
        )}
        {p.emails[0] && (
          <a href={`mailto:${p.emails[0]}`} className="btn">
            <Icone nom="emails" className="h-[18px] w-[18px]" /> Écrire
          </a>
        )}
      </div>

      <div className="grid grid-cols-[minmax(0,1fr)] gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <div>
          <Titre>Fiche</Titre>
          <dl className="carte overflow-hidden">
            {infos.map(([k, v]) => (
              <div key={k} className="rang items-start !gap-4">
                <dt className="w-24 shrink-0 text-[13.5px] text-doux">{k}</dt>
                <dd className="min-w-0 flex-1 text-[15px]">{v}</dd>
              </div>
            ))}
          </dl>

          {p.notes && (
            <>
              <Titre>Notes</Titre>
              <div className="carte whitespace-pre-wrap p-5 text-[14.5px] leading-relaxed">{p.notes}</div>
            </>
          )}

          <details className="mt-8 group">
            <summary className="btn-texte cursor-pointer">Modifier la fiche</summary>
            <div className="carte mt-3">
              <FormProspect prospect={p} />
            </div>
          </details>

          <div className="mt-6 flex flex-wrap gap-5">
            {!p.stop && (
              <BoutonApi chemin={`/api/v1/prospects/${p.id}`} methode="PATCH" donnees={{ stop: true }} label="Ne plus contacter" confirmation="Marquer ce prospect « ne plus contacter » et annuler ses relances ?" />
            )}
            <BoutonApi chemin={`/api/v1/prospects/${p.id}`} methode="DELETE" label="Supprimer" confirmation="Supprimer ce prospect et tout son historique ?" redirection="/prospects" />
          </div>
        </div>

        <div>
          <Titre>Ajouter à l&apos;historique</Titre>
          <div className="carte">
            <AjoutEvenement prospectId={p.id} />
          </div>

          <Titre>Historique</Titre>
          <div className="carte overflow-hidden">
            {evenements.length === 0 ? (
              <Vide>Rien pour l&apos;instant.</Vide>
            ) : (
              evenements.map((e) => (
                <div key={e.id} className="rang items-start">
                  <span className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-encre/25" />
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline justify-between gap-3">
                      <span className="font-medium">{e.titre}</span>
                      <span className="shrink-0 text-[12.5px] text-pale">{formatDateHeure(e.date)}</span>
                    </span>
                    <span className="block text-[12px] uppercase tracking-wide text-pale">{EVENT_LABEL[e.type]}</span>
                    {e.detail && <span className="mt-1 block whitespace-pre-wrap break-words text-[14px] text-doux">{e.detail}</span>}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <Titre>E-mails</Titre>
      <div className="carte overflow-hidden">
        {emails.map((m) => (
          <details key={m.id} className="rang !block">
            <summary className="flex cursor-pointer items-center gap-3">
              <span className="min-w-0 flex-1">
                <span className="block truncate font-medium">{m.objet}</span>
                <span className="block truncate text-[13px] text-doux">
                  {STATUT_EMAIL[m.statut]}
                  {m.envoyeLe ? ` · ${formatDateHeure(m.envoyeLe)}` : ""}
                  {m.statut === "envoye" ? ` · ${m.ouvertures} ouverture${m.ouvertures > 1 ? "s" : ""} · ${m.clics} clic${m.clics > 1 ? "s" : ""}` : ""}
                </span>
              </span>
              <span className="text-[13px] text-pale">{nomModele(m.modeleId)}</span>
            </summary>
            <div className="mt-3 rounded-2xl bg-creux p-4">
              <p className="mb-2 text-[12.5px] text-doux">À : {m.destinataire || "adresse à renseigner"}</p>
              <pre className="whitespace-pre-wrap break-words font-sans text-[14px] leading-relaxed">{m.corps}</pre>
            </div>
            <div className="mt-2 flex flex-wrap gap-5">
              <Copier texte={m.corps} label="Copier le texte" />
              <Copier texte={m.objet} label="Copier l'objet" />
              {(m.statut === "brouillon" || m.statut === "planifie" || m.statut === "echec") && (
                <>
                  <BoutonApi chemin={`/api/v1/emails/${m.id}/marquer-envoye`} label="Marquer comme envoyé" confirmation="Cet e-mail est bien parti ? Les relances seront planifiées." />
                  <BoutonApi chemin={`/api/v1/emails/${m.id}/annuler`} label="Annuler" />
                </>
              )}
            </div>
          </details>
        ))}
        {emails.length === 0 && <Vide>Aucun e-mail pour ce prospect.</Vide>}
        <div className="border-t border-trait/70">
          <PreparerEmail prospectId={p.id} modeles={db.modeles} />
        </div>
      </div>

      <Titre>Relances</Titre>
      <div className="carte overflow-hidden">
        {relances.length === 0 ? (
          <Vide>Aucune relance. Elles se planifient (J+4 et J+10) dès que le premier e-mail est marqué comme envoyé.</Vide>
        ) : (
          relances.map((r) => (
            <div key={r.id} className="rang">
              <span className="min-w-0 flex-1">
                <span className="block font-medium">{nomModele(r.modeleId)}</span>
                <span className="block text-[13px] text-doux">
                  {formatJour(r.echeance)} ·{" "}
                  {r.statut === "planifiee" ? "Planifiée" : r.statut === "envoyee" ? "Envoyée" : `Annulée${r.motif ? ` (${r.motif.toLowerCase()})` : ""}`}
                </span>
              </span>
              {r.statut === "planifiee" && <BoutonApi chemin={`/api/v1/relances/${r.id}`} methode="DELETE" label="Annuler" />}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
