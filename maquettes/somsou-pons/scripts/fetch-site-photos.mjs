// Télécharge, au build, les photos publiées par l'entreprise sur son site actuel (page « Nos agences » et accueil).
// Elles sont listées dans le journal de build, puis enregistrées dans public/photos/site-N.<ext>.
import { copyFileSync, mkdirSync, writeFileSync } from "node:fs";

const pages = ["http://www.somsoupons.fr/agences.html", "http://www.somsoupons.fr/", "http://www.somsoupons.fr/presentation.html", "http://www.somsoupons.fr/metier.html"];
const outDir = new URL("../public/photos/", import.meta.url);
mkdirSync(outDir, { recursive: true });
const found = [];
for (const page of pages) {
  try {
    const html = await (await fetch(page, { signal: AbortSignal.timeout(20000) })).text();
    for (const m of html.matchAll(/<img[^>]*>/gi)) {
      const src = (m[0].match(/src=["']([^"']+)["']/i) ?? [])[1];
      const alt = (m[0].match(/alt=["']([^"']*)["']/i) ?? [])[1] ?? "";
      if (src) found.push({ page, src: new URL(src, page).href, alt });
    }
    for (const m of html.matchAll(/url\(["']?([^"')]+\.(?:jpe?g|png|webp))["']?\)/gi)) found.push({ page, src: new URL(m[1], page).href, alt: "(css)" });
  } catch (e) {
    console.warn(`[site] ${page} : ${e.message}`);
  }
}
const seen = new Set();
const manifest = [];
for (const f of found) {
  if (seen.has(f.src)) continue;
  seen.add(f.src);
  try {
    const res = await fetch(f.src, { signal: AbortSignal.timeout(20000) });
    const buf = Buffer.from(await res.arrayBuffer());
    const ext = (f.src.match(/\.(jpe?g|png|webp|gif)(\?|$)/i) ?? [, "jpg"])[1].toLowerCase();
    const name = `site-${manifest.length + 1}.${ext}`;
    writeFileSync(new URL(name, outDir), buf);
    manifest.push({ name, ...f, bytes: buf.length });
    console.log(`[site] ${name} ${buf.length}o ${f.page} -> ${f.src} alt="${f.alt}"`);
  } catch (e) {
    console.warn(`[site] ${f.src} : ${e.message}`);
  }
}
writeFileSync(new URL("../src/lib/site-photos.generated.json", import.meta.url), JSON.stringify(manifest, null, 2) + "\n");

// Photos des agences : les photos (JPEG de plus de 15 ko) de la page « Nos agences », dans l'ordre de la page :
// agence du 16e, agence du 17e, menuiserie Transvaal. À vérifier à l'écran.
const keys = ["seize", "dixsept", "transvaal"];
const photos = manifest.filter((m) => m.page.endsWith("agences.html") && /\.jpe?g$/i.test(m.name) && m.bytes > 15000);
const agencyPhotos = {};
keys.forEach((k, i) => {
  const m = photos[i];
  if (m) {
    copyFileSync(new URL(m.name, outDir), new URL(`agence-${k}.jpg`, outDir));
    agencyPhotos[k] = `/photos/agence-${k}.jpg`;
  } else agencyPhotos[k] = null;
});
writeFileSync(new URL("../src/lib/agency-photos.generated.json", import.meta.url), JSON.stringify(agencyPhotos, null, 2) + "\n");
console.log("[site] photos d'agences", JSON.stringify(agencyPhotos));
console.log(`[site] ${manifest.length} images du site actuel`);
