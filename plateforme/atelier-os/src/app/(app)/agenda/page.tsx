import { readDb } from "@/lib/db";
import { ajouterJours, formatJour, jourParis, partiesParis } from "@/lib/dates";
import { listerAgendaDb } from "@/lib/service";
import { FormAgenda } from "@/components/Agenda";
import { LignesAgenda } from "@/components/ListeAgenda";
import { Titre, Vide } from "@/components/ui";
import type { RendezVous } from "@/lib/types";

export const dynamic = "force-dynamic";
export const metadata = { title: "Agenda" };

export default async function Agenda() {
  const db = await readDb();
  const aujourdhui = jourParis();
  const h = Math.min(partiesParis().heure + 1, 23);
  const avenir = listerAgendaDb(db, { du: aujourdhui });
  const passes = listerAgendaDb(db, { du: ajouterJours(aujourdhui, -60), au: ajouterJours(aujourdhui, -1) }).reverse();
  const duJour = avenir.filter((r) => jourParis(r.debut) === aujourdhui);
  const parJour = new Map<string, RendezVous[]>();
  for (const r of avenir) {
    const j = jourParis(r.debut);
    if (j === aujourdhui) continue;
    parJour.set(j, [...(parJour.get(j) ?? []), r]);
  }
  const demain = ajouterJours(aujourdhui, 1);
  const prospects = [...db.prospects].sort((a, b) => a.entreprise.localeCompare(b.entreprise));
  const nomJour = (j: string) => (j === demain ? `Demain · ${formatJour(j)}` : formatJour(j));
  const restants = duJour.filter((r) => !r.fait).length;

  return (
    <div className="fondu">
      <p className="sur-titre mb-1.5">{avenir.filter((r) => !r.fait).length} à venir</p>
      <h1 className="titre-page mb-6">Agenda</h1>

      <div className="carte mb-2">
        <FormAgenda prospects={prospects.map((p) => ({ id: p.id, entreprise: p.entreprise }))} jourDefaut={aujourdhui} heureDefaut={`${String(h).padStart(2, "0")}:00`} />
      </div>

      <Titre droite={<span className="text-[13px] text-doux">{formatJour(aujourdhui)}</span>}>Aujourd&apos;hui</Titre>
      <div className="carte overflow-hidden">
        {duJour.length === 0 ? <Vide>Rien de prévu aujourd&apos;hui.</Vide> : <LignesAgenda items={duJour} prospects={db.prospects} />}
      </div>
      {duJour.length > 0 && <p className="mt-2 px-1 text-[13px] text-doux">{restants ? `${restants} encore à faire` : "Tout est fait pour aujourd'hui."}</p>}

      {Array.from(parJour.entries()).map(([j, items]) => (
        <section key={j}>
          <Titre>{nomJour(j)}</Titre>
          <div className="carte overflow-hidden">
            <LignesAgenda items={items} prospects={db.prospects} />
          </div>
        </section>
      ))}
      {parJour.size === 0 && <p className="mt-6 px-1 text-[14px] text-doux">Rien de prévu les jours suivants.</p>}

      {passes.length > 0 && (
        <details className="mt-9">
          <summary className="btn-texte cursor-pointer">Passés ({passes.length})</summary>
          <div className="carte mt-3 overflow-hidden">
            <LignesAgenda items={passes} prospects={db.prospects} />
          </div>
        </details>
      )}
    </div>
  );
}
