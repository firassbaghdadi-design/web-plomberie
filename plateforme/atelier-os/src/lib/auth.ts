/** Cookie de session signé (HMAC-SHA256, Web Crypto : fonctionne dans le middleware). */
export const COOKIE = "atelier_session";
const DUREE = 60 * 60 * 24 * 30; // 30 jours

const enc = new TextEncoder();

function secret() {
  const s = process.env.SESSION_SECRET || process.env.ADMIN_PASSWORD;
  if (!s) throw new Error("SESSION_SECRET (ou ADMIN_PASSWORD) manquant");
  return s;
}

async function signer(donnee: string): Promise<string> {
  const cle = await crypto.subtle.importKey("raw", enc.encode(secret()), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", cle, enc.encode(donnee));
  return Array.from(new Uint8Array(sig), (b) => b.toString(16).padStart(2, "0")).join("");
}

/** Comparaison en temps constant. */
export function egal(a: string, b: string): boolean {
  const x = enc.encode(a);
  const y = enc.encode(b);
  let diff = x.length ^ y.length;
  for (let i = 0; i < Math.max(x.length, y.length); i++) diff |= (x[i] ?? 0) ^ (y[i] ?? 0);
  return diff === 0;
}

export async function creerSession(): Promise<{ valeur: string; duree: number }> {
  const exp = Math.floor(Date.now() / 1000) + DUREE;
  return { valeur: `${exp}.${await signer(String(exp))}`, duree: DUREE };
}

export async function sessionValide(valeur: string | undefined): Promise<boolean> {
  if (!valeur) return false;
  const [exp, sig] = valeur.split(".");
  if (!exp || !sig || Number(exp) < Date.now() / 1000) return false;
  return egal(sig, await signer(exp));
}

export function motDePasseValide(saisi: string): boolean {
  const attendu = process.env.ADMIN_PASSWORD;
  return Boolean(attendu) && egal(saisi, attendu!);
}

export function jetonValide(entete: string | null): boolean {
  const attendu = process.env.API_TOKEN;
  if (!attendu || !entete) return false;
  const m = /^Bearer\s+(.+)$/i.exec(entete.trim());
  return Boolean(m) && egal(m![1], attendu);
}
