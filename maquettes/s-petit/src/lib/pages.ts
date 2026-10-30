import { servicePages } from "./content";
import { zonePages } from "./zones";
import type { Page } from "./types";

export const allPages: Page[] = [...servicePages, ...zonePages];
export const pageByPath = (path: string) => allPages.find((p) => p.path === path)!;
