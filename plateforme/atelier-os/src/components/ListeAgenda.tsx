import Link from "next/link";
import { GENRE_AGENDA_LABEL, type Prospect, type RendezVous } from "@/lib/types";
import { heureParis } from "@/lib/dates";
import { ActionsAgenda } from "./Agenda";

const duree = (m: number) => (m <= 0 ? "" : m < 60 ? `${m} min` : `${Math.floor(m / 60)} h${m % 60 ? ` ${m % 60}` : ""}`);

/** Lignes d'agenda : heure à gauche, titre, prospect, lieu, actions. */
export function LignesAgenda({ items, prospects, avecProspect = true }: { items: RendezVous[]; prospects: Prospect[]; avecProspect?: boolean }) {
  return (
    <>
      {items.map((r) => {
        const p = r.prospectId ? prospects.find((x) => x.id === r.prospectId) : undefined;
        return (
          <div key={r.id} className="rang items-start !gap-4" data-agenda={r.id}>
            <span className={`w-12 shrink-0 pt-px text-[15px] font-semibold tabular-nums ${r.fait ? "text-pale" : ""}`}>{heureParis(r.debut)}</span>
            <span className="min-w-0 flex-1">
              <span className={`block font-medium ${r.fait ? "text-doux line-through decoration-pale" : ""}`}>{r.titre}</span>
              <span className="block text-[13.5px] text-doux">
                {[
                  GENRE_AGENDA_LABEL[r.genre],
                  r.genre === "rendez_vous" ? duree(r.dureeMin) : "",
                  r.lieu,
                ]
                  .filter(Boolean)
                  .join(" · ")}
                {avecProspect && p && (
                  <>
                    {" · "}
                    <Link href={`/prospects/${p.id}`} className="text-terre">
                      {p.entreprise}
                    </Link>
                  </>
                )}
              </span>
              {r.detail && <span className="mt-1 block whitespace-pre-wrap break-words text-[14px] text-doux">{r.detail}</span>}
              <span className="mt-1.5 block">
                <ActionsAgenda id={r.id} fait={r.fait} />
              </span>
            </span>
          </div>
        );
      })}
    </>
  );
}
