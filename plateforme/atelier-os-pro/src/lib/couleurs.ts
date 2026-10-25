/** "#C8553D" → "200 85 61" (format des variables Tailwind). */
export function hexEnRgb(hex: string): string | null {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex);
  if (!m) return null;
  const n = parseInt(m[1], 16);
  return `${(n >> 16) & 255} ${(n >> 8) & 255} ${n & 255}`;
}

/** Variante éclaircie pour le mode sombre (mélange avec du blanc). */
export function eclaircir(hex: string, t = 0.18): string | null {
  const rgb = hexEnRgb(hex);
  if (!rgb) return null;
  return rgb
    .split(" ")
    .map((x) => Math.round(Number(x) + (255 - Number(x)) * t))
    .join(" ");
}
