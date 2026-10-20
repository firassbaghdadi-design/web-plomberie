import { business, googleReviews, shortAnswer } from "@/lib/site";
import { PhoneIcon, Stars } from "./Icons";

function PipeArt() {
  return (
    <svg viewBox="0 0 480 560" role="img" aria-label="Schéma de canalisation avec vanne" className="h-full w-full">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" fill="none" stroke="#9FD3E6" strokeOpacity="0.14" />
        </pattern>
      </defs>
      <rect width="480" height="560" fill="#0F3A4E" />
      <rect width="480" height="560" fill="url(#grid)" />
      <g fill="none" stroke="#4CAAC9" strokeWidth="22" strokeLinecap="round" strokeLinejoin="round">
        <path d="M-10 120H200a60 60 0 0 1 60 60V300" />
        <path d="M260 300V400a60 60 0 0 0 60 60H490" />
      </g>
      <g fill="none" stroke="#0F3A4E" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.5">
        <path d="M-10 120H200a60 60 0 0 1 60 60V300" />
        <path d="M260 300V400a60 60 0 0 0 60 60H490" />
      </g>
      <g stroke="#DCEFF6" strokeWidth="6" fill="#0F3A4E" strokeLinecap="round">
        <rect x="236" y="296" width="48" height="26" rx="2" />
        <rect x="236" y="354" width="48" height="26" rx="2" />
        <circle cx="260" cy="338" r="28" />
        <path d="M260 310V260M236 260h48" />
      </g>
      <g stroke="#9FD3E6" strokeOpacity="0.55" strokeWidth="2" fill="none" strokeDasharray="5 6">
        <path d="M200 520H420" />
        <path d="M200 508V532M420 508V532" />
      </g>
      <text x="420" y="494" textAnchor="end" fill="#9FD3E6" fillOpacity="0.9" fontSize="15" letterSpacing="3">
        PARIS 14E
      </text>
    </svg>
  );
}

export function Hero() {
  const rating = googleReviews.rating.toString().replace(".", ",");
  return (
    <section aria-labelledby="titre-principal" className="border-b border-line">
      <div className="container-x grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-24">
        <div>
          <p className="eyebrow">Plomberie · Chauffage · Salles de bains</p>
          <h1 id="titre-principal" className="mt-4 text-[2.5rem] leading-[1.08] sm:text-5xl lg:text-[3.6rem]">
            Plombier à Paris 14e,
            <span className="block text-brand-dark">{business.name}</span>
          </h1>
          <p className="reponse-bref mt-6 max-w-xl text-lg">
            <strong className="font-medium text-ink">En bref — </strong>
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
          <a href="#avis" className="mt-8 inline-flex items-center gap-3 text-sm text-ink hover:text-brand-dark">
            <Stars />
            <span>
              <strong className="font-medium">{rating}/5</strong> sur Google · {googleReviews.count} avis
            </span>
          </a>
        </div>

        <div className="relative mx-auto aspect-[6/7] w-full max-w-md overflow-hidden shadow-[0_24px_60px_-28px_rgba(15,58,78,0.6)] lg:max-w-none">
          <PipeArt />
          <div className="absolute bottom-5 left-5 bg-paper px-4 py-3 shadow-md">
            <p className="font-display text-2xl leading-none text-ink">+ de 80 ans</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-brand-dark">à Paris et en région parisienne</p>
          </div>
        </div>
      </div>
    </section>
  );
}
