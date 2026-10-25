"use client";

import Link from "next/link";
import { useState } from "react";
import { appel, useAction } from "./Formulaires";
import { Icone } from "./Icone";

interface Ligne {
  ligne: number;
  entreprise: string;
  emails: string[];
  etat: "nouveau" | "doublon" | "erreur";
  motif: string;
  doublonDe?: { id: string; entreprise: string };
}
interface Analyse {
  apercu: boolean;
  nouveaux: number;
  doublons: number;
  erreurs: number;
  importes?: number;
  colonnesIgnorees: string[];
  lignes: Ligne[];
}

const ETAT = { nouveau: "Nouveau", doublon: "Doublon", erreur: "Erreur" } as const;

export function ImportCsv() {
  const { lancer, erreur, occupe } = useAction();
  const [csv, setCsv] = useState("");
  const [nomFichier, setNomFichier] = useState("");
  const [analyse, setAnalyse] = useState<Analyse | null>(null);
  const [fait, setFait] = useState<Analyse | null>(null);

  const apercu = (texte = csv) =>
    lancer(async () => {
      setFait(null);
      setAnalyse((await appel("/api/v1/prospects/import", "POST", { csv: texte, apercu: true })) as Analyse);
    });

  return (
    <div className="p-5">
      <div className="flex flex-wrap items-center gap-2">
        <label className="btn btn-petit cursor-pointer">
          <Icone nom="plus" className="h-4 w-4" />
          Choisir un fichier CSV
          <input
            type="file"
            accept=".csv,text/csv,text/plain"
            className="sr-only"
            data-import-fichier
            onChange={async (e) => {
              const f = e.target.files?.[0];
              if (!f) return;
              const texte = await f.text();
              setNomFichier(f.name);
              setCsv(texte);
              apercu(texte);
            }}
          />
        </label>
        {nomFichier && <span className="truncate text-[13.5px] text-doux">{nomFichier}</span>}
      </div>
      <details className="mt-3">
        <summary className="btn-texte cursor-pointer">Ou coller le contenu</summary>
        <textarea
          value={csv}
          onChange={(e) => {
            setCsv(e.target.value);
            setAnalyse(null);
          }}
          rows={5}
          placeholder={"entreprise;dirigeant;emails;telephone;ville\nDupont Plomberie;J. Dupont;contact@exemple.fr;01 23 45 67 89;Paris"}
          className="champ mt-2 font-mono text-[13px]"
          aria-label="Contenu CSV"
        />
        <button type="button" className="btn btn-petit mt-2" disabled={occupe || !csv.trim()} onClick={() => apercu()}>
          Voir l&apos;aperçu
        </button>
      </details>
      {erreur && <p className="mt-3 text-[13.5px] text-terre">{erreur}</p>}

      {fait && (
        <p className="mt-4 rounded-2xl bg-creux px-4 py-3 text-[14px]" data-import-resultat>
          {fait.importes} prospect{fait.importes === 1 ? "" : "s"} importé{fait.importes === 1 ? "" : "s"}
          {fait.doublons ? `, ${fait.doublons} doublon${fait.doublons > 1 ? "s" : ""} ignoré${fait.doublons > 1 ? "s" : ""}` : ""}
          {fait.erreurs ? `, ${fait.erreurs} ligne${fait.erreurs > 1 ? "s" : ""} en erreur` : ""}.
        </p>
      )}

      {analyse && !fait && (
        <div className="mt-5" data-import-apercu>
          <p className="text-[14px]">
            <span className="font-medium">{analyse.nouveaux} nouveau{analyse.nouveaux > 1 ? "x" : ""}</span>
            <span className="text-doux">
              {" "}
              · {analyse.doublons} doublon{analyse.doublons > 1 ? "s" : ""} · {analyse.erreurs} erreur{analyse.erreurs > 1 ? "s" : ""}
            </span>
          </p>
          {analyse.colonnesIgnorees.length > 0 && <p className="mt-1 text-[12.5px] text-pale">Colonnes ignorées : {analyse.colonnesIgnorees.join(", ")}</p>}
          <ul className="mt-3 max-h-[360px] overflow-y-auto rounded-2xl bg-creux/60">
            {analyse.lignes.map((l) => (
              <li key={l.ligne} className="flex items-start gap-3 border-t border-trait/60 px-4 py-2.5 text-[14px] first:border-t-0">
                <span className="w-8 shrink-0 pt-px text-[12px] tabular-nums text-pale">{l.ligne}</span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate font-medium">{l.entreprise || "Sans nom"}</span>
                  {(l.motif || l.emails.length > 0) && (
                    <span className="block truncate text-[12.5px] text-doux">
                      {l.etat === "doublon" && l.doublonDe ? (
                        <>
                          {l.motif} :{" "}
                          <Link href={`/prospects/${l.doublonDe.id}`} className="text-terre">
                            {l.doublonDe.entreprise}
                          </Link>
                        </>
                      ) : (
                        l.motif || l.emails.join(", ")
                      )}
                    </span>
                  )}
                </span>
                <span className={`pastille shrink-0 ${l.etat === "nouveau" ? "!text-encre" : l.etat === "erreur" ? "!text-terre" : ""}`}>{ETAT[l.etat]}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="btn btn-primaire"
              disabled={occupe || analyse.nouveaux === 0}
              onClick={() =>
                lancer(async () => {
                  const r = (await appel("/api/v1/prospects/import", "POST", { csv, apercu: false })) as Analyse;
                  setFait(r);
                  setAnalyse(null);
                })
              }
            >
              Importer {analyse.nouveaux} prospect{analyse.nouveaux > 1 ? "s" : ""}
            </button>
            <button type="button" className="btn-texte" onClick={() => setAnalyse(null)}>
              Annuler
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
