import Link from "next/link";
import { BrassPlumb } from "@/components/BrassPlumb";
import { ArrowIcon } from "@/components/Icons";
import { Img } from "@/components/Img";
import { JsonLd } from "@/components/JsonLd";
import { Brief, Cote, CtaBand, CtaButtons, FaqList, Frame, Label, LocalBlock, d, fr } from "@/components/Sections";
import { Skyline } from "@/components/Skyline";
import { about, home } from "@/lib/content";
import { localPages } from "@/lib/local";
import { allPages } from "@/lib/pages";
import { photoAlt, sitePhotos } from "@/lib/photos";
import { PATHS, business, type Faq } from "@/lib/site";
import { faqNode, pageMeta, webPageNode } from "@/lib/seo";

export const metadata = pageMeta({ title: home.title, description: home.description, path: "/" });

const listOf = (path: string) => allPages.find((p) => p.path === path)?.sections.find((s) => s.originalList)?.list ?? [];

const trades = [
  { href: PATHS.plumbing, n: "02.1", t: "Plomberie", d: "Du robinet qui goutte à la salle de bains refaite.", items: listOf(PATHS.plumbing), photo: "plans" },
  { href: PATHS.roofing, n: "02.2", t: "Couverture", d: "Toitures, chéneaux et descentes : l'eau de pluie, du faîtage à l'égout.", items: listOf(PATHS.roofing), photo: "zinc" },
  { href: PATHS.heating, n: "02.3", t: "Chauffage", d: "Chaudières, radiateurs et eau chaude : installation, réparation, entretien.", items: listOf(PATHS.heating), photo: "chantier" },
  { href: "/renovation-salle-de-bains-paris-15", n: "02.4", t: "Petite maçonnerie", d: "Saignées, scellements et reprises qui accompagnent les travaux, par la même équipe.", items: [], photo: "carrelage" },
];

const clients = [
  { t: "Particuliers", d: "Un appartement, une maison de ville, une salle de bains à refaire ou une fuite à arrêter : l'équipe vient chez vous, sur rendez-vous." },
  { t: "Professionnels", d: "Commerces, bureaux et locaux d'activité du quartier : l'intervention s'organise selon vos horaires d'ouverture." },
  { t: "Syndics", d: "Colonnes, descentes, toitures et chauffage collectif : plombiers et couvreurs dans la même entreprise, pour les parties communes." },
];

const faq: Faq[] = [
  {
    q: "Où se trouve l'Entreprise Clairon ?",
    a: "Au 23 rue d'Ouessant, 75015 Paris, entre les stations Dupleix et La Motte-Picquet–Grenelle. L'entreprise se joint au 01 47 83 88 40 ou par e-mail à info@clairon.org.",
  },
  {
    q: "Depuis quand l'entreprise existe-t-elle ?",
    a: "L'Entreprise Clairon est une entreprise familiale créée en 1943, installée dans le 15e arrondissement de Paris. Elle réunit aujourd'hui une équipe de compagnons qualifiés.",
  },
  {
    q: "Quels sont les métiers de l'Entreprise Clairon ?",
    a: "La plomberie (sanitaire, robinetterie, tuyauterie, rénovation de salle de bains), la couverture, le chauffage et la petite maçonnerie. Une même équipe peut ainsi suivre l'eau du toit jusqu'à la cave.",
  },
  {
    q: "Comment prendre rendez-vous ?",
    a: "Par téléphone au 01 47 83 88 40, ou par le formulaire de contact en décrivant votre demande et l'adresse du lieu, photos à l'appui si vous le souhaitez. L'entreprise vous recontacte pour fixer le rendez-vous.",
  },
];

/**
 * Surimpression du héros, dans le repère de la photo (toits en zinc, tour Eiffel à l'horizon, 16:9) :
 * l'axe d'aplomb de la tour, sa hauteur cotée et une cote horizontale sur la ligne des toits.
 * Même cadrage que l'image (xMidYMid slice), donc les traits restent posés sur la tour à toutes les largeurs.
 */
function HeroCotes() {
  const c = "rgb(var(--accent-hi))";
  return (
    <svg viewBox="0 0 1000 562.5" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <g fill="none" stroke={c} strokeWidth="1" vectorEffect="non-scaling-stroke">
        {/* Axe d'aplomb de la tour */}
        <path d="M497 22 V100" strokeDasharray="5 4 1 4" strokeOpacity=".75" vectorEffect="non-scaling-stroke" className="draw" style={{ ["--len" as string]: 90, ["--d" as string]: "700ms" }} />
        <circle cx="497" cy="104" r="5" strokeOpacity=".9" vectorEffect="non-scaling-stroke" />
        <path d="M489 104 H505" strokeOpacity=".9" vectorEffect="non-scaling-stroke" />
        {/* Lignes d'attache et cote verticale : hauteur de la tour */}
        <path d="M506 104 H548 M512 249 H548" strokeOpacity=".55" vectorEffect="non-scaling-stroke" />
        <path d="M540 104 V249" strokeOpacity=".95" vectorEffect="non-scaling-stroke" className="draw" style={{ ["--len" as string]: 150, ["--d" as string]: "900ms" }} />
        <path d="M535 109 L545 99 M535 254 L545 244" strokeOpacity=".95" vectorEffect="non-scaling-stroke" />
        {/* Cote horizontale, ligne des toits */}
        <path d="M600 262 H840" strokeOpacity=".6" vectorEffect="non-scaling-stroke" className="draw" style={{ ["--len" as string]: 250, ["--d" as string]: "1100ms" }} />
        <path d="M596 267 L604 257 M836 267 L844 257 M600 254 V270 M840 254 V270" strokeOpacity=".6" vectorEffect="non-scaling-stroke" />
      </g>
      <g fill={c} fontFamily="'IBM Plex Mono', monospace" fontSize="8.5" letterSpacing="1.6" stroke="rgba(8,21,38,.4)" strokeWidth="1.1" paintOrder="stroke" strokeLinejoin="round">
        <text x="556" y="180" opacity=".95">330 M</text>
        <text x="556" y="192" opacity=".85" fontSize="6.5">TOUR EIFFEL · 1889</text>
        <text x="720" y="252" opacity=".85" fontSize="6.5" textAnchor="middle">LIGNE DES TOITS · ZINC</text>
        <text x="505" y="18" opacity=".85" fontSize="6.5">AXE D&apos;APLOMB</text>
      </g>
    </svg>
  );
}

export default function HomePage() {
  const nodes = [webPageNode({ title: home.title, description: home.description, path: "/" }), faqNode(faq)];
  const years = new Date().getFullYear() - Number(business.founded);
  /** Photos de l'entreprise d'abord (site actuel, récupérées au build) ; photos du quartier et Pexels sinon. */
  const own = sitePhotos;
  return (
    <>
      {/* Héros : une planche. Bandeau de titre, grande photo des toits cotée, fil à plomb en laiton, cartouche. */}
      <section className="relative pt-3 sm:pt-5">
        <div className="wrap">
          <div className="label fade-in flex items-center justify-between gap-6 border-b border-white/15 pb-3" style={d(60)}>
            <span>Planche 01 <span className="text-white/30">—</span> <span className="text-ink-soft">Paris 15e<span className="hidden sm:inline"> · Plomberie · Couverture · Chauffage</span></span></span>
            <span className="hidden lg:inline">Entreprise familiale fondée en <span className="text-ink">{business.founded}</span></span>
            <span>23 rue d&apos;Ouessant</span>
          </div>

          <div className="relative mt-7 sm:mt-9">
            <div className="frame-box h-[66svh] min-h-[440px] sm:h-[min(calc(100svh-var(--head-h)-11rem),780px)] sm:min-h-[480px]">
              <div className="frame-img absolute inset-0 overflow-hidden bg-mist">
                <div className="slow-zoom absolute inset-0">
                  <Img id="toits-eiffel" alt={photoAlt("toits-eiffel")} priority className="absolute inset-0" />
                  <HeroCotes />
                </div>
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,21,38,.94)_0%,rgba(8,21,38,.62)_34%,rgba(8,21,38,0)_62%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(8,21,38,.55)_0%,rgba(8,21,38,0)_55%)]" />
              </div>
              {/* Le fil à plomb, suspendu au cadre */}
              <BrassPlumb cord={150} founded={business.founded} className="absolute right-[7%] top-0 w-[46px] sm:right-[8%] sm:w-[64px] lg:w-[84px]" />
              <p className="label absolute right-[8%] top-3 hidden -translate-x-[100px] text-brass lg:block">Fil à plomb · laiton</p>

              <div className="absolute inset-x-0 bottom-0 px-5 pb-6 sm:px-10 sm:pb-10 lg:flex lg:items-end lg:justify-between lg:gap-10 lg:px-14 lg:pb-12">
                <div>
                <p className="label fade-in text-accent" style={d(80)}>Plombier · couvreur · chauffagiste depuis {business.founded}</p>
                <h1 className="mt-4 text-[2.45rem] font-[300] leading-[0.98] tracking-[-0.035em] sm:mt-6 sm:text-[4.4rem] lg:text-[5.4rem] xl:text-[6.1rem]">
                  <span className="line-up"><span>Plombier, couvreur</span></span>
                  <span className="line-up"><span style={d(120)}>et chauffagiste</span></span>
                  <span className="line-up"><span style={d(240)} className="text-accent">à Paris 15e</span></span>
                </h1>
                </div>
                <div className="fade-in hidden shrink-0 flex-col items-end gap-4 pb-2 lg:flex" style={d(600)}>
                  <Link href="/contact" className="btn-primary" data-track="cta_devis">Demander un devis <ArrowIcon /></Link>
                  <a href={`tel:${business.phoneTel}`} className="link-line font-mono text-[1.05rem] font-normal tracking-[0.04em]" data-track="cta_tel">{business.phoneDisplay}</a>
                  <p className="label text-ink-soft">Urgence fuite · appel direct</p>
                </div>
              </div>
            </div>
            <figcaption className="mt-4 hidden justify-between gap-6 font-mono text-[0.64rem] uppercase tracking-[0.16em] text-ink-faint sm:flex">
              <span><span className="text-accent">Fig. 00</span> · {photoAlt("toits-eiffel")}</span>
              <span className="shrink-0">48° 51′ N · 2° 18′ E</span>
            </figcaption>
          </div>

          <div className="grid gap-8 pb-14 pt-8 sm:pt-10 lg:grid-cols-12 lg:items-end lg:gap-10 lg:pb-20">
            <p className="fade-in max-w-xl text-[1.08rem] leading-relaxed text-ink-soft lg:col-span-5" style={d(450)}>
              Depuis {business.founded}, l&apos;Entreprise Clairon répare, installe et entretient la plomberie, les toitures et le chauffage du quartier, avec une équipe de compagnons qualifiés installée rue d&apos;Ouessant.
            </p>
            <div className="fade-in lg:hidden" style={d(600)}><CtaButtons label="Demander un devis" /></div>
            <div className="hidden lg:col-span-4 lg:block" aria-hidden="true"><Cote>Échelle 1 : 1 · Paris 15e</Cote></div>
            <dl className="cartouche fade-in grid-cols-2 lg:col-span-3" style={d(700)}>
              <div className="col-span-2"><dt>Entreprise</dt><dd>Clairon · Paris 15e</dd></div>
              <div className="border-r border-white/15"><dt>Fondée</dt><dd>{business.founded}</dd></div>
              <div><dt>Métiers</dt><dd>4, une équipe</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <Brief text={home.brief} start />

      {/* 01 — Qui sommes-nous : textes du site actuel */}
      <section id="entreprise" aria-labelledby="titre-entreprise" className="scroll-mt-24 border-t border-line py-20 sm:py-32">
        <div className="wrap grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Label n="01">L&apos;entreprise</Label>
            <h2 id="titre-entreprise" className="h2 mt-6" data-reveal>{fr("Qui sommes-nous ?")}</h2>
            <div className="prose-c mt-8 max-w-xl text-[1.08rem]" data-reveal>
              {about.paras.map((p) => <p key={p.slice(0, 30)}>{fr(p)}</p>)}
            </div>
            <dl className="mt-12 grid grid-cols-3 border-y border-white/20" data-reveal>
              {[[business.founded, "Création"], [`${years} ans`, "Dans le 15e"], ["N° 23", "Rue d'Ouessant"]].map(([y, t], i) => (
                <div key={t} className={`py-5 ${i ? "border-l border-white/15 pl-4" : ""}`}>
                  <dt className="label">{t}</dt>
                  <dd className="mt-2 font-mono text-[1.35rem] font-light text-ink sm:text-[1.8rem]">{y}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="lg:col-span-7">
            {own[0] ? (
              <Frame id="site-0" src={own[0].src} alt={own[0].alt || "Photo publiée par l'Entreprise Clairon"} fig="01" cote="Réalisation · Entreprise Clairon" className="aspect-[4/3] lg:aspect-[6/5]" />
            ) : (
              <Frame id="chantier" fig="01" cote="Chantier · rénovation intérieure" caption="Une équipe de compagnons qualifiés, du chantier à la finition." className="aspect-[4/3] lg:aspect-[6/5]" />
            )}
          </div>
        </div>
      </section>

      {/* 02 — Les métiers : quatre grandes planches photo */}
      <section aria-labelledby="titre-metiers" className="border-t border-line py-20 sm:py-32">
        <div className="wrap">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <Label n="02">Nos métiers</Label>
              <h2 id="titre-metiers" className="h2 mt-6" data-reveal>Plomberie, couverture, chauffage et petite maçonnerie</h2>
            </div>
            <p className="max-w-lg self-end text-[1.06rem] lg:col-span-5 lg:col-start-8" data-reveal>{about.description}</p>
          </div>
          <ul className="mt-16 grid gap-x-12 gap-y-16 md:grid-cols-2 lg:gap-y-24">
            {trades.map((t, i) => (
              <li key={t.t} className={i % 2 ? "md:mt-24" : ""} data-reveal style={d(i * 60)}>
                <Link href={t.href} className="row-link group block">
                  <div className="frame-box">
                    <div className="img-zoom frame-img">
                      <Img id={t.photo} alt={photoAlt(t.photo)} className="aspect-[4/3]" />
                    </div>
                  </div>
                  <div className="mt-6 flex items-baseline justify-between gap-6 border-b border-white/20 pb-5">
                    <span className="flex items-baseline gap-5">
                      <span className="font-mono text-[0.7rem] tracking-[0.16em] text-accent">FIG. {t.n}</span>
                      <span className="row-title block text-[2rem] font-light leading-none tracking-tight text-ink sm:text-[2.5rem]">{t.t}</span>
                    </span>
                    <ArrowIcon className="row-arrow h-5 w-5 shrink-0 text-ink-faint" />
                  </div>
                  <p className="mt-5 max-w-md">{fr(t.d)}</p>
                  {t.items.length ? (
                    <span className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 font-mono text-[0.78rem] tracking-[0.02em] text-ink">
                      {t.items.slice(0, 6).map((it) => <span key={it} className="whitespace-nowrap"><span className="text-accent">+</span> {it}</span>)}
                    </span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 03 — Le quartier : une grande photo du 15e, et le quartier tracé au trait */}
      <section aria-labelledby="titre-aplomb" className="border-t border-line pt-20 sm:pt-32">
        <div className="wrap grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Label n="03">Le quartier</Label>
            <h2 id="titre-aplomb" className="h2 mt-6" data-reveal>D&apos;aplomb depuis {business.founded}, à l&apos;ombre de la tour Eiffel</h2>
          </div>
          <div className="prose-c max-w-xl self-end lg:col-span-5 lg:col-start-8" data-reveal>
            <p>Le mot « plombier » vient du plomb, <em>plumbum</em> en latin : le métal des premières conduites d&apos;eau, et celui du fil à plomb qui dit si un mur est droit. Être d&apos;aplomb, c&apos;est être juste et solide.</p>
            <p>Notre voisine la tour Eiffel l&apos;est depuis 1889. L&apos;Entreprise Clairon, depuis {business.founded}, au pied des immeubles de Grenelle et des tours du Front de Seine.</p>
          </div>
        </div>
        <div className="wrap mt-14 sm:mt-20">
          <Frame id="javel" fig="03" cote="Paris 15e · port de Javel · Front de Seine" className="aspect-[4/3] sm:aspect-[21/9]" />
        </div>
        <div className="mt-6 text-white/80 sm:mt-10" data-reveal>
          <div className="mx-auto max-w-[96rem]"><Skyline /></div>
        </div>
        <div className="wrap border-t border-line py-14 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-12">
            <p className="label lg:col-span-3">Près de chez vous</p>
            <ul className="grid gap-x-10 sm:grid-cols-2 lg:col-span-9 lg:grid-cols-3">
              {localPages.map((p) => (
                <li key={p.slug} className="border-b border-line">
                  <Link href={p.path} className="row-link flex items-center justify-between gap-3 py-4 text-[1rem] text-ink">
                    <span className="row-title">{p.crumb}</span> <ArrowIcon className="row-arrow h-4 w-4 shrink-0 text-ink-faint" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 04 — Pour qui */}
      <section aria-labelledby="titre-clients" className="border-t border-line py-20 sm:py-32">
        <div className="wrap">
          <Label n="04">Pour qui</Label>
          <h2 id="titre-clients" className="h2 mt-6 max-w-3xl" data-reveal>{fr("Particuliers, professionnels et syndics : une même exigence")}</h2>
          <div className="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-3">
            {clients.map((c, i) => (
              <div key={c.t} className="border-t border-white/40 pt-7" data-reveal style={d(i * 90)}>
                <p className="font-mono text-[0.68rem] tracking-[0.18em] text-accent">0{i + 1}</p>
                <p className="mt-3 text-[1.6rem] font-light text-ink">{c.t}</p>
                <p className="mt-4">{fr(c.d)}</p>
              </div>
            ))}
          </div>
          <div className="mt-20 grid items-end gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Frame id="toits" fig="04.1" cote="Couverture · intervention en toiture" caption="Chaque intervention commence par un constat sur place." className="aspect-[16/11]" />
            </div>
            <div className="lg:col-span-5">
              <Frame id="mairie15" fig="04.2" className="aspect-[4/3]" />
              <p className="mt-10 text-[1.35rem] font-light leading-snug text-ink sm:text-[1.6rem]" data-reveal>Organisez votre rendez-vous en nous contactant.</p>
              <div className="mt-8"><CtaButtons label="Demander un devis" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* Photos publiées par l'entreprise sur son site actuel (récupérées au build), s'il y en a */}
      {sitePhotos.length >= 2 ? (
        <section aria-labelledby="titre-images" className="border-t border-line py-20 sm:py-28">
          <div className="wrap">
            <Label n="05">En images</Label>
            <h2 id="titre-images" className="h2 mt-6" data-reveal>Les chantiers de l&apos;entreprise</h2>
            <Cote className="mt-12">Relevé · {Math.min(6, sitePhotos.length)} réalisations</Cote>
            <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {sitePhotos.slice(0, 6).map((p, i) => (
                <li key={p.src}>
                  <Frame id={`site-${i}`} src={p.src} alt={p.alt || `Photo publiée par l'Entreprise Clairon (${i + 1})`} fig={`05.${i + 1}`} className="aspect-[4/3]" />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <FaqList items={faq} />
      <LocalBlock />
      <CtaBand title="Une fuite, un toit, un radiateur ?" text="Organisez votre rendez-vous avec l'équipe de la rue d'Ouessant." />
      <JsonLd nodes={nodes} />
    </>
  );
}
