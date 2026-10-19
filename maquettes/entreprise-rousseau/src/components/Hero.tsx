import { business, shortAnswer } from "@/lib/site";
import { PhoneIcon } from "./Icons";

function PipeArt() {
  return (
    <svg viewBox="0 0 480 560" role="img" aria-label="Schéma de canalisation en cuivre avec vanne" className="h-full w-full">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" stroke="#E9C7B3" strokeOpacity="0.12" />
        </pattern>
      </defs>
      <rect width="480" height="560" fill="#12263A" />
      <rect width="480" height="560" fill="url(#grid)" />
      <g fill="none" stroke="#C8653A" strokeWidth="22" strokeLinecap="round" strokeLinejoin="round">
        <path d="M-10 120H200a60 60 0 0 1 60 60V300" />
        <path d="M260 300V400a60 60 0 0 0 60 60H490" />
      </g>
      <g fill="none" stroke="#12263A" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.55">
        <path d="M-10 120H200a60 60 0 0 1 60 60V300" />
        <path d="M260 300V400a60 60 0 0 0 60 60H490" />
      </g>
      <g stroke="#E9C7B3" strokeWidth="6" fill="#12263A" strokeLinecap="round">
        <rect x="236" y="296" width="48" height="26" rx="6" />
        <rect x="236" y="354" width="48" height="26" rx="6" />
        <circle cx="260" cy="338" r="28" />
        <path d="M260 310V260M236 260h48" />
      </g>
      <g stroke="#E9C7B3" strokeOpacity="0.55" strokeWidth="2" fill="none" strokeDasharray="5 6">
        <path d="M200 520H420" />
        <path d="M200 508V532M420 508V532" />
      </g>
      <text x="420" y="494" textAnchor="end" fill="#E9C7B3" fillOpacity="0.8" fontSize="15" letterSpacing="3">
        PARIS 14E
      </text>
    </svg>
  );
}

export function Hero() {
  return (
    <section aria-labelledby="titre-principal" className="border-b border-line">
      <div className="container-x grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-20">
        <div>
          <p className="eyebrow">Plomberie · Chauffage · Salles de bains</p>
          <h1 id="titre-principal" className="mt-4 text-[2.5rem] font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.6rem]">
            Plombier à Paris 14e,
            <span className="block text-copper-dark">{business.name}</span>
          </h1>
          <p className="reponse-bref mt-6 max-w-xl text-lg text-ink-soft">
            <strong className="font-semibold text-ink">En bref — </strong>
            {shortAnswer}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${business.phoneTel}`} data-track="phone_call_click" className="btn-primary">
              <PhoneIcon />
              Appeler le {business.phoneDisplay}
            </a>
            <a href="#services" className="btn-ghost">
              Découvrir nos services
            </a>
          </div>
        </div>

        <div className="relative mx-auto aspect-[6/7] w-full max-w-md overflow-hidden rounded-2xl shadow-[0_24px_60px_-28px_rgba(18,38,58,0.7)] lg:max-w-none">
          <PipeArt />
          <div className="absolute bottom-5 left-5 rounded-lg bg-paper px-4 py-3 shadow-md">
            <p className="font-display text-3xl font-semibold leading-none">{business.foundingYear}</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-copper-dark">Entreprise familiale</p>
          </div>
        </div>
      </div>
    </section>
  );
}
