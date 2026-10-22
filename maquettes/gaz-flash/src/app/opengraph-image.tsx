import { ImageResponse } from "next/og";
import { YEARS, business } from "@/lib/site";

export const alt = `${business.name} : chauffagiste à ${business.address.city} depuis 1965`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "linear-gradient(160deg,#2C353D,#1B2229)", color: "#FFFFFF", padding: 72, borderLeft: "18px solid #E4342B" }}>
        <div style={{ fontSize: 30, letterSpacing: 6, textTransform: "uppercase", color: "#FF8A3D" }}>{`Depuis 1965 · ${YEARS} ans · Paris 18e`}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 100, fontWeight: 800, lineHeight: 1.02, textTransform: "uppercase" }}>Chauffagiste à Paris</div>
          <div style={{ fontSize: 46, color: "#E4342B", fontWeight: 700 }}>{business.name}</div>
        </div>
        <div style={{ display: "flex", fontSize: 34 }}>{`Entretien · Dépannage · Installation · Ramonage — ${business.phoneDisplay}`}</div>
      </div>
    ),
    size,
  );
}
