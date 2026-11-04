"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Apparitions au défilement, fermes de charpente qui s'assemblent, en-tête qui se pose. Relancé à chaque changement de page. */
export function Motion() {
  const pathname = usePathname();
  useEffect(() => {
    document.documentElement.classList.add("js");
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal], [data-photo], .ferme:not(.ferme-auto)"));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    items.forEach((el) => io.observe(el));
    const head = document.querySelector<HTMLElement>("[data-head]");
    let raf = 0;
    const update = () => { raf = 0; head?.classList.toggle("is-solid", window.scrollY > 24); };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => { io.disconnect(); window.removeEventListener("scroll", onScroll); if (raf) cancelAnimationFrame(raf); };
  }, [pathname]);
  return null;
}
