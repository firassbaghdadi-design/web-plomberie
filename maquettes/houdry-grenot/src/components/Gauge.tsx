"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { gradAngle } from "@/lib/dial";

const START = -135;
const END = 135;
const R_TRACK = 50;
const pt = (r: number, deg: number) => {
  const a = (deg * Math.PI) / 180;
  return { x: 60 + r * Math.sin(a), y: 60 - r * Math.cos(a) };
};
const arc = (r: number) => {
  const s = pt(r, START);
  const e = pt(r, END);
  return `M${s.x.toFixed(2)} ${s.y.toFixed(2)} A${r} ${r} 0 1 1 ${e.x.toFixed(2)} ${e.y.toFixed(2)}`;
};
const ARC_LEN = (2 * Math.PI * R_TRACK * (END - START)) / 360;

const MINOR = Array.from({ length: 28 }, (_, i) => START + i * 10);

/**
 * Le manomètre : signature de la maquette Houdry-Grenot. Un cadran fin, fixé dans l'angle de l'écran, sert d'indicateur
 * de défilement. Les numéros des sections de la page (01, 02, 03…) sont ses graduations ; l'aiguille monte en pression
 * section après section et le trait de pression se remplit derrière elle. Purement décoratif : aria-hidden.
 */
export function Gauge() {
  const pathname = usePathname();
  const [n, setN] = useState(0);
  const [active, setActive] = useState(0);
  const needle = useRef<SVGGElement>(null);
  const prog = useRef<SVGPathElement>(null);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let tops: number[] = [];
    let raf = 0;
    let lastActive = -1;
    const track = needle.current;
    const bar = prog.current;
    const box = root.current;

    const measure = () => {
      const els = Array.from(document.querySelectorAll<HTMLElement>("[data-n]"));
      tops = els.map((el) => el.getBoundingClientRect().top + window.scrollY).sort((a, b) => a - b);
      setN(tops.length >= 2 ? tops.length : 0);
      update();
    };

    const update = () => {
      raf = 0;
      if (!track || !bar || !box) return;
      const count = tops.length;
      box.classList.toggle("is-on", count >= 2 && window.scrollY > 140);
      if (count < 2) return;
      const y = window.scrollY + window.innerHeight * 0.42;
      let i = 0;
      while (i < count && tops[i] <= y) i++;
      let angle: number;
      if (i === 0) {
        const t = Math.max(0, Math.min(1, y / tops[0]));
        angle = START + (gradAngle(0, count) - START) * t;
      } else if (i < count) {
        const t = (y - tops[i - 1]) / (tops[i] - tops[i - 1]);
        angle = gradAngle(i - 1, count) + (gradAngle(i, count) - gradAngle(i - 1, count)) * t;
      } else {
        const total = document.documentElement.scrollHeight - tops[count - 1];
        const t = Math.max(0, Math.min(1, (y - tops[count - 1]) / Math.max(1, total)));
        angle = gradAngle(count - 1, count) + (END - 6 - gradAngle(count - 1, count)) * t;
      }
      track.style.transform = `rotate(${angle.toFixed(1)}deg)`;
      bar.style.strokeDasharray = `${((ARC_LEN * (angle - START)) / (END - START)).toFixed(1)} 400`;
      if (i !== lastActive) {
        lastActive = i;
        setActive(i);
      }
    };

    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    const settle = [setTimeout(measure, 150), setTimeout(measure, 900), setTimeout(measure, 2500)];
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    window.addEventListener("load", measure);
    if (still && track) track.style.transition = "none";
    return () => {
      settle.forEach(clearTimeout);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      window.removeEventListener("load", measure);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pathname]);

  const num = (k: number) => String(k + 1).padStart(2, "0");
  return (
    <div ref={root} className="gauge" aria-hidden="true">
      <svg viewBox="0 0 120 120">
        <path className="g-track" d={arc(R_TRACK)} />
        <path ref={prog} className="g-prog" d={arc(R_TRACK)} style={{ strokeDasharray: "0 400" }} />
        {MINOR.map((a) => {
          const p = pt(46, a);
          const q = pt(42.5, a);
          return <line key={a} className="g-tick" x1={p.x} y1={p.y} x2={q.x} y2={q.y} />;
        })}
        {Array.from({ length: n }, (_, k) => {
          const a = gradAngle(k, n);
          const p = pt(47, a);
          const q = pt(40.5, a);
          const t = pt(34, a);
          const on = active > k;
          return (
            <g key={k}>
              <line className={`g-major${on ? " is-on" : ""}`} x1={p.x} y1={p.y} x2={q.x} y2={q.y} />
              <text className={`g-num${on ? " is-on" : ""}`} x={t.x} y={t.y}>{num(k)}</text>
            </g>
          );
        })}
        <text className="g-read" x="60" y="82">{active > 0 ? num(Math.min(active, n) - 1) : "00"}</text>
        <text className="g-read-sub" x="60" y="92">{n ? `SUR ${String(n).padStart(2, "0")}` : ""}</text>
        <g ref={needle} className="g-needle" style={{ transform: `rotate(${START}deg)` }}>
          <line x1="60" y1="68" x2="60" y2="14" stroke="rgb(var(--accent))" strokeWidth="1.1" strokeLinecap="round" />
          <circle cx="60" cy="60" r="3.4" fill="#fff" stroke="rgb(var(--accent))" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
}
