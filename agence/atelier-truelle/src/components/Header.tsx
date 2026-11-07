"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { PATHS, agency, nav } from "@/lib/site";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const first = useRef<HTMLAnchorElement>(null);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    document.body.style.overflow = open ? "hidden" : "";
    if (open) setTimeout(() => first.current?.focus(), 400);
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [open]);

  return (
    <>
      <header data-head="" className="site-head">
        <div className="container-x flex h-[78px] items-center justify-between gap-4">
          <Link href="/" aria-label="Atelier Truelle, accueil" className="trowel-wiggle relative z-[95]">
            <Logo light={open} />
          </Link>
          <div className="relative z-[95] flex items-center gap-2">
            <Link href={`${PATHS.contact}?sujet=maquette`} data-cursor="Écrire" className={`btn-primary !min-h-[46px] !px-6 !py-2 max-sm:hidden ${open ? "!bg-platre !text-noir" : ""}`}>
              Voir mon site refait
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-plein-ecran"
              data-cursor={open ? "Fermer" : "Menu"}
              className={`btn !min-h-[46px] !px-6 !py-2 ${open ? "bg-platre text-noir" : "border border-ardoise/30 bg-platre-light/70 text-ardoise backdrop-blur"}`}
            >
              {open ? "Fermer" : "Menu"}
              <span aria-hidden="true" className="grid gap-[5px]">
                <i className={`block h-[2px] w-5 bg-current transition-transform duration-500 ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
                <i className={`block h-[2px] w-5 bg-current transition-transform duration-500 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div id="menu-plein-ecran" className={`menu-overlay ${open ? "is-open" : ""}`} role="dialog" aria-modal="true" aria-label="Menu principal" aria-hidden={!open}>
        <div className="h-[78px]" />
        <nav aria-label="Navigation principale" className="container-x flex flex-1 flex-col justify-center py-6">
          {[{ href: PATHS.home, label: "Accueil" }, ...nav].map((item, i) => (
            <Link key={item.href} ref={i === 0 ? first : undefined} href={item.href} className="menu-link" style={{ ["--i" as string]: i }} aria-current={pathname === item.href ? "page" : undefined} tabIndex={open ? 0 : -1}>
              <small>{String(i + 1).padStart(2, "0")}</small>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="container-x flex flex-wrap items-end justify-between gap-6 pb-2 text-sm text-platre/70">
          <p>
            <span className="hand !text-terre">on vous répond</span>
            <br />
            <a href={`mailto:${agency.email}`} tabIndex={open ? 0 : -1} className="text-xl text-platre">{agency.email}</a>
          </p>
          <p>{agency.tagline} · {agency.area}</p>
        </div>
      </div>
    </>
  );
}
