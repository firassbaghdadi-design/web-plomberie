import { ImageResponse } from "next/og";

export const alt = "Entreprise Clairon, plombier, couvreur et chauffagiste à Paris 15e depuis 1943";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#ffffff", padding: 72, color: "#15171a" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 1, height: 44, background: "#6e737a" }} />
          <div style={{ fontSize: 24, letterSpacing: 8, color: "#6e737a" }}>DEPUIS 1943 · 23 RUE D&apos;OUESSANT</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 120, fontWeight: 300, letterSpacing: 30 }}>CLAIRON</div>
          <div style={{ fontSize: 46, marginTop: 8 }}>Plombier, couvreur et chauffagiste à Paris 15e</div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#8a8e94", borderTop: "1px solid #e6e6e3", paddingTop: 24 }}>Plomberie · Couverture · Chauffage · Petite maçonnerie · 01 47 83 88 40</div>
      </div>
    ),
    size,
  );
}
