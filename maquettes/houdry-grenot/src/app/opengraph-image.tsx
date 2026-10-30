import { ImageResponse } from "next/og";

export const alt = "Houdry-Grenot, plomberie à Paris 17e depuis 1996";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const pt = (r: number, deg: number) => {
  const a = (deg * Math.PI) / 180;
  return { x: 200 + r * Math.sin(a), y: 200 - r * Math.cos(a) };
};

export default function OpengraphImage() {
  const ticks = Array.from({ length: 28 }, (_, i) => -135 + i * 10);
  const tip = pt(150, 55);
  const s = pt(180, -135);
  const e = pt(180, 135);
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#ffffff", padding: 72, color: "#15171a", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
          <div style={{ fontSize: 24, letterSpacing: 8, color: "#6e737a" }}>PARIS 17E · DEPUIS 1996</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 92, fontWeight: 300, letterSpacing: 6 }}>HOUDRY-GRENOT</div>
            <div style={{ fontSize: 44, marginTop: 12, color: "#0f5c6e" }}>Plomberie à Paris 17e</div>
          </div>
          <div style={{ fontSize: 26, color: "#8a8e94" }}>Dépannage · Sanitaire · Salle de bains · 01 53 06 97 97</div>
        </div>
        <svg width="420" height="420" viewBox="0 0 400 400">
          <path d={`M${s.x} ${s.y} A180 180 0 1 1 ${e.x} ${e.y}`} fill="none" stroke="#e6e6e3" strokeWidth="3" />
          {ticks.map((a) => {
            const p = pt(170, a);
            const q = pt(150, a);
            return <line key={a} x1={p.x} y1={p.y} x2={q.x} y2={q.y} stroke="#9a9ea4" strokeWidth="2" />;
          })}
          <line x1="200" y1="226" x2={tip.x} y2={tip.y} stroke="#0f5c6e" strokeWidth="5" strokeLinecap="round" />
          <circle cx="200" cy="200" r="14" fill="#fff" stroke="#0f5c6e" strokeWidth="4" />
        </svg>
      </div>
    ),
    size,
  );
}
