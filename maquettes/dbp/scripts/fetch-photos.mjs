// Télécharge, au build Vercel (qui a accès à internet), les photos de la maquette vers public/photos/.
// DBP n a pas de site : aucune photo ni logo d entreprise à récupérer. Les photos sont des photos Pexels choisies par leur titre exact
// (registre : prospection/photos-utilisees.md). Une photo déjà présente n'est pas retéléchargée ; une photo qui échoue
// n'arrête pas le build (le site affiche alors un aplat légendé).
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

const manifest = {};
await Promise.all(
  Object.entries(files.pexels).map(async ([key, f]) => {
    const target = new URL(`${key}.jpg`, outDir);
    const url = `https://images.pexels.com/photos/${f.id}/pexels-photo-${f.id}.jpeg?auto=compress&cs=tinysrgb&w=2000`;
    const ok = existsSync(target) || (await download(url, target));
    manifest[key] = ok ? `/photos/${key}.jpg` : null;
  }),
);
const sorted = Object.fromEntries(Object.keys(manifest).sort().map((k) => [k, manifest[k]]));
writeFileSync(new URL("../src/lib/photos.generated.json", import.meta.url), JSON.stringify(sorted, null, 2) + "\n");
console.log(`[photos] ${Object.values(manifest).filter(Boolean).length}/${Object.keys(manifest).length} photos prêtes`);
