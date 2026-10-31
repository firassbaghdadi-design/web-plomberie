import { ImageResponse } from "next/og";

export const alt = "DBP Plomberie-Chauffage, plombier chauffagiste à Paris 20e depuis 2007";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#ffffff", padding: "48px 64px", color: "#0b0b0b" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, borderBottom: "2px solid #0b0b0b", paddingBottom: 14 }}>
          <div style={{ display: "flex", fontWeight: 700 }}>DBP Plomberie-Chauffage</div>
          <div style={{ display: "flex" }}>Paris 20e · depuis 2007 · 01 42 45 91 35</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 84, fontWeight: 700, letterSpacing: -5, lineHeight: 0.95 }}>
          <div style={{ display: "flex" }}>Plombier chauffagiste</div>
          <div style={{ display: "flex" }}>à Paris 20e</div>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", borderBottom: "6px solid #0b0b0b", fontWeight: 700, letterSpacing: -6, lineHeight: 0.8 }}>
          {[16, 17, 18, 19, 20, 21].map((t, i) => (
            <div key={t} style={{ display: "flex", fontSize: [40, 52, 68, 88, 114, 150][i], color: i === 5 ? "#ff4a00" : "#0b0b0b" }}>{i === 5 ? "21°" : String(t)}</div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
