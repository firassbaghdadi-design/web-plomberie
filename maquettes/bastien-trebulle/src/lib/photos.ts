import files from "./photo-files.json";
import generated from "./photos.generated.json";
import type { PhotoSpec } from "./types";

type Manifest = {
  accent: string;
  logo: { src: string; width: number; height: number; usable: boolean } | null;
  hero: string | null;
  history: string | null;
  pages: Record<string, string[]>;
  pexels: Record<string, string | null>;
};

const m = generated as unknown as Manifest;
const pexelsFiles: Record<string, { id: number; title: string; alt: string }> = files.pexels;

export const ACCENT = m.accent || "#232f63";
export const LOGO = m.logo?.usable ? m.logo : null;

export type Photo = { src: string | null; alt: string; credit: "bt" | "pexels" | "none" };

/** Chantiers de couverture et de plomberie du site actuel : leurs photos alimentent les pages de chaque métier. */
const ROOF = ["quai-voltaire-notre-realisation", "etoile-couverture", "rue-de-luniversite", "rue-danton", "rue-saint-severin-notre-realisation", "rue-conti", "place-victor-hugo-notre-realisation", "rue-des-saints-peres-notre-realisation"];
const PLUMB = ["hotel-opera-richepanse", "plomberie-etoile", "quai-de-seine", "garancieres-notre-realisation", "rue-de-grenelle", "avenue-de-messine-notre-realisation"];

const pool = (slugs: string[]) => slugs.flatMap((s) => (m.pages[s] ?? []).slice(0, 3));
const pick = (list: string[], n: number) => (list.length ? list[n % list.length] : null);

const ALT = {
  couverture: "Chantier de couverture et de zinguerie de Bastien & Trebulle sur un immeuble parisien",
  plomberie: "Chantier de plomberie et de salle de bains de Bastien & Trebulle à Paris",
  hero: "Chantier de plomberie et de couverture de Bastien & Trebulle à Paris",
  histoire: "Bastien & Trebulle, cinq générations d'artisans plombiers et couvreurs à Paris",
};

/** Photo d'un thème : celle de l'entreprise si elle a été récupérée au build, sinon une photo Pexels, sinon un aplat légendé. */
export function photoFor({ theme, n = 0 }: PhotoSpec): Photo {
  if (theme === "hero") {
    const src = m.hero ?? pick(m.pages.accueil ?? [], 0);
    if (src) return { src, alt: ALT.hero, credit: "bt" };
  }
  if (theme === "histoire") {
    const src = m.history ?? pick(m.pages["notre-histoire"] ?? [], n);
    if (src) return { src, alt: ALT.histoire, credit: "bt" };
  }
  if (theme === "couverture" || theme === "plomberie") {
    const src = pick(pool(theme === "couverture" ? ROOF : PLUMB), n);
    if (src) return { src, alt: ALT[theme], credit: "bt" };
  }
  const key = theme === "compteur" ? "compteur" : theme === "immeubles" ? "immeubles" : "toits";
  const src = m.pexels?.[key] ?? null;
  return { src, alt: pexelsFiles[key]?.alt ?? "Plomberie et couverture à Paris", credit: src ? "pexels" : "none" };
}

/** Photos d'une réalisation du site actuel (par son identifiant de page). */
export function workPhotos(slug: string, limit = 3): Photo[] {
  return (m.pages[slug] ?? []).slice(0, limit).map((src) => ({ src, alt: "", credit: "bt" as const }));
}

export const pexelsCredits = Object.entries(pexelsFiles).map(([key, f]) => ({ key, ...f, used: Boolean(m.pexels?.[key]) }));
