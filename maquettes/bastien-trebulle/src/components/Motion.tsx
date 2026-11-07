"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Apparitions douces au défilement, mise en route des rouleaux et des aiguilles quand ils arrivent à l'écran,
 * en-tête qui se compacte. Relancé à chaque changement de page ; un filet de sécurité CSS affiche tout après 3 s.
 */
export function Motion() {
  const pathname = usePathname();
  useEffect(() => {
    document.documentElement.classList.add("js");
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal], [data-mask], .drums, .gauge"));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }),
      { rootMargin: "0px 0px -6% 0px", threshold: 0.12 },
    );
    items.forEach((el) => io.observe(el));
    // filet de sécurité : tout ce qui est encore masqué s'affiche au bout de 4 s
    const t = window.setTimeout(() => items.forEach((el) => el.classList.add("is-in")), 4000);

    const head = document.querySelector<HTMLElement>("[data-head]");
    let raf = 0;
    const update = () => { raf = 0; head?.classList.toggle("is-solid", window.scrollY > 24); };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => { io.disconnect(); window.clearTimeout(t); window.removeEventListener("scroll", onScroll); if (raf) cancelAnimationFrame(raf); };
  }, [pathname]);
  return null;
}
