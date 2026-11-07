import { imgSrc } from "@/lib/photos";

/** Contour de la goutte (viewBox 100 × 140) : pointe en haut, panse ronde de rayon 42 centrée en (50, 96). */
export const DROP_PATH = "M50 3C50 3 34 30 22 50C13 65 8 78 8 96a42 42 0 0 0 84 0C92 78 87 65 78 50C66 30 50 3 50 3Z";

/**
 * La goutte en verre soufflé. Couches, du fond vers le dessus :
 * 1. le décor réfracté : la photo du héros, retournée et resserrée (une vraie goutte agit comme une lentille), floutée ;
 *    à défaut de photo, un dégradé sauge, crème et cuivre fait le même office ;
 * 2. l'assombrissement des bords (effet de Fresnel) et une teinte sauge dans l'épaisseur du verre ;
 * 3. la caustique : la lumière concentrée au bas de la panse ;
 * 4. les reflets : une longue lame à gauche, un point vif, un liseré cuivre à droite (le reflet de la devanture) ;
 * 5. le liseré du contour, plus clair en haut qu'en bas.
 */
export function GlassDropSvg({ uid, photo }: { uid: string; photo?: string }) {
  const src = photo ? imgSrc(photo) : null;
  const id = (k: string) => `${uid}-${k}`;
  return (
    <svg viewBox="0 0 100 140" aria-hidden="true" focusable="false">
      <defs>
        <clipPath id={id("clip")}><path d={DROP_PATH} /></clipPath>
        <linearGradient id={id("scene")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3d5a4c" />
          <stop offset=".38" stopColor="#8fa391" />
          <stop offset=".55" stopColor="#efe5d3" />
          <stop offset=".78" stopColor="#d9b48c" />
          <stop offset="1" stopColor="#7a4421" />
        </linearGradient>
        <radialGradient id={id("fresnel")} cx="50" cy="94" r="50" fx="44" fy="88" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#f5efe4" stopOpacity=".1" />
          <stop offset=".62" stopColor="#2f4a3f" stopOpacity=".06" />
          <stop offset=".86" stopColor="#1b2c24" stopOpacity=".42" />
          <stop offset="1" stopColor="#0f1a15" stopOpacity=".78" />
        </radialGradient>
        <linearGradient id={id("neck")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1b2c24" stopOpacity=".55" />
          <stop offset=".45" stopColor="#1b2c24" stopOpacity="0" />
        </linearGradient>
        <radialGradient id={id("caustic")} cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#fffaf0" stopOpacity=".95" />
          <stop offset=".45" stopColor="#f7e2c4" stopOpacity=".55" />
          <stop offset="1" stopColor="#f7e2c4" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={id("blade")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset=".35" stopColor="#fff" stopOpacity=".85" />
          <stop offset="1" stopColor="#fff" stopOpacity=".1" />
        </linearGradient>
        <linearGradient id={id("rim")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".75" />
          <stop offset=".6" stopColor="#fff" stopOpacity=".25" />
          <stop offset="1" stopColor="#c88b5a" stopOpacity=".7" />
        </linearGradient>
        <filter id={id("soft")} x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1.1" /></filter>
        <filter id={id("glow")} x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2.4" /></filter>
      </defs>

      <g clipPath={`url(#${id("clip")})`}>
        {/* 1. Le décor, à l'envers */}
        <rect x="0" y="0" width="100" height="140" fill={`url(#${id("scene")})`} />
        {src ? (
          <image href={src} x="-30" y="-6" width="160" height="152" preserveAspectRatio="xMidYMid slice" transform="rotate(180 50 70)" filter={`url(#${id("soft")})`} opacity=".9" />
        ) : null}
        {/* 2. Épaisseur du verre */}
        <rect x="0" y="0" width="100" height="140" fill="#2f4a3f" opacity=".12" />
        <rect x="0" y="0" width="100" height="140" fill={`url(#${id("fresnel")})`} />
        <rect x="0" y="0" width="100" height="70" fill={`url(#${id("neck")})`} />
        {/* 3. Caustique */}
        <ellipse cx="54" cy="122" rx="26" ry="10" fill={`url(#${id("caustic")})`} />
        <ellipse cx="56" cy="126" rx="11" ry="3.2" fill="#fffdf6" opacity=".7" filter={`url(#${id("glow")})`} />
        {/* 4. Reflets */}
        <path d="M45 16C38 30 27 47 20 62c-6 13-8 24-7 36 .4 5 3 6 4.5 1.5C19 88 22 76 28 64c6-13 14-28 19-44 1-3.5-1-5.5-2-4Z" fill={`url(#${id("blade")})`} opacity=".9" />
        <ellipse cx="30" cy="80" rx="5.2" ry="8.6" transform="rotate(24 30 80)" fill="#fff" opacity=".95" />
        <circle cx="35" cy="96" r="1.6" fill="#fff" opacity=".9" />
        <path d="M84 84c2 12-2 26-12 33" stroke="#e7c39f" strokeWidth="2.2" strokeLinecap="round" fill="none" opacity=".75" filter={`url(#${id("soft")})`} />
        <path d="M80 70c3 5 5 10 5.5 15" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity=".45" />
      </g>
      {/* 5. Liseré */}
      <path d={DROP_PATH} fill="none" stroke={`url(#${id("rim")})`} strokeWidth=".9" />
      <path d={DROP_PATH} fill="none" stroke="#1b2c24" strokeOpacity=".22" strokeWidth=".5" transform="translate(50 96) scale(.965) translate(-50 -96)" />
    </svg>
  );
}

/** L'anneau sur la ligne d'eau : une flaque qui s'éclaire, trois ondes et une gouttelette qui rebondit. */
function Rings() {
  return (
    <svg className="gd-rings" viewBox="0 0 400 120" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="gd-pool" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#fffaf0" stopOpacity=".7" />
          <stop offset="1" stopColor="#fffaf0" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse className="r0" cx="200" cy="60" rx="120" ry="30" fill="url(#gd-pool)" />
      <ellipse className="r1" cx="200" cy="60" rx="196" ry="52" fill="none" stroke="#9a5b2e" strokeOpacity=".8" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
      <ellipse className="r2" cx="200" cy="60" rx="150" ry="40" fill="none" stroke="#2f4a3f" strokeOpacity=".45" strokeWidth="1.3" vectorEffect="non-scaling-stroke" />
      <ellipse className="r3" cx="200" cy="60" rx="104" ry="28" fill="none" stroke="#c88b5a" strokeOpacity=".7" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      <g className="gd-jet"><path d="M200 34c0 0-5 7-5 10.5a5 5 0 0 0 10 0C205 41 200 34 200 34Z" fill="#fffaf0" opacity=".85" /></g>
    </svg>
  );
}

/** La goutte qui tombe dans le héros, de la clé de l'arche jusqu'à la ligne d'eau. */
export function FallingDrop({ photo }: { photo?: string }) {
  return (
    <div className="gd" aria-hidden="true">
      <div className="gd-drop"><GlassDropSvg uid="gd-hero" photo={photo} /></div>
      <Rings />
    </div>
  );
}

/** Petite goutte statique, même verre, sans réfraction de photo. */
export function MiniDrop({ className = "h-6 w-[1.05rem]", uid }: { className?: string; uid: string }) {
  return (
    <span className={`gd-mini inline-block ${className}`}>
      <GlassDropSvg uid={uid} />
    </span>
  );
}
