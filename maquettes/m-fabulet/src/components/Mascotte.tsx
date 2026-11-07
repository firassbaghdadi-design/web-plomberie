"use client";

import { useCallback, useRef } from "react";

/**
 * La mascotte du logo M. Fabulet, en dessin animé.
 * Quatre calques découpés dans le dessin d'origine (scripts/split-mascot.cjs), superposés au pixel près :
 * le bras au pouce levé (derrière la manche), le corps, la planche avec la main qui la tient, la tête.
 * Elle entre d'un saut depuis le bord, s'écrase à l'atterrissage, lève le pouce (« tchak » et étoiles orange),
 * puis respire, balance sa planche, penche la tête et fait un clin d'œil toutes les 6 s.
 * Au survol ou au toucher, elle refait son pouce levé. Avec prefers-reduced-motion : pose fixe.
 */
const LAYER = "pointer-events-none absolute inset-0 h-full w-full select-none";

function Layer({ name }: { name: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={`/brand/mascotte/${name}.png`} width={748} height={990} alt="" className={LAYER} draggable={false} decoding="async" fetchPriority="high" />;
}

function Sparkles({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 120 120" className={`mz-spark pointer-events-none absolute left-[85%] top-[39%] aspect-square w-[34%] -translate-x-1/2 -translate-y-1/2 overflow-visible ${className}`} aria-hidden="true">
      <g className="mz-rays" stroke="#D9822B" strokeWidth="4.5" strokeLinecap="round">
        <line x1="60" y1="30" x2="60" y2="12" />
        <line x1="82" y1="38" x2="95" y2="25" />
        <line x1="38" y1="38" x2="25" y2="25" />
        <line x1="90" y1="60" x2="106" y2="58" />
      </g>
      <path className="mz-star mz-star-a" d="M96 10 Q98 18 106 20 Q98 22 96 30 Q94 22 86 20 Q94 18 96 10Z" fill="#D9822B" stroke="#FBF7F0" strokeWidth="2" strokeLinejoin="round" />
      <path className="mz-star mz-star-b" d="M22 6 Q23.5 12 30 13.5 Q23.5 15 22 21 Q20.5 15 14 13.5 Q20.5 12 22 6Z" fill="#EDB173" stroke="#FBF7F0" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export function Mascotte({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const wave = useCallback(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.classList.remove("is-wave");
    void el.offsetWidth;
    el.classList.add("is-wave");
  }, []);

  return (
    <div
      ref={ref}
      role="img"
      aria-label="M. Fabulet, la mascotte de l'entreprise : un artisan souriant en salopette, sa planche sur l'épaule, qui lève le pouce"
      className={`mascotte relative ${className}`}
      onPointerEnter={(e) => { if (e.pointerType === "mouse") wave(); }}
      onClick={wave}
      onAnimationEnd={(e) => { if (e.animationName === "mz-wave") ref.current?.classList.remove("is-wave"); }}
    >
      <div className="mz-x relative">
        <span aria-hidden="true" className="mz-shadow absolute bottom-[-2.5%] left-[37%] h-[6%] w-[48%] rounded-[50%]" />
        <div className="mz-y">
          <div className="mz-sq">
            <div className="mz-breath relative aspect-[374/495] w-full">
              <div className="mz-arm absolute inset-0">
                <div className="mz-arm-idle absolute inset-0">
                  <div className="mz-arm-wave absolute inset-0"><Layer name="bras" /></div>
                </div>
              </div>
              <Layer name="corps" />
              <div className="mz-plank absolute inset-0"><Layer name="planche" /></div>
              <div className="mz-nod absolute inset-0">
                <div className="mz-head absolute inset-0">
                  <Layer name="tete" />
                  <svg viewBox="0 0 374 495" className="absolute inset-0 h-full w-full" aria-hidden="true">
                    <defs>
                      <linearGradient id="mz-lid" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="#D98B6B" />
                        <stop offset="1" stopColor="#EAB98F" />
                      </linearGradient>
                    </defs>
                    <g className="mz-wink">
                      <path d="M225.5 115 C227 100 239 92.5 249.5 93 C260 93.5 268.5 99.5 271.5 108 L271.5 124 C262 128.5 236 128.5 225.5 124.5 Z" fill="url(#mz-lid)" />
                      <path d="M228 114.5 Q247.5 126 268.5 112.5 M268.5 112.5 L273 109" fill="none" stroke="#3B2417" strokeWidth="3" strokeLinecap="round" />
                    </g>
                  </svg>
                </div>
              </div>
              <Sparkles className="mz-spark-in" />
              <Sparkles className="mz-spark-again" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
