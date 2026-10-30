"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const clamp = (v: number) => Math.min(1, Math.max(0, v));
const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

/**
 * Apparitions au défilement, en-tête qui se cache en descendant, et pilotage des figures « du plan au chantier » :
 * --dr (tracé des traits de cote, 0 à 1) et --p (photo dévoilée, 0 à 1). Relancé à chaque changement de page.
 */
export function Motion() {
  const pathname = usePathname();
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js");
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal], [data-mask]"));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }),
      { rootMargin: "0px 0px -6% 0px", threshold: 0.05 },
    );
    items.forEach((el) => io.observe(el));

    // Figures plan → chantier. `auto` : tracé à l'ouverture ; `scroll` : suit le défilement, sans jamais revenir en arrière.
    const plans = Array.from(document.querySelectorAll<HTMLElement>("[data-plan]")).map((el) => ({ el, dr: 0, p: 0, auto: el.dataset.plan === "auto", t0: 0 }));
    const apply = (f: (typeof plans)[number], dr: number, p: number) => {
      if (dr <= f.dr && p <= f.p && f.el.classList.contains("is-set")) return;
      f.dr = Math.max(f.dr, dr);
      f.p = Math.max(f.p, p);
      f.el.style.setProperty("--dr", f.dr.toFixed(3));
      f.el.style.setProperty("--p", f.p.toFixed(3));
      f.el.classList.add("is-set");
    };
    const t0 = performance.now();
    let planRaf = 0;
    const planUpdate = () => {
      planRaf = 0;
      const vh = window.innerHeight;
      let animating = false;
      for (const f of plans) {
        if (still) { apply(f, 1, 1); continue; }
        if (f.auto) {
          const t = clamp((performance.now() - t0 - 350) / 3000);
          apply(f, ease(clamp(t / 0.5)), ease(clamp((t - 0.22) / 0.78)));
          if (t < 1) animating = true;
        } else {
          const r = f.el.getBoundingClientRect();
          const k = clamp((vh * 0.94 - r.top) / (vh * 0.6));
          apply(f, ease(clamp(k / 0.42)), ease(clamp((k - 0.2) / 0.8)));
        }
      }
      if (animating) planRaf = requestAnimationFrame(planUpdate);
    };
    const kickPlans = () => { if (!planRaf) planRaf = requestAnimationFrame(planUpdate); };

    const head = document.querySelector<HTMLElement>("[data-head]");
    let lastY = window.scrollY;
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      if (head) {
        head.classList.toggle("is-solid", y > 30);
        if (y > 480 && y > lastY + 6 && !document.body.classList.contains("menu-open")) head.classList.add("is-hidden");
        if (y < lastY - 6 || y < 200) head.classList.remove("is-hidden");
      }
      lastY = y;
      kickPlans();
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    kickPlans();
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
      if (planRaf) cancelAnimationFrame(planRaf);
    };
  }, [pathname]);
  return null;
}
