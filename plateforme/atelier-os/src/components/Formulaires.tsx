"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { EVENT_LABEL, FORMULES, FORMULE_INFO, METIERS, METIER_LABEL, SOURCES, STATUTS, STATUT_LABEL, type Formule, type Modele, type Prospect, type Statut } from "@/lib/types";
import { euros } from "@/lib/format";

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

export function useAction() {
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
          metier: v("metier"),
          source: v("source"),
          noteGoogle: v("noteGoogle"),
          avisGoogle: v("avisGoogle"),
          pointsFaibles: v("pointsFaibles"),
          prochaineAction: v("prochaineAction"),
          prochaineActionLe: v("prochaineActionLe"),
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
      <div>
        <label className="etiquette" htmlFor="metier">
          Métier
        </label>
        <select id="metier" name="metier" defaultValue={p?.metier ?? ""} className="champ">
          <option value="">Non renseigné</option>
          {METIERS.map((m) => (
            <option key={m} value={m}>
              {METIER_LABEL[m]}
            </option>
          ))}
        </select>
      </div>
      <Champ nom="dirigeant" label="Dirigeant" defaut={p?.dirigeant} />
      <Champ nom="emails" label="Adresses e-mail publiques" defaut={p?.emails.join(", ")} aide="Séparées par une virgule. Laisser vide si inconnue." type="text" />
      <Champ nom="telephone" label="Téléphone" defaut={p?.telephone} type="tel" />
      <Champ nom="ville" label="Ville" defaut={p?.ville ?? "Paris"} />
      <Champ nom="arrondissement" label="Arrondissement" defaut={p?.arrondissement} />
      <Champ nom="source" label="Source" defaut={p?.source} liste="sources" aide="D'où vient ce prospect." />
      <datalist id="sources">
        {SOURCES.map((s) => (
          <option key={s} value={s} />
        ))}
      </datalist>
      <div className="grid grid-cols-2 gap-3">
        <Champ nom="noteGoogle" label="Note Google" defaut={p?.noteGoogle?.toString().replace(".", ",")} type="text" mode="decimal" exemple="4,5" />
        <Champ nom="avisGoogle" label="Nombre d'avis" defaut={p?.avisGoogle?.toString()} type="text" mode="numeric" exemple="38" />
      </div>
      <Champ nom="siteActuel" label="Site actuel" defaut={p?.siteActuel} type="url" />
      <Champ nom="maquetteUrl" label="Lien de la maquette" defaut={p?.maquetteUrl} type="url" />
      <Champ nom="score" label="Score (sur 100)" defaut={p?.score?.toString()} type="number" />
      <Champ nom="offre" label="Offre à proposer" defaut={p?.offre} />
      <div className="sm:col-span-2">
        <label className="etiquette" htmlFor="pointsFaibles">
          Points faibles du site actuel
        </label>
        <textarea id="pointsFaibles" name="pointsFaibles" rows={3} defaultValue={p?.pointsFaibles} className="champ" placeholder="Pas adapté au mobile, pas de devis en ligne, lent…" />
      </div>
      <Champ nom="prochaineAction" label="Prochaine action" defaut={p?.prochaineAction} exemple="Rappeler pour le devis" />
      <Champ nom="prochaineActionLe" label="Pour le" defaut={p?.prochaineActionLe ?? ""} type="date" />
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

function Champ({
  nom,
  label,
  defaut,
  requis,
  aide,
  type = "text",
  mode,
  exemple,
  liste,
}: {
  nom: string;
  label: string;
  defaut?: string;
  requis?: boolean;
  aide?: string;
  type?: string;
  mode?: "decimal" | "numeric";
  exemple?: string;
  liste?: string;
}) {
  return (
    <div>
      <label className="etiquette" htmlFor={nom}>
        {label}
      </label>
      <input
        id={nom}
        name={nom}
        type={type}
        defaultValue={defaut ?? ""}
        required={requis}
        inputMode={mode ?? (type === "number" ? "numeric" : undefined)}
        min={type === "number" ? 0 : undefined}
        max={type === "number" ? 100 : undefined}
        placeholder={exemple}
        list={liste}
        className="champ"
        autoCapitalize="off"
      />
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

/* ----------------------------------------------------------------- offre et montants */

export function FormArgent({ prospect: p }: { prospect: Prospect }) {
  const { lancer, erreur, occupe } = useAction();
  const [formule, setFormule] = useState<Formule | "">(p.formule);
  const [devis, setDevis] = useState(p.montantDevis?.toString() ?? "");
  const [mensuel, setMensuel] = useState(p.montantMensuel?.toString() ?? "");
  const [signeLe, setSigneLe] = useState(p.signeLe ?? "");
  const [enregistre, setEnregistre] = useState(false);
  const choisir = (f: Formule) => {
    setFormule(f);
    const info = FORMULE_INFO[f];
    if (info.prix !== null) setDevis(String(info.prix));
    if (info.mensuel !== null) setMensuel(String(info.mensuel));
  };
  return (
    <form
      className="p-5"
      onSubmit={(e) => {
        e.preventDefault();
        setEnregistre(false);
        lancer(
          () => appel(`/api/v1/prospects/${p.id}`, "PATCH", { formule, montantDevis: devis, montantMensuel: mensuel, signeLe }),
          () => setEnregistre(true),
        );
      }}
    >
      <fieldset>
        <legend className="etiquette">Formule</legend>
        <div className="grid grid-cols-2 gap-2">
          {FORMULES.map((f) => {
            const info = FORMULE_INFO[f];
            const choisi = formule === f;
            return (
              <button
                key={f}
                type="button"
                aria-pressed={choisi}
                onClick={() => choisir(f)}
                className={`min-h-[60px] rounded-2xl px-3.5 py-2.5 text-left transition duration-200 active:scale-[0.98] ${
                  choisi ? "bg-encre text-carte" : "bg-creux text-encre hover:bg-trait"
                }`}
              >
                <span className="block text-[14.5px] font-medium">{info.label}</span>
                <span className={`block text-[12.5px] tabular-nums ${choisi ? "opacity-70" : "text-doux"}`}>
                  {info.prix !== null ? `${euros(info.prix)} + ${info.mensuel} €/mois` : "Montants libres"}
                </span>
              </button>
            );
          })}
        </div>
      </fieldset>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div>
          <label className="etiquette" htmlFor="montantDevis">
            Devis (€ HT)
          </label>
          <input id="montantDevis" value={devis} onChange={(e) => setDevis(e.target.value)} inputMode="decimal" placeholder="0" className="champ tabular-nums" />
        </div>
        <div>
          <label className="etiquette" htmlFor="montantMensuel">
            Mensuel (€ HT)
          </label>
          <input id="montantMensuel" value={mensuel} onChange={(e) => setMensuel(e.target.value)} inputMode="decimal" placeholder="0" className="champ tabular-nums" />
        </div>
        <div className="col-span-2">
          <label className="etiquette" htmlFor="signeLe">
            Date de signature
          </label>
          <input id="signeLe" type="date" value={signeLe} onChange={(e) => setSigneLe(e.target.value)} className="champ" />
          <p className="mt-1 text-[12px] text-pale">Remplie toute seule quand le prospect passe à « Signé ».</p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between gap-3">
        {erreur ? <Erreur texte={erreur} /> : <span className="text-[13px] text-doux">{enregistre && !occupe ? "Enregistré" : ""}</span>}
        <button className="btn btn-primaire btn-petit ml-auto" disabled={occupe}>
          Enregistrer
        </button>
      </div>
    </form>
  );
}

/* ----------------------------------------------------------------- réglages */

export function FormObjectif({ objectif }: { objectif: number }) {
  const { lancer, erreur, occupe } = useAction();
  const [valeur, setValeur] = useState(String(objectif));
  const [enregistre, setEnregistre] = useState(false);
  return (
    <form
      className="flex flex-wrap items-end gap-3 p-5"
      onSubmit={(e) => {
        e.preventDefault();
        setEnregistre(false);
        lancer(() => appel("/api/v1/reglages", "PATCH", { objectifMensuel: valeur }), () => setEnregistre(true));
      }}
    >
      <div className="min-w-0 flex-1">
        <label className="etiquette" htmlFor="objectifMensuel">
          Objectif de chiffre d&apos;affaires signé par mois (€ HT)
        </label>
        <input id="objectifMensuel" value={valeur} onChange={(e) => setValeur(e.target.value)} inputMode="decimal" className="champ tabular-nums" />
      </div>
      <button className="btn btn-primaire" disabled={occupe}>
        {enregistre && !occupe ? "Enregistré" : "Enregistrer"}
      </button>
      <div className="w-full">
        <Erreur texte={erreur} />
      </div>
    </form>
  );
}
