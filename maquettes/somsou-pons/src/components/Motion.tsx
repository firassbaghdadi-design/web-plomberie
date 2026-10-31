"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Animations sobres. Le script se relance à chaque changement de page (sinon les éléments d'une page ouverte
 * par un lien interne resteraient invisibles) et ne fait rien d'autre qu'afficher si le visiteur a demandé
 * moins d'animations.
 */
export function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    root.classList.add("js-ready");

    // Apparitions au défilement, et trames de tesselles qui s'assemblent
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal],[data-mosaic]"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );
    if (reduce) items.forEach((el) => el.classList.add("is-in"));
    else items.forEach((el) => io.observe(el));

    // Frise : une tesselle par année, allumée jusqu'à l'étape en cours
    const cleanups: (() => void)[] = [];
    document.querySelectorAll<HTMLElement>("[data-years]").forEach((section) => {
      const cells = Array.from(section.querySelectorAll<HTMLElement>(".y[data-y]"));
      const steps = Array.from(section.querySelectorAll<HTMLElement>("[data-step]"));
      const end = Number(section.dataset.years);
      let upto = 0;
      const paint = (year: number, focus?: number) => {
        const from = upto;
        cells.forEach((c) => {
          const y = Number(c.dataset.y);
          const on = y <= year;
          c.style.setProperty("--w", on && y > from ? `${Math.min(900, (y - from) * 9)}ms` : "0ms");
          c.classList.toggle("on", on);
          c.classList.toggle("focus", y === focus);
        });
        steps.forEach((s) => s.classList.toggle("is-active", Number(s.dataset.step) === focus));
        upto = year;
      };
      if (reduce) {
        paint(end);
        return;
      }
      const desktop = window.matchMedia("(min-width: 1024px)").matches;
      if (desktop) {
        // sur grand écran, la mosaïque suit la lecture de la frise
        const sio = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (!e.isIntersecting) return;
              const y = Number((e.target as HTMLElement).dataset.step);
              paint(y >= 2026 ? end : y, y);
            });
          },
          { rootMargin: "-48% 0px -48% 0px" },
        );
        steps.forEach((s) => sio.observe(s));
        const tail = section.querySelector<HTMLElement>("[data-years-end]");
        const tio = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && paint(end)), { rootMargin: "0px 0px -30% 0px" });
        if (tail) tio.observe(tail);
        cleanups.push(() => { sio.disconnect(); tio.disconnect(); });
      } else {
        // sur téléphone, la mosaïque se remplit d'elle-même, de 1876 à aujourd'hui
        const grid = section.querySelector<HTMLElement>(".years");
        const gio = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (!e.isIntersecting) return;
              gio.disconnect();
              paint(end);
            });
          },
          { threshold: 0.4 },
        );
        if (grid) gio.observe(grid);
        cleanups.push(() => gio.disconnect());
      }
      steps.forEach((s) => {
        const enter = () => {
          const y = Number(s.dataset.step);
          cells.forEach((c) => c.classList.toggle("focus", Number(c.dataset.y) === y));
        };
        s.addEventListener("pointerenter", enter);
        cleanups.push(() => s.removeEventListener("pointerenter", enter));
      });
    });

    // En-tête : un filet apparaît au défilement, il s'efface quand on descend et revient quand on remonte
    const head = document.querySelector<HTMLElement>("[data-head]");
    let lastY = window.scrollY;
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      if (head) {
        head.classList.toggle("is-solid", y > 20);
        if (y > 480 && y > lastY + 4 && !document.body.classList.contains("menu-open")) head.classList.add("is-hidden");
        if (y < lastY - 4 || y < 480) head.classList.remove("is-hidden");
      }
      lastY = y;
    };
    const schedule = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener("scroll", schedule, { passive: true });
    update();

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      io.disconnect();
      cleanups.forEach((c) => c());
    };
  }, [pathname]);

  return null;
}
