// Prébuild (Vercel a accès à internet, pas l'environnement de travail) :
// 1. récupère le logo de Monteil & Cie sur monteil-info.fr, en déduit la couleur d'accent et génère le favicon ;
// 2. récupère les photos de l'entreprise (équipe, cordiste, recherche de fuite) ;
// 3. récupère les couples avant / après des chantiers (deux fichiers par chantier).
// Rien ici n'arrête le build : sans réseau, le site garde l'accent par défaut et affiche des aplats légendés.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import sharp from "sharp";

const files = JSON.parse(readFileSync(new URL("../src/lib/photo-files.json", import.meta.url), "utf8"));
const ORIGIN = files.site.origin;
const UA = { "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36" };
const root = new URL("../", import.meta.url);
const out = new URL("public/photos/", root);
const brandDir = new URL("public/brand/", root);
mkdirSync(out, { recursive: true });
mkdirSync(brandDir, { recursive: true });

async function get(url) {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(url, { headers: UA, signal: AbortSignal.timeout(25000) });
      if (!res.ok) throw new Error(String(res.status));
      return Buffer.from(await res.arrayBuffer());
    } catch (error) {
      if (attempt === 3) console.warn(`[photos] ${url} : ${error.message}`);
    }
  }
  return null;
}

/* ———————————————— 1. Logo et couleur d'accent ———————————————— */
const DEFAULT_ACCENT = "#0a6f9e";
let accent = DEFAULT_ACCENT;
let logo = null;
const hex = (r, g, b) => "#" + [r, g, b].map((v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0")).join("");
const lum = (r, g, b) => {
  const c = [r, g, b].map((v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; });
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
};

const logoBuf = await get(ORIGIN + files.site.logo);
if (logoBuf) {
  try {
    const png = await sharp(logoBuf).trim().resize({ height: 160 }).png().toBuffer();
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
      while (1.05 / (lum(r, g, b) + 0.05) < 4.8) { r *= 0.94; g *= 0.94; b *= 0.94; } // contraste ≥ 4,8:1 sur blanc
      accent = hex(r, g, b);
    }
  } catch (error) {
    console.warn(`[photos] logo illisible : ${error.message}`);
  }
}
console.log(`[photos] logo ${logo ? "récupéré" : "absent"}, accent ${accent}`);

// Favicon et icône iPhone : un « M » dans un carré à la couleur d'accent, avec la fiole du niveau sous la lettre.
const mark = (size) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="${accent}"/><path d="M15 41V19l17 15 17-15v22" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><rect x="14" y="48" width="36" height="6" rx="3" fill="none" stroke="#fff" stroke-width="1.8"/><ellipse cx="32" cy="51" rx="5.5" ry="1.9" fill="#fff"/></svg>`;
try {
  writeFileSync(new URL("src/app/icon.png", root), await sharp(Buffer.from(mark(64))).resize(64, 64).png().toBuffer());
  writeFileSync(new URL("src/app/apple-icon.png", root), await sharp(Buffer.from(mark(180))).resize(180, 180).png().toBuffer());
} catch (error) {
  console.warn(`[photos] icônes : ${error.message}`);
}

/* ———————————————— 2. Photos de l'entreprise ———————————————— */
async function fetchPhoto(file, name, width = 2000) {
  const buf = await get(`${ORIGIN}/assets/img/${file}`);
  if (!buf) return null;
  try {
    const img = sharp(buf).rotate();
    const meta = await img.metadata();
    const info = await img.resize({ width, withoutEnlargement: true }).jpeg({ quality: 82, mozjpeg: true }).toBuffer({ resolveWithObject: true });
    writeFileSync(new URL(`${name}.jpg`, out), info.data);
    return { src: `/photos/${name}.jpg`, width: info.info.width, height: info.info.height };
  } catch (error) {
    console.warn(`[photos] ${file} : ${error.message}`);
    return null;
  }
}

const photos = {};
await Promise.all(Object.entries(files.site.photos).map(async ([key, f]) => { photos[key] = await fetchPhoto(f.file, key); }));

/* ———————————————— 3. Couples avant / après ———————————————— */
const pairs = {};
await Promise.all(
  Object.entries(files.site.pairs).map(async ([key, f]) => {
    const [b, a] = await Promise.all([fetchPhoto(f.before, `${key}-avant`, 1600), fetchPhoto(f.after, `${key}-apres`, 1600)]);
    pairs[key] = b && a ? { before: b.src, after: a.src, width: a.width, height: a.height } : null;
  }),
);

const manifest = { generatedAt: new Date().toISOString(), accent, logo, photos, pairs };
writeFileSync(new URL("src/lib/photos.generated.json", root), JSON.stringify(manifest, null, 2) + "\n");
console.log(`[photos] ${Object.values(photos).filter(Boolean).length}/${Object.keys(photos).length} photos, ${Object.values(pairs).filter(Boolean).length}/${Object.keys(pairs).length} couples avant / après`);
