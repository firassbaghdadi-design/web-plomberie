import { ImageResponse } from "next/og";

export const alt = "SMAP, plomberie, rénovation et maintenance à Paris 12e depuis 2007";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const T = "#a85438";
const chips = ["#2d5a4d", "#e7e0d4", "#c9a159", "#b98a58", T];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#e8e4dd", padding: 72, color: "#26221e", position: "relative" }}>
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 6, color: "#857e74", borderBottom: "1px solid #26221e", paddingBottom: 18 }}>BOOK · PLANCHE 01 · PARIS 12E</div>
        <div style={{ position: "absolute", right: 90, top: 150, display: "flex", gap: 14 }}>
          {chips.map((c) => <div key={c} style={{ width: 70, height: 230, background: c, borderRadius: 3, display: "flex" }} />)}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 150, letterSpacing: 4 }}>SMAP</div>
          <div style={{ fontSize: 46, marginTop: 8, color: T }}>Plomberie et rénovation à Paris 12e</div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#857e74", borderTop: "1px solid #cdc5ba", paddingTop: 24 }}>Maintenance · Aménagement · Plomberie · depuis 2007 · 01 42 49 20 14</div>
      </div>
    ),
    size,
  );
}
