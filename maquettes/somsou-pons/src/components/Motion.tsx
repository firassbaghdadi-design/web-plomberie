"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));

/**
 * Moteur d'animations. Il se relance à chaque changement de page (sinon les éléments d'une page ouverte par un lien
 * interne resteraient invisibles) et ne fait rien si le visiteur a demandé moins d'animations.
 */
export function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    root.classList.add("js-ready");

    // Rideau d'ouverture : une fois par visite
    let seenTimer: number | undefined;
    if (!root.classList.contains("seen")) {
      seenTimer = window.setTimeout(() => {
        root.classList.add("seen");
        try { sessionStorage.setItem("somsou-seen", "1"); } catch {}
      }, reduce ? 0 : 2500);
    }

    // Apparitions au défilement
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).classList.add("is-in");
          io.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 },
    );
    items.forEach((el) => io.observe(el));

    // Frise horizontale épinglée
    const hs = Array.from(document.querySelectorAll<HTMLElement>("[data-hscroll]"));
    const setupH = () => {
      hs.forEach((s) => {
        const track = s.querySelector<HTMLElement>(".hscroll-track");
        if (!track) return;
        const on = window.innerWidth >= 1024 && !reduce;
        s.classList.toggle("is-h", on);
        if (on) {
          const travel = Math.max(0, track.scrollWidth - window.innerWidth);
          s.style.setProperty("--hs-h", `${travel + window.innerHeight * 1.1}px`);
        } else {
          s.style.removeProperty("--hs-h");
          track.style.transform = "";
        }
      });
    };
    setupH();

    const parallax = Array.from(document.querySelectorAll<HTMLElement>("[data-speed]"));
    const wordmark = document.querySelector<HTMLElement>("[data-rise]");
    const head = document.querySelector<HTMLElement>("[data-head]");
    let lastY = window.scrollY;
    let raf = 0;

    const update = () => {
      raf = 0;
      const y = window.scrollY;
      const vh = window.innerHeight;
      if (head) {
        head.classList.toggle("is-solid", y > 40);
        head.classList.toggle("is-hidden", y > 420 && y > lastY + 4 && !document.body.classList.contains("menu-open"));
        if (y < lastY - 4) head.classList.remove("is-hidden");
      }
      lastY = y;
      if (reduce) return;
      parallax.forEach((el) => {
        const r = el.parentElement!.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) return;
        const off = (r.top + r.height / 2 - vh / 2) * Number(el.dataset.speed);
        el.style.transform = `translate3d(0, ${(-off).toFixed(1)}px, 0)`;
      });
      hs.forEach((s) => {
        if (!s.classList.contains("is-h")) return;
        const track = s.querySelector<HTMLElement>(".hscroll-track")!;
        const r = s.getBoundingClientRect();
        const p = clamp(-r.top / Math.max(1, r.height - vh));
        const travel = Math.max(0, track.scrollWidth - window.innerWidth);
        track.style.transform = `translate3d(${(-p * travel).toFixed(1)}px,0,0)`;
        s.style.setProperty("--hp", p.toFixed(3));
      });
      if (wordmark) {
        const r = wordmark.getBoundingClientRect();
        wordmark.style.setProperty("--rise", String(clamp((vh - r.top) / (r.height * 1.4))));
      }
    };
    const schedule = () => { if (!raf) raf = requestAnimationFrame(update); };
    const onResize = () => { setupH(); schedule(); };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", onResize);
    update();

    // Boutons magnétiques
    const cleanups: (() => void)[] = [];
    if (!reduce && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((el) => {
        const move = (e: PointerEvent) => {
          const r = el.getBoundingClientRect();
          el.style.transform = `translate3d(${(e.clientX - (r.left + r.width / 2)) * 0.25}px, ${(e.clientY - (r.top + r.height / 2)) * 0.25}px, 0)`;
        };
        const leave = () => { el.style.transform = ""; };
        el.addEventListener("pointermove", move);
        el.addEventListener("pointerleave", leave);
        cleanups.push(() => { el.removeEventListener("pointermove", move); el.removeEventListener("pointerleave", leave); });
      });
    }

    return () => {
      if (seenTimer) clearTimeout(seenTimer);
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", onResize);
      io.disconnect();
      cleanups.forEach((c) => c());
    };
  }, [pathname]);

  return null;
}
