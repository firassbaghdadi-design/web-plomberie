import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

const CDN = "https://primary.jwwb.nl/public/r/g/g/temp-evvbcsehnfqopbccznvb/";
const files = JSON.parse(readFileSync(new URL("../src/lib/photo-files.json", import.meta.url), "utf8"));
const outDir = new URL("../public/photos/", import.meta.url);
const manifestUrl = new URL("../src/lib/photos.generated.json", import.meta.url);
mkdirSync(outDir, { recursive: true });

async function download(file) {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(CDN + file, { signal: AbortSignal.timeout(25000) });
      const type = res.headers.get("content-type") ?? "";
      if (!res.ok || !type.startsWith("image/")) throw new Error(`${res.status} ${type}`);
      writeFileSync(new URL(file, outDir), Buffer.from(await res.arrayBuffer()));
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
  const present = existsSync(new URL(file, outDir)) || (await download(file));
  manifest[id] = present ? `/photos/${file}` : null;
  if (present) ok += 1;
}
writeFileSync(manifestUrl, JSON.stringify(manifest, null, 2) + "\n");
console.log(`[photos] ${ok}/${Object.keys(files).length} images aspirées et ré-hébergées`);
