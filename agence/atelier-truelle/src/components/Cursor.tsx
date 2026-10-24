"use client";

import { useEffect, useRef } from "react";

/**
 * Curseur personnalisé : la truelle-curseur du logo. La pointe de la lame est le point exact de la souris.
 * Sur les liens, la lame passe en terre cuite et un petit mot apparaît à côté.
 */
export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce || !dot.current) return;
    const root = document.documentElement;
    root.classList.add("has-cursor");
    let x = window.innerWidth / 2, y = window.innerHeight / 2, tx = x, ty = y, raf = 0;
    const el = dot.current;
    const loop = () => {
      x += (tx - x) * 0.35;
      y += (ty - y) * 0.35;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    const move = (e: PointerEvent) => { tx = e.clientX; ty = e.clientY; };
    const over = (e: MouseEvent) => {
      const t = (e.target as HTMLElement).closest<HTMLElement>("[data-cursor], a, button, summary");
      el.classList.toggle("is-link", !!t);
      if (label.current) label.current.textContent = t?.dataset.cursor ?? (t ? "Voir" : "");
    };
    const down = () => el.classList.add("is-down");
    const up = () => el.classList.remove("is-down");
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("mouseover", over);
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    return () => {
      cancelAnimationFrame(raf);
      root.classList.remove("has-cursor");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
    };
  }, []);

  return (
    <div ref={dot} className="cursor" aria-hidden="true">
      <svg viewBox="0 0 64 64" width="50" height="50">
        <g transform="rotate(-34 32 32) translate(0 1) translate(32 32) scale(1.1) translate(-32 -32)" strokeLinejoin="round" strokeLinecap="round">
          <path className="c-blade" d="M32 7 L45.5 37 L32 30.5 L18.5 37 Z" strokeWidth="2" />
          <path className="c-neck" d="M32 31 L32 41" strokeWidth="3.4" />
          <rect className="c-grip" x="27.6" y="40" width="8.8" height="16" rx="4.4" strokeWidth="2" />
        </g>
      </svg>
      <span ref={label} />
    </div>
  );
}
