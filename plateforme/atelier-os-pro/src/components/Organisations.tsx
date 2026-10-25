"use client";

import * as A from "@/app/actions";
import { BoutonEnvoi, Formulaire } from "./Formulaire";
import { Copier } from "./Copier";

export function FormulaireNouvelleOrganisation() {
  return (
    <Formulaire action={A.creerOrganisationAction} remettreAZero className="space-y-3 p-5" resultat={(e) => (e.ok && e.donnees?.lien ? <div className="mt-3"><Copier valeur={String(e.donnees.lien)} /></div> : null)}>
      <div className="grid gap-3 sm:grid-cols-2">
        <input name="nom" required placeholder="Nom de l'entreprise" aria-label="Nom de l'entreprise" className="champ" />
        <input name="email" type="email" required placeholder="E-mail du dirigeant" aria-label="E-mail du dirigeant" className="champ" />
      </div>
      <BoutonEnvoi>Créer et inviter le dirigeant</BoutonEnvoi>
    </Formulaire>
  );
}
