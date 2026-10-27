import { ImageResponse } from "next/og";

export const alt = "Martinet Thibault Entreprise, plombier et couvreur à Paris 10e depuis 1880";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const steps = [0, 1, 2, 3, 4];
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#ffffff", padding: 72, color: "#0d1b2e" }}>
        <div style={{ display: "flex", fontSize: 24, letterSpacing: 7, color: "#0057b8" }}>DEPUIS 1880 · 34, PASSAGE DU DÉSIR</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 300, letterSpacing: -3, lineHeight: 1 }}>Plombier et couvreur</div>
          <div style={{ fontSize: 96, fontWeight: 300, letterSpacing: -3, lineHeight: 1.1, color: "#0071e5" }}>à Paris 10e</div>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 0 }}>
          {steps.map((i) => (
            <div key={i} style={{ display: "flex", width: 180, height: 40 + i * 12, borderLeft: "2px solid #c7d0dc", borderBottom: "2px solid #c7d0dc", position: "relative" }}>
              <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: "78%", background: "#dbeafb", borderTop: "3px solid #0071e5" }} />
            </div>
          ))}
          <div style={{ display: "flex", marginLeft: 40, fontSize: 30, color: "#4a5568" }}>01 48 24 80 57</div>
        </div>
      </div>
    ),
    size,
  );
}
