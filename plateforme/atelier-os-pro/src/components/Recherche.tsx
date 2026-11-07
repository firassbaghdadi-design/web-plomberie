import { Icone } from "./Icone";

/** Champ de recherche (formulaire GET : fonctionne sans JavaScript). */
export function ChampRecherche({ valeur, placeholder, cachés = {} }: { valeur?: string; placeholder: string; cachés?: Record<string, string | undefined> }) {
  return (
    <form role="search" className="relative">
      {Object.entries(cachés).map(([k, v]) => (v ? <input key={k} type="hidden" name={k} value={v} /> : null))}
      <Icone nom="chercher" className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-pale" />
      <input name="q" type="search" defaultValue={valeur} placeholder={placeholder} aria-label={placeholder} className="champ !pl-11" />
    </form>
  );
}
