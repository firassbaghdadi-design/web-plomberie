// Télécharge, au build, les images publiées par l'entreprise sur son site actuel (somsoupons.fr) :
// visuels des agences, photos avant/après de chantiers, logos de qualification.
import { mkdirSync, writeFileSync } from "node:fs";

const BASE = "http://www.somsoupons.fr/images/";
const files = {
  "agence-seize.png": "accueil/1.png",
  "agence-dixsept.png": "accueil/2.png",
  "agence-transvaal.png": "accueil/3.png",
  "realisation-1.jpg": "diaporamaindex2/avantapres1b.jpg",
  "realisation-2.jpg": "diaporamaindex2/avantapres2b.jpg",
  "realisation-3.jpg": "diaporamaindex2/avantapres3b.jpg",
  "realisation-4.jpg": "diaporamaindex2/avantapres4b.jpg",
  "realisation-5.jpg": "diaporamaindex2/avantapres5b.jpg",
  "logo-qualibat.png": "qualibat.png",
  "logo-pg.png": "pgr.png",
  "logo-rge.png": "rge.png",
};
const outDir = new URL("../public/photos/", import.meta.url);
mkdirSync(outDir, { recursive: true });
const manifest = {};
for (const [name, path] of Object.entries(files)) {
  try {
    const res = await fetch(BASE + path, { signal: AbortSignal.timeout(20000) });
    const type = res.headers.get("content-type") ?? "";
    if (!res.ok || !type.startsWith("image/")) throw new Error(`${res.status} ${type}`);
    writeFileSync(new URL(name, outDir), Buffer.from(await res.arrayBuffer()));
    manifest[name.replace(/\.\w+$/, "")] = `/photos/${name}`;
  } catch (e) {
    manifest[name.replace(/\.\w+$/, "")] = null;
    console.warn(`[site] ${path} : ${e.message}`);
  }
}
writeFileSync(new URL("../src/lib/site-photos.generated.json", import.meta.url), JSON.stringify(manifest, null, 2) + "\n");
console.log(`[site] ${Object.values(manifest).filter(Boolean).length}/${Object.keys(files).length} images du site actuel`);
