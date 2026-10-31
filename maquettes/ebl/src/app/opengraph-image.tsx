import { ImageResponse } from "next/og";

export const alt = "EBL, Entreprise Bernard Lemaître, plombier à Paris 14e depuis 1978";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#ffffff", padding: 72, color: "#15171a" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 1, height: 44, background: "#1f6f8b" }} />
          <div style={{ fontSize: 24, letterSpacing: 8, color: "#6e737a" }}>DEPUIS 1978 · 5 RUE D&apos;ALÉSIA</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 150, fontWeight: 300, letterSpacing: 30 }}>EBL</div>
          <div style={{ fontSize: 46, marginTop: 8 }}>Plombier à Paris 14e, de la cave aux toits</div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#8a8e94", borderTop: "1px solid #e6e6e3", paddingTop: 24 }}>Plomberie · Gaz · Chauffage · 01 43 31 26 77</div>
      </div>
    ),
    size,
  );
}
