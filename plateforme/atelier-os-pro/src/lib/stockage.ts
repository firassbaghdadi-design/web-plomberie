/**
 * Stockage de fichiers — interface prête, implémentation à brancher (Vercel Blob).
 * Les pièces jointes ne gardent en base que leurs métadonnées (table pieces_jointes)
 * et la clé renvoyée par `deposer`. Toujours préfixer la clé par l'organisation.
 */
export interface FichierDepose {
  cle: string;
  url: string | null;
  taille: number;
  typeMime: string;
}

export interface Stockage {
  deposer(organisationId: string, nom: string, contenu: Blob | ArrayBuffer, typeMime: string): Promise<FichierDepose>;
  urlSignee(cle: string, dureeSecondes?: number): Promise<string>;
  supprimer(cle: string): Promise<void>;
}

/** Clé de stockage cloisonnée par organisation : `org_xxx/2026/10/<aléa>-<nom>`. */
export function cleStockage(organisationId: string, nom: string, date = new Date()): string {
  const propre = nom.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-zA-Z0-9._-]+/g, "-").slice(-80);
  const alea = Math.random().toString(36).slice(2, 10);
  return `${organisationId}/${date.getUTCFullYear()}/${String(date.getUTCMonth() + 1).padStart(2, "0")}/${alea}-${propre}`;
}

/** Stockage non configuré : lève une erreur explicite tant que BLOB_READ_WRITE_TOKEN n'est pas branché. */
export const stockageIndisponible: Stockage = {
  async deposer() {
    throw new Error("Stockage de fichiers non configuré (Vercel Blob : BLOB_READ_WRITE_TOKEN).");
  },
  async urlSignee() {
    throw new Error("Stockage de fichiers non configuré.");
  },
  async supprimer() {
    throw new Error("Stockage de fichiers non configuré.");
  },
};
