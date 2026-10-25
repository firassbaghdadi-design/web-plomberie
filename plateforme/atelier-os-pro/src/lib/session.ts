/**
 * Session : cookie httpOnly signé (HMAC-SHA256, Web Crypto — utilisable dans le middleware).
 * Contenu : utilisateur, organisation active, version de session, expiration.
 * La version est comparée en base à chaque requête : changer de mot de passe ou
 * désactiver un membre invalide immédiatement ses sessions.
 */
export const COOKIE_SESSION = "aos_session";
export const DUREE_SESSION = 60 * 60 * 24 * 30; // 30 jours

export interface ChargeSession {
  u: string; // utilisateur
  o: string; // organisation active
  v: number; // version de session
  exp: number; // secondes epoch
}

const enc = new TextEncoder();

function secret(): string {
  const s = process.env.SESSION_SECRET;
  if (s && s.length >= 32) return s;
  if (process.env.NODE_ENV === "production" && process.env.VERCEL) throw new Error("SESSION_SECRET manquant (32 caractères minimum).");
  return "secret-de-developpement-local-uniquement-ne-pas-utiliser";
}

const b64url = (b: Uint8Array) => {
  let s = "";
  for (const x of b) s += String.fromCharCode(x);
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
};
const deb64url = (s: string) => Uint8Array.from(atob(s.replace(/-/g, "+").replace(/_/g, "/")), (c) => c.charCodeAt(0));

async function signer(donnee: string): Promise<string> {
  const cle = await crypto.subtle.importKey("raw", enc.encode(secret()), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  return b64url(new Uint8Array(await crypto.subtle.sign("HMAC", cle, enc.encode(donnee))));
}

function egal(a: string, b: string): boolean {
  let diff = a.length ^ b.length;
  for (let i = 0; i < Math.max(a.length, b.length); i++) diff |= (a.charCodeAt(i) || 0) ^ (b.charCodeAt(i) || 0);
  return diff === 0;
}

export async function signerSession(p: Omit<ChargeSession, "exp">): Promise<string> {
  const charge = b64url(enc.encode(JSON.stringify({ ...p, exp: Math.floor(Date.now() / 1000) + DUREE_SESSION })));
  return `${charge}.${await signer(charge)}`;
}

export async function lireSession(valeur: string | undefined | null): Promise<ChargeSession | null> {
  if (!valeur) return null;
  const [charge, sig] = valeur.split(".");
  if (!charge || !sig || !egal(sig, await signer(charge))) return null;
  try {
    const p = JSON.parse(new TextDecoder().decode(deb64url(charge))) as ChargeSession;
    if (typeof p.u !== "string" || typeof p.o !== "string" || p.exp < Date.now() / 1000) return null;
    return p;
  } catch {
    return null;
  }
}

export const optionsCookie = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
  maxAge: DUREE_SESSION,
};
