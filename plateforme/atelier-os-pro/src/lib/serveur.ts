import "server-only";
import { cache } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { base } from "@/db";
import { contexteDepuisSession, obtenirOrganisation, organisationsAccessibles } from "@/lib/services/comptes";
import { COOKIE_SESSION, lireSession } from "@/lib/session";
import { regle, type Action, type Ressource } from "@/lib/permissions";
import { listerMembres } from "@/lib/services/comptes";

/** Contexte de l'utilisateur connecté (pages et server actions). Redirige vers /connexion sinon. */
export const contexteInterface = cache(async () => {
  const session = await lireSession(cookies().get(COOKIE_SESSION)?.value);
  const db = await base();
  const ctx = session ? await contexteDepuisSession(db, session) : null;
  if (!ctx) redirect("/connexion");
  return ctx;
});

export const enteteInterface = cache(async () => {
  const ctx = await contexteInterface();
  const [organisation, organisations] = await Promise.all([obtenirOrganisation(ctx), organisationsAccessibles(ctx.db, ctx.utilisateurId, ctx.adminPlateforme)]);
  return { ctx, organisation, organisations };
});

export async function optionsMembres(ctx: Awaited<ReturnType<typeof contexteInterface>>) {
  const m = await listerMembres(ctx);
  return {
    actifs: m.filter((x) => x.actif).map((x) => ({ id: x.utilisateurId, nom: x.utilisateur.nom, role: x.role })),
    noms: Object.fromEntries(m.map((x) => [x.utilisateurId, x.utilisateur.nom])) as Record<string, string>,
  };
}

/** Le contexte peut-il écrire sur cette cible ? (affichage seulement : les services restent seuls juges). */
export function peutEcrire(ctx: Parameters<typeof regle>[0], ressource: Ressource, action: Action, proprio = false) {
  const r = regle(ctx, ressource, action);
  return r === "oui" || (r === "proprio" && proprio);
}
