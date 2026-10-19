import { ImageResponse } from "next/og";
import { business } from "@/lib/site";

export const alt = `${business.name} — plombier à Paris 14e`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#12263A",
          color: "#FAF6F0",
          padding: 72,
        }}
      >
        <div style={{ fontSize: 30, letterSpacing: 6, textTransform: "uppercase", color: "#E9C7B3" }}>
          {`Depuis ${business.foundingYear} · Paris 14e`}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 1.05 }}>Plombier à Paris 14e</div>
          <div style={{ fontSize: 44, color: "#E9C7B3" }}>{business.name}</div>
        </div>
        <div style={{ fontSize: 34 }}>{`Plomberie · Chauffage · Salles de bains — ${business.phoneDisplay}`}</div>
      </div>
    ),
    size,
  );
}
