import type { PhotoId } from "@/lib/photos";
import { Photo } from "./Photo";

/** Nombre pseudo-aléatoire stable (même rendu au serveur et au navigateur). */
const rand = (i: number, seed: number) => {
  const x = Math.sin(i * 12.9898 + seed * 78.233) * 43758.5453;
  return x - Math.floor(x);
};

type TilesProps = {
  /** colonnes sur téléphone et sur grand écran */
  cols?: [number, number];
  /** rapport hauteur / largeur du cadre, pour savoir combien de rangées couvrir */
  ratio: [number, number];
  seed?: number;
  /** délai de départ, en secondes */
  start?: number;
  /** durée totale du balayage, en secondes */
  spread?: number;
};

/**
 * La trame de tesselles posée sur une photo : chaque carreau s'efface à son tour, en diagonale,
 * et la photo apparaît comme une mosaïque qu'on pose. Quelques tesselles orange et vertes, couleurs du logo,
 * s'effacent en dernier.
 */
export function Tiles({ cols = [6, 8], ratio, seed = 1, start = 0, spread = 1.1 }: TilesProps) {
  const [cm, cd] = cols;
  const rm = Math.ceil(cm * ratio[0]) + 1;
  const rd = Math.ceil(cd * ratio[1]) + 1;
  const count = Math.max(cm * rm, cd * rd);
  const delay = (i: number, c: number, r: number) => {
    const x = i % c;
    const y = Math.floor(i / c);
    const v = (x / c) * 0.55 + (1 - y / r) * 0.3 + rand(i, seed) * 0.35;
    return start + v * spread;
  };
  return (
    <span className="tiles" aria-hidden="true" style={{ ["--cm" as string]: cm, ["--cd" as string]: cd }}>
      {Array.from({ length: count }, (_, i) => {
        const r = rand(i + 101, seed);
        const accent = r > 0.955 ? "o" : r < 0.035 ? "g" : "";
        const late = accent ? 0.45 : 0;
        return (
          <i
            key={i}
            className={accent || undefined}
            style={{ ["--dm" as string]: `${(delay(i, cm, rm) + late).toFixed(2)}s`, ["--dd" as string]: `${(delay(i, cd, rd) + late).toFixed(2)}s` }}
          />
        );
      })}
    </span>
  );
}

type MosaicProps = {
  photo: PhotoId;
  sizes: string;
  className?: string;
  priority?: boolean;
  /** rapport hauteur / largeur sur téléphone et sur grand écran */
  ratio?: [number, number];
  cols?: [number, number];
  seed?: number;
  /** true : la trame s'assemble au chargement (héros) ; sinon à l'arrivée dans l'écran */
  onLoad?: boolean;
  alt?: string;
};

/** Photo encadrée qui s'assemble en tesselles. */
export function MosaicPhoto({ photo, sizes, className = "", priority = false, ratio = [1.25, 1.25], cols = [6, 7], seed = 3, onLoad = false, alt }: MosaicProps) {
  return (
    <div className={`mosaic ${onLoad ? "is-in" : ""} ${className}`} data-mosaic={onLoad ? undefined : ""}>
      <Photo id={photo} sizes={sizes} priority={priority} alt={alt} />
      <Tiles cols={cols} ratio={ratio} seed={seed} start={onLoad ? 0.25 : 0} />
    </div>
  );
}

/**
 * Le fil conducteur : une rangée de tesselles numérote la section.
 * Les tesselles déjà parcourues sont vertes, celle de la section en cours est orange.
 */
export function Mark({ n, total, label }: { n: number; total: number; label?: string }) {
  return (
    <div className="mark" data-reveal>
      <span className="row" aria-hidden="true">
        {Array.from({ length: total }, (_, i) => (
          <b key={i} className={i + 1 < n ? "on" : i + 1 === n ? "now" : undefined} style={{ ["--k" as string]: i }} />
        ))}
      </span>
      <span className="n">
        {String(n).padStart(2, "0")}
        {label ? <span> · {label}</span> : null}
      </span>
    </div>
  );
}
