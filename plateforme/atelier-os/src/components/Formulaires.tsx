"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { EVENT_LABEL, STATUTS, STATUT_LABEL, type Modele, type Prospect, type Statut } from "@/lib/types";

export async function appel(chemin: string, methode: string, corps?: unknown) {
  const r = await fetch(chemin, {
    method: methode,
    headers: corps ? { "Content-Type": "application/json" } : undefined,
    body: corps ? JSON.stringify(corps) : undefined,
  });
  const j = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(j.erreur ?? "Une erreur est survenue.");
  return j;
}

function useAction() {
  const router = useRouter();
  const [attente, demarrer] = useTransition();
  const [erreur, setErreur] = useState("");
  const [occupe, setOccupe] = useState(false);
  const lancer = async (fn: () => Promise<unknown>, apres?: () => void) => {
    setErreur("");
    setOccupe(true);
    try {
      await fn();
      apres?.();
      demarrer(() => router.refresh());
    } catch (e) {
      setErreur(e instanceof Error ? e.message : "Erreur");
    } finally {
      setOccupe(false);
    }
  };
  return { lancer, erreur, occupe: occupe || attente, router };
}

const Erreur = ({ texte }: { texte: string }) => (texte ? <p className="mt-2 text-[13.5px] text-terre">{texte}</p> : null);

/* ----------------------------------------------------------------- note, appel, rendez-vous... */

const TYPES_SAISIE = ["note", "appel", "reponse", "rendez_vous", "devis", "signature"] as const;

export function AjoutEvenement({ prospectId }: { prospectId: string }) {
  const [type, setType] = useState<(typeof TYPES_SAISIE)[number]>("note");
  const [detail, setDetail] = useState("");
  const { lancer, erreur, occupe } = useAction();
  return (
    <form
      className="p-5"
      onSubmit={(e) => {
        e.preventDefault();
        lancer(
          () => appel(`/api/v1/prospects/${prospectId}/evenements`, "POST", { type, detail }),
          () => setDetail(""),
        );
      }}
    >
      <div className="defile-x -mx-5 mb-4 flex gap-2 overflow-x-auto px-5">
        {TYPES_SAISIE.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setType(t)}
            className={`min-h-[36px] shrink-0 rounded-full px-4 text-[14px] font-medium transition-colors duration-200 ${
              type === t ? "bg-encre text-carte" : "bg-creux text-doux hover:text-encre"
            }`}
          >
            {t === "reponse" ? "Réponse" : EVENT_LABEL[t]}
          </button>
        ))}
      </div>
      <label className="sr-only" htmlFor="detail">
        Détail
      </label>
      <textarea
        id="detail"
        value={detail}
        onChange={(e) => setDetail(e.target.value)}
        rows={3}
        placeholder={type === "appel" ? "Ce qui s'est dit au téléphone…" : type === "rendez_vous" ? "Jour, heure, lieu…" : "Écrire ici…"}
        className="champ"
      />
      <div className="mt-3 flex items-center justify-between">
        <Erreur texte={erreur} />
        <button className="btn btn-primaire btn-petit ml-auto" disabled={occupe}>
          Ajouter
        </button>
      </div>
    </form>
  );
}

/* ----------------------------------------------------------------- étape */

export function ChoixStatut({ id, statut }: { id: string; statut: Statut }) {
  const { lancer, erreur, occupe } = useAction();
  return (
    <div>
      <label className="sr-only" htmlFor="statut">
        Étape
      </label>
      <select
        id="statut"
        value={statut}
        disabled={occupe}
        onChange={(e) => lancer(() => appel(`/api/v1/prospects/${id}`, "PATCH", { statut: e.target.value }))}
        className="champ !min-h-[40px] w-auto cursor-pointer appearance-none pr-9 text-[14px] font-medium"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 12px center",
          backgroundSize: "16px",
        }}
      >
        {STATUTS.map((s) => (
          <option key={s} value={s}>
            {STATUT_LABEL[s]}
          </option>
        ))}
      </select>
      <Erreur texte={erreur} />
    </div>
  );
}

/* ----------------------------------------------------------------- fiche prospect (création et modification) */

export function FormProspect({ prospect }: { prospect?: Prospect }) {
  const { lancer, erreur, occupe, router } = useAction();
  const p = prospect;
  return (
    <form
      className="grid gap-4 p-5 sm:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();
        const f = new FormData(e.currentTarget);
        const v = (k: string) => String(f.get(k) ?? "");
        const donnees = {
          entreprise: v("entreprise"),
          dirigeant: v("dirigeant"),
          emails: v("emails"),
          telephone: v("telephone"),
          ville: v("ville"),
          arrondissement: v("arrondissement"),
          siteActuel: v("siteActuel"),
          maquetteUrl: v("maquetteUrl"),
          score: v("score"),
          offre: v("offre"),
          notes: v("notes"),
        };
        if (p) lancer(() => appel(`/api/v1/prospects/${p.id}`, "PATCH", donnees));
        else
          lancer(async () => {
            const j = await appel("/api/v1/prospects", "POST", donnees);
            router.push(`/prospects/${j.prospect.id}`);
          });
      }}
    >
      <Champ nom="entreprise" label="Entreprise" defaut={p?.entreprise} requis />
      <Champ nom="dirigeant" label="Dirigeant" defaut={p?.dirigeant} />
      <Champ nom="emails" label="Adresses e-mail publiques" defaut={p?.emails.join(", ")} aide="Séparées par une virgule. Laisser vide si inconnue." type="text" />
      <Champ nom="telephone" label="Téléphone" defaut={p?.telephone} type="tel" />
      <Champ nom="ville" label="Ville" defaut={p?.ville ?? "Paris"} />
      <Champ nom="arrondissement" label="Arrondissement" defaut={p?.arrondissement} />
      <Champ nom="siteActuel" label="Site actuel" defaut={p?.siteActuel} type="url" />
      <Champ nom="maquetteUrl" label="Lien de la maquette" defaut={p?.maquetteUrl} type="url" />
      <Champ nom="score" label="Score (sur 100)" defaut={p?.score?.toString()} type="number" />
      <Champ nom="offre" label="Offre à proposer" defaut={p?.offre} />
      <div className="sm:col-span-2">
        <label className="etiquette" htmlFor="notes">
          Notes
        </label>
        <textarea id="notes" name="notes" rows={5} defaultValue={p?.notes} className="champ" />
      </div>
      <div className="flex items-center justify-between sm:col-span-2">
        <Erreur texte={erreur} />
        <button className="btn btn-primaire ml-auto" disabled={occupe}>
          {p ? "Enregistrer" : "Créer le prospect"}
        </button>
      </div>
    </form>
  );
}

function Champ({ nom, label, defaut, requis, aide, type = "text" }: { nom: string; label: string; defaut?: string; requis?: boolean; aide?: string; type?: string }) {
  return (
    <div>
      <label className="etiquette" htmlFor={nom}>
        {label}
      </label>
      <input id={nom} name={nom} type={type} defaultValue={defaut ?? ""} required={requis} inputMode={type === "number" ? "numeric" : undefined} min={type === "number" ? 0 : undefined} max={type === "number" ? 100 : undefined} className="champ" autoCapitalize="off" />
      {aide && <p className="mt-1 text-[12px] text-pale">{aide}</p>}
    </div>
  );
}

/* ----------------------------------------------------------------- e-mails */

export function PreparerEmail({ prospectId, modeles }: { prospectId: string; modeles: Modele[] }) {
  const [modeleId, setModeleId] = useState(modeles[0]?.id ?? "");
  const { lancer, erreur, occupe } = useAction();
  return (
    <div className="p-5">
      <div className="flex gap-2">
        <select value={modeleId} onChange={(e) => setModeleId(e.target.value)} className="champ !min-h-[40px] flex-1 text-[14px]" aria-label="Modèle">
          {modeles.map((m) => (
            <option key={m.id} value={m.id}>
              {m.numero ? `${m.numero}. ` : ""}
              {m.nom}
            </option>
          ))}
        </select>
        <button className="btn btn-petit !min-h-[40px]" disabled={occupe} onClick={() => lancer(() => appel("/api/v1/emails", "POST", { prospectId, modeleId }))}>
          Préparer
        </button>
      </div>
      <Erreur texte={erreur} />
    </div>
  );
}

export function BoutonApi({
  chemin,
  methode = "POST",
  label,
  confirmation,
  redirection,
  donnees,
  className = "btn-texte",
}: {
  chemin: string;
  methode?: string;
  label: string;
  confirmation?: string;
  redirection?: string;
  donnees?: unknown;
  className?: string;
}) {
  const { lancer, erreur, occupe, router } = useAction();
  return (
    <span>
      <button
        className={className}
        disabled={occupe}
        onClick={() => {
          if (confirmation && !window.confirm(confirmation)) return;
          lancer(
            () => appel(chemin, methode, donnees),
            () => redirection && router.push(redirection),
          );
        }}
      >
        {label}
      </button>
      <Erreur texte={erreur} />
    </span>
  );
}

export function Copier({ texte, label = "Copier" }: { texte: string; label?: string }) {
  const [fait, setFait] = useState(false);
  return (
    <button
      className="btn-texte"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(texte);
          setFait(true);
          setTimeout(() => setFait(false), 1600);
        } catch {
          /* presse-papiers indisponible */
        }
      }}
    >
      {fait ? "Copié" : label}
    </button>
  );
}

export function Deconnexion() {
  return (
    <form action="/api/logout" method="post">
      <button className="btn w-full">Se déconnecter</button>
    </form>
  );
}
