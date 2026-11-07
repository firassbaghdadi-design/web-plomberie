"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icone } from "./Icone";
import { GROUPES, MODULES, type Module } from "@/lib/modules";
import { changerOrganisation, seDeconnecter } from "@/app/actions";

export interface InfosNavigation {
  organisation: { id: string; nom: string; logoUrl: string | null };
  organisations: { id: string; nom: string }[];
  utilisateur: { nom: string; email: string };
  roleLabel: string;
  dirigeant: boolean;
  admin: boolean;
}

const actif = (chemin: string, href: string) => (href === "/" ? chemin === "/" : chemin === href || chemin.startsWith(href + "/"));

export function LogoOrganisation({ nom, logoUrl, taille = 32 }: { nom: string; logoUrl: string | null; taille?: number }) {
  if (logoUrl)
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={logoUrl} alt="" width={taille} height={taille} className="shrink-0 rounded-[9px] bg-carte object-contain" style={{ width: taille, height: taille }} />;
  return (
    <span className="flex shrink-0 items-center justify-center rounded-[9px] bg-terre font-semibold text-white" style={{ width: taille, height: taille, fontSize: taille * 0.42 }} aria-hidden="true">
      {nom.trim().charAt(0).toUpperCase()}
    </span>
  );
}

function Lien({ m, chemin }: { m: Module; chemin: string }) {
  const a = !m.bientot && actif(chemin, m.href) && !(m.href === "/reglages" && chemin.startsWith("/reglages/jetons"));
  return (
    <Link
      href={m.href}
      aria-current={a ? "page" : undefined}
      className={`flex min-h-[38px] items-center gap-3 rounded-xl px-3 text-[14.5px] font-medium transition-colors duration-200 ${
        a ? "bg-carte text-encre shadow-doux" : m.bientot ? "text-pale hover:text-doux" : "text-doux hover:bg-creux/70 hover:text-encre"
      }`}
    >
      <Icone nom={m.icone} className={`h-[19px] w-[19px] ${a ? "text-terre" : ""}`} />
      <span className="flex-1">{m.label}</span>
      {m.bientot && <span className="text-[10.5px] font-semibold uppercase tracking-[0.06em] text-pale">Bientôt</span>}
    </Link>
  );
}

export function SelecteurOrganisation({ infos, compact = false }: { infos: InfosNavigation; compact?: boolean }) {
  const autres = infos.organisations.filter((o) => o.id !== infos.organisation.id);
  const tete = (
    <span className="flex min-w-0 items-center gap-2.5">
      <LogoOrganisation nom={infos.organisation.nom} logoUrl={infos.organisation.logoUrl} taille={compact ? 26 : 32} />
      <span className="min-w-0 text-left">
        <span className="block truncate text-[14.5px] font-semibold leading-tight tracking-tight">{infos.organisation.nom}</span>
        {!compact && <span className="block text-[12px] text-doux">Atelier OS</span>}
      </span>
    </span>
  );
  if (autres.length === 0) return tete;
  return (
    <details className="group relative">
      <summary className="flex cursor-pointer items-center justify-between gap-2 rounded-xl" aria-label="Changer d'organisation">
        {tete}
        <Icone nom="echanger" className="h-4 w-4 shrink-0 text-pale" />
      </summary>
      <div className="carte absolute left-0 right-0 top-full z-50 mt-2 max-h-[60vh] min-w-[240px] overflow-auto p-1.5 shadow-haut">
        <p className="px-3 pb-1 pt-2 text-[12px] font-medium text-doux">Changer d&apos;organisation</p>
        {autres.map((o) => (
          <form key={o.id} action={changerOrganisation}>
            <input type="hidden" name="organisationId" value={o.id} />
            <button className="w-full rounded-lg px-3 py-2 text-left text-[14px] hover:bg-creux">{o.nom}</button>
          </form>
        ))}
        {infos.admin && (
          <Link href="/organisations" className="mt-1 block rounded-lg border-t border-trait/70 px-3 py-2 text-[14px] text-terre hover:bg-creux">
            Toutes les organisations
          </Link>
        )}
      </div>
    </details>
  );
}

export function Navigation({ infos }: { infos: InfosNavigation }) {
  const chemin = usePathname();
  const visibles = MODULES.filter((m) => !m.dirigeant || infos.dirigeant);
  const onglets = visibles.filter((m) => m.onglet);
  const groupes = (["crm", "bientot", "organisation"] as const).map((g) => ({ g, liste: visibles.filter((m) => m.groupe === g) }));
  const plusActif = !onglets.some((m) => actif(chemin, m.href));

  return (
    <>
      {/* Barre latérale (ordinateur) */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[256px] flex-col border-r border-trait/60 bg-fond/80 backdrop-blur-xl lg:flex">
        <div className="px-4 pb-4 pt-5">
          <SelecteurOrganisation infos={infos} />
        </div>
        <nav className="flex-1 overflow-y-auto px-3 pb-4" aria-label="Navigation principale">
          {groupes.map(({ g, liste }) => (
            <div key={g} className="mb-5">
              <p className="mb-1 px-3 text-[11.5px] font-medium uppercase tracking-[0.08em] text-pale">{GROUPES[g]}</p>
              <div className="space-y-0.5">
                {liste.map((m) => (
                  <Lien key={m.id} m={m} chemin={chemin} />
                ))}
                {g === "organisation" && infos.admin && <Lien m={{ id: "orgs", label: "Organisations", href: "/organisations", icone: "etincelle", groupe: "organisation" }} chemin={chemin} />}
              </div>
            </div>
          ))}
        </nav>
        <div className="flex items-center gap-3 border-t border-trait/60 px-4 py-3.5">
          <div className="min-w-0 flex-1">
            <p className="truncate text-[13.5px] font-medium">{infos.utilisateur.nom}</p>
            <p className="truncate text-[12px] text-doux">{infos.roleLabel}</p>
          </div>
          <form action={seDeconnecter}>
            <button className="flex h-9 w-9 items-center justify-center rounded-full text-doux transition-colors hover:bg-creux hover:text-encre" aria-label="Se déconnecter" title="Se déconnecter">
              <Icone nom="sortir" className="h-[19px] w-[19px]" />
            </button>
          </form>
        </div>
      </aside>

      {/* Barre du haut (iPhone, tablette) */}
      <header className="sticky top-0 z-30 border-b border-trait/60 bg-fond/85 backdrop-blur-xl lg:hidden" style={{ paddingTop: "env(safe-area-inset-top)" }}>
        <div className="flex h-12 items-center justify-between gap-3 px-4">
          <div className="min-w-0 flex-1">
            <SelecteurOrganisation infos={infos} compact />
          </div>
          <Link href="/reglages" aria-label="Réglages" className={`-mr-2 flex h-11 w-11 items-center justify-center ${actif(chemin, "/reglages") ? "text-terre" : "text-doux"}`}>
            <Icone nom="reglages" className="h-[21px] w-[21px]" />
          </Link>
        </div>
      </header>

      {/* Onglets (iPhone, tablette) */}
      <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-trait/60 bg-fond/85 backdrop-blur-xl lg:hidden" style={{ paddingBottom: "env(safe-area-inset-bottom)" }} aria-label="Onglets">
        <ul className="mx-auto grid max-w-lg grid-cols-5">
          {[...onglets, { id: "plus", label: "Plus", href: "/plus", icone: "menu", groupe: "crm" as const }].map((m) => {
            const a = m.id === "plus" ? plusActif : actif(chemin, m.href);
            return (
              <li key={m.id}>
                <Link href={m.href} aria-current={a ? "page" : undefined} className={`flex flex-col items-center gap-0.5 pb-1.5 pt-2 text-[10.5px] font-medium transition-colors duration-200 ${a ? "text-terre" : "text-doux"}`}>
                  <Icone nom={m.icone} />
                  {m.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
