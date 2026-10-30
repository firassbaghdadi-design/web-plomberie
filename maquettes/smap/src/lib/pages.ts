import { originalPages } from "./content";
import { localPages } from "./local";
import type { Page } from "./types";

export const allPages: Page[] = [...originalPages, ...localPages];
export const pageByPath = (path: string) => allPages.find((p) => p.path === path)!;
