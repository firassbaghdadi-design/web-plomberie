import { ImageResponse } from "next/og";
import { agency } from "@/lib/site";

export const alt = `${agency.name} — ${agency.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#F6F1E7", color: "#1F2A30", padding: 72 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ display: "flex", width: 72, height: 72, borderRadius: 18, background: "#C8553D" }} />
          <div style={{ display: "flex", fontSize: 34, letterSpacing: 8, textTransform: "uppercase", color: "#5C6B73" }}>Atelier Truelle</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 88, fontWeight: 800, lineHeight: 1.04 }}>Votre site web, à la hauteur de votre travail.</div>
          <div style={{ fontSize: 40, color: "#B24630" }}>Sites web pour plombiers et artisans du bâtiment</div>
        </div>
        <div style={{ display: "flex", fontSize: 32, color: "#4A585F" }}>Maquette gratuite, privée et sans engagement</div>
      </div>
    ),
    size,
  );
}
