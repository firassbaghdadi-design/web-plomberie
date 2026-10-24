"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PATHS, business, nav } from "@/lib/site";
import { Logo } from "./Photo";
import { MenuIcon } from "./Icons";
import { OpenStatus } from "./OpenStatus";

export function Header() {
  const pathname = usePathname();
  const current = (href: string) => (pathname === href ? "page" : undefined);

  return (
    <header className="border-b-[3px] border-double border-ink/60 bg-paper">
      <div className="bg-ink-2 text-paper-sheet">
        <div className="wrap flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-2 text-[0.9rem]">
          <p>
            Standard :{" "}
            <a href={`tel:${business.phoneTel}`} data-track="phone_call_click" className="font-bold text-white underline decoration-red underline-offset-4">
              {business.phoneDisplay}
            </a>
          </p>
          <p className="text-white/80">
            <OpenStatus fallback="Du lundi au vendredi, 8 h – 12 h 30 et 13 h 30 – 17 h" />
          </p>
        </div>
      </div>

      <div className="wrap flex items-center justify-between gap-5 py-3">
        <Link href="/" aria-label={`${business.name}, accueil`} className="flex items-center gap-3 no-underline">
          <Logo id="logo" alt={business.name} className="h-11 w-auto" width={139} height={44} />
          <span className="hand hidden text-[1.35rem] text-ink-soft sm:block">
            chauffagiste du 18e
            <br />
            <span className="text-red-btn">depuis 1965</span>
          </span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-7 lg:flex">
          {nav.map((item) =>
            item.children ? (
              <div key={item.href} className="has-menu relative">
                <Link href={item.href} className="nav-link" aria-current={current(item.href)}>
                  {item.label}
                </Link>
                <div className="menu absolute left-1/2 top-full z-40 w-56 -translate-x-1/2 pt-2">
                  <div className="border border-ink/30 bg-paper-sheet p-1.5 shadow-[5px_6px_0_rgb(44_53_61/0.15)]">
                    {item.children.map((child) => (
                      <Link key={child.href} href={child.href} className="block px-3 py-2 font-label text-lg font-semibold uppercase tracking-wider text-ink no-underline hover:bg-paper-2" aria-current={current(child.href)}>
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

        <div className="flex items-center gap-3">
        <Link href={PATHS.contact} data-track="generate_lead" className="btn whitespace-nowrap !min-h-[44px] !px-4 !py-2 max-sm:!px-3 max-sm:text-[1rem]">
          Devis gratuit
        </Link>
        <details className="relative lg:hidden">
          <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center border-2 border-ink bg-paper-sheet text-ink [&::-webkit-details-marker]:hidden">
            <span className="sr-only">Menu</span>
            <MenuIcon />
          </summary>
          <nav aria-label="Navigation mobile" className="absolute right-0 top-14 z-40 max-h-[75vh] w-72 overflow-auto border-2 border-ink bg-paper-sheet p-2 shadow-[5px_6px_0_rgb(44_53_61/0.2)]">
            {nav.map((item) => (
              <div key={item.href}>
                <Link href={item.href} className="block px-3 py-2.5 font-label text-xl font-semibold uppercase tracking-wider text-ink no-underline hover:bg-paper-2" aria-current={current(item.href)}>
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link key={child.href} href={child.href} className="block px-3 py-1.5 pl-8 text-[0.95rem] text-ink-soft no-underline hover:bg-paper-2" aria-current={current(child.href)}>
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
