import Link from "next/link";
import { readDb } from "@/lib/db";
import { Titre, Vide } from "@/components/ui";
import { BoutonApi, Copier } from "@/components/Formulaires";
import { formatDateHeure, formatJour } from "@/lib/dates";

export const dynamic = "force-dynamic";
export const metadata = { title: "E-mails" };

const STATUT = { brouillon: "Brouillon", planifie: "Planifié", envoye: "Envoyé", echec: "Échec", annule: "Annulé" } as const;

export default async function Emails({ searchParams }: { searchParams: { vue?: string } }) {
  const db = await readDb();
  const vue = ["modeles", "relances"].includes(searchParams.vue ?? "") ? searchParams.vue! : "journal";
  const nom = (id: string) => db.prospects.find((p) => p.id === id)?.entreprise ?? id;
  const onglet = (v: string, label: string) => (
    <Link
      href={v === "journal" ? "/emails" : `/emails?vue=${v}`}
      className={`rounded-full px-4 py-1.5 text-[14px] font-medium transition-colors duration-200 ${vue === v ? "bg-carte text-encre shadow-doux" : "text-doux hover:text-encre"}`}
    >
      {label}
    </Link>
  );

  const emails = [...db.emails].sort((a, b) => (b.envoyeLe ?? b.creeLe).localeCompare(a.envoyeLe ?? a.creeLe));
  const relances = db.relances.filter((r) => r.statut === "planifiee").sort((a, b) => a.echeance.localeCompare(b.echeance));

  return (
    <div className="fondu">
      <p className="sur-titre mb-1.5">{db.emails.filter((m) => m.statut === "envoye").length} envoyés</p>
      <h1 className="titre-page mb-6">E-mails</h1>
      <div className="mb-6 inline-flex gap-1 rounded-full bg-creux p-1">
        {onglet("journal", "Journal")}
        {onglet("modeles", "Modèles")}
        {onglet("relances", "Relances")}
      </div>

      {vue === "journal" && (
        <div className="carte overflow-hidden">
          {emails.length === 0 ? (
            <Vide>Aucun e-mail pour l&apos;instant. Prépare le premier depuis la fiche d&apos;un prospect.</Vide>
          ) : (
            emails.map((m) => (
              <Link key={m.id} href={`/prospects/${m.prospectId}`} className="rang">
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-medium">{m.objet}</span>
                  <span className="block truncate text-[13.5px] text-doux">
                    {nom(m.prospectId)} · {STATUT[m.statut]}
                    {m.envoyeLe ? ` · ${formatDateHeure(m.envoyeLe)}` : ""}
                  </span>
                </span>
                {m.statut === "envoye" && (
                  <span className="shrink-0 text-right text-[12.5px] tabular-nums text-doux">
                    {m.ouvertures} ouv. · {m.clics} clic{m.clics > 1 ? "s" : ""}
                  </span>
                )}
              </Link>
            ))
          )}
        </div>
      )}

      {vue === "modeles" && (
        <div className="grid gap-4">
          {[...db.modeles].sort((a, b) => (a.numero || 2.5) - (b.numero || 2.5)).map((m) => (
            <details key={m.id} className="carte group p-5">
              <summary className="flex cursor-pointer items-center gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-creux text-[13px] font-semibold tabular-nums text-doux">{m.numero || "·"}</span>
                <span className="min-w-0 flex-1">
                  <span className="block font-medium">{m.nom}</span>
                  <span className="block text-[13.5px] text-doux">{m.quand}</span>
                </span>
              </summary>
              <div className="mt-4 rounded-2xl bg-creux p-4">
                <p className="mb-2 text-[13px] text-doux">Objet : {m.objet}</p>
                <pre className="whitespace-pre-wrap break-words font-sans text-[14px] leading-relaxed">{m.corps}</pre>
              </div>
              <div className="mt-2 flex gap-5">
                <Copier texte={m.corps} label="Copier le texte" />
              </div>
            </details>
          ))}
          <p className="px-1 text-[13px] text-doux">Les textes entre crochets se remplissent pour chaque prospect. Les e-mails partent en texte simple.</p>
        </div>
      )}

      {vue === "relances" && (
        <>
          <div className="carte overflow-hidden">
            {relances.length === 0 ? (
              <Vide>Aucune relance planifiée.</Vide>
            ) : (
              relances.map((r) => (
                <div key={r.id} className="rang">
                  <Link href={`/prospects/${r.prospectId}`} className="min-w-0 flex-1">
                    <span className="block truncate font-medium">{nom(r.prospectId)}</span>
                    <span className="block text-[13.5px] text-doux">
                      {db.modeles.find((m) => m.id === r.modeleId)?.nom} · {formatJour(r.echeance)}
                    </span>
                  </Link>
                  <BoutonApi chemin={`/api/v1/relances/${r.id}`} methode="DELETE" label="Annuler" />
                </div>
              ))
            )}
          </div>
          <Titre>Règles</Titre>
          <p className="px-1 text-[14px] text-doux">
            Deux relances au plus : J+4 et J+10 après le premier envoi, jamais un week-end. La moindre réponse, un refus ou une signature annule tout ce qui reste.
          </p>
        </>
      )}
    </div>
  );
}
