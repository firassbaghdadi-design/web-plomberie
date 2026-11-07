import { FermeMark } from "./Ferme";

/** Le nom recomposé : « M. Fabulet » en grande serif crème, « Couverture » en petites capitales cuivre, la ferme du logo en trait fin. */
export function Logo() {
  return (
    <span className="flex items-center gap-3">
      <FermeMark className="h-[1.3rem] w-[2.6rem] shrink-0" auto start="0.2s" />
      <span className="flex flex-col leading-none">
        <span className="font-serif text-[1.42rem] tracking-[-0.01em] text-creme" style={{ fontWeight: 500 }}>
          M.&thinsp;Fabulet
        </span>
        <span className="mt-1 font-sans text-[0.56rem] uppercase tracking-[0.5em] text-cuivre-light" style={{ fontWeight: 600 }}>
          Couverture
        </span>
      </span>
    </span>
  );
}
