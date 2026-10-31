import { ImageResponse } from "next/og";
import { ACCENT } from "@/lib/photos";

export const alt = "SPC, Société Plomberie Couverture : plombier couvreur à Paris 12e depuis 1965";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const shade = (hex: string, k: number) => {
  const n = parseInt(hex.replace("#", ""), 16);
  return `rgb(${Math.round(((n >> 16) & 255) * k)}, ${Math.round(((n >> 8) & 255) * k)}, ${Math.round((n & 255) * k)})`;
};

/** Image de partage : l'aplat bleu profond, le toit à la Mansart découpé, le titre en blanc. */
export default function OpengraphImage() {
  const mansard = "M760,630 V250 L812,170 H860 V140 H905 V170 H1080 V115 H1130 V170 H1150 L1200,250 V630 Z";
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: shade(ACCENT, 0.44), color: "#fff" }}>
        <svg width="1200" height="630" viewBox="0 0 1200 630" style={{ position: "absolute", left: 0, top: 0 }}>
          <path d={mansard} fill={ACCENT} />
          <path d="M760,250 V630" stroke="#fff" strokeWidth="5" />
        </svg>
        <div style={{ position: "absolute", left: 72, top: 92, display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 22, letterSpacing: 4, color: "rgba(255,255,255,.7)" }}>+24,00 · SPC · SOCIÉTÉ PLOMBERIE COUVERTURE</div>
          <div style={{ fontSize: 104, fontWeight: 700, letterSpacing: -4, lineHeight: 0.95, marginTop: 36 }}>Plombier</div>
          <div style={{ fontSize: 104, fontWeight: 700, letterSpacing: -4, lineHeight: 0.95 }}>couvreur</div>
          <div style={{ fontSize: 104, fontWeight: 700, letterSpacing: -4, lineHeight: 0.95, color: "rgba(255,255,255,.62)" }}>à Paris 12e</div>
          <div style={{ fontSize: 28, marginTop: 40, color: "rgba(255,255,255,.85)" }}>Du faîtage à la cave, depuis 1965 · 01 43 43 35 46</div>
        </div>
      </div>
    ),
    size,
  );
}
