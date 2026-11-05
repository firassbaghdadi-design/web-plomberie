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
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#1d130d", color: "#F2E7D5", position: "relative" }}>
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 150, background: "#140d08", borderTop: "2px solid #D9822B", display: "flex" }} />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 0 44px 72px", width: 780 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 22, letterSpacing: 6, color: "#EFA75C" }}>ARTISAN COUVREUR-CHARPENTIER</div>
            <div style={{ fontSize: 84, lineHeight: 1.02, marginTop: 26, letterSpacing: -2 }}>Couvreur à</div>
            <div style={{ fontSize: 84, lineHeight: 1.02, letterSpacing: -2, color: "#EFA75C" }}>La Garenne-Colombes</div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 30, color: "#F4ECDF", paddingRight: 40 }}>
            <div style={{ display: "flex" }}>M. Fabulet Couverture</div>
            <div style={{ display: "flex" }}>01 47 82 82 18</div>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <div style={{ position: "absolute", right: -40, bottom: -60, width: 620, height: 620, borderRadius: 310, background: "radial-gradient(closest-side, rgba(239,167,92,.55), rgba(217,130,43,.2) 55%, rgba(29,19,13,0))", display: "flex" }} />
        <img src={mascot} width={410} height={520} alt="" style={{ position: "absolute", right: 40, bottom: 40 }} />
      </div>
    ),
    size,
  );
}
