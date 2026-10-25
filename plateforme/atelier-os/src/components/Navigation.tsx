"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icone } from "./Icone";

const liens = [
  { href: "/", label: "Accueil", icone: "accueil" },
  { href: "/prospects", label: "Prospects", icone: "prospects" },
  { href: "/emails", label: "E-mails", icone: "emails" },
  { href: "/reglages", label: "Réglages", icone: "reglages" },
];

const actif = (chemin: string, href: string) => (href === "/" ? chemin === "/" : chemin.startsWith(href));

export function Navigation() {
  const chemin = usePathname();
  return (
    <>
      <header className="sticky top-0 z-30 hidden border-b border-trait/60 bg-fond/80 backdrop-blur-xl md:block">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
          <Link href="/" className="text-[15px] font-semibold tracking-tight">
            Atelier <span className="text-doux">OS</span>
          </Link>
          <nav className="flex gap-1">
            {liens.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-full px-4 py-1.5 text-[14px] font-medium transition-colors duration-200 ${
                  actif(chemin, l.href) ? "bg-carte text-encre shadow-doux" : "text-doux hover:text-encre"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <nav
        className="fixed inset-x-0 bottom-0 z-30 border-t border-trait/60 bg-fond/85 backdrop-blur-xl md:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        aria-label="Navigation"
      >
        <ul className="mx-auto grid max-w-md grid-cols-4">
          {liens.map((l) => {
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
