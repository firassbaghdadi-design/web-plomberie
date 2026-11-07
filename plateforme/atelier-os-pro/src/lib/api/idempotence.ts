/**
 * Idempotence des POST : en-tête `Idempotency-Key`. Une même clé rejouée avec la même
 * requête renvoie la réponse d'origine (en-tête Idempotency-Replayed: true) ; avec une
 * requête différente, 422. Clés conservées 24 h, par organisation.
 */
import { and, eq, lt } from "drizzle-orm";
import { clesIdempotence } from "@/db/schema";
import type { Contexte } from "@/lib/contexte";
import { sha256 } from "@/lib/crypto";
import { ErreurApi } from "@/lib/erreurs";

const DUREE_MS = 24 * 3600_000;

export async function avecIdempotence(
  ctx: Contexte,
  cle: string | null,
  methode: string,
  chemin: string,
  corps: unknown,
  executer: () => Promise<{ statut: number; donnees: unknown }>,
): Promise<{ statut: number; donnees: unknown; rejouee: boolean }> {
  if (!cle) return { ...(await executer()), rejouee: false };
  if (cle.length > 255 || !/^[\x21-\x7e]+$/.test(cle)) throw new ErreurApi(400, "idempotence_cle_invalide", "Idempotency-Key : 1 à 255 caractères ASCII imprimables.");
  const empreinte = sha256(`${methode} ${chemin} ${JSON.stringify(corps)}`);
  const [existant] = await ctx.db
    .select()
    .from(clesIdempotence)
    .where(and(eq(clesIdempotence.organisationId, ctx.organisationId), eq(clesIdempotence.cle, cle)))
    .limit(1);
  if (existant && existant.creeLe.getTime() > Date.now() - DUREE_MS) {
    if (existant.empreinte !== empreinte) throw new ErreurApi(422, "idempotence_conflit", "Cette Idempotency-Key a déjà servi pour une requête différente.");
    return { statut: existant.statutHttp, donnees: existant.reponse, rejouee: true };
  }
  if (existant) await ctx.db.delete(clesIdempotence).where(and(eq(clesIdempotence.organisationId, ctx.organisationId), eq(clesIdempotence.cle, cle)));
  const r = await executer();
  await ctx.db
    .insert(clesIdempotence)
    .values({ organisationId: ctx.organisationId, cle, methode, chemin, empreinte, statutHttp: r.statut, reponse: masquerSecrets(r.donnees) as any, creeLe: new Date() })
    .onConflictDoNothing();
  // Ménage opportuniste des clés expirées.
  if (Math.random() < 0.02) await ctx.db.delete(clesIdempotence).where(lt(clesIdempotence.creeLe, new Date(Date.now() - DUREE_MS)));
  return { ...r, rejouee: false };
}

/** Le secret d'un jeton et le lien d'invitation ne sont jamais conservés en base, même pour le rejeu. */
function masquerSecrets(v: unknown): unknown {
  if (!v || typeof v !== "object" || Array.isArray(v)) return v;
  const r: Record<string, unknown> = { ...(v as Record<string, unknown>) };
  for (const k of ["secret", "lien"]) if (k in r) r[k] = null;
  return r;
}
