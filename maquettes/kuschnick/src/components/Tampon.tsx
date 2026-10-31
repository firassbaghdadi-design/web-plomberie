/** Le tampon de la maison : texte circulaire « Anciens Éts Kuschnick · Paris XIe · Maison fondée en 1957 », encré une fois. */
export function Tampon({ className = "h-28 w-28" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={`tampon ${className}`} role="img" aria-label="Tampon : maison fondée en 1957, Paris 11e">
      <defs>
        <path id="tampon-cercle" d="M60 60m-45 0a45 45 0 1 1 90 0a45 45 0 1 1 -90 0" />
      </defs>
      <circle cx="60" cy="60" r="56" fill="rgba(255,255,255,.9)" stroke="#9c4a22" strokeWidth="1.2" />
      <circle cx="60" cy="60" r="35" fill="none" stroke="#9c4a22" strokeWidth=".7" />
      <text className="tampon-text" fill="#9c4a22">
        <textPath href="#tampon-cercle" startOffset="0">Anciens Éts Kuschnick · Paris XIe · Maison fondée ·</textPath>
      </text>
      <text x="60" y="58" textAnchor="middle" fill="#9c4a22" style={{ fontSize: "8px", letterSpacing: ".3em", fontWeight: 600 }}>DEPUIS</text>
      <text x="60" y="76" textAnchor="middle" fill="#9c4a22" style={{ fontSize: "19px", fontWeight: 300, letterSpacing: "-.02em" }}>1957</text>
    </svg>
  );
}
