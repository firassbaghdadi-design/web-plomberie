"use client";

import { useState } from "react";
import type { Pair } from "@/lib/photos";

/**
 * Comparateur avant / après : deux photos superposées, la première (avant) est découpée par le curseur.
 * Le curseur est un <input type="range"> : clavier, souris et doigt fonctionnent.
 */
export function BeforeAfter({ pair }: { pair: Pair }) {
  const [pos, setPos] = useState(50);
  const img = "pointer-events-none absolute inset-0 h-full w-full select-none object-cover";
  return (
    <figure className="ba relative overflow-hidden rounded-[3px] bg-accent-wash" style={{ aspectRatio: String(Math.min(Math.max(pair.ratio, 1.2), 1.8)) }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={pair.after} alt={`${pair.alt}, après travaux`} className={img} loading="lazy" draggable={false} />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={pair.before} alt={`${pair.alt}, avant travaux`} className={img} loading="lazy" draggable={false} />
      </div>
      <span className="ba-cap left-4">Avant</span>
      <span className="ba-cap right-4">Après</span>
      <div className="pointer-events-none absolute inset-y-0 w-px bg-white" style={{ left: `${pos}%` }}>
        <span className="ba-handle" aria-hidden="true">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 7l-5 5 5 5M15 7l5 5-5 5" /></svg>
        </span>
      </div>
      <input type="range" min={0} max={100} step={0.5} value={pos} onChange={(e) => setPos(Number(e.target.value))} aria-label={`Glisser pour comparer avant et après : ${pair.title}`} className="ba-range absolute inset-0 h-full w-full cursor-ew-resize opacity-0" />
    </figure>
  );
}
