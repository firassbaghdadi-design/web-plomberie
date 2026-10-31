"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Apparitions au défilement et en-tête qui se compacte. Relancé à chaque changement de page. */
export function Motion() {
  const pathname = usePathname();
  useEffect(() => {
    document.documentElement.classList.add("js");
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal], [data-mask]"));
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }),
      { rootMargin: "0px 0px -6% 0px", threshold: 0.04 },
    );
    items.forEach((el) => io.observe(el));
    const head = document.querySelector<HTMLElement>("[data-head]");
    const onScroll = () => head?.classList.toggle("is-solid", window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => { io.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, [pathname]);
  return null;
}
