// Test de bout en bout : lance l'application, se connecte, appelle l'API, prend des captures.
// Usage : npm run build && PLAYWRIGHT_CORE=/chemin/vers/playwright-core CHROME=/chemin/chrome npm run test:e2e
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

  // Captures
  const requis = createRequire(import.meta.url);
  const { chromium } = requis(process.env.PLAYWRIGHT_CORE || "playwright-core");
  const navigateur = await chromium.launch({ executablePath: process.env.CHROME, args: ["--no-sandbox"] });
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
        ["fiche", `/prospects/${id}`],
        ["fiche-gaz", "/prospects/gaz-flash"],
        ["emails", "/emails"],
        ["modeles", "/emails?vue=modeles"],
        ["reglages", "/reglages"],
      ];
      for (const [n, chemin] of pages) {
        if (theme === "sombre" && !["accueil", "fiche"].includes(n)) continue;
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
} catch (e) {
  console.error(e);
  echecs++;
} finally {
  try { process.kill(-serveur.pid); } catch {}
  rmSync("data/db.json", { force: true });
}
console.log(echecs ? `\n${echecs} échec(s)` : "\nTout est bon.");
process.exit(echecs ? 1 : 0);
