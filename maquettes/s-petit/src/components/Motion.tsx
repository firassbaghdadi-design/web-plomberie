"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Animations sobres : l'en-tête se compacte au défilement, et chaque section ([data-station]) apparaît en fondu quand
 * elle entre à l'écran. La goutte du héros est en CSS pur. Sans JavaScript, ou en mouvement réduit, tout reste visible.
 */
export function Motion() {
  const pathname = usePathname();
  useEffect(() => {
    document.documentElement.classList.add("js");
    (window as unknown as { __drop?: boolean }).__drop = true;

    const head = document.querySelector<HTMLElement>("[data-head]");
    const onHead = () => head?.classList.toggle("is-solid", window.scrollY > 24);
    window.addEventListener("scroll", onHead, { passive: true });
    onHead();

    const stations = Array.from(document.querySelectorAll<HTMLElement>("[data-station]"));
    stations.forEach((s) => s.classList.remove("is-in"));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      }),
      { rootMargin: "0px 0px -12% 0px", threshold: 0.01 },
    );
    stations.forEach((s) => io.observe(s));
    // Filet de sécurité : une section déjà passée ou à l'écran est révélée même si l'observateur l'a manquée.
    const sweep = () => {
      const bottom = window.innerHeight * 0.95;
      stations.forEach((s) => {
        if (!s.classList.contains("is-in") && s.getBoundingClientRect().top < bottom) s.classList.add("is-in");
      });
    };
    window.addEventListener("scroll", sweep, { passive: true });
    const t = window.setTimeout(sweep, 1500);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("scroll", sweep);
      io.disconnect();
      window.removeEventListener("scroll", onHead);
    };
  }, [pathname]);
  return null;
}
