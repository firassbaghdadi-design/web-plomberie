"use client";

import { useState } from "react";
import { GENRES_AGENDA, GENRE_AGENDA_LABEL, type GenreAgenda } from "@/lib/types";
import { BoutonApi, appel, useAction } from "./Formulaires";
import { Icone } from "./Icone";

interface ChoixProspect {
  id: string;
  entreprise: string;
}

/** Ajout d'un rendez-vous ou d'un rappel. Jour et heure en heure de Paris. */
export function FormAgenda({
  prospects,
  prospectId,
  jourDefaut,
  heureDefaut,
  ouvert = false,
}: {
  prospects?: ChoixProspect[];
  prospectId?: string;
  jourDefaut: string;
  heureDefaut: string;
  ouvert?: boolean;
}) {
  const { lancer, erreur, occupe } = useAction();
  const [visible, setVisible] = useState(ouvert);
  const [genre, setGenre] = useState<GenreAgenda>("rendez_vous");
  const [cle, setCle] = useState(0);

  if (!visible)
    return (
      <div className="p-5">
        <button type="button" className="btn btn-petit" onClick={() => setVisible(true)}>
          <Icone nom="plus" className="h-4 w-4" /> Rendez-vous ou rappel
        </button>
      </div>
    );

  return (
    <form
      key={cle}
      className="grid grid-cols-2 gap-3 p-5"
      onSubmit={(e) => {
        e.preventDefault();
        const f = new FormData(e.currentTarget);
        const v = (k: string) => String(f.get(k) ?? "");
        lancer(
          () =>
            appel("/api/v1/agenda", "POST", {
              genre,
              prospectId: prospectId ?? v("prospectId"),
              titre: v("titre"),
              jour: v("jour"),
              heure: v("heure"),
              dureeMin: v("dureeMin"),
              lieu: v("lieu"),
              detail: v("detail"),
            }),
          () => setCle((k) => k + 1),
        );
      }}
    >
      <div className="col-span-2 inline-flex w-fit gap-1 rounded-full bg-creux p-1">
        {GENRES_AGENDA.map((g) => (
          <button
            key={g}
            type="button"
            aria-pressed={genre === g}
            onClick={() => setGenre(g)}
            className={`min-h-[34px] rounded-full px-4 text-[14px] font-medium transition-colors duration-200 ${genre === g ? "bg-carte text-encre shadow-doux" : "text-doux hover:text-encre"}`}
          >
            {GENRE_AGENDA_LABEL[g]}
          </button>
        ))}
      </div>
      <div className="col-span-2">
        <label className="etiquette" htmlFor="ag-titre">
          Titre
        </label>
        <input id="ag-titre" name="titre" className="champ" placeholder={genre === "rendez_vous" ? "Présentation de la maquette" : "Rappeler pour le devis"} />
      </div>
      {prospects && !prospectId && (
        <div className="col-span-2">
          <label className="etiquette" htmlFor="ag-prospect">
            Prospect
          </label>
          <select id="ag-prospect" name="prospectId" className="champ" defaultValue="">
            <option value="">Aucun</option>
            {prospects.map((p) => (
              <option key={p.id} value={p.id}>
                {p.entreprise}
              </option>
            ))}
          </select>
        </div>
      )}
      <div>
        <label className="etiquette" htmlFor="ag-jour">
          Jour
        </label>
        <input id="ag-jour" name="jour" type="date" required defaultValue={jourDefaut} className="champ" />
      </div>
      <div>
        <label className="etiquette" htmlFor="ag-heure">
          Heure (Paris)
        </label>
        <input id="ag-heure" name="heure" type="time" required defaultValue={heureDefaut} step={300} className="champ" />
      </div>
      {genre === "rendez_vous" && (
        <>
          <div>
            <label className="etiquette" htmlFor="ag-duree">
              Durée
            </label>
            <select id="ag-duree" name="dureeMin" className="champ" defaultValue="60">
              {[15, 30, 45, 60, 90, 120].map((m) => (
                <option key={m} value={m}>
                  {m < 60 ? `${m} min` : `${Math.floor(m / 60)} h${m % 60 ? ` ${m % 60}` : ""}`}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="etiquette" htmlFor="ag-lieu">
              Lieu
            </label>
            <input id="ag-lieu" name="lieu" className="champ" placeholder="Sur place, téléphone…" />
          </div>
        </>
      )}
      <div className="col-span-2">
        <label className="etiquette" htmlFor="ag-detail">
          Détail
        </label>
        <textarea id="ag-detail" name="detail" rows={2} className="champ" />
      </div>
      <div className="col-span-2 flex items-center gap-3">
        {erreur && <p className="text-[13.5px] text-terre">{erreur}</p>}
        <button type="button" className="btn-texte ml-auto" onClick={() => setVisible(false)}>
          Fermer
        </button>
        <button className="btn btn-primaire btn-petit" disabled={occupe}>
          Ajouter
        </button>
      </div>
    </form>
  );
}

export function ActionsAgenda({ id, fait }: { id: string; fait: boolean }) {
  return (
    <span className="flex flex-wrap items-center gap-x-3.5">
      <a href={`/api/v1/agenda/${id}/ics`} download className="btn-texte gap-1" data-ics={id}>
        <Icone nom="agenda" className="h-4 w-4" /> Ajouter au calendrier
      </a>
      <BoutonApi chemin={`/api/v1/agenda/${id}`} methode="PATCH" donnees={{ fait: !fait }} label={fait ? "Pas fait" : "Fait"} className="btn-texte !text-encre/80" />
      <BoutonApi chemin={`/api/v1/agenda/${id}`} methode="DELETE" label="Supprimer" confirmation="Supprimer ce rendez-vous ?" className="btn-texte !text-doux" />
    </span>
  );
}
