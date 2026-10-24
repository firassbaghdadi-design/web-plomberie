"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PATHS, agency, nav } from "@/lib/site";
import { Logo } from "./Logo";
import { MenuIcon, PhoneIcon } from "./Icons";

export function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-platre/92 backdrop-blur-md">
      <div className="container-x flex h-[72px] items-center justify-between gap-4">
        <Link href="/" aria-label="Atelier Truelle, accueil" className="trowel-wiggle">
          <Logo />
        </Link>
        <nav aria-label="Navigation principale" className="hidden items-center gap-8 text-[0.95rem] font-medium lg:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="py-2 text-ardoise decoration-terre-action decoration-2 underline-offset-8 hover:underline aria-[current=page]:underline" aria-current={pathname === item.href ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          {agency.phoneTel ? (
            <a href={`tel:${agency.phoneTel}`} className="btn-ghost !min-h-[44px] !px-4 !py-2 max-xl:hidden">
              <PhoneIcon className="h-4 w-4" />
              {agency.phoneDisplay}
            </a>
          ) : null}
          <Link href={`${PATHS.contact}?sujet=maquette`} className="btn-primary !min-h-[44px] !px-5 !py-2 max-sm:hidden">
            Voir mon site refait
          </Link>
          <details className="relative lg:hidden">
            <summary className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-md border border-ardoise/25 text-ardoise">
              <span className="sr-only">Menu</span>
              <MenuIcon />
            </summary>
            <nav aria-label="Navigation mobile" className="absolute right-0 top-14 w-64 border border-line bg-platre-light p-2 shadow-lift">
              {[...nav, { href: `${PATHS.contact}?sujet=maquette`, label: "Voir mon site refait" }].map((item) => (
                <Link key={item.label} href={item.href} className="block px-4 py-3 font-medium text-ardoise hover:bg-platre-deep">
                  {item.label}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
