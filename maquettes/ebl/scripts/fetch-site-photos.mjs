// Au build (Vercel a accès à internet, pas l'environnement de travail) : télécharge les photos Pexels de src/lib/pexels.json
// dans public/photos et écrit src/lib/site-photos.generated.json. EBL n'a pas de site : aucune photo d'entreprise à récupérer.
// Une image qui ne se télécharge pas n'arrête jamais le build : le site affiche alors un aplat clair légendé.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const UA = { "User-Agent": "Mozilla/5.0 (compatible; maquette-build)" };
const outDir = new URL("../public/photos/", import.meta.url);
mkdirSync(outDir, { recursive: true });
const pexels = JSON.parse(readFileSync(new URL("../src/lib/pexels.json", import.meta.url), "utf8"));
const manifest = {};
for (const [key, { pexels: id }] of Object.entries(pexels)) {
  const url = `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=2000`;
  manifest[key] = null;
  for (let attempt = 1; attempt <= 3 && !manifest[key]; attempt++) {
    try {
      const res = await fetch(url, { headers: UA, redirect: "follow", signal: AbortSignal.timeout(30000) });
      const type = res.headers.get("content-type") ?? "";
      if (!res.ok || !type.startsWith("image/")) throw new Error(`${res.status} ${type}`);
      writeFileSync(new URL(`${key}.jpg`, outDir), Buffer.from(await res.arrayBuffer()));
      manifest[key] = `/photos/${key}.jpg`;
    } catch (e) {
      if (attempt === 3) console.warn(`[pexels] ${id} : ${e.message}`);
    }
  }
}
writeFileSync(new URL("../src/lib/site-photos.generated.json", import.meta.url), JSON.stringify({ photos: manifest, logo: null, site: [] }, null, 2) + "\n");
console.log(`[photos] ${Object.values(manifest).filter(Boolean).length}/${Object.keys(manifest).length} photos Pexels`);
