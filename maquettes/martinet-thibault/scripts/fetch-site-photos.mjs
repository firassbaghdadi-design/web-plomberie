// Télécharge, au build, les images publiées par l'entreprise sur son site actuel (martinet-thibault.com) :
// photos de réalisations, visuels des pages, logos des qualifications et des partenaires.
// Une image qui ne se télécharge pas n'arrête pas le build : le site affiche alors un fond neutre.
import { mkdirSync, writeFileSync } from "node:fs";

const BASE = "https://www.martinet-thibault.com/";
const files = {
  "realisation-01.jpg": "IMG/01.jpg",
  "realisation-02.jpg": "IMG/02.jpg",
  "realisation-03.jpg": "IMG/03.jpg",
  "realisation-04.jpg": "IMG/04.jpg",
  "realisation-05.jpg": "IMG/05.jpg",
  "realisation-06.jpg": "IMG/06.jpg",
  "realisation-07.jpg": "IMG/07.jpg",
  "realisation-08.jpg": "IMG/08.jpg",
  "realisation-09.jpg": "IMG/09.jpg",
  "site-historique.jpg": "IMG/historique.jpg",
  "site-services.jpg": "IMG/services.jpg",
  "site-contact.jpg": "IMG/contact.jpg",
  "accueil-1.jpg": "comslider1370643/img/170805151912101.jpg",
  "accueil-2.jpg": "comslider1370643/img/170805151923102.jpg",
  "accueil-3.jpg": "comslider1370643/img/170805151932103.jpg",
  "accueil-4.jpg": "comslider1370643/img/170805151942104.jpg",
  "logo-qualibat-rge.jpg": "IMG/qualibat-rge.jpg",
  "logo-qualigaz.jpg": "IMG/qualigaz.jpg",
  "logo-ffb.png": "IMG/FFB-uncp.png",
  "logo-gccp.jpg": "IMG/gccp.jpg",
  "logo-velux.jpg": "IMG/logo_velux.jpg",
  "logo-qualibat.jpg": "IMG/logo_qualibat.jpg",
  "logo-pgn.jpg": "IMG/logo_pgn.jpg",
  "logo-villeroy.jpg": "IMG/logo_villeroy.jpg",
};
const outDir = new URL("../public/photos/", import.meta.url);
mkdirSync(outDir, { recursive: true });
const manifest = {};
for (const [name, path] of Object.entries(files)) {
  const key = name.replace(/\.\w+$/, "");
  try {
    const res = await fetch(BASE + path, { headers: { "User-Agent": "Mozilla/5.0 (compatible; build)" }, signal: AbortSignal.timeout(20000) });
    const type = res.headers.get("content-type") ?? "";
    if (!res.ok || !type.startsWith("image/")) throw new Error(`${res.status} ${type}`);
    writeFileSync(new URL(name, outDir), Buffer.from(await res.arrayBuffer()));
    manifest[key] = `/photos/${name}`;
  } catch (e) {
    manifest[key] = null;
    console.warn(`[site] ${path} : ${e.message}`);
  }
}
writeFileSync(new URL("../src/lib/site-photos.generated.json", import.meta.url), JSON.stringify(manifest, null, 2) + "\n");
console.log(`[site] ${Object.values(manifest).filter(Boolean).length}/${Object.keys(files).length} images du site actuel`);
