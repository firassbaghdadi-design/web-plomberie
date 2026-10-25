import { STATUT_LABEL, type Statut, STATUTS } from "@/lib/types";

export function PastilleStatut({ statut }: { statut: Statut }) {
  const i = STATUTS.indexOf(statut);
  const couleur = statut === "signe" ? "bg-terre" : statut === "perdu" ? "bg-pale/60" : "bg-encre";
  const opacite = statut === "signe" || statut === "perdu" ? 1 : 0.18 + (i / 6) * 0.6;
  return (
    <span className="pastille whitespace-nowrap">
      <span className={`h-1.5 w-1.5 rounded-full ${couleur}`} style={{ opacity: opacite }} />
      {STATUT_LABEL[statut]}
    </span>
  );
}

export function Chiffre({ valeur, label, accent = false, compact = false }: { valeur: number | string; label: string; accent?: boolean; compact?: boolean }) {
  return (
    <div className="min-w-0">
      <div className={`${compact ? "text-[24px] sm:text-[28px]" : "text-[30px]"} whitespace-nowrap font-semibold leading-none tracking-tight tabular-nums ${accent ? "text-terre" : ""}`}>{valeur}</div>
      <div className="mt-1.5 text-[12.5px] leading-tight text-doux">{label}</div>
    </div>
  );
}

export function Vide({ children }: { children: React.ReactNode }) {
  return <p className="px-5 py-8 text-center text-[14px] text-doux">{children}</p>;
}

export function Titre({ children, droite }: { children: React.ReactNode; droite?: React.ReactNode }) {
  return (
    <div className="mb-3 mt-9 flex items-baseline justify-between px-1 first:mt-0">
      <h2 className="text-[19px] font-semibold tracking-tight">{children}</h2>
      {droite}
    </div>
  );
}

export function Progression({ valeur, label }: { valeur: number; label: string }) {
  const pct = Math.max(0, Math.min(1, valeur));
  return (
    <div className="h-2 overflow-hidden rounded-full bg-creux" role="progressbar" aria-label={label} aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(pct * 100)}>
      <div className="h-full rounded-full bg-terre transition-all duration-500" style={{ width: `${pct * 100}%` }} />
    </div>
  );
}

/** Note Google : étoiles pleines, demi et vides, puis note et nombre d'avis. */
export function Etoiles({ note, avis }: { note: number; avis: number | null }) {
  const pleines = Math.round(note * 2) / 2;
  return (
    <span className="inline-flex items-center gap-2" aria-label={`${note.toLocaleString("fr-FR")} sur 5${avis !== null ? `, ${avis} avis` : ""}`}>
      <span className="relative inline-block text-[14px] leading-none tracking-[1px]" aria-hidden="true">
        <span className="text-trait">★★★★★</span>
        <span className="absolute inset-0 overflow-hidden whitespace-nowrap text-terre" style={{ width: `${(pleines / 5) * 100}%` }}>
          ★★★★★
        </span>
      </span>
      <span className="tabular-nums">
        {note.toLocaleString("fr-FR", { minimumFractionDigits: 1 })}
        {avis !== null && <span className="text-doux"> · {avis} avis</span>}
      </span>
    </span>
  );
}
