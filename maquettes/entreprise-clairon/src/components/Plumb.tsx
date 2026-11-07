"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * Le fil à plomb : signature de la maquette Clairon (« plombier » vient du latin plumbum, le plomb).
 * Accroché en haut de la page, un fil fin descend dans la marge droite au rythme de la lecture ; le plomb oscille
 * légèrement quand on fait défiler, puis se stabilise. À chaque section numérotée, un repère s'allume ; tout en bas,
 * le plomb se pose dans sa cible : la page est « d'aplomb ». Purement décoratif : aria-hidden, aucune interaction.
 */
export function Plumb() {
  const pathname = usePathname();
  const root = useRef<HTMLDivElement>(null);
  const ticks = useRef<HTMLDivElement>(null);
  const swing = useRef<HTMLDivElement>(null);
  const target = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    const layer = ticks.current;
    const sw = swing.current;
    const tg = target.current;
    const host = el?.parentElement;
    if (!el || !layer || !sw || !tg || !host) return;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let start = 0;
    let len = 1;
    let marks: { top: number; node: HTMLDivElement }[] = [];
    let raf = 0;
    let ready = false;
    // Pendule amorti : angle, vitesse angulaire, dernière position de défilement.
    let a = still ? 0 : 7;
    let w = 0;
    let lastY = window.scrollY;
    let lastT = performance.now();
    let loop = 0;

    const docTop = (n: HTMLElement) => { let y = 0; for (let e: HTMLElement | null = n; e; e = e.offsetParent as HTMLElement | null) y += e.offsetTop; return y; };

    const measure = () => {
      const hostTop = docTop(host);
      const pos = (n: Element) => docTop(n as HTMLElement) - hostTop;
      const first = document.querySelector("[data-plumb-start]");
      const last = document.querySelector("[data-plumb-end]");
      start = first ? Math.max(0, pos(first) - 4) : 40;
      const end = last ? pos(last) + 6 : host.offsetHeight - 120;
      len = Math.max(1, end - start);
      el.style.setProperty("--start", `${start}px`);
      tg.style.top = `${start + len + 40}px`;
      layer.replaceChildren();
      marks = Array.from(document.querySelectorAll<HTMLElement>("main [data-n]")).map((n) => {
        const top = pos(n) + Math.min(n.offsetHeight / 2, 9);
        const node = document.createElement("div");
        node.className = "plumb-tick";
        node.style.top = `${top}px`;
        node.innerHTML = `<i></i><b>${n.dataset.n}</b>`;
        layer.appendChild(node);
        return { top, node };
      });
      update();
    };

    const update = () => {
      raf = 0;
      if (!ready) return;
      const hostTop = host.getBoundingClientRect().top;
      const reach = window.innerHeight * 0.6 - hostTop - start;
      const y = Math.max(46, Math.min(len, reach));
      el.style.setProperty("--y", `${y}px`);
      for (const m of marks) m.node.classList.toggle("is-on", m.top <= start + y + 40);
      tg.classList.toggle("is-on", y >= len - 2);
    };

    // Le plomb « traîne » derrière le défilement, puis revient à la verticale (amortissement doux).
    const tick = (t: number) => {
      const dt = Math.min(0.05, (t - lastT) / 1000);
      lastT = t;
      const sy = window.scrollY;
      const v = (sy - lastY) / Math.max(dt, 0.001);
      lastY = sy;
      const push = Math.max(-1600, Math.min(1600, v)) * 0.0035;
      w += (-38 * a - 3.2 * w - push * 10) * dt;
      a += w * dt;
      a = Math.max(-9, Math.min(9, a));
      sw.style.setProperty("--a", `${a.toFixed(3)}deg`);
      if (Math.abs(a) < 0.02 && Math.abs(w) < 0.05 && Math.abs(v) < 1) { a = 0; w = 0; sw.style.setProperty("--a", "0deg"); loop = 0; return; }
      loop = requestAnimationFrame(tick);
    };
    const kick = () => { if (!still && !loop) { lastT = performance.now(); lastY = window.scrollY; loop = requestAnimationFrame(tick); } };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); kick(); };

    el.style.setProperty("--y", "46px");
    measure();
    el.classList.add("is-ready");
    const t = window.setTimeout(() => { ready = true; update(); }, 700);
    kick();
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
      if (loop) cancelAnimationFrame(loop);
    };
  }, [pathname]);

  return (
    <div ref={root} className="plumb" aria-hidden="true">
      <div className="plumb-hook" />
      <div className="plumb-cord" />
      <div ref={ticks} />
      <div ref={target} className="plumb-target"><em>D'aplomb</em></div>
      <div className="plumb-bob">
        <div ref={swing} className="plumb-swing">
          <i />
          <svg viewBox="0 0 14 24">
            <path d="M7 0.6 L7 3" stroke="#6e737a" strokeWidth="1" />
            <path d="M3.2 3 H10.8 L10.8 6.2 Q10.8 8 9.6 9.6 L7 23.2 L4.4 9.6 Q3.2 8 3.2 6.2 Z" fill="rgb(var(--accent))" />
            <path d="M3.2 6.2 H10.8" stroke="#fff" strokeOpacity=".55" strokeWidth=".8" />
          </svg>
        </div>
      </div>
    </div>
  );
}
