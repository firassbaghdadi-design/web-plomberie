/** Gestionnaires HTTP génériques de l'API v2 (utilisés par les routes et les tests). */
import { ErreurApi, introuvable } from "@/lib/erreurs";
import * as comptes from "@/lib/services/comptes";
import * as crm from "@/lib/services/crm";
import { contexteRequete } from "./auth";
import { json, lireCorps, reponseErreur } from "./http";
import { avecIdempotence } from "./idempotence";
import { trouverRessource, type EntreeRegistre } from "./registre";

const RESERVES = new Set(["limite", "curseur", "q", "majDepuis"]);
const nonPermise = (methode: string) => new ErreurApi(405, "methode_non_permise", `Méthode ${methode} non disponible sur cette ressource.`);

function ressource(nom: string): EntreeRegistre {
  const r = trouverRessource(nom);
  if (!r) throw introuvable("Ressource d'API");
  return r;
}

const origineDe = (req: Request) => new URL(req.url).origin;

async function executerPost(req: Request, faire: (ctx: Awaited<ReturnType<typeof contexteRequete>>, corps: unknown) => Promise<{ statut: number; donnees: unknown }>) {
  const ctx = await contexteRequete(req);
  const corps = await lireCorps(req);
  const url = new URL(req.url);
  const r = await avecIdempotence(ctx, req.headers.get("idempotency-key"), "POST", url.pathname, corps, () => faire(ctx, corps));
  return json(r.donnees, r.statut, r.rejouee ? { "Idempotency-Replayed": "true" } : {});
}

export async function GET_collection(req: Request, nom: string) {
  try {
    const r = ressource(nom);
    if (!r.lister) throw nonPermise("GET");
    const ctx = await contexteRequete(req);
    const p = new URL(req.url).searchParams;
    const filtres: Record<string, string> = {};
    for (const [k, v] of p) {
      if (RESERVES.has(k)) continue;
      if (!r.filtres?.includes(k)) throw new ErreurApi(422, "validation", `Paramètre inconnu : ${k}. Filtres disponibles : ${(r.filtres ?? []).join(", ") || "aucun"}.`);
      filtres[k] = v;
    }
    const limite = p.get("limite");
    if (limite !== null && !/^\d+$/.test(limite)) throw new ErreurApi(422, "validation", "limite doit être un entier entre 1 et 100.");
    return json(await r.lister(ctx, { limite: limite ? Number(limite) : undefined, curseur: p.get("curseur"), q: p.get("q"), majDepuis: p.get("majDepuis"), filtres }));
  } catch (e) {
    return reponseErreur(e);
  }
}

export async function POST_collection(req: Request, nom: string) {
  try {
    const r = ressource(nom);
    if (!r.creer) throw nonPermise("POST");
    return await executerPost(req, async (ctx, corps) => ({ statut: 201, donnees: await r.creer!(ctx, corps, origineDe(req)) }));
  } catch (e) {
    return reponseErreur(e);
  }
}

export async function GET_element(req: Request, nom: string, id: string) {
  try {
    const r = ressource(nom);
    if (!r.obtenir) throw nonPermise("GET");
    const ctx = await contexteRequete(req);
    return json(await r.obtenir(ctx, id));
  } catch (e) {
    return reponseErreur(e);
  }
}

export async function PATCH_element(req: Request, nom: string, id: string) {
  try {
    const r = ressource(nom);
    if (!r.modifier) throw nonPermise("PATCH");
    const ctx = await contexteRequete(req);
    return json(await r.modifier(ctx, id, await lireCorps(req)));
  } catch (e) {
    return reponseErreur(e);
  }
}

export async function DELETE_element(req: Request, nom: string, id: string) {
  try {
    const r = ressource(nom);
    if (!r.supprimer) throw nonPermise("DELETE");
    const ctx = await contexteRequete(req);
    await r.supprimer(ctx, id);
    return json(null, 204);
  } catch (e) {
    return reponseErreur(e);
  }
}

// ───────── Ressources particulières ─────────

export async function GET_moi(req: Request) {
  try {
    const ctx = await contexteRequete(req);
    const membres = await comptes.listerMembres({ ...ctx, portees: undefined });
    const moi = membres.find((m) => m.utilisateurId === ctx.utilisateurId);
    const org = await comptes.obtenirOrganisation({ ...ctx, portees: undefined });
    return json({
      utilisateur: moi?.utilisateur ?? { id: ctx.utilisateurId },
      role: ctx.role,
      adminPlateforme: ctx.adminPlateforme,
      organisation: { id: org.id, nom: org.nom },
      authentification: ctx.jetonId ? { type: "jeton", jetonId: ctx.jetonId, portees: ctx.portees } : { type: "session" },
    });
  } catch (e) {
    return reponseErreur(e);
  }
}

export async function GET_organisation(req: Request) {
  try {
    return json(await comptes.obtenirOrganisation(await contexteRequete(req)));
  } catch (e) {
    return reponseErreur(e);
  }
}

export async function PATCH_organisation(req: Request) {
  try {
    const ctx = await contexteRequete(req);
    return json(await comptes.modifierOrganisation(ctx, await lireCorps(req)));
  } catch (e) {
    return reponseErreur(e);
  }
}

export async function GET_etiquetages(req: Request) {
  try {
    const ctx = await contexteRequete(req);
    const p = new URL(req.url).searchParams;
    const type = p.get("typeRessource");
    const id = p.get("ressourceId");
    if ((type !== "clients" && type !== "chantiers") || !id) throw new ErreurApi(422, "validation", "Paramètres requis : typeRessource (clients|chantiers) et ressourceId.");
    return json({ donnees: (await crm.etiquettesDe(ctx, type, [id]))[id] ?? [], curseurSuivant: null });
  } catch (e) {
    return reponseErreur(e);
  }
}

export async function POST_etiquetages(req: Request) {
  try {
    return await executerPost(req, async (ctx, corps) => ({ statut: 201, donnees: await crm.etiqueter(ctx, corps) }));
  } catch (e) {
    return reponseErreur(e);
  }
}

export async function DELETE_etiquetages(req: Request) {
  try {
    const ctx = await contexteRequete(req);
    await crm.etiqueter(ctx, await lireCorps(req), true);
    return json(null, 204);
  } catch (e) {
    return reponseErreur(e);
  }
}
