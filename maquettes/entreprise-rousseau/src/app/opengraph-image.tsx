import { ImageResponse } from "next/og";
import { brand, business } from "@/lib/site";

export const alt = `${business.name} — plombier chauffagiste à ${business.address.city}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: `linear-gradient(160deg,${brand.theme.ogFrom},${brand.theme.ogTo})`, color: "#FFFFFF", padding: 72 }}>
        <div style={{ fontSize: 30, letterSpacing: 6, textTransform: "uppercase", color: brand.theme.ogAccent }}>{`Plus de 80 ans · ${business.address.city}`}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 92, fontWeight: 700, lineHeight: 1.04 }}>{`Plombier à ${business.address.city}`}</div>
          <div style={{ fontSize: 46, color: brand.theme.ogAccent }}>{business.name}</div>
        </div>
        <div style={{ display: "flex", fontSize: 34 }}>{`Plomberie · Chauffage · Salles de bains — ${business.phoneDisplay}`}</div>
      </div>
    ),
    size,
  );
}
