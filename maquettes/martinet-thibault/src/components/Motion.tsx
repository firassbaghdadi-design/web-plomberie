"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Apparitions au défilement, sas des écluses qui se remplissent, en-tête qui se compacte. Relancé à chaque changement de page. */
export function Motion() {
  const pathname = usePathname();
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js");
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal], [data-mask], .lock, .bief"));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }),
      { rootMargin: "0px 0px -6% 0px", threshold: 0.05 },
    );
    items.forEach((el) => io.observe(el));
    const head = document.querySelector<HTMLElement>("[data-head]");
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      if (head) {
        head.classList.toggle("is-solid", y > 30);
      }
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => { io.disconnect(); window.removeEventListener("scroll", onScroll); if (raf) cancelAnimationFrame(raf); };
  }, [pathname]);
  return null;
}
