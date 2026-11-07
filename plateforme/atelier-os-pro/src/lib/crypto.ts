import { createHash, randomBytes, scrypt as scryptCb, timingSafeEqual } from "node:crypto";
import { promisify } from "node:util";

const scrypt = promisify(scryptCb) as (mdp: string, sel: Buffer, long: number, opts: object) => Promise<Buffer>;
const N = 16384, R = 8, P = 1, LONG = 64;

/** Hash de mot de passe scrypt : `scrypt$N$r$p$sel$hash` (base64url). */
export async function hacherMotDePasse(mdp: string): Promise<string> {
  const sel = randomBytes(16);
  const h = await scrypt(mdp.normalize("NFKC"), sel, LONG, { N, r: R, p: P, maxmem: 64 * 1024 * 1024 });
  return `scrypt$${N}$${R}$${P}$${sel.toString("base64url")}$${h.toString("base64url")}`;
}

export async function verifierMotDePasse(mdp: string, stocke: string | null | undefined): Promise<boolean> {
  if (!stocke) return false;
  const [algo, n, r, p, sel, hash] = stocke.split("$");
  if (algo !== "scrypt" || !sel || !hash) return false;
  const attendu = Buffer.from(hash, "base64url");
  const h = await scrypt(mdp.normalize("NFKC"), Buffer.from(sel, "base64url"), attendu.length, {
    N: Number(n),
    r: Number(r),
    p: Number(p),
    maxmem: 64 * 1024 * 1024,
  });
  return h.length === attendu.length && timingSafeEqual(h, attendu);
}

export const sha256 = (s: string) => createHash("sha256").update(s).digest("hex");
export const aleatoire = (octets = 32) => randomBytes(octets).toString("base64url");
