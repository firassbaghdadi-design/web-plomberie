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
      if (reduce) {
        el.textContent = `${target.toFixed(decimals).replace(".", ",")}${suffix}`;
        return;
      }
      const start = performance.now();
      const duration = 1700;
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 4);
        const value = target * eased;
        el.textContent = `${decimals ? value.toFixed(decimals).replace(".", ",") : fmt.format(Math.round(value))}${suffix}`;
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
      { threshold: 0.18, rootMargin: "0px 0px -6% 0px" },
    );
    document.querySelectorAll("[data-reveal], [data-count]").forEach((el) => io.observe(el));

    let cleanupPointer = () => {};
    if (!reduce && window.matchMedia("(pointer: fine)").matches) {
      const stage = document.querySelector<HTMLElement>("[data-stage]");
      const onMove = (event: PointerEvent) => {
        const x = event.clientX / window.innerWidth - 0.5;
        const y = event.clientY / window.innerHeight - 0.5;
        if (stage) {
          stage.style.setProperty("--mx", String(x));
          stage.style.setProperty("--my", String(y));
        }
      };
      const tilts = Array.from(document.querySelectorAll<HTMLElement>("[data-tilt]"));
      const handlers = tilts.map((el) => {
        const move = (event: PointerEvent) => {
          const r = el.getBoundingClientRect();
          const px = (event.clientX - r.left) / r.width - 0.5;
          const py = (event.clientY - r.top) / r.height - 0.5;
          el.style.setProperty("--ry", `${px * 7}deg`);
          el.style.setProperty("--rx", `${-py * 7}deg`);
        };
        const leave = () => {
          el.style.setProperty("--rx", "0deg");
          el.style.setProperty("--ry", "0deg");
        };
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", leave);
        return { el, move, leave };
      });
      window.addEventListener("pointermove", onMove, { passive: true });
      cleanupPointer = () => {
        window.removeEventListener("pointermove", onMove);
        handlers.forEach(({ el, move, leave }) => {
          el.removeEventListener("pointermove", move);
          el.removeEventListener("pointerleave", leave);
        });
      };
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
      cleanupPointer();
    };
  }, []);

  return null;
}
