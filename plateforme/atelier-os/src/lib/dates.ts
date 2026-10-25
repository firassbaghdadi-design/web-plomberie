const TZ = "Europe/Paris";

const fmt = new Intl.DateTimeFormat("en-GB", {
  timeZone: TZ,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  weekday: "short",
  hourCycle: "h23",
});

export interface PartiesParis {
  jour: string; // AAAA-MM-JJ
  heure: number;
  minute: number;
  /** 1 = lundi ... 7 = dimanche */
  jourSemaine: number;
}

const WD: Record<string, number> = { Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6, Sun: 7 };

export function partiesParis(d: Date = new Date()): PartiesParis {
  const p: Record<string, string> = {};
  for (const x of fmt.formatToParts(d)) p[x.type] = x.value;
  return {
    jour: `${p.year}-${p.month}-${p.day}`,
    heure: Number(p.hour),
    minute: Number(p.minute),
    jourSemaine: WD[p.weekday] ?? 1,
  };
}

export const jourParis = (d: Date | string = new Date()) => partiesParis(typeof d === "string" ? new Date(d) : d).jour;

export function ajouterJours(jour: string, n: number): string {
  const [y, m, d] = jour.split("-").map(Number);
  const t = new Date(Date.UTC(y, m - 1, d + n));
  return t.toISOString().slice(0, 10);
}

/** Jour de semaine (1 = lundi) d'un jour AAAA-MM-JJ */
export function jourSemaineDe(jour: string): number {
  const [y, m, d] = jour.split("-").map(Number);
  const w = new Date(Date.UTC(y, m - 1, d)).getUTCDay();
  return w === 0 ? 7 : w;
}

export function debutDeSemaine(jour: string): string {
  return ajouterJours(jour, -(jourSemaineDe(jour) - 1));
}

/** Décale vers le prochain jour ouvré (lundi à vendredi) si besoin. */
export function prochainJourOuvre(jour: string): string {
  let j = jour;
  while (jourSemaineDe(j) > 5) j = ajouterJours(j, 1);
  return j;
}

export function formatJour(jour: string): string {
  const [y, m, d] = jour.split("-").map(Number);
  return new Intl.DateTimeFormat("fr-FR", { timeZone: "UTC", weekday: "short", day: "numeric", month: "short" }).format(
    new Date(Date.UTC(y, m - 1, d)),
  );
}

export function formatDateHeure(iso: string): string {
  return new Intl.DateTimeFormat("fr-FR", {
    timeZone: TZ,
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(iso));
}

export function formatRelatif(iso: string, maintenant: Date = new Date()): string {
  const diff = (maintenant.getTime() - new Date(iso).getTime()) / 1000;
  if (diff < 60) return "à l'instant";
  if (diff < 3600) return `il y a ${Math.floor(diff / 60)} min`;
  if (diff < 86400) return `il y a ${Math.floor(diff / 3600)} h`;
  if (diff < 86400 * 7) return `il y a ${Math.floor(diff / 86400)} j`;
  return formatDateHeure(iso);
}
