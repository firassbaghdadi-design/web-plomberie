import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";
import { Img } from "@/components/Img";
import { JsonLd } from "@/components/JsonLd";
import { Dial } from "@/components/Dial";
import { Brief, CtaBand, CtaButtons, FaqList, Label, LocalBlock, Ticks, d, fr } from "@/components/Sections";
import { about, home } from "@/lib/content";
import { localPages } from "@/lib/local";
import { photoAlt } from "@/lib/photos";
import { PATHS, business, type Faq } from "@/lib/site";
import { faqNode, pageMeta, webPageNode } from "@/lib/seo";

export const metadata = pageMeta({ title: home.title, description: home.description, path: "/" });

const trades = [
  { href: PATHS.plumbing, n: "01", t: "Plomberie", d: "Fuites, sanitaire, robinetterie et tuyauterie : l'eau qui monte et descend dans l'immeuble.", items: ["Fuites", "Sanitaire", "Robinetterie", "Tuyauterie"], photo: "raccords" },
  { href: PATHS.gas, n: "02", t: "Gaz", d: "Installations et maintenance des systèmes au gaz, par une entreprise certifiée Professionnel du Gaz.", items: ["Installation", "Maintenance", "Fuite de gaz"], photo: "outils" },
  { href: PATHS.heating, n: "03", t: "Chauffage", d: "Radiateurs, chaudières et eau chaude : la chaleur de l'immeuble, de la cave aux étages.", items: ["Radiateurs", "Chaudières", "Eau chaude"], photo: "collecteur" },
];

const clients = [
  { t: "Particuliers", d: "Un appartement, une fuite à arrêter, un appareil à remplacer : l'équipe vient chez vous, sur rendez-vous, aux horaires d'ouverture." },
  { t: "Commerces", d: "Boutiques, cafés et bureaux du quartier : l'intervention s'organise selon vos horaires d'ouverture et vos contraintes d'accès." },
  { t: "Syndics", d: "Colonnes, caves, chaufferies et parties communes : un interlocuteur qui connaît les immeubles du 14e depuis 1978." },
];

const faq: Faq[] = [
  {
    q: "Où se trouve l'entreprise EBL ?",
    a: "Au 5 rue d'Alésia, 75014 Paris, dans le quartier d'Alésia. L'entreprise se joint au 01 43 31 26 77 du lundi au vendredi : de 8 h à 12 h 30 et de 13 h 30 à 18 h, jusqu'à 17 h le vendredi.",
  },
  {
    q: "Depuis quand EBL existe-t-elle ?",
    a: "L'Entreprise Bernard Lemaître est inscrite au registre du commerce de Paris depuis 1978. Elle compte aujourd'hui entre dix et dix-neuf salariés, ce qui fait plus de quarante-cinq ans de métier dans le 14e arrondissement.",
  },
  {
    q: "Quels sont les métiers d'EBL ?",
    a: "La plomberie (fuites, sanitaire, robinetterie, tuyauterie), le gaz, avec la certification Professionnel du Gaz, et le chauffage. Une même équipe suit ainsi l'eau et le gaz de la cave jusqu'aux étages de l'immeuble.",
  },
  {
    q: "Comment prendre rendez-vous ?",
    a: "Par téléphone au 01 43 31 26 77, ou par le formulaire de contact en décrivant votre demande et l'adresse du lieu, photos à l'appui si vous le souhaitez. L'entreprise vous recontacte pour fixer le rendez-vous.",
  },
];

function Photo({ id, className = "", caption, dark = false }: { id: string; className?: string; caption?: string; dark?: boolean }) {
  return (
    <figure>
      <div data-mask className="photo img-zoom">
        <Img id={id} alt={photoAlt(id)} className={className} />
      </div>
      <figcaption className={`mt-3 text-[0.95rem] ${dark ? "text-cream/50" : "text-ink-faint"}`}>{caption ?? photoAlt(id)}</figcaption>
    </figure>
  );
}

export default function HomePage() {
  const nodes = [webPageNode({ title: home.title, description: home.description, path: "/" }), faqNode(faq)];
  return (
    <>
      {/* Héros : H1 géant en Young Serif sur olive, grande photo panoramique arrondie, le thermomanomètre de 1978 posé à cheval sur son bord. */}
      <section className="grain-bg relative bg-olive-deep text-cream">
        <div className="wrap pt-6 lg:pt-9">
          <div className="fade-in flex items-center justify-between gap-6 border-b border-cream/10 pb-4 text-[0.78rem] font-bold uppercase tracking-[0.2em] text-cream/55" style={d(60)}>
            <p className="flex items-center gap-3"><Ticks dark /><span>Maison fondée en <span className="text-mustard-light">{business.founded}</span></span></p>
            <p className="hidden md:block">Plomberie · Gaz · Chauffage</p>
            <p className="hidden sm:block">5 rue d&apos;Alésia · Paris XIV<sup>e</sup></p>
          </div>
          <div className="flex flex-col lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-10">
            <h1 className="order-1 mt-8 font-serif text-[3.5rem] leading-[0.94] !text-cream sm:text-[5.6rem] lg:col-span-8 lg:mt-8 lg:text-[5.9rem] xl:text-[6.7rem]">
              <span className="line-up"><span>Plombier</span></span>
              <span className="line-up"><span style={d(140)} className="text-mustard-light">à Paris 14e</span></span>
            </h1>
            <div className="fade-in order-3 mt-16 lg:order-2 lg:col-span-4 lg:mt-0 lg:pb-3" style={d(450)}>
              <p className="max-w-md text-[1.3rem] leading-snug text-cream/80 sm:text-[1.42rem]">
                Plus de 45 ans de métier, de la cave aux toits. Depuis {business.founded}, EBL, l&apos;Entreprise Bernard Lemaître, suit l&apos;eau, le gaz et le chauffage des immeubles du 14e, depuis la rue d&apos;Alésia.
              </p>
              <div className="mt-8"><CtaButtons dark /></div>
            </div>
            <figure className="relative order-2 mt-8 lg:order-3 lg:col-span-12 lg:mt-9">
              <div data-mask className="photo">
                <Img id="chaufferie" alt={photoAlt("chaufferie")} priority className="aspect-[4/5] sm:aspect-[16/9] lg:aspect-auto lg:h-[clamp(300px,40vh,500px)]" imgClassName="slow-zoom" />
              </div>
              <figcaption className="absolute left-5 top-5 z-10 rounded-full bg-olive-deep/70 px-4 py-1.5 text-[0.82rem] font-bold uppercase tracking-[0.16em] text-cream/85 backdrop-blur-sm sm:left-7 sm:top-7">
                Chaufferie · Paris 14e
              </figcaption>
              <div className="dial-in absolute -bottom-12 right-3 z-20 w-[11.5rem] sm:-bottom-20 sm:right-8 sm:w-[16rem] lg:-bottom-14 lg:right-[5%] lg:w-[19rem] xl:w-[20rem]" style={d(350)}>
                <Dial />
              </div>
            </figure>
            <dl className="order-4 mt-14 grid grid-cols-2 border-t border-cream/10 sm:grid-cols-4 lg:col-span-12 lg:mt-0 lg:border-t-0 lg:pr-[24rem] xl:pr-[25rem]">
              {[
                [business.founded, "Création"],
                ["45+ ans", "De métier"],
                ["10–19", "Salariés"],
                ["PG", "Professionnel du Gaz"],
              ].map(([k, v], i) => (
                <div key={v} className="py-7 pr-4" data-reveal style={d(i * 80)}>
                  <dt className="num font-serif text-[1.9rem] leading-none text-cream sm:text-[2.4rem]">{k}</dt>
                  <dd className="label mt-3 text-cream/50">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div className="stripes-dark mt-6 lg:mt-10" aria-hidden="true" />
      </section>

      <Brief text={home.brief} />

      {/* Les métiers : trois grandes photos aux coins arrondis */}
      <section id="metiers" aria-labelledby="titre-metiers" className="bg-paper py-20 sm:py-28">
        <div className="wrap">
          <Label n="01">Nos métiers</Label>
          <h2 id="titre-metiers" className="h2 mt-6 max-w-3xl" data-reveal>{fr("Plomberie, gaz et chauffage, par la même équipe")}</h2>
          <ul className="mt-14 grid gap-12 md:grid-cols-3 md:gap-6 lg:gap-8">
            {trades.map((t, i) => (
              <li key={t.t} data-reveal style={d(i * 90)}>
                <Link href={t.href} className="row-link group block">
                  <div data-mask className="photo img-zoom">
                    <Img id={t.photo} alt={photoAlt(t.photo)} className="aspect-[4/5]" />
                    <span className="num absolute left-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-cream/90 font-serif text-[1rem] text-ink">{t.n}</span>
                  </div>
                  <span className="mt-6 flex items-center justify-between gap-4">
                    <span className="row-title block font-serif text-[2.2rem] leading-none text-ink sm:text-[2.5rem]">{t.t}</span>
                    <ArrowIcon className="row-arrow h-5 w-5 shrink-0 text-ink-faint" />
                  </span>
                  <span className="mt-4 block max-w-md">{fr(t.d)}</span>
                  <span className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-[1.05rem] font-bold text-tabac">
                    {t.items.map((it) => <span key={it} className="whitespace-nowrap">— {it}</span>)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Le gaz : bandeau olive, grande photo */}
      <section aria-labelledby="titre-gaz" className="grain-bg bg-olive text-cream">
        <div className="wrap grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7"><Photo id="installation" dark className="aspect-[4/3]" caption="Chaque installation au gaz commence par un contrôle sur place." /></div>
          <div className="lg:col-span-5">
            <Label n="02" dark>Le gaz</Label>
            <h2 id="titre-gaz" className="h2 mt-6 !text-cream" data-reveal>{fr("Certifiée Professionnel du Gaz")}</h2>
            <div className="prose-c mt-8 max-w-xl text-cream/80" data-reveal>
              <p>{fr("Le gaz ne pardonne pas l'approximation. EBL détient la certification Professionnel du Gaz, signe de qualité pour l'installation et la maintenance des systèmes au gaz, et prend en charge les fuites de gaz.")}</p>
              <p>{fr("Cuisinière, chaudière, chauffe-eau : la colonne d'eau monte, le gaz suit le même chemin. Une seule entreprise connaît les deux réseaux de votre immeuble.")}</p>
            </div>
            <div className="mt-9"><Link href={PATHS.gas} className="link-line !text-mustard-light">Le gaz chez EBL <ArrowIcon /></Link></div>
          </div>
        </div>
      </section>

      {/* Le quartier */}
      <section aria-labelledby="titre-quartier" className="bg-cream py-20 sm:py-28">
        <div className="wrap">
          <Label n="03">Le quartier</Label>
          <h2 id="titre-quartier" className="h2 mt-6 max-w-4xl" data-reveal>{fr("Alésia, Pernety, Plaisance, Montparnasse : le 14e, immeuble après immeuble")}</h2>
          <div className="prose-c mt-8 max-w-2xl" data-reveal>
            <p>{fr("Pierre de taille près d'Alésia, ateliers d'artistes autour de Montparnasse, immeubles en brique le long des boulevards des Maréchaux : le 14e réunit plusieurs siècles de plomberie. L'entreprise y travaille depuis 1978 et s'étend aux arrondissements et aux communes voisines.")}</p>
          </div>
          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {localPages.map((p) => (
              <li key={p.slug}>
                <Link href={p.path} className="row-link flex items-center justify-between gap-3 rounded-full border border-line bg-paper px-6 py-4 text-[1.15rem] font-bold text-ink transition hover:border-tabac/40">
                  <span className="row-title">{p.crumb}</span> <ArrowIcon className="row-arrow h-4 w-4 shrink-0 text-ink-faint" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* L'entreprise : 1978 */}
      <section id="entreprise" aria-labelledby="titre-entreprise" className="scroll-mt-24 bg-paper py-20 sm:py-28">
        <div className="wrap grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-6">
            <Label n="04">L&apos;entreprise</Label>
            <p aria-hidden="true" className="num mt-6 font-serif text-[6rem] leading-[0.85] text-mustard-deep sm:text-[9rem]" data-reveal>1978</p>
            <h2 id="titre-entreprise" className="h2 mt-6" data-reveal>{fr("Plus de 45 ans de métier, depuis 1978")}</h2>
            <div className="prose-c mt-8 max-w-xl" data-reveal>
              {about.paras.map((p) => <p key={p.slice(0, 30)}>{fr(p)}</p>)}
            </div>
            <ol className="mt-12 grid grid-cols-3 gap-5 border-t-2 border-olive" data-reveal>
              {[["1978", "Inscription au registre de Paris"], ["14e", "5 rue d'Alésia, toujours le même quartier"], ["PG", "Certification Professionnel du Gaz"]].map(([y, t]) => (
                <li key={y} className="pt-5">
                  <p className="num font-serif text-[1.8rem] leading-none text-ink sm:text-[2.4rem]">{y}</p>
                  <p className="mt-3 text-[1.02rem] font-semibold leading-snug">{t}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="lg:col-span-6"><Photo id="ajustage" className="aspect-[4/3] lg:aspect-[5/6]" caption="Des gestes précis, du collecteur de chaufferie à l’évier." /></div>
        </div>
      </section>

      <section aria-labelledby="titre-clients" className="bg-cream py-20 sm:py-28">
        <div className="wrap">
          <Label>Pour qui</Label>
          <h2 id="titre-clients" className="h2 mt-6 max-w-3xl" data-reveal>{fr("Particuliers, commerces et syndics : une même exigence")}</h2>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {clients.map((c, i) => (
              <div key={c.t} className="rounded-[1.75rem] bg-paper p-8 sm:p-10" data-reveal style={d(i * 90)}>
                <div className="stripes w-16" aria-hidden="true" />
                <p className="mt-7 font-serif text-[1.8rem] text-ink">{c.t}</p>
                <p className="mt-4">{fr(c.d)}</p>
              </div>
            ))}
          </div>
          <p className="mt-14 text-[1.05rem] font-semibold text-ink-soft">
            Note de {business.google.rating}/5 sur Google ({business.google.count} avis, relevé d&apos;{business.google.date}).
          </p>
        </div>
      </section>

      <FaqList items={faq} />
      <LocalBlock />
      <CtaBand title="Une fuite, un radiateur, une chaudière ?" text="Appelez l'équipe de la rue d'Alésia, du lundi au vendredi." />
      <JsonLd nodes={nodes} />
    </>
  );
}

