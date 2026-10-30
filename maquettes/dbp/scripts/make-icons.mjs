// Génère le favicon (icon.png, 64 px) et l'icône iPhone (apple-icon.png, 180 px) : le cadran de thermostat « DBP »,
// arc bleu froid qui finit en rouge doux. Lancé à la main : node scripts/make-icons.mjs
import { writeFileSync } from "node:fs";
import sharp from "sharp";

const svg = (size, pad) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">
<defs><linearGradient id="g" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#1e6696"/><stop offset="1" stop-color="#bc4840"/></linearGradient></defs>
<rect width="64" height="64" rx="${pad ? 0 : 14}" fill="#ffffff"/>
<path d="M15.5 49.5 A25 25 0 1 1 48.5 49.5" fill="none" stroke="url(#g)" stroke-width="3.6" stroke-linecap="round"/>
<text x="32" y="38" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="17" font-weight="700" fill="#13171c" letter-spacing="-0.5">DBP</text></svg>`;
writeFileSync(new URL("../src/app/icon.png", import.meta.url), await sharp(Buffer.from(svg(64, false))).resize(64, 64).png().toBuffer());
writeFileSync(new URL("../src/app/apple-icon.png", import.meta.url), await sharp(Buffer.from(svg(180, true))).resize(180, 180).png().toBuffer());
console.log("icônes générées");
