"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Apparitions au défilement, feuillets qui se détachent (perforations, numéros au numéroteur), en-tête qui se compacte,
 * et numéroteur de l'en-tête qui affiche le feuillet en cours de lecture. Relancé à chaque changement de page.
 */
export function Motion() {
  const pathname = usePathname();
  useEffect(() => {
    document.documentElement.classList.add("js");
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal], [data-mask], .feuillet, .signature"));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.04 },
    );
    items.forEach((el) => io.observe(el));

    const head = document.querySelector<HTMLElement>("[data-head]");
    const folios = Array.from(document.querySelectorAll<HTMLElement>("[data-folio]"));
    let current = "";
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      head?.classList.toggle("is-solid", y > 24);
      const line = window.innerHeight * 0.35;
      let active: HTMLElement | null = null;
      for (const f of folios) if (f.getBoundingClientRect().top <= line) active = f;
      const key = active ? `${active.dataset.folio}|${active.dataset.rubrique}` : "";
      if (key !== current) {
        current = key;
        window.dispatchEvent(new CustomEvent("folio", { detail: active ? { n: active.dataset.folio, label: active.dataset.rubrique } : null }));
      }
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => { io.disconnect(); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); if (raf) cancelAnimationFrame(raf); };
  }, [pathname]);
  return null;
}
