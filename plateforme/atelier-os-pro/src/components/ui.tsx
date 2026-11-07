import Link from "next/link";
import { Icone } from "./Icone";
import { STATUT_CHANTIER_LABEL, TYPE_CLIENT_LABEL, initiales } from "@/lib/format";

export function Chiffre({ valeur, label, accent = false, href }: { valeur: number | string; label: string; accent?: boolean; href?: string }) {
  const c = (
    <div className="min-w-0">
      <div className={`whitespace-nowrap text-[30px] font-semibold leading-none tracking-tight tabular-nums ${accent ? "text-terre" : ""}`}>{valeur}</div>
      <div className="mt-1.5 text-[12.5px] leading-tight text-doux">{label}</div>
    </div>
  );
  return href ? (
    <Link href={href} className="-m-2 rounded-2xl p-2 transition-colors hover:bg-creux/60">
      {c}
    </Link>
  ) : (
    c
  );
}

export function Vide({ children, action }: { children: React.ReactNode; action?: React.ReactNode }) {
  return (
    <div className="px-5 py-8 text-center">
      <p className="text-[14px] text-doux">{children}</p>
      {action && <div className="mt-3">{action}</div>}
    </div>
  );
}

export function Titre({ children, droite, id }: { children: React.ReactNode; droite?: React.ReactNode; id?: string }) {
  return (
    <div className="mb-3 mt-9 flex items-baseline justify-between gap-3 px-1 first:mt-0">
      <h2 id={id} className="text-[19px] font-semibold tracking-tight">
        {children}
      </h2>
      {droite}
    </div>
  );
}

export function EnTete({ surTitre, titre, action, retour }: { surTitre?: React.ReactNode; titre: React.ReactNode; action?: React.ReactNode; retour?: { href: string; label: string } }) {
  return (
    <div className="mb-7">
      {retour && (
        <Link href={retour.href} className="btn-texte -ml-1 mb-2 gap-0.5">
          <Icone nom="retour" className="h-[18px] w-[18px]" />
          {retour.label}
        </Link>
      )}
      <div className="flex items-end justify-between gap-4">
        <div className="min-w-0">
          {surTitre && <p className="sur-titre mb-1.5">{surTitre}</p>}
          <h1 className="titre-page break-words">{titre}</h1>
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
    </div>
  );
}

const TEINTE_STATUT: Record<string, string> = {
  a_qualifier: "bg-pale",
  en_devis: "bg-[#F5A524]",
  planifie: "bg-[#3E8EF7]",
  en_cours: "bg-terre",
  en_pause: "bg-doux",
  termine: "bg-[#30A46C]",
  annule: "bg-pale/50",
};
export function PastilleStatut({ statut }: { statut: string }) {
  return (
    <span className="pastille whitespace-nowrap">
      <span className={`h-1.5 w-1.5 rounded-full ${TEINTE_STATUT[statut] ?? "bg-pale"}`} />
      {STATUT_CHANTIER_LABEL[statut] ?? statut}
    </span>
  );
}

export function PastilleType({ type }: { type: string }) {
  return <span className="pastille whitespace-nowrap">{TYPE_CLIENT_LABEL[type] ?? type}</span>;
}

export function Etiquette({ nom, couleur }: { nom: string; couleur: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-[3px] text-[12px] font-medium" style={{ backgroundColor: `${couleur}1f`, color: couleur }}>
      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: couleur }} />
      {nom}
    </span>
  );
}

export function Avatar({ nom, taille = 36, className = "" }: { nom: string; taille?: number; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex shrink-0 items-center justify-center rounded-full bg-creux font-semibold text-doux ${className}`}
      style={{ width: taille, height: taille, fontSize: Math.round(taille * 0.36) }}
    >
      {initiales(nom) || "?"}
    </span>
  );
}

export function Carte({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`carte overflow-hidden ${className}`}>{children}</div>;
}

export function Champ({ label, nom, children, aide }: { label: string; nom?: string; children: React.ReactNode; aide?: string }) {
  return (
    <div>
      <label className="etiquette" htmlFor={nom}>
        {label}
      </label>
      {children}
      {aide && <p className="mt-1.5 text-[12.5px] text-pale">{aide}</p>}
    </div>
  );
}

export function Bientot({ className = "" }: { className?: string }) {
  return <span className={`rounded-full bg-creux px-2 py-[1px] text-[10.5px] font-semibold uppercase tracking-[0.06em] text-pale ${className}`}>Bientôt</span>;
}
