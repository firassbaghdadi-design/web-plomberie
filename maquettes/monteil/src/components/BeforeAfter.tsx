"use client";

import { useState } from "react";
import type { Pair } from "@/lib/photos";

/**
 * Comparateur avant / après : deux photos superposées, la première (avant) est découpée par le curseur.
 * Le curseur est un <input type="range"> : clavier, souris et doigt fonctionnent.
 * `stage` : mise en scène bord à bord, en très grand, avec le titre du chantier en surimpression.
 */
export function BeforeAfter({ pair, stage, index, total }: { pair: Pair; stage?: boolean; index?: number; total?: number }) {
  const [pos, setPos] = useState(50);
  const img = "pointer-events-none absolute inset-0 h-full w-full select-none object-cover";
  const ratio = String(Math.min(Math.max(pair.ratio, 1.2), 1.8));
  return (
    <figure
      className={`ba relative overflow-hidden bg-night-3 ${stage ? "ba-stage h-[82svh] min-h-[30rem] lg:h-[92svh]" : "rounded-[2px]"}`}
      style={stage ? undefined : { aspectRatio: ratio }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={pair.after} alt={`${pair.alt}, après travaux`} className={img} loading="lazy" draggable={false} />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={pair.before} alt={`${pair.alt}, avant travaux`} className={`${img} saturate-[.8]`} loading="lazy" draggable={false} />
      </div>
      {stage ? (
        <>
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgb(11_14_17/.85)_0%,rgb(11_14_17/0)_38%),linear-gradient(180deg,rgb(11_14_17/.5)_0%,rgb(11_14_17/0)_20%)]" />
          <span className="ba-cap ital left-[var(--gutter)] top-[calc(var(--head-h)+1rem)] text-[2.2rem] sm:text-[3.4rem]">Avant</span>
          <span className="ba-cap ital right-[var(--gutter)] top-[calc(var(--head-h)+1rem)] text-[2.2rem] sm:text-[3.4rem]">Après</span>
          <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 z-[1]">
            <div className="wrap flex flex-col gap-3 pb-8 sm:pb-12 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
              <div className="max-w-3xl">
                {index ? <p className="num text-[0.72rem] uppercase tracking-[0.28em] text-accent-light">Chantier {String(index).padStart(2, "0")}{total ? ` / ${String(total).padStart(2, "0")}` : ""}</p> : null}
                <p className="mt-3 text-[1.7rem] font-light leading-[1.08] tracking-[-0.03em] text-ink sm:text-[2.6rem]">{pair.title}</p>
              </div>
              <p className="max-w-md text-[0.98rem] text-ink/80 lg:text-right">{pair.text}</p>
            </div>
          </figcaption>
        </>
      ) : (
        <>
          <span className="ba-cap label bottom-4 left-4 !text-white">Avant</span>
          <span className="ba-cap label bottom-4 right-4 !text-white">Après</span>
        </>
      )}
      <div className="ba-line pointer-events-none z-[2]" style={{ left: `${pos}%` }}>
        <span className="ba-handle" aria-hidden="true">
          <svg viewBox="0 0 24 24" className={stage ? "h-5 w-5" : "h-4 w-4"} fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M9 7l-5 5 5 5M15 7l5 5-5 5" /></svg>
        </span>
      </div>
      <input type="range" min={0} max={100} step={0.5} value={pos} onChange={(e) => setPos(Number(e.target.value))} aria-label={`Glisser pour comparer avant et après : ${pair.title}`} className="ba-range absolute inset-0 z-[3] h-full w-full cursor-ew-resize opacity-0" />
    </figure>
  );
}
