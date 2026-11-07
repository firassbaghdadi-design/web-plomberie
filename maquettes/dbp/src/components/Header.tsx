"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PATHS, business, nav } from "@/lib/site";
import { ArrowIcon } from "./Icons";
import { Logo } from "./Logo";
import { Readout } from "./Thermostat";

/** En-tête en bandeau d'affiche : nom, navigation, température de la page, téléphone, devis. */
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header data-head className="head sticky top-0 z-50 bg-white">
      <div className="wrap">
        <div className="cols h-[var(--head-h)] items-center">
          <Link href="/" className="col-span-2 md:col-span-2 lg:col-span-3" aria-label="DBP Plomberie-Chauffage, accueil">
            <Logo />
          </Link>
          <nav aria-label="Navigation principale" className="hidden lg:col-span-4 lg:block">
            <ul className="flex items-center gap-8 text-[0.92rem] font-medium">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} aria-current={pathname === n.href ? "page" : undefined} className="nav-link whitespace-nowrap">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="col-span-2 flex items-center justify-end gap-4 md:col-span-4 lg:col-span-5 lg:gap-7">
            <span className="hidden items-baseline gap-2 md:flex" title="La température de la page monte avec la lecture">
              <span className="meta-faint">Page</span>
              <Readout className="text-[1.05rem] font-semibold tracking-[-0.03em]" />
            </span>
            <a href={`tel:${business.phoneTel}`} className="num hidden whitespace-nowrap text-[0.95rem] font-medium transition-colors hover:text-heat-deep xl:block" data-track="cta_tel">
              {business.phoneDisplay}
            </a>
            <Link href={PATHS.contact} className="btn-primary !min-h-[2.5rem] !gap-3 !px-4 text-[0.86rem]">
              Devis gratuit <ArrowIcon className="hidden h-3.5 w-3.5 sm:block" />
            </Link>
            <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="menu-mobile" className="flex h-10 w-7 items-center justify-end lg:hidden" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}>
              <span className="relative block h-2.5 w-6">
                <span className={`absolute left-0 top-0 h-[2px] w-6 bg-ink transition duration-300 ${open ? "translate-y-[4px] rotate-45" : ""}`} />
                <span className={`absolute bottom-0 left-0 h-[2px] w-6 bg-ink transition duration-300 ${open ? "-translate-y-[4px] -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>
      </div>
      <div id="menu-mobile" hidden={!open} className="fixed inset-x-0 bottom-0 top-[var(--head-h)] overflow-y-auto border-t-2 border-ink bg-white lg:hidden">
        <div className="wrap min-h-full py-6">
          <ul>
            {[{ href: "/", label: "Accueil" }, ...nav].map((n, i) => (
              <li key={n.href} className="border-b border-ink">
                <Link href={n.href} className="flex items-baseline justify-between py-4">
                  <span className="text-[2.4rem] font-semibold leading-none tracking-[-0.05em]">{n.label}</span>
                  <span className="num text-[1rem] font-semibold text-heat-deep">{16 + i * 2}°</span>
                </Link>
              </li>
            ))}
          </ul>
          <a href={`tel:${business.phoneTel}`} className="num mt-10 block text-[2rem] font-semibold tracking-[-0.04em]" data-track="cta_tel">
            {business.phoneDisplay}
          </a>
          <p className="meta-faint mt-2">{business.address.street}, {business.address.postalCode} Paris</p>
        </div>
      </div>
    </header>
  );
}
