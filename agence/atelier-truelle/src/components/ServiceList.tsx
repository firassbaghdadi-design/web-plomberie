"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Photo } from "./Photo";
import { ArrowIcon } from "./Icons";
import type { PhotoId } from "@/lib/photos";

export type ServiceRow = { href: string; name: string; short: string; photo: PhotoId };

/** Liste de services : au survol, une photo suit le curseur. */
export function ServiceList({ rows }: { rows: ServiceRow[] }) {
  const [active, setActive] = useState(0);
  const [on, setOn] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    let x = 0, y = 0, raf = 0;
    const loop = () => {
      x += (target.current.x - x) * 0.14;
      y += (target.current.y - y) * 0.14;
      const tilt = (target.current.x - x) * 0.05;
      el.style.transform = `translate3d(${x + 36}px, ${y - 150}px, 0) rotate(${tilt}deg)`;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    const move = (e: PointerEvent) => { target.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("pointermove", move, { passive: true });
    return () => { cancelAnimationFrame(raf); window.removeEventListener("pointermove", move); };
  }, []);

  return (
    <>
      <ul onMouseLeave={() => setOn(false)}>
        {rows.map((row, i) => (
          <li key={row.href}>
            <Link href={row.href} className="svc-row group" onMouseEnter={() => { setActive(i); setOn(true); }} onFocus={() => { setActive(i); setOn(true); }} onBlur={() => setOn(false)} data-cursor="Ouvrir">
              <span className="text-sm font-semibold tracking-[0.2em] text-terre">{String(i + 1).padStart(2, "0")}</span>
              <span>
                <span className="t block">{row.name}</span>
                <span className="mt-3 block max-w-2xl text-[0.98rem] text-platre/65">{row.short}</span>
                <span className="svc-thumb relative mt-4 block aspect-[16/9] w-full max-w-sm overflow-hidden">
                  <Photo id={row.photo} sizes="360px" />
                </span>
              </span>
              <ArrowIcon className="h-7 w-7 text-terre transition-transform duration-500 group-hover:translate-x-2 group-hover:-rotate-45" />
            </Link>
          </li>
        ))}
      </ul>
      <div ref={box} className={`svc-preview ${on ? "is-on" : ""}`} aria-hidden="true">
        {rows.map((row, i) => (
          <div key={row.href} className={`pimg ${i === active ? "is-active" : ""}`}>
            <Photo id={row.photo} sizes="272px" alt="" />
          </div>
        ))}
      </div>
    </>
  );
}
