"use client";

import { useState } from "react";
import * as A from "@/app/actions";
import { BoutonEnvoi, Formulaire } from "./Formulaire";
import { Champ } from "./ui";
import { Copier } from "./Copier";
import type { Organisation } from "@/lib/services/comptes";

export function FormulaireOrganisation({ o, lectureSeule }: { o: Organisation; lectureSeule: boolean }) {
  const [couleur, setCouleur] = useState(o.couleurPrincipale);
  return (
    <Formulaire action={A.modifierOrganisationAction} className="space-y-4">
      <fieldset disabled={lectureSeule} className="space-y-4">
        <Champ label="Nom de l'entreprise" nom="nom">
          <input id="nom" name="nom" required defaultValue={o.nom} className="champ" />
        </Champ>
        <div className="grid gap-4 sm:grid-cols-2">
          <Champ label="SIRET" nom="siret">
            <input id="siret" name="siret" inputMode="numeric" defaultValue={o.siret ?? ""} className="champ" placeholder="14 chiffres" />
          </Champ>
          <Champ label="N° de TVA intracommunautaire" nom="tvaIntracom">
            <input id="tvaIntracom" name="tvaIntracom" defaultValue={o.tvaIntracom ?? ""} className="champ" placeholder="FR32123456789" />
          </Champ>
        </div>
        <Champ label="Adresse" nom="adresse">
          <input id="adresse" name="adresse" defaultValue={o.adresse ?? ""} className="champ" />
        </Champ>
        <div className="grid gap-4 sm:grid-cols-2">
          <Champ label="Téléphone" nom="telephone">
            <input id="telephone" name="telephone" type="tel" defaultValue={o.telephone ?? ""} className="champ" />
          </Champ>
          <Champ label="E-mail" nom="email">
            <input id="email" name="email" type="email" defaultValue={o.email ?? ""} className="champ" />
          </Champ>
        </div>
        <Champ label="Logo (adresse de l'image)" nom="logoUrl" aide="Le téléversement direct arrivera avec le stockage de fichiers.">
          <input id="logoUrl" name="logoUrl" type="url" defaultValue={o.logoUrl ?? ""} className="champ" placeholder="https://…/logo.png" />
        </Champ>
        <div className="grid gap-4 sm:grid-cols-2">
          <Champ label="Couleur principale" nom="couleurPrincipale">
            <div className="flex items-center gap-3">
              <input type="color" id="couleurPrincipale" name="couleurPrincipale" value={couleur} onChange={(e) => setCouleur(e.target.value)} className="h-[46px] w-[60px] cursor-pointer rounded-2xl border-0 bg-creux p-1.5" />
              <span className="font-mono text-[14px] text-doux">{couleur.toUpperCase()}</span>
            </div>
          </Champ>
          <Champ label="Couleur secondaire" nom="couleurSecondaire">
            <input type="color" id="couleurSecondaire" name="couleurSecondaire" defaultValue={o.couleurSecondaire} className="h-[46px] w-[60px] cursor-pointer rounded-2xl border-0 bg-creux p-1.5" />
          </Champ>
        </div>
        {!lectureSeule && <BoutonEnvoi>Enregistrer</BoutonEnvoi>}
      </fieldset>
    </Formulaire>
  );
}

export function FormulaireMotDePasse() {
  return (
    <Formulaire action={A.changerMotDePasseAction} remettreAZero className="space-y-3">
      <input name="actuel" type="password" autoComplete="current-password" required placeholder="Mot de passe actuel" aria-label="Mot de passe actuel" className="champ" />
      <div className="grid gap-3 sm:grid-cols-2">
        <input name="nouveau" type="password" autoComplete="new-password" required minLength={10} placeholder="Nouveau (10 caractères min.)" aria-label="Nouveau mot de passe" className="champ" />
        <input name="confirmation" type="password" autoComplete="new-password" required placeholder="Confirmation" aria-label="Confirmation" className="champ" />
      </div>
      <BoutonEnvoi className="btn">Changer le mot de passe</BoutonEnvoi>
    </Formulaire>
  );
}

const RESSOURCES = [
  ["clients", "Clients"],
  ["contacts", "Contacts"],
  ["sites", "Adresses"],
  ["chantiers", "Chantiers"],
  ["notes", "Notes"],
  ["taches", "Tâches"],
  ["pieces_jointes", "Pièces jointes"],
  ["etiquettes", "Étiquettes"],
  ["activites", "Activité"],
  ["membres", "Équipe"],
  ["organisation", "Organisation"],
] as const;

export function FormulaireJeton() {
  const [global, setGlobal] = useState<"*:lecture" | "*:ecriture" | "detail">("*:lecture");
  return (
    <Formulaire
      action={A.creerJetonAction}
      remettreAZero
      className="space-y-4 p-5"
      resultat={(e) =>
        e.ok && e.donnees?.secret ? (
          <div className="mt-3">
            <Copier valeur={String(e.donnees.secret)} />
          </div>
        ) : null
      }
    >
      <input name="nom" required placeholder="Nom (ex. Zapier)" aria-label="Nom du jeton" className="champ" />
      <fieldset>
        <legend className="etiquette">Portée</legend>
        <div className="grid gap-2 sm:grid-cols-3">
          {[
            ["*:lecture", "Lecture seule"],
            ["*:ecriture", "Lecture et écriture"],
            ["detail", "Sur mesure"],
          ].map(([v, l]) => (
            <label key={v} className={`puce cursor-pointer justify-center !min-h-[42px] ${global === v ? "puce-active" : ""}`}>
              <input type="radio" name="mode" value={v} checked={global === v} onChange={() => setGlobal(v as typeof global)} className="sr-only" />
              {l}
            </label>
          ))}
        </div>
        {global !== "detail" ? (
          <input type="hidden" name="portees" value={global} />
        ) : (
          <div className="mt-3 divide-y divide-trait/70 rounded-2xl bg-creux/60">
            {RESSOURCES.map(([r, l]) => (
              <div key={r} className="flex items-center justify-between gap-3 px-4 py-2.5 text-[14px]">
                <span>{l}</span>
                <span className="flex gap-4 text-doux">
                  <label className="flex items-center gap-1.5">
                    <input type="checkbox" name="portees" value={`${r}:lecture`} className="accent-[rgb(var(--terre))]" /> Lecture
                  </label>
                  <label className="flex items-center gap-1.5">
                    <input type="checkbox" name="portees" value={`${r}:ecriture`} className="accent-[rgb(var(--terre))]" /> Écriture
                  </label>
                </span>
              </div>
            ))}
          </div>
        )}
      </fieldset>
      <BoutonEnvoi>Créer le jeton</BoutonEnvoi>
    </Formulaire>
  );
}
