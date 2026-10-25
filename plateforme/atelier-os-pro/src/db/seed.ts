/**
 * Données de démonstration — idempotent (identifiants fixes + ON CONFLICT DO NOTHING).
 *  - « Atelier Truelle » : organisation plateforme, compte administrateur.
 *  - « Plomberie Démo Paris 11e » : équipe, clients, chantiers et tâches crédibles.
 * Mots de passe : ADMIN_PASSWORD et DEMO_PASSWORD (valeurs de développement par défaut hors production).
 */
import { eq } from "drizzle-orm";
import type { Base } from "./index";
import * as s from "./schema";
import { hacherMotDePasse } from "@/lib/crypto";

export const IDS = {
  orgPlateforme: "org_ateliertruelle00000",
  orgDemo: "org_demoparis11e0000000",
  admin: "usr_firas00000000000000",
  dirigeant: "usr_karimbenali00000000",
  julie: "usr_juliemoreau00000000",
  thomas: "usr_thomasleroy00000000",
  adv: "usr_sophiemartin0000000",
};
export const EMAILS = {
  admin: "firas@ateliertruelle.fr",
  dirigeant: "karim@plomberie-demo.fr",
  julie: "julie@plomberie-demo.fr",
  thomas: "thomas@plomberie-demo.fr",
  adv: "sophie@plomberie-demo.fr",
};

const jourRelatif = (n: number) => {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return d.toISOString().slice(0, 10);
};
const ilYa = (jours: number, heures = 0) => new Date(Date.now() - jours * 86400_000 - heures * 3600_000);

export function motsDePasseSeed() {
  const prod = process.env.NODE_ENV === "production";
  return {
    admin: process.env.ADMIN_PASSWORD || (prod ? null : "atelier-admin-2026"),
    demo: process.env.DEMO_PASSWORD || "demo-plomberie-2026",
  };
}

export async function seed(db: Base) {
  const mdp = motsDePasseSeed();
  const annee = new Date().getFullYear();
  const t0 = ilYa(40);

  await db
    .insert(s.organisations)
    .values([
      {
        id: IDS.orgPlateforme,
        nom: "Atelier Truelle",
        slug: "atelier-truelle",
        estPlateforme: true,
        email: "contact@ateliertruelle.fr",
        couleurPrincipale: "#C8553D",
        creeLe: t0,
        majLe: t0,
      },
      {
        id: IDS.orgDemo,
        nom: "Plomberie Démo Paris 11e",
        slug: "plomberie-demo-paris-11",
        siret: "12345678900012",
        tvaIntracom: "FR32123456789",
        adresse: "42 rue de la Roquette, 75011 Paris",
        telephone: "01 43 00 11 11",
        email: "contact@plomberie-demo.fr",
        couleurPrincipale: "#2F6FDE",
        creeLe: t0,
        majLe: t0,
      },
    ])
    .onConflictDoNothing();

  const hashAdmin = mdp.admin ? await hacherMotDePasse(mdp.admin) : null;
  const hashDemo = await hacherMotDePasse(mdp.demo);
  await db
    .insert(s.utilisateurs)
    .values([
      { id: IDS.admin, email: EMAILS.admin, nom: "Firas Baghdadi", motDePasseHash: hashAdmin, estAdminPlateforme: true, creeLe: t0, majLe: t0 },
      { id: IDS.dirigeant, email: EMAILS.dirigeant, nom: "Karim Benali", telephone: "06 12 34 56 78", motDePasseHash: hashDemo, creeLe: t0, majLe: t0 },
      { id: IDS.julie, email: EMAILS.julie, nom: "Julie Moreau", telephone: "06 22 33 44 55", motDePasseHash: hashDemo, creeLe: t0, majLe: t0 },
      { id: IDS.thomas, email: EMAILS.thomas, nom: "Thomas Leroy", telephone: "06 98 76 54 32", motDePasseHash: hashDemo, creeLe: t0, majLe: t0 },
      { id: IDS.adv, email: EMAILS.adv, nom: "Sophie Martin", motDePasseHash: hashDemo, creeLe: t0, majLe: t0 },
    ])
    .onConflictDoNothing();
  // Le mot de passe administrateur suit toujours la variable d'environnement.
  if (process.env.ADMIN_PASSWORD && hashAdmin) await db.update(s.utilisateurs).set({ motDePasseHash: hashAdmin }).where(eq(s.utilisateurs.id, IDS.admin));

  await db
    .insert(s.membres)
    .values([
      { id: "mbr_firas_plateforme000", organisationId: IDS.orgPlateforme, utilisateurId: IDS.admin, role: "dirigeant", creeLe: t0, majLe: t0 },
      { id: "mbr_karim_demo000000000", organisationId: IDS.orgDemo, utilisateurId: IDS.dirigeant, role: "dirigeant", creeLe: t0, majLe: t0 },
      { id: "mbr_julie_demo000000000", organisationId: IDS.orgDemo, utilisateurId: IDS.julie, role: "charge_affaires", creeLe: t0, majLe: t0 },
      { id: "mbr_thomas_demo00000000", organisationId: IDS.orgDemo, utilisateurId: IDS.thomas, role: "charge_affaires", creeLe: t0, majLe: t0 },
      { id: "mbr_sophie_demo00000000", organisationId: IDS.orgDemo, utilisateurId: IDS.adv, role: "adv", creeLe: t0, majLe: t0 },
    ])
    .onConflictDoNothing();

  const O = IDS.orgDemo;
  type SansOrg<T> = Omit<T, "organisationId">;
  type C = SansOrg<typeof s.clients.$inferInsert>;
  const clients: C[] = [
    { id: "cli_demo_dupont0000000", type: "particulier", nom: "Claire Dupont", email: "claire.dupont@example.fr", telephone: "06 11 22 33 44", source: "Site web", responsableId: IDS.julie },
    { id: "cli_demo_lemaire000000", type: "syndic", nom: "Cabinet Lemaire Gestion", raisonSociale: "Lemaire Gestion SAS", siret: "41234567800021", email: "technique@lemaire-gestion.example", telephone: "01 48 05 12 12", source: "Recommandation", responsableId: IDS.thomas },
    { id: "cli_demo_habitatest000", type: "bailleur", nom: "Habitat Est Parisien", raisonSociale: "Habitat Est Parisien", email: "maintenance@hep.example", telephone: "01 55 28 40 00", source: "Appel d'offres", responsableId: IDS.thomas },
    { id: "cli_demo_taillandiers0", type: "professionnel", nom: "Brasserie des Taillandiers", raisonSociale: "SARL Les Taillandiers", siret: "52345678900018", email: "gerance@taillandiers.example", telephone: "01 47 00 98 76", source: "Google", responsableId: IDS.julie },
    { id: "cli_demo_nguyen0000000", type: "particulier", nom: "Minh Nguyen", email: "minh.nguyen@example.fr", telephone: "07 81 45 22 10", source: "Bouche-à-oreille", responsableId: IDS.julie },
    { id: "cli_demo_bernard000000", type: "particulier", nom: "Henri et Paule Bernard", telephone: "01 43 57 21 09", source: "Annuaire", responsableId: IDS.thomas },
    { id: "cli_demo_ambroise00000", type: "professionnel", nom: "Boulangerie Saint-Ambroise", raisonSociale: "EURL Pains d'Ambroise", email: "contact@pains-ambroise.example", telephone: "01 43 38 71 70", source: "Site web", responsableId: IDS.julie },
    { id: "cli_demo_garcia0000000", type: "particulier", nom: "Lucia Garcia", email: "lucia.garcia@example.fr", telephone: "06 70 12 98 45", source: "Site web", responsableId: null },
  ];
  await db
    .insert(s.clients)
    .values(clients.map((c, i) => ({ ...c, organisationId: O, creeLe: ilYa(30 - i * 3, i), majLe: ilYa(30 - i * 3, i) })))
    .onConflictDoNothing();

  const contacts: SansOrg<typeof s.contacts.$inferInsert>[] = [
    { id: "ctc_demo_lemaire_gest0", clientId: "cli_demo_lemaire000000", prenom: "Nathalie", nom: "Roussel", fonction: "Gestionnaire de copropriété", email: "n.roussel@lemaire-gestion.example", telephone: "01 48 05 12 15", principal: true },
    { id: "ctc_demo_lemaire_cs000", clientId: "cli_demo_lemaire000000", prenom: "Bernard", nom: "Petit", fonction: "Président du conseil syndical", telephone: "06 45 12 78 90" },
    { id: "ctc_demo_hep_tech00000", clientId: "cli_demo_habitatest000", prenom: "Yacine", nom: "Haddad", fonction: "Responsable technique secteur 11e", email: "y.haddad@hep.example", telephone: "06 02 03 04 05", principal: true },
    { id: "ctc_demo_taill_gerant0", clientId: "cli_demo_taillandiers0", prenom: "Marc", nom: "Olivier", fonction: "Gérant", telephone: "06 33 44 55 66", principal: true },
    { id: "ctc_demo_ambroise_00000", clientId: "cli_demo_ambroise00000", prenom: "Élodie", nom: "Fabre", fonction: "Co-gérante", email: "elodie@pains-ambroise.example", principal: true },
  ];
  await db.insert(s.contacts).values(contacts.map((c) => ({ ...c, organisationId: O, creeLe: t0, majLe: t0 }))).onConflictDoNothing();

  const sites: SansOrg<typeof s.sites.$inferInsert>[] = [
    { id: "sit_demo_dupont_oberk0", clientId: "cli_demo_dupont0000000", libelle: "Appartement", adresse: "118 rue Oberkampf", complement: "4e étage gauche", codePostal: "75011", ville: "Paris", codeAcces: "A4512" },
    { id: "sit_demo_lemaire_tille", clientId: "cli_demo_lemaire000000", libelle: "Résidence Les Tilleuls", adresse: "27 rue de Charonne", codePostal: "75011", ville: "Paris", codeAcces: "Clé chez la gardienne" },
    { id: "sit_demo_lemaire_volta", clientId: "cli_demo_lemaire000000", libelle: "Immeuble Voltaire", adresse: "151 boulevard Voltaire", codePostal: "75011", ville: "Paris" },
    { id: "sit_demo_hep_parment00", clientId: "cli_demo_habitatest000", libelle: "Groupe Parmentier — bât. B", adresse: "64 avenue Parmentier", codePostal: "75011", ville: "Paris" },
    { id: "sit_demo_taill_resto00", clientId: "cli_demo_taillandiers0", libelle: "Restaurant", adresse: "9 rue des Taillandiers", codePostal: "75011", ville: "Paris" },
    { id: "sit_demo_nguyen_roque0", clientId: "cli_demo_nguyen0000000", adresse: "88 rue de la Roquette", complement: "Bâtiment C, 2e", codePostal: "75011", ville: "Paris" },
    { id: "sit_demo_bernard_folie", clientId: "cli_demo_bernard000000", adresse: "12 rue Folie-Méricourt", codePostal: "75011", ville: "Paris" },
    { id: "sit_demo_ambroise_boul", clientId: "cli_demo_ambroise00000", libelle: "Fournil", adresse: "71 rue Saint-Ambroise", codePostal: "75011", ville: "Paris" },
  ];
  await db.insert(s.sites).values(sites.map((x) => ({ ...x, organisationId: O, creeLe: t0, majLe: t0 }))).onConflictDoNothing();

  const ref = (n: number) => `CH-${annee}-${String(n).padStart(4, "0")}`;
  const chantiers: SansOrg<typeof s.chantiers.$inferInsert>[] = [
    { id: "chn_demo_dupont_sdb000", reference: ref(1), titre: "Rénovation salle de bain", description: "Dépose baignoire, création douche à l'italienne, remplacement mitigeurs thermostatiques, raccordement nouveau meuble vasque.", statut: "en_cours", clientId: "cli_demo_dupont0000000", siteId: "sit_demo_dupont_oberk0", chargeAffairesId: IDS.julie, dateDebut: jourRelatif(-6), dateFin: jourRelatif(8), montantEstimeHt: 785000 },
    { id: "chn_demo_tilleuls_colo", reference: ref(2), titre: "Remplacement colonne d'eau froide", description: "Colonne montante en acier galvanisé corrodée, remplacement en multicouche sur 6 niveaux, coupure générale à prévoir avec affichage 48 h avant.", statut: "planifie", clientId: "cli_demo_lemaire000000", siteId: "sit_demo_lemaire_tille", chargeAffairesId: IDS.thomas, dateDebut: jourRelatif(5), dateFin: jourRelatif(9), montantEstimeHt: 1840000 },
    { id: "chn_demo_voltaire_fuite", reference: ref(3), titre: "Recherche de fuite — dégât des eaux 3e étage", description: "Infiltration plafond appartement 3B, recherche non destructive (gaz traceur), rapport pour l'assurance.", statut: "en_devis", clientId: "cli_demo_lemaire000000", siteId: "sit_demo_lemaire_volta", chargeAffairesId: IDS.thomas, montantEstimeHt: 49000 },
    { id: "chn_demo_hep_ballons00", reference: ref(4), titre: "Remplacement de 12 ballons d'eau chaude", description: "Programme annuel : chauffe-eau électriques 150 L, logements B11 à B22.", statut: "a_qualifier", clientId: "cli_demo_habitatest000", siteId: "sit_demo_hep_parment00", chargeAffairesId: IDS.thomas, montantEstimeHt: 1260000 },
    { id: "chn_demo_taill_bacgrai", reference: ref(5), titre: "Installation bac à graisse cuisine", description: "Mise en conformité séparateur à graisses sous plonge, raccordement évacuation.", statut: "termine", clientId: "cli_demo_taillandiers0", siteId: "sit_demo_taill_resto00", chargeAffairesId: IDS.julie, dateDebut: jourRelatif(-20), dateFin: jourRelatif(-18), montantEstimeHt: 312000 },
    { id: "chn_demo_nguyen_desemb", reference: ref(6), titre: "Désembouage circuit de chauffage", description: "Radiateurs froids en partie haute, désembouage + pose filtre magnétique.", statut: "planifie", clientId: "cli_demo_nguyen0000000", siteId: "sit_demo_nguyen_roque0", chargeAffairesId: IDS.julie, dateDebut: jourRelatif(2), dateFin: jourRelatif(2), montantEstimeHt: 89000 },
    { id: "chn_demo_bernard_wc000", reference: ref(7), titre: "Remplacement WC suspendu", description: "Bâti-support Geberit, cuvette suspendue, reprise faïence.", statut: "en_pause", clientId: "cli_demo_bernard000000", siteId: "sit_demo_bernard_folie", chargeAffairesId: IDS.thomas, montantEstimeHt: 168000 },
  ];
  await db
    .insert(s.chantiers)
    .values(chantiers.map((c, i) => ({ ...c, organisationId: O, creeLe: ilYa(25 - i * 3), majLe: ilYa(20 - i * 2) })))
    .onConflictDoNothing();

  const taches: SansOrg<typeof s.taches.$inferInsert>[] = [
    { id: "tch_demo_01_appel_dupo", titre: "Appeler Mme Dupont : choix de la faïence", echeance: jourRelatif(0), priorite: "haute", assigneId: IDS.julie, clientId: "cli_demo_dupont0000000", chantierId: "chn_demo_dupont_sdb000" },
    { id: "tch_demo_02_commande_m", titre: "Commander le receveur 90×120 et la paroi", echeance: jourRelatif(-1), assigneId: IDS.julie, clientId: "cli_demo_dupont0000000", chantierId: "chn_demo_dupont_sdb000" },
    { id: "tch_demo_03_affichage0", titre: "Afficher l'avis de coupure d'eau (48 h avant)", echeance: jourRelatif(3), priorite: "haute", assigneId: IDS.thomas, clientId: "cli_demo_lemaire000000", chantierId: "chn_demo_tilleuls_colo" },
    { id: "tch_demo_04_devis_fuit", titre: "Envoyer le devis de recherche de fuite", echeance: jourRelatif(0), assigneId: IDS.thomas, clientId: "cli_demo_lemaire000000", chantierId: "chn_demo_voltaire_fuite" },
    { id: "tch_demo_05_visite_hep", titre: "Visite technique logements B11 à B22", echeance: jourRelatif(4), assigneId: IDS.thomas, clientId: "cli_demo_habitatest000", chantierId: "chn_demo_hep_ballons00" },
    { id: "tch_demo_06_facture_ta", titre: "Relancer le paiement du bac à graisse", echeance: jourRelatif(-3), priorite: "haute", assigneId: IDS.adv, clientId: "cli_demo_taillandiers0", chantierId: "chn_demo_taill_bacgrai" },
    { id: "tch_demo_07_attestation", titre: "Attestation TVA 10 % à faire signer", echeance: jourRelatif(1), assigneId: IDS.adv, clientId: "cli_demo_nguyen0000000", chantierId: "chn_demo_nguyen_desemb" },
    { id: "tch_demo_08_rappel_garc", titre: "Rappeler Mme Garcia (demande site web)", echeance: jourRelatif(0), assigneId: IDS.dirigeant, clientId: "cli_demo_garcia0000000" },
    { id: "tch_demo_09_point_hebdo", titre: "Point hebdo chantiers avec l'équipe", echeance: jourRelatif(1), assigneId: IDS.dirigeant },
    { id: "tch_demo_10_assurance0", titre: "Renouveler l'attestation décennale", echeance: jourRelatif(12), assigneId: IDS.dirigeant },
    { id: "tch_demo_11_photos_tai", titre: "Photos avant/après du bac à graisse", statut: "faite", assigneId: IDS.julie, clientId: "cli_demo_taillandiers0", chantierId: "chn_demo_taill_bacgrai", faiteLe: ilYa(17) },
  ];
  await db
    .insert(s.taches)
    .values(taches.map((x, i) => ({ ...x, organisationId: O, creeParId: IDS.dirigeant, creeLe: ilYa(10, i), majLe: ilYa(10, i) })))
    .onConflictDoNothing();

  const notes: SansOrg<typeof s.notes.$inferInsert>[] = [
    { id: "not_demo_dupont_01000", clientId: "cli_demo_dupont0000000", chantierId: "chn_demo_dupont_sdb000", auteurId: IDS.julie, contenu: "Cliente très attentive aux finitions. Préfère être appelée après 18 h. Interphone en panne : appeler en arrivant.", epinglee: true },
    { id: "not_demo_lemaire_0100", clientId: "cli_demo_lemaire000000", auteurId: IDS.thomas, contenu: "Contrat cadre 2026 : intervention sous 24 h pour les urgences, devis au-delà de 800 € HT à valider par Mme Roussel." },
    { id: "not_demo_tilleuls_010", clientId: "cli_demo_lemaire000000", chantierId: "chn_demo_tilleuls_colo", auteurId: IDS.thomas, contenu: "Gaine technique accessible par les paliers ; prévoir trappes de visite 30×30 aux 2e et 5e." },
    { id: "not_demo_taill_01000", clientId: "cli_demo_taillandiers0", auteurId: IDS.julie, contenu: "Intervention uniquement entre 15 h et 18 h (service du midi et du soir)." },
  ];
  await db
    .insert(s.notes)
    .values(notes.map((x, i) => ({ ...x, organisationId: O, creeLe: ilYa(12 - i), majLe: ilYa(12 - i) })))
    .onConflictDoNothing();

  await db
    .insert(s.etiquettes)
    .values([
      { id: "eti_demo_urgent0000000", organisationId: O, nom: "Urgent", couleur: "#E5484D", creeLe: t0, majLe: t0 },
      { id: "eti_demo_contrat000000", organisationId: O, nom: "Contrat d'entretien", couleur: "#30A46C", creeLe: t0, majLe: t0 },
      { id: "eti_demo_vip0000000000", organisationId: O, nom: "Client fidèle", couleur: "#F5A524", creeLe: t0, majLe: t0 },
      { id: "eti_demo_assurance0000", organisationId: O, nom: "Sinistre assurance", couleur: "#8E4EC6", creeLe: t0, majLe: t0 },
    ])
    .onConflictDoNothing();
  await db
    .insert(s.etiquetages)
    .values([
      { organisationId: O, etiquetteId: "eti_demo_contrat000000", typeRessource: "clients", ressourceId: "cli_demo_lemaire000000", creeLe: t0 },
      { organisationId: O, etiquetteId: "eti_demo_contrat000000", typeRessource: "clients", ressourceId: "cli_demo_habitatest000", creeLe: t0 },
      { organisationId: O, etiquetteId: "eti_demo_vip0000000000", typeRessource: "clients", ressourceId: "cli_demo_taillandiers0", creeLe: t0 },
      { organisationId: O, etiquetteId: "eti_demo_assurance0000", typeRessource: "chantiers", ressourceId: "chn_demo_voltaire_fuite", creeLe: t0 },
      { organisationId: O, etiquetteId: "eti_demo_urgent0000000", typeRessource: "chantiers", ressourceId: "chn_demo_voltaire_fuite", creeLe: t0 },
    ])
    .onConflictDoNothing();

  // Historique de démonstration dans le journal d'activité.
  const nomClient = Object.fromEntries(clients.map((c) => [c.id, c.nom]));
  await db
    .insert(s.activites)
    .values([
      ...clients.map((c, i) => ({
        id: `act_demo_cli_${String(i).padStart(9, "0")}`,
        organisationId: O,
        acteurId: c.responsableId ?? IDS.dirigeant,
        origine: "systeme",
        action: "creation",
        typeRessource: "clients",
        ressourceId: c.id!,
        clientId: c.id!,
        resume: `Client créé : ${c.nom}`,
        creeLe: ilYa(30 - i * 3, i),
      })),
      ...chantiers.map((c, i) => ({
        id: `act_demo_chn_${String(i).padStart(9, "0")}`,
        organisationId: O,
        acteurId: c.chargeAffairesId ?? IDS.dirigeant,
        origine: "systeme",
        action: "creation",
        typeRessource: "chantiers",
        ressourceId: c.id!,
        clientId: c.clientId,
        chantierId: c.id!,
        resume: `Chantier créé : ${c.reference} — ${c.titre} (${nomClient[c.clientId]})`,
        creeLe: ilYa(25 - i * 3),
      })),
    ])
    .onConflictDoNothing();
}
