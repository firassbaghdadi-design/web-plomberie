/** Erreur métier homogène : convertie telle quelle en réponse JSON par l'API. */
export class ErreurApi extends Error {
  constructor(
    public statut: number,
    public code: string,
    message: string,
    public details?: unknown,
  ) {
    super(message);
    this.name = "ErreurApi";
  }
}

export const introuvable = (quoi = "Ressource") => new ErreurApi(404, "introuvable", `${quoi} introuvable.`);
export const interdit = (message = "Vous n'avez pas les droits pour cette action.") => new ErreurApi(403, "interdit", message);
export const nonAuthentifie = () => new ErreurApi(401, "non_authentifie", "Authentification requise : cookie de session ou en-tête Authorization: Bearer <jeton>.");
export const invalide = (message: string, details?: unknown) => new ErreurApi(422, "validation", message, details);
export const conflit = (message: string) => new ErreurApi(409, "conflit", message);

/** Code d'erreur Postgres, y compris quand Drizzle l'enveloppe (DrizzleQueryError.cause). */
export function codePostgres(e: unknown): string | undefined {
  let x: any = e;
  for (let i = 0; i < 4 && x; i++) {
    if (typeof x.code === "string" && /^[0-9A-Z]{5}$/.test(x.code)) return x.code;
    x = x.cause;
  }
  return undefined;
}
