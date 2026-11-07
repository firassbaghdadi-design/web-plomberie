// Télécharge, au build Vercel, les images de la maquette vers public/photos/ :
// 1. les images publiées par l'entreprise sur son site actuel (martinet-thibault.com) ;
// 2. les photos libres de droits Pexels choisies par leur titre (registre : prospection/photos-utilisees.md).
// Une image déjà présente n'est pas retéléchargée ; une image qui échoue n'arrête pas le build (le site affiche un aplat légendé).
// 3. Les photos de réalisations sont des montages avant | après : le séparateur est détecté ici (voir splitOf).
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const files = JSON.parse(readFileSync(new URL("../src/lib/photo-files.json", import.meta.url), "utf8"));
const outDir = new URL("../public/photos/", import.meta.url);
mkdirSync(outDir, { recursive: true });

async function download(url, target) {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 (compatible; build)" }, signal: AbortSignal.timeout(30000) });
      const type = res.headers.get("content-type") ?? "";
      if (!res.ok || !type.startsWith("image/")) throw new Error(`${res.status} ${type}`);
      writeFileSync(target, Buffer.from(await res.arrayBuffer()));
      return true;
    } catch (error) {
      if (attempt === 3) console.warn(`[photos] ${url} : ${error.message}`);
    }
  }
  return false;
}

const jobs = [
  ...Object.entries(files.site).map(([key, f]) => [key, `https://www.martinet-thibault.com/${f.path}`, f.path.match(/\.\w+$/)[0].toLowerCase()]),
  ...Object.entries(files.pexels).map(([key, f]) => [key, `https://images.pexels.com/photos/${f.id}/pexels-photo-${f.id}.jpeg?auto=compress&cs=tinysrgb&w=2000`, ".jpg"]),
];
const manifest = {};
await Promise.all(
  jobs.map(async ([key, url, ext]) => {
    const name = `${key}${ext}`;
    const target = new URL(name, outDir);
    const ok = existsSync(target) || (await download(url, target));
    manifest[key] = ok ? `/photos/${name}` : null;
  }),
);
const sorted = Object.fromEntries(Object.keys(manifest).sort().map((k) => [k, manifest[k]]));
writeFileSync(new URL("../src/lib/photos.generated.json", import.meta.url), JSON.stringify(sorted, null, 2) + "\n");
console.log(`[photos] ${Object.values(manifest).filter(Boolean).length}/${jobs.length} images prêtes`);

/**
 * Montage avant | après : largeur, hauteur, puis le filet vertical qui sépare les deux photos.
 * On cherche, entre 40 % et 60 % de la largeur, la colonne la plus uniforme (faible écart-type, hors bande
 * centrale où se trouve la petite flèche) et, à égalité, la plus claire ; puis on l'élargit aux colonnes voisines
 * de même teinte. split = centre du filet, gap = sa largeur, en pixels de l'image d'origine.
 * En cas de doute : split = 50 %, gap = 2 %, ce qui reste regardable.
 */
async function splitOf(file) {
  const { data, info } = await sharp(file).greyscale().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const fallback = { width, height, split: Math.round(width * 0.5), gap: Math.max(2, Math.round(width * 0.02)), detected: false };
  if (width < 40 || height < 20) return fallback;
  const rows = [];
  for (let y = 0; y < height; y++) if (y < height * 0.35 || y > height * 0.65) rows.push(y);
  const col = (x) => {
    let sum = 0, sq = 0;
    for (const y of rows) { const v = data[(y * width + x) * channels]; sum += v; sq += v * v; }
    const mean = sum / rows.length;
    return { mean, std: Math.sqrt(Math.max(0, sq / rows.length - mean * mean)) };
  };
  const stats = Array.from({ length: width }, (_, x) => col(x));
  const lo = Math.floor(width * 0.4), hi = Math.ceil(width * 0.6);
  let best = lo;
  const score = (s) => s.std - s.mean * 0.05;
  for (let x = lo; x <= hi; x++) if (score(stats[x]) < score(stats[best])) best = x;
  const b = stats[best];
  if (b.std > 22) return fallback; // aucune colonne uniforme : pas de filet net
  const same = (x) => x >= 0 && x < width && stats[x].std <= Math.max(b.std * 1.8, 10) && Math.abs(stats[x].mean - b.mean) <= 18;
  let left = best, right = best;
  while (same(left - 1) && best - left < width * 0.04) left--;
  while (same(right + 1) && right - best < width * 0.04) right++;
  const gap = right - left + 1;
  return { width, height, split: Math.round((left + right + 1) / 2), gap, detected: true };
}

const montages = {};
for (const key of Object.keys(files.site).filter((k) => k.startsWith("realisation-")).sort()) {
  if (!sorted[key]) continue;
  try {
    montages[key] = await splitOf(fileURLToPath(new URL(sorted[key].replace("/photos/", ""), outDir)));
  } catch (error) {
    console.warn(`[photos] ${key} : séparateur non détecté (${error.message})`);
  }
}
writeFileSync(new URL("../src/lib/realisations.generated.json", import.meta.url), JSON.stringify(montages, null, 2) + "\n");
console.log(`[photos] ${Object.values(montages).filter((m) => m.detected).length}/${Object.keys(montages).length} séparateurs avant/après détectés`);
