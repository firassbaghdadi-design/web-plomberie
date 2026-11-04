// Détoure la mascotte du logo M. Fabulet à partir de la capture fournie par Firas (prospection/references/fabulet-logo-capture.png).
// Usage : node scripts/extract-mascot.cjs <capture.png> <sortie-mascotte.png>
// Le dessin est repris à l'identique : on retire seulement le fond blanc, les rails de la ferme qui touchent la jambe
// et le jambage du « M » posé sur le bout de la planche.
const sharp = require("sharp");
const [, , src, outMascot] = process.argv;

(async () => {
  const X0 = 12, Y0 = 1075 + 6, W = 404, H = 508;
  const { data } = await sharp(src).extract({ left: X0, top: Y0, width: W, height: H }).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const px = (x, y) => (y * W + x) * 4;
  const light = (i) => data[i] > 222 && data[i + 1] > 222 && data[i + 2] > 222;
  // Brun plat des rails de la ferme et des lettres du logo
  const flatBrown = (i) => { const r = data[i], g = data[i + 1], b = data[i + 2]; return r > 80 && r < 145 && g > 50 && g < 105 && b > 20 && b < 75 && r - b > 40; };
  const bg = new Uint8Array(W * H);
  const stack = [];
  for (let x = 0; x < W; x++) stack.push([x, 0], [x, H - 1]);
  for (let y = 0; y < H; y++) stack.push([0, y], [W - 1, y]);
  while (stack.length) {
    const [x, y] = stack.pop();
    if (x < 0 || y < 0 || x >= W || y >= H) continue;
    const k = y * W + x;
    if (bg[k]) continue;
    const i = k * 4;
    // rails de la ferme : brun plus gris que la salopette (r - g < 44), et seulement à droite du contour de la jambe
    const gx = x + 12, gy = y + 6;
    const truss = gy > 345 && gx > 312 + Math.max(0, gy - 400) * 0.3 && flatBrown(i) && data[i] - data[i + 1] < 44;
    if (!light(i) && !truss) continue;
    bg[k] = 1;
    stack.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
  }
  // Jambage du M : sous le bord haut de la planche, on rend la couleur de la planche ; au-dessus, transparent.
  const s = px(360 - 12, 150 - 6);
  const plank = [data[s], data[s + 1], data[s + 2]];
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const gx = x + 12, gy = y + 6, i = px(x, y);
    if (gx >= 381 && gy < 165 && flatBrown(i)) {
      if (gy >= 111 && gx <= 409) { data[i] = plank[0]; data[i + 1] = plank[1]; data[i + 2] = plank[2]; }
      else bg[y * W + x] = 1;
    }
  }
  // Bout de planche caché par le M : la planche est recoupée net juste avant la lettre, avec un trait de contour.
  const CUT = 379;
  const edge = [92, 52, 28];
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const gx = x + 12, gy = y + 6, i = px(x, y);
    const r = data[i], g = data[i + 1], b = data[i + 2];
    if (gx >= CUT && gy < 200) bg[y * W + x] = 1;
    else if ((gx === CUT - 1 || gx === CUT - 2) && gy < 200 && !bg[y * W + x] && r > 150) { data[i] = edge[0]; data[i + 1] = edge[1]; data[i + 2] = edge[2]; }
    // Restes clairs des rails de la ferme, à droite de la jambe
    const l = (r + g + b) / 3;
    if (gx > 318 && gy > 340 && l > 150) bg[y * W + x] = 1;
  }
  // Petites pointes laissées par les rails contre la jambe : trois passes d'ébarbage dans cette zone.
  for (let pass = 0; pass < 3; pass++) {
    const drop = [];
    for (let y = 380 - 6; y < H - 1; y++) for (let x = 300 - 12; x < W - 1; x++) {
      const k = y * W + x;
      if (bg[k]) continue;
      let n = 0;
      for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) if (!bg[k + dy * W + dx]) n++;
      if (n < 6) drop.push(k);
    }
    drop.forEach((k) => { bg[k] = 1; });
  }
  // On ne garde que la plus grande forme d'un seul tenant (la mascotte) : les petits restes isolés disparaissent.
  const comp = new Int32Array(W * H).fill(-1);
  let best = -1, bestSize = 0, id = 0;
  for (let k0 = 0; k0 < W * H; k0++) {
    if (bg[k0] || comp[k0] >= 0) continue;
    let size = 0; const st = [k0]; comp[k0] = id;
    while (st.length) {
      const k = st.pop(); size++;
      const x = k % W, y = (k / W) | 0;
      for (const n of [x > 0 ? k - 1 : -1, x < W - 1 ? k + 1 : -1, y > 0 ? k - W : -1, y < H - 1 ? k + W : -1]) if (n >= 0 && !bg[n] && comp[n] < 0) { comp[n] = id; st.push(n); }
    }
    if (size > bestSize) { bestSize = size; best = id; }
    id++;
  }
  for (let k = 0; k < W * H; k++) if (comp[k] !== best && !bg[k]) {
    // les blancs enfermés (yeux, dents, tee-shirt) appartiennent à la mascotte : seuls les fragments hors silhouette tombent
    bg[k] = 1;
  }
  for (let k = 0; k < W * H; k++) if (bg[k]) data[k * 4 + 3] = 0;
  // Liseré : pixels clairs au contact du fond, rendus semi-transparents pour éviter le halo blanc.
  for (let y = 1; y < H - 1; y++) for (let x = 1; x < W - 1; x++) {
    const k = y * W + x;
    if (bg[k]) continue;
    if (bg[k - 1] || bg[k + 1] || bg[k - W] || bg[k + W]) {
      const i = k * 4;
      const l = (data[i] + data[i + 1] + data[i + 2]) / 3;
      if (l > 190) data[i + 3] = Math.max(0, Math.round(255 * (1 - (l - 190) / 65)));
    }
  }
  await sharp(data, { raw: { width: W, height: H, channels: 4 } }).trim({ threshold: 1 }).png({ compressionLevel: 9 }).toFile(outMascot);
  console.log("mascotte prête :", outMascot);
})();
