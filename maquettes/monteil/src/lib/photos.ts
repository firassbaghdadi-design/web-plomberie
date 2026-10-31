import files from "./photo-files.json";
import generated from "./photos.generated.json";

type Manifest = {
  accent: string;
  logo: { src: string; width: number; height: number } | null;
  photos: Record<string, { src: string; width: number; height: number } | null>;
  pairs: Record<string, { before: string; after: string; width: number; height: number } | null>;
};

const m = generated as unknown as Manifest;
const alt = files.site.photos as Record<string, { alt: string }>;

export const ACCENT = m.accent || "#0a6f9e";
export const LOGO = m.logo;

/** Triplet « r g b » pour les variables CSS. */
const rgb = (hex: string) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
const mix = (c: number[], to: number, t: number) => c.map((v) => Math.round(v + (to - v) * t));
export const accentVars = (hex = ACCENT) => {
  const c = rgb(hex);
  return {
    "--accent": c.join(" "),
    "--accent-deep": mix(c, 0, 0.22).join(" "),
    "--accent-wash": mix(c, 255, 0.93).join(" "),
  } as Record<string, string>;
};

export const imgSrc = (key: string) => m.photos?.[key]?.src ?? null;
export const photoAlt = (key: string) => alt[key]?.alt ?? "Monteil & Cie";

export type Pair = { key: string; title: string; text: string; alt: string; before: string; after: string; ratio: number };
const pairInfo = files.site.pairs as Record<string, { title: string; text: string; alt: string }>;

/** Les comparateurs avant / après dont les deux images ont bien été récupérées. */
export const pairs: Pair[] = Object.entries(pairInfo)
  .map(([key, info]) => {
    const p = m.pairs?.[key];
    return p ? { key, ...info, before: p.before, after: p.after, ratio: p.width / p.height } : null;
  })
  .filter((p): p is Pair => Boolean(p));

export const pairByKey = (key: string) => pairs.find((p) => p.key === key);
export const allPairKeys = Object.keys(pairInfo);
