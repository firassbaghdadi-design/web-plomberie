"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * Le fil conducteur de Gaz Flash : un tuyau en trait fin qui part du héros, descend la page
 * et se dessine au défilement. Chaque coude porte le numéro d'une section ; le tracé passe du gris
 * au rouge Gaz Flash, et une petite flamme bleue s'allume au niveau du chauffage.
 * Grand écran : le tuyau court dans la marge et fait un coude à chaque section.
 * Petit écran : tracé simplifié, une ligne droite au bord gauche.
 */
type Joint = { x: number; y: number; n: number; flame: boolean; numX: number };
type Geo = { d: string; w: number; h: number; y0: number; y1: number; joints: Joint[]; wide: boolean };

const R = 10; // rayon des coudes
const SHIFT = 26; // décalage entre les deux voies du tuyau

function build(host: HTMLElement): Geo | null {
  const nodes = Array.from(host.querySelectorAll<HTMLElement>("[data-pipe]"));
  const wrap = host.querySelector<HTMLElement>(".wrap");
  if (!nodes.length || !wrap) return null;
  const box = host.getBoundingClientRect();
  const wr = wrap.getBoundingClientRect();
  const contentLeft = wr.left - box.left + parseFloat(getComputedStyle(wrap).paddingLeft);
  const wide = contentLeft >= 150;
  const lane = wide ? contentLeft - 64 : Math.max(10, contentLeft - 16);
  const start = host.querySelector<HTMLElement>("[data-pipe-start]");
  const y0 = start ? start.getBoundingClientRect().bottom - box.top : Math.max(0, nodes[0].getBoundingClientRect().top - box.top - 120);
  const y1 = box.height - 1;

  let x = lane;
  let d = `M${x} ${y0}`;
  const joints: Joint[] = [];
  nodes.forEach((node, i) => {
    const r = node.getBoundingClientRect();
    const y = r.top - box.top + r.height / 2;
    if (y <= y0 + R * 2) return;
    if (!wide) {
      d += ` L${x} ${y}`;
      joints.push({ x, y, n: i + 1, flame: node.hasAttribute("data-pipe-flame"), numX: x });
      return;
    }
    const nx = i % 2 === 0 ? lane - SHIFT : lane;
    const dir = nx > x ? 1 : -1;
    d += ` L${x} ${y - R} Q${x} ${y} ${x + dir * R} ${y} L${nx - dir * R} ${y} Q${nx} ${y} ${nx} ${y + R}`;
    joints.push({ x: (x + nx) / 2, y, n: i + 1, flame: node.hasAttribute("data-pipe-flame"), numX: Math.min(x, nx) - 16 });
    x = nx;
  });
  d += ` L${x} ${y1}`;
  return { d, w: box.width, h: box.height, y0, y1, joints, wide };
}

export function Pipe() {
  const pathname = usePathname();
  const svgRef = useRef<SVGSVGElement>(null);
  const flowRef = useRef<SVGPathElement>(null);
  const [geo, setGeo] = useState<Geo | null>(null);

  // Calcul du tracé : au chargement, au redimensionnement et quand la page change de hauteur.
  useEffect(() => {
    const host = svgRef.current?.parentElement;
    if (!host) return;
    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setGeo(build(host)));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(host);
    window.addEventListener("resize", update);
    const late = window.setTimeout(update, 1200);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("resize", update);
      window.clearTimeout(late);
    };
  }, [pathname]);

  // Le tuyau se dessine au défilement.
  useEffect(() => {
    const path = flowRef.current;
    const svg = svgRef.current;
    if (!path || !svg || !geo) return;
    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const joints = Array.from(svg.querySelectorAll<SVGElement>("[data-y]"));
    let raf = 0;
    const draw = () => {
      raf = 0;
      const top = svg.getBoundingClientRect().top;
      const head = reduce ? geo.y1 : window.innerHeight * 0.62 - top;
      const p = Math.min(1, Math.max(0, (head - geo.y0) / (geo.y1 - geo.y0)));
      path.style.strokeDashoffset = `${length * (1 - p)}`;
      for (const el of joints) el.classList.toggle("on", Number(el.dataset.y) <= head);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(draw);
    };
    draw();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [geo]);

  return (
    <svg ref={svgRef} className="pipe" width={geo?.w ?? 0} height={geo?.h ?? 0} aria-hidden="true" focusable="false">
      {geo ? (
        <>
          <defs>
            <linearGradient id="pipe-gradient" gradientUnits="userSpaceOnUse" x1="0" y1={geo.y0} x2="0" y2={geo.y1}>
              <stop offset="0" stopColor="#c7cbd0" />
              <stop offset="0.35" stopColor="#a9aeb4" />
              <stop offset="0.75" stopColor="#e4342b" />
              <stop offset="1" stopColor="#e4342b" />
            </linearGradient>
          </defs>
          <path className="route" d={geo.d} />
          <path ref={flowRef} className="flow" d={geo.d} />
          {geo.joints.map((j) => (
            <g key={j.n}>
              <circle className="joint" data-y={j.y} cx={j.x} cy={j.y} r={geo.wide ? 4 : 3} />
              {geo.wide ? (
                <text className="num" data-y={j.y} x={j.numX} y={j.y + 3.5} textAnchor="end">
                  {String(j.n).padStart(2, "0")}
                </text>
              ) : null}
              {j.flame ? (
                <path
                  className="flame"
                  data-y={j.y}
                  transform={`translate(${j.x + (geo.wide ? 9 : 7)} ${j.y - 15})`}
                  d="M5 0C5.6 3 9 4.6 9 8.6A4 4 0 0 1 1 8.6C1 6.4 2.4 5.2 3 3.6 3.6 5 4.6 5.4 5 5.4 5.4 3.6 4.6 1.8 5 0Z"
                  fill="#2f6fd6"
                />
              ) : null}
            </g>
          ))}
        </>
      ) : null}
    </svg>
  );
}
