"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * L'altimètre : sur grand écran, une règle graduée fixe au bord droit. Son repère descend avec la lecture
 * et affiche la cote du niveau traversé, du faîtage (+24,00) à la cave.
 */
export function Altimetre() {
  const pathname = usePathname();
  const box = useRef<HTMLDivElement>(null);
  const [state, setState] = useState({ cote: "+24,00", level: "Faîtage", y: 0, light: false, off: true });

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-cote]"));
    let raf = 0;
    const update = () => {
      raf = 0;
      const h = box.current?.clientHeight ?? 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      const mid = window.innerHeight / 2;
      const current = sections.find((s) => { const r = s.getBoundingClientRect(); return r.top <= mid && r.bottom > mid; }) ?? sections[sections.length - 1];
      setState({
        cote: current?.dataset.cote ?? "+24,00",
        level: current?.dataset.level ?? "Faîtage",
        y: progress * h,
        light: current?.dataset.tone === "zinc",
        off: !current || current === sections[0],
      });
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); if (raf) cancelAnimationFrame(raf); };
  }, [pathname]);

  return (
    <div ref={box} className={`alti hidden xl:block ${state.light ? "on-light" : ""} ${state.off ? "is-off" : ""}`} aria-hidden="true" style={{ ["--y" as string]: `${state.y}px` }}>
      <span className="alti-scale" />
      <span className="alti-mark" />
      <span className="alti-text"><b>{state.cote}</b>{state.level}</span>
    </div>
  );
}
