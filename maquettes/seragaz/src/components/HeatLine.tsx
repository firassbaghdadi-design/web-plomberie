"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * La ligne de chaleur : signature de la maquette SERAGAZ.
 * Une veilleuse bleue (la flamme du logo) s'allume en haut de page ; un trait fin la suit au fil de la lecture
 * et passe du marine (installation froide) au bleu de la flamme, puis au vert du logo à la « température idéale »
 * (le contrat d'entretien sur l'accueil, l'appel à l'action ailleurs). Chaque section est une station de la ligne.
 * Purement décoratif : aria-hidden, aucune interaction.
 */
const COLD = [2, 44, 104];
const BLUE = [0, 81, 158];
const WARM = [136, 187, 61];
const mix = (a: number[], b: number[], t: number) => `rgb(${a.map((v, i) => Math.round(v + (b[i] - v) * t)).join(",")})`;

export function HeatLine() {
  const pathname = usePathname();
  const root = useRef<HTMLDivElement>(null);
  const stops = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    const layer = stops.current;
    const host = el?.parentElement;
    if (!el || !layer || !host) return;
    let start = 0;
    let len = 1;
    let marks: { top: number; node: HTMLDivElement }[] = [];
    let raf = 0;
    let ready = false;

    const colorAt = (y: number, ideal: number) => {
      const t = Math.max(0, Math.min(1, y / len));
      const a = 0.4 * ideal;
      const b = 0.9 * ideal;
      if (t <= a) return mix(COLD, BLUE, a ? t / a : 1);
      if (t <= b) return mix(BLUE, BLUE, 0);
      if (t < ideal) return mix(BLUE, WARM, (t - b) / (ideal - b || 1));
      return mix(WARM, WARM, 0);
    };

    const measure = () => {
      // Positions mesurées sans les transformations (les libellés glissent pendant leur apparition).
      const docTop = (n: HTMLElement) => { let y = 0; for (let e: HTMLElement | null = n; e; e = e.offsetParent as HTMLElement | null) y += e.offsetTop; return y; };
      const hostTop = docTop(host);
      const lineX = el.getBoundingClientRect().left;
      const wrap = document.querySelector("main .wrap");
      const contentX = wrap ? wrap.getBoundingClientRect().left + parseFloat(getComputedStyle(wrap).paddingLeft) : lineX + 24;
      const pos = (n: Element) => docTop(n as HTMLElement) - hostTop;
      const first = document.querySelector("[data-heat-start]");
      const last = document.querySelector("[data-heat-end]");
      start = first ? pos(first) + 8 : 120;
      const end = last ? pos(last) + 12 : host.offsetHeight - 80;
      len = Math.max(1, end - start);
      const ideal = document.querySelector("[data-station='ideal']");
      const idealT = ideal ? Math.min(1, Math.max(0.2, (pos(ideal) + 10 - start) / len)) : 1;
      el.style.setProperty("--start", `${start}px`);
      el.style.setProperty("--len", `${len}px`);
      el.style.setProperty("--ideal", String(idealT));
      layer.replaceChildren();
      marks = Array.from(document.querySelectorAll<HTMLElement>("[data-station]")).map((n) => {
        const r = n.getBoundingClientRect();
        const top = pos(n) + Math.min(n.offsetHeight / 2, 10);
        const node = document.createElement("div");
        node.className = "heat-stop";
        node.style.top = `${top}px`;
        node.style.setProperty("--w", `${Math.max(0, Math.min(r.left, contentX) - lineX - 18)}px`);
        node.style.setProperty("--c", colorAt(top - start, idealT));
        node.innerHTML = n.dataset.station === "ideal" ? "<i></i><b></b><em class='hidden lg:block'>Température idéale</em>" : "<i></i><b></b>";
        layer.appendChild(node);
        return { top, node };
      });
      update();
    };

    const update = () => {
      raf = 0;
      if (!ready) return;
      const hostTop = host.getBoundingClientRect().top;
      const reach = window.innerHeight * 0.62 - hostTop - start;
      const p = Math.max(0.0001, Math.min(1, reach / len));
      el.style.setProperty("--p", p.toFixed(4));
      const y = start + p * len;
      for (const m of marks) m.node.classList.toggle("is-on", m.top <= y + 2);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };

    // La veilleuse s'allume, puis le trait se dessine jusqu'au point de lecture.
    el.style.setProperty("--p", "0");
    measure();
    el.classList.add("is-ready");
    const t = window.setTimeout(() => { ready = true; update(); }, 650);
    document.fonts?.ready.then(measure).catch(() => undefined);
    const ro = new ResizeObserver(() => measure());
    ro.observe(host);
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

  return (
    <div ref={root} className="heat" aria-hidden="true">
      <div className="heat-track" />
      <div className="heat-fill" />
      <div ref={stops} />
      <div className="heat-head">
        <svg viewBox="0 0 32 42">
          <path d="M16 2C9 11 4 17 4 26a12 12 0 0 0 24 0c0-9-5-15-12-24z" fill="#00519e" />
          <path d="M18 15c5 5 7 9 6 14-1 4-4 7-8 8 3-3 4-6 3-10-.5-4-2-7-1-12z" fill="#88bb3d" />
        </svg>
      </div>
    </div>
  );
}
