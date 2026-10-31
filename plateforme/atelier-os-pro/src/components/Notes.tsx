import * as A from "@/app/actions";
import type { Note } from "@/lib/services/crm";
import { depuis } from "@/lib/format";
import { peutEcrire } from "@/lib/serveur";
import type { Contexte } from "@/lib/contexte";
import { Icone } from "./Icone";

export function Notes({ notes, noms, chemin, ctx }: { notes: Note[]; noms: Record<string, string>; chemin: string; ctx: Contexte }) {
  if (notes.length === 0) return null;
  return (
    <ul className="divide-y divide-trait/70 border-t border-trait/70">
      {notes.map((n) => {
        const ecrire = peutEcrire(ctx, "notes", "modifier", n.auteurId === ctx.utilisateurId);
        const supprimer = peutEcrire(ctx, "notes", "supprimer", n.auteurId === ctx.utilisateurId);
        return (
          <li key={n.id} className={`px-5 py-3.5 ${n.epinglee ? "bg-creux/40" : ""}`}>
            <p className="whitespace-pre-line text-[14.5px] leading-relaxed">{n.contenu}</p>
            <div className="mt-1.5 flex items-center gap-3 text-[12.5px] text-doux">
              {n.epinglee && <Icone nom="epingle" className="h-3.5 w-3.5 text-terre" />}
              <span className="flex-1">
                {(n.auteurId && noms[n.auteurId]) || "—"} · {depuis(n.creeLe)}
              </span>
              {ecrire && (
                <form action={A.epinglerNote}>
                  <input type="hidden" name="id" value={n.id} />
                  <input type="hidden" name="epinglee" value={String(!n.epinglee)} />
                  <input type="hidden" name="chemin" value={chemin} />
                  <button className="lien-discret">{n.epinglee ? "Désépingler" : "Épingler"}</button>
                </form>
              )}
              {supprimer && (
                <form action={A.supprimerNote}>
                  <input type="hidden" name="id" value={n.id} />
                  <input type="hidden" name="chemin" value={chemin} />
                  <button className="lien-discret">Supprimer</button>
                </form>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
