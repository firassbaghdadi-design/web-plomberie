"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * Le numéroteur de l'en-tête : comme la machine à numéroter des carnets de bons, il affiche le numéro du feuillet
 * en cours de lecture et sa rubrique. Il sert de repère de lecture ; un clic ramène en haut de page.
 */
export function Numeroteur() {
  const pathname = usePathname();
  const [folio, setFolio] = useState<{ n: string; label: string } | null>(null);
  useEffect(() => setFolio(null), [pathname]);
  useEffect(() => {
    const on = (e: Event) => setFolio((e as CustomEvent).detail);
    window.addEventListener("folio", on);
    return () => window.removeEventListener("folio", on);
  }, []);
  const n = folio?.n ?? "00";
  return (
    <a href="#contenu" className={`numeroteur group transition-opacity duration-500 ${folio ? "opacity-100" : "pointer-events-none opacity-0"}`} aria-label={folio ? `Feuillet n° ${n}, ${folio.label}. Revenir en haut` : "Revenir en haut"} tabIndex={folio ? 0 : -1}>
      <span className="text-[0.62rem] font-medium uppercase tracking-[0.2em] text-copper">N°</span>
      <span className="numeroteur-digits num text-[1.05rem] font-light text-ink" aria-hidden="true">
        {n.split("").map((d, k) => (
          <span key={k} style={{ transform: `translateY(${-Number(d) * 1.15}em)` }} />
        ))}
      </span>
      <span className="numeroteur-label hidden max-w-[11rem] truncate text-[0.78rem] text-ink-faint group-hover:text-copper-deep xl:inline">{folio?.label}</span>
    </a>
  );
}
