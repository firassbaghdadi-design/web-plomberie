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
        <div className="container-x flex h-[76px] items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3" aria-label="Somsou-Pons, accueil">
            <LogoSP className="h-10 w-auto" />
            <span className="hidden sm:block">
              <LogoText className="h-[17px] w-auto" />
            </span>
          </Link>

          <nav aria-label="Navigation principale" className="hidden items-center gap-8 xl:flex">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link py-2" aria-current={pathname === item.href ? "page" : undefined}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href={`tel:${business.phoneTel}`} data-track="phone_call_click" className="mr-3 hidden items-center gap-2 whitespace-nowrap text-[0.92rem] text-ink transition hover:text-brand lg:inline-flex">
              <PhoneIcon className="h-4 w-4 text-amber-action" />
              {business.phoneDisplay}
            </a>
            <Link href={PATHS.contact} data-track="generate_lead" className="btn-amber !min-h-[42px] !px-5 !py-2 !text-[0.9rem] max-sm:!px-4">
              Devis gratuit
            </Link>
            <button type="button" className="menu-btn xl:hidden" aria-expanded={open} aria-controls="menu-plein-ecran" onClick={() => setOpen(true)}>
              Menu
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                <path d="M4 9h16M4 15h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div id="menu-plein-ecran" className={`menu-overlay ${open ? "is-open" : ""}`} aria-hidden={!open} role="dialog" aria-label="Menu">
        <div className="flex h-[60px] items-center justify-between">
          <LogoSP className="h-10 w-auto" />
          <button type="button" className="menu-btn" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
            Fermer
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
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
        <div className="grid gap-4 text-sm sm:grid-cols-3">
          {agencies.map((a) => (
            <a key={a.key} href={`tel:${a.phoneTel}`} tabIndex={open ? 0 : -1} className="whitespace-nowrap hover:text-brand">
              <span className="caption block">{a.short}</span>
              <span className="text-lg text-ink">{a.phoneDisplay}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
