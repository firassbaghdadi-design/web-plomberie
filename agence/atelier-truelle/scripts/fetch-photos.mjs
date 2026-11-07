// Télécharge, au build, les photos libres de droit (Pexels) vers public/photos/.
// Une photo qui ne se télécharge pas n'arrête pas le build : le site affiche alors un fond neutre.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

const files = JSON.parse(readFileSync(new URL("../src/lib/photo-files.json", import.meta.url), "utf8"));
const outDir = new URL("../public/photos/", import.meta.url);
const manifestUrl = new URL("../src/lib/photos.generated.json", import.meta.url);
mkdirSync(outDir, { recursive: true });

async function download(id, pexels, target) {
  const url = `https://images.pexels.com/photos/${pexels}/pexels-photo-${pexels}.jpeg?auto=compress&cs=tinysrgb&w=1800`;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 (compatible; build)" }, signal: AbortSignal.timeout(30000) });
      const type = res.headers.get("content-type") ?? "";
      if (!res.ok || !type.startsWith("image/")) throw new Error(`${res.status} ${type}`);
      writeFileSync(target, Buffer.from(await res.arrayBuffer()));
      return true;
    } catch (error) {
      if (attempt === 3) console.warn(`[photos] ${id} (pexels ${pexels}) : ${error.message}`);
    }
  }
  return false;
}

const manifest = {};
let ok = 0;
for (const [id, { pexels }] of Object.entries(files)) {
  const target = new URL(`${id}.jpg`, outDir);
  const present = existsSync(target) || (await download(id, pexels, target));
  manifest[id] = present ? `/photos/${id}.jpg` : null;
  if (present) ok += 1;
}
writeFileSync(manifestUrl, JSON.stringify(manifest, null, 2) + "\n");
console.log(`[photos] ${ok}/${Object.keys(files).length} photos téléchargées`);
