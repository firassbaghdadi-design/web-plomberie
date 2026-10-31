// Génère le favicon (icon.png, 64 px) et l'icône iPhone (apple-icon.png, 180 px) : « DBP » blanc sur carré noir,
// avec un degré rouge-orange (direction typographique suisse). Lancé à la main : node scripts/make-icons.mjs
import { writeFileSync } from "node:fs";
import sharp from "sharp";

const svg = (size) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">
<rect width="64" height="64" fill="#0b0b0b"/>
<text x="6" y="50" font-family="Helvetica, Arial, sans-serif" font-size="25" font-weight="700" fill="#ffffff" letter-spacing="-1.6">DBP</text>
<circle cx="53" cy="14" r="4.2" fill="none" stroke="#ff4a00" stroke-width="2.6"/></svg>`;
writeFileSync(new URL("../src/app/icon.png", import.meta.url), await sharp(Buffer.from(svg(64))).resize(64, 64).png().toBuffer());
writeFileSync(new URL("../src/app/apple-icon.png", import.meta.url), await sharp(Buffer.from(svg(180))).resize(180, 180).png().toBuffer());
console.log("icônes générées");
