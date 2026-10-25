"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PATHS, agencies, business, nav } from "@/lib/site";
import { LogoSP, LogoText } from "./Photo";
import { PhoneIcon } from "./Icons";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header data-head className="site-header">
        <div className="container-x flex h-[84px] items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3" aria-label="Somsou-Pons, accueil">
            <LogoSP className="h-12 w-auto" />
            <span className="hidden flex-col gap-1 sm:flex">
              <LogoText className="h-[22px] w-auto" />
            </span>
          </Link>

          <nav aria-label="Navigation principale" className="hidden items-center gap-7 xl:flex">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link py-2" aria-current={pathname === item.href ? "page" : undefined}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href={PATHS.contact} data-track="generate_lead" className="btn-amber !min-h-[46px] !px-5 !py-2 max-sm:!px-4 max-sm:text-sm">
              Devis gratuit
            </Link>
            <a href={`tel:${business.phoneTel}`} data-track="phone_call_click" className="btn-ghost !min-h-[46px] !px-5 !py-2 max-lg:hidden">
              <PhoneIcon className="h-4 w-4" />
              {business.phoneDisplay}
            </a>
            <button type="button" className="menu-btn xl:hidden" aria-expanded={open} aria-controls="menu-plein-ecran" onClick={() => setOpen(true)}>
              Menu
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M4 8h16M4 16h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div id="menu-plein-ecran" className={`menu-overlay ${open ? "is-open" : ""}`} aria-hidden={!open} role="dialog" aria-label="Menu">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-white/70">Somsou-Pons</span>
          <button type="button" className="menu-btn !border-white/60 !text-white" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
            Fermer
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
        <nav aria-label="Menu complet">
          <Link href="/" className="menu-link" tabIndex={open ? 0 : -1}><small>00</small>Accueil</Link>
          {nav.map((item, i) => (
            <Link key={item.href} href={item.href} className="menu-link" tabIndex={open ? 0 : -1}>
              <small>0{i + 1}</small>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="grid gap-2 text-sm text-white/75 sm:grid-cols-3">
          {agencies.map((a) => (
            <a key={a.key} href={`tel:${a.phoneTel}`} tabIndex={open ? 0 : -1} className="hover:text-white">
              <span className="block font-semibold text-white">{a.short}</span>
              {a.phoneDisplay}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
