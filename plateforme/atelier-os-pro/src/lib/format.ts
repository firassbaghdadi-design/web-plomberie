export const TYPE_CLIENT_LABEL: Record<string, string> = { particulier: "Particulier", professionnel: "Professionnel", syndic: "Syndic", bailleur: "Bailleur" };
export const STATUT_CHANTIER_LABEL: Record<string, string> = {
  a_qualifier: "À qualifier",
  en_devis: "En devis",
  planifie: "Planifié",
  en_cours: "En cours",
  en_pause: "En pause",
  termine: "Terminé",
  annule: "Annulé",
};
export const ROLE_LABEL: Record<string, string> = { dirigeant: "Dirigeant", charge_affaires: "Chargé d'affaires", adv: "ADV" };

const TZ = "Europe/Paris";

export const euros = (centimes: number | null | undefined) =>
  centimes === null || centimes === undefined ? "—" : new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(centimes / 100);

export function jourCourt(iso: string | null | undefined) {
  if (!iso) return "";
  return new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short", timeZone: "UTC" }).format(new Date(`${iso}T12:00:00Z`));
}

export function jourLong(d: Date = new Date()) {
  const s = new Intl.DateTimeFormat("fr-FR", { weekday: "long", day: "numeric", month: "long", timeZone: TZ }).format(d);
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function aujourdhuiParis(d = new Date()) {
  return new Intl.DateTimeFormat("en-CA", { timeZone: TZ }).format(d);
}

/** « il y a 3 h », « hier », « 12 mars ». */
export function depuis(d: Date | string) {
  const date = typeof d === "string" ? new Date(d) : d;
  const s = Math.round((Date.now() - date.getTime()) / 1000);
  if (s < 60) return "à l'instant";
  if (s < 3600) return `il y a ${Math.floor(s / 60)} min`;
  if (s < 86400) return `il y a ${Math.floor(s / 3600)} h`;
  if (s < 2 * 86400) return "hier";
  if (s < 7 * 86400) return `il y a ${Math.floor(s / 86400)} j`;
  return new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "short", timeZone: TZ }).format(date);
}

export function echeanceLibelle(iso: string | null, aujourdhui = aujourdhuiParis()) {
  if (!iso) return "";
  if (iso === aujourdhui) return "Aujourd'hui";
  const j = Math.round((new Date(`${iso}T12:00:00Z`).getTime() - new Date(`${aujourdhui}T12:00:00Z`).getTime()) / 86400_000);
  if (j === 1) return "Demain";
  if (j === -1) return "Hier";
  if (j < 0) return `En retard · ${jourCourt(iso)}`;
  return jourCourt(iso);
}

export const initiales = (nom: string) =>
  nom
    .split(/[\s-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((m) => m[0]!.toUpperCase())
    .join("");

export const centimesEnEuros = (c: number | null | undefined) => (c === null || c === undefined ? "" : String(c / 100).replace(".", ","));
