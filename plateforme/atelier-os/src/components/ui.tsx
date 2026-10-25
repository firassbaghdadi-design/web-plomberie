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

export function Chiffre({ valeur, label, accent = false }: { valeur: number | string; label: string; accent?: boolean }) {
  return (
    <div className="min-w-0">
      <div className={`text-[30px] font-semibold leading-none tracking-tight tabular-nums ${accent ? "text-terre" : ""}`}>{valeur}</div>
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
