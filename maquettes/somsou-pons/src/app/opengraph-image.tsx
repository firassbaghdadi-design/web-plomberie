import { ImageResponse } from "next/og";

export const alt = "Somsou-Pons, entreprise du bâtiment à Paris";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#fbf7f0", padding: 72 }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 86, fontWeight: 800, color: "#ff4100", letterSpacing: 6 }}>SOMSOU-PONS</div>
          <div style={{ fontSize: 30, color: "#085627", letterSpacing: 12, marginTop: 8 }}>PROFESSIONNEL DU BÂTIMENT</div>
        </div>
        <div style={{ display: "flex", fontSize: 54, color: "#17201b", lineHeight: 1.15, maxWidth: 980 }}>Plomberie, chauffage et rénovation à Paris 16e et 17e</div>
        <div style={{ display: "flex", fontSize: 28, color: "#47544c" }}>9 rue Gavarni, Paris 16e · 26 rue Ampère, Paris 17e · La Garenne-Colombes</div>
      </div>
    ),
    size,
  );
}
