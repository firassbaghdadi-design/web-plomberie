import { ImageResponse } from "next/og";

export const alt = "S. Petit, plombier à Paris 14e depuis 2007";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#f5efe4", padding: 72, color: "#22372e" }}>
        <div style={{ display: "flex", alignItems: "center", borderBottom: "1px solid #ddd2bf", paddingBottom: 22 }}>
          <svg width="30" height="42" viewBox="0 0 15 21"><path d="M7.5 1C7.5 1 1.2 9 1.2 13.6a6.3 6.3 0 0 0 12.6 0C13.8 9 7.5 1 7.5 1Z" fill="#9a5b2e" /></svg>
          <div style={{ fontSize: 38, marginLeft: 18, letterSpacing: -1 }}>S. Petit</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 110, fontWeight: 300, letterSpacing: -4, lineHeight: 1 }}>Plombier</div>
          <div style={{ fontSize: 110, fontWeight: 300, letterSpacing: -4, lineHeight: 1.1, color: "#9a5b2e" }}>à Paris 14e</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "#4a5650" }}>
          <div style={{ display: "flex" }}>36, avenue Jean Moulin · depuis 2007</div>
          <div style={{ display: "flex" }}>01 45 42 42 84</div>
        </div>
      </div>
    ),
    size,
  );
}
