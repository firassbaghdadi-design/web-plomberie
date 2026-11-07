// Prébuild (Vercel a accès à internet, pas l'environnement de travail) :
// 1. récupère le logo de SPC sur spc-services.fr, en déduit la couleur d'accent du site et génère le favicon ;
// 2. récupère les photos publiées par l'entreprise (page d'accueil, galerie photo, médiathèque WordPress) ;
// 3. complète au besoin avec des photos Pexels choisies par leur titre exact (registre : prospection/photos-utilisees.md) ;
// 4. repère d'éventuels montages « avant / après » (noms de fichiers) pour le slider.
// Rien ici n'arrête le build : sans réseau, le site garde l'accent par défaut et affiche des aplats légendés.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import sharp from "sharp";

const ORIGIN = "https://spc-services.fr";
const UA = { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36" };
const root = new URL("../", import.meta.url);
const out = new URL("public/photos/", root);
const brandDir = new URL("public/brand/", root);
mkdirSync(out, { recursive: true });
mkdirSync(brandDir, { recursive: true });
const files = JSON.parse(readFileSync(new URL("src/lib/photo-files.json", root), "utf8"));

async function get(url, kind = "text") {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(url, { headers: UA, signal: AbortSignal.timeout(25000) });
      if (!res.ok) throw new Error(String(res.status));
      return kind === "text" ? await res.text() : Buffer.from(await res.arrayBuffer());
    } catch (error) {
      if (attempt === 3) console.warn(`[photos] ${url} : ${error.message}`);
    }
  }
  return null;
}

/* ———————————————— 1. Logo et couleur d'accent ———————————————— */
const DEFAULT_ACCENT = "#1d5c86";
let accent = DEFAULT_ACCENT;
let logo = null;
const home = (await get(`${ORIGIN}/`)) ?? "";
const logoSrc =
  (home.match(/<img[^>]*class="[^"]*(?:custom-logo|logo)[^"]*"[^>]*src="([^"]+)"/i) ??
    home.match(/<img[^>]*src="([^"]+)"[^>]*class="[^"]*(?:custom-logo|logo)[^"]*"/i) ??
    home.match(/<img[^>]*src="([^"]*logo[^"]*\.(?:png|webp|jpe?g|svg))"/i) ??
    [])[1];

const hex = (r, g, b) => "#" + [r, g, b].map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0")).join("");
const lum = (r, g, b) => {
  const c = [r, g, b].map((v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; });
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
};

if (logoSrc) {
  const buf = await get(new URL(logoSrc, ORIGIN).href, "buffer");
  if (buf) {
    try {
      const png = await sharp(buf, { density: 300 }).trim().resize({ height: 160, withoutEnlargement: false }).png().toBuffer();
      writeFileSync(new URL("logo.png", brandDir), png);
      const meta = await sharp(png).metadata();
      logo = { src: "/brand/logo.png", width: meta.width, height: meta.height };
      // couleur la plus fréquente parmi les pixels saturés et opaques du logo
      const { data } = await sharp(png).ensureAlpha().resize(160).raw().toBuffer({ resolveWithObject: true });
      const bins = new Map();
      for (let i = 0; i < data.length; i += 4) {
        const [r, g, b, a] = [data[i], data[i + 1], data[i + 2], data[i + 3]];
        if (a < 200) continue;
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        if (max - min < 60 || max < 50) continue; // gris, blanc, noir : pas une couleur de marque
        const key = [r, g, b].map((v) => Math.round(v / 24) * 24).join(",");
        const e = bins.get(key) ?? { n: 0, r: 0, g: 0, b: 0 };
        e.n++; e.r += r; e.g += g; e.b += b;
        bins.set(key, e);
      }
      const best = [...bins.values()].sort((x, y) => y.n - x.n)[0];
      if (best && best.n > 30) {
        let [r, g, b] = [best.r / best.n, best.g / best.n, best.b / best.n];
        // assombrir jusqu'à un contraste d'au moins 4,8:1 sur blanc (texte et boutons lisibles)
        while ((1.05 / (lum(r, g, b) + 0.05)) < 4.8) { r *= 0.92; g *= 0.92; b *= 0.92; }
        accent = hex(r, g, b);
      }
    } catch (error) {
      console.warn(`[photos] logo illisible : ${error.message}`);
    }
  }
}
console.log(`[photos] logo ${logo ? "récupéré" : "absent"}, accent ${accent}`);

// Favicon et icône iPhone, à la couleur d'accent : le monogramme « spc » en traits fins.
const mono = (size, pad) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64"><rect width="64" height="64" rx="${pad ? 14 : 12}" fill="${accent}"/><path d="M10 26 L22 16 L34 26 L46 16 L54 22" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M54 22 V44 a4 4 0 0 1 -4 4 H40" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/><text x="10" y="47" font-family="Helvetica, Arial, sans-serif" font-size="17" font-weight="500" fill="#fff" letter-spacing="0.5">spc</text></svg>`;
try {
  writeFileSync(new URL("src/app/icon.png", root), await sharp(Buffer.from(mono(64, false))).resize(64, 64).png().toBuffer());
  writeFileSync(new URL("src/app/apple-icon.png", root), await sharp(Buffer.from(mono(180, true))).resize(180, 180).png().toBuffer());
} catch (error) {
  console.warn(`[photos] icônes : ${error.message}`);
}

/* ———————————————— 2. Photos de l'entreprise ———————————————— */
const uploads = new Map(); // url d'origine (sans suffixe -WxH) -> { alt, from }
const canonical = (u) => u.replace(/-\d+x\d+(\.(?:jpe?g|png|webp))$/i, "$1").split("?")[0];
const collect = (html, from) => {
  for (const m of html.matchAll(/<img[^>]*>/gi)) {
    const tag = m[0];
    const src = (tag.match(/(?:data-src|data-lazy-src|src)="([^"]+)"/i) ?? [])[1];
    if (!src || !/wp-content\/uploads/.test(src) || /\.svg/i.test(src)) continue;
    const alt = (tag.match(/alt="([^"]*)"/i) ?? [])[1] ?? "";
    const key = canonical(new URL(src, ORIGIN).href);
    if (!uploads.has(key)) uploads.set(key, { alt, from });
  }
  for (const m of html.matchAll(/url\(['"]?([^'")]+wp-content\/uploads[^'")]+\.(?:jpe?g|png|webp))['"]?\)/gi)) {
    const key = canonical(new URL(m[1], ORIGIN).href);
    if (!uploads.has(key)) uploads.set(key, { alt: "", from });
  }
};
collect(home, "accueil");
const gallery = await get(`${ORIGIN}/galerie-photo/`);
if (gallery) collect(gallery, "galerie");
const media = await get(`${ORIGIN}/wp-json/wp/v2/media?per_page=100&_fields=source_url,alt_text,title`);
if (media) {
  try {
    for (const m of JSON.parse(media)) {
      const key = canonical(m.source_url);
      if (!uploads.has(key)) uploads.set(key, { alt: m.alt_text || "", from: "mediatheque" });
    }
  } catch {}
}

const EXCLUDE = /logo|capeb|qualibat|rge|gccp|decennale|label|partenaire|icon|icone|picto|favicon|avis|google|carte|map|banniere-cookie|signature/i;
const company = [];
for (const [url, info] of uploads) {
  if (EXCLUDE.test(url) || company.length >= 24) continue;
  const buf = await get(url, "buffer");
  if (!buf) continue;
  try {
    const meta = await sharp(buf).metadata();
    if ((meta.width ?? 0) < 700 || (meta.height ?? 0) < 450) continue;
    const name = `spc-${String(company.length + 1).padStart(2, "0")}.jpg`;
    await sharp(buf).rotate().resize({ width: 2000, withoutEnlargement: true }).jpeg({ quality: 82, mozjpeg: true }).toFile(new URL(name, out).pathname);
    const file = decodeURIComponent(url.split("/").pop() ?? "");
    company.push({ key: name.replace(".jpg", ""), src: `/photos/${name}`, file, alt: info.alt, from: info.from, width: meta.width, height: meta.height });
  } catch (error) {
    console.warn(`[photos] ${url} : ${error.message}`);
  }
}
console.log(`[photos] ${company.length} photos de l'entreprise`);

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

/* ———————————————— 4. Avant / après ———————————————— */
const pairs = [];
for (const c of company) {
  const m = c.file.match(/^(.*?)[-_ ]?avant[-_ ]?(.*?)\.\w+$/i);
  if (!m) continue;
  const twin = company.find((d) => d !== c && /apr[eè]s/i.test(d.file) && d.file.replace(/apr[eè]s/i, "").replace(/[-_ ]/g, "").toLowerCase().replace(/\.\w+$/, "") === c.file.replace(/avant/i, "").replace(/[-_ ]/g, "").toLowerCase().replace(/\.\w+$/, ""));
  if (twin) pairs.push({ before: c.key, after: twin.key });
}

const manifest = { generatedAt: new Date().toISOString(), accent, logo, company, pexels, pairs };
writeFileSync(new URL("src/lib/photos.generated.json", root), JSON.stringify(manifest, null, 2) + "\n");
console.log(`[photos] Pexels ${Object.values(pexels).filter(Boolean).length}/${Object.keys(pexels).length}, avant/après ${pairs.length}`);
