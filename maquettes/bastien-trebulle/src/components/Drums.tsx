/**
 * Un relevé de compteur : chaque chiffre est un rouleau de laiton qui fait un tour complet puis s'arrête sur sa valeur
 * quand le compteur arrive à l'écran. Les chiffres après la virgule sont des rouleaux bleu nuit (comme les rouleaux
 * décimaux d'un vrai compteur). Le texte lu par les moteurs et les lecteurs d'écran est le nombre lui-même.
 */
export function Drums({ value, size = "2.4rem", decimals = 0, unit, className = "" }: { value: string; size?: string; decimals?: number; unit?: string; className?: string }) {
  const chars = value.split("");
  const firstDec = decimals ? chars.length - decimals : chars.length;
  let k = 0;
  return (
    <span className={`drums num ${className}`} style={{ ["--s" as string]: size }}>
      <span className="sr-only">{value}{unit ? ` ${unit}` : ""}</span>
      {chars.map((c, i) => {
        if (!/\d/.test(c)) return <span key={i} aria-hidden="true" className="drum-sep" />;
        const idx = k++;
        return <span key={i} aria-hidden="true" className={`drum${i >= firstDec ? " drum--dec" : ""}`} style={{ ["--end" as string]: 10 + Number(c), ["--k" as string]: idx }} />;
      })}
      {unit ? <span aria-hidden="true" className="drum-txt">{unit}</span> : null}
    </span>
  );
}
