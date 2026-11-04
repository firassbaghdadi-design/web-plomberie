import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "M. Fabulet Couverture, couvreur charpentier à La Garenne-Colombes";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const mascot = `data:image/png;base64,${readFileSync(join(process.cwd(), "public/brand/mascotte.png")).toString("base64")}`;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#F4ECDF", color: "#2A1D13", position: "relative" }}>
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 150, background: "#2B1B10", display: "flex" }} />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 0 44px 72px", width: 780 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 22, letterSpacing: 6, color: "#9A4A1F" }}>ARTISAN COUVREUR-CHARPENTIER</div>
            <div style={{ fontSize: 84, lineHeight: 1.02, marginTop: 26, letterSpacing: -2 }}>Couvreur à</div>
            <div style={{ fontSize: 84, lineHeight: 1.02, letterSpacing: -2, color: "#9A4A1F" }}>La Garenne-Colombes</div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 30, color: "#F4ECDF", paddingRight: 40 }}>
            <div style={{ display: "flex" }}>M. Fabulet Couverture</div>
            <div style={{ display: "flex" }}>01 47 82 82 18</div>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={mascot} width={410} height={520} alt="" style={{ position: "absolute", right: 40, bottom: 40 }} />
      </div>
    ),
    size,
  );
}
