/**
 * La mascotte du logo M. Fabulet, reprise à l'identique (détourée de la capture du logo, voir scripts/extract-mascot.cjs).
 * Quatre calques imbriqués, chacun avec son propre mouvement : l'entrée dans le champ, le pas de marche,
 * la pose (il se pose puis lève le pouce), et une respiration très lente. Tout s'arrête avec prefers-reduced-motion.
 */
export function Mascotte({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <span aria-hidden="true" className="m-shadow absolute -bottom-[2%] left-[18%] h-[5%] w-[64%] rounded-[50%] bg-bois-night/30 blur-[6px]" />
      <div className="m-enter">
        <div className="m-bob">
          <div className="m-pose">
            <div className="m-idle relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/brand/mascotte.png" width={374} height={495} alt="M. Fabulet, la mascotte de l'entreprise : un artisan souriant, sa planche sur l'épaule, le pouce levé" className="relative block h-auto w-full select-none" draggable={false} fetchPriority="high" />
              <span aria-hidden="true" className="gleam absolute left-[88%] top-[37%] h-[22%] w-[22%] -translate-x-1/2 -translate-y-1/2">
                <span />
                <span />
                <span />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
