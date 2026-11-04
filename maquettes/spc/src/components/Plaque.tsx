import { business } from "@/lib/site";

/**
 * L'objet signature : la plaque de zinc gravée de l'entreprise, vissée sur la photo du héros.
 * Zinc brossé (fines stries), biseau, quatre vis à tête fendue, lettres gravées en creux, patine bleutée.
 */
export function Plaque({ className = "" }: { className?: string }) {
  const screws = ["left-3 top-3 rotate-[28deg]", "right-3 top-3 -rotate-[52deg]", "left-3 bottom-3 rotate-[71deg]", "right-3 bottom-3 rotate-[8deg]"];
  return (
    <div className={className} aria-hidden="true"><div className="plaque">
      <div className="plaque-face">
        {screws.map((s) => <span key={s} className={`plaque-vis ${s}`} />)}
        <p className="plaque-small">Paris · XII<sup>e</sup> arrondissement</p>
        <p className="plaque-name">SPC</p>
        <p className="plaque-rule" />
        <p className="plaque-small">Plomberie · Couverture</p>
        <p className="plaque-year">Maison fondée en {business.founded}</p>
      </div>
    </div></div>
  );
}
