import { photoAlt } from "@/lib/photos";
import { Img } from "./Img";

type Props = {
  id: string;
  /** Classe de proportions du cadre (ex. « aspect-[4/5] »). */
  ratio?: string;
  /** « auto » : se trace à l'ouverture de la page (héros) ; « scroll » : suit le défilement. */
  mode?: "auto" | "scroll";
  /** Légende de la cote du haut : elle passe de `start` à `end` quand la photo se dévoile. */
  start?: string;
  end?: string;
  scale?: string;
  caption?: string;
  priority?: boolean;
  className?: string;
};

/**
 * Signature de la maquette SMAP : « du plan au chantier ». Un cadre de plan d'architecte (quadrillage, axes en trait mixte,
 * bulles d'axe, lignes de cote) se trace, puis la photo finie se dévoile dans le cadre. Le pilotage (variables --dr et --p)
 * est fait par Motion.tsx ; sans JavaScript, la photo est simplement visible.
 */
export function PlanFigure({ id, ratio = "aspect-[4/3]", mode = "scroll", start = "Plan", end = "Chantier", scale = "1:50", caption, priority, className = "" }: Props) {
  const alt = photoAlt(id);
  return (
    <figure className={className}>
      <div className="plan" data-plan={mode}>
        <div className="cote cote-h" aria-hidden="true">
          <i className="l" /><i className="a" /><i className="b" /><i className="x" /><i className="y" />
          <span className="t"><span>{start}</span><span>{end}</span></span>
        </div>
        <div className="cote cote-v" aria-hidden="true">
          <i className="l" /><i className="a" /><i className="b" /><i className="x" /><i className="y" />
          <span className="t">{scale}</span>
        </div>
        <div className={`plan-box ${ratio}`}>
          <div className="plan-sheet" aria-hidden="true">
            <i className="plan-axis-x" /><i className="plan-axis-y" />
            <span className="plan-bubble b-a">A</span><span className="plan-bubble b-b">B</span>
            <span className="plan-bubble b-1">1</span><span className="plan-bubble b-2">2</span>
            <span className="plan-legend">Plan · échelle {scale}</span>
          </div>
          <div className="plan-photo">
            <Img id={id} alt={alt} priority={priority} className="absolute inset-0 h-full w-full" />
          </div>
          <span className="plan-cut" aria-hidden="true" />
        </div>
      </div>
      <figcaption className="mt-3 text-[0.78rem] text-ink-faint">{caption ?? alt}</figcaption>
    </figure>
  );
}
