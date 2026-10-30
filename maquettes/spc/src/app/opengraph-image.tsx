import { ImageResponse } from "next/og";
import { ACCENT } from "@/lib/photos";

export const alt = "SPC, Société Plomberie Couverture : plombier couvreur à Paris 12e depuis 1965";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Image de partage : la ligne des toits en un trait, qui devient la descente, et le titre en graisse fine. */
export default function OpengraphImage() {
  const roof = "M1200,250 V250 L1186,214 H1120 V190 H1108 V214 H1050 L1036,250 H1010 V236 L996,200 H920 V176 H908 V200 H860 L846,236 H820 V258 L806,226 H730 L716,258 H690 V242 L676,204 H600 V182 H588 V204 H530 L516,242 H72 Q60,242 60,256 V630";
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: "#ffffff", color: "#17191c" }}>
        <svg width="1200" height="630" viewBox="0 0 1200 630" style={{ position: "absolute", left: 0, top: 0 }}>
          <path d={roof} fill="none" stroke="#17191c" strokeWidth="2" />
          <path d="M60,256 V630" fill="none" stroke={ACCENT} strokeWidth="5" />
        </svg>
        <div style={{ position: "absolute", left: 110, top: 300, display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 22, letterSpacing: 6, color: "#737a82" }}>SPC · SOCIÉTÉ PLOMBERIE COUVERTURE</div>
          <div style={{ fontSize: 84, fontWeight: 300, letterSpacing: -3, lineHeight: 1.05, marginTop: 18 }}>Plombier couvreur</div>
          <div style={{ fontSize: 84, fontWeight: 300, letterSpacing: -3, lineHeight: 1.05, color: ACCENT }}>à Paris 12e</div>
          <div style={{ fontSize: 26, color: "#4c5259", marginTop: 26 }}>Depuis 1965 · 01 43 43 35 46</div>
        </div>
      </div>
    ),
    size,
  );
}
