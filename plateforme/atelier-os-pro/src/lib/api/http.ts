import { NextResponse } from "next/server";
import { ErreurApi } from "@/lib/erreurs";

const SENSIBLES = new Set(["motDePasseHash", "hash", "jetonHash"]);

/** Retire récursivement les champs sensibles avant toute sortie JSON. */
export function nettoyer<T>(v: T): T {
  if (Array.isArray(v)) return v.map(nettoyer) as T;
  if (v && typeof v === "object" && !(v instanceof Date)) {
    const r: Record<string, unknown> = {};
    for (const [k, x] of Object.entries(v)) if (!SENSIBLES.has(k)) r[k] = nettoyer(x);
    return r as T;
  }
  return v;
}

export function json(donnees: unknown, statut = 200, entetes: Record<string, string> = {}) {
  if (statut === 204) return new NextResponse(null, { status: 204, headers: entetes });
  return NextResponse.json(nettoyer(donnees), { status: statut, headers: { "Cache-Control": "no-store", ...entetes } });
}

export function corpsErreur(e: ErreurApi) {
  return { erreur: { code: e.code, message: e.message, ...(e.details ? { details: e.details } : {}) } };
}

export function reponseErreur(e: unknown) {
  if (e instanceof ErreurApi) return json(corpsErreur(e), e.statut);
  console.error("[api] erreur interne", e);
  return json({ erreur: { code: "erreur_interne", message: "Erreur interne. Réessayez ou contactez le support." } }, 500);
}

export async function lireCorps(req: Request): Promise<unknown> {
  const texte = await req.text();
  if (!texte.trim()) return {};
  try {
    return JSON.parse(texte);
  } catch {
    throw new ErreurApi(400, "json_invalide", "Le corps de la requête n'est pas du JSON valide.");
  }
}
