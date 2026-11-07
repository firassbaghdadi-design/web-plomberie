import type { Base } from "@/db";

export type Role = "dirigeant" | "charge_affaires" | "adv";
export const ROLES: Role[] = ["dirigeant", "charge_affaires", "adv"];
export const ROLE_LABEL: Record<Role, string> = { dirigeant: "Dirigeant", charge_affaires: "Chargé d'affaires", adv: "ADV" };

export type Origine = "interface" | "api" | "systeme";

/**
 * Contexte d'exécution de toute opération métier. Il est construit une fois
 * (session ou jeton API) et transmis à chaque service : l'organisation n'est
 * jamais lue depuis la requête, ce qui garantit l'isolation multi-entreprise.
 */
export interface Contexte {
  db: Base;
  organisationId: string;
  utilisateurId: string;
  role: Role;
  adminPlateforme: boolean;
  origine: Origine;
  jetonId?: string;
  /** Portées du jeton API ; absent = session utilisateur (aucune restriction supplémentaire). */
  portees?: string[];
}
