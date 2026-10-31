/**
 * Matrice des droits par rôle. « proprio » = autorisé seulement si l'utilisateur
 * est propriétaire de la cible (règle propre à chaque ressource, fournie par son service).
 */
import type { Contexte, Role } from "./contexte";
import { interdit } from "./erreurs";

export type Ressource =
  | "clients"
  | "contacts"
  | "sites"
  | "chantiers"
  | "notes"
  | "taches"
  | "pieces_jointes"
  | "etiquettes"
  | "activites"
  | "membres"
  | "invitations"
  | "jetons"
  | "organisation";
export type Action = "lire" | "creer" | "modifier" | "supprimer";
type Regle = "oui" | "non" | "proprio";
type Ligne = Partial<Record<Action, Regle>>;

const LECTURE: Ligne = { lire: "oui" };
const TOUT: Ligne = { lire: "oui", creer: "oui", modifier: "oui", supprimer: "oui" };
const PROPRIO: Ligne = { lire: "oui", creer: "proprio", modifier: "proprio", supprimer: "proprio" };

export const MATRICE: Record<Role, Record<Ressource, Ligne>> = {
  dirigeant: {
    clients: TOUT, contacts: TOUT, sites: TOUT, chantiers: TOUT, notes: TOUT, taches: TOUT,
    pieces_jointes: TOUT, etiquettes: TOUT, activites: LECTURE, membres: { lire: "oui", modifier: "oui" },
    invitations: TOUT, jetons: TOUT, organisation: { lire: "oui", modifier: "oui" },
  },
  // Ses clients et chantiers en écriture, lecture du reste.
  charge_affaires: {
    clients: { lire: "oui", creer: "oui", modifier: "proprio" },
    contacts: PROPRIO,
    sites: PROPRIO,
    chantiers: { lire: "oui", creer: "proprio", modifier: "proprio" },
    notes: PROPRIO,
    taches: PROPRIO,
    pieces_jointes: PROPRIO,
    etiquettes: { lire: "oui", creer: "oui" },
    activites: LECTURE,
    membres: LECTURE,
    invitations: {},
    jetons: {},
    organisation: LECTURE,
  },
  // Administration des ventes : clients, devis, factures, relances.
  adv: {
    clients: { lire: "oui", creer: "oui", modifier: "oui" },
    contacts: TOUT,
    sites: TOUT,
    chantiers: LECTURE,
    notes: { lire: "oui", creer: "oui", modifier: "proprio", supprimer: "proprio" },
    taches: { lire: "oui", creer: "oui", modifier: "proprio", supprimer: "proprio" },
    pieces_jointes: { lire: "oui", creer: "oui", supprimer: "proprio" },
    etiquettes: { lire: "oui", creer: "oui" },
    activites: LECTURE,
    membres: LECTURE,
    invitations: {},
    jetons: {},
    organisation: LECTURE,
  },
};

/** Portées de jeton : `clients:lecture`, `clients:ecriture`, `*:lecture`, `*:ecriture`. */
export const PORTEES_RESSOURCES: Ressource[] = ["clients", "contacts", "sites", "chantiers", "notes", "taches", "pieces_jointes", "etiquettes", "activites", "membres", "organisation"];
export function porteeAutorise(portees: string[] | undefined, ressource: Ressource, action: Action): boolean {
  if (!portees) return true;
  const besoin = action === "lire" ? "lecture" : "ecriture";
  const ok = (p: string) => portees.includes(`${p}:${besoin}`) || (besoin === "lecture" && portees.includes(`${p}:ecriture`));
  return ok("*") || ok(ressource);
}

export function regle(ctx: Pick<Contexte, "role" | "adminPlateforme">, ressource: Ressource, action: Action): Regle {
  const role: Role = ctx.adminPlateforme ? "dirigeant" : ctx.role;
  return MATRICE[role][ressource][action] ?? "non";
}

/**
 * Vérifie le droit et lève 403 sinon. `proprio` est évalué paresseusement
 * uniquement si la règle l'exige.
 */
export async function exiger(ctx: Contexte, ressource: Ressource, action: Action, proprio?: () => Promise<boolean> | boolean): Promise<void> {
  if (!porteeAutorise(ctx.portees, ressource, action)) throw interdit(`Le jeton API n'a pas la portée « ${ressource}:${action === "lire" ? "lecture" : "ecriture"} ».`);
  const r = regle(ctx, ressource, action);
  if (r === "oui") return;
  if (r === "proprio" && proprio && (await proprio())) return;
  throw interdit();
}

export function peutSync(ctx: Pick<Contexte, "role" | "adminPlateforme">, ressource: Ressource, action: Action): boolean {
  return regle(ctx, ressource, action) !== "non";
}
