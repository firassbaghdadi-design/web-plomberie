// Télécharge au build Vercel (qui a accès à internet) les photos de la maquette vers public/photos/.
// 1) Les photos du site actuel de l'entreprise (couverture-mfabulet.fr : métiers, réalisations, avant / après).
//    Le certificat du site est parfois refusé : on retente alors en http.
// 2) Si une photo de l'entreprise manque, sa photo Pexels de repli (choisie par son titre exact, registre
//    prospection/photos-utilisees.md). Une photo qui échoue n'arrête jamais le build.
// Les photos sont recadrées et compressées avec sharp (2000 px de large au plus, JPEG progressif).
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import sharp from "sharp";

const files = JSON.parse(readFileSync(new URL("../src/lib/photo-files.json", import.meta.url), "utf8"));
const outDir = new URL("../public/photos/", import.meta.url);
mkdirSync(outDir, { recursive: true });
const SITE = "couverture-mfabulet.fr/media/tPage//";

async function download(urls, target) {
  for (const url of urls) {
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 (compatible; maquette-build)" }, signal: AbortSignal.timeout(30000) });
        const type = res.headers.get("content-type") ?? "";
        if (!res.ok || !type.startsWith("image/")) throw new Error(`${res.status} ${type}`);
        const buf = Buffer.from(await res.arrayBuffer());
        const meta = await sharp(buf).metadata();
        if ((meta.width ?? 0) < 380) throw new Error(`trop petite (${meta.width} px)`);
        await sharp(buf).rotate().resize({ width: 2000, withoutEnlargement: true }).jpeg({ quality: 80, progressive: true, mozjpeg: true }).toFile(target.pathname);
        return true;
      } catch (error) {
        if (attempt === 2) console.warn(`[photos] ${url} : ${error.message}`);
      }
    }
  }
  return false;
}

const pexelsUrl = (id) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=2200`;
const manifest = {};
const source = {};

await Promise.all(
  Object.entries(files.pexels).map(async ([key, f]) => {
    const target = new URL(`${key}.jpg`, outDir);
    const ok = existsSync(target) || (await download([pexelsUrl(f.id)], target));
    manifest[key] = ok ? `/photos/${key}.jpg` : null;
    source[key] = "pexels";
  }),
);

await Promise.all(
  Object.entries(files.site).map(async ([key, f]) => {
    const target = new URL(`${key}.jpg`, outDir);
    const ok = existsSync(target) || (await download([`https://${SITE}${f.path}`, `http://${SITE}${f.path}`], target));
    if (ok) { manifest[key] = `/photos/${key}.jpg`; source[key] = "site"; }
    else if (f.fallback && manifest[f.fallback]) { manifest[key] = manifest[f.fallback]; source[key] = `pexels:${f.fallback}`; }
    else { manifest[key] = null; source[key] = "absente"; }
  }),
);

const sorted = Object.fromEntries(Object.keys(manifest).sort().map((k) => [k, manifest[k]]));
writeFileSync(new URL("../src/lib/photos.generated.json", import.meta.url), JSON.stringify({ src: sorted, source }, null, 2) + "\n");
console.log(`[photos] ${Object.values(manifest).filter(Boolean).length}/${Object.keys(manifest).length} photos prêtes`, source);
