"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Apparitions au défilement, filets de titre qui se tracent, en-tête qui se compacte, et la fiole du niveau :
 * la bulle se rapproche du centre à mesure qu'un titre approche de la ligne de lecture, y reste quand il est d'aplomb,
 * et oscille un peu en le quittant (ressort amorti). Relancé à chaque changement de page.
 */
export function Motion() {
  const pathname = usePathname();
  useEffect(() => {
    document.documentElement.classList.add("js");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal], [data-mask], .hp:not(.hp-load)"));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.04 },
    );
    items.forEach((el) => io.observe(el));

    const head = document.querySelector<HTMLElement>("[data-head]");
    const vial = document.querySelector<HTMLElement>("[data-vial]");
    const heads = Array.from(document.querySelectorAll<HTMLElement>(".hp:not(.hp-quiet)"));
    let x = reduce ? 0 : 0.9; // la bulle arrive de côté puis se pose
    let v = 0;
    let target = 0;
    let raf = 0;
    let loop = 0;

    const step = () => {
      loop = 0;
      if (reduce) x = target;
      else {
        v += (target - x) * 0.085;
        v *= 0.84;
        x += v;
      }
      vial?.style.setProperty("--bx", x.toFixed(4));
      if (Math.abs(target - x) > 0.002 || Math.abs(v) > 0.002) loop = requestAnimationFrame(step);
      else { x = target; v = 0; vial?.style.setProperty("--bx", String(x)); }
    };
    const aim = () => {
      raf = 0;
      const y = window.scrollY;
      head?.classList.toggle("is-solid", y > 24);
      const vh = window.innerHeight;
      const line = vh * 0.4;
      const atEnd = y + vh >= document.documentElement.scrollHeight - 4;
      let best: number | null = null;
      for (const h of heads) {
        const d = h.getBoundingClientRect().top - line;
        if (best === null || Math.abs(d) < Math.abs(best)) best = d;
      }
      if (y < 4 || atEnd || best === null) target = 0;
      else if (Math.abs(best) <= 22) target = 0;
      else target = Math.max(-1, Math.min(1, best / (vh * 0.5)));
      vial?.setAttribute("data-true", Math.abs(target) < 0.02 ? "1" : "0");
      if (!loop) loop = requestAnimationFrame(step);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(aim); };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    vial?.setAttribute("data-ready", "1");
    vial?.style.setProperty("--bx", String(x));
    aim();
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
      if (loop) cancelAnimationFrame(loop);
    };
  }, [pathname]);
  return null;
}
