"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * Le cadran de lecture de l'en-tête : un anneau fin qui se remplit et une aiguille de laiton qui avance sur 270° à mesure
 * qu'on lit la page, comme l'aiguille d'un compteur. Il indique aussi la rubrique en cours. Un clic ramène en haut.
 */
export function ReadingDial() {
  const pathname = usePathname();
  const needle = useRef<SVGGElement>(null);
  const ring = useRef<SVGCircleElement>(null);
  const [rub, setRub] = useState<{ n: string; label: string } | null>(null);

  useEffect(() => {
    setRub(null);
    const marks = Array.from(document.querySelectorAll<HTMLElement>("[data-folio]"));
    let raf = 0;
    let last = "";
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      needle.current?.setAttribute("transform", `rotate(${-135 + p * 270} 20 20)`);
      ring.current?.setAttribute("stroke-dashoffset", String(100.5 * (1 - p)));
      const line = window.innerHeight * 0.4;
      let active: HTMLElement | null = null;
      for (const f of marks) if (f.getBoundingClientRect().top <= line) active = f;
      const key = active ? `${active.dataset.folio}|${active.dataset.rubrique}` : "";
      if (key !== last) { last = key; setRub(active ? { n: active.dataset.folio ?? "", label: active.dataset.rubrique ?? "" } : null); }
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    update();
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); if (raf) cancelAnimationFrame(raf); };
  }, [pathname]);

  return (
    <a href="#contenu" className="group flex items-center gap-3" aria-label={rub ? `Lecture : rubrique ${rub.n}, ${rub.label}. Revenir en haut` : "Revenir en haut de la page"}>
      <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" fill="none" aria-hidden="true">
        <circle cx="20" cy="20" r="19" stroke="rgb(var(--accent))" strokeWidth=".8" opacity=".25" />
        <circle ref={ring} cx="20" cy="20" r="16" stroke="rgb(var(--accent))" strokeWidth="1.2" strokeDasharray="100.5" strokeDashoffset="100.5" transform="rotate(-90 20 20)" strokeLinecap="round" />
        <g ref={needle} transform="rotate(-135 20 20)"><line x1="20" y1="22" x2="20" y2="8.5" stroke="#a8873f" strokeWidth="1.6" strokeLinecap="round" /></g>
        <circle cx="20" cy="20" r="2" fill="#a8873f" />
      </svg>
      <span className={`hidden max-w-[10rem] truncate text-[0.78rem] text-ink-faint transition-opacity duration-500 group-hover:text-accent xl:inline ${rub ? "opacity-100" : "opacity-0"}`}>
        <span className="num mr-2 text-accent">N° {rub?.n}</span>{rub?.label}
      </span>
    </a>
  );
}
