"use client";

import { useState } from "react";

/**
 * Comparateur avant / après. Les photos publiées par l'entreprise sont des montages : AVANT à gauche,
 * APRÈS à droite, séparés par un filet vertical. Deux calques de la même image : le calque « après » est
 * décalé pour ne montrer que la moitié droite ; le calque « avant », découpé par clip-path, ne montre que la
 * moitié gauche. Le filet (split, gap) est détecté au build par scripts/fetch-photos.mjs.
 * La poignée est un bouton de laiton patiné, comme une tête de robinet ancien.
 * Le curseur est un <input type="range"> invisible : clavier, souris et doigt fonctionnent.
 */
export type Montage = { width: number; height: number; split: number; gap: number };
type Props = Montage & { src: string; alt: string; priority?: boolean };

const SAFE = 1; // un pixel de marge de part et d'autre du filet (bavures JPEG)

export function BeforeAfter({ src, width, height, split, gap, alt, priority }: Props) {
  const [pos, setPos] = useState(50);
  const beforeEnd = Math.round(split - gap / 2) - SAFE;
  const afterStart = Math.round(split + gap / 2) + SAFE;
  const half = Math.max(1, Math.min(beforeEnd, width - afterStart)); // largeur visible commune aux deux moitiés
  const scale = `${(width / half) * 100}%`;
  const img = "pointer-events-none absolute top-0 h-full max-w-none select-none";

  return (
    <figure
      className="ba group relative w-full overflow-hidden rounded-[2px] bg-water"
      // Jamais plus de deux fois la taille d'origine : l'image reste nette.
      style={{ aspectRatio: `${half} / ${height}`, maxWidth: `${half * 2}px` }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={`${alt}, après travaux`} className={img} style={{ width: scale, left: `-${(afterStart / half) * 100}%` }} loading={priority ? "eager" : "lazy"} decoding="async" draggable={false} />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={`${alt}, avant travaux`} className={img} style={{ width: scale, left: 0 }} loading={priority ? "eager" : "lazy"} decoding="async" draggable={false} />
      </div>

      <span className="ba-tag left-2.5" aria-hidden="true">Avant</span>
      <span className="ba-tag right-2.5" aria-hidden="true">Après</span>

      <div className="ba-line" style={{ left: `${pos}%` }} aria-hidden="true">
        <svg viewBox="0 0 34 34" className="ba-handle">
          <defs>
            <radialGradient id="ba-brass" cx="35%" cy="30%" r="75%">
              <stop offset="0" stopColor="#ecd8ae" />
              <stop offset=".55" stopColor="#b08a52" />
              <stop offset="1" stopColor="#7a5c30" />
            </radialGradient>
          </defs>
          <circle cx="17" cy="17" r="16" fill="url(#ba-brass)" stroke="#5e4624" strokeWidth=".8" />
          <circle cx="17" cy="17" r="12.5" fill="none" stroke="rgba(255,244,220,.55)" strokeWidth=".7" />
          <path d="M14 12.5 9.5 17l4.5 4.5M20 12.5l4.5 4.5-4.5 4.5" stroke="#2a231c" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        step={1}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label={`${alt} : glisser pour comparer avant et après travaux`}
        className="ba-range absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />
    </figure>
  );
}
