"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { localPages } from "@/lib/local";
import { PATHS, business, nav } from "@/lib/site";
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
    <header data-head className="head sticky top-0 z-50 border-b border-transparent bg-olive-deep text-cream">
      <div className="wrap flex h-[var(--head-h)] items-center justify-between gap-6">
        <Link href="/" className="shrink-0" aria-label="EBL, Entreprise Bernard Lemaître, accueil">
          <Logo />
        </Link>
        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-9 text-[1.1rem] font-semibold text-cream">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} aria-current={pathname === n.href ? "page" : undefined} className="nav-link whitespace-nowrap py-1.5">
                  {n.label}
                </Link>
              </li>
            ))}
            <li aria-hidden="true" className="h-4 w-px bg-cream/20" />
            <li>
              <Link href="/#entreprise" className="nav-link whitespace-nowrap py-1.5">Depuis 1978</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-3 sm:gap-6">
          <a href={`tel:${business.phoneTel}`} className="num hidden whitespace-nowrap font-serif text-[1.05rem] text-cream transition hover:text-mustard-light xl:block" data-track="cta_tel">
            {business.phoneDisplay}
          </a>
          <Link href={PATHS.contact} className="btn-mustard !min-h-[2.7rem] !px-5 text-[0.98rem]">
            Devis gratuit
          </Link>
          <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="menu-mobile" className="flex h-10 w-10 items-center justify-center lg:hidden" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}>
            <span className="relative block h-2.5 w-6">
              <span className={`absolute left-0 top-0 h-[1.5px] w-6 bg-cream transition duration-300 ${open ? "translate-y-[5px] rotate-45" : ""}`} />
              <span className={`absolute bottom-0 left-0 h-[1.5px] w-6 bg-cream transition duration-300 ${open ? "-translate-y-[4px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>
      <div id="menu-mobile" hidden={!open} className="fixed inset-x-0 bottom-0 top-[var(--head-h)] overflow-y-auto border-t border-cream/10 bg-olive-deep lg:hidden">
        <div className="wrap min-h-full py-8">
          <p className="label text-mustard">Nos métiers</p>
          <ul className="mt-3">
            {nav.map((n, i) => (
              <li key={n.href} className="border-b border-cream/10">
                <Link href={n.href} className="flex items-center justify-between py-4 font-serif text-[1.9rem] text-cream">
                  <span><span className="num mr-4 font-sans text-sm font-bold text-mustard">0{i + 1}</span>{n.label}</span>
                  <ArrowIcon className="h-4 w-4 text-mustard" />
                </Link>
              </li>
            ))}
          </ul>
          <p className="label mt-10 text-mustard">Près de chez vous</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 text-[1.1rem] font-semibold text-cream">
            {localPages.map((p) => (
              <li key={p.slug}><Link href={p.path}>{p.crumb}</Link></li>
            ))}
          </ul>
          <a href={`tel:${business.phoneTel}`} className="btn num mt-10 border border-cream/25 text-cream" data-track="cta_tel">
            {business.phoneDisplay}
          </a>
          <p className="mt-4 text-[1rem] text-cream/60">{business.address.street}, {business.address.postalCode} Paris</p>
        </div>
      </div>
    </header>
  );
}
