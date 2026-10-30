// Au build (Vercel a accès à internet, pas l'environnement de travail) :
// 1. lit le site actuel de Houdry-Grenot (houdry-grenot.com) et écrit dans le journal de build un relevé
//    des textes, couleurs, polices et images, pour la relecture de la maquette ;
// 2. télécharge les images publiées par l'entreprise (logo, photos) : src/lib/site-photos.generated.json ;
// 3. télécharge les photos d'artisans au travail (Pexels, src/lib/pexels.json).
// Une image qui ne se télécharge pas n'arrête jamais le build : le site affiche alors une solution de repli.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const SITE = process.env.HOUDRY_SOURCE ?? "https://houdry-grenot.com";
const PAGES = ["/"];
const UA = { "User-Agent": "Mozilla/5.0 (compatible; maquette-build)", "Accept-Language": "fr-FR,fr" };
const outDir = new URL("../public/photos/", import.meta.url);
mkdirSync(outDir, { recursive: true });

const get = async (url, timeout = 20000) => {
  const res = await fetch(url, { headers: UA, redirect: "follow", signal: AbortSignal.timeout(timeout) });
  if (!res.ok) throw new Error(`${res.status}`);
  return res;
};
const decode = (s) =>
  s.replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&#0?39;|&apos;|&#x27;|&rsquo;/g, "'").replace(/&quot;/g, '"').replace(/&eacute;/g, "é").replace(/&egrave;/g, "è").replace(/&agrave;/g, "à").replace(/&ccedil;/g, "ç").replace(/&ecirc;/g, "ê").replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n));
const text = (html) =>
  decode(
    html
      .replace(/<(script|style|svg|noscript)[\s\S]*?<\/\1>/gi, " ")
      .replace(/<h([1-6])[^>]*>/gi, "\n[H$1] ")
      .replace(/<(br|\/p|\/div|\/li|\/h[1-6]|\/section|\/ul|li|p)[^>]*>/gi, "\n")
      .replace(/<[^>]+>/g, " "),
  )
    .split("\n")
    .map((l) => l.replace(/\s+/g, " ").trim())
    .filter(Boolean);

/** Dimensions d'une image (PNG, JPEG, WebP, GIF) lues dans ses premiers octets. */
function dims(b) {
  try {
    if (b[0] === 0x89 && b[1] === 0x50) return [b.readUInt32BE(16), b.readUInt32BE(20)];
    if (b.toString("ascii", 0, 3) === "GIF") return [b.readUInt16LE(6), b.readUInt16LE(8)];
    if (b.toString("ascii", 0, 4) === "RIFF" && b.toString("ascii", 8, 12) === "WEBP") {
      const k = b.toString("ascii", 12, 16);
      if (k === "VP8X") return [1 + b.readUIntLE(24, 3), 1 + b.readUIntLE(27, 3)];
      if (k === "VP8 ") return [b.readUInt16LE(26) & 0x3fff, b.readUInt16LE(28) & 0x3fff];
      if (k === "VP8L") { const v = b.readUInt32LE(21); return [(v & 0x3fff) + 1, ((v >> 14) & 0x3fff) + 1]; }
    }
    if (b[0] === 0xff && b[1] === 0xd8) {
      let i = 2;
      while (i < b.length - 9) {
        if (b[i] !== 0xff) { i++; continue; }
        const m = b[i + 1];
        if (m >= 0xc0 && m <= 0xc3) return [b.readUInt16BE(i + 7), b.readUInt16BE(i + 5)];
        i += 2 + b.readUInt16BE(i + 2);
      }
    }
  } catch { /* format inconnu */ }
  return [0, 0];
}

const manifest = {};
const sitePhotos = [];
const colors = new Map();
const fonts = new Map();
const images = new Map();
let logo = null;
const say = (line) => console.log(line);

say(`\n===== RELEVÉ DU SITE ACTUEL (${SITE}) =====`);
for (let pi = 0; pi < PAGES.length; pi++) {
  const path = PAGES[pi];
  try {
    const res = await get(SITE + path);
    const html = await res.text();
    if (pi === 0) {
      for (const m of html.matchAll(/<a\b[^>]*href=["']([^"'#?]+)/gi)) {
        try { const u = new URL(m[1], SITE); if (u.origin === new URL(SITE).origin && !/\.(jpe?g|png|webp|pdf|svg)$/i.test(u.pathname) && !PAGES.includes(u.pathname) && PAGES.length < 14) PAGES.push(u.pathname); } catch { /* lien invalide */ }
      }
    }
    const title = (html.match(/<title>([^<]*)<\/title>/i) ?? [])[1] ?? "";
    say(`\n--- PAGE ${path} (${res.status}) title="${decode(title)}"`);
    const lines = text(html.match(/<body[\s\S]*<\/body>/i)?.[0] ?? html);
    for (const line of lines) say(`  ${line}`);
    // Poids : les styles écrits dans la page (thème du site) comptent davantage que les feuilles génériques.
    const css = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].map((m) => [m[1], 4]);
    for (const href of [...html.matchAll(/<link[^>]+rel=["']?stylesheet[^>]*>/gi)].map((m) => (m[0].match(/href=["']([^"']+)/) ?? [])[1]).filter(Boolean)) {
      try { css.push([await (await get(new URL(href, SITE + path).href)).text(), 1]); } catch { /* feuille illisible */ }
    }
    css.push([[...html.matchAll(/style="([^"]*)"/gi)].map((m) => m[1]).join(";"), 6]);
    for (const [c, weight] of css) {
      for (const m of c.matchAll(/#[0-9a-f]{6}\b|#[0-9a-f]{3}\b|rgba?\([^)]+\)/gi)) colors.set(m[0].toLowerCase(), (colors.get(m[0].toLowerCase()) ?? 0) + weight);
      for (const m of c.matchAll(/font-family\s*:\s*([^;}]+)/gi)) fonts.set(m[1].trim(), (fonts.get(m[1].trim()) ?? 0) + 1);
      for (const m of c.matchAll(/url\(["']?([^"')]+\.(?:jpe?g|png|webp|gif))/gi)) images.set(new URL(m[1], SITE + path).href, { alt: "(css)", page: path, hint: "" });
    }
    for (const tag of html.matchAll(/<(img|source)\b[^>]*>/gi)) {
      const t = tag[0];
      const attr = (n) => (t.match(new RegExp(`\\s${n}=["']([^"']+)`, "i")) ?? [])[1];
      let src = attr("data-src") ?? attr("src") ?? attr("srcset") ?? attr("data-srcset");
      if (!src || src.startsWith("data:")) continue;
      src = src.split(",").pop().trim().split(" ")[0];
      images.set(new URL(decode(src), SITE + path).href, { alt: decode(attr("alt") ?? ""), page: path, hint: `${attr("class") ?? ""} ${attr("id") ?? ""}` });
    }
    for (const m of html.matchAll(/url\(["']?([^"')]+\.(?:jpe?g|png|webp))/gi)) images.set(new URL(decode(m[1]), SITE + path).href, { alt: "(fond)", page: path, hint: "" });
    for (const m of html.matchAll(/<link[^>]+rel=["'][^"']*icon[^>]*>/gi)) {
      const href = (m[0].match(/href=["']([^"']+)/) ?? [])[1];
      if (href) images.set(new URL(href, SITE + path).href, { alt: "(icône)", page: path, hint: "icon" });
    }
  } catch (e) {
    console.warn(`[site] ${path} : ${e.message}`);
  }
}
say(`\n--- COULEURS ${[...colors].sort((a, b) => b[1] - a[1]).slice(0, 30).map(([c, n]) => `${c}×${n}`).join("  ")}`);
say(`--- POLICES ${[...fonts].sort((a, b) => b[1] - a[1]).slice(0, 10).map(([c, n]) => `${c}×${n}`).join("  ")}`);

// Images de l'entreprise : le logo, puis les photos assez grandes pour être montrées.
let n = 0;
for (const [url, info] of images) {
  try {
    const res = await get(url);
    const type = res.headers.get("content-type") ?? "";
    const buf = Buffer.from(await res.arrayBuffer());
    const [w, h] = dims(buf);
    const isLogo = /logo/i.test(`${url} ${info.alt} ${info.hint}`) && info.hint !== "icon" && w >= 80;
    say(`--- IMAGE ${w}x${h} ${Math.round(buf.length / 1024)} Ko ${type} ${url} alt="${info.alt}" page=${info.page}${isLogo ? " [LOGO]" : ""}`);
    if (!type.startsWith("image/")) continue;
    const ext = type.includes("png") ? "png" : type.includes("webp") ? "webp" : type.includes("svg") ? "svg" : type.includes("gif") ? "gif" : "jpg";
    if (isLogo && !logo) {
      writeFileSync(new URL(`logo.${ext}`, outDir), buf);
      logo = { src: `/photos/logo.${ext}`, w, h };
    } else if (!isLogo && w >= 700 && h >= 450 && buf.length > 40000 && sitePhotos.length < 8) {
      n += 1;
      writeFileSync(new URL(`site-${n}.${ext}`, outDir), buf);
      sitePhotos.push({ src: `/photos/site-${n}.${ext}`, w, h, alt: info.alt, page: info.page });
    }
  } catch (e) {
    console.warn(`[site] image ${url} : ${e.message}`);
  }
}
say(`===== FIN DU RELEVÉ : ${sitePhotos.length} photo(s) de l'entreprise, logo ${logo ? "trouvé" : "absent"} =====\n`);

// Couleur d'accent : la couleur saturée la plus présente dans les feuilles de style du site actuel,
// assombrie si besoin pour rester lisible sur fond blanc. À défaut, le bleu de globals.css reste en place.
const toRgb = (c) => {
  if (c.startsWith("#")) { const h = c.length === 4 ? [...c.slice(1)].map((x) => x + x).join("") : c.slice(1); return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16)); }
  const m = c.match(/[\d.]+/g); if (!m || (m[3] !== undefined && +m[3] < 0.6)) return null; return m.slice(0, 3).map(Number);
};
const hsl = ([r, g, b]) => {
  r /= 255; g /= 255; b /= 255; const mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 2, d = mx - mn;
  if (!d) return [0, 0, l]; const s = d / (1 - Math.abs(2 * l - 1));
  const h = mx === r ? ((g - b) / d) % 6 : mx === g ? (b - r) / d + 2 : (r - g) / d + 4; return [(h * 60 + 360) % 360, s, l];
};
const rgbOf = (h, s, l) => { const c = (1 - Math.abs(2 * l - 1)) * s, x = c * (1 - Math.abs(((h / 60) % 2) - 1)), m = l - c / 2; const [r, g, b] = h < 60 ? [c, x, 0] : h < 120 ? [x, c, 0] : h < 180 ? [0, c, x] : h < 240 ? [0, x, c] : h < 300 ? [x, 0, c] : [c, 0, x]; return [r, g, b].map((v) => Math.round((v + m) * 255)); };
const brand = [...colors].map(([c, n]) => ({ c, n, rgb: toRgb(c) })).filter((x) => x.rgb).map((x) => ({ ...x, hsl: hsl(x.rgb) })).filter((x) => x.hsl[1] > 0.28 && x.hsl[2] > 0.12 && x.hsl[2] < 0.78).sort((a, b) => b.n - a.n)[0];
if (brand) {
  const [h, s0] = brand.hsl;
  const s = Math.min(s0, 0.72);
  const l = Math.min(brand.hsl[2], 0.42);
  const accent = rgbOf(h, s, l), deep = rgbOf(h, s, Math.max(0.16, l - 0.12)), tint = rgbOf(h, Math.min(s, 0.45), 0.965);
  writeFileSync(new URL("../src/app/brand.generated.css", import.meta.url), `/* Généré au build depuis le site actuel : ${brand.c} (${brand.n} occurrences). */\n:root { --accent: ${accent.join(" ")}; --accent-deep: ${deep.join(" ")}; --accent-tint: ${tint.join(" ")}; }\n`);
  say(`[site] couleur d'accent : ${brand.c} -> rgb(${accent.join(",")})`);
} else say("[site] aucune couleur de charte trouvée : bleu par défaut");

// Photos d'artisans au travail (Pexels, licence Pexels, créditées sur la page Mentions légales).
const pexels = JSON.parse(readFileSync(new URL("../src/lib/pexels.json", import.meta.url), "utf8"));
for (const [key, { pexels: id }] of Object.entries(pexels)) {
  const url = `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=2000`;
  manifest[key] = null;
  for (let attempt = 1; attempt <= 3 && !manifest[key]; attempt++) {
    try {
      const res = await get(url, 30000);
      const type = res.headers.get("content-type") ?? "";
      if (!type.startsWith("image/")) throw new Error(type);
      writeFileSync(new URL(`${key}.jpg`, outDir), Buffer.from(await res.arrayBuffer()));
      manifest[key] = `/photos/${key}.jpg`;
    } catch (e) {
      if (attempt === 3) console.warn(`[pexels] ${id} : ${e.message}`);
    }
  }
}
writeFileSync(new URL("../src/lib/site-photos.generated.json", import.meta.url), JSON.stringify({ photos: manifest, logo, site: sitePhotos }, null, 2) + "\n");
console.log(`[photos] ${Object.values(manifest).filter(Boolean).length}/${Object.keys(manifest).length} photos Pexels, ${sitePhotos.length} photo(s) du site actuel`);
