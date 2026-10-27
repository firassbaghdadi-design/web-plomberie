import { ImageResponse } from "next/og";

export const alt = "SERAGAZ, chauffagiste à Paris 9 depuis 1985";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#ffffff", padding: 72, color: "#022c68" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 2, height: 40, background: "#00519e" }} />
          <div style={{ fontSize: 26, letterSpacing: 8, color: "#00519e" }}>DEPUIS 1985 · PARIS 9e</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 120, fontWeight: 300, letterSpacing: 10 }}>SERAGAZ</div>
          <div style={{ fontSize: 44, color: "#00519e", marginTop: 8 }}>Chaudières gaz : installation, entretien, dépannage</div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#7d8a99", borderTop: "1px solid #e4e9ef", paddingTop: 24 }}>69 rue de Dunkerque, Paris · 01 42 80 03 01 · Partenaire GRDF · RGE Qualibat</div>
      </div>
    ),
    size,
  );
}
