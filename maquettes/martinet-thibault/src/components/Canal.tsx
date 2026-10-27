"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Gate = { x: number; label: string; top: number };

/**
 * Le canal : filet bas de l'en-tête. Une porte d'écluse par section ([data-ecluse]) ;
 * l'eau avance avec la lecture et ouvre chaque porte au passage. Survol : nom de la section ; clic : y aller.
 */
export function Canal() {
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);
  const [gates, setGates] = useState<Gate[]>([]);
  const [p, setP] = useState(0);

  useEffect(() => {
    let raf = 0;
    const measure = () => {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const list = Array.from(document.querySelectorAll<HTMLElement>("[data-ecluse]")).map((el) => {
        const top = el.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.55;
        return { x: Math.min(0.985, Math.max(0.015, top / max)), label: el.dataset.ecluse ?? "", top: el.getBoundingClientRect().top + window.scrollY };
      });
      setGates(list);
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        setP(Math.min(1, Math.max(0, window.scrollY / max)));
      });
    };
    measure();
    onScroll();
    const t = window.setTimeout(measure, 1200);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    ref.current?.classList.add("is-ready");
    return () => { window.clearTimeout(t); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", measure); if (raf) cancelAnimationFrame(raf); };
  }, [pathname]);

  return (
    <div ref={ref} className="canal" style={{ ["--p" as string]: p }} aria-hidden="true">
      <span className="canal-water" />
      {gates.map((g) => (
        <span key={`${g.label}-${g.top}`} className={`canal-gate ${p >= g.x ? "is-open" : ""}`} style={{ left: `${g.x * 100}%` }} onClick={() => window.scrollTo({ top: g.top - 110, behavior: "smooth" })}>
          <i />
          <i />
          <b>{g.label}</b>
        </span>
      ))}
    </div>
  );
}
