import { ImageResponse } from "next/og";

export const alt = "DBP Plomberie-Chauffage, plombier chauffagiste à Paris 20e depuis 2007";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#ffffff", padding: 72, color: "#13171c" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", fontSize: 40, letterSpacing: -1 }}>DBP</div>
          <div style={{ display: "flex", fontSize: 20, letterSpacing: 5, color: "#6a727b" }}>PLOMBERIE · CHAUFFAGE</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 92, letterSpacing: -4, lineHeight: 1 }}>Plombier chauffagiste</div>
          <div style={{ display: "flex", fontSize: 92, letterSpacing: -4, lineHeight: 1.1, color: "#bc4840" }}>à Paris 20e</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", height: 4, background: "linear-gradient(90deg, #1e6696, #bc4840)", marginBottom: 22 }} />
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "#474f58" }}>
            <div style={{ display: "flex" }}>16° → 21° · villa Gagliardini · depuis 2007</div>
            <div style={{ display: "flex" }}>01 42 45 91 35</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
