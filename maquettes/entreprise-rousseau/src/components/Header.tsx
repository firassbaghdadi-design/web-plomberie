import Link from "next/link";
import { business } from "@/lib/site";
import { PhoneIcon } from "./Icons";

const links = [
  { href: "#services", label: "Services" },
  { href: "#fuite", label: "Fuite d'eau" },
  { href: "#methode", label: "Méthode" },
  { href: "#contact", label: "Contact" },
  { href: "#questions", label: "Questions" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-display text-xl font-semibold tracking-tight sm:text-2xl">{business.name}</span>
          <span className="mt-1 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-copper-dark">
            Depuis {business.foundingYear}
          </span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-7 text-[0.95rem] font-medium lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="py-2 hover:text-copper-dark">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={`tel:${business.phoneTel}`} data-track="phone_call_click" className="btn-primary !min-h-[44px] !px-4 !py-2 max-sm:hidden">
            <PhoneIcon />
            {business.phoneDisplay}
          </a>
          <details className="group relative lg:hidden">
            <summary className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-lg border border-ink/25 [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Menu</span>
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </summary>
            <nav aria-label="Navigation mobile" className="absolute right-0 top-14 w-64 rounded-xl border border-line bg-paper p-2 shadow-lg">
              {links.map((link) => (
                <a key={link.href} href={link.href} className="block rounded-lg px-4 py-3 font-medium hover:bg-paper-deep">
                  {link.label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
