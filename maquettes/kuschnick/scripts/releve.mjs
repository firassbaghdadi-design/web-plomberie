// Relevé temporaire du site actuel, exécuté au build Vercel (qui a accès à internet).
// Parcourt kuschnick.fr, écrit les textes, liens, coordonnées, couleurs, polices et images dans
// public/releve-site-actuel.txt (lisible sur le déploiement), télécharge les images dans public/releve/
// et vérifie à qui appartient l'adresse info@divielectric.com. Retiré de la version livrée.
import { mkdirSync, writeFileSync } from "node:fs";
import sharp from "sharp";

const SITE = "https://kuschnick.fr";
const UA = { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36", "Accept-Language": "fr-FR,fr" };
const pub = new URL("../public/", import.meta.url);
const imgDir = new URL("releve/", pub);
mkdirSync(imgDir, { recursive: true });
const out = [];
const say = (l) => { out.push(l); console.log(l); };
const get = async (url, timeout = 20000) => {
  const res = await fetch(url, { headers: UA, redirect: "follow", signal: AbortSignal.timeout(timeout) });
  if (!res.ok) throw new Error(`${res.status}`);
  return res;
};
const ent = { nbsp: " ", amp: "&", quot: '"', apos: "'", rsquo: "'", lsquo: "'", laquo: "«", raquo: "»", eacute: "é", egrave: "è", ecirc: "ê", agrave: "à", acirc: "â", ccedil: "ç", ocirc: "ô", ucirc: "û", ugrave: "ù", icirc: "î", iuml: "ï", Eacute: "É", hellip: "…", ndash: "–", mdash: "—", euro: "€", deg: "°" };
const decode = (s) => s.replace(/&([a-zA-Z]+);/g, (m, n) => ent[n] ?? m).replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n)).replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)));
const text = (html) =>
  decode(
    html
      .replace(/<(script|style|svg|noscript)[\s\S]*?<\/\1>/gi, " ")
      .replace(/<h([1-6])[^>]*>/gi, "\n[H$1] ")
      .replace(/<a\b[^>]*href=["']([^"']+)["'][^>]*>/gi, " [→$1] ")
      .replace(/<(br|\/p|\/div|\/li|\/h[1-6]|\/section|\/ul|li|p|\/tr|\/td)[^>]*>/gi, "\n")
      .replace(/<[^>]+>/g, " "),
  )
    .split("\n")
    .map((l) => l.replace(/\s+/g, " ").trim())
    .filter(Boolean);

/** Montage côte à côte : colonne la plus uniforme entre 40 et 60 % de la largeur. */
async function splitOf(buf) {
  const { data, info } = await sharp(buf).greyscale().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const col = (x) => { let s = 0, q = 0; for (let y = 0; y < height; y++) { const v = data[(y * width + x) * channels]; s += v; q += v * v; } const m = s / height; return { m, sd: Math.sqrt(Math.max(0, q / height - m * m)) }; };
  let best = null;
  for (let x = Math.floor(width * 0.4); x <= Math.ceil(width * 0.6); x++) { const c = col(x); if (!best || c.sd < best.sd) best = { x, ...c }; }
  return best ? `colonne ${best.x}/${width} (${Math.round((best.x / width) * 100)} %) écart-type ${best.sd.toFixed(1)} moyenne ${best.m.toFixed(0)}` : "?";
}

const pages = new Map();
const queue = ["/"];
const images = new Map();
const colors = new Map();
const fonts = new Map();
const emails = new Set();
const phones = new Set();
const host = new URL(SITE).host.replace(/^www\./, "");
const internal = (href, base) => {
  try {
    const u = new URL(decode(href), base);
    if (u.host.replace(/^www\./, "") !== host) return null;
    if (/\.(jpe?g|png|gif|webp|svg|pdf|css|js|ico|xml|zip)$/i.test(u.pathname)) return null;
    if (/wp-json|xmlrpc|feed|wp-login|\/wp-admin|\?replytocom/.test(u.href)) return null;
    return u.pathname + (u.search && !/^\?(p|page_id)=/.test(u.search) ? "" : u.search);
  } catch { return null; }
};

say(`===== RELEVÉ DU SITE ACTUEL (${SITE}) =====`);
try {
  const sm = await (await get(`${SITE}/sitemap.xml`)).text();
  say(`--- SITEMAP ${[...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]).join("  ")}`);
  for (const m of sm.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    if (/\.xml/.test(m[1])) {
      try { const sub = await (await get(m[1])).text(); for (const n of sub.matchAll(/<loc>([^<]+)<\/loc>/g)) { const p = internal(n[1], SITE); if (p && !queue.includes(p)) queue.push(p); } } catch { /* sous-sitemap illisible */ }
    } else { const p = internal(m[1], SITE); if (p && !queue.includes(p)) queue.push(p); }
  }
} catch (e) { say(`--- SITEMAP absent (${e.message})`); }

while (queue.length && pages.size < 30) {
  const path = queue.shift();
  if (pages.has(path)) continue;
  pages.set(path, true);
  try {
    const res = await get(SITE + path);
    const html = await res.text();
    const title = (html.match(/<title[^>]*>([^<]*)<\/title>/i) ?? [])[1] ?? "";
    const desc = (html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)/i) ?? [])[1] ?? "";
    say(`\n--- PAGE ${path} → ${res.url} title="${decode(title)}" description="${decode(desc)}"`);
    for (const line of text(html.match(/<body[\s\S]*<\/body>/i)?.[0] ?? html)) say(`  ${line}`);
    for (const m of html.matchAll(/<a\b[^>]*href=["']([^"'#]+)["']/gi)) {
      const p = internal(m[1], res.url);
      if (p && !pages.has(p) && !queue.includes(p)) queue.push(p);
    }
    for (const m of html.matchAll(/[\w.+-]+@[\w-]+\.[\w.-]+/g)) if (!/\.(png|jpe?g|gif|webp|svg)$/i.test(m[0])) emails.add(`${m[0]} (${path})`);
    for (const m of html.matchAll(/href=["']tel:([^"']+)/gi)) phones.add(`${m[1]} (${path})`);
    for (const m of decode(html.replace(/<[^>]+>/g, " ")).matchAll(/(?:\+33\s?|0)[1-9](?:[\s.-]?\d{2}){4}/g)) phones.add(`${m[0]} (${path})`);
    const css = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map((m) => m[1]);
    for (const href of [...html.matchAll(/<link[^>]+rel=["']?stylesheet[^>]*>/gi)].map((m) => (m[0].match(/href=["']([^"']+)/) ?? [])[1]).filter(Boolean)) {
      try { css.push(await (await get(new URL(decode(href), res.url).href)).text()); } catch { /* feuille illisible */ }
    }
    css.push([...html.matchAll(/style=["']([^"']*)["']/gi)].map((m) => m[1]).join(";"));
    for (const c of css) {
      for (const m of c.matchAll(/#[0-9a-f]{6}\b|#[0-9a-f]{3}\b|rgba?\([^)]+\)/gi)) colors.set(m[0].toLowerCase(), (colors.get(m[0].toLowerCase()) ?? 0) + 1);
      for (const m of c.matchAll(/font-family\s*:\s*([^;}]+)/gi)) fonts.set(m[1].trim(), (fonts.get(m[1].trim()) ?? 0) + 1);
      for (const m of c.matchAll(/url\(["']?([^"')]+\.(?:jpe?g|png|webp|gif|svg))/gi)) { try { images.set(new URL(m[1], res.url).href, { alt: "(css)", page: path, hint: "" }); } catch { /* url invalide */ } }
    }
    for (const tag of html.matchAll(/<(img|source)\b[^>]*>/gi)) {
      const t = tag[0];
      const attr = (n) => (t.match(new RegExp(`\\s${n}=["']([^"']+)`, "i")) ?? [])[1];
      let src = attr("data-src") ?? attr("data-lazy-src") ?? attr("src") ?? attr("srcset") ?? attr("data-srcset");
      const set = attr("srcset") ?? attr("data-srcset");
      if (set) src = set.split(",").map((s) => s.trim().split(" ")).sort((a, b) => parseInt(b[1] ?? "0") - parseInt(a[1] ?? "0"))[0][0];
      if (!src || src.startsWith("data:")) continue;
      images.set(new URL(decode(src), res.url).href, { alt: decode(attr("alt") ?? ""), page: path, hint: `${attr("class") ?? ""} ${attr("id") ?? ""}` });
    }
    for (const m of html.matchAll(/url\(["']?([^"')]+\.(?:jpe?g|png|webp))/gi)) { try { images.set(new URL(decode(m[1]), res.url).href, { alt: "(fond)", page: path, hint: "" }); } catch { /* url invalide */ } }
    for (const m of html.matchAll(/<link[^>]+rel=["'][^"']*icon[^>]*>/gi)) { const href = (m[0].match(/href=["']([^"']+)/) ?? [])[1]; if (href) images.set(new URL(href, res.url).href, { alt: "(icône)", page: path, hint: "icon" }); }
    for (const m of html.matchAll(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)/gi)) images.set(new URL(m[1], res.url).href, { alt: "(og)", page: path, hint: "og" });
  } catch (e) { say(`\n--- PAGE ${path} : erreur ${e.message}`); }
}
say(`\n--- E-MAILS ${[...emails].join("  ")}`);
say(`--- TÉLÉPHONES ${[...phones].join("  ")}`);
say(`--- COULEURS ${[...colors].sort((a, b) => b[1] - a[1]).slice(0, 40).map(([c, n]) => `${c}×${n}`).join("  ")}`);
say(`--- POLICES ${[...fonts].sort((a, b) => b[1] - a[1]).slice(0, 12).map(([c, n]) => `${c}×${n}`).join("  ")}`);

let i = 0;
for (const [url, info] of images) {
  try {
    const res = await get(url);
    const type = res.headers.get("content-type") ?? "";
    const buf = Buffer.from(await res.arrayBuffer());
    if (!type.startsWith("image/")) { say(`--- IMAGE ? ${type} ${url}`); continue; }
    i += 1;
    const ext = type.includes("png") ? "png" : type.includes("webp") ? "webp" : type.includes("svg") ? "svg" : type.includes("gif") ? "gif" : type.includes("icon") ? "ico" : "jpg";
    const name = `img-${String(i).padStart(2, "0")}.${ext}`;
    writeFileSync(new URL(name, imgDir), buf);
    let meta = "";
    try {
      const md = await sharp(buf).metadata();
      const st = await sharp(buf).stats();
      const dom = st.dominant ? `dominante rgb(${st.dominant.r},${st.dominant.g},${st.dominant.b})` : "";
      meta = `${md.width}x${md.height} ${dom}`;
      if (md.width && md.height && md.width / md.height > 1.25 && ext !== "svg") meta += ` | montage? ${await splitOf(buf)}`;
    } catch { meta = "(illisible par sharp)"; }
    say(`--- IMAGE ${name} ${Math.round(buf.length / 1024)} Ko ${meta} ${url} alt="${info.alt}" page=${info.page} ${info.hint.trim()}`);
  } catch (e) { say(`--- IMAGE erreur ${e.message} ${url}`); }
}

// À qui appartient info@divielectric.com ?
say(`\n===== VÉRIFICATION divielectric.com =====`);
for (const u of ["https://divielectric.com/", "https://www.divielectric.com/", "https://divielectric.com/mentions-legales/", "https://divielectric.com/contact/"]) {
  try {
    const res = await get(u);
    const html = await res.text();
    const lines = text(html.match(/<body[\s\S]*<\/body>/i)?.[0] ?? html);
    say(`--- ${u} → ${res.url} title="${decode((html.match(/<title[^>]*>([^<]*)<\/title>/i) ?? [])[1] ?? "")}"`);
    for (const l of lines.slice(0, 120)) say(`  ${l}`);
    say(`  E-MAILS ${[...new Set(html.match(/[\w.+-]+@[\w-]+\.[\w.-]+/g) ?? [])].join(" ")}`);
  } catch (e) { say(`--- ${u} : erreur ${e.message}`); }
}
say(`===== FIN DU RELEVÉ : ${pages.size} pages, ${i} images =====`);
writeFileSync(new URL("releve-site-actuel.txt", pub), out.join("\n"));
