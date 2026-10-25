"use client";

import { useEffect, useRef } from "react";

/** Curseur personnalisé : un point orange et un anneau vert qui s'élargit sur les liens (ordinateur uniquement). */
export function Cursor() {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = root.current;
    if (!fine || reduce || !el) return;
    const html = document.documentElement;
    html.classList.add("has-cursor");
    let x = window.innerWidth / 2, y = window.innerHeight / 2, tx = x, ty = y, raf = 0;
    const loop = () => {
      x += (tx - x) * 0.3;
      y += (ty - y) * 0.3;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    const move = (e: PointerEvent) => { tx = e.clientX; ty = e.clientY; };
    const over = (e: MouseEvent) => {
      el.classList.toggle("is-link", !!(e.target as HTMLElement).closest("a, button, summary, [data-cursor]"));
    };
    const down = () => el.classList.add("is-down");
    const up = () => el.classList.remove("is-down");
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("mouseover", over);
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    return () => {
      cancelAnimationFrame(raf);
      html.classList.remove("has-cursor");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
    };
  }, []);

  return (
    <div ref={root} className="cursor" aria-hidden="true">
      <b />
      <i />
    </div>
  );
}
