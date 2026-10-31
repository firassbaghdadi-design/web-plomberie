"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { PATHS, business, nav } from "@/lib/site";
import { Logo } from "./Logo";
import { ReadingDial } from "./ReadingDial";

const roman = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header data-head className={`head sticky top-0 z-50 ${open ? "bg-bg" : ""}`}>
      <div className="wrap flex h-[var(--head-h)] items-center justify-between gap-3 sm:gap-6">
        <Link href="/" className="shrink-0" aria-label="Bastien & Trebulle, accueil">
          <Logo />
        </Link>
        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-[0.84rem] text-fg-soft xl:gap-9">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} aria-current={pathname === n.href ? "page" : undefined} className="nav-link whitespace-nowrap py-1.5">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex shrink-0 items-center gap-3 sm:gap-5">
          <span className="hidden sm:block"><ReadingDial /></span>
          <Link href={PATHS.contact} className="btn-line !hidden !min-h-[2.6rem] !px-5 !text-[0.66rem] sm:!inline-flex">
            Devis gratuit
          </Link>
          <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="menu-mobile" className="flex h-10 w-8 items-center justify-end lg:hidden" aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}>
            <span className="relative block h-2.5 w-6">
              <span className={`absolute left-0 top-0 h-px w-6 bg-fg transition duration-300 ${open ? "translate-y-[5px] rotate-45" : ""}`} />
              <span className={`absolute bottom-0 right-0 h-px bg-brass transition-all duration-300 ${open ? "w-6 -translate-y-[4px] -rotate-45" : "w-4"}`} />
            </span>
          </button>
        </div>
      </div>
      <div id="menu-mobile" hidden={!open} className="fixed inset-x-0 bottom-0 top-[var(--head-h)] overflow-y-auto border-t border-line bg-bg lg:hidden">
        <div className="wrap min-h-full py-8">
          <p className="label">Sommaire</p>
          <ul className="mt-4">
            {[{ href: "/", label: "Accueil" }, ...nav].map((n, i) => (
              <li key={n.href} className="border-b border-line">
                <Link href={n.href} className="flex items-baseline gap-5 py-4">
                  <span className="serif w-8 text-[1rem] italic text-brass">{roman[i + 1]}</span>
                  <span className="serif text-[1.9rem] font-light leading-tight text-fg">{n.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <a href={`tel:${business.phoneTel}`} className="btn-primary num mt-10 w-full" data-track="cta_tel">
            Urgence 24h/24 · {business.phoneDisplay}
          </a>
          <p className="mt-4 text-sm text-fg-faint">{business.address.street}, {business.address.postalCode} Paris</p>
        </div>
      </div>
    </header>
  );
}
