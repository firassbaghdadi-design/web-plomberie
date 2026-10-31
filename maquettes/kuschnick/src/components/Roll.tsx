/**
 * Un numéro au numéroteur : chaque chiffre défile de 0 jusqu'à sa valeur quand le feuillet arrive à l'écran.
 * La colonne 0-9 est dessinée en CSS (::before) : le texte de la page ne contient que le vrai numéro.
 */
export function Roll({ value, className = "" }: { value: string; className?: string }) {
  return (
    <span className={`roll num ${className}`}>
      <span className="sr-only">{value}</span>
      {value.split("").map((d, k) => (
        <span key={k} aria-hidden="true" className="roll-d" style={{ ["--to" as string]: /\d/.test(d) ? d : 0, ["--k" as string]: k }} />
      ))}
    </span>
  );
}
