"use client";

import { useState } from "react";

/**
 * Comparateur avant / après. Les photos publiées par l'entreprise sont des montages : AVANT à gauche,
 * APRÈS à droite, séparés par un filet vertical. Deux calques de la même image : le calque « après » est
 * décalé pour ne montrer que la moitié droite ; le calque « avant », découpé par clip-path, ne montre que la
 * moitié gauche. Le filet (split, gap) est détecté au build par scripts/fetch-photos.mjs.
 * La poignée est une petite écluse : deux portes et le niveau d'eau, au bleu de l'entreprise.
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
      className="ba group relative w-full overflow-hidden rounded-[3px] bg-water"
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
        <svg viewBox="0 0 30 22" className="ba-handle">
          <rect x="0.5" y="0.5" width="29" height="21" rx="3" fill="#fff" stroke="rgba(13,27,46,.12)" />
          <path className="ba-water" d="M8 13.5h14V18H8z" fill="rgba(0,113,229,.16)" />
          <path className="ba-water" d="M8 13.5h14" stroke="#0071e5" strokeWidth="1.2" />
          <path d="M8 4.5V18M22 4.5V18" stroke="#0d1b2e" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M4.5 9 2.5 11l2 2M25.5 9l2 2-2 2" stroke="#0071e5" strokeWidth="1.1" fill="none" strokeLinecap="round" strokeLinejoin="round" />
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
