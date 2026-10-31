"use client";

import { useRef, useState } from "react";
import type { Photo } from "@/lib/photos";

/** Slider avant / après, discret : on glisse la poignée (souris, doigt ou flèches du clavier). */
export function BeforeAfter({ before, after, caption }: { before: Photo; after: Photo; caption: string }) {
  const [pos, setPos] = useState(50);
  const box = useRef<HTMLDivElement>(null);
  const move = (clientX: number) => {
    const r = box.current?.getBoundingClientRect();
    if (r) setPos(Math.max(2, Math.min(98, ((clientX - r.left) / r.width) * 100)));
  };
  return (
    <figure>
      <div ref={box} className="ba aspect-[4/3] bg-brand-deep" style={{ ["--pos" as string]: `${pos}%` }}
        onPointerDown={(e) => { (e.target as HTMLElement).setPointerCapture?.(e.pointerId); move(e.clientX); }}
        onPointerMove={(e) => { if (e.buttons) move(e.clientX); }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={before.src ?? ""} alt={`Avant : ${before.alt}`} className="absolute inset-0 h-full w-full object-cover" draggable={false} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={after.src ?? ""} alt={`Après : ${after.alt}`} className="ba-after absolute inset-0 h-full w-full object-cover" draggable={false} />
        <span className="ba-handle" aria-hidden="true" />
        <input type="range" min={2} max={98} value={pos} onChange={(e) => setPos(Number(e.target.value))} aria-label="Comparer avant et après" className="absolute inset-x-0 bottom-0 h-10 w-full cursor-ew-resize opacity-0" />
        <span className="label absolute left-3 top-3 bg-white px-2.5 py-1 !text-brand-deep">Avant</span>
        <span className="label absolute right-3 top-3 bg-white px-2.5 py-1 !text-brand-deep">Après</span>
      </div>
      <figcaption className="mt-3 text-[0.78rem] text-white/55">{caption}</figcaption>
    </figure>
  );
}
