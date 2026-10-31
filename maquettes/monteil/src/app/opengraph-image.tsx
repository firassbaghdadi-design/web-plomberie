import { ImageResponse } from "next/og";
import { ACCENT } from "@/lib/photos";

export const alt = "Monteil & Cie, plombier chauffagiste à Paris 11e depuis 1964";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#ffffff", padding: 72, color: "#0f1a24" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontSize: 44, letterSpacing: -1 }}>Monteil &amp; Cie</div>
          <div style={{ fontSize: 18, letterSpacing: 5, color: "#6f7b87" }}>PLOMBERIE · CHAUFFAGE · COUVERTURE</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontWeight: 300, letterSpacing: -3, lineHeight: 1 }}>Plombier chauffagiste</div>
          <div style={{ fontSize: 88, fontWeight: 300, letterSpacing: -3, lineHeight: 1.1, color: ACCENT }}>à Paris 11e</div>
          <div style={{ display: "flex", alignItems: "center", marginTop: 30, width: 520, height: 22, border: "2px solid #c9d1d8", borderRadius: 22, position: "relative" }}>
            <div style={{ position: "absolute", left: 244, width: 26, height: 16, border: "2px solid " + ACCENT, borderRadius: 14, background: "#e9f1f6" }} />
            <div style={{ position: "absolute", left: 200, top: 3, width: 2, height: 12, background: ACCENT }} />
            <div style={{ position: "absolute", left: 318, top: 3, width: 2, height: 12, background: ACCENT }} />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "#46525e" }}>
          <div style={{ display: "flex" }}>35, rue Saint-Ambroise · depuis 1964</div>
          <div style={{ display: "flex" }}>01 47 00 58 33</div>
        </div>
      </div>
    ),
    size,
  );
}
