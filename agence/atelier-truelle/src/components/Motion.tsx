"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const fmt = new Intl.NumberFormat("fr-FR");

/**
 * Moteur d'animations du site. Il se relance à chaque changement de page (sans cela, les éléments d'une page ouverte
 * par un lien interne ne seraient jamais révélés) et ne fait rien si l'utilisateur a demandé moins d'animations.
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
        try { sessionStorage.setItem("truelle-seen", "1"); } catch {}
      }, reduce ? 900 : 3100);
    }

    // Apparitions et compteurs
    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal], [data-count]"));
    const countUp = (el: HTMLElement) => {
      const target = Number(el.dataset.count ?? 0);
      const suffix = el.dataset.suffix ?? "";
      if (reduce) { el.textContent = `${fmt.format(target)}${suffix}`; return; }
      const start = performance.now();
      const tick = (now: number) => {
        const t = clamp((now - start) / 1800);
        el.textContent = `${fmt.format(Math.round(target * (1 - Math.pow(1 - t, 4))))}${suffix}`;
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
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    items.forEach((el) => io.observe(el));

    // Mots du manifeste
    const manifestos = Array.from(document.querySelectorAll<HTMLElement>("[data-manifesto]"));
    const words = manifestos.map((m) => Array.from(m.querySelectorAll<HTMLElement>(".w")));
    // Défilement horizontal épinglé
    const hs = Array.from(document.querySelectorAll<HTMLElement>("[data-hscroll]"));
    const setupH = () => {
      hs.forEach((s) => {
        const track = s.querySelector<HTMLElement>(".hscroll-track");
        if (!track) return;
        const on = window.innerWidth >= 1024 && !reduce;
        s.classList.toggle("is-h", on);
        if (on) {
          const travel = Math.max(0, track.scrollWidth - window.innerWidth);
          s.style.setProperty("--hs-h", `${travel + window.innerHeight * 1.15}px`);
        } else {
          s.style.removeProperty("--hs-h");
          track.style.transform = "";
        }
      });
    };
    setupH();

    const read = document.getElementById("ruler-read");
    const wordmark = document.querySelector<HTMLElement>("[data-rise]");
    const parallax = Array.from(document.querySelectorAll<HTMLElement>("[data-speed]"));
    const head = document.querySelector<HTMLElement>("[data-head]");
    let lastY = window.scrollY;
    let raf = 0;

    const update = () => {
      raf = 0;
      const y = window.scrollY;
      const vh = window.innerHeight;
      root.style.setProperty("--scroll", String(Math.round(y)));
      if (read) read.textContent = `${(y / 540).toFixed(2).replace(".", ",")} m`;

      if (head) {
        head.classList.toggle("is-solid", y > 60);
        head.classList.toggle("is-hidden", y > 400 && y > lastY + 4 && !document.body.classList.contains("menu-open"));
        if (y < lastY - 4) head.classList.remove("is-hidden");
      }
      lastY = y;

      if (!reduce) {
        parallax.forEach((el) => {
          const r = el.parentElement!.getBoundingClientRect();
          if (r.bottom < -200 || r.top > vh + 200) return;
          const off = (r.top + r.height / 2 - vh / 2) * Number(el.dataset.speed);
          el.style.transform = `translate3d(0, ${(-off).toFixed(1)}px, 0)`;
        });
        manifestos.forEach((m, mi) => {
          const r = m.getBoundingClientRect();
          const p = clamp((vh * 0.82 - r.top) / (r.height + vh * 0.3));
          const n = words[mi].length;
          words[mi].forEach((w, i) => {
            const o = clamp((p * (n + 6) - i) / 6, 0.16, 1);
            w.style.setProperty("--o", o.toFixed(2));
          });
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
          const dx = e.clientX - (r.left + r.width / 2);
          const dy = e.clientY - (r.top + r.height / 2);
          el.style.transform = `translate3d(${dx * 0.28}px, ${dy * 0.28}px, 0)`;
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
