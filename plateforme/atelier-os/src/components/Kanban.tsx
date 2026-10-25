"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { STATUTS, STATUT_LABEL, type Statut } from "@/lib/types";
import { euros } from "@/lib/format";
import { appel } from "./Formulaires";
import { Icone } from "./Icone";

export interface CarteKanban {
  id: string;
  entreprise: string;
  sousTitre: string;
  statut: Statut;
  montant: number | null;
  prochaine: string;
  enRetard: boolean;
}

interface Glisse {
  id: string;
  x: number;
  y: number;
  dx: number;
  dy: number;
  largeur: number;
  cible: Statut | null;
}


export function Kanban({ cartes: initiales }: { cartes: CarteKanban[] }) {
  const router = useRouter();
  const [cartes, setCartes] = useState(initiales);
  const [glisse, setGlisse] = useState<Glisse | null>(null);
  const [erreur, setErreur] = useState("");
  const plateau = useRef<HTMLDivElement>(null);
  const suivi = useRef<{ id: string; x0: number; y0: number; dx: number; dy: number; largeur: number; actif: boolean } | null>(null);
  const vientDeGlisser = useRef(false);

  useEffect(() => setCartes(initiales), [initiales]);

  async function deplacer(id: string, statut: Statut) {
    const avant = cartes.find((c) => c.id === id);
    if (!avant || avant.statut === statut) return;
    setErreur("");
    setCartes((cs) => cs.map((c) => (c.id === id ? { ...c, statut } : c)));
    try {
      await appel("/api/v1/pipeline/deplacer", "POST", { prospectId: id, statut });
      router.refresh();
    } catch (e) {
      setCartes((cs) => cs.map((c) => (c.id === id ? { ...c, statut: avant.statut } : c)));
      setErreur(e instanceof Error ? e.message : "Déplacement impossible.");
    }
  }

  const colonneSous = (x: number, y: number): Statut | null => {
    const el = document.elementFromPoint(x, y)?.closest<HTMLElement>("[data-colonne]");
    return (el?.dataset.colonne as Statut) ?? null;
  };

  function debut(e: React.PointerEvent<HTMLElement>, id: string) {
    if (e.button !== 0) return;
    const cible = e.target as HTMLElement;
    const tactile = e.pointerType !== "mouse";
    if (cible.closest("select, label")) return;
    if (tactile && !cible.closest("[data-poignee]")) return;
    const r = e.currentTarget.getBoundingClientRect();
    suivi.current = { id, x0: e.clientX, y0: e.clientY, dx: e.clientX - r.left, dy: e.clientY - r.top, largeur: r.width, actif: false };
    if (tactile) e.preventDefault();

    const bouge = (ev: PointerEvent) => {
      const s = suivi.current;
      if (!s) return;
      if (!s.actif) {
        if (Math.hypot(ev.clientX - s.x0, ev.clientY - s.y0) < (tactile ? 2 : 6)) return;
        s.actif = true;
      }
      ev.preventDefault();
      const p = plateau.current;
      if (p) {
        const b = p.getBoundingClientRect();
        if (ev.clientX < b.left + 48) p.scrollLeft -= 14;
        else if (ev.clientX > b.right - 48) p.scrollLeft += 14;
      }
      setGlisse({ id: s.id, x: ev.clientX, y: ev.clientY, dx: s.dx, dy: s.dy, largeur: s.largeur, cible: colonneSous(ev.clientX, ev.clientY) });
    };
    const fin = (ev: PointerEvent) => {
      window.removeEventListener("pointermove", bouge);
      window.removeEventListener("pointerup", fin);
      window.removeEventListener("pointercancel", fin);
      const s = suivi.current;
      suivi.current = null;
      setGlisse(null);
      if (!s?.actif) return;
      vientDeGlisser.current = true;
      setTimeout(() => (vientDeGlisser.current = false), 50);
      const col = ev.type === "pointerup" ? colonneSous(ev.clientX, ev.clientY) : null;
      if (col) deplacer(s.id, col);
    };
    window.addEventListener("pointermove", bouge, { passive: false });
    window.addEventListener("pointerup", fin);
    window.addEventListener("pointercancel", fin);
  }

  const carteGlissee = glisse ? cartes.find((c) => c.id === glisse.id) : null;

  return (
    <>
      {erreur && <p className="mb-3 px-1 text-[13.5px] text-terre">{erreur}</p>}
      <div
        ref={plateau}
        className="defile-x -mx-4 flex snap-x snap-proximity gap-3 overflow-x-auto px-4 pb-6 sm:-mx-6 sm:px-6"
        style={{ scrollPaddingInline: 16 }}
      >
        {STATUTS.map((statut) => {
          const liste = cartes.filter((c) => c.statut === statut);
          const total = liste.reduce((s, c) => s + (c.montant ?? 0), 0);
          const survol = glisse?.cible === statut;
          return (
            <section
              key={statut}
              data-colonne={statut}
              aria-label={STATUT_LABEL[statut]}
              className={`flex w-[80vw] max-w-[292px] shrink-0 snap-start flex-col rounded-3xl p-2 transition-colors duration-200 sm:w-[264px] ${
                survol ? "bg-terre/10 ring-2 ring-inset ring-terre/40" : "bg-creux/70"
              }`}
            >
              <header className="flex items-baseline justify-between gap-2 px-3 pb-2.5 pt-2">
                <h2 className={`text-[14px] font-semibold tracking-tight ${statut === "signe" ? "text-terre" : ""}`}>{STATUT_LABEL[statut]}</h2>
                <span className="text-[12.5px] tabular-nums text-doux">
                  {liste.length}
                  {total > 0 && ` · ${euros(total)}`}
                </span>
              </header>
              <ul className="flex min-h-[72px] flex-1 flex-col gap-2">
                {liste.map((c) => (
                  <li
                    key={c.id}
                    data-carte={c.id}
                    onPointerDown={(e) => debut(e, c.id)}
                    className={`group relative select-none rounded-2xl bg-carte shadow-doux transition-opacity duration-200 ${glisse?.id === c.id ? "opacity-30" : ""}`}
                  >
                    <CarteContenu
                      c={c}
                      onClick={(e) => {
                        if (vientDeGlisser.current) e.preventDefault();
                      }}
                    />
                    <div className="absolute right-1.5 top-1.5 flex items-center">
                      <label className="relative flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-pale transition-colors duration-200 hover:bg-creux hover:text-encre">
                        <span className="sr-only">Déplacer vers</span>
                        <Icone nom="points" className="h-5 w-5" />
                        <select
                          data-deplacer={c.id}
                          value={c.statut}
                          onChange={(e) => deplacer(c.id, e.target.value as Statut)}
                          className="absolute inset-0 cursor-pointer appearance-none opacity-0"
                          aria-label={`Déplacer ${c.entreprise} vers`}
                        >
                          <optgroup label="Déplacer vers">
                            {STATUTS.map((s) => (
                              <option key={s} value={s}>
                                {STATUT_LABEL[s]}
                              </option>
                            ))}
                          </optgroup>
                        </select>
                      </label>
                    </div>
                    <span
                      data-poignee
                      aria-hidden="true"
                      className="absolute bottom-1.5 right-1.5 flex h-9 w-9 items-center justify-center rounded-full text-pale md:hidden"
                      style={{ touchAction: "none" }}
                    >
                      <Icone nom="poignee" className="h-5 w-5" />
                    </span>
                  </li>
                ))}
                {liste.length === 0 && (
                  <li className="flex items-center justify-center rounded-2xl border border-dashed border-trait px-3 py-5 text-center text-[13px] text-pale">
                    Déposer ici
                  </li>
                )}
              </ul>
            </section>
          );
        })}
      </div>

      {glisse && carteGlissee && (
        <div
          className="pointer-events-none fixed left-0 top-0 z-50 rounded-2xl bg-carte shadow-haut"
          style={{ width: glisse.largeur, transform: `translate(${glisse.x - glisse.dx}px, ${glisse.y - glisse.dy}px) rotate(1.5deg)` }}
        >
          <CarteContenu c={carteGlissee} />
        </div>
      )}
    </>
  );
}

function CarteContenu({ c, onClick }: { c: CarteKanban; onClick?: (e: React.MouseEvent) => void }) {
  return (
    <Link href={`/prospects/${c.id}`} draggable={false} onClick={onClick} className="block py-3 pl-4 pr-11">
      <span className="block truncate text-[15px] font-medium leading-snug">{c.entreprise}</span>
      {c.sousTitre && <span className="mt-0.5 block truncate text-[13px] text-doux">{c.sousTitre}</span>}
      {(c.montant || c.prochaine) && (
        <span className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12.5px]">
          {c.montant ? <span className="font-medium tabular-nums">{euros(c.montant)}</span> : null}
          {c.prochaine && (
            <span className={`flex min-w-0 items-center gap-1.5 truncate ${c.enRetard ? "text-terre" : "text-doux"}`}>
              <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${c.enRetard ? "bg-terre" : "bg-pale"}`} />
              <span className="truncate">{c.prochaine}</span>
            </span>
          )}
        </span>
      )}
    </Link>
  );
}
