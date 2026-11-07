"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Thermostat de lecture, en chiffres : au défilement, la température de la page passe de 16,0° à 21,0°
 * (lue dans l'en-tête) et le degré correspondant de l'échelle du héros passe au rouge-orange.
 * L'aiguille du thermostat rond du héros suit la même température, après une montée de 16 à 21° au chargement.
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
    const needles = Array.from(document.querySelectorAll<SVGGElement>("[data-needle]"));
    const angle = (t: number) => -135 + (t - 10) * 13.5;
    const setNeedle = (t: number) => needles.forEach((el) => { el.style.transform = `rotate(${angle(t).toFixed(2)}deg)`; });
    const label = (t: number) => t.toFixed(1).replace(".", ",");
    const pageTemp = () => {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      return 16 + Math.min(1, Math.max(0, window.scrollY / max)) * 5;
    };
    // Au chargement, l'aiguille monte de 16 à 21°, marque un temps, puis revient à la température de la page.
    let intro = needles.length > 0 && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let introRaf = 0;
    let raf = 0;
    let lastStep = -1;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      head?.classList.toggle("is-solid", y > 8);
      const t = pageTemp();
      if (!intro) {
        setNeedle(t);
        const text = label(t);
        temps.forEach((el) => { if (el.textContent !== text) el.textContent = text; });
      }
      const step = Math.min(21, Math.floor(t + 0.001));
      if (step !== lastStep) {
        lastStep = step;
        steps.forEach((el) => { el.dataset.on = String(Number(el.dataset.step ?? el.dataset.tick) === step); });
      }
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    if (intro) {
      const t0 = performance.now();
      const ease = (x: number) => 1 - Math.pow(1 - x, 3);
      const inOut = (x: number) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
      const tick = (now: number) => {
        const ms = now - t0 - 450;
        let t: number;
        if (ms < 0) t = 16;
        else if (ms < 1500) t = 16 + 5 * ease(ms / 1500);
        else if (ms < 2100) t = 21 + Math.sin(((ms - 1500) / 600) * Math.PI) * 0.12;
        else if (ms < 3000) { const target = pageTemp(); t = 21 + (target - 21) * inOut((ms - 2100) / 900); }
        else { intro = false; update(); return; }
        setNeedle(t);
        const txt = label(t);
        temps.forEach((el) => { if (el.textContent !== txt) el.textContent = txt; });
        introRaf = requestAnimationFrame(tick);
      };
      introRaf = requestAnimationFrame(tick);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => { io.disconnect(); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); if (raf) cancelAnimationFrame(raf); if (introRaf) cancelAnimationFrame(introRaf); };
  }, [pathname]);
  return null;
}
