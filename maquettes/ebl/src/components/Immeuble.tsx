"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * La coupe d'immeuble : signature de la maquette EBL. Un immeuble parisien dessiné en coupe, en traits fins, de la cave
 * aux toits, avec la colonne d'eau qui monte. Chaque section de la page est un étage (repère `data-floor`, de 0 à 5) ;
 * la colonne se remplit au défilement et chaque étage atteint « prend l'eau » (branchement et appareil passent à l'accent).
 * Décoratif : aria-hidden, aucune interaction. Sur téléphone, seule la moitié droite du dessin (colonne, appareils, toit)
 * est visible, par recadrage (`slice`).
 */
export const FLOORS = ["Cave", "Rez-de-chaussée", "1er étage", "2e étage", "3e étage", "Toits"] as const;
const CY = (i: number) => 430 - 72 * i;
const SLABS = [394, 322, 250, 178, 106];

export function Immeuble() {
  const pathname = usePathname();
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const svg = el.querySelector<SVGSVGElement>("svg");
    const groups = Array.from(el.querySelectorAll<SVGGElement>("[data-f]"));
    const bands = Array.from(el.querySelectorAll<SVGRectElement>("[data-b]"));
    const labels = Array.from(el.querySelectorAll<HTMLElement>("[data-l]"));
    if (!svg) return;
    let pts: { y: number; f: number }[] = [];
    let raf = 0;
    let ready = false;

    const measure = () => {
      const docH = document.documentElement.scrollHeight;
      const marks = Array.from(document.querySelectorAll<HTMLElement>("[data-floor]"))
        .map((e) => ({ f: Number(e.dataset.floor), y: e.getBoundingClientRect().top + window.scrollY }))
        .filter((m) => Number.isFinite(m.f))
        .sort((a, b) => a.y - b.y);
      const end = Math.max(200, docH - window.innerHeight * 0.42);
      const list: { y: number; f: number }[] = [{ y: 0, f: 0 }];
      for (const m of marks) {
        const last = list[list.length - 1];
        if (m.y > last.y + 1 && m.f >= last.f) list.push({ y: m.y, f: m.f });
      }
      const last = list[list.length - 1];
      if (end > last.y + 1) list.push({ y: end, f: 5 });
      else list.push({ y: last.y + 1, f: 5 });
      pts = list;
      update();
    };

    const floorAt = (y: number) => {
      if (y <= pts[0].y) return pts[0].f;
      for (let i = 1; i < pts.length; i++) {
        if (y <= pts[i].y) {
          const a = pts[i - 1];
          const b = pts[i];
          return a.f + ((y - a.y) / (b.y - a.y)) * (b.f - a.f);
        }
      }
      return 5;
    };

    const update = () => {
      raf = 0;
      if (!pts.length) return;
      const F = Math.max(0, Math.min(5, floorAt(window.scrollY + window.innerHeight * 0.55)));
      const cur = Math.min(5, Math.floor(F + 0.001));
      const s = ready ? (7 + 72 * F) / 367 : 7 / 367;
      svg.style.setProperty("--s", s.toFixed(4));
      groups.forEach((g) => g.classList.toggle("on", Number(g.dataset.f) <= cur));
      bands.forEach((b) => b.classList.toggle("cur", Number(b.dataset.b) === cur));
      labels.forEach((l) => {
        const i = Number(l.dataset.l);
        l.classList.toggle("is-on", i <= cur);
        l.classList.toggle("is-cur", i === cur);
      });
      el.classList.toggle("is-full", F >= 4.98);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };

    svg.style.setProperty("--s", (7 / 367).toFixed(4));
    measure();
    const t = window.setTimeout(() => { ready = true; update(); }, 1500);
    document.fonts?.ready.then(measure).catch(() => undefined);
    const ro = new ResizeObserver(measure);
    ro.observe(document.body);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.clearTimeout(t);
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pathname]);

  const stairs = [1, 2, 3, 4].map((i) => {
    const b = CY(i) + 36;
    return `M66 ${b} L90 ${b - 36} L66 ${b - 72}`;
  });

  return (
    <aside ref={root} className="rail" aria-hidden="true">
      <div className="rail-in">
        <ol className="imm-labels">
          {FLOORS.map((name, i) => (
            <li key={name} data-l={i} style={{ top: `${(CY(i) / 490) * 100}%` }}>
              <span className="num">{String(i).padStart(2, "0")}</span> {name}
            </li>
          ))}
        </ol>
        <svg className="imm" viewBox="0 0 200 490" preserveAspectRatio="xMaxYMid slice" fill="none" strokeLinecap="round" strokeLinejoin="round">
          {/* étage courant : un lavis très léger */}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <rect key={i} data-b={i} className="band" x="24" y={CY(i) - 36} width="152" height="72" />
          ))}

          {/* terre autour de la cave et du rez-de-chaussée */}
          <g className="soft">
            {[0, 1, 2, 3, 4, 5, 6].map((k) => (
              <path key={k} pathLength={1} d={`M0 ${412 + k * 12} L24 ${396 + k * 12} M176 ${412 + k * 12} L200 ${396 + k * 12}`} />
            ))}
          </g>

          {/* structure : murs, planchers, toiture en zinc (le trait se dessine au chargement) */}
          <g className="st" strokeWidth="var(--sw)">
            <path pathLength={1} style={{ ["--d" as string]: "0ms" }} d="M24 106 V466 M176 106 V466 M12 466 H188" />
            {SLABS.map((y, k) => (
              <path key={y} pathLength={1} style={{ ["--d" as string]: `${300 + k * 160}ms` }} d={`M24 ${y} H176`} />
            ))}
            <path pathLength={1} style={{ ["--d" as string]: "900ms" }} d="M24 106 L36 62 H164 L176 106 M36 62 L42 56 H158 L164 62" />
            <path pathLength={1} style={{ ["--d" as string]: "1300ms" }} d="M58 56 V36 H72 V56 M56 36 H74 M120 56 V30 H138 V56 M118 30 H140" />
            <path pathLength={1} style={{ ["--d" as string]: "1500ms" }} d="M0 394 H24 M176 394 H200" />
          </g>

          {/* cave voûtée */}
          <g className="soft">
            <path pathLength={1} d="M24 424 A23 23 0 0 1 70 424 M70 424 A23 23 0 0 1 116 424 M116 424 A30 30 0 0 1 176 424 M70 424 V466 M116 424 V466" />
          </g>

          {/* détails de façade et d'intérieur */}
          <g className="soft">
            <path pathLength={1} d="M50 74 H72 V98 H50 Z M48 74 L61 64 L74 74 M110 74 H132 V98 H110 Z M108 74 L121 64 L134 74" />
            <path pathLength={1} d="M36 350 V394 M60 350 V394 M36 350 A12 12 0 0 1 60 350" />
            {[2, 3, 4].map((i) => (
              <path key={i} pathLength={1} d={`M36 ${CY(i) - 18} H54 V${CY(i) + 12} H36 Z M45 ${CY(i) - 18} V${CY(i) + 12} M36 ${CY(i) - 3} H54`} />
            ))}
            <path pathLength={1} d="M31 286 H59 M31 290 H59" />
            <path pathLength={1} d={stairs.join(" ")} />
          </g>

          {/* colonne d'eau : tuyau, eau qui monte, compteur en cave, arrivée de la rue */}
          <path className="feed" pathLength={1} d="M0 446 H143" />
          <rect x="148" y="70" width="8" height="367" fill="#fff" />
          <clipPath id="imm-pipe">
            <rect x="149" y="70" width="6" height="367" />
          </clipPath>
          <g clipPath="url(#imm-pipe)">
            <rect className="water" x="149" y="70" width="6" height="367" />
          </g>
          <path className="pipe" strokeWidth="var(--sw)" pathLength={1} d="M148 437 V70 H156 V437" />
          <circle cx="152" cy="446" r="9" fill="#fff" className="pipe" strokeWidth="var(--sw)" />
          <path className="pipe" d="M152 446 L155 442 M146 446 H148" strokeWidth="var(--sw)" />
          <circle className="drop" cx="152" cy="65" r="2.6" />

          {/* un branchement et un appareil par étage */}
          {[1, 2, 3, 4, 5].map((i) => {
            const y = CY(i);
            return (
              <g key={i} data-f={i} className="fl">
                <path d={`M148 ${y} H138`} />
                {i === 1 ? <path d={`M112 ${y + 4} H138 M116 ${y + 4} V${y + 12} H134 V${y + 4} M136 ${y} V${y - 8} H130`} /> : null}
                {i === 2 ? <path d={`M112 ${y - 9} H138 V${y + 9} H112 Z M118 ${y - 9} V${y + 9} M124 ${y - 9} V${y + 9} M130 ${y - 9} V${y + 9}`} /> : null}
                {i === 3 ? <path d={`M108 ${y - 2} H138 V${y + 4} Q138 ${y + 12} 130 ${y + 12} H116 Q108 ${y + 12} 108 ${y + 4} Z M134 ${y - 2} V${y - 10} H128`} /> : null}
                {i === 4 ? <path d={`M118 ${y - 16} H132 Q138 ${y - 16} 138 ${y - 10} V${y + 10} Q138 ${y + 16} 132 ${y + 16} H118 Q112 ${y + 16} 112 ${y + 10} V${y - 10} Q112 ${y - 16} 118 ${y - 16} Z M125 ${y - 16} V${y - 22}`} /> : null}
                {i === 5 ? <path d={`M138 ${y} H124 V${y + 10} M124 ${y + 14} v2`} /> : null}
              </g>
            );
          })}
          <g data-f={0} className="fl">
            <path d="M143 446 H138" />
          </g>
        </svg>
      </div>
    </aside>
  );
}
