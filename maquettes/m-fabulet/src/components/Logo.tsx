import { FermeMark } from "./Ferme";

/** Le nom recomposé en typographie : « M. Fabulet » en brun bois, « Couverture » en petites capitales terre cuite. */
export function Logo({ tone = "bois" }: { tone?: "bois" | "creme" }) {
  const main = tone === "bois" ? "text-bois-deep" : "text-creme";
  const sub = tone === "bois" ? "text-tuile-deep" : "text-orange-light";
  return (
    <span className="flex items-center gap-3">
      <FermeMark className="h-[1.35rem] w-[2.7rem] shrink-0" tone={tone} />
      <span className="flex flex-col leading-none">
        <span className={`text-[1.32rem] tracking-[-0.01em] ${main}`} style={{ fontWeight: 520 }}>
          M.&thinsp;Fabulet
        </span>
        <span className={`mt-1 text-[0.6rem] uppercase tracking-[0.42em] ${sub}`} style={{ fontWeight: 520 }}>
          Couverture
        </span>
      </span>
    </span>
  );
}
