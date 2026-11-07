/** La ligne « bon pour devis » d'un bon de travaux : un filet pointillé qui se trace quand il arrive à l'écran. */
export function Signature() {
  return (
    <svg viewBox="0 0 400 24" className="signature h-6 w-full" preserveAspectRatio="none" aria-hidden="true">
      <path d="M2 20H398" stroke="#9c4a22" strokeWidth="1" strokeDasharray="1 5" strokeLinecap="round" fill="none" pathLength={600} />
    </svg>
  );
}
