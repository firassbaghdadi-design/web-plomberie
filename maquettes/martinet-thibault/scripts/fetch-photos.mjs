// Télécharge, au build Vercel, les images de la maquette vers public/photos/ :
// 1. les images publiées par l'entreprise sur son site actuel (martinet-thibault.com) ;
// 2. les photos libres de droits Pexels choisies par leur titre (registre : prospection/photos-utilisees.md).
// Une image déjà présente n'est pas retéléchargée ; une image qui échoue n'arrête pas le build (le site affiche un aplat légendé).
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

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
