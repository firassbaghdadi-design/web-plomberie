// Test de bout en bout : lance l'application (PGlite en mémoire, données de démo),
// déroule le parcours principal dans Chromium, appelle l'API, prend des captures 390 / 1440 px, clair / sombre.
// Usage : npm run build && npm run test:e2e   (CAPTURES=0 pour sauter les captures)
import { spawn } from "node:child_process";
import { mkdirSync } from "node:fs";
import { createRequire } from "node:module";
import { setTimeout as pause } from "node:timers/promises";

const require = createRequire(import.meta.url);
let playwright;
try {
  playwright = require("playwright");
} catch {
  playwright = require("/opt/node-tools/node_modules/playwright");
}

const PORT = 3299;
const BASE = `http://localhost:${PORT}`;
const MDP_DEMO = "demo-e2e-2026";
const MDP_ADMIN = "admin-e2e-2026-tres-long";
const env = {
  ...process.env,
  PORT: String(PORT),
  PGLITE_DIR: "memory://",
  DEMO_PASSWORD: MDP_DEMO,
  ADMIN_PASSWORD: MDP_ADMIN,
  ATELIER_MODE_DEMO: "1",
  SESSION_SECRET: "secret-de-test-e2e-secret-de-test-e2e-0123",
};
delete env.DATABASE_URL;
mkdirSync("captures", { recursive: true });

const serveur = spawn("npx", ["next", "start", "-p", String(PORT)], { env, stdio: ["ignore", "pipe", "pipe"], detached: true });
serveur.stderr.on("data", (d) => process.stderr.write(d));
let echecs = 0;
const verifie = (ok, msg) => {
  console.log(`${ok ? "OK   " : "ECHEC"} ${msg}`);
  if (!ok) echecs++;
};

const api = async (chemin, { methode = "GET", corps, jeton, entetes = {} } = {}) => {
  const r = await fetch(BASE + "/api/v2" + chemin, {
    method: methode,
    headers: { ...(jeton ? { Authorization: `Bearer ${jeton}` } : {}), ...(corps ? { "Content-Type": "application/json" } : {}), ...entetes },
    body: corps ? JSON.stringify(corps) : undefined,
  });
  const t = await r.text();
  let json = null;
  try {
    json = JSON.parse(t);
  } catch {}
  return { statut: r.status, json, r };
};

async function connecter(page, email, mdp) {
  await page.goto(BASE + "/connexion");
  await page.fill('input[name="email"]', email);
  await page.fill('input[name="motDePasse"]', mdp);
  await Promise.all([page.waitForURL((u) => !u.pathname.startsWith("/connexion")), page.click('button[type="submit"]')]);
}

const aujourdhui = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/Paris" }).format(new Date());

try {
  for (let i = 0; i < 80; i++) {
    try {
      if ((await fetch(BASE + "/api/sante")).ok) break;
    } catch {}
    await pause(500);
  }
  verifie((await (await fetch(BASE + "/api/sante")).json()).ok === true, "le serveur répond et la base est prête");
  verifie((await fetch(BASE + "/", { redirect: "manual" })).status === 307, "l'accueil redirige vers la connexion sans session");
  verifie((await api("/clients")).statut === 401, "API sans authentification : 401");
  const spec = await (await fetch(BASE + "/api/v2/openapi.json")).json();
  verifie(spec.openapi === "3.1.0" && Object.keys(spec.paths).length >= 16, "OpenAPI 3.1 servie sur /api/v2/openapi.json");

  const navigateur = await playwright.chromium.launch();
  const contexte = await navigateur.newContext({ viewport: { width: 390, height: 844 }, locale: "fr-FR", timezoneId: "Europe/Paris" });
  const page = await contexte.newPage();
  const erreursJs = [];
  page.on("pageerror", (e) => erreursJs.push(e.message));

  // Connexion
  await page.goto(BASE + "/connexion");
  await page.fill('input[name="email"]', "karim@plomberie-demo.fr");
  await page.fill('input[name="motDePasse"]', "mauvais");
  await page.click('button[type="submit"]');
  await page.getByText("E-mail ou mot de passe incorrect.").waitFor();
  verifie(true, "mauvais mot de passe refusé avec un message");
  await connecter(page, "karim@plomberie-demo.fr", MDP_DEMO);
  verifie(await page.getByRole("heading", { level: 1 }).filter({ hasText: "Karim" }).isVisible(), "connexion du dirigeant, tableau de bord affiché");
  verifie(await page.getByText("Mode démo").first().isVisible(), "bandeau « mode démo » visible");

  // Nouveau client
  await page.goto(BASE + "/clients/nouveau");
  await page.fill('input[name="nom"]', "Agnès Testeuse");
  await page.fill('input[name="telephone"]', "06 01 02 03 04");
  await page.fill('input[name="adresse"]', "3 rue Saint-Maur");
  await page.fill('input[name="codePostal"]', "75011");
  await Promise.all([page.waitForURL(/\/clients\/cli_/), page.click('button:has-text("Créer le client")')]);
  const urlClient = page.url();
  verifie(await page.getByRole("heading", { name: "Agnès Testeuse" }).isVisible(), "client créé, fiche ouverte");
  verifie(await page.getByRole("link", { name: /3 rue Saint-Maur/ }).isVisible(), "adresse d'intervention créée avec le client");

  // Contact, note, tâche
  await page.getByText("Ajouter un contact").click();
  await page.fill('input[name="prenom"]', "Paul");
  await page.locator('form:has(button:has-text("Ajouter le contact")) input[name="nom"]').fill("Testeur");
  await page.click('button:has-text("Ajouter le contact")');
  await page.getByText("Paul Testeur", { exact: true }).waitFor();
  verifie(true, "contact ajouté");
  await page.fill('textarea[name="contenu"]', "Digicode 4512B, chien gentil.");
  await page.locator('form:has(textarea[name="contenu"]) button:has-text("Ajouter")').click();
  await page.getByText("Digicode 4512B, chien gentil.", { exact: true }).waitFor();
  verifie(true, "note ajoutée");
  await page.fill('input[name="titre"]', "Envoyer le devis à Mme Testeuse");
  await page.locator('form:has(input[name="titre"]) input[name="echeance"]').fill(aujourdhui);
  await page.locator('form:has(input[name="titre"]) button:has-text("Ajouter")').click();
  await page.getByText("Envoyer le devis à Mme Testeuse", { exact: true }).waitFor();
  verifie(true, "tâche ajoutée sur la fiche");
  verifie(await page.getByText("Client créé : Agnès Testeuse").isVisible(), "journal d'activité alimenté");

  // Chantier
  await page.click('a[href^="/chantiers/nouveau?client="]');
  await page.waitForURL(/\/chantiers\/nouveau/);
  await page.fill('input[name="titre"]', "Remplacement chauffe-eau 200 L");
  await page.fill('input[name="montantEstimeHt"]', "1 850");
  await Promise.all([page.waitForURL(/\/chantiers\/chn_/), page.click('button:has-text("Créer le chantier")')]);
  verifie(await page.getByRole("heading", { name: "Remplacement chauffe-eau 200 L" }).isVisible(), "chantier créé");
  verifie(await page.getByText("1 850 € HT").isVisible(), "montant en euros enregistré en centimes et réaffiché");
  await page.click('button:has-text("Passer « En devis »")');
  await page.getByText("Passer « Planifié »").waitFor();
  verifie(true, "statut du chantier changé");

  // Ma journée : cocher la tâche
  await page.goto(BASE + "/taches");
  const tache = page.getByRole("button", { name: "Marquer « Envoyer le devis à Mme Testeuse » comme faite" });
  await tache.click();
  await page.getByRole("button", { name: "Rouvrir « Envoyer le devis à Mme Testeuse »" }).waitFor();
  verifie(true, "tâche cochée dans « Ma journée »");

  // Jeton API puis appels API
  await page.goto(BASE + "/reglages/jetons");
  await page.fill('input[name="nom"]', "E2E");
  await page.click('label:has-text("Lecture et écriture")');
  await page.click('button:has-text("Créer le jeton")');
  const secret = (await page.getByTestId("valeur-copiable").textContent()).trim();
  verifie(/^aos_[0-9a-z]{8}_/.test(secret), "jeton API créé, secret affiché une fois");
  const r1 = await api("/clients?q=Testeuse", { jeton: secret });
  verifie(r1.statut === 200 && r1.json.donnees.length === 1, "API : recherche du client créé dans l'interface");
  const cle = `e2e-${Date.now()}`;
  const p1 = await api("/taches", { methode: "POST", jeton: secret, corps: { titre: "Tâche via API", clientId: r1.json.donnees[0].id }, entetes: { "Idempotency-Key": cle } });
  const p2 = await api("/taches", { methode: "POST", jeton: secret, corps: { titre: "Tâche via API", clientId: r1.json.donnees[0].id }, entetes: { "Idempotency-Key": cle } });
  verifie(p1.statut === 201 && p2.json.id === p1.json.id && p2.r.headers.get("idempotency-replayed") === "true", "API : POST idempotent");
  const page1 = await api("/clients?limite=2", { jeton: secret });
  const page2 = await api(`/clients?limite=2&curseur=${page1.json.curseurSuivant}`, { jeton: secret });
  verifie(page2.statut === 200 && page2.json.donnees[0].id !== page1.json.donnees[0].id, "API : pagination par curseur");
  verifie((await api("/clients", { methode: "POST", jeton: secret, corps: { nom: "" } })).json.erreur.code === "validation", "API : erreur JSON homogène");
  await page.goto(urlClient);
  verifie(await page.getByText("Tâche via API", { exact: true }).isVisible(), "la tâche créée par l'API apparaît dans l'interface");

  // Invitation
  await page.goto(BASE + "/equipe");
  await page.fill("#inv-email", "nadia@plomberie-demo.fr");
  await page.selectOption("#inv-role", "adv");
  await page.click('button:has-text("Inviter")');
  const lien = (await page.getByTestId("valeur-copiable").textContent()).trim();
  verifie(lien.includes("/invitation/"), "lien d'invitation généré");
  const contexte2 = await navigateur.newContext({ viewport: { width: 390, height: 844 }, locale: "fr-FR" });
  const p = await contexte2.newPage();
  await p.goto(lien);
  await p.fill('input[name="nom"]', "Nadia Cherif");
  await p.fill('input[name="motDePasse"]', "mot-de-passe-de-nadia");
  await Promise.all([p.waitForURL(BASE + "/"), p.click('button:has-text("Créer mon compte")')]);
  verifie(await p.getByRole("heading", { level: 1 }).filter({ hasText: "Nadia" }).isVisible(), "invitation acceptée, nouvelle ADV connectée");
  await p.goto(BASE + "/reglages/jetons");
  verifie(p.url().endsWith("/reglages"), "l'ADV n'accède pas aux jetons API");
  await contexte2.close();

  // Chargée d'affaires : lecture seule sur les clients d'un collègue
  const contexte3 = await navigateur.newContext({ viewport: { width: 390, height: 844 }, locale: "fr-FR" });
  const j = await contexte3.newPage();
  await connecter(j, "julie@plomberie-demo.fr", MDP_DEMO);
  await j.goto(BASE + "/clients/cli_demo_lemaire000000");
  const nAjout = await j.getByText("Ajouter un contact").count();
  verifie(nAjout === 0, `chargée d'affaires : pas d'édition sur le client d'un collègue (${nAjout}, ${j.url()})`);
  await j.goto(BASE + "/clients/cli_demo_dupont0000000");
  verifie((await j.getByText("Ajouter un contact").count()) === 1, "chargée d'affaires : édition sur son propre client");
  await contexte3.close();

  // Admin plateforme : change d'organisation
  const contexte4 = await navigateur.newContext({ viewport: { width: 1440, height: 900 }, locale: "fr-FR" });
  const a = await contexte4.newPage();
  await connecter(a, "firas@ateliertruelle.fr", MDP_ADMIN);
  await a.goto(BASE + "/organisations");
  verifie(await a.locator("main").getByText("Plomberie Démo Paris 11e").isVisible(), "admin plateforme : liste des organisations");
  await contexte4.close();

  verifie(erreursJs.length === 0, `aucune erreur JavaScript (${erreursJs.join(" | ")})`);

  // Captures
  if (process.env.CAPTURES !== "0") {
    const pages = [
      ["connexion", "/connexion", false],
      ["accueil", "/", true],
      ["clients", "/clients", true],
      ["fiche-client", "/clients/cli_demo_lemaire000000", true],
      ["chantiers", "/chantiers", true],
      ["fiche-chantier", "/chantiers/chn_demo_tilleuls_colo", true],
      ["journee", "/taches", true],
      ["equipe", "/equipe", true],
      ["reglages", "/reglages", true],
      ["jetons", "/reglages/jetons", true],
      ["bientot", "/bientot/devis", true],
      ["plus", "/plus", true],
      ["docs", "/docs", false],
    ];
    for (const [largeur, hauteur] of [
      [390, 844],
      [1440, 900],
    ]) {
      for (const theme of ["light", "dark"]) {
        const c = await navigateur.newContext({ viewport: { width: largeur, height: hauteur }, colorScheme: theme, locale: "fr-FR", timezoneId: "Europe/Paris", deviceScaleFactor: largeur < 500 ? 2 : 1 });
        const pg = await c.newPage();
        await connecter(pg, "karim@plomberie-demo.fr", MDP_DEMO);
        for (const [nom, chemin, connecte] of pages) {
          if (largeur > 500 && nom === "plus") continue;
          if (!connecte) await c.clearCookies();
          await pg.goto(BASE + chemin);
          await pg.waitForLoadState("networkidle");
          const debordement = await pg.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
          if (debordement) verifie(false, `débordement horizontal : ${nom} à ${largeur} px`);
          await pg.screenshot({ path: `captures/${largeur}-${theme === "light" ? "clair" : "sombre"}-${nom}.png`, fullPage: true });
          if (!connecte) await connecter(pg, "karim@plomberie-demo.fr", MDP_DEMO);
        }
        await c.close();
      }
    }
    console.log("Captures enregistrées dans captures/");
  }
  await navigateur.close();
} catch (e) {
  console.error(e);
  echecs++;
} finally {
  try {
    process.kill(-serveur.pid);
  } catch {}
}
console.log(echecs ? `\n${echecs} échec(s)` : "\nTout est vert.");
process.exit(echecs ? 1 : 0);
