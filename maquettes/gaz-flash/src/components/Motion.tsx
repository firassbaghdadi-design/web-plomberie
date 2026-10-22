"use client";

import { useEffect } from "react";

const fmt = new Intl.NumberFormat("fr-FR");

export function Motion() {
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onScroll = () => {
      root.dataset.top = window.scrollY < 24 ? "1" : "0";
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const countUp = (el: HTMLElement) => {
      const target = Number(el.dataset.count ?? 0);
      const decimals = Number(el.dataset.decimals ?? 0);
      const suffix = el.dataset.suffix ?? "";
      const render = (value: number) => {
        el.textContent = `${decimals ? value.toFixed(decimals).replace(".", ",") : fmt.format(Math.round(value))}${suffix}`;
      };
      if (reduce) return render(target);
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / 1600, 1);
        render(target * (1 - Math.pow(1 - t, 4)));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.classList.add("is-in");
          if (el.dataset.count) countUp(el);
          io.unobserve(el);
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -6% 0px" },
    );
    document.querySelectorAll("[data-reveal], [data-count]").forEach((el) => io.observe(el));

    let cleanupPointer = () => {};
    if (!reduce && window.matchMedia("(pointer: fine)").matches) {
      const stage = document.querySelector<HTMLElement>("[data-stage]");
      const onMove = (event: PointerEvent) => {
        if (!stage) return;
        stage.style.setProperty("--mx", String(event.clientX / window.innerWidth - 0.5));
        stage.style.setProperty("--my", String(event.clientY / window.innerHeight - 0.5));
      };
      window.addEventListener("pointermove", onMove, { passive: true });
      cleanupPointer = () => window.removeEventListener("pointermove", onMove);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
      cleanupPointer();
    };
  }, []);

  return null;
}
