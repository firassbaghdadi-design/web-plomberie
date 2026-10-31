// Génère les fichiers logo (SVG) de l'Atelier Truelle.  node build-logos.mjs
import { readFileSync, writeFileSync } from "node:fs";

const b64 = (f) => readFileSync(new URL(`./fonts/${f}`, import.meta.url)).toString("base64");
// Polices embarquées : le SVG s'affiche pareil partout, même sans les polices installées.
const fontCss = `@font-face{font-family:"Fraunces Variable";font-weight:100 900;src:url(data:font/woff2;base64,${b64("fraunces-latin-wght-normal.woff2")}) format("woff2")}@font-face{font-family:"Inter Variable";font-weight:100 900;src:url(data:font/woff2;base64,${b64("inter-latin-wght-normal.woff2")}) format("woff2")}`;

const C = { terre: "#C8553D", encre: "#14191C", papier: "#F4EEE3", ardoise: "#1F2A30" };

// Le symbole : la lame de la truelle est aussi un curseur de souris.
// Pointe vers le haut à gauche (comme un curseur), manche de truelle en bas à droite.
const symbol = ({ blade, neck, grip }) => `
  <g transform="rotate(-34 32 32) translate(0 1) translate(32 32) scale(1.1) translate(-32 -32)" stroke-linejoin="round" stroke-linecap="round">
    <path d="M32 7 L45.5 37 L32 30.5 L18.5 37 Z" fill="${blade}" stroke="${blade}" stroke-width="2"/>
    <path d="M32 31 L32 41" stroke="${neck}" stroke-width="3.4"/>
    <rect x="27.6" y="40" width="8.8" height="16" rx="4.4" fill="${grip}"/>
  </g>`;

const tile = (bg, s) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Atelier Truelle"><rect width="64" height="64" rx="14" fill="${bg}"/>${symbol(s)}</svg>\n`;
const bare = (s) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Atelier Truelle">${symbol(s)}</svg>\n`;

const lockup = ({ bg, tileBg, s, atelier, truelle }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 80" role="img" aria-label="Atelier Truelle">
  <style>${fontCss}</style>
  ${bg ? `<rect width="330" height="80" fill="${bg}"/>` : ""}
  <g transform="translate(8 8)"><rect width="64" height="64" rx="14" fill="${tileBg}"/>${symbol(s)}</g>
  <text x="91" y="36" font-family="'Inter Variable', Inter, 'Helvetica Neue', Arial, sans-serif" font-size="13" font-weight="600" letter-spacing="4.2" fill="${atelier}">ATELIER</text>
  <text x="89" y="64" font-family="'Fraunces Variable', Fraunces, Georgia, serif" font-size="35" font-weight="600" letter-spacing="-0.6" fill="${truelle}">Truelle</text>
</svg>\n`;

const out = (n, c) => writeFileSync(new URL(`./logos/${n}.svg`, import.meta.url), c);

out("symbole-terre", tile(C.terre, { blade: C.papier, neck: C.papier, grip: C.encre }));
out("symbole-encre", tile(C.encre, { blade: C.papier, neck: C.papier, grip: C.terre }));
out("symbole-papier", tile(C.papier, { blade: C.encre, neck: C.encre, grip: C.terre }));
out("symbole-seul-encre", bare({ blade: C.encre, neck: C.encre, grip: C.terre }));
out("symbole-seul-papier", bare({ blade: C.papier, neck: C.papier, grip: C.terre }));
out("symbole-monochrome-encre", bare({ blade: C.encre, neck: C.encre, grip: C.encre }));
out("symbole-monochrome-blanc", bare({ blade: "#fff", neck: "#fff", grip: "#fff" }));
out("logo-horizontal-clair", lockup({ tileBg: C.terre, s: { blade: C.papier, neck: C.papier, grip: C.encre }, atelier: "#5A6970", truelle: C.ardoise }));
out("logo-horizontal-sombre", lockup({ tileBg: C.terre, s: { blade: C.papier, neck: C.papier, grip: C.encre }, atelier: "#8A9BA3", truelle: C.papier }));
console.log("ok");
