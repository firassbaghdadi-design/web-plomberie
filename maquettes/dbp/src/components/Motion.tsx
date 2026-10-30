"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Bleu froid (16°) et rouge doux (21°), tous deux à plus de 4,8:1 sur blanc. */
const COLD = [30, 102, 150];
const WARM = [188, 72, 64];
const mix = (p: number, k = 1) => COLD.map((c, i) => Math.round((c + (WARM[i] - c) * p) * k)).join(" ");
const mood = (p: number) => (p < 0.34 ? "Dépannage" : p < 0.68 ? "Remise en route" : "Confort");

/**
 * Thermostat de lecture : au défilement, la température passe de 16 à 21 °C, l'arc des cadrans se remplit, le bouton
 * tourne et l'accent de la page glisse du bleu au rouge. Gère aussi les apparitions et l'en-tête qui se compacte.
 * Relancé à chaque changement de page ; sans JavaScript, la page reste à 16 °C, en bleu.
 */
export function Motion() {
  const pathname = usePathname();
  useEffect(() => {
    document.documentElement.classList.add("js");
    const root = document.documentElement;
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal], [data-mask], .section"));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.04 },
    );
    items.forEach((el) => io.observe(el));

    const head = document.querySelector<HTMLElement>("[data-head]");
    const arcs = Array.from(document.querySelectorAll<SVGElement>("[data-dial-arc]"));
    const knobs = Array.from(document.querySelectorAll<SVGElement>("[data-dial-knob]"));
    const temps = Array.from(document.querySelectorAll<SVGTextElement>("[data-temp]"));
    const moods = Array.from(document.querySelectorAll<SVGTextElement>("[data-dial-mood]"));
    const docked = document.querySelector<HTMLElement>("[data-dial-fixed]");
    const heroDial = document.querySelector<HTMLElement>("[data-hero-dial]");
    let raf = 0;
    let lastMood = "";
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      head?.classList.toggle("is-solid", y > 24);
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const p = Math.min(1, Math.max(0, y / max));
      const t = 16 + p * 5;
      root.style.setProperty("--accent", mix(p));
      root.style.setProperty("--accent-deep", mix(p, 0.76));
      const text = `${t.toFixed(1).replace(".", ",")}°`;
      temps.forEach((el) => { if (el.textContent !== text) el.textContent = text; });
      arcs.forEach((el) => { el.style.strokeDashoffset = String(100 - p * 100); });
      knobs.forEach((el) => { el.style.transform = `rotate(${(p * 270 - 135).toFixed(2)}deg)`; });
      const m = mood(p);
      if (m !== lastMood) { lastMood = m; moods.forEach((el) => { el.textContent = m; }); }
      if (docked) {
        const heroVisible = heroDial ? heroDial.getBoundingClientRect().bottom > 40 : false;
        docked.dataset.hidden = heroVisible ? "true" : "false";
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
