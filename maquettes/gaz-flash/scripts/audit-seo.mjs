// Audit SEO de la maquette Gaz Flash : usage  node audit.mjs http://localhost:3322 [https://gazflash.fr]
const base = process.argv[2];
const siteUrl = (process.argv[3] ?? "https://gazflash.fr").replace(/\/$/, "");
const sm = await (await fetch(`${base}/sitemap.xml`)).text();
const locs = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(siteUrl, ""));
const strip = (s) => s.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
const dec = (s) => s.replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"');
let bad = 0;
const titles = new Map(), h1s = new Map(), descs = new Map();
const seenPara = new Map();
console.log("path | T | D | H1 | words | brief | faq");
for (const path of locs) {
  const res = await fetch(base + path);
  const html = await res.text();
  const issues = [];
  if (res.status !== 200) issues.push(`status ${res.status}`);
  const title = dec((html.match(/<title>([^<]*)<\/title>/) ?? [])[1] ?? "");
  const desc = dec((html.match(/<meta name="description" content="([^"]*)"/) ?? [])[1] ?? "");
  const canon = (html.match(/<link rel="canonical" href="([^"]*)"/) ?? [])[1] ?? "";
  const h1n = (html.match(/<h1[\s>]/g) ?? []).length;
  const h1 = strip((html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) ?? [])[1] ?? "");
  const main = (html.match(/<main[\s\S]*?<\/main>/) ?? [""])[0];
  const words = strip(main).split(" ").length;
  const brief = strip((html.match(/<p class="reponse-bref">([\s\S]*?)<\/p>/) ?? [])[1] ?? "").replace(/^En bref : /, "");
  const bw = brief ? brief.split(" ").length : 0;
  if ([...title].length < 50 || [...title].length > 60) issues.push(`title ${[...title].length}`);
  if ([...desc].length < 150 || [...desc].length > 160) issues.push(`desc ${[...desc].length}`);
  if (h1n !== 1) issues.push(`h1 x${h1n}`);
  if (canon !== siteUrl + path) issues.push(`canonical ${canon}`);
  if (bw < 40 || bw > 60) issues.push(`brief ${bw}`);
  if (!/<html lang="fr"/.test(html)) issues.push("lang");
  if (!/property="og:image"/.test(html)) issues.push("og:image");
  const ld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  let nodes = [];
  try { for (const j of ld) nodes.push(...JSON.parse(j.replace(/\\u003c/g, "<"))["@graph"]); } catch (e) { issues.push("jsonld invalide " + e.message); }
  const types = nodes.flatMap((n) => [].concat(n["@type"]));
  if (nodes.some((n) => JSON.stringify(n).includes("aggregateRating"))) issues.push("aggregateRating !");
  if (path !== "/" && !types.includes("BreadcrumbList") && !(path === "/")) issues.push("no breadcrumb");
  if (!types.includes("WebPage")) issues.push("no WebPage");
  const lbs = nodes.filter((n) => [].concat(n["@type"]).includes("LocalBusiness"));
  if (lbs.length !== 1 || !lbs[0]["@id"]) issues.push(`LocalBusiness x${lbs.length}`);
  const faq = nodes.find((n) => n["@type"] === "FAQPage");
  let faqInfo = "-";
  if (faq) {
    // les réponses du JSON-LD doivent figurer mot pour mot dans la FAQ visible (<details>)
    const visible = [...html.matchAll(/<details class="faq-item"><summary>([\s\S]*?)<\/summary><p>([\s\S]*?)<\/p><\/details>/g)].map((m) => [dec(strip(m[1])), dec(strip(m[2]))]);
    const q = faq.mainEntity;
    const same = visible.length === q.length && q.every((it, i) => visible[i] && visible[i][0] === it.name && visible[i][1] === it.acceptedAnswer.text);
    if (!same) issues.push(`FAQ visible/JSON-LD différents (${visible.length} vs ${q.length})`);
    for (const it of q) { const n = it.acceptedAnswer.text.split(/\s+/).length; if (n < 30 || n > 85) issues.push(`réponse FAQ ${n} mots : ${it.name.slice(0, 40)}`); }
    faqInfo = String(q.length);
  } else if (/class="faq-item"/.test(html)) issues.push("FAQ visible sans JSON-LD");
  // liens internes cassés
  const links = [...new Set([...main.matchAll(/href="(\/[^"#?]*)"/g)].map((m) => m[1]))];
  for (const l of links) { if (!locs.includes(l) && !/^\/(llms\.txt|_next|photos|api)/.test(l)) issues.push(`lien interne hors sitemap ${l}`); }
  // images sans alt
  const noAlt = (main.match(/<img(?![^>]*\balt=)[^>]*>/g) ?? []).length;
  if (noAlt) issues.push(`${noAlt} img sans alt`);
  // paragraphes dupliqués
  for (const p of [...main.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)].map((m) => strip(m[1]))) {
    if (p.split(" ").length >= 18) { const prev = seenPara.get(p); if (prev && prev !== path) issues.push(`paragraphe dupliqué avec ${prev}: ${p.slice(0, 50)}`); else seenPara.set(p, path); }
  }
  titles.set(title, [...(titles.get(title) ?? []), path]); h1s.set(h1, [...(h1s.get(h1) ?? []), path]); descs.set(desc, [...(descs.get(desc) ?? []), path]);
  if (issues.length) bad++;
  console.log(`${path} | ${[...title].length} | ${[...desc].length} | ${[...h1].length} | ${words} | ${bw} | ${faqInfo} ${issues.length ? "  << " + issues.join("; ") : ""}`);
}
for (const m of [titles, h1s, descs]) for (const [k, v] of m) if (v.length > 1) { bad++; console.log("DOUBLON", k, v); }
for (const f of ["/robots.txt", "/llms.txt", "/sitemap.xml", "/nexistepas/"]) { const r = await fetch(base + f); console.log(f, r.status); }
console.log(`${locs.length} pages, ${bad} avec problème`);
