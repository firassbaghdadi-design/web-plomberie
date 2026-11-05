"use client";

import { useEffect, useRef } from "react";

/**
 * Planche filmée de la maison : boucle muette de 5 s (mp4 ~370 Ko), affiche l'image fixe tant que la vidéo
 * n'est pas prête, et reste figée sur l'affiche si le visiteur a demandé moins d'animations.
 */
export function HeroFilm() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    v.play().catch(() => {});
  }, []);

  return (
    <figure className="film-plate relative">
      <div className="relative aspect-[960/528] overflow-hidden rounded-[2px] bg-raise shadow-[0_40px_80px_-30px_rgba(0,0,0,.9)] ring-1 ring-brass/40">
        <video
          ref={ref}
          className="absolute inset-0 h-full w-full object-cover"
          poster="/video/maison-1880-poster.jpg"
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="La boutique de la maison, film d'époque"
        >
          <source src="/video/maison-1880.mp4" type="video/mp4" />
        </video>
        <div className="film-grain pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,.55)]" aria-hidden="true" />
      </div>
      <figcaption className="mt-3 flex items-center justify-between text-[0.6rem] uppercase tracking-[0.28em] text-fg-faint">
        <span>Planche I · la boutique</span>
        <span className="text-brass-light">Eau &amp; gaz</span>
      </figcaption>
    </figure>
  );
}
