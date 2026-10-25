import { readDb } from "@/lib/db";
import { calculerPipeline } from "@/lib/service";
import { Kanban, type CarteKanban } from "@/components/Kanban";

export const dynamic = "force-dynamic";
export const metadata = { title: "Pipeline" };

export default async function Pipeline() {
  const db = await readDb();
  const colonnes = calculerPipeline(db);
  const cartes: CarteKanban[] = colonnes.flatMap((c) =>
    c.prospects.map((p) => ({
      id: p.id,
      entreprise: p.entreprise,
      sousTitre: [p.dirigeant, p.arrondissement ? `${p.ville} ${p.arrondissement}` : p.ville].filter(Boolean).join(" · "),
      statut: p.statut,
      montant: null,
      prochaine: "",
      enRetard: false,
    })),
  );
  const actifs = db.prospects.filter((p) => p.statut !== "perdu" && p.statut !== "signe").length;

  return (
    <div className="fondu">
      <p className="sur-titre mb-1.5">{actifs} en cours</p>
      <h1 className="titre-page mb-2">Pipeline</h1>
      <p className="mb-6 text-[14px] text-doux">
        <span className="hidden md:inline">Glisser une carte d&apos;une colonne à l&apos;autre pour changer l&apos;étape.</span>
        <span className="md:hidden">Maintenir la poignée pour glisser, ou toucher ⋯ pour choisir l&apos;étape.</span>
      </p>
      <Kanban cartes={cartes} />
    </div>
  );
}
