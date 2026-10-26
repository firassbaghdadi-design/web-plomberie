/** Schémas sobres (SVG en ligne, traits fins) : zone d'intervention et repère d'accès. */

const CX = 280;
const CY = 220;
const FONT = "'Inter Variable', Inter, system-ui, sans-serif";

const polar = (deg: number, r: number): [number, number] => {
  const a = (deg * Math.PI) / 180;
  return [CX + r * 1.22 * Math.sin(a), CY - r * Math.cos(a)];
};

function ring(from: number, to: number, inner: number, outer: number) {
  const steps = Math.max(6, Math.round((to - from) / 6));
  const pts: string[] = [];
  for (let i = 0; i <= steps; i++) pts.push(polar(from + ((to - from) * i) / steps, outer).map((v) => v.toFixed(1)).join(" "));
  for (let i = steps; i >= 0; i--) pts.push(polar(from + ((to - from) * i) / steps, inner).map((v) => v.toFixed(1)).join(" "));
  return `M${pts.join(" L")} Z`;
}

export function ZoneMap() {
  const paris = ring(0, 360, 0, 58).split(" L").slice(0, 61).join(" L") + " Z";
  const pin = polar(8, 42);
  const zones = [
    { id: "93", name: "Seine-Saint-Denis", from: 335, to: 465, label: polar(48, 118) },
    { id: "94", name: "Val-de-Marne", from: 105, to: 185, label: polar(146, 118) },
    { id: "92", name: "Hauts-de-Seine", from: 185, to: 335, label: polar(262, 118) },
  ];
  return (
    <figure className="mx-auto w-full max-w-[600px]">
      <svg viewBox="0 0 560 420" role="img" aria-labelledby="zone-title zone-desc" className="h-auto w-full">
        <title id="zone-title">Croquis de la zone d'intervention de Gaz Flash</title>
        <desc id="zone-desc">Paris au centre, entouré des Hauts-de-Seine à l'ouest, de la Seine-Saint-Denis au nord et à l'est, et du Val-de-Marne au sud-est. Le 18e arrondissement, où se trouve l'entreprise, est marqué au nord de Paris.</desc>
        {zones.map((z) => (
          <path key={z.id} d={ring(z.from + 1.2, z.to - 1.2, 66, 168)} fill="#f6f5f3" stroke="#d9d6d0" strokeWidth="1" />
        ))}
        <path d={paris} fill="#fbedeb" stroke="#e4342b" strokeWidth="1" />
        {zones.map((z) => (
          <g key={`t${z.id}`} fontFamily={FONT} fill="#15181b" textAnchor="middle">
            <text x={z.label[0]} y={z.label[1] - 4} fontSize="30" fontWeight="300" letterSpacing="-0.5">{z.id}</text>
            <text x={z.label[0]} y={z.label[1] + 18} fontSize="11" fontWeight="500" letterSpacing="1.6" fill="#5d636a">{z.name.toUpperCase()}</text>
          </g>
        ))}
        <text x={CX} y={CY + 26} textAnchor="middle" fontFamily={FONT} fontSize="22" fontWeight="300" fill="#15181b">Paris</text>
        <circle cx={pin[0]} cy={pin[1]} r="5" fill="#e4342b" />
        <circle cx={pin[0]} cy={pin[1]} r="11" fill="none" stroke="#e4342b" strokeWidth="1" opacity="0.5" />
        <path d={`M${pin[0].toFixed(1)} ${(pin[1] - 12).toFixed(1)} L${pin[0].toFixed(1)} 34`} stroke="#15181b" strokeWidth="1" />
        <text x={pin[0]} y="24" textAnchor="middle" fontFamily={FONT} fontSize="11" fontWeight="500" letterSpacing="1.6" fill="#15181b">GAZ FLASH · PARIS 18E</text>
      </svg>
      <figcaption className="label mt-3 text-center text-ink-soft">Croquis de la zone d'intervention, pas à l'échelle</figcaption>
    </figure>
  );
}

export function AccessSketch() {
  return (
    <figure className="w-full max-w-[540px]">
      <svg viewBox="0 0 520 250" role="img" aria-labelledby="acc-title acc-desc" className="h-auto w-full">
        <title id="acc-title">Croquis d'accès à Gaz Flash</title>
        <desc id="acc-desc">Le 7 rue Sainte-Isaure, où se trouve l'entreprise, à une courte distance à pied de la place Jules-Joffrin et de la station de métro de la ligne 12.</desc>
        <g fill="none" stroke="#d9d6d0" strokeWidth="1">
          <path d="M10 72 H510 M10 100 H510" />
          <path d="M126 10 V240 M156 10 V240" />
          <path d="M362 10 V240 M394 10 V240" />
        </g>
        <path d="M141 112 C200 150 290 150 378 112" fill="none" stroke="#e4342b" strokeWidth="1.5" strokeDasharray="2 6" strokeLinecap="round" />
        <circle cx="141" cy="112" r="6" fill="#e4342b" />
        <circle cx="141" cy="112" r="12" fill="none" stroke="#e4342b" strokeWidth="1" opacity="0.5" />
        <circle cx="378" cy="112" r="13" fill="#fff" stroke="#15181b" strokeWidth="1" />
        <text x="378" y="117" textAnchor="middle" fontFamily={FONT} fontWeight="400" fontSize="14" fill="#15181b">M</text>
        <g fontFamily={FONT} fill="#15181b">
          <text x="24" y="196" fontSize="15" fontWeight="400">7 rue Sainte-Isaure</text>
          <text x="282" y="180" fontSize="15" fontWeight="400">Place Jules-Joffrin</text>
          <text x="282" y="200" fontSize="10.5" fontWeight="500" letterSpacing="1.4" fill="#5d636a">MÉTRO LIGNE 12</text>
          <text x="226" y="164" fontSize="10.5" fontWeight="500" letterSpacing="1.4" fill="#b3241c">À PIED</text>
        </g>
      </svg>
      <figcaption className="mt-3 text-[0.85rem] text-ink-soft">Croquis de repérage, pas à l'échelle : la place Jules-Joffrin est à moins de 200 mètres à vol d'oiseau, d'après les coordonnées de la fiche Google.</figcaption>
    </figure>
  );
}
