"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icone } from "./Icone";

const liens = [
  { href: "/", label: "Accueil", icone: "accueil", mobile: true },
  { href: "/prospects", label: "Prospects", icone: "prospects", mobile: true },
  { href: "/pipeline", label: "Pipeline", icone: "pipeline", mobile: true },
  { href: "/agenda", label: "Agenda", icone: "agenda", mobile: true },
  { href: "/emails", label: "E-mails", icone: "emails", mobile: true },
  { href: "/reglages", label: "Réglages", icone: "reglages", mobile: false },
];

const actif = (chemin: string, href: string) => (href === "/" ? chemin === "/" : chemin.startsWith(href));

export function Navigation() {
  const chemin = usePathname();
  const mobiles = liens.filter((l) => l.mobile);
  return (
    <>
      <header className="sticky top-0 z-30 hidden border-b border-trait/60 bg-fond/80 backdrop-blur-xl md:block">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-6">
          <Link href="/" className="text-[15px] font-semibold tracking-tight">
            Atelier <span className="text-doux">OS</span>
          </Link>
          <nav className="flex gap-1">
            {liens.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-full px-3.5 py-1.5 text-[14px] font-medium transition-colors duration-200 lg:px-4 ${
                  actif(chemin, l.href) ? "bg-carte text-encre shadow-doux" : "text-doux hover:text-encre"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <header
        className="sticky top-0 z-30 border-b border-trait/60 bg-fond/85 backdrop-blur-xl md:hidden"
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        <div className="flex h-11 items-center justify-between px-4">
          <Link href="/" className="text-[15px] font-semibold tracking-tight">
            Atelier <span className="text-doux">OS</span>
          </Link>
          <div className="-mr-2 flex items-center">
            <Link
              href="/reglages"
              aria-label="Réglages"
              className={`flex h-11 w-11 items-center justify-center transition-colors duration-200 ${actif(chemin, "/reglages") ? "text-terre" : "text-doux"}`}
            >
              <Icone nom="reglages" className="h-[21px] w-[21px]" />
            </Link>
          </div>
        </div>
      </header>

      <nav
        className="fixed inset-x-0 bottom-0 z-30 border-t border-trait/60 bg-fond/85 backdrop-blur-xl md:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        aria-label="Navigation"
      >
        <ul className="mx-auto grid max-w-md" style={{ gridTemplateColumns: `repeat(${mobiles.length}, minmax(0, 1fr))` }}>
          {mobiles.map((l) => {
            const a = actif(chemin, l.href);
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`flex flex-col items-center gap-0.5 pb-1.5 pt-2 text-[11px] font-medium transition-colors duration-200 ${a ? "text-terre" : "text-doux"}`}
                >
                  <Icone nom={l.icone} />
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
