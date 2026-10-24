import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

const CDN = "https://gazflash.fr/wp-content/uploads/";
const files = JSON.parse(readFileSync(new URL("../src/lib/photo-files.json", import.meta.url), "utf8"));
const outDir = new URL("../public/photos/", import.meta.url);
const manifestUrl = new URL("../src/lib/photos.generated.json", import.meta.url);
mkdirSync(outDir, { recursive: true });

const extension = (file) => file.split(".").pop().toLowerCase();

async function download(file, target) {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(CDN + file, { signal: AbortSignal.timeout(25000) });
      const type = res.headers.get("content-type") ?? "";
      if (!res.ok || !type.startsWith("image/")) throw new Error(`${res.status} ${type}`);
      writeFileSync(target, Buffer.from(await res.arrayBuffer()));
      return true;
    } catch (error) {
      if (attempt === 3) console.warn(`[photos] ${file} : ${error.message}`);
    }
  }
  return false;
}

const manifest = {};
let ok = 0;
for (const [id, file] of Object.entries(files)) {
  const name = `${id}.${extension(file)}`;
  const target = new URL(name, outDir);
  const present = existsSync(target) || (await download(file, target));
  manifest[id] = present ? `/photos/${name}` : null;
  if (present) ok += 1;
}
writeFileSync(manifestUrl, JSON.stringify(manifest, null, 2) + "\n");
console.log(`[photos] ${ok}/${Object.keys(files).length} images aspirées et ré-hébergées`);
