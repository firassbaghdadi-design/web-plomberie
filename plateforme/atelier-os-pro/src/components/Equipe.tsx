"use client";

import * as A from "@/app/actions";
import { BoutonEnvoi, Formulaire } from "./Formulaire";
import { Copier } from "./Copier";

export function FormulaireInvitationEquipe() {
  return (
    <Formulaire
      action={A.inviter}
      remettreAZero
      className="p-5"
      resultat={(e) =>
        e.ok && e.donnees?.lien ? (
          <div className="mt-3">
            <Copier valeur={String(e.donnees.lien)} />
          </div>
        ) : null
      }
    >
      <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_200px_auto]">
        <label className="sr-only" htmlFor="inv-email">
          E-mail
        </label>
        <input id="inv-email" name="email" type="email" required placeholder="prenom@entreprise.fr" className="champ" />
        <label className="sr-only" htmlFor="inv-role">
          Rôle
        </label>
        <select id="inv-role" name="role" defaultValue="charge_affaires" className="champ">
          <option value="charge_affaires">Chargé d&apos;affaires</option>
          <option value="adv">ADV</option>
          <option value="dirigeant">Dirigeant</option>
        </select>
        <BoutonEnvoi>Inviter</BoutonEnvoi>
      </div>
    </Formulaire>
  );
}

export function SelectRole({ id, role }: { id: string; role: string }) {
  return (
    <Formulaire action={A.modifierMembreAction} className="flex items-center gap-2">
      <input type="hidden" name="id" value={id} />
      <select
        name="role"
        defaultValue={role}
        aria-label="Rôle"
        className="champ !min-h-[36px] !w-auto !rounded-full !py-0 !pl-3.5 !text-[13.5px]"
        onChange={(e) => e.currentTarget.form?.requestSubmit()}
      >
        <option value="dirigeant">Dirigeant</option>
        <option value="charge_affaires">Chargé d&apos;affaires</option>
        <option value="adv">ADV</option>
      </select>
      <noscript>
        <button className="btn btn-petit">OK</button>
      </noscript>
    </Formulaire>
  );
}

export function BasculerActif({ id, actif }: { id: string; actif: boolean }) {
  return (
    <Formulaire action={A.modifierMembreAction}>
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="actif" value={String(!actif)} />
      <BoutonEnvoi className="btn-texte !text-[13px]">{actif ? "Désactiver" : "Réactiver"}</BoutonEnvoi>
    </Formulaire>
  );
}
