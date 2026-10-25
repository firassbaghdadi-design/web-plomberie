// Télécharge, au build, les images publiées par Seragaz sur son site actuel (seragaz.fr, hébergé par Simplébo) :
// logo, sigle, photos de la page d'accueil, logo RGE Qualibat, logos des marques de chaudières.
// Une image qui ne se télécharge pas n'arrête pas le build : le site affiche alors une solution de repli.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const BASE = "https://files.sbcdnsb.com/images/4Qzhg1DchZl6TuqGA27FTQ/";
const files = {
  "logo.png": "businesses/1768420379/image001.png",
  "sigle.png": "favicon/1746542864/version_200_sigle.png",
  "accueil.png": "content/1743771290/5744529/1200/e1446ab506770ac08d6520250304-2715440-15huxw6.png",
  "atelier.jpeg": "content/1745308188/6039904/1200/fe8faedd7c63b127f82020250422-2352457-mh4032.jpeg",
  "rge-qualibat.jpeg": "content/1741079759/5744530/1000/64c939479a09b68c351820250304-2716191-1ub51wq.jpeg",
  "marque-saunier-duval.png": "content/1743668888/5911116/1000/13logsaunier.png",
  "marque-viessmann.png": "content/1743668902/5911179/1000/12logvissmann.png",
  "marque-frisquet.png": "content/1743668956/5911318/1000/8logfrisquet-1.png",
  "marque-ferroli.png": "content/1743668971/5911357/1000/7logferroli-1.png",
  "marque-de-dietrich.png": "content/1743668986/5911388/1000/5logdedietrich-1.png",
  "marque-chappee.png": "content/1743669000/5911429/1000/4logchappee-2.png",
  "marque-chaffoteaux.png": "content/1743669033/5911460/1000/3logchauffoteaux-1.png",
  "marque-auer.png": "content/1743669046/5911597/1000/2logauer-1.png",
  "marque-atlantic.png": "content/1743669060/5911655/1000/1logatlantic-1.png",
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
// Photos libres de lieux réels (Wikimedia Commons, licences libres créditées sur le site) : src/lib/commons.json
const commons = JSON.parse(readFileSync(new URL("../src/lib/commons.json", import.meta.url), "utf8"));
for (const [key, { file }] of Object.entries(commons)) {
  const url = `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=1600`;
  try {
    const res = await fetch(url, { headers: { "User-Agent": "seragaz-maquette/1.0 (build; contact fb.baghdadi@gmail.com)" }, redirect: "follow", signal: AbortSignal.timeout(30000) });
    const type = res.headers.get("content-type") ?? "";
    if (!res.ok || !type.startsWith("image/")) throw new Error(`${res.status} ${type}`);
    writeFileSync(new URL(`${key}.jpg`, outDir), Buffer.from(await res.arrayBuffer()));
    manifest[key] = `/photos/${key}.jpg`;
  } catch (e) {
    manifest[key] = null;
    console.warn(`[commons] ${file} : ${e.message}`);
  }
}
writeFileSync(new URL("../src/lib/site-photos.generated.json", import.meta.url), JSON.stringify(manifest, null, 2) + "\n");
console.log(`[site] ${Object.values(manifest).filter(Boolean).length}/${Object.keys(manifest).length} images (site actuel + Commons)`);
