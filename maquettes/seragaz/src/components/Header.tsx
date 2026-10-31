"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PATHS, business, nav, navSecondary } from "@/lib/site";
import { ArrowIcon } from "./Icons";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header data-head className="head sticky top-0 z-50 border-b border-transparent bg-white">
      <div className="wrap flex h-[var(--head-h)] items-center justify-between gap-6">
        <Link href="/" className="shrink-0" aria-label="SERAGAZ, accueil">
          <Logo className="h-9 lg:h-11" />
        </Link>
        <nav aria-label="Navigation principale" className="hidden xl:block">
          <ul className="flex items-center gap-7 text-[0.92rem] text-ink">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} aria-current={pathname === n.href ? "page" : undefined} className="nav-link whitespace-nowrap py-1.5">
                  {n.short}
                </Link>
              </li>
            ))}
            <li aria-hidden="true" className="h-4 w-px bg-line" />
            <li>
              <Link href={PATHS.presentation} aria-current={pathname === PATHS.presentation ? "page" : undefined} className="nav-link whitespace-nowrap py-1.5">
                L'entreprise
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-3 sm:gap-5">
          <a href={`tel:${business.phoneTel}`} className="num hidden whitespace-nowrap text-[0.95rem] font-medium text-navy transition hover:text-blue lg:block" data-track="cta_tel">
            {business.phoneDisplay}
          </a>
          <Link href={PATHS.contact} className="btn-primary !min-h-[2.6rem] !px-5 text-[0.88rem]">
            Devis gratuit
          </Link>
          <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="menu-mobile" className="flex h-10 w-10 items-center justify-center xl:hidden" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}>
            <span className="relative block h-2.5 w-6">
              <span className={`absolute left-0 top-0 h-px w-6 bg-navy transition duration-300 ${open ? "translate-y-[5px] rotate-45" : ""}`} />
              <span className={`absolute bottom-0 left-0 h-px w-6 bg-navy transition duration-300 ${open ? "-translate-y-[4px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>
      <div id="menu-mobile" hidden={!open} className="fixed inset-x-0 bottom-0 top-[var(--head-h)] overflow-y-auto border-t border-line bg-white xl:hidden">
        <div className="wrap min-h-full py-8">
          <p className="label">Prestations</p>
          <ul className="mt-3">
            {nav.map((n, i) => (
              <li key={n.href} className="border-b border-line">
                <Link href={n.href} className="flex items-center justify-between py-4 text-[1.6rem] font-light tracking-tight text-navy">
                  <span><span className="num mr-4 text-xs text-ink-faint">0{i + 1}</span>{n.label}</span>
                  <ArrowIcon className="h-4 w-4 text-blue" />
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-ink">
            {navSecondary.map((n) => (
              <li key={n.href}><Link href={n.href} className="link-line">{n.label}</Link></li>
            ))}
          </ul>
          <a href={`tel:${business.phoneTel}`} className="btn-line num mt-10" data-track="cta_tel">
            {business.phoneDisplay}
          </a>
          <p className="mt-4 text-sm text-ink-faint">{business.hours}</p>
        </div>
      </div>
    </header>
  );
}
