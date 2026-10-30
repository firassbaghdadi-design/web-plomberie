"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Le moteur de la goutte. Une goutte unique descend le rail de la marge : elle tombe (gravité) vers la station active,
 * c'est-à-dire la dernière section dont le point est passé sous 70 % de la hauteur de l'écran. Quand elle franchit
 * un point, la station reçoit `is-in` : deux anneaux partent du point et la section se découvre dans leur sillage.
 * Une station qui reste à l'écran sans que la goutte l'ait atteinte est révélée discrètement après 1,5 s (`quiet`).
 * Relancé à chaque changement de page. Mouvement réduit : tout est affiché, la goutte reste immobile.
 */
export function Motion() {
  const pathname = usePathname();
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js");
    (window as unknown as { __drop?: boolean }).__drop = true;

    const page = document.getElementById("page");
    const rail = document.getElementById("rail");
    const drop = rail?.querySelector<HTMLElement>(".drop") ?? null;
    const dropSvg = drop?.querySelector<SVGElement>("svg") ?? null;
    const fill = rail?.querySelector<HTMLElement>(".rail-fill") ?? null;
    const head = document.querySelector<HTMLElement>("[data-head]");
    const stations = Array.from(document.querySelectorAll<HTMLElement>("[data-station]"));
    stations.forEach((s) => s.classList.remove("is-in", "quiet"));
    if (!page || !drop) return;

    const onHead = () => head?.classList.toggle("is-solid", window.scrollY > 24);
    window.addEventListener("scroll", onHead, { passive: true });
    onHead();

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      stations.forEach((s) => s.classList.add("is-in", "quiet"));
      drop.style.display = "none";
      return () => window.removeEventListener("scroll", onHead);
    }

    let ys: number[] = [];
    const seen: number[] = stations.map(() => 0);
    let y = -26;
    let v = 0;
    let raf = 0;
    let last = 0;
    let arrivedAt = -1;

    const measure = () => {
      const base = page.getBoundingClientRect().top + window.scrollY;
      ys = stations.map((s) => {
        const pt = s.querySelector<HTMLElement>(".station-pt");
        if (!pt) return 0;
        const r = pt.getBoundingClientRect();
        return r.top + r.height / 2 + window.scrollY - base;
      });
    };
    const target = () => {
      const line = window.scrollY + window.innerHeight * 0.7;
      let t = -26;
      for (let i = 0; i < ys.length; i++) if (ys[i] <= line) t = ys[i];
      return t;
    };
    const reveal = (i: number, quiet: boolean) => {
      const s = stations[i];
      if (s.classList.contains("is-in")) return;
      if (quiet) s.classList.add("quiet");
      s.classList.add("is-in");
    };

    const paint = (stretch: number) => {
      drop.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0)`;
      if (dropSvg) dropSvg.style.transform = `scale(${(1 - stretch * 0.2).toFixed(3)}, ${(1 + stretch * 0.45).toFixed(3)})`;
      if (fill) fill.style.height = `${Math.max(0, y).toFixed(1)}px`;
    };

    const tick = (now: number) => {
      raf = 0;
      const dt = Math.min(0.05, (now - last) / 1000 || 0.016);
      last = now;
      const t = target();
      let moving = false;
      if (y < t - 0.5) {
        v = Math.min(v + 2800 * dt, 4200);
        y = Math.min(t, y + v * dt);
        moving = true;
      } else if (y > t + 0.5) {
        v = 0;
        y += (t - y) * (1 - Math.exp(-dt * 9));
        if (Math.abs(t - y) < 0.5) y = t;
        else moving = true;
      }
      // Les points franchis par la goutte déclenchent leur onde.
      for (let i = 0; i < ys.length; i++) {
        if (stations[i].classList.contains("is-in")) continue;
        const farAbove = ys[i] < window.scrollY - 160;
        if (y >= ys[i] - 2) reveal(i, farAbove);
      }
      // Filet de sécurité : une station à l'écran n'attend jamais plus de 1,5 s.
      const top = window.scrollY;
      const bottom = top + window.innerHeight;
      for (let i = 0; i < ys.length; i++) {
        if (stations[i].classList.contains("is-in")) continue;
        if (ys[i] > top && ys[i] < bottom) {
          if (!seen[i]) seen[i] = now;
          else if (now - seen[i] > 1500) reveal(i, true);
        } else seen[i] = 0;
      }
      const settled = !moving && v === 0;
      if (settled && arrivedAt !== t) {
        arrivedAt = t;
        drop.classList.remove("splash");
        void drop.getBoundingClientRect();
        if (t > 0) drop.classList.add("splash");
      }
      if (moving) arrivedAt = -1;
      paint(moving && v > 0 ? v / 4200 : 0);
      const pending = stations.some((s) => !s.classList.contains("is-in"));
      if (moving || pending) raf = requestAnimationFrame(tick);
    };
    const kick = () => {
      if (!raf) {
        last = performance.now();
        raf = requestAnimationFrame(tick);
      }
    };

    measure();
    paint(0);
    drop.classList.add("ready");
    kick();
    const onScroll = () => kick();
    const onResize = () => {
      measure();
      kick();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    const ro = new ResizeObserver(() => {
      measure();
      kick();
    });
    ro.observe(page);
    const late = window.setTimeout(onResize, 1200);
    return () => {
      window.clearTimeout(late);
      ro.disconnect();
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onHead);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [pathname]);
  return null;
}
