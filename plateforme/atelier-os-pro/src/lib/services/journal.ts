import { activites } from "@/db/schema";
import type { Contexte } from "@/lib/contexte";
import { nouvelId } from "@/lib/ids";

type Executeur = Pick<Contexte["db"], "insert">;

export interface Evenement {
  action: string;
  typeRessource: string;
  ressourceId: string;
  resume: string;
  clientId?: string | null;
  chantierId?: string | null;
  changements?: Record<string, unknown>;
}

/** Écrit une ligne dans le journal d'activité (qui, quoi, quand, d'où). */
export async function journaliser(tx: Executeur, ctx: Contexte, e: Evenement) {
  await tx.insert(activites).values({
    id: nouvelId("act"),
    organisationId: ctx.organisationId,
    acteurId: ctx.utilisateurId,
    jetonId: ctx.jetonId ?? null,
    origine: ctx.origine,
    action: e.action,
    typeRessource: e.typeRessource,
    ressourceId: e.ressourceId,
    clientId: e.clientId ?? null,
    chantierId: e.chantierId ?? null,
    resume: e.resume,
    changements: e.changements ?? null,
    creeLe: new Date(),
  });
}

const SENSIBLES = new Set(["motDePasseHash", "hash", "jetonHash"]);

/** Champs réellement modifiés : { champ: [avant, après] }. */
export function differences(avant: Record<string, any>, apres: Record<string, any>): Record<string, [unknown, unknown]> {
  const r: Record<string, [unknown, unknown]> = {};
  for (const [k, v] of Object.entries(apres)) {
    if (v === undefined) continue;
    const a = avant[k] instanceof Date ? avant[k].toISOString() : avant[k];
    const b = v instanceof Date ? v.toISOString() : v;
    if (JSON.stringify(a ?? null) !== JSON.stringify(b ?? null)) r[k] = SENSIBLES.has(k) ? ["•••", "•••"] : [a ?? null, b ?? null];
  }
  return r;
}
