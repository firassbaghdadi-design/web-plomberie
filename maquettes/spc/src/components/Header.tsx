"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PATHS, business, nav } from "@/lib/site";
import { ArrowIcon } from "./Icons";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header data-head className={`head fixed inset-x-0 top-0 z-50 ${open ? "bg-brand-deep" : ""}`}>
      <div className="head-row wrap flex h-[var(--head-h)] items-center justify-between gap-3 sm:gap-6">
        <Link href="/" className="shrink-0" aria-label="SPC, Société Plomberie Couverture, accueil">
          <Logo />
        </Link>
        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-[0.9rem] font-medium text-white/80 xl:gap-9">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} aria-current={pathname === n.href ? "page" : undefined} className="nav-link whitespace-nowrap py-1.5">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex shrink-0 items-center gap-3 sm:gap-6">
          <a href={`tel:${business.phoneTel}`} className="num hidden whitespace-nowrap text-[0.95rem] font-semibold text-white transition hover:text-brand-light xl:block" data-track="cta_tel">
            {business.phoneDisplay}
          </a>
          <Link href={PATHS.contact} className="btn-solid !min-h-[2.6rem] !px-4 text-[0.84rem] sm:!px-5 sm:text-[0.88rem]">
            Devis gratuit
          </Link>
          <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="menu-mobile" className="flex h-10 w-8 items-center justify-end lg:hidden" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}>
            <span className="relative block h-2.5 w-6">
              <span className={`absolute left-0 top-0 h-px w-6 bg-white transition duration-300 ${open ? "translate-y-[5px] rotate-45" : ""}`} />
              <span className={`absolute bottom-0 left-0 h-px w-6 bg-white transition duration-300 ${open ? "-translate-y-[4px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>
      <div id="menu-mobile" hidden={!open} className="fixed inset-x-0 bottom-0 top-[var(--head-h)] overflow-y-auto border-t border-white/10 bg-brand-deep lg:hidden">
        <div className="wrap min-h-full py-8">
          <ul>
            {[{ href: "/", label: "Accueil" }, ...nav].map((n, i) => (
              <li key={n.href} className="border-b border-white/15">
                <Link href={n.href} className="flex items-center justify-between py-4 text-[1.7rem] font-semibold tracking-tight text-white [font-stretch:110%]">
                  <span>{n.label}</span>
                  <ArrowIcon className="h-5 w-5 text-brand-light" />
                </Link>
              </li>
            ))}
          </ul>
          <a href={`tel:${business.phoneTel}`} className="btn-ghost num mt-10" data-track="cta_tel">
            {business.phoneDisplay}
          </a>
          <p className="mt-4 text-sm text-white/60">{business.address.street}, {business.address.postalCode} Paris</p>
        </div>
      </div>
    </header>
  );
}
