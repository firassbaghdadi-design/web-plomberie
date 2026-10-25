"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PATHS, business, nav, navSecondary } from "@/lib/site";
import { ArrowIcon, PhoneIcon } from "./Icons";
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
    <header data-head className="head sticky top-0 z-50 bg-white">
      <div className="hidden bg-night text-white/80 md:block">
        <div className="wrap flex h-9 items-center justify-between text-[0.8rem]">
          <p>{business.hours} · {business.address.street}, {business.address.postalCode} Paris</p>
          <p className="flex items-center gap-5">
            <span>Partenaire GRDF · RGE Qualibat · PG PMG</span>
            <span className="text-flame">Depuis 1985</span>
          </p>
        </div>
      </div>
      <div className="wrap flex h-[4.5rem] items-center justify-between gap-4 lg:h-20">
        <Link href="/" className="shrink-0" aria-label="SERAGAZ, accueil">
          <Logo className="h-10 lg:h-12" />
        </Link>
        <nav aria-label="Navigation principale" className="hidden xl:block">
          <ul className="flex items-center gap-1 text-[0.95rem] font-medium">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} aria-current={pathname === n.href ? "page" : undefined} className={`whitespace-nowrap rounded-full px-2.5 py-2 transition hover:text-blue ${pathname === n.href ? "text-blue" : ""}`}>
                  {n.short}
                </Link>
              </li>
            ))}
            <li aria-hidden="true" className="mx-1 h-5 w-px bg-line" />
            {navSecondary.slice(0, 1).map((n) => (
              <li key={n.href}>
                <Link href={n.href} aria-current={pathname === n.href ? "page" : undefined} className={`whitespace-nowrap rounded-full px-2.5 py-2 transition hover:text-blue ${pathname === n.href ? "text-blue" : ""}`}>
                  L'entreprise
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <a href={`tel:${business.phoneTel}`} className="hidden items-center gap-2 whitespace-nowrap font-semibold text-night hover:text-blue lg:flex">
            <PhoneIcon /> {business.phoneDisplay}
          </a>
          <Link href={PATHS.contact} className="btn-primary !px-4 !py-2.5 text-sm sm:!px-5">
            Devis gratuit
          </Link>
          <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="menu-mobile" className="flex h-11 w-11 items-center justify-center rounded-full border border-line xl:hidden" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}>
            <span className="relative block h-3 w-5">
              <span className={`absolute left-0 top-0 h-0.5 w-5 bg-night transition ${open ? "translate-y-[5px] rotate-45" : ""}`} />
              <span className={`absolute bottom-0 left-0 h-0.5 w-5 bg-night transition ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>
      <div id="menu-mobile" hidden={!open} className="fixed inset-x-0 bottom-0 top-[4.5rem] overflow-y-auto bg-night text-white md:top-[6.75rem] lg:top-[7.25rem] xl:hidden">
        <div className="wrap grid-lines min-h-full py-8">
          <p className="label text-flame">Prestations</p>
          <ul className="mt-4">
            {nav.map((n, i) => (
              <li key={n.href} className="border-b border-white/10">
                <Link href={n.href} className="flex items-center justify-between py-4 font-display text-2xl">
                  <span><span className="mr-4 text-sm text-white/40">0{i + 1}</span>{n.label}</span>
                  <ArrowIcon className="h-5 w-5 text-flame" />
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-white/80">
            {navSecondary.map((n) => (
              <li key={n.href}><Link href={n.href} className="hover:text-white">{n.label}</Link></li>
            ))}
          </ul>
          <a href={`tel:${business.phoneTel}`} className="btn-flame mt-10">
            <PhoneIcon /> {business.phoneDisplay}
          </a>
          <p className="mt-4 text-sm text-white/60">{business.hours}</p>
        </div>
      </div>
    </header>
  );
}
