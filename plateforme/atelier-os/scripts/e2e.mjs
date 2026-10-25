// Test de bout en bout : lance l'application, se connecte, appelle l'API, prend des captures.
// Usage : npm run build && npm run test:e2e
// Playwright : le paquet « playwright » s'il est installé, sinon PLAYWRIGHT_CORE=/chemin/vers/playwright-core (et CHROME=/chemin/chrome).
import { spawn } from "node:child_process";
import { mkdirSync, rmSync } from "node:fs";
import { createRequire } from "node:module";
import { setTimeout as pause } from "node:timers/promises";

const PORT = 3199;
const BASE = `http://localhost:${PORT}`;
const MDP = "mot-de-passe-test";
const TOKEN = "atl_test_token_0123456789";
const env = { ...process.env, PORT: String(PORT), ADMIN_PASSWORD: MDP, API_TOKEN: TOKEN, SESSION_SECRET: "secret-de-test-secret-de-test-secret", BLOB_READ_WRITE_TOKEN: "" };
delete env.BLOB_READ_WRITE_TOKEN;

rmSync("data/db.json", { force: true });
mkdirSync("captures", { recursive: true });

const serveur = spawn("npx", ["next", "start", "-p", String(PORT)], { env, stdio: ["ignore", "pipe", "pipe"], detached: true });
serveur.stderr.on("data", (d) => process.stderr.write(d));
let echecs = 0;
const verifie = (ok, msg) => {
  console.log(`${ok ? "OK  " : "ECHEC"} ${msg}`);
  if (!ok) echecs++;
};

const api = async (chemin, { methode = "GET", corps, jeton = TOKEN, ua } = {}) => {
  const r = await fetch(BASE + chemin, {
    method: methode,
    headers: { ...(jeton ? { Authorization: `Bearer ${jeton}` } : {}), ...(corps ? { "Content-Type": "application/json" } : {}), ...(ua ? { "User-Agent": ua } : {}) },
    body: corps ? JSON.stringify(corps) : undefined,
    redirect: "manual",
  });
  const texte = await r.text();
  let json = null;
  try { json = JSON.parse(texte); } catch {}
  return { statut: r.status, json, r };
};

try {
  for (let i = 0; i < 60; i++) {
    try { if ((await fetch(BASE + "/login")).ok) break; } catch {}
    await pause(500);
  }

  // Protection
  verifie((await fetch(BASE + "/", { redirect: "manual" })).status === 307, "la page d'accueil redirige vers la connexion");
  verifie((await api("/api/v1/prospects", { jeton: null })).statut === 401, "API sans jeton : 401");
  verifie((await api("/api/v1/prospects", { jeton: "faux" })).statut === 401, "API avec mauvais jeton : 401");

  // Données importées
  const liste = await api("/api/v1/prospects");
  verifie(liste.json?.total === 22, `22 prospects importés (reçu ${liste.json?.total})`);
  verifie(liste.json?.prospects.filter((p) => p.maquetteUrl).length === 4, "4 maquettes reliées");
  verifie(liste.json?.prospects.every((p) => p.emails.every((e) => e.includes("@"))), "aucune adresse vide ou inventée");

  // Cycle complet
  const cree = await api("/api/v1/prospects", { methode: "POST", corps: { entreprise: "Test Plomberie", dirigeant: "J. Dupont", emails: "contact@test-plomberie.fr", arrondissement: "11e", maquetteUrl: "https://example.org/maquette", telephone: "01 23 45 67 89" } });
  verifie(cree.statut === 201, "création d'un prospect");
  const id = cree.json.prospect.id;
  verifie((await api("/api/v1/prospects", { methode: "POST", corps: { entreprise: "x", emails: "pas-un-mail" } })).statut === 400, "e-mail invalide refusé");

  const note = await api(`/api/v1/prospects/${id}/evenements`, { methode: "POST", corps: { type: "note", detail: "Premier contact par téléphone" } });
  verifie(note.statut === 201, "ajout d'une note");

  const mail = await api("/api/v1/emails", { methode: "POST", corps: { prospectId: id, modeleId: "m1" } });
  verifie(mail.statut === 201 && mail.json.email.corps.includes("Monsieur Dupont") && mail.json.email.corps.includes(`/t/c/${mail.json.email.id}`), "e-mail préparé depuis le modèle 1, nom et lien suivi remplis");
  const mid = mail.json.email.id;

  const envoi = await api(`/api/v1/emails/${mid}/envoyer`, { methode: "POST" });
  verifie(envoi.json?.envoye === false, `envoyeur désactivé : ${envoi.json?.raison}`);

  const marque = await api(`/api/v1/emails/${mid}/marquer-envoye`, { methode: "POST" });
  verifie(marque.json?.email?.statut === "envoye", "e-mail marqué comme envoyé");
  let rel = await api(`/api/v1/relances?prospectId=${id}&statut=planifiee`);
  verifie(rel.json.relances.length === 2, "deux relances planifiées (J+4, J+10)");
  verifie(rel.json.relances.every((r) => [1, 2, 3, 4, 5].includes(new Date(r.echeance + "T12:00:00Z").getUTCDay())), "relances sur des jours ouvrés");

  // Suivi : ouverture trop rapide et robot ignorés
  const humain = "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Mobile/15E148";
  const gif = await api(`/t/o/${mid}.gif`, { jeton: null, ua: humain });
  verifie(gif.statut === 200 && gif.r.headers.get("content-type") === "image/gif", "le pixel répond par un GIF");
  let fiche = (await api(`/api/v1/emails/${mid}`)).json.email;
  verifie(fiche.ouvertures === 0, "ouverture dans les 10 s ignorée");
  console.log("... attente de 11 s");
  await pause(11000);
  await api(`/t/o/${mid}.gif`, { jeton: null, ua: "Mozilla/5.0 (compatible; GoogleImageProxy)" });
  fiche = (await api(`/api/v1/emails/${mid}`)).json.email;
  verifie(fiche.ouvertures === 0, "robot ignoré");
  await api(`/t/o/${mid}.gif`, { jeton: null, ua: humain });
  const clic = await api(`/t/c/${mid}`, { jeton: null, ua: humain });
  verifie(clic.statut === 302 && clic.r.headers.get("location") === "https://example.org/maquette", "le lien suivi redirige vers la maquette");
  fiche = (await api(`/api/v1/emails/${mid}`)).json.email;
  verifie(fiche.ouvertures === 1 && fiche.clics === 1, "une ouverture et un clic enregistrés");
  const apresOuverture = (await api(`/api/v1/prospects/${id}`)).json;
  verifie(apresOuverture.prospect.statut === "ouverte", "étape passée à « Ouverte »");

  let afaire = (await api("/api/v1/a-faire")).json.actions;
  verifie(afaire.some((a) => a.prospectId === id && a.genre === "appel"), "« à faire » : appeler celui qui a ouvert");

  await api(`/api/v1/prospects/${id}/evenements`, { methode: "POST", corps: { type: "appel", detail: "Intéressé, rappeler jeudi" } });
  const rdv = await api(`/api/v1/prospects/${id}/evenements`, { methode: "POST", corps: { type: "rendez_vous", titre: "Rendez-vous jeudi 10 h" } });
  verifie(rdv.statut === 201, "rendez-vous ajouté");

  // Arrêt des relances sur réponse
  await api(`/api/v1/prospects/${id}/evenements`, { methode: "POST", corps: { type: "reponse", detail: "Répond par mail" } });
  rel = await api(`/api/v1/relances?prospectId=${id}`);
  verifie(rel.json.relances.every((r) => r.statut === "annulee"), "réponse reçue : relances annulées automatiquement");
  verifie((await api("/api/v1/relances", { methode: "POST", corps: { prospectId: id, modeleId: "m2", echeance: "2030-01-01" } })).statut === 409, "relance impossible après une réponse");

  // Relance manuelle sur un autre prospect puis annulation
  const autre = (await api("/api/v1/prospects", { methode: "POST", corps: { entreprise: "Autre Test" } })).json.prospect.id;
  const r1 = await api("/api/v1/relances", { methode: "POST", corps: { prospectId: autre, modeleId: "m2", echeance: "2020-01-01" } });
  verifie(r1.statut === 201, "relance créée à la main");
  afaire = (await api("/api/v1/a-faire")).json.actions;
  verifie(afaire.some((a) => a.relanceId === r1.json.relance.id), "relance échue dans « à faire »");
  verifie((await api(`/api/v1/relances/${r1.json.relance.id}`, { methode: "DELETE" })).json.relance.statut === "annulee", "relance annulée");

  const tdb = (await api("/api/v1/tableau-de-bord")).json;
  verifie(tdb.jour.emailsEnvoyes >= 1 && tdb.jour.ouvertures >= 1 && tdb.jour.reponses >= 1 && tdb.entonnoir.length === 8, "tableau de bord cohérent");
  console.log(JSON.stringify({ jour: tdb.jour, entonnoir: tdb.entonnoir.map((e) => `${e.statut}:${e.nombre}`).join(" ") }));

  // Pipeline
  const pipe = (await api("/api/v1/pipeline")).json;
  verifie(pipe.colonnes?.length === 8 && pipe.colonnes.reduce((s, c) => s + c.nombre, 0) === liste.json.total + 2, "pipeline : 8 colonnes, tous les prospects");
  verifie((await api("/api/v1/pipeline/deplacer", { methode: "POST", corps: { prospectId: autre, statut: "nimporte" } })).statut === 400, "pipeline : étape inconnue refusée");
  const dep = await api("/api/v1/pipeline/deplacer", { methode: "POST", corps: { prospectId: autre, statut: "appel_fait" } });
  verifie(dep.json?.prospect?.statut === "appel_fait", "pipeline : déplacement par l'API");
  const evAutre = (await api(`/api/v1/prospects/${autre}/evenements`)).json.evenements;
  verifie(evAutre.some((e) => e.type === "statut" && e.detail === "Déplacé dans le pipeline"), "pipeline : événement « statut » créé");

  // Argent
  const f1 = await api(`/api/v1/prospects/${id}`, { methode: "PATCH", corps: { formule: "croissance" } });
  verifie(f1.json?.prospect?.montantDevis === 3490 && f1.json.prospect.montantMensuel === 199, "formule Croissance : montants remplis (3 490 € + 199 €/mois)");
  verifie((await api(`/api/v1/prospects/${id}`, { methode: "PATCH", corps: { formule: "luxe" } })).statut === 400, "formule inconnue refusée");
  verifie((await api(`/api/v1/prospects/${id}`, { methode: "PATCH", corps: { montantDevis: "beaucoup" } })).statut === 400, "montant invalide refusé");
  const f2 = await api(`/api/v1/prospects/${id}`, { methode: "PATCH", corps: { montantDevis: "3 200,50" } });
  verifie(f2.json?.prospect?.montantDevis === 3200.5 && f2.json.prospect.formule === "croissance", "montant saisi à la française");
  const signeP = (await api("/api/v1/prospects", { methode: "POST", corps: { entreprise: "Signé Test", formule: "essentiel", statut: "signe" } })).json.prospect;
  verifie(signeP.montantDevis === 1490 && /^\d{4}-\d{2}-\d{2}$/.test(signeP.signeLe ?? ""), "signé : date de signature remplie toute seule");
  verifie((await api("/api/v1/reglages", { methode: "PATCH", corps: { objectifMensuel: -3 } })).statut === 400, "objectif négatif refusé");
  const reg = await api("/api/v1/reglages", { methode: "PATCH", corps: { objectifMensuel: 10000 } });
  verifie(reg.json?.reglages?.objectifMensuel === 10000, "objectif mensuel réglé");
  const arg = (await api("/api/v1/argent")).json;
  verifie(arg.caSigneMois === 1490 && arg.revenuMensuel === 49 && arg.progression === 0.149, `argent : signé du mois, récurrent, progression (${arg.caSigneMois}, ${arg.revenuMensuel}, ${arg.progression})`);
  verifie(arg.caDevis === 3201 && arg.caDevisPondere === Math.round(3200.5 * 0.5), `argent : en devis pondéré par étape (${arg.caDevisPondere})`);
  verifie((await api("/api/v1/tableau-de-bord")).json.argent?.objectifMensuel === 10000, "tableau de bord : bloc argent");

  // Agenda
  const jourParisTest = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Paris" }).format(new Date());
  const ete = await api("/api/v1/agenda", { methode: "POST", corps: { prospectId: id, jour: "2026-07-15", heure: "10:00", titre: "Visite été", lieu: "Paris 11e, 3 rue X; bât. B" } });
  verifie(ete.statut === 201 && ete.json.rendezVous.debut === "2026-07-15T08:00:00.000Z", `agenda : 10 h à Paris l'été = 8 h UTC (${ete.json?.rendezVous?.debut})`);
  const hiver = await api("/api/v1/agenda", { methode: "POST", corps: { jour: "2026-12-15", heure: "10:00", genre: "rappel" } });
  verifie(hiver.json?.rendezVous?.debut === "2026-12-15T09:00:00.000Z" && hiver.json.rendezVous.titre === "Rappel" && hiver.json.rendezVous.prospectId === null, "agenda : rappel sans prospect, heure d'hiver");
  verifie((await api("/api/v1/agenda", { methode: "POST", corps: { jour: "2026-12-15", heure: "25:00" } })).statut === 400, "agenda : heure invalide refusée");
  verifie((await api("/api/v1/agenda", { methode: "POST", corps: { prospectId: "inconnu", jour: "2026-12-15", heure: "10:00" } })).statut === 404, "agenda : prospect inconnu");
  const duJourRdv = await api("/api/v1/agenda", { methode: "POST", corps: { prospectId: id, jour: jourParisTest, heure: "23:30", titre: "Point devis" } });
  verifie(duJourRdv.statut === 201, "agenda : rendez-vous du jour créé");
  afaire = (await api("/api/v1/a-faire")).json.actions;
  verifie(afaire[0]?.agendaId === duJourRdv.json.rendezVous.id && afaire[0].heure === "23:30", "« à faire » : rendez-vous du jour en tête");
  const evRdv = (await api(`/api/v1/prospects/${id}/evenements`)).json.evenements;
  verifie(evRdv.some((e) => e.type === "rendez_vous" && e.titre.startsWith("Rendez-vous le")), "agenda : rendez-vous inscrit dans l'historique");
  const ics = await fetch(`${BASE}/api/v1/agenda/${ete.json.rendezVous.id}/ics`, { headers: { Authorization: `Bearer ${TOKEN}` } });
  const icsTexte = await ics.text();
  verifie(ics.headers.get("content-type")?.startsWith("text/calendar") && /attachment; filename=".+\.ics"/.test(ics.headers.get("content-disposition") ?? ""), "agenda : .ics téléchargeable");
  verifie(icsTexte.includes("DTSTART:20260715T080000Z\r\nDTEND:20260715T090000Z") && icsTexte.includes("LOCATION:Paris 11e\\, 3 rue X\\; bât. B") && icsTexte.endsWith("END:VCALENDAR\r\n"), "agenda : .ics conforme (UTC, échappement, CRLF)");
  const pf = await api(`/api/v1/agenda/${duJourRdv.json.rendezVous.id}`, { methode: "PATCH", corps: { fait: true } });
  verifie(pf.json?.rendezVous?.fait === true, "agenda : marqué fait");
  verifie(!(await api("/api/v1/a-faire")).json.actions.some((a) => a.agendaId === duJourRdv.json.rendezVous.id), "« à faire » : rendez-vous fait retiré");
  await api(`/api/v1/agenda/${duJourRdv.json.rendezVous.id}`, { methode: "PATCH", corps: { fait: false } });
  const deplace = await api(`/api/v1/agenda/${hiver.json.rendezVous.id}`, { methode: "PATCH", corps: { jour: "2026-12-16", heure: "08:15" } });
  verifie(deplace.json?.rendezVous?.debut === "2026-12-16T07:15:00.000Z", "agenda : rendez-vous déplacé");
  verifie((await api(`/api/v1/agenda?du=2026-12-01&au=2026-12-31`)).json.total === 1, "agenda : filtre par période");
  verifie((await api(`/api/v1/agenda/${hiver.json.rendezVous.id}`, { methode: "DELETE" })).json?.ok === true && (await api(`/api/v1/agenda/${hiver.json.rendezVous.id}`)).statut === 404, "agenda : suppression");

  // Import / export CSV
  const exp = await fetch(`${BASE}/api/v1/prospects/export`, { headers: { Authorization: `Bearer ${TOKEN}` } });
  const expTexte = await exp.text();
  const totalAvant = (await api("/api/v1/prospects")).json.total;
  verifie(exp.headers.get("content-type")?.startsWith("text/csv") && /attachment; filename="atelier-os-prospects-.+\.csv"/.test(exp.headers.get("content-disposition") ?? ""), "export CSV téléchargeable");
  verifie(expTexte.startsWith("\uFEFFentreprise;dirigeant;emails") || expTexte.startsWith("entreprise;dirigeant;emails"), "export CSV : en-tête et point-virgule");
  const retour = await api("/api/v1/prospects/import", { methode: "POST", corps: { csv: expTexte, apercu: true } });
  verifie(retour.json?.nouveaux === 0 && retour.json.doublons === totalAvant && retour.json.erreurs === 0, `export réimporté : ${retour.json?.doublons} doublons sur ${totalAvant}, aucun nouveau`);
  const csv = [
    "Société,E-mail,Téléphone,Ville,Étape,Formule,Notes,Colonne inconnue",
    'Nouvelle Plomberie,nouveau@plomberie-nouvelle.fr,01 11 22 33 44,Montreuil,Devis,Visibilité,"Note avec, virgule\net retour",x',
    "GAZ FLASH,,,,,,,",
    "Autre Nom,CONTACT@test-plomberie.fr,,,,,,",
    "Doublon Interne SARL,,,,,,,",
    "doublon interne,,,,,,,",
    "Mauvais Mail,pas-un-mail,,,,,,",
  ].join("\n");
  const ap = await api("/api/v1/prospects/import", { methode: "POST", corps: { csv, apercu: true } });
  verifie(ap.json?.nouveaux === 2 && ap.json.doublons === 3 && ap.json.erreurs === 1, `import CSV : aperçu (2 nouveaux, 3 doublons, 1 erreur ; reçu ${ap.json?.nouveaux}/${ap.json?.doublons}/${ap.json?.erreurs})`);
  verifie(ap.json.lignes.find((l) => l.entreprise === "GAZ FLASH")?.doublonDe?.id === "gaz-flash" && ap.json.lignes.find((l) => l.entreprise === "Autre Nom")?.doublonDe?.id === id, "import CSV : doublon par nom et par e-mail");
  verifie(ap.json.colonnesIgnorees.includes("Colonne inconnue"), "import CSV : colonnes inconnues signalées");
  verifie((await api("/api/v1/prospects")).json.total === totalAvant, "import CSV : l'aperçu n'écrit rien");
  const brut = await fetch(`${BASE}/api/v1/prospects/import?apercu=1`, { method: "POST", headers: { Authorization: `Bearer ${TOKEN}`, "Content-Type": "text/csv" }, body: csv });
  verifie((await brut.json()).nouveaux === 2, "import CSV : corps text/csv brut accepté");
  const imp = await api("/api/v1/prospects/import", { methode: "POST", corps: { csv, apercu: false } });
  verifie(imp.json?.importes === 2 && (await api("/api/v1/prospects")).json.total === totalAvant + 2, "import CSV : 2 prospects importés");
  const np = (await api(`/api/v1/prospects/${imp.json.prospects[0].id}`)).json.prospect;
  verifie(np.statut === "devis" && np.formule === "visibilite" && np.montantDevis === 2490 && np.notes === "Note avec, virgule\net retour" && np.ville === "Montreuil", "import CSV : étape, formule, montants et notes lus");
  verifie((await api("/api/v1/prospects/import", { methode: "POST", corps: { csv: "nom;ville\n" } })).statut === 400, "import CSV : fichier sans données refusé");
  verifie((await api("/api/v1/prospects/import", { methode: "POST", corps: { csv: "ville\nParis" } })).statut === 400, "import CSV : colonne entreprise obligatoire");

  // Recherche globale
  const rq = async (q) => (await api(`/api/v1/recherche?q=${encodeURIComponent(q)}`)).json;
  verifie((await rq("GAZ flash")).prospects[0]?.id === "gaz-flash", "recherche : prospect par nom (casse ignorée)");
  verifie((await rq("seragaz franche")).prospects.some((p) => p.id === "seragaz"), "recherche : plusieurs mots (entreprise + dirigeant)");
  verifie((await rq("rappeler jeudi")).notes.some((n) => n.prospectId === id && n.extrait.includes("rappeler jeudi")), "recherche : texte d'un appel dans l'historique");
  verifie((await rq("monsieur dupont")).emails.some((m) => m.id === mid), "recherche : contenu d'un e-mail");
  verifie((await rq("note avec virgule")).notes.some((n) => n.titre.startsWith("Notes")), "recherche : notes d'un prospect");
  verifie((await rq("CRÉÉE en 1965")).notes.some((n) => n.prospectId === "gaz-flash") && (await rq("creee en 1965")).notes.some((n) => n.prospectId === "gaz-flash"), "recherche : accents ignorés");
  const vide = await rq("   ");
  verifie(vide.prospects.length === 0 && vide.emails.length === 0 && vide.notes.length === 0, "recherche : vide sans résultat");

  // Captures
  const requis = createRequire(import.meta.url);
  let pw;
  for (const nom of [process.env.PLAYWRIGHT_CORE, "playwright", "/opt/node-tools/node_modules/playwright", "playwright-core"].filter(Boolean)) {
    try { pw = requis(nom); break; } catch {}
  }
  const { chromium } = pw;
  const navigateur = await chromium.launch(process.env.CHROME ? { executablePath: process.env.CHROME, args: ["--no-sandbox"] } : {});
  const connecter = async (page) => {
    await page.goto(BASE + "/login");
    await page.fill("input[name=motdepasse]", MDP);
    await page.click("button[type=submit]");
    await page.waitForURL(BASE + "/");
  };
  const statutDe = async (pid) => (await api(`/api/v1/prospects/${pid}`)).json.prospect.statut;

  // Pipeline : glisser-déposer à la souris
  {
    const ctx = await navigateur.newContext({ viewport: { width: 1440, height: 900 }, locale: "fr-FR" });
    const page = await ctx.newPage();
    await connecter(page);
    await page.goto(BASE + "/pipeline", { waitUntil: "networkidle" });
    const carte = page.locator(`[data-carte="${autre}"]`);
    const cible = page.locator('[data-colonne="rendez_vous"]');
    await cible.scrollIntoViewIfNeeded();
    await carte.scrollIntoViewIfNeeded();
    const a = await carte.boundingBox();
    const b = await cible.boundingBox();
    await page.mouse.move(a.x + 40, a.y + 20);
    await page.mouse.down();
    for (let i = 1; i <= 12; i++) await page.mouse.move(a.x + 40 + ((b.x + 60 - a.x - 40) * i) / 12, a.y + 20 + ((b.y + 60 - a.y - 20) * i) / 12);
    await page.mouse.up();
    await page.waitForTimeout(800);
    verifie((await statutDe(autre)) === "rendez_vous", "pipeline : glisser-déposer à la souris");
    verifie(page.url() === BASE + "/pipeline", "pipeline : le glisser n'ouvre pas la fiche");
    await ctx.close();
  }
  // Argent : choisir une formule sur la fiche
  {
    const ctx = await navigateur.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true, locale: "fr-FR" });
    const page = await ctx.newPage();
    await connecter(page);
    await page.goto(BASE + `/prospects/${autre}`, { waitUntil: "networkidle" });
    await page.getByRole("button", { name: /^Visibilité/ }).click();
    await page.locator("form:has(#montantDevis) button[type=submit], form:has(#montantDevis) button:not([type])").last().click();
    await page.waitForTimeout(800);
    const pa = (await api(`/api/v1/prospects/${autre}`)).json.prospect;
    verifie(pa.formule === "visibilite" && pa.montantDevis === 2490 && pa.montantMensuel === 99, "fiche : formule Visibilité enregistrée depuis l'interface");
    await ctx.close();
  }
  // Agenda : ajout depuis la page et téléchargement du .ics
  {
    const ctx = await navigateur.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true, locale: "fr-FR", acceptDownloads: true });
    const page = await ctx.newPage();
    await connecter(page);
    await page.goto(BASE + "/agenda", { waitUntil: "networkidle" });
    await page.getByRole("button", { name: "Rendez-vous ou rappel" }).click();
    await page.fill("#ag-titre", "Démo maquette e2e");
    await page.selectOption("#ag-prospect", autre);
    await page.fill("#ag-jour", jourParisTest);
    await page.fill("#ag-heure", "23:45");
    await page.getByRole("button", { name: "Ajouter", exact: true }).click();
    await page.waitForTimeout(1000);
    const cree = (await api(`/api/v1/agenda?prospectId=${autre}`)).json.rendezVous.find((r) => r.titre === "Démo maquette e2e");
    verifie(Boolean(cree), "agenda : ajout depuis l'interface");
    await page.goto(BASE + "/agenda", { waitUntil: "networkidle" });
    const [dl] = await Promise.all([page.waitForEvent("download"), page.click(`[data-ics="${cree?.id}"]`)]);
    verifie(dl.suggestedFilename().endsWith(".ics"), `agenda : bouton « Ajouter au calendrier » (${dl.suggestedFilename()})`);
    await page.goto(BASE + "/", { waitUntil: "networkidle" });
    verifie(await page.getByText("23:45 · Démo maquette e2e").isVisible(), "accueil : rendez-vous du jour dans « À faire »");
    await ctx.close();
  }
  // Import CSV depuis les réglages, puis export
  {
    const ctx = await navigateur.newContext({ viewport: { width: 1440, height: 900 }, locale: "fr-FR", acceptDownloads: true });
    const page = await ctx.newPage();
    await connecter(page);
    await page.goto(BASE + "/reglages", { waitUntil: "networkidle" });
    await page.setInputFiles("[data-import-fichier]", { name: "prospects.csv", mimeType: "text/csv", buffer: Buffer.from("entreprise;telephone\nPlomberie Interface;01 99 88 77 66\nGaz Flash;\n") });
    await page.waitForSelector("[data-import-apercu]");
    await page.screenshot({ path: "captures/1440-clair-import-apercu.png", fullPage: true });
    await page.getByRole("button", { name: "Importer 1 prospect" }).click();
    await page.waitForSelector("[data-import-resultat]");
    verifie((await page.textContent("[data-import-resultat]")).includes("1 prospect importé, 1 doublon ignoré"), "import CSV depuis l'interface avec aperçu");
    const [dl] = await Promise.all([page.waitForEvent("download"), page.click("[data-export]")]);
    verifie(dl.suggestedFilename().endsWith(".csv"), `export CSV depuis l'interface (${dl.suggestedFilename()})`);
    await ctx.close();
  }
  // Recherche : ⌘K au clavier, loupe sur iPhone
  {
    const ctx = await navigateur.newContext({ viewport: { width: 1440, height: 900 }, locale: "fr-FR" });
    const page = await ctx.newPage();
    await connecter(page);
    await page.keyboard.press("Meta+k");
    await page.waitForSelector("[role=dialog] input");
    await page.keyboard.type("gaz flash");
    await page.waitForSelector("[data-recherche-resultats] [data-index='0']");
    await page.screenshot({ path: "captures/1440-clair-recherche.png" });
    await page.keyboard.press("Enter");
    await page.waitForURL(BASE + "/prospects/gaz-flash");
    verifie(true, "recherche : ⌘K, saisie, Entrée ouvre la fiche");
    await page.keyboard.press("Control+k");
    verifie(await page.locator("[role=dialog]").isVisible(), "recherche : Ctrl+K ouvre aussi");
    await page.keyboard.press("Escape");
    verifie(!(await page.locator("[role=dialog]").isVisible()), "recherche : Échap ferme");
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto(BASE + "/", { waitUntil: "networkidle" });
    verifie(!(await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1)), "en-tête sans débordement à 768 px");
    await ctx.close();
  }
  for (const theme of ["light", "dark"]) {
    const ctx = await navigateur.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true, locale: "fr-FR", colorScheme: theme });
    const page = await ctx.newPage();
    await connecter(page);
    await page.locator("header.md\\:hidden [data-recherche-bouton]").tap();
    await page.keyboard.type("rappeler jeudi");
    await page.waitForSelector("[data-recherche-resultats] [data-index='0']");
    await page.screenshot({ path: `captures/390-${theme === "light" ? "clair" : "sombre"}-recherche.png` });
    await page.locator("[data-recherche-resultats] [data-index='0']").tap();
    await page.waitForURL(BASE + `/prospects/${id}`);
    verifie(true, `recherche : loupe sur iPhone (${theme})`);
    await ctx.close();
  }
  // Pipeline : menu « Déplacer vers » et glisser au doigt sur iPhone
  {
    const ctx = await navigateur.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true, locale: "fr-FR" });
    const page = await ctx.newPage();
    await connecter(page);
    await page.goto(BASE + "/pipeline", { waitUntil: "networkidle" });
    await page.selectOption(`select[data-deplacer="${autre}"]`, "devis");
    await page.waitForTimeout(800);
    verifie((await statutDe(autre)) === "devis", "pipeline : menu « Déplacer vers » sur mobile");
    // glisser au doigt via la poignée (événements pointeur de type « touch »), de « Devis » vers « Signé »
    await page.evaluate(() => document.querySelector('[data-colonne="devis"]').scrollIntoView({ inline: "start", block: "nearest" }));
    await page.waitForTimeout(400);
    const h = await page.locator(`[data-carte="${autre}"] [data-poignee]`).boundingBox();
    const colSigne = await page.locator('[data-colonne="signe"]').boundingBox();
    const x0 = h.x + h.width / 2, y0 = h.y + h.height / 2;
    const x1 = Math.min(colSigne.x + 30, 380), y1 = colSigne.y + 60;
    const evt = (type, x, y) => page.evaluate(([type, x, y, id]) => {
      const el = type === "pointerdown" ? document.querySelector(`[data-carte="${id}"] [data-poignee]`) : window;
      el.dispatchEvent(new PointerEvent(type, { clientX: x, clientY: y, pointerType: "touch", bubbles: true, cancelable: true, button: 0, isPrimary: true }));
    }, [type, x, y, autre]);
    await evt("pointerdown", x0, y0);
    for (let i = 1; i <= 6; i++) await evt("pointermove", x0 + ((x1 - x0) * i) / 6, y0 + ((y1 - y0) * i) / 6);
    await evt("pointerup", x1, y1);
    await page.waitForTimeout(800);
    verifie((await statutDe(autre)) === "signe", "pipeline : glisser au doigt avec la poignée");
    await ctx.close();
  }
  const tailles = [
    ["1440", { width: 1440, height: 900 }, 1],
    ["390", { width: 390, height: 844 }, 2],
  ];
  for (const [nom, vp, dpr] of tailles) {
    for (const theme of ["clair", "sombre"]) {
      const ctx = await navigateur.newContext({ viewport: vp, deviceScaleFactor: dpr, colorScheme: theme === "clair" ? "light" : "dark", locale: "fr-FR", isMobile: nom === "390", hasTouch: nom === "390" });
      const page = await ctx.newPage();
      await page.goto(BASE + "/login");
      if (theme === "clair") await page.screenshot({ path: `captures/${nom}-${theme}-connexion.png` });
      await page.fill("input[name=motdepasse]", "faux");
      await page.click("button[type=submit]");
      await page.waitForURL(/erreur=1/);
      await page.fill("input[name=motdepasse]", MDP);
      await page.click("button[type=submit]");
      await page.waitForURL(BASE + "/");
      const pages = [
        ["accueil", "/"],
        ["prospects", "/prospects"],
        ["pipeline", "/pipeline"],
        ["agenda", "/agenda"],
        ["fiche", `/prospects/${id}`],
        ["fiche-gaz", "/prospects/gaz-flash"],
        ["emails", "/emails"],
        ["modeles", "/emails?vue=modeles"],
        ["reglages", "/reglages"],
      ];
      for (const [n, chemin] of pages) {
        if (theme === "sombre" && !["accueil", "fiche", "pipeline", "agenda"].includes(n)) continue;
        await page.goto(BASE + chemin, { waitUntil: "networkidle" });
        await pause(300);
        const debordement = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1);
        if (debordement) verifie(false, `défilement horizontal sur ${chemin} à ${nom}`);
        await page.screenshot({ path: `captures/${nom}-${theme}-${n}.png`, fullPage: true });
      }
      await ctx.close();
    }
  }
  await navigateur.close();

  // Ménage
  await api(`/api/v1/prospects/${id}`, { methode: "DELETE" });
  await api(`/api/v1/prospects/${autre}`, { methode: "DELETE" });
  await api(`/api/v1/prospects/${signeP.id}`, { methode: "DELETE" });
} catch (e) {
  console.error(e);
  echecs++;
} finally {
  try { process.kill(-serveur.pid); } catch {}
  rmSync("data/db.json", { force: true });
}
console.log(echecs ? `\n${echecs} échec(s)` : "\nTout est bon.");
process.exit(echecs ? 1 : 0);
