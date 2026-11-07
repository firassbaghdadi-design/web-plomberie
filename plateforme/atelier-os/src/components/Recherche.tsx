"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Icone } from "./Icone";

interface Resultat {
  genre: "prospect" | "email" | "note";
  id: string;
  titre: string;
  extrait: string;
  lien: string;
}
interface Reponse {
  q: string;
  prospects: Resultat[];
  emails: Resultat[];
  notes: Resultat[];
}

const GROUPES: Array<[keyof Omit<Reponse, "q">, string]> = [
  ["prospects", "Prospects"],
  ["emails", "E-mails"],
  ["notes", "Notes et historique"],
];

/** Recherche globale : ⌘K (ou Ctrl+K, ou /) et bouton loupe. */
export function Recherche({ variante }: { variante: "bureau" | "mobile" }) {
  const router = useRouter();
  const [ouvert, setOuvert] = useState(false);
  const [q, setQ] = useState("");
  const [rep, setRep] = useState<Reponse | null>(null);
  const [charge, setCharge] = useState(false);
  const [actif, setActif] = useState(0);
  const champ = useRef<HTMLInputElement>(null);
  const liste = useRef<HTMLDivElement>(null);

  const fermer = useCallback(() => {
    setOuvert(false);
    setQ("");
    setRep(null);
    setActif(0);
  }, []);

  useEffect(() => {
    if (variante !== "bureau") return;
    const touche = (e: KeyboardEvent) => {
      const saisie = (e.target as HTMLElement)?.closest?.("input, textarea, select, [contenteditable]");
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOuvert((o) => !o);
      } else if (e.key === "/" && !saisie) {
        e.preventDefault();
        setOuvert(true);
      }
    };
    window.addEventListener("keydown", touche);
    return () => window.removeEventListener("keydown", touche);
  }, [variante]);

  useEffect(() => {
    if (!ouvert) return;
    champ.current?.focus();
    const avant = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = avant;
    };
  }, [ouvert]);

  useEffect(() => {
    const t = q.trim();
    if (!t) {
      setRep(null);
      return;
    }
    const ctrl = new AbortController();
    setCharge(true);
    const minuterie = setTimeout(async () => {
      try {
        const r = await fetch(`/api/v1/recherche?q=${encodeURIComponent(t)}`, { signal: ctrl.signal });
        if (r.ok) {
          setRep(await r.json());
          setActif(0);
        }
      } catch {
        /* requête remplacée par une frappe plus récente */
      } finally {
        if (!ctrl.signal.aborted) setCharge(false);
      }
    }, 140);
    return () => {
      clearTimeout(minuterie);
      ctrl.abort();
    };
  }, [q]);

  const tous = rep ? GROUPES.flatMap(([k]) => rep[k]) : [];
  const aller = (r: Resultat) => {
    fermer();
    router.push(r.lien);
  };

  useEffect(() => {
    liste.current?.querySelector(`[data-index="${actif}"]`)?.scrollIntoView({ block: "nearest" });
  }, [actif]);

  const bouton =
    variante === "bureau" ? (
      <button
        type="button"
        onClick={() => setOuvert(true)}
        className="flex h-9 items-center gap-2 rounded-full bg-creux pl-3 pr-2 text-[13.5px] text-doux transition-colors duration-200 hover:text-encre"
        aria-label="Rechercher (⌘K)"
        data-recherche-bouton
      >
        <Icone nom="chercher" className="h-4 w-4" />
        <span className="hidden lg:inline">Rechercher</span>
        <kbd className="rounded-md bg-carte px-1.5 py-px font-sans text-[11.5px] text-pale shadow-doux">⌘K</kbd>
      </button>
    ) : (
      <button
        type="button"
        onClick={() => setOuvert(true)}
        aria-label="Rechercher"
        className="flex h-11 w-11 items-center justify-center text-doux"
        data-recherche-bouton
      >
        <Icone nom="chercher" className="h-[21px] w-[21px]" />
      </button>
    );

  let index = -1;
  return (
    <>
      {bouton}
      {ouvert &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex items-start justify-center bg-black/25 px-3 pt-[max(12px,env(safe-area-inset-top))] backdrop-blur-sm md:px-6 md:pt-[12vh]"
            onMouseDown={(e) => e.target === e.currentTarget && fermer()}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Recherche"
              className="fondu flex max-h-[min(640px,calc(100dvh-24px))] w-full max-w-xl flex-col overflow-hidden rounded-3xl bg-carte shadow-haut"
            >
              <div className="flex items-center gap-3 border-b border-trait/70 px-4">
                <Icone nom="chercher" className="h-[19px] w-[19px] shrink-0 text-pale" />
                <input
                  ref={champ}
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") fermer();
                    else if (e.key === "ArrowDown") {
                      e.preventDefault();
                      setActif((a) => Math.min(a + 1, Math.max(tous.length - 1, 0)));
                    } else if (e.key === "ArrowUp") {
                      e.preventDefault();
                      setActif((a) => Math.max(a - 1, 0));
                    } else if (e.key === "Enter" && tous[actif]) {
                      e.preventDefault();
                      aller(tous[actif]);
                    }
                  }}
                  type="text"
                  inputMode="search"
                  enterKeyHint="go"
                  placeholder="Prospects, e-mails, notes…"
                  aria-label="Rechercher"
                  className="h-14 min-w-0 flex-1 bg-transparent text-[17px] text-encre outline-none placeholder:text-pale"
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck={false}
                />
                <button type="button" onClick={fermer} className="btn-texte shrink-0 !text-doux">
                  {variante === "mobile" ? "Annuler" : <kbd className="rounded-md bg-creux px-1.5 py-px font-sans text-[11.5px]">Échap</kbd>}
                </button>
              </div>
              <div ref={liste} className="overflow-y-auto overscroll-contain py-2" data-recherche-resultats>
                {!q.trim() && <p className="px-5 py-6 text-center text-[14px] text-doux">Nom d&apos;entreprise, dirigeant, e-mail, mot d&apos;une note…</p>}
                {q.trim() && rep && tous.length === 0 && !charge && (
                  <p className="px-5 py-6 text-center text-[14px] text-doux">Aucun résultat pour « {rep.q} ».</p>
                )}
                {rep &&
                  GROUPES.map(([k, label]) =>
                    rep[k].length ? (
                      <section key={k} className="pb-1">
                        <h3 className="sur-titre px-5 pb-1 pt-3 !text-[11px]">{label}</h3>
                        {rep[k].map((r) => {
                          index++;
                          const i = index;
                          return (
                            <button
                              key={`${r.genre}-${r.id}`}
                              type="button"
                              data-index={i}
                              onMouseMove={() => setActif(i)}
                              onClick={() => aller(r)}
                              className={`mx-2 block w-[calc(100%-16px)] rounded-2xl px-3 py-2.5 text-left transition-colors duration-150 ${i === actif ? "bg-creux" : ""}`}
                            >
                              <span className="block truncate text-[15px] font-medium">{r.titre}</span>
                              {r.extrait && <span className="block truncate text-[13px] text-doux">{r.extrait}</span>}
                            </button>
                          );
                        })}
                      </section>
                    ) : null,
                  )}
              </div>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
