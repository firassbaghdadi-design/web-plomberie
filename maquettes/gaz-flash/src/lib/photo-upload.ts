export const MAX_PHOTOS = 4;
/** Poids maximal cumulé des photos (en base64) : l'envoi reste sous la limite de 4,5 Mo des fonctions Vercel. */
export const MAX_TOTAL_B64 = 3_800_000;
const MAX_SIDE = 1600;

export type UploadedPhoto = { id: string; name: string; data: string; preview: string };

function loadImage(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("unreadable"));
    };
    img.src = url;
  });
}

/** Réduit la photo (1600 px max) et la convertit en JPEG : une photo de téléphone de 6 Mo tient alors en 200 à 500 Ko. */
export async function compressPhoto(file: File): Promise<UploadedPhoto> {
  if (!file.type.startsWith("image/")) throw new Error("not-image");
  let source: CanvasImageSource & { width: number; height: number };
  try {
    source = await createImageBitmap(file, { imageOrientation: "from-image" });
  } catch {
    source = await loadImage(file);
  }
  const scale = Math.min(1, MAX_SIDE / Math.max(source.width, source.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(source.width * scale));
  canvas.height = Math.max(1, Math.round(source.height * scale));
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("canvas");
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(source, 0, 0, canvas.width, canvas.height);
  let quality = 0.82;
  let url = canvas.toDataURL("image/jpeg", quality);
  while (url.length > 1_300_000 && quality > 0.45) {
    quality -= 0.12;
    url = canvas.toDataURL("image/jpeg", quality);
  }
  const base = file.name.replace(/\.[^.]+$/, "").replace(/[^\w.-]+/g, "-").slice(0, 40) || "photo";
  return { id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, name: `${base}.jpg`, data: url.split(",")[1] ?? "", preview: url };
}
