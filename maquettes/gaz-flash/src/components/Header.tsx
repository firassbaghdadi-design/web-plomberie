"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { business, nav } from "@/lib/site";
import { Logo } from "./Photo";
import { PhoneIcon } from "./Icons";

export function Header() {
  const pathname = usePathname();
  const current = (href: string) => (pathname === href ? "page" : undefined);

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50">
      <div className="container-x flex h-[78px] items-center justify-between gap-4">
        <Link href="/" className="logo-chip flex items-center" aria-label={`${business.name}, accueil`}>
          <Logo id="logo" alt={business.name} className="h-10 w-auto" width={126} height={40} />
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-9 xl:flex">
          {nav.map((item) =>
            item.children ? (
              <div key={item.href} className="has-menu relative">
                <Link href={item.href} className="nav-link block py-6" aria-current={current(item.href)}>
                  {item.label}
                </Link>
                <div className="menu absolute left-1/2 top-[68px] w-60 -translate-x-1/2 border-t-[3px] border-flame bg-coal-2 p-2 shadow-lift">
                  {item.children.map((child) => (
                    <Link key={child.href} href={child.href} className="block px-4 py-2.5 font-display text-lg font-semibold uppercase tracking-wider text-white/90 hover:bg-white/10 hover:text-white" aria-current={current(child.href)}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href} className="nav-link py-2" aria-current={current(item.href)}>
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2.5">
          <a href={`tel:${business.phoneTel}`} data-track="phone_call_click" className="btn btn-flame pulse !min-h-[46px] !px-5 !py-2 max-sm:hidden">
            <PhoneIcon />
            {business.phoneDisplay}
          </a>
          <details className="group relative xl:hidden">
            <summary className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-[3px] border border-white/40 text-white">
              <span className="sr-only">Menu</span>
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </summary>
            <nav aria-label="Navigation mobile" className="absolute right-0 top-14 max-h-[80vh] w-72 overflow-auto border-t-[3px] border-flame bg-coal-2 p-2 shadow-lift">
              {nav.map((item) => (
                <div key={item.href}>
                  <Link href={item.href} className="block px-4 py-3 font-display text-xl font-semibold uppercase tracking-wider text-white hover:bg-white/10" aria-current={current(item.href)}>
                    {item.label}
                  </Link>
                  {item.children?.map((child) => (
                    <Link key={child.href} href={child.href} className="block px-4 py-2 pl-9 text-[0.95rem] text-white/75 hover:bg-white/10 hover:text-white" aria-current={current(child.href)}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
