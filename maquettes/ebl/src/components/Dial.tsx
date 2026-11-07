"use client";

import { useEffect, useRef } from "react";

/**
 * Objet signature : le thermomanomètre de chaudière des années 70, boîtier en bakélite crème,
 * jonc en laque tabac, cadran papier, chiffres rétro, aiguille qui balaie à l'arrivée puis
 * respire avec le défilement (ressort amorti, comme une vraie aiguille).
 */
const C = 200;
const f = (n: number) => n.toFixed(2);
const ang = (v: number) => -135 + (v / 120) * 270; // 0–120 °C sur 270°
const pt = (a: number, r: number, cx = C, cy = C) => {
  const t = (a * Math.PI) / 180;
  return [cx + r * Math.sin(t), cy - r * Math.cos(t)];
};
const arc = (a0: number, a1: number, r: number, cx = C, cy = C) => {
  const [x0, y0] = pt(a0, r, cx, cy);
  const [x1, y1] = pt(a1, r, cx, cy);
  return `M${f(x0)} ${f(y0)} A${r} ${r} 0 ${a1 - a0 > 180 ? 1 : 0} 1 ${f(x1)} ${f(y1)}`;
};

const BASE = 68; // °C au repos
const SUB = { cx: C, cy: 288, r: 30 };
const subAng = (bar: number) => -110 + (bar / 4) * 220; // 0–4 bar sur 220°

const ticks = Array.from({ length: 61 }, (_, i) => i * 2);
const numbers = [0, 20, 40, 60, 80, 100, 120];
const bands: [number, number, string][] = [
  [0, 40, "#4a5432"],
  [40, 82, "#c99a2e"],
  [82, 120, "#8a4d26"],
];

export function Dial({ className = "" }: { className?: string }) {
  const needle = useRef<SVGGElement>(null);
  const sub = useRef<SVGGElement>(null);
  const root = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !needle.current) return;
    let a = ang(0), va = 0; // angle et vitesse de l'aiguille principale
    let b = subAng(0), vb = 0;
    let raf = 0, last = performance.now(), visible = true;
    const t0 = last;
    const set = () => {
      needle.current?.setAttribute("transform", `rotate(${f(a)} ${C} ${C})`);
      sub.current?.setAttribute("transform", `rotate(${f(b)} ${SUB.cx} ${SUB.cy})`);
    };
    set();
    const tick = (now: number) => {
      const dt = Math.min(0.033, (now - last) / 1000);
      last = now;
      const t = (now - t0) / 1000;
      const started = t > 0.55; // l'aiguille part après l'apparition de l'objet
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      const target = started ? ang(BASE + p * 34 + Math.sin(t * 0.8) * 0.7 + Math.sin(t * 2.9) * 0.25) : ang(0);
      const targetB = started ? subAng(1.5 + p * 0.9 + Math.sin(t * 1.3) * 0.03) : subAng(0);
      va += ((target - a) * 34 - va * 6.2) * dt;
      a += va * dt;
      vb += ((targetB - b) * 46 - vb * 7.5) * dt;
      b += vb * dt;
      set();
      raf = visible ? requestAnimationFrame(tick) : 0;
    };
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible && !raf) { last = performance.now(); raf = requestAnimationFrame(tick); }
    });
    if (root.current) io.observe(root.current);
    raf = requestAnimationFrame(tick);
    return () => { io.disconnect(); if (raf) cancelAnimationFrame(raf); };
  }, []);

  return (
    <svg ref={root} viewBox="0 0 400 400" className={`dial ${className}`} role="img" aria-label="Thermomètre de chaudière des années 70, en bakélite crème, marqué EBL depuis 1978">
      <defs>
        <radialGradient id="dl-bake" cx="36%" cy="28%" r="78%">
          <stop offset="0" stopColor="#fcf7ea" />
          <stop offset=".42" stopColor="#efe4c8" />
          <stop offset=".82" stopColor="#d7c59e" />
          <stop offset="1" stopColor="#b7a077" />
        </radialGradient>
        <linearGradient id="dl-bevel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fffbf1" />
          <stop offset=".5" stopColor="#e4d6b4" />
          <stop offset="1" stopColor="#a68e64" />
        </linearGradient>
        <linearGradient id="dl-groove" x1="1" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#fffaf0" />
          <stop offset="1" stopColor="#9c845c" />
        </linearGradient>
        <linearGradient id="dl-lacquer" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#a8714a" />
          <stop offset=".35" stopColor="#6e4226" />
          <stop offset="1" stopColor="#3b2213" />
        </linearGradient>
        <radialGradient id="dl-face" cx="46%" cy="40%" r="62%">
          <stop offset="0" stopColor="#faf3e2" />
          <stop offset=".75" stopColor="#f1e5c8" />
          <stop offset="1" stopColor="#e2d1ab" />
        </radialGradient>
        <linearGradient id="dl-needle" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#3a2111" />
          <stop offset=".5" stopColor="#6b3f20" />
          <stop offset="1" stopColor="#2a170b" />
        </linearGradient>
        <radialGradient id="dl-hub" cx="38%" cy="32%" r="70%">
          <stop offset="0" stopColor="#f6d98a" />
          <stop offset=".45" stopColor="#c99a2e" />
          <stop offset="1" stopColor="#6e4f12" />
        </radialGradient>
        <radialGradient id="dl-screw" cx="35%" cy="30%" r="75%">
          <stop offset="0" stopColor="#f3e9d2" />
          <stop offset=".6" stopColor="#b9a47c" />
          <stop offset="1" stopColor="#7d6a48" />
        </radialGradient>
        <linearGradient id="dl-glass" x1="0" y1="0" x2=".7" y2=".9">
          <stop offset="0" stopColor="#fff" stopOpacity=".62" />
          <stop offset=".38" stopColor="#fff" stopOpacity=".08" />
          <stop offset=".39" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <filter id="dl-soft" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="2.5" dy="5" stdDeviation="2.6" floodColor="#2a1a0a" floodOpacity=".38" />
        </filter>
        <filter id="dl-inner" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
        <filter id="dl-grain">
          <feTurbulence type="fractalNoise" baseFrequency=".95" numOctaves="2" seed="7" />
          <feColorMatrix values="0 0 0 0 .3  0 0 0 0 .2  0 0 0 0 .08  0 0 0 .5 0" />
          <feComposite in2="SourceGraphic" operator="in" />
        </filter>
        <clipPath id="dl-faceclip"><circle cx={C} cy={C} r="166" /></clipPath>
        {/* Arc du bas parcouru de gauche à droite, pour une inscription lisible */}
        <path id="dl-bottom" d={(() => { const [x0, y0] = pt(232, 150); const [x1, y1] = pt(128, 150); return `M${f(x0)} ${f(y0)} A150 150 0 0 0 ${f(x1)} ${f(y1)}`; })()} />
      </defs>

      {/* Boîtier en bakélite */}
      <circle cx={C} cy={C} r="198" fill="url(#dl-bake)" />
      <circle cx={C} cy={C} r="197" fill="none" stroke="#7d6a48" strokeOpacity=".35" strokeWidth="1.5" />
      <circle cx={C} cy={C} r="186" fill="none" stroke="url(#dl-groove)" strokeWidth="2.2" />
      <circle cx={C} cy={C} r="183.5" fill="none" stroke="url(#dl-bevel)" strokeWidth="1.6" />
      {[45, 135, 225, 315].map((a) => {
        const [x, y] = pt(a, 191.5);
        return (
          <g key={a}>
            <circle cx={f(x)} cy={f(y)} r="4.6" fill="url(#dl-screw)" stroke="#6e5a3a" strokeOpacity=".5" strokeWidth=".6" />
            <path d={`M${f(x - 3)} ${f(y + 1.4)} L${f(x + 3)} ${f(y - 1.4)}`} stroke="#5d4a2e" strokeWidth="1" strokeLinecap="round" />
          </g>
        );
      })}

      {/* Jonc en laque tabac */}
      <circle cx={C} cy={C} r="176" fill="url(#dl-lacquer)" />
      <circle cx={C} cy={C} r="175" fill="none" stroke="#c48f63" strokeOpacity=".55" strokeWidth="1" strokeDasharray="160 940" strokeDashoffset="-820" />

      {/* Cadran papier */}
      <circle cx={C} cy={C} r="166" fill="url(#dl-face)" />
      <g clipPath="url(#dl-faceclip)">
        <rect x="30" y="30" width="340" height="340" filter="url(#dl-grain)" opacity=".35" />
        <circle cx={C} cy={C + 3} r="168" fill="none" stroke="#3a2410" strokeOpacity=".38" strokeWidth="9" filter="url(#dl-inner)" />
      </g>

      {/* Plages de couleur */}
      {bands.map(([v0, v1, c]) => (
        <path key={v0} d={arc(ang(v0) + (v0 ? 0.6 : 0), ang(v1) - (v1 < 120 ? 0.6 : 0), 136)} fill="none" stroke={c} strokeWidth="9" strokeLinecap="butt" />
      ))}

      {/* Graduations */}
      {ticks.map((v) => {
        const major = v % 10 === 0;
        const a = ang(v);
        const [x0, y0] = pt(a, major ? 142 : 146);
        const [x1, y1] = pt(a, 157);
        return <line key={v} x1={f(x0)} y1={f(y0)} x2={f(x1)} y2={f(y1)} stroke="#2a2216" strokeWidth={major ? 2.6 : 1} strokeLinecap="round" />;
      })}
      {numbers.map((v) => {
        const [x, y] = pt(ang(v), 113);
        return (
          <text key={v} x={f(x)} y={f(y + 7)} textAnchor="middle" fontFamily="'Young Serif', Georgia, serif" fontSize="21" fill="#2a2216">{v}</text>
        );
      })}

      {/* Inscriptions */}
      <text x={C} y="148" textAnchor="middle" fontFamily="'Young Serif', Georgia, serif" fontSize="27" letterSpacing="5" fill="#2a2216">EBL</text>
      <text x={C} y="166" textAnchor="middle" fontFamily="'Darker Grotesque Variable', sans-serif" fontWeight="700" fontSize="9.5" letterSpacing="3" fill="#74462a">PARIS · XIVe</text>
      <text x={C} y="246" textAnchor="middle" fontFamily="'Young Serif', Georgia, serif" fontSize="15" fill="#74462a">°C</text>
      <text fontFamily="'Darker Grotesque Variable', sans-serif" fontWeight="700" fontSize="10.5" letterSpacing="3.4" fill="#544b3a">
        <textPath href="#dl-bottom" startOffset="50%" textAnchor="middle">THERMOMANOMÈTRE · DEPUIS 1978</textPath>
      </text>

      {/* Petit cadran de pression */}
      <circle cx={SUB.cx} cy={SUB.cy} r={SUB.r + 3} fill="#e8dbbb" stroke="#b9a47c" strokeWidth="1" />
      <circle cx={SUB.cx} cy={SUB.cy + 1} r={SUB.r + 2} fill="none" stroke="#3a2410" strokeOpacity=".2" strokeWidth="3" filter="url(#dl-inner)" />
      <path d={arc(subAng(2.6), subAng(4), SUB.r - 6, SUB.cx, SUB.cy)} fill="none" stroke="#8a4d26" strokeWidth="3" />
      {Array.from({ length: 9 }, (_, i) => i * 0.5).map((bar) => {
        const a = subAng(bar);
        const [x0, y0] = pt(a, bar % 1 === 0 ? SUB.r - 10 : SUB.r - 7, SUB.cx, SUB.cy);
        const [x1, y1] = pt(a, SUB.r - 3, SUB.cx, SUB.cy);
        return <line key={bar} x1={f(x0)} y1={f(y0)} x2={f(x1)} y2={f(y1)} stroke="#2a2216" strokeWidth={bar % 1 === 0 ? 1.4 : 0.7} />;
      })}
      <text x={SUB.cx} y={SUB.cy + 17} textAnchor="middle" fontFamily="'Darker Grotesque Variable', sans-serif" fontWeight="700" fontSize="7.5" letterSpacing="1.5" fill="#544b3a">BAR</text>
      <g ref={sub} transform={`rotate(${f(subAng(1.5))} ${SUB.cx} ${SUB.cy})`} filter="url(#dl-soft)">
        <path d={`M${SUB.cx} ${SUB.cy - 24} L${SUB.cx + 1.6} ${SUB.cy} L${SUB.cx - 1.6} ${SUB.cy} Z`} fill="#74462a" />
        <circle cx={SUB.cx} cy={SUB.cy} r="3.6" fill="url(#dl-hub)" />
      </g>

      {/* Aiguille principale */}
      <g ref={needle} transform={`rotate(${f(ang(BASE))} ${C} ${C})`} filter="url(#dl-soft)">
        <path d={`M${C} 66 L${C + 3.6} 194 Q${C + 4.2} 204 ${C + 7} 214 A10 10 0 1 1 ${C - 7} 214 Q${C - 4.2} 204 ${C - 3.6} 194 Z`} fill="url(#dl-needle)" />
        <path d={`M${C} 70 L${C + 0.7} 190`} stroke="#c99a2e" strokeWidth="1" strokeLinecap="round" opacity=".85" />
        <circle cx={C} cy="221" r="3" fill="#c99a2e" opacity=".9" />
      </g>
      <circle cx={C} cy={C} r="14" fill="url(#dl-hub)" filter="url(#dl-soft)" />
      <circle cx={C} cy={C} r="14" fill="none" stroke="#6e4f12" strokeOpacity=".6" strokeWidth=".8" />
      <circle cx={C} cy={C} r="3.4" fill="#4f2f1b" />
      <ellipse cx={C - 4.5} cy={C - 5.5} rx="4.5" ry="2.6" fill="#fff" opacity=".55" transform={`rotate(-35 ${C - 4.5} ${C - 5.5})`} />

      {/* Verre bombé */}
      <g clipPath="url(#dl-faceclip)" pointerEvents="none">
        <ellipse cx="150" cy="120" rx="170" ry="120" fill="url(#dl-glass)" transform="rotate(-28 150 120)" />
        <path d={arc(-78, -12, 160)} fill="none" stroke="#fff" strokeOpacity=".55" strokeWidth="2.2" strokeLinecap="round" />
        <path d={arc(120, 160, 161)} fill="none" stroke="#fff" strokeOpacity=".22" strokeWidth="1.4" strokeLinecap="round" />
      </g>
    </svg>
  );
}
