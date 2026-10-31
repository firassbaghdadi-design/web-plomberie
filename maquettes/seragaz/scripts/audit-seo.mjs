// Audit SEO de la maquette SERAGAZ : node scripts/audit-seo.mjs http://localhost:3000 https://seragaz.fr
// Contrôle chaque page du sitemap selon la Bible : title, description, H1, canonical, « En bref », JSON-LD, FAQ,
// réponses des H2-questions, longueur du contenu, formulaire, liens internes, images, doublons.
const base = process.argv[2];
const siteUrl = (process.argv[3] ?? "https://seragaz.fr").replace(/\/$/, "");
// Ville attendue dans le H1 : Paris ou l'une des communes desservies
const cityRe = /paris|clichy|levallois|vincennes/i;
const CONTACT = /^\/contact-devis-gratuit/;
const LIGHT = /^\/(mentions-legales|plan-du-site)$/;
const dec = (s) => s.replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&nbsp;/g, " ");
const strip = (s) => dec(s.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
const sm = await (await fetch(`${base}/sitemap.xml`)).text();
const locs = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(siteUrl, "") || "/");
let bad = 0;
const seen = new Map();
const unique = { title: new Map(), h1: new Map(), description: new Map() };
console.log("page | title | desc | H1 | mots | En bref | FAQ | réponses H2");
for (const path of locs) {
  const res = await fetch(base + path);
  const html = await res.text();
  const issues = [];
  if (res.status !== 200) issues.push(`statut ${res.status}`);
  const title = dec((html.match(/<title>([^<]*)<\/title>/) ?? [])[1] ?? "");
  const desc = dec((html.match(/<meta name="description" content="([^"]*)"/) ?? [])[1] ?? "");
  const canon = (html.match(/<link rel="canonical" href="([^"]*)"/) ?? [])[1] ?? "";
  const h1n = (html.match(/<h1[\s>]/g) ?? []).length;
  const h1 = strip((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) ?? [])[1] ?? "");
  const main = (html.match(/<main[\s\S]*?<\/main>/) ?? [""])[0];
  const words = strip(main).split(" ").length;
  const light = LIGHT.test(path);
  const service = path !== "/" && !CONTACT.test(path) && !light;
  const brief = strip((html.match(/<p class="[^"]*reponse-bref[^"]*"[^>]*>([\s\S]*?)<\/p>/) ?? [])[1] ?? "").replace(/^En bref\s*[—:-]\s*/, "");
  const bw = brief ? brief.split(" ").length : 0;
  if ([...title].length < 50 || [...title].length > 60) issues.push(`title ${[...title].length}`);
  if ([...desc].length < 150 || [...desc].length > 160) issues.push(`description ${[...desc].length}`);
  if (h1n !== 1) issues.push(`h1 x${h1n}`);
  if (path !== "/" && !cityRe.test(h1)) issues.push("H1 sans la ville");
  if (canon !== siteUrl + (path === "/" ? "" : path) && canon !== siteUrl + path) issues.push(`canonical ${canon}`);
  if (bw < 40 || bw > 60) issues.push(`En bref ${bw} mots`);
  if (service && cityRe.exec(main.slice(0, 4000)) === null) issues.push("ville absente du début de page");
  if (service && words < 500) issues.push(`seulement ${words} mots`);
  // un seul formulaire sur tout le site : la page contact ; les autres pages renvoient vers elle par des boutons
  const isContact = CONTACT.test(path);
  if (isContact && !/<form/.test(html)) issues.push("pas de formulaire sur la page contact");
  if (!isContact && /<form/.test(html)) issues.push("formulaire hors page contact");
  if (!isContact && !light && !/href="\/contact-devis-gratuit[^"]*"/.test(main)) issues.push("pas de bouton vers la page contact");
  if (service && !/Demander un devis ou une intervention/.test(main.slice(0, main.indexOf("reponse-bref") + 1 || 20000))) issues.push("bouton « Demander un devis ou une intervention » absent du héros");
  if (!/>Devis gratuit</.test(html)) issues.push("bouton « Devis gratuit » absent du menu");
  if (/avis Google, (janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/.test(main)) issues.push("extraits d'avis affichés");
  if (!/<html lang="fr"/.test(html)) issues.push("lang");
  if (!/property="og:image"/.test(html)) issues.push("og:image");
  const ld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  const nodes = [];
  try { for (const j of ld) nodes.push(...JSON.parse(j.replace(/\\u003c/g, "<"))["@graph"]); } catch (e) { issues.push("JSON-LD invalide " + e.message); }
  const types = nodes.flatMap((n) => [].concat(n["@type"]));
  if (JSON.stringify(nodes).includes("aggregateRating")) issues.push("aggregateRating");
  if (!types.includes("WebPage") && !types.includes("ContactPage")) issues.push("pas de WebPage");
  if (path !== "/" && !types.includes("BreadcrumbList")) issues.push("pas de fil d'Ariane JSON-LD");
  const lbs = nodes.filter((n) => [].concat(n["@type"]).includes("LocalBusiness"));
  if (lbs.length !== 1 || !lbs[0]["@id"]) issues.push(`LocalBusiness x${lbs.length}`);
  const faq = nodes.find((n) => n["@type"] === "FAQPage");
  let faqInfo = "-";
  const visible = [...html.matchAll(/<details class="faq[^"]*"><summary[^>]*>([\s\S]*?)<\/summary><p class="faq-a[^"]*">([\s\S]*?)<\/p><\/details>/g)].map((m) => [strip(m[1]).replace(/\s*\+$/, ""), strip(m[2])]);
  if (faq) {
    const q = faq.mainEntity;
    const same = visible.length === q.length && q.every((it, i) => visible[i] && visible[i][0] === it.name && visible[i][1] === it.acceptedAnswer.text);
    if (!same) issues.push(`FAQ visible et JSON-LD différentes (${visible.length}/${q.length})`);
    faqInfo = String(q.length);
  } else if (visible.length) issues.push("FAQ visible sans JSON-LD");
  // réponses directes des H2-questions
  const answers = [...main.matchAll(/<h2[^>]*>([^<]*\?)<\/h2><p class="answer[^"]*">([\s\S]*?)<\/p>/g)].map((m) => strip(m[2]).split(" ").length);
  const qH2 = (main.match(/<h2[^>]*>[^<]*\?<\/h2>/g) ?? []).length;
  if (service && qH2 !== answers.length) issues.push(`${qH2 - answers.length} H2-question sans réponse directe`);
  if (service && answers.length < 2) issues.push("moins de 2 H2-questions");
  for (const n of answers) if (n < 40 || n > 60) issues.push(`réponse H2 ${n} mots`);
  const links = [...new Set([...main.matchAll(/href="(\/[^"#?]*)"/g)].map((m) => m[1]))];
  for (const l of links) if (!locs.includes(l) && !/^\/(llms\.txt|_next|photos|api)/.test(l)) issues.push(`lien interne hors sitemap ${l}`);
  const noAlt = (main.match(/<img(?![^>]*\balt=)[^>]*>/g) ?? []).length;
  if (noAlt) issues.push(`${noAlt} image sans alt`);
  for (const p of [...main.matchAll(/<p(?:\s[^>]*)?>([\s\S]*?)<\/p>/g)].map((m) => strip(m[1]))) {
    if (p.split(" ").length >= 18 && !p.startsWith("«") && !p.startsWith("Une photo vaut mieux") && !p.startsWith("Appeler le")) { const prev = seen.get(p); if (prev && prev !== path) issues.push(`paragraphe dupliqué avec ${prev} : ${p.slice(0, 40)}`); else seen.set(p, path); }
  }
  for (const [k, v] of [["title", title], ["h1", h1], ["description", desc]]) unique[k].set(v, [...(unique[k].get(v) ?? []), path]);
  if (issues.length) bad++;
  console.log(`${path} | ${[...title].length} | ${[...desc].length} | ${[...h1].length} | ${words} | ${bw} | ${faqInfo} | ${answers.length}${issues.length ? "   << " + issues.join(" ; ") : ""}`);
}
for (const [k, m] of Object.entries(unique)) for (const [v, paths] of m) if (paths.length > 1) { bad++; console.log("DOUBLON", k, v, paths); }
for (const f of ["/robots.txt", "/llms.txt", "/sitemap.xml"]) console.log(f, (await fetch(base + f)).status);
console.log(`${locs.length} pages, ${bad} avec problème`);
process.exit(bad ? 1 : 0);
