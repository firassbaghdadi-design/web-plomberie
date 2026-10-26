import Link from "next/link";
import { PATHS } from "@/lib/site";

export type Focus = "toit" | "chauffage" | "bain" | "eau" | "cave";

const legend: { key: Focus; n: string; label: string; detail: string; href: string }[] = [
  { key: "toit", n: "01", label: "Toiture", detail: "couverture, chéneaux, descentes", href: PATHS.roofing },
  { key: "chauffage", n: "02", label: "Chauffage", detail: "chaudière, radiateurs, climatisation", href: PATHS.heating },
  { key: "bain", n: "03", label: "Sanitaires", detail: "douche, lavabo, salle de bains", href: PATHS.bathroom },
  { key: "eau", n: "04", label: "Robinetterie", detail: "cuisine, arrivées d'eau", href: PATHS.plumbing },
  { key: "cave", n: "05", label: "Canalisations", detail: "colonnes, évacuations, dégorgement", href: PATHS.emergency },
];

/** Petit délai d'animation, en millisecondes, pour que le dessin se trace de la cave au toit. */
const d = (ms: number) => ({ ["--d" as string]: `${ms}ms` });

/**
 * Signature de Martinet Thibault : un immeuble parisien en coupe, de la cave au toit, et ses réseaux.
 * Eau froide en bleu, eau chaude en cuivre, zinc et évacuations en encre. Le dessin se trace à l'ouverture,
 * l'eau circule ensuite dans les tuyaux ; survoler la légende isole un métier.
 */
export function Coupe({ focus, legendLinks = true, className = "" }: { focus?: Focus; legendLinks?: boolean; className?: string }) {
  return (
    <figure className={`coupe ${className}`} data-focus={focus}>
      <div className="coupe-plate">
        <span className="coupe-tag coupe-tag-tl" aria-hidden="true">Coupe A–A</span>
        <span className="coupe-tag coupe-tag-tr" aria-hidden="true">Immeuble parisien · sans échelle</span>
        <svg viewBox="0 0 560 700" className="coupe-svg" role="img" aria-label="Schéma d'un immeuble parisien en coupe : toiture et chéneaux, chauffage, salle de bains, cuisine et canalisations, de la cave au toit">
          <defs>
            <pattern id="zinc" width="14" height="10" patternUnits="userSpaceOnUse">
              <path d="M7 0V10" stroke="currentColor" strokeWidth="0.8" opacity="0.55" />
            </pattern>
          </defs>

          {/* Bâti */}
          <g className="g g-bati">
            <path className="draw thin" pathLength={1} style={d(0)} d="M40 640H520" />
            <path className="draw thin dash" pathLength={1} style={d(80)} d="M70 640V690H490V640" />
            <path className="draw" pathLength={1} style={d(120)} d="M70 640V280M490 640V280" />
            <path className="draw" pathLength={1} style={d(200)} d="M70 520H490M70 400H490M58 280H502" />
            <path className="draw thin" pathLength={1} style={d(260)} d="M58 286H502" />
            <text className="lvl" x="78" y="632">RDC</text>
            <text className="lvl" x="78" y="512">1er</text>
            <text className="lvl" x="78" y="392">2e</text>
            <text className="lvl" x="78" y="682">Cave</text>
          </g>

          {/* 01 — Toiture : mansarde en zinc, cheminée, chéneau et descente */}
          <g className="g g-toit">
            <path d="M62 280L104 190H456L498 280Z" fill="url(#zinc)" className="zinc" />
            <path className="draw" pathLength={1} style={d(380)} d="M62 280L104 190H456L498 280" />
            <path className="draw" pathLength={1} style={d(460)} d="M372 190V158H396V190M368 158H400" />
            <path className="draw thin" pathLength={1} style={d(520)} d="M150 236h34v28h-34zM263 236h34v28h-34zM376 236h34v28h-34z" />
            <path className="draw zinc-pipe" pathLength={1} style={d(600)} d="M496 276h14v8h-14M510 284V640" />
            <path className="flow flow-rain" pathLength={1} d="M510 284V640" />
            <circle className="dot" cx="520" cy="230" r="11" />
            <text className="num" x="520" y="234">01</text>
          </g>

          {/* 02 — Chauffage : chaudière murale, boucle d'eau chaude, radiateur */}
          <g className="g g-chauffage">
            <rect className="draw" pathLength={1} style={d(700)} x="384" y="296" width="44" height="58" rx="3" />
            <path className="draw thin" pathLength={1} style={d(760)} d="M394 310h24M394 318h24" />
            <circle className="draw thin" pathLength={1} style={d(780)} cx="406" cy="336" r="6" />
            <path className="draw hot" pathLength={1} style={d(820)} d="M392 354V368H150V346" />
            <path className="draw hot" pathLength={1} style={d(860)} d="M420 354V384H200V378" />
            <path className="flow flow-hot" pathLength={1} d="M392 354V368H150V346" />
            <path className="draw" pathLength={1} style={d(900)} d="M118 346h96v32h-96z" />
            <path className="draw thin" pathLength={1} style={d(940)} d="M130 346v32M142 346v32M154 346v32M166 346v32M178 346v32M190 346v32M202 346v32" />
            <circle className="dot" cx="452" cy="312" r="11" />
            <text className="num" x="452" y="316">02</text>
          </g>

          {/* 03 — Salle de bains : lavabo, douche */}
          <g className="g g-bain">
            <path className="draw cold" pathLength={1} style={d(980)} d="M280 492H424V430H444" />
            <path className="flow flow-cold" pathLength={1} d="M280 492H424V430H444" />
            <path className="draw" pathLength={1} style={d(1040)} d="M436 424h18M445 424v-4" />
            <path className="draw thin dash" pathLength={1} style={d(1080)} d="M440 434l-6 30M446 434v30M452 434l6 30" />
            <path className="draw" pathLength={1} style={d(1100)} d="M400 508h80v8h-80z" />
            <path className="draw cold" pathLength={1} style={d(1140)} d="M280 470H192V446" />
            <path className="flow flow-cold" pathLength={1} d="M280 470H192V446" />
            <path className="draw" pathLength={1} style={d(1180)} d="M164 446h54l-6 14h-42z" />
            <path className="draw thin" pathLength={1} style={d(1200)} d="M192 446v-8h10" />
            <circle className="dot" cx="470" cy="462" r="11" />
            <text className="num" x="470" y="466">03</text>
          </g>

          {/* 04 — Cuisine : évier et robinet */}
          <g className="g g-eau">
            <path className="draw cold" pathLength={1} style={d(1240)} d="M280 600H150V572" />
            <path className="flow flow-cold" pathLength={1} d="M280 600H150V572" />
            <path className="draw" pathLength={1} style={d(1300)} d="M150 572v-10h16v6" />
            <path className="draw" pathLength={1} style={d(1320)} d="M112 580h84v-8M112 580v-8M126 580v16h56v-16" />
            <path className="draw thin" pathLength={1} style={d(1340)} d="M98 596h112v44" />
            <circle className="dot" cx="104" cy="548" r="11" />
            <text className="num" x="104" y="552">04</text>
          </g>

          {/* 05 — Canalisations : compteur en cave, colonne montante, chute d'évacuation */}
          <g className="g g-cave">
            <path className="draw cold thick" pathLength={1} style={d(500)} d="M280 690V300H384" />
            <path className="flow flow-cold" pathLength={1} d="M280 690V300H384" />
            <circle className="draw" pathLength={1} style={d(540)} cx="280" cy="664" r="9" />
            <path className="draw drain" pathLength={1} style={d(620)} d="M330 300V690M330 508H400M330 616H182" />
            <circle className="dot" cx="236" cy="664" r="11" />
            <text className="num" x="236" y="668">05</text>
          </g>
        </svg>
        <div className="coupe-key" aria-hidden="true">
          <span><i className="k-cold" /> Eau froide</span>
          <span><i className="k-hot" /> Eau chaude</span>
          <span><i className="k-drain" /> Évacuations</span>
        </div>
      </div>
      <figcaption className="coupe-legend">
        <ol>
          {legend.map((l) => (
            <li key={l.key} className={`lg lg-${l.key}`}>
              {legendLinks ? (
                <Link href={l.href} className="lg-link">
                  <span className="lg-n">{l.n}</span>
                  <span className="lg-t">
                    <strong>{l.label}</strong>
                    <small>{l.detail}</small>
                  </span>
                </Link>
              ) : (
                <span className="lg-link">
                  <span className="lg-n">{l.n}</span>
                  <span className="lg-t">
                    <strong>{l.label}</strong>
                    <small>{l.detail}</small>
                  </span>
                </span>
              )}
            </li>
          ))}
        </ol>
      </figcaption>
    </figure>
  );
}
