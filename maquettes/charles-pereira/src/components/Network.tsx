"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Le réseau isométrique. Une canalisation en double trait fin, dessinée selon les trois axes de la perspective
 * isométrique (la verticale et les deux diagonales à 30°), part du bandeau du héros, rejoint la gouttière de gauche
 * et descend toute la page. Chaque section (`[data-raccord]`) est un raccord : un écrou-union sur la conduite et,
 * sur grand écran, une dérivation qui pointe vers son titre. Le tracé se construit au défilement ; au chargement,
 * le bandeau du héros se dessine seul. Tout est calculé d'après la position réelle des éléments, donc il suit la mise en page.
 */

const K = Math.tan(Math.PI / 6);
type Dir = "V" | "DL" | "DR" | "UL" | "UR";
type Pt = { x: number; y: number };
type Seg = { a: Pt; b: Pt; len: number; ux: number; uy: number };
const VEC: Record<Dir, [number, number]> = { V: [0, 1], DL: [-1, K], DR: [1, K], UL: [-1, -K], UR: [1, -K] };

const f = (n: number) => Math.round(n * 100) / 100;
const ease = (t: number) => 1 - Math.pow(1 - t, 3);

function offsetPoints(pts: Pt[], d: number, side: 1 | -1): string {
  const segs: { p: Pt; ux: number; uy: number }[] = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const dx = pts[i + 1].x - pts[i].x, dy = pts[i + 1].y - pts[i].y, l = Math.hypot(dx, dy) || 1;
    const ux = dx / l, uy = dy / l;
    segs.push({ p: { x: pts[i].x + side * d * -uy, y: pts[i].y + side * d * ux }, ux, uy });
  }
  const out: Pt[] = [segs[0].p];
  for (let i = 1; i < segs.length; i++) {
    const s1 = segs[i - 1], s2 = segs[i];
    const cr = s1.ux * s2.uy - s1.uy * s2.ux;
    if (Math.abs(cr) < 1e-6) out.push(s2.p);
    else {
      const t = ((s2.p.x - s1.p.x) * s2.uy - (s2.p.y - s1.p.y) * s2.ux) / cr;
      out.push({ x: s1.p.x + t * s1.ux, y: s1.p.y + t * s1.uy });
    }
  }
  const last = segs[segs.length - 1];
  const e = pts[pts.length - 1];
  out.push({ x: e.x + side * d * -last.uy, y: e.y + side * d * last.ux });
  return "M" + out.map((p) => `${f(p.x)} ${f(p.y)}`).join("L");
}

/** Écrou-union sur une conduite verticale : un petit cylindre isométrique, avec sa bague. */
function nut(x: number, y: number, rx: number) {
  const ry = rx * K, h = rx * 1.15;
  return (
    `<path class="piece" d="M${f(x - rx)} ${f(y - h)}V${f(y + h)}A${f(rx)} ${f(ry)} 0 0 0 ${f(x + rx)} ${f(y + h)}V${f(y - h)}"/>` +
    `<ellipse class="piece" cx="${f(x)}" cy="${f(y - h)}" rx="${f(rx)}" ry="${f(ry)}"/>` +
    `<path class="trait" d="M${f(x - rx)} ${f(y)}A${f(rx)} ${f(ry)} 0 0 0 ${f(x + rx)} ${f(y)}"/>`
  );
}

/** Bride en bout de conduite : une ellipse perpendiculaire à l'axe (angle de l'axe en degrés). */
function flange(x: number, y: number, angle: number, half: number) {
  return (
    `<ellipse class="piece" cx="${f(x)}" cy="${f(y)}" rx="${f(half * 0.42)}" ry="${f(half)}" transform="rotate(${angle} ${f(x)} ${f(y)})"/>`
  );
}

/** Vanne sur une conduite diagonale : corps, tige et volant (une ellipse horizontale). */
function valve(x: number, y: number, half: number) {
  const top = y - half * 5.4;
  return (
    `<path class="trait" d="M${f(x)} ${f(y)}V${f(top)}"/>` +
    `<ellipse class="piece" cx="${f(x)}" cy="${f(y)}" rx="${f(half * 1.5)}" ry="${f(half * 1.5 * K)}"/>` +
    `<ellipse class="piece" cx="${f(x)}" cy="${f(top)}" rx="${f(half * 2.4)}" ry="${f(half * 2.4 * K)}"/>` +
    `<path class="trait" d="M${f(x - half * 2.4)} ${f(top)}H${f(x + half * 2.4)}"/>`
  );
}

/** Bague de serrage en travers d'une conduite : deux traits courts. */
function collar(p: Pt, ux: number, uy: number, half: number) {
  const nx = -uy * (half + 1.6), ny = ux * (half + 1.6);
  const g = 3.2;
  const line = (k: number) => `M${f(p.x + ux * k + nx)} ${f(p.y + uy * k + ny)}L${f(p.x + ux * k - nx)} ${f(p.y + uy * k - ny)}`;
  return `<path class="trait" d="${line(-g)}${line(g)}"/>`;
}

export function Network() {
  const pathname = usePathname();
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = ref.current;
    const root = svg?.parentElement;
    if (!svg || !root) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let segs: Seg[] = [];
    let total = 1;
    let heroLen = 0;
    let railStartIdx = 0;
    let railStartY = 0;
    let paths: SVGPathElement[] = [];
    let nodes: { el: SVGGElement; len: number }[] = [];
    let intro = reduce ? 1 : 0;
    let introStart = 0;
    let raf = 0;
    let rafIntro = 0;

    const build = () => {
      const W = root.clientWidth;
      const wide = W >= 1024;
      const rootRect = root.getBoundingClientRect();
      const ox = rootRect.left, oy = rootRect.top + window.scrollY;
      const rel = (r: DOMRect) => ({ l: r.left - ox, r: r.right - ox, t: r.top + window.scrollY - oy, b: r.bottom + window.scrollY - oy });

      const half = wide ? 3.4 : 2.4;
      const xA = wide ? 26 : 11;
      const dxR = wide ? 40 : 14;
      const xB = xA + dxR;
      const stubL = W >= 1100 ? 26 : 0;
      const nutR = half + 3.4;

      const pts: Pt[] = [];
      const glyph: string[] = [];
      let cur: Pt = { x: xA, y: 0 };
      const dirOf: Dir[] = [];
      const go = (dir: Dir, amount: number) => {
        if (amount <= 0.5) return;
        const [vx, vy] = VEC[dir];
        const nx = cur.x + vx * amount, ny = cur.y + (dir === "V" ? amount : vy * amount);
        cur = { x: nx, y: ny };
        pts.push(cur);
        dirOf.push(dir);
      };

      // — Héros : bandeau en dents de scie qui traverse l'écran, de droite à gauche
      const art = root.querySelector<HTMLElement>("[data-art]");
      let heroPts = 0;
      let valveAt = -1;
      if (art) {
        const a = rel(art.getBoundingClientRect());
        const r = Math.min(a.r, W - (wide ? 40 : 12));
        const top = a.t + 14;
        cur = { x: r, y: top };
        pts.push(cur);
        glyph.push(flange(cur.x, cur.y, -30, half + 2.2));
        // Tracé en dents de scie, aux longueurs inégales, avec deux retombées verticales : une vraie conduite, pas un ressort.
        const seq = [1.2, -0.7, 0.5, -1.1, 1.5, -0.8, "V", 0.6, -1.0, 1.0, -0.9, "V", 0.9, -0.9] as (number | "V")[];
        const units = seq.reduce<number>((t, u) => (u === "V" ? t : t + Math.abs(u)), 0);
        const sp = (r - xA) / units;
        const hop = wide ? 30 : 16;
        let longest = { i: -1, v: 0 };
        seq.forEach((u) => {
          if (u === "V") { go("V", hop); return; }
          if (Math.abs(u) > longest.v && u > 0) longest = { i: pts.length - 1, v: Math.abs(u) };
          go(u > 0 ? "DL" : "UL", Math.abs(u) * sp);
        });
        valveAt = longest.i;
        heroPts = pts.length;
      } else {
        pts.push(cur);
      }
      heroLen = 0;
      for (let i = 1; i < pts.length; i++) heroLen += Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y);
      railStartIdx = Math.max(0, heroPts - 1);
      railStartY = cur.y;

      // — Nœuds : un raccord par section
      const labels = Array.from(root.querySelectorAll<HTMLElement>("[data-raccord] .raccord-label"));
      const targets = labels
        .map((el) => {
          const r = rel(el.getBoundingClientRect());
          return (r.t + r.b) / 2;
        })
        .sort((p, q) => p - q);
      const nutYs: number[] = [];
      const dyR = dxR * K;
      for (const ly of targets) {
        const ny = ly + stubL * K;
        const startDiag = ny - 56 - dyR;
        if (startDiag < cur.y + 8) { // trop près du précédent : on laisse la conduite telle quelle
          nutYs.push(NaN);
          continue;
        }
        go("V", startDiag - cur.y);
        go("DR", dxR);
        go("V", ny - cur.y);
        nutYs.push(ny);
        go("V", 46);
        go("DL", dxR);
      }
      // Bout de ligne : on termine la conduite par une bride, sous le dernier raccord
      const lastTarget = nutYs.filter((y) => !Number.isNaN(y)).pop();
      if (lastTarget !== undefined) {
        // la conduite finit sur la dernière section : on supprime le retour en gouttière, un bouchon ferme la ligne
        pts.pop();
        dirOf.pop();
        cur = pts[pts.length - 1];
      }
      if (pts.length < 2) { svg.innerHTML = ""; paths = []; nodes = []; segs = []; return; }

      // Longueurs cumulées
      segs = [];
      total = 0;
      for (let i = 1; i < pts.length; i++) {
        const dx = pts[i].x - pts[i - 1].x, dy = pts[i].y - pts[i - 1].y, len = Math.hypot(dx, dy);
        segs.push({ a: pts[i - 1], b: pts[i], len, ux: dx / (len || 1), uy: dy / (len || 1) });
        total += len;
      }

      // Pièces le long de la conduite : bagues sur le bandeau, vanne au milieu
      if (art && heroPts > 1) {
        const hs = segs.slice(0, heroPts - 1);
        hs.forEach((sg, i) => {
          const mid = { x: (sg.a.x + sg.b.x) / 2, y: (sg.a.y + sg.b.y) / 2 };
          if (i === valveAt) glyph.push(valve(mid.x, mid.y, half));
          else if (i % 2 === 0) glyph.push(collar(mid, sg.ux, sg.uy, half));
          else {
            const q = { x: sg.a.x + sg.ux * sg.len * 0.3, y: sg.a.y + sg.uy * sg.len * 0.3 };
            glyph.push(collar(q, sg.ux, sg.uy, half));
          }
        });
      }

      // Raccords : écrou + dérivation vers le titre
      const lens: number[] = [];
      const nodeSvg: string[] = [];
      nutYs.forEach((ny, i) => {
        if (Number.isNaN(ny)) return;
        // longueur le long de la conduite au niveau de cet écrou
        let acc = 0, at = 0;
        for (const sg of segs) {
          if (ny >= Math.min(sg.a.y, sg.b.y) - 0.01 && ny <= Math.max(sg.a.y, sg.b.y) + 0.01 && Math.abs(sg.b.x - xB) < 0.5 && Math.abs(sg.a.x - xB) < 0.5) { at = acc + (ny - sg.a.y); break; }
          acc += sg.len;
        }
        lens.push(at);
        let g = nut(xB, ny, nutR);
        if (stubL) {
          const ex = xB + stubL, ey = ny - stubL * K;
          const o = half;
          g +=
            `<path class="trait" d="M${f(xB + nutR * 0.7)} ${f(ny - nutR * 0.7 * K - o / 0.866)}L${f(ex)} ${f(ey - o / 0.866)}M${f(xB + nutR * 0.7)} ${f(ny - nutR * 0.7 * K + o / 0.866)}L${f(ex)} ${f(ey + o / 0.866)}"/>` +
            flange(ex, ey, -30, half + 2);
        }
        nodeSvg.push(`<g class="raccord-g" data-i="${i}">${g}</g>`);
      });

      // Bouchon de fin : la conduite se ferme sous le dernier raccord (bride)
      const endPt = pts[pts.length - 1];

      svg.setAttribute("width", String(W));
      const H = Math.ceil(root.scrollHeight);
      svg.setAttribute("height", String(H));
      svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
      const dA = offsetPoints(pts, half, 1), dB = offsetPoints(pts, half, -1);
      svg.innerHTML =
        `<path class="fantome" d="${dA}"/><path class="fantome" d="${dB}"/>` +
        `<path class="tube" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1" d="${dA}"/>` +
        `<path class="tube" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1" d="${dB}"/>` +
        `<g class="raccord-g" data-i="hero">${glyph.join("")}</g>` +
        nodeSvg.join("") +
        `<g class="raccord-g" data-i="end">${flange(endPt.x, endPt.y, 90, half + 2.4)}${flange(endPt.x, endPt.y - 7, 90, half + 1.2)}</g>`;
      paths = Array.from(svg.querySelectorAll<SVGPathElement>("path.tube"));
      const groups = Array.from(svg.querySelectorAll<SVGGElement>("g.raccord-g"));
      let k = 0;
      nodes = groups
        .map((g) => ({ el: g, len: g.dataset.i === "hero" ? 0 : g.dataset.i === "end" ? total - 1 : lens[k++] ?? 0 }));
      void dirOf;
    };

    /** Longueur de conduite dessinée quand l'œil de lecture est à la hauteur `y` (page) : monotone sur la partie verticale. */
    const lenAtY = (y: number) => {
      if (y <= railStartY) return 0;
      let acc = 0;
      for (let i = 0; i < segs.length; i++) {
        const sg = segs[i];
        if (i >= railStartIdx) {
          const y0 = sg.a.y, y1 = sg.b.y;
          if (y >= y0 && y <= y1) return acc + (y1 === y0 ? 0 : ((y - y0) / (y1 - y0)) * sg.len);
        }
        acc += sg.len;
      }
      return total;
    };

    const draw = () => {
      raf = 0;
      if (!paths.length) return;
      const rootTop = root.getBoundingClientRect().top + window.scrollY;
      const eye = window.scrollY + window.innerHeight * 0.62 - rootTop;
      const sc = lenAtY(eye);
      const introLen = ease(intro) * heroLen;
      const head = sc > 0 ? Math.max(sc, heroLen) : introLen;
      const p = Math.min(1, head / total);
      paths.forEach((el) => el.setAttribute("stroke-dashoffset", String(f(1 - p))));
      nodes.forEach((n) => n.el.classList.toggle("is-on", head >= (n.el.dataset.i === "hero" ? heroLen * 0.55 : n.len) - 4));
    };
    const schedule = () => { if (!raf) raf = requestAnimationFrame(draw); };

    const runIntro = () => {
      if (reduce || window.scrollY > 120) { intro = 1; schedule(); return; }
      introStart = performance.now() + 450;
      const tick = (now: number) => {
        intro = Math.min(1, Math.max(0, (now - introStart) / 2600));
        schedule();
        if (intro < 1) rafIntro = requestAnimationFrame(tick);
      };
      rafIntro = requestAnimationFrame(tick);
    };

    build();
    runIntro();
    draw();

    let rebuildTimer = 0;
    const rebuild = () => { window.clearTimeout(rebuildTimer); rebuildTimer = window.setTimeout(() => { build(); draw(); }, 60); };
    const ro = new ResizeObserver(rebuild);
    ro.observe(root);
    const late = window.setTimeout(rebuild, 700);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", rebuild);
    if (document.fonts?.ready) document.fonts.ready.then(rebuild).catch(() => {});

    return () => {
      ro.disconnect();
      window.clearTimeout(rebuildTimer);
      window.clearTimeout(late);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", rebuild);
      if (raf) cancelAnimationFrame(raf);
      if (rafIntro) cancelAnimationFrame(rafIntro);
    };
  }, [pathname]);

  return <svg ref={ref} className="reseau" aria-hidden="true" focusable="false" />;
}
