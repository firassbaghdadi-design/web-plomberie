"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Apparitions sobres au défilement (fondu + léger glissement) et en-tête qui se compacte.
 * Relancé à chaque changement de page : sans cela, une page ouverte depuis le menu garderait ses blocs invisibles.
 */
export function Motion() {
  const pathname = usePathname();
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js-ready");

    const onScroll = () => {
      root.dataset.top = window.scrollY < 24 ? "1" : "0";
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-in)"));
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((el) => el.classList.add("is-in"));
      return () => window.removeEventListener("scroll", onScroll);
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    items.forEach((el) => io.observe(el));
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);
  return null;
}
