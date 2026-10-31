"use client";

import { useState } from "react";
import * as A from "@/app/actions";
import { BoutonEnvoi, Formulaire } from "./Formulaire";
import { Champ } from "./ui";
import { STATUT_CHANTIER_LABEL, TYPE_CLIENT_LABEL, centimesEnEuros } from "@/lib/format";

type Option = { id: string; nom: string };

export function SelectMembres({ nom, membres, valeur, vide = "Personne" }: { nom: string; membres: Option[]; valeur?: string | null; vide?: string }) {
  return (
    <select id={nom} name={nom} defaultValue={valeur ?? ""} className="champ">
      <option value="">{vide}</option>
      {membres.map((m) => (
        <option key={m.id} value={m.id}>
          {m.nom}
        </option>
      ))}
    </select>
  );
}

// ───────── Client ─────────

export function FormulaireClient({
  client,
  membres,
}: {
  client?: { id: string; type: string; nom: string; raisonSociale: string | null; siret: string | null; email: string | null; telephone: string | null; source: string | null; responsableId: string | null; remarques: string | null };
  membres: Option[];
}) {
  const [type, setType] = useState(client?.type ?? "particulier");
  const pro = type !== "particulier";
  return (
    <Formulaire action={client ? A.modifierClient : A.creerClient} className="space-y-4">
      {client && <input type="hidden" name="id" value={client.id} />}
      <fieldset>
        <legend className="etiquette">Type de client</legend>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {Object.entries(TYPE_CLIENT_LABEL).map(([v, l]) => (
            <label key={v} className={`puce cursor-pointer justify-center !min-h-[42px] ${type === v ? "puce-active" : ""}`}>
              <input type="radio" name="type" value={v} checked={type === v} onChange={() => setType(v)} className="sr-only" />
              {l}
            </label>
          ))}
        </div>
      </fieldset>
      <Champ label={pro ? "Nom affiché" : "Prénom et nom"} nom="nom">
        <input id="nom" name="nom" required defaultValue={client?.nom} className="champ" autoComplete="off" placeholder={pro ? "Ex. Cabinet Lemaire Gestion" : "Ex. Claire Dupont"} />
      </Champ>
      {pro && (
        <div className="grid gap-4 sm:grid-cols-2">
          <Champ label="Raison sociale" nom="raisonSociale">
            <input id="raisonSociale" name="raisonSociale" defaultValue={client?.raisonSociale ?? ""} className="champ" />
          </Champ>
          <Champ label="SIRET" nom="siret">
            <input id="siret" name="siret" inputMode="numeric" defaultValue={client?.siret ?? ""} className="champ" placeholder="14 chiffres" />
          </Champ>
        </div>
      )}
      <div className="grid gap-4 sm:grid-cols-2">
        <Champ label="Téléphone" nom="telephone">
          <input id="telephone" name="telephone" type="tel" defaultValue={client?.telephone ?? ""} className="champ" autoComplete="tel" />
        </Champ>
        <Champ label="E-mail" nom="email">
          <input id="email" name="email" type="email" defaultValue={client?.email ?? ""} className="champ" autoComplete="email" />
        </Champ>
      </div>
      {!client && (
        <div className="grid gap-4 sm:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1.2fr)]">
          <Champ label="Adresse d'intervention" nom="adresse">
            <input id="adresse" name="adresse" className="champ" autoComplete="street-address" placeholder="Facultatif" />
          </Champ>
          <Champ label="Code postal" nom="codePostal">
            <input id="codePostal" name="codePostal" inputMode="numeric" className="champ" autoComplete="postal-code" />
          </Champ>
          <Champ label="Ville" nom="ville">
            <input id="ville" name="ville" className="champ" defaultValue="Paris" autoComplete="address-level2" />
          </Champ>
        </div>
      )}
      <div className="grid gap-4 sm:grid-cols-2">
        <Champ label="Chargé d'affaires" nom="responsableId">
          <SelectMembres nom="responsableId" membres={membres} valeur={client?.responsableId} vide="Non attribué" />
        </Champ>
        <Champ label="Origine" nom="source">
          <input id="source" name="source" defaultValue={client?.source ?? ""} className="champ" placeholder="Site web, Google, recommandation…" list="sources" />
          <datalist id="sources">
            {["Site web", "Google", "Recommandation", "Bouche-à-oreille", "Appel d'offres", "Annuaire"].map((s) => (
              <option key={s} value={s} />
            ))}
          </datalist>
        </Champ>
      </div>
      <Champ label="Remarques" nom="remarques">
        <textarea id="remarques" name="remarques" rows={3} defaultValue={client?.remarques ?? ""} className="champ" />
      </Champ>
      <BoutonEnvoi className="btn btn-primaire w-full sm:w-auto">{client ? "Enregistrer" : "Créer le client"}</BoutonEnvoi>
    </Formulaire>
  );
}

// ───────── Contact / adresse ─────────

export function FormulaireContact({ clientId }: { clientId: string }) {
  return (
    <Formulaire action={A.creerContact} remettreAZero className="space-y-3 p-5">
      <input type="hidden" name="clientId" value={clientId} />
      <div className="grid gap-3 sm:grid-cols-2">
        <input name="prenom" placeholder="Prénom" aria-label="Prénom" className="champ" />
        <input name="nom" placeholder="Nom" aria-label="Nom" required className="champ" />
        <input name="fonction" placeholder="Fonction (gestionnaire, gardien…)" aria-label="Fonction" className="champ sm:col-span-2" />
        <input name="telephone" type="tel" placeholder="Téléphone" aria-label="Téléphone" className="champ" />
        <input name="email" type="email" placeholder="E-mail" aria-label="E-mail" className="champ" />
      </div>
      <label className="flex items-center gap-2 text-[14px] text-doux">
        <input type="checkbox" name="principal" className="h-4 w-4 accent-[rgb(var(--terre))]" /> Contact principal
      </label>
      <BoutonEnvoi className="btn btn-primaire btn-petit">Ajouter le contact</BoutonEnvoi>
    </Formulaire>
  );
}

export function FormulaireSite({ clientId }: { clientId: string }) {
  return (
    <Formulaire action={A.creerSite} remettreAZero className="space-y-3 p-5">
      <input type="hidden" name="clientId" value={clientId} />
      <input name="libelle" placeholder="Libellé (ex. Résidence Les Tilleuls)" aria-label="Libellé" className="champ" />
      <input name="adresse" placeholder="Adresse" aria-label="Adresse" required className="champ" />
      <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] gap-3">
        <input name="codePostal" placeholder="Code postal" aria-label="Code postal" inputMode="numeric" className="champ" />
        <input name="ville" placeholder="Ville" aria-label="Ville" defaultValue="Paris" className="champ" />
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <input name="complement" placeholder="Étage, bâtiment…" aria-label="Complément" className="champ" />
        <input name="codeAcces" placeholder="Code d'accès" aria-label="Code d'accès" className="champ" />
      </div>
      <BoutonEnvoi className="btn btn-primaire btn-petit">Ajouter l&apos;adresse</BoutonEnvoi>
    </Formulaire>
  );
}

// ───────── Chantier ─────────

export function FormulaireChantier({
  chantier,
  clients,
  clientId,
  sites,
  membres,
}: {
  chantier?: { id: string; titre: string; description: string | null; statut: string; siteId: string | null; chargeAffairesId: string | null; dateDebut: string | null; dateFin: string | null; montantEstimeHt: number | null };
  clients?: Option[];
  clientId?: string;
  sites: (Option & { clientId: string })[];
  membres: Option[];
}) {
  const [client, setClient] = useState(clientId ?? "");
  const sitesClient = sites.filter((s) => s.clientId === client);
  return (
    <Formulaire action={chantier ? A.modifierChantier : A.creerChantier} className="space-y-4">
      {chantier && <input type="hidden" name="id" value={chantier.id} />}
      {!chantier && (
        <Champ label="Client" nom="clientId">
          {clients ? (
            <select id="clientId" name="clientId" required value={client} onChange={(e) => setClient(e.target.value)} className="champ">
              <option value="">Choisir un client…</option>
              {clients.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.nom}
                </option>
              ))}
            </select>
          ) : (
            <input type="hidden" name="clientId" value={client} />
          )}
        </Champ>
      )}
      <Champ label="Intitulé" nom="titre">
        <input id="titre" name="titre" required defaultValue={chantier?.titre} placeholder="Ex. Remplacement chauffe-eau 200 L" className="champ" />
      </Champ>
      <div className="grid gap-4 sm:grid-cols-2">
        <Champ label="Statut" nom="statut">
          <select id="statut" name="statut" defaultValue={chantier?.statut ?? "a_qualifier"} className="champ">
            {Object.entries(STATUT_CHANTIER_LABEL).map(([v, l]) => (
              <option key={v} value={v}>
                {l}
              </option>
            ))}
          </select>
        </Champ>
        <Champ label="Adresse d'intervention" nom="siteId">
          <select id="siteId" name="siteId" defaultValue={chantier?.siteId ?? ""} className="champ" key={client}>
            <option value="">{sitesClient.length ? "Choisir…" : "Aucune adresse enregistrée"}</option>
            {sitesClient.map((s) => (
              <option key={s.id} value={s.id}>
                {s.nom}
              </option>
            ))}
          </select>
        </Champ>
        <Champ label="Chargé d'affaires" nom="chargeAffairesId">
          <SelectMembres nom="chargeAffairesId" membres={membres} valeur={chantier?.chargeAffairesId} vide={chantier ? "Non attribué" : "Celui du client"} />
        </Champ>
        <Champ label="Montant estimé HT (€)" nom="montantEstimeHt">
          <input id="montantEstimeHt" name="montantEstimeHt" inputMode="decimal" defaultValue={centimesEnEuros(chantier?.montantEstimeHt)} className="champ" placeholder="Ex. 2 450" />
        </Champ>
        <Champ label="Début" nom="dateDebut">
          <input id="dateDebut" name="dateDebut" type="date" defaultValue={chantier?.dateDebut ?? ""} className="champ" />
        </Champ>
        <Champ label="Fin" nom="dateFin">
          <input id="dateFin" name="dateFin" type="date" defaultValue={chantier?.dateFin ?? ""} className="champ" />
        </Champ>
      </div>
      <Champ label="Description" nom="description">
        <textarea id="description" name="description" rows={4} defaultValue={chantier?.description ?? ""} className="champ" placeholder="Travaux, contraintes d'accès, matériel…" />
      </Champ>
      <BoutonEnvoi className="btn btn-primaire w-full sm:w-auto">{chantier ? "Enregistrer" : "Créer le chantier"}</BoutonEnvoi>
    </Formulaire>
  );
}

// ───────── Note, tâche, étiquette ─────────

export function FormulaireNote({ clientId, chantierId, chemin }: { clientId?: string; chantierId?: string; chemin: string }) {
  return (
    <Formulaire action={A.creerNote} remettreAZero className="p-4">
      {clientId && <input type="hidden" name="clientId" value={clientId} />}
      {chantierId && <input type="hidden" name="chantierId" value={chantierId} />}
      <input type="hidden" name="chemin" value={chemin} />
      <label className="sr-only" htmlFor={`note-${chantierId ?? clientId}`}>
        Nouvelle note
      </label>
      <textarea id={`note-${chantierId ?? clientId}`} name="contenu" rows={2} required placeholder="Ajouter une note…" className="champ" />
      <div className="mt-2 flex justify-end">
        <BoutonEnvoi className="btn btn-petit">Ajouter</BoutonEnvoi>
      </div>
    </Formulaire>
  );
}

export function FormulaireTache({ clientId, chantierId, chemin, membres, moi }: { clientId?: string; chantierId?: string; chemin: string; membres?: Option[]; moi?: string }) {
  return (
    <Formulaire action={A.creerTache} remettreAZero className="p-4">
      {clientId && <input type="hidden" name="clientId" value={clientId} />}
      {chantierId && <input type="hidden" name="chantierId" value={chantierId} />}
      <input type="hidden" name="chemin" value={chemin} />
      <label className="sr-only" htmlFor={`tache-${chantierId ?? clientId ?? "jour"}`}>
        Nouvelle tâche
      </label>
      <input id={`tache-${chantierId ?? clientId ?? "jour"}`} name="titre" required placeholder="Nouvelle tâche…" className="champ" />
      <div className="mt-2 flex flex-wrap gap-2">
        <input name="echeance" type="date" aria-label="Échéance" className="champ !min-h-[40px] min-w-[140px] flex-1 !text-[15px]" />
        {membres && (
          <select name="assigneId" aria-label="Assigner à" defaultValue={moi} className="champ !min-h-[40px] min-w-[140px] flex-1 !text-[15px]">
            {membres.map((m) => (
              <option key={m.id} value={m.id}>
                {m.id === moi ? "Moi" : m.nom}
              </option>
            ))}
          </select>
        )}
        <BoutonEnvoi className="btn btn-petit !min-h-[40px]">Ajouter</BoutonEnvoi>
      </div>
    </Formulaire>
  );
}

export function FormulaireEtiquette({ typeRessource, ressourceId, chemin }: { typeRessource: string; ressourceId: string; chemin: string }) {
  return (
    <Formulaire action={A.creerEtiquette} remettreAZero className="flex items-center gap-2">
      <input type="hidden" name="typeRessource" value={typeRessource} />
      <input type="hidden" name="ressourceId" value={ressourceId} />
      <input type="hidden" name="chemin" value={chemin} />
      <input type="color" name="couleur" defaultValue="#8E8E93" aria-label="Couleur" className="h-9 w-9 shrink-0 cursor-pointer rounded-full border-0 bg-transparent p-0" />
      <input name="nom" required placeholder="Nouvelle étiquette" aria-label="Nouvelle étiquette" className="champ !min-h-[38px] !text-[14px]" />
      <BoutonEnvoi className="btn btn-petit shrink-0">Créer</BoutonEnvoi>
    </Formulaire>
  );
}
