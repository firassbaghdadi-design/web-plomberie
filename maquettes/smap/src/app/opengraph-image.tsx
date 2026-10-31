import { ImageResponse } from "next/og";

export const alt = "SMAP, plomberie, rénovation et maintenance à Paris 12e depuis 2007";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const A = "#0e6270";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#ffffff", padding: 72, color: "#15171a", position: "relative" }}>
        <div style={{ position: "absolute", left: 72, right: 72, top: 36, height: 1, background: A, opacity: 0.5, display: "flex" }} />
        <div style={{ position: "absolute", top: 36, bottom: 36, left: 36, width: 1, background: A, opacity: 0.5, display: "flex" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 24, letterSpacing: 8, color: A }}>PLAN · ÉCHELLE 1:50 · PARIS 12E</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 150, fontWeight: 300, letterSpacing: 34 }}>SMAP</div>
          <div style={{ fontSize: 46, marginTop: 8 }}>Plomberie et rénovation à Paris 12e</div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#8a8e94", borderTop: "1px solid #e6e6e3", paddingTop: 24 }}>Maintenance · Aménagement · Plomberie · depuis 2007 · 01 42 49 20 14</div>
      </div>
    ),
    size,
  );
}
