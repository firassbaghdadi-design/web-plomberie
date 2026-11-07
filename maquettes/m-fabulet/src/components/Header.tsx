"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { localPages } from "@/lib/local";
import { PATHS, business, nav } from "@/lib/site";
import { Logo } from "./Logo";
import { PhoneIcon } from "./Icons";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => { document.documentElement.style.overflow = ""; };
  }, [open]);

  return (
    <header data-head className="head fixed inset-x-0 top-0 z-50">
      <div className="wrap flex h-[4.4rem] items-center justify-between gap-6 lg:h-[5.2rem]">
        <Link href="/" aria-label="M. Fabulet Couverture, accueil" className="shrink-0">
          <Logo />
        </Link>
        <nav aria-label="Navigation principale" className="hidden items-center gap-7 xl:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} className="nav-link text-[0.78rem] uppercase tracking-[0.18em] text-creme-soft" style={{ fontWeight: 500 }}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3 sm:gap-5">
          <a href={`tel:${business.phoneTel}`} className="hidden items-center gap-2 whitespace-nowrap font-serif text-[1.15rem] text-creme hover:text-cuivre-pale lg:inline-flex" data-track="cta_tel_head">
            <PhoneIcon className="h-4 w-4 text-cuivre-light" />
            {business.phoneDisplay}
          </a>
          <Link href={PATHS.contact} className="btn-line hidden min-h-[2.6rem] border-cuivre/60 px-4 text-[0.68rem] sm:inline-flex sm:min-h-[2.9rem] sm:px-5" data-track="cta_devis_head">Devis gratuit</Link>
          <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="menu" className="relative flex h-11 w-11 items-center justify-center rounded-full border border-creme/20 text-creme xl:hidden">
            <span className="sr-only">{open ? "Fermer le menu" : "Ouvrir le menu"}</span>
            <span aria-hidden="true" className={`absolute h-px w-5 bg-current transition ${open ? "rotate-45" : "-translate-y-[4px]"}`} />
            <span aria-hidden="true" className={`absolute h-px w-5 bg-current transition ${open ? "-rotate-45" : "translate-y-[4px]"}`} />
          </button>
        </div>
      </div>
      {open ? (
        <div id="menu" className="fixed inset-x-0 bottom-0 top-[4.4rem] overflow-y-auto bg-nuit-deep lg:top-[5.2rem] xl:hidden">
          <div className="wrap grid gap-10 py-10 sm:grid-cols-2">
            <div>
              <p className="cap">Métiers et maison</p>
              <ul className="mt-4 border-t border-creme/10">
                {nav.map((item) => (
                  <li key={item.href} className="border-b border-creme/10">
                    <Link href={item.href} className="block py-4 font-serif text-[1.7rem] text-creme">{item.label}</Link>
                  </li>
                ))}
                <li className="border-b border-creme/10"><Link href={PATHS.insulation} className="block py-4 font-serif text-[1.7rem] text-creme">Isolation</Link></li>
                <li className="border-b border-creme/10"><Link href={PATHS.facade} className="block py-4 font-serif text-[1.7rem] text-creme">Ravalement</Link></li>
              </ul>
            </div>
            <div>
              <p className="cap">Communes voisines</p>
              <ul className="mt-4 border-t border-creme/10">
                {localPages.map((p) => (
                  <li key={p.path} className="border-b border-creme/10"><Link href={p.path} className="block py-3 text-[1.05rem] text-creme-soft">{p.zone}</Link></li>
                ))}
              </ul>
              <a href={`tel:${business.phoneTel}`} className="btn-cuivre mt-8 w-full">
                <PhoneIcon /> {business.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
