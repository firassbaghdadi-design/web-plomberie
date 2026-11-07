import { originalPages } from "./content";
import { localPages } from "./local";
import original from "./original.generated.json";
import type { Page } from "./types";

/** Listes de prestations relevées au build sur le site actuel ; à défaut, la liste écrite dans content.ts (ou aucune). */
const lists = original as Record<string, string[] | undefined>;
const withOriginal = (p: Page): Page => ({
  ...p,
  sections: p.sections.map((s) => (s.originalList && lists[s.originalList]?.length ? { ...s, list: lists[s.originalList] } : s)),
});

export const allPages: Page[] = [...originalPages, ...localPages].map(withOriginal);
export const pageByPath = (path: string) => allPages.find((p) => p.path === path)!;
