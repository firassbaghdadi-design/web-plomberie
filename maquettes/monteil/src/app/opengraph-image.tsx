import { ImageResponse } from "next/og";
import { ACCENT } from "@/lib/photos";

export const alt = "Monteil & Cie, plombier chauffagiste à Paris 11e depuis 1964";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "linear-gradient(160deg, #1c252d 0%, #0b0e11 70%)", padding: 72, color: "#f1eee8" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontSize: 40, letterSpacing: -1 }}>Monteil &amp; Cie</div>
          <div style={{ fontSize: 17, letterSpacing: 5, color: "#8d9092" }}>PLOMBERIE · CHAUFFAGE · COUVERTURE</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 300, letterSpacing: -4, lineHeight: 1 }}>Plombier chauffagiste</div>
          <div style={{ fontSize: 96, fontWeight: 300, letterSpacing: -3, lineHeight: 1.1, fontStyle: "italic" }}>à Paris 11e</div>
          <div style={{ display: "flex", alignItems: "center", marginTop: 34, width: 180, height: 14, border: "1px solid rgba(241,238,232,.35)", borderRadius: 14, position: "relative" }}>
            <div style={{ position: "absolute", left: 76, top: 3, width: 26, height: 6, borderRadius: 6, background: ACCENT }} />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#bdbcb7" }}>
          <div style={{ display: "flex" }}>35, rue Saint-Ambroise · depuis 1964</div>
          <div style={{ display: "flex" }}>01 47 00 58 33</div>
        </div>
      </div>
    ),
    size,
  );
}
