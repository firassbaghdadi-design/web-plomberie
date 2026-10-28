import { ImageResponse } from "next/og";

export const alt = "Anciens Établissements Kuschnick, plombier couvreur à Paris 11e depuis 1957";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#ffffff", padding: 72, color: "#1b1916" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderBottom: "2px solid #1b1916", paddingBottom: 18 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 18, letterSpacing: 8, color: "#7c766e" }}>ANCIENS ÉTABLISSEMENTS</div>
            <div style={{ fontSize: 40, letterSpacing: 6, marginTop: 6 }}>KUSCHNICK</div>
          </div>
          <div style={{ fontSize: 18, letterSpacing: 4, color: "#7c766e" }}>COUVERTURE · PLOMBERIE · FUMISTERIE · CHAUFFAGE</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, fontWeight: 300, letterSpacing: -3, lineHeight: 1 }}>Plombier couvreur</div>
          <div style={{ fontSize: 92, fontWeight: 300, letterSpacing: -3, lineHeight: 1.1, color: "#9c4a22" }}>à Paris 11e</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "#55504a" }}>
          <div style={{ display: "flex" }}>54, rue Trousseau · depuis 1957</div>
          <div style={{ display: "flex" }}>01 43 43 12 33</div>
        </div>
      </div>
    ),
    size,
  );
}
