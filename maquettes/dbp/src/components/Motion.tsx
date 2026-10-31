"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Thermostat de lecture, en chiffres : au défilement, la température de la page passe de 16,0° à 21,0°
 * (lue dans l'en-tête) et le degré correspondant de l'échelle du héros passe au rouge-orange.
 * Gère aussi les apparitions et le filet de l'en-tête. Sans JavaScript, la page reste à 16,0°.
 */
export function Motion() {
  const pathname = usePathname();
  useEffect(() => {
    document.documentElement.classList.add("js");
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.04 },
    );
    items.forEach((el) => io.observe(el));

    const head = document.querySelector<HTMLElement>("[data-head]");
    const temps = Array.from(document.querySelectorAll<HTMLElement>("[data-temp]"));
    const steps = Array.from(document.querySelectorAll<HTMLElement>("[data-step], [data-tick]"));
    let raf = 0;
    let lastStep = -1;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      head?.classList.toggle("is-solid", y > 8);
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const p = Math.min(1, Math.max(0, y / max));
      const t = 16 + p * 5;
      const text = t.toFixed(1).replace(".", ",");
      temps.forEach((el) => { if (el.textContent !== text) el.textContent = text; });
      const step = Math.min(21, Math.floor(t + 0.001));
      if (step !== lastStep) {
        lastStep = step;
        steps.forEach((el) => { el.dataset.on = String(Number(el.dataset.step ?? el.dataset.tick) === step); });
      }
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => { io.disconnect(); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); if (raf) cancelAnimationFrame(raf); };
  }, [pathname]);
  return null;
}
