"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Apparitions au défilement, eau qui descend dans chaque tronçon de la descente, en-tête qui se compacte. Relancé à chaque page. */
export function Motion() {
  const pathname = usePathname();
  useEffect(() => {
    document.documentElement.classList.add("js");
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal], .niveau"));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }),
      { rootMargin: "0px 0px -10% 0px", threshold: 0.02 },
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
