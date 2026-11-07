"use client";

import { accepterInvitationAction, seConnecter } from "@/app/actions";
import { BoutonEnvoi, Formulaire } from "./Formulaire";

export function FormulaireConnexion({ suite }: { suite: string }) {
  return (
    <Formulaire action={seConnecter} className="space-y-3">
      <input type="hidden" name="suite" value={suite} />
      <label className="sr-only" htmlFor="email">
        E-mail
      </label>
      <input id="email" name="email" type="email" autoComplete="username" autoFocus required placeholder="E-mail" className="champ" />
      <label className="sr-only" htmlFor="motDePasse">
        Mot de passe
      </label>
      <input id="motDePasse" name="motDePasse" type="password" autoComplete="current-password" required placeholder="Mot de passe" className="champ" />
      <BoutonEnvoi className="btn btn-primaire !mt-5 w-full">Se connecter</BoutonEnvoi>
    </Formulaire>
  );
}

export function FormulaireInvitation({ jeton, email, compteExistant }: { jeton: string; email: string; compteExistant: boolean }) {
  return (
    <Formulaire action={accepterInvitationAction} className="space-y-3">
      <input type="hidden" name="jeton" value={jeton} />
      <input value={email} readOnly aria-label="E-mail" className="champ text-doux" />
      {!compteExistant && (
        <>
          <label className="sr-only" htmlFor="nom">
            Prénom et nom
          </label>
          <input id="nom" name="nom" autoComplete="name" required placeholder="Prénom et nom" className="champ" autoFocus />
        </>
      )}
      <label className="sr-only" htmlFor="motDePasse">
        Mot de passe
      </label>
      <input
        id="motDePasse"
        name="motDePasse"
        type="password"
        autoComplete={compteExistant ? "current-password" : "new-password"}
        required
        minLength={10}
        placeholder={compteExistant ? "Votre mot de passe actuel" : "Choisissez un mot de passe (10 caractères min.)"}
        className="champ"
      />
      <BoutonEnvoi className="btn btn-primaire !mt-5 w-full">{compteExistant ? "Rejoindre l'équipe" : "Créer mon compte"}</BoutonEnvoi>
    </Formulaire>
  );
}
