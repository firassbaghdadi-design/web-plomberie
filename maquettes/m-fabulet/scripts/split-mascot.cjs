// Découpe la mascotte détourée (public/brand/mascotte.png) en quatre calques pour l'animation du héros :
// corps, bras au pouce levé, planche (avec la main qui la tient) et tête.
// Usage : node scripts/split-mascot.cjs [public/brand/mascotte.png] [public/brand/mascotte]
// Chaque calque garde le cadre complet de l'image source (374 × 495, exporté ×2) : ils se superposent au pixel près.
// Ce qui était caché derrière une pièce mobile est reconstitué juste assez pour qu'aucun trou n'apparaisse
// quand elle bouge (bois de la planche derrière la tête, poignet sous la manche, haut du cou sous le menton).
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");
const [, , src = "public/brand/mascotte.png", outDir = "public/brand/mascotte"] = process.argv;

// Points de pivot (coordonnées du cadre source), repris tels quels dans le CSS (en %).
const SCALE = 2;
const PIVOT = { arm: [291, 252], plank: [165, 238], head: [226, 212] };

(async () => {
  const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const W = info.width, H = info.height, N = W * H;
  const at = (x, y) => (y * W + x) * 4;
  const opaque = (k) => data[k * 4 + 3] > 16;
  const rgb = (k) => [data[k * 4], data[k * 4 + 1], data[k * 4 + 2]];
  // Bois clair de la planche (et ses veines) : orangé saturé, plus clair que les contours.
  const wood = (k) => { const [r, g, b] = rgb(k); return opaque(k) && r > 170 && g > 95 && b < 100 && r - b > 100; };
  const whiteish = (k) => { const [r, g, b] = rgb(k); return r > 205 && g > 205 && b > 195; };

  // Bords de la planche, relevés sur ses parties visibles (elle est vue en légère perspective).
  const top = (x) => 187 - 0.2627 * (x - 20);
  const bottom = (x) => 276 - 0.311 * (x - 30);
  const inBand = (x, y) => x <= 360 && y >= top(x) - 2 && y <= bottom(x) + 5;
  // Cou : la peau sous le menton passe devant la planche.
  const neck = (x, y) => x >= 188 && x <= 268 && y >= 205 && !wood(y * W + x);

  const inPoly = (pts, x, y) => {
    let c = false;
    for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
      const [xi, yi] = pts[i], [xj, yj] = pts[j];
      if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) c = !c;
    }
    return c;
  };
  // Contour large de la tête (casquette, visage, oreille), fermé sous le menton.
  const HEAD = [[100, 0], [346, 0], [341, 92], [333, 101], [336, 150], [305, 178], [285, 192], [262, 204], [240, 211], [205, 212], [188, 206], [182, 192], [180, 150], [168, 128], [118, 112], [100, 100]];

  const flood = (seeds, ok) => {
    const m = new Uint8Array(N); const st = [];
    for (const [x, y] of seeds) { const k = y * W + x; if (ok(k)) { m[k] = 1; st.push(k); } }
    while (st.length) {
      const k = st.pop(); const x = k % W, y = (k / W) | 0;
      for (const n of [x > 0 ? k - 1 : -1, x < W - 1 ? k + 1 : -1, y > 0 ? k - W : -1, y < H - 1 ? k + W : -1]) if (n >= 0 && !m[n] && ok(n)) { m[n] = 1; st.push(n); }
    }
    return m;
  };
  const xy = (k) => [k % W, (k / W) | 0];

  // Bois de la planche visible, atteint depuis ses parties dégagées sans sortir de la bande.
  const plankWood = flood([[60, 220], [170, 185], [300, 175], [345, 140], [20, 230]], (k) => { const [x, y] = xy(k); return wood(k) && inBand(x, y) && !neck(x, y); });
  // Tête : dans le contour, opaque, hors bois de planche, et d'un seul tenant avec le visage.
  const head = flood([[230, 150], [240, 40]], (k) => { const [x, y] = xy(k); return opaque(k) && !plankWood[k] && inPoly(HEAD, x, y); });
  // Bras au pouce levé : tout ce qui dépasse de la manche droite, hors tee-shirt blanc.
  const arm = flood([[330, 250], [318, 205]], (k) => { const [x, y] = xy(k); return opaque(k) && x >= 288 && y >= 190 && y <= 330 && !(x < 297 && whiteish(k)) && !inBand(x, y); });
  // Planche et main qui la tient (la main bouge avec elle).
  const plank = new Uint8Array(N);
  for (let k = 0; k < N; k++) {
    if (!opaque(k) || head[k] || arm[k]) continue;
    const [x, y] = xy(k);
    if ((inBand(x, y) && !neck(x, y)) || (x >= 45 && x <= 165 && y >= 135 && y < top(x) - 1)) plank[k] = 1;
  }

  const layer = () => Buffer.alloc(N * 4, 0);
  const copy = (dst, k, from = k) => { for (let c = 0; c < 4; c++) dst[k * 4 + c] = data[from * 4 + c]; };
  const put = (dst, k, [r, g, b], a = 255) => { dst[k * 4] = r; dst[k * 4 + 1] = g; dst[k * 4 + 2] = b; dst[k * 4 + 3] = a; };

  const L = { tete: layer(), bras: layer(), planche: layer(), corps: layer() };
  for (let k = 0; k < N; k++) {
    if (!opaque(k)) continue;
    if (head[k]) copy(L.tete, k); else if (arm[k]) copy(L.bras, k); else if (plank[k]) copy(L.planche, k); else copy(L.corps, k);
  }

  // Planche : le bois caché derrière la tête est recopié depuis une bande visible juste à gauche du visage,
  // à la même hauteur relative entre les deux bords, en miroir pour éviter un motif répété trop visible.
  // On reprend aussi les restes de contour du visage restés sur la planche (4 px autour de la tête).
  const near = new Uint8Array(N);
  for (let k = 0; k < N; k++) if (head[k]) { const [x, y] = xy(k); for (let dy = -4; dy <= 4; dy++) for (let dx = -4; dx <= 4; dx++) { const X = x + dx, Y = y + dy; if (X >= 0 && Y >= 0 && X < W && Y < H) near[Y * W + X] = 1; } }
  for (let k = 0; k < N; k++) {
    const [x, y] = xy(k);
    if (!head[k] && !(near[k] && plank[k]) && !(plank[k] && x >= 176 && x <= 262)) continue;
    if (!inBand(x, y) || x > 357 || neck(x, y)) continue;
    const t = (y - top(x)) / (bottom(x) - top(x));
    const span = 22, p = Math.abs(((x - 182) % (2 * span)) - span);
    const sx = 153 + p, sy = Math.round(top(sx) + t * (bottom(sx) - top(sx)));
    const s = sy * W + sx;
    if (opaque(s)) copy(L.planche, k, s);
  }

  // Corps : sous le bord bas de la planche, on prolonge vers le haut ce qui est juste dessous (épaule, tee-shirt),
  // pour que le balancement ne découvre jamais de vide.
  for (let x = 110; x <= 360; x++) {
    const b = Math.round(bottom(x)) + 6;
    if (b >= H) continue;
    const from = b * W + x;
    if (L.corps[from * 4 + 3] < 220) continue;
    for (let y = b - 1; y >= Math.round(bottom(x)) - 3; y--) { const k = y * W + x; if (!L.corps[k * 4 + 3] && !head[k]) for (let c = 0; c < 4; c++) L.corps[k * 4 + c] = L.corps[from * 4 + c]; }
  }
  // Cou : prolongé de quelques pixels sous le menton, qui peut s'incliner.
  for (let x = 196; x <= 264; x++) for (let y = 213; y >= 198; y--) {
    const k = y * W + x, below = k + W;
    if (!L.corps[k * 4 + 3] && L.corps[below * 4 + 3] && !L.planche[k * 4 + 3]) for (let c = 0; c < 4; c++) L.corps[k * 4 + c] = L.corps[below * 4 + c];
  }
  // Manche droite : un liseré brun là où la main la quittait.
  for (let y = 205; y < 295; y++) for (let x = 284; x < 290; x++) {
    const k = y * W + x;
    if (L.corps[k * 4 + 3] && whiteish(k) && !L.corps[(k + 1) * 4 + 3]) { put(L.corps, k, [118, 76, 52]); if (L.corps[(k - 1) * 4 + 3]) put(L.corps, k - 1, [170, 140, 125]); }
  }
  // Bras : un poignet couleur peau caché sous la manche (le calque du bras passe derrière le corps),
  // pour qu'aucun jour n'apparaisse entre la manche et la main quand le bras pivote.
  const [px, py] = PIVOT.arm;
  for (let y = 214; y <= 292; y++) for (let x = 276; x <= 291; x++) {
    const k = y * W + x;
    if (!L.bras[k * 4 + 3] && Math.hypot((x - px) * 1.6, (y - py) * 0.62) < 26) put(L.bras, k, [244, 196, 160]);
  }

  fs.mkdirSync(outDir, { recursive: true });
  for (const [name, buf] of Object.entries(L)) {
    const file = path.join(outDir, `${name}.png`);
    // Agrandi ×2 (lanczos) : des traits nets sur les grands écrans, puis réduit en palette.
    const big = await sharp(buf, { raw: { width: W, height: H, channels: 4 } }).resize(W * SCALE, H * SCALE, { kernel: "lanczos3" }).png().toBuffer();
    await sharp(big).png({ palette: true, quality: 90, effort: 10, compressionLevel: 9 }).toFile(file);
    console.log(file, fs.statSync(file).size, "octets");
  }
  console.log("pivots", JSON.stringify(Object.fromEntries(Object.entries(PIVOT).map(([n, [x, y]]) => [n, `${((x / W) * 100).toFixed(2)}% ${((y / H) * 100).toFixed(2)}%`]))));
})();
