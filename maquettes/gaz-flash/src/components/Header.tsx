"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { PATHS, business, nav } from "@/lib/site";
import { Logo } from "./Photo";
import { MenuIcon, PhoneIcon } from "./Icons";

export function Header() {
  const pathname = usePathname();
  const current = (href: string) => (pathname === href ? "page" : undefined);
  const menu = useRef<HTMLDetailsElement>(null);

  // Le menu mobile se referme quand on change de page.
  useEffect(() => {
    if (menu.current) menu.current.open = false;
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="bar wrap flex items-center justify-between gap-6">
        <Link href="/" aria-label={`${business.name}, accueil`} className="flex shrink-0 items-center no-underline">
          <Logo id="logo" alt={business.name} className="h-9 w-auto sm:h-10" width={126} height={40} />
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) =>
            item.children ? (
              <div key={item.href} className="has-menu relative flex items-center">
                <Link href={item.href} className="nav-link" aria-current={current(item.href)}>
                  {item.label}
                </Link>
                <div className="menu absolute left-1/2 top-full z-40 w-60 -translate-x-1/2 pt-4">
                  <div className="rounded-lg border border-line bg-white p-2 shadow-[0_24px_48px_-24px_rgb(13_15_17/0.25)]">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} className="block rounded-md px-3 py-2 text-[0.92rem] text-ink no-underline transition-colors hover:bg-paper-2" aria-current={current(child.href)}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href} className="nav-link" aria-current={current(item.href)}>
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-5">
          <a href={`tel:${business.phoneTel}`} data-track="phone_call_click" className="tel hidden text-[0.92rem] xl:inline-flex">
            <PhoneIcon className="h-4 w-4 text-red" />
            {business.phoneDisplay}
          </a>
          <Link href={PATHS.contact} data-track="generate_lead" className="btn !min-h-[40px] !px-5 !text-[0.88rem]">
            Devis gratuit
          </Link>
          <details ref={menu} className="mobile-menu lg:hidden">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full text-ink [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Menu</span>
              <MenuIcon className="h-5 w-5" />
            </summary>
            <nav aria-label="Navigation mobile" className="fixed inset-x-0 bottom-0 top-[64px] z-40 overflow-auto border-t border-line bg-white px-7 pb-32 pt-6">
              {nav.map((item) => (
                <div key={item.href} className="border-b border-line py-3">
                  <Link href={item.href} className="block py-1 font-display text-[1.65rem] font-light tracking-tight text-ink no-underline" aria-current={current(item.href)}>
                    {item.label}
                  </Link>
                  {item.children ? (
                    <div className="mt-1 flex flex-wrap gap-x-5 gap-y-1 pb-1">
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href} className="text-[0.95rem] text-ink-soft no-underline" aria-current={current(child.href)}>
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
              <a href={`tel:${business.phoneTel}`} data-track="phone_call_click" className="tel mt-8 text-[1.1rem]">
                <PhoneIcon className="h-4 w-4 text-red" />
                {business.phoneDisplay}
              </a>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
