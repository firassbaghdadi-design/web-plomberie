import { ImageResponse } from "next/og";

export const alt = "SERAGAZ, chauffagiste à Paris 9 depuis 1985";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#061a33", padding: 72, color: "#fff" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 22, height: 22, borderRadius: 11, background: "#88bb3d" }} />
          <div style={{ fontSize: 30, letterSpacing: 8, color: "#88bb3d" }}>DEPUIS 1985 · PARIS 9e</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 110, fontWeight: 800, letterSpacing: 6 }}>SERAGAZ</div>
          <div style={{ fontSize: 46, color: "rgba(255,255,255,.75)", marginTop: 8 }}>Chaudières gaz : installation, entretien, dépannage</div>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "rgba(255,255,255,.6)" }}>69 rue de Dunkerque, Paris · 01 42 80 03 01 · Partenaire GRDF · RGE Qualibat</div>
      </div>
    ),
    size,
  );
}
