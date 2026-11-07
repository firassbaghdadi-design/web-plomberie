import { base } from "@/db";
import type { Contexte } from "@/lib/contexte";
import { nonAuthentifie } from "@/lib/erreurs";
import { contexteDepuisJeton, contexteDepuisSession } from "@/lib/services/comptes";
import { COOKIE_SESSION, lireSession } from "@/lib/session";

function lireCookie(req: Request, nom: string): string | undefined {
  const brut = req.headers.get("cookie");
  if (!brut) return undefined;
  for (const morceau of brut.split(";")) {
    const [k, ...v] = morceau.trim().split("=");
    if (k === nom) return decodeURIComponent(v.join("="));
  }
  return undefined;
}

/** Authentifie une requête API : jeton Bearer (prioritaire) ou cookie de session de l'interface. */
export async function contexteRequete(req: Request): Promise<Contexte> {
  const db = await base();
  const auth = req.headers.get("authorization");
  if (auth) {
    const m = /^Bearer\s+(\S+)$/i.exec(auth.trim());
    const ctx = m ? await contexteDepuisJeton(db, m[1]) : null;
    if (!ctx) throw nonAuthentifie();
    return ctx;
  }
  const session = await lireSession(lireCookie(req, COOKIE_SESSION));
  const ctx = session ? await contexteDepuisSession(db, session) : null;
  if (!ctx) throw nonAuthentifie();
  return ctx;
}
