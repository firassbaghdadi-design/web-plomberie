import { ImageResponse } from "next/og";
import { business } from "@/lib/site";

export const alt = `${business.name} : chauffagiste à ${business.address.city} 18e depuis 1965`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#F6F0E3", color: "#1B2229", padding: 70, borderTop: "22px solid #E4342B" }}>
        <div style={{ fontSize: 34, letterSpacing: 4, textTransform: "uppercase", color: "#9E1B14" }}>Paris 18e · rue Sainte-Isaure · depuis 1965</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 112, fontWeight: 700, lineHeight: 1.02 }}>Gaz Flash</div>
          <div style={{ fontSize: 54, color: "#2C353D" }}>Chauffagiste du quartier</div>
        </div>
        <div style={{ display: "flex", fontSize: 36, color: "#2C353D" }}>{`Entretien · Dépannage · Installation · Ramonage — ${business.phoneDisplay}`}</div>
      </div>
    ),
    size,
  );
}
