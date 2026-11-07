"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PATHS, business, nav } from "@/lib/site";
import { Logo } from "./Photo";
import { PhoneIcon } from "./Icons";

export function Header() {
  const pathname = usePathname();
  return (
    <header className="site-header fixed inset-x-0 top-0 z-50">
      <div className="container-x flex h-[76px] items-center justify-between gap-4">
        <Link href="/" className="logo-chip flex items-center" aria-label={`${business.name}, accueil`}>
          <Logo id={business.logo} alt={business.name} className="h-11 w-auto max-w-[200px] object-contain" width={200} height={44} />
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-8 text-[0.95rem] font-medium xl:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link py-2" aria-current={pathname === item.href ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href={PATHS.contact} data-track="generate_lead" className="btn-dark whitespace-nowrap !min-h-[46px] !px-5 !py-2 ring-1 ring-white/40 max-sm:!px-3 max-sm:text-sm">
            Devis gratuit
          </Link>
          <a href={`tel:${business.phoneTel}`} data-track="phone_call_click" className="btn-amber pulse !min-h-[46px] !px-5 !py-2 max-lg:hidden">
            <PhoneIcon />
            {business.phoneDisplay}
          </a>
          <details className="group relative xl:hidden">
            <summary className="menu-btn flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-current text-ink">
              <span className="sr-only">Menu</span>
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </summary>
            <nav aria-label="Navigation mobile" className="absolute right-0 top-14 w-72 rounded-2xl border border-line bg-white p-2 shadow-lift">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} className="block rounded-xl px-4 py-3 font-medium text-ink hover:bg-paper-deep" aria-current={pathname === item.href ? "page" : undefined}>
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
