import files from "./photo-files.json";
import generated from "./photos.generated.json";

type CompanyPhoto = { key: string; src: string; file: string; alt: string; from: string; width: number; height: number };
type Manifest = {
  accent: string;
  logo: { src: string; width: number; height: number } | null;
  company: CompanyPhoto[];
  pexels: Record<string, string | null>;
  pairs: { before: string; after: string }[];
};

const m = generated as unknown as Manifest;
const pexelsFiles: Record<string, { id: number; title: string; alt: string }> = files.pexels;

export const ACCENT = m.accent || "#1d5c86";
export const LOGO = m.logo;
export const companyPhotos = m.company ?? [];
export const beforeAfter = (m.pairs ?? [])
  .map((p) => ({ before: companyPhotos.find((c) => c.key === p.before), after: companyPhotos.find((c) => c.key === p.after) }))
  .filter((p): p is { before: CompanyPhoto; after: CompanyPhoto } => Boolean(p.before && p.after));

export type Photo = { src: string | null; alt: string; credit: "spc" | "pexels" | "none" };

const KEYWORDS: Record<string, RegExp> = {
  couverture: /toit|couv|zinc|cord|ardoise|tuile|goutti|ch[eé]neau|velux|fen[eê]tre-de-toit|combles?|faitage|balcon|terrasson|hauteur/i,
  plomberie: /plomb|sanit|salle|bain|douche|wc|cuisine|chaudi|tuyau|robinet|lavabo|vasque|colonne|cuivre|ballon|chauffe/i,
  assainissement: /assain|curage|canalis|pompe|[eé]gout|relevage|d[eé]bouch|vid[eé]o|regard|collecteur/i,
  particuliers: /salle|bain|douche|cuisine|pmr|carrel/i,
};
const altOf = (c: CompanyPhoto, fallback: string) => (c.alt && c.alt.length > 6 ? c.alt : fallback);

/** Photo de l'entreprise pour un thème (mots-clés du nom de fichier et du texte alternatif), sinon la n-ième, sinon Pexels. */
export function photoFor(theme: string, n = 0, fallbackAlt = "Chantier de l'entreprise SPC"): Photo {
  const re = KEYWORDS[theme];
  const themed = re ? companyPhotos.filter((c) => re.test(`${c.file} ${c.alt}`)) : [];
  const pool = themed.length > n ? themed : companyPhotos;
  const c = pool.length ? pool[n % pool.length] : undefined;
  if (c) return { src: c.src, alt: altOf(c, fallbackAlt), credit: "spc" };
  const key = theme === "couverture" || n % 2 === 0 ? "couvreurs" : "couvreur";
  const src = m.pexels?.[key] ?? null;
  return { src, alt: pexelsFiles[key]?.alt ?? fallbackAlt, credit: src ? "pexels" : "none" };
}

/** Les photos de la galerie : celles de l'entreprise, à défaut les photos de repli. */
export function galleryPhotos(limit = 9): Photo[] {
  if (companyPhotos.length) return companyPhotos.slice(0, limit).map((c) => ({ src: c.src, alt: altOf(c, "Réalisation de l'entreprise SPC"), credit: "spc" }));
  return Object.keys(pexelsFiles).map((k) => ({ src: m.pexels?.[k] ?? null, alt: pexelsFiles[k].alt, credit: "pexels" as const }));
}

export const pexelsCredits = Object.entries(pexelsFiles).map(([key, f]) => ({ key, ...f, used: Boolean(m.pexels?.[key]) }));
