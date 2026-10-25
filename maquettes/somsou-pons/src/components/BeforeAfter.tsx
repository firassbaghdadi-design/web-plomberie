"use client";

import { useState } from "react";

/**
 * Comparateur avant / après. Les photos de l'entreprise sont des montages (avant à gauche,
 * après à droite, séparés par un filet blanc) : chaque calque n'en montre qu'une moitié.
 * Le curseur est un <input type="range"> : clavier, souris et doigt fonctionnent.
 */
type Props = { src: string; width: number; split: number; gap: number; alt: string };

export function BeforeAfter({ src, width, split, gap, alt }: Props) {
  const [pos, setPos] = useState(50);
  const half = split; // largeur utile d'une moitié, en pixels de l'image d'origine
  const scale = `${(width / half) * 100}%`;
  const imgBase = "pointer-events-none absolute top-0 h-full max-w-none select-none";

  return (
    <figure className="ba group relative overflow-hidden rounded-[1rem]" style={{ aspectRatio: `${half} / 303`, background: "var(--paper-2)" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={`${alt}, après travaux`} className={imgBase} style={{ width: scale, left: `-${((half + gap) / half) * 100}%` }} loading="lazy" draggable={false} />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={`${alt}, avant travaux`} className={imgBase} style={{ width: scale, left: 0 }} loading="lazy" draggable={false} />
      </div>

      <span className="ba-chip left-4">Avant</span>
      <span className="ba-chip right-4">Après</span>

      <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.08)]" style={{ left: `${pos}%` }}>
        <span className="ba-handle" aria-hidden="true">
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" />
          </svg>
        </span>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        step={0.5}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Glisser pour comparer avant et après travaux"
        className="ba-range absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </figure>
  );
}
