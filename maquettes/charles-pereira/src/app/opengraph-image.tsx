import { ImageResponse } from "next/og";

export const alt = "Entreprise Charles Pereira, plombier à Paris 15e depuis 2008";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const line = { stroke: "#1d4e89", strokeWidth: 2, fill: "none" } as const;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#ffffff", padding: 72, color: "#101a24" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderBottom: "1px solid #101a24", paddingBottom: 18 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 18, letterSpacing: 8, color: "#717d89" }}>ENTREPRISE</div>
            <div style={{ fontSize: 40, marginTop: 6 }}>Charles Pereira</div>
          </div>
          <div style={{ fontSize: 18, letterSpacing: 4, color: "#717d89" }}>PLOMBERIE · CHAUFFAGE</div>
        </div>
        <div style={{ display: "flex", position: "relative", flexDirection: "column" }}>
          <svg width="1056" height="120" viewBox="0 0 1056 120" style={{ position: "absolute", right: 0, top: -140 }}>
            <path d="M1056 10 L800 158 L650 70 L430 197" {...line} />
            <path d="M1056 22 L800 170 L650 82 L430 209" {...line} />
          </svg>
          <div style={{ fontSize: 100, fontWeight: 300, letterSpacing: -3, lineHeight: 1 }}>Plombier</div>
          <div style={{ fontSize: 100, fontWeight: 300, letterSpacing: -3, lineHeight: 1.1, color: "#1d4e89" }}>à Paris 15e</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "#4a5764" }}>
          <div style={{ display: "flex" }}>26, boulevard Garibaldi · depuis 2008</div>
          <div style={{ display: "flex" }}>01 42 51 42 42</div>
        </div>
      </div>
    ),
    size,
  );
}
