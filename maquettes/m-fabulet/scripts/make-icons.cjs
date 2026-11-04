// Favicon et icône iPhone tirés du logo : le visage de la mascotte M. Fabulet sur un rond crème bordé de brun bois.
// Usage : node scripts/make-icons.cjs (après extract-mascot.cjs)
const sharp = require("sharp");
const path = require("node:path");
const root = path.join(__dirname, "..");

(async () => {
  const head = await sharp(path.join(root, "public/brand/mascotte.png")).extract({ left: 112, top: 0, width: 236, height: 236 }).resize(400, 400).png().toBuffer();
  const make = async (size, file, round) => {
    const bg = Buffer.from(
      `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512"><rect width="512" height="512" rx="${round ? 256 : 0}" fill="#F4ECDF"/>${round ? '<circle cx="256" cy="256" r="246" fill="none" stroke="#6B4423" stroke-width="14"/>' : ""}</svg>`,
    );
    const shape = round ? '<circle cx="256" cy="256" r="240" fill="#000"/>' : '<rect width="512" height="512" fill="#000"/>';
    const disc = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512">${shape}</svg>`);
    const layer = await sharp({ create: { width: 512, height: 512, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
      .composite([{ input: head, left: 56, top: 70 }, { input: disc, blend: "dest-in" }]).png().toBuffer();
    const ring = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512">${round ? '<circle cx="256" cy="256" r="246" fill="none" stroke="#6B4423" stroke-width="14"/>' : ""}</svg>`);
    const img = await sharp(bg).composite([{ input: layer }, { input: ring }]).png().toBuffer();
    await sharp(img).resize(size, size).png({ compressionLevel: 9 }).toFile(path.join(root, file));
  };
  await make(256, "src/app/icon.png", true);
  await make(180, "src/app/apple-icon.png", false);
  console.log("icônes prêtes");
})();
