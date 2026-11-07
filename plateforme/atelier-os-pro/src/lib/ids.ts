import { randomBytes } from "node:crypto";

const ALPHABET = "0123456789abcdefghjkmnpqrstvwxyz"; // base32 Crockford, sans ambiguïté

/** Identifiant aléatoire préfixé, lisible dans l'API : `cli_8x2k…`. */
export function nouvelId(prefixe: string, longueur = 20): string {
  const octets = randomBytes(longueur);
  let s = "";
  for (let i = 0; i < longueur; i++) s += ALPHABET[octets[i] % 32];
  return `${prefixe}_${s}`;
}

export const PREFIXES = {
  organisations: "org",
  utilisateurs: "usr",
  membres: "mbr",
  invitations: "inv",
  jetons: "jet",
  clients: "cli",
  contacts: "ctc",
  sites: "sit",
  chantiers: "chn",
  notes: "not",
  taches: "tch",
  pieces_jointes: "pj",
  etiquettes: "eti",
  activites: "act",
} as const;
