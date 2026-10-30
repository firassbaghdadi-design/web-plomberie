import { ImageResponse } from "next/og";

export const alt = "Bastien & Trebulle, plombier couvreur à Paris 16e depuis 1880";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ACCENT = "#232f63";

export default function OpengraphImage() {
  const ticks = Array.from({ length: 60 }, (_, i) => {
    const a = (i / 60) * Math.PI * 2;
    const r1 = 230, r2 = i % 5 === 0 ? 205 : 217;
    return <line key={i} x1={250 + Math.sin(a) * r1} y1={250 - Math.cos(a) * r1} x2={250 + Math.sin(a) * r2} y2={250 - Math.cos(a) * r2} stroke={ACCENT} strokeWidth={i % 5 === 0 ? 2.4 : 1.2} />;
  });
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#ffffff", padding: 70, color: "#13171f", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 600 }}>
          <div style={{ fontSize: 22, letterSpacing: 6, color: "#6f7683" }}>BASTIEN &amp; TREBULLE</div>
          <div style={{ fontSize: 84, fontWeight: 400, letterSpacing: -3, lineHeight: 1.02, marginTop: 28 }}>Plombier couvreur</div>
          <div style={{ fontSize: 84, fontWeight: 400, letterSpacing: -3, lineHeight: 1.1, color: ACCENT }}>à Paris 16e</div>
          <div style={{ fontSize: 26, color: "#4a505c", marginTop: 34 }}>Depuis 1880 · 4,6/5 sur Google, 205 avis</div>
        </div>
        <div style={{ display: "flex", position: "relative", width: 500, height: 500 }}>
          <svg width="500" height="500" viewBox="0 0 500 500">
            <circle cx="250" cy="250" r="244" fill="none" stroke={ACCENT} strokeWidth="2" />
            {ticks}
            <rect x="120" y="215" width="260" height="76" fill="#d9c18a" stroke="#6e5521" strokeWidth="2" />
            <line x1="185" y1="215" x2="185" y2="291" stroke="#6e5521" />
            <line x1="250" y1="215" x2="250" y2="291" stroke="#6e5521" />
            <line x1="315" y1="215" x2="315" y2="291" stroke="#6e5521" />
          </svg>
          <div style={{ position: "absolute", left: 120, top: 215, width: 260, height: 76, display: "flex", fontSize: 58, color: "#2a2010" }}>
            {["1", "8", "8", "0"].map((d, i) => (
              <div key={i} style={{ width: 65, display: "flex", alignItems: "center", justifyContent: "center" }}>{d}</div>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
