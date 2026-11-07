// Prébuild (Vercel a accès à internet, pas l'environnement de travail) :
// 1. récupère le logo de Bastien & Trebulle, en déduit la couleur d'accent du site et génère le favicon (cadran de compteur) ;
// 2. récupère les photos publiées par l'entreprise (accueil, histoire, particuliers, pages de réalisations), classées par page ;
// 3. complète avec trois photos Pexels choisies par leur titre exact (registre : prospection/photos-utilisees.md).
// Rien ici n'arrête le build : sans réseau, le site garde l'accent par défaut et affiche des aplats légendés.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import sharp from "sharp";

const UA = { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36" };
const root = new URL("../", import.meta.url);
const out = new URL("public/photos/", root);
const brandDir = new URL("public/brand/", root);
mkdirSync(out, { recursive: true });
mkdirSync(brandDir, { recursive: true });
const files = JSON.parse(readFileSync(new URL("src/lib/photo-files.json", root), "utf8"));
const ORIGIN = files.origin;

async function get(url, kind = "text") {
  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      const res = await fetch(url, { headers: UA, signal: AbortSignal.timeout(12000) });
      if (!res.ok) throw new Error(String(res.status));
      return kind === "text" ? await res.text() : Buffer.from(await res.arrayBuffer());
    } catch (error) {
      if (attempt === 2) console.warn(`[photos] ${url} : ${error.message}`);
    }
  }
  return null;
}

const hex = (r, g, b) => "#" + [r, g, b].map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0")).join("");
const lin = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
const lum = (r, g, b) => 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);

/* ———————————————— 1. Logo et couleur d'accent ———————————————— */
const DEFAULT_ACCENT = "#232f63"; // bleu nuit relevé sur le site actuel
let accent = DEFAULT_ACCENT;
let logo = null;
const home = (await get(`${ORIGIN}/`)) ?? "";
const logoSrc =
  files.logoUrl ??
  (home.match(/<img[^>]*class="[^"]*(?:custom-logo|logo)[^"]*"[^>]*src="([^"]+)"/i) ?? home.match(/<img[^>]*src="([^"]*logo[^"]*\.(?:png|webp|jpe?g))"/i) ?? [])[1];

if (logoSrc) {
  const buf = await get(new URL(logoSrc, ORIGIN).href, "buffer");
  if (buf) {
    try {
      const png = await sharp(buf).trim().resize({ height: 140, withoutEnlargement: false }).png().toBuffer();
      const meta = await sharp(png).metadata();
      const { data } = await sharp(png).ensureAlpha().resize(180).raw().toBuffer({ resolveWithObject: true });
      const bins = new Map();
      let sumLum = 0, opaque = 0;
      for (let i = 0; i < data.length; i += 4) {
        const [r, g, b, a] = [data[i], data[i + 1], data[i + 2], data[i + 3]];
        if (a < 200) continue;
        opaque++;
        sumLum += lum(r, g, b);
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        if (max - min < 45 || max < 40) continue; // gris, blanc, noir : pas une couleur de marque
        const key = [r, g, b].map((v) => Math.round(v / 24) * 24).join(",");
        const e = bins.get(key) ?? { n: 0, r: 0, g: 0, b: 0 };
        e.n++; e.r += r; e.g += g; e.b += b;
        bins.set(key, e);
      }
      const best = [...bins.values()].sort((x, y) => y.n - x.n)[0];
      if (best && best.n > 30) {
        let [r, g, b] = [best.r / best.n, best.g / best.n, best.b / best.n];
        while (1.05 / (lum(r, g, b) + 0.05) < 4.8) { r *= 0.92; g *= 0.92; b *= 0.92; }
        accent = hex(r, g, b);
      }
      // le logo n'est montré que s'il se lit sur fond blanc
      const usable = opaque > 0 && sumLum / opaque < 0.72;
      writeFileSync(new URL("logo.png", brandDir), png);
      logo = { src: "/brand/logo.png", width: meta.width, height: meta.height, usable };
    } catch (error) {
      console.warn(`[photos] logo illisible : ${error.message}`);
    }
  }
}
console.log(`[photos] logo ${logo ? (logo.usable ? "utilisable" : "trop clair, non utilisé") : "absent"}, accent ${accent}`);

// Favicon et icône iPhone : un cadran de compteur en traits fins, à la couleur d'accent (aucun texte, donc aucune police nécessaire).
const dial = (size, bg) => {
  const ticks = Array.from({ length: 24 }, (_, i) => {
    const a = (i / 24) * Math.PI * 2;
    const long = i % 6 === 0;
    const r1 = 26, r2 = long ? 21 : 23.5;
    return `<line x1="${32 + Math.sin(a) * r1}" y1="${32 - Math.cos(a) * r1}" x2="${32 + Math.sin(a) * r2}" y2="${32 - Math.cos(a) * r2}" stroke="#fff" stroke-width="${long ? 2 : 1.2}" stroke-linecap="round"/>`;
  }).join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64"><rect width="64" height="64" rx="${bg}" fill="${accent}"/><circle cx="32" cy="32" r="28" fill="none" stroke="#fff" stroke-width="1.4" opacity=".55"/>${ticks}<g transform="rotate(38 32 32)"><line x1="32" y1="36" x2="32" y2="15" stroke="#e3cb94" stroke-width="2.4" stroke-linecap="round"/></g><circle cx="32" cy="32" r="3.2" fill="#e3cb94"/></svg>`;
};
try {
  writeFileSync(new URL("src/app/icon.png", root), await sharp(Buffer.from(dial(64, 14))).resize(64, 64).png().toBuffer());
  writeFileSync(new URL("src/app/apple-icon.png", root), await sharp(Buffer.from(dial(180, 0))).resize(180, 180).png().toBuffer());
} catch (error) {
  console.warn(`[photos] icônes : ${error.message}`);
}

/* ———————————————— 2. Photos de l'entreprise, par page ———————————————— */
const EXCLUDE = /logo|certif|favicon|icon|picto|mode_isolation|trustindex|partenaire|banniere|cookie/i;
const canonical = (u) => u.replace(/-\d+x\d+(\.(?:jpe?g|png|webp))$/i, "$1").split("?")[0];
const imagesOf = (html) => {
  const found = [];
  const add = (u) => {
    if (!u || !/wp-content\/uploads\//.test(u) || /\/elementor\/thumbs\//.test(u) || /\.(svg|gif)$/i.test(u) || EXCLUDE.test(u)) return;
    const abs = canonical(new URL(u, ORIGIN).href);
    if (!found.includes(abs)) found.push(abs);
  };
  for (const m of html.matchAll(/<meta[^>]+property="og:image"[^>]+content="([^"]+)"/gi)) add(m[1]);
  for (const m of html.matchAll(/<a[^>]+href="([^"]+\.(?:jpe?g|png|webp))"/gi)) add(m[1]);
  for (const m of html.matchAll(/<img[^>]+(?:data-src|src)="([^"]+\.(?:jpe?g|png|webp))"/gi)) add(m[1]);
  for (const m of html.matchAll(/url\(['"]?([^'")]+wp-content\/uploads[^'")]+\.(?:jpe?g|png|webp))['"]?\)/gi)) add(m[1]);
  return found;
};

const DEADLINE = Date.now() + 110000; // le prébuild ne doit jamais retarder le déploiement
const pages = {};
let hero = null;
let history = null;
const done = new Map(); // url d'origine -> chemin local (une image n'est téléchargée qu'une fois)
let total = 0;
async function fetchImage(url, name) {
  if (done.has(url)) return done.get(url);
  if (total >= 140 || Date.now() > DEADLINE) return null;
  const buf = await get(url, "buffer");
  if (!buf) return null;
  try {
    const meta = await sharp(buf).metadata();
    if ((meta.width ?? 0) < 600 || (meta.height ?? 0) < 400) return null;
    await sharp(buf).rotate().resize({ width: 1800, withoutEnlargement: true }).jpeg({ quality: 80, mozjpeg: true }).toFile(new URL(`${name}.jpg`, out).pathname);
    total++;
    done.set(url, `/photos/${name}.jpg`);
    return `/photos/${name}.jpg`;
  } catch (error) {
    console.warn(`[photos] ${url} : ${error.message}`);
    return null;
  }
}

async function doPage(slug) {
  if (Date.now() > DEADLINE) return;
  const html = slug === "" ? home : await get(`${ORIGIN}/${slug}/`);
  if (!html) return;
  const urls = imagesOf(html).slice(0, slug === "" ? 12 : 9);
  const key = slug === "" ? "accueil" : slug;
  const got = await Promise.all(urls.map(async (url, i) => ({ url, local: await fetchImage(url, `${key.slice(0, 40)}-${String(i + 1).padStart(2, "0")}`) })));
  const list = [];
  for (const { url, local } of got) {
    if (!local) continue;
    list.push(local);
    if (!hero && /excellence/i.test(decodeURIComponent(url))) hero = local;
    if (!history && /bastient/i.test(decodeURIComponent(url))) history = local;
  }
  pages[key] = list;
}
const queue = [...files.pages];
await Promise.all(Array.from({ length: 4 }, async () => { while (queue.length) await doPage(queue.shift()); }));
console.log(`[photos] ${total} photos de l'entreprise, ${Object.keys(pages).length} pages`);

/* ———————————————— 3. Photos Pexels de repli ———————————————— */
const pexels = {};
await Promise.all(
  Object.entries(files.pexels).map(async ([key, f]) => {
    const target = new URL(`${key}.jpg`, out);
    let ok = existsSync(target);
    if (!ok) {
      const buf = await get(`https://images.pexels.com/photos/${f.id}/pexels-photo-${f.id}.jpeg?auto=compress&cs=tinysrgb&w=2000`, "buffer");
      if (buf) { writeFileSync(target, buf); ok = true; }
    }
    pexels[key] = ok ? `/photos/${key}.jpg` : null;
  }),
);

const manifest = { generatedAt: new Date().toISOString(), accent, logo, hero, history, pages, pexels };
writeFileSync(new URL("src/lib/photos.generated.json", root), JSON.stringify(manifest, null, 2) + "\n");
console.log(`[photos] Pexels ${Object.values(pexels).filter(Boolean).length}/${Object.keys(pexels).length}`);
