"use client";

import { useState } from "react";
import { imgSrc, photoAlt } from "@/lib/photos";

/**
 * Comparateur avant / après (photos du site de l'entreprise). Le curseur est un <input type="range"> :
 * clavier, souris et doigt fonctionnent. Si une des deux photos manque au build, le comparateur ne s'affiche pas.
 */
export function BeforeAfter({ before = "avant", after = "apres", caption }: { before?: string; after?: string; caption: string }) {
  const [pos, setPos] = useState(50);
  const a = imgSrc(before), b = imgSrc(after);
  if (!a || !b) return null;
  return (
    <figure>
      <div className="grain tirage relative aspect-[4/3] overflow-hidden bg-nuit-3 shadow-photo sm:aspect-[16/9]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={b} alt={photoAlt(after)} className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover" loading="lazy" draggable={false} />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={a} alt={photoAlt(before)} className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover" loading="lazy" draggable={false} />
        </div>
        <span className="cap absolute left-4 top-4 z-[3] bg-nuit-deep/80 px-3 py-1 text-creme">Avant</span>
        <span className="cap absolute right-4 top-4 z-[3] bg-nuit-deep/80 px-3 py-1 text-cuivre-pale">Après</span>
        <div className="pointer-events-none absolute inset-y-0 z-[3] w-px bg-cuivre-light" style={{ left: `${pos}%` }}>
          <span aria-hidden="true" className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cuivre-pale/60 bg-cuivre text-nuit-deep shadow-glow">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 7l-5 5 5 5M15 7l5 5-5 5" /></svg>
          </span>
        </div>
        <input type="range" min={0} max={100} step={0.5} value={pos} onChange={(e) => setPos(Number(e.target.value))} aria-label="Glisser pour comparer avant et après travaux" className="ba-range absolute inset-0 z-[4] h-full w-full cursor-ew-resize opacity-0" />
      </div>
      <figcaption className="cap mt-3">{caption}</figcaption>
    </figure>
  );
}
