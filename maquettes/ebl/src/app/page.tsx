import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";
import { Img } from "@/components/Img";
import { JsonLd } from "@/components/JsonLd";
import { Brief, CtaBand, CtaButtons, FaqList, Label, LocalBlock, d, fr } from "@/components/Sections";
import { about, home } from "@/lib/content";
import { localPages } from "@/lib/local";
import { photoAlt } from "@/lib/photos";
import { PATHS, business, type Faq } from "@/lib/site";
import { faqNode, pageMeta, webPageNode } from "@/lib/seo";

export const metadata = pageMeta({ title: home.title, description: home.description, path: "/" });

const trades = [
  { href: PATHS.plumbing, n: "01", t: "Plomberie", d: "Fuites, sanitaire, robinetterie et tuyauterie : l'eau qui monte et descend dans l'immeuble.", items: ["Fuites", "Sanitaire", "Robinetterie", "Tuyauterie"] },
  { href: PATHS.gas, n: "02", t: "Gaz", d: "Installations et maintenance des systèmes au gaz, par une entreprise certifiée Professionnel du Gaz.", items: ["Installation", "Maintenance", "Fuite de gaz"] },
  { href: PATHS.heating, n: "03", t: "Chauffage", d: "Radiateurs, chaudières et eau chaude : la chaleur de l'immeuble, de la cave aux étages.", items: ["Radiateurs", "Chaudières", "Eau chaude"] },
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

function Photo({ id, className = "", caption }: { id: string; className?: string; caption?: string }) {
  return (
    <figure>
      <div data-mask className="img-zoom overflow-hidden rounded-[3px]">
        <Img id={id} alt={photoAlt(id)} className={className} />
      </div>
      <figcaption className="mt-3 text-[0.78rem] text-ink-faint">{caption ?? photoAlt(id)}</figcaption>
    </figure>
  );
}

export default function HomePage() {
  const nodes = [webPageNode({ title: home.title, description: home.description, path: "/" }), faqNode(faq)];
  return (
    <>
      {/* Cave : l'arrivée d'eau, les fondations, 1978. La coupe d'immeuble se dessine à droite. */}
      <section className="relative" data-floor="0">
        <div className="wrap pb-14 pt-6 sm:pt-12 lg:pb-20 lg:pt-16">
          <p className="label fade-in flex items-center gap-3 text-accent" style={d(80)}>
            <span className="num">00</span>
            <span className="h-px w-7 bg-ink/20" aria-hidden="true" />
            Cave · depuis {business.founded}
          </p>
          <h1 className="mt-8 text-[2.7rem] font-[250] leading-[1.0] sm:text-[4.6rem] xl:text-[5.6rem]">
            <span className="line-up"><span>Plombier</span></span>
            <span className="line-up"><span style={d(140)} className="text-accent">à Paris 14e</span></span>
          </h1>
          <p className="fade-in mt-9 max-w-xl text-[1.12rem] leading-relaxed sm:text-[1.28rem]" style={d(450)}>
            Plus de 45 ans de métier, de la cave aux toits. Depuis {business.founded}, EBL, l&apos;Entreprise Bernard Lemaître, suit l&apos;eau, le gaz et le chauffage des immeubles du 14e, depuis la rue d&apos;Alésia.
          </p>
          <div className="fade-in mt-10" style={d(600)}><CtaButtons /></div>
          <dl className="mt-16 grid max-w-3xl grid-cols-2 border-t border-line sm:grid-cols-4">
            {[
              [business.founded, "Création"],
              ["45+ ans", "De métier"],
              ["10–19", "Salariés"],
              ["PG", "Professionnel du Gaz"],
            ].map(([k, v], i) => (
              <div key={v} className="py-6 pr-4" data-reveal style={d(i * 80)}>
                <dt className="num text-[1.8rem] font-extralight leading-none tracking-tight text-ink sm:text-[2.3rem]">{k}</dt>
                <dd className="label mt-3">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Brief text={home.brief} />

      {/* Rez-de-chaussée : les métiers */}
      <section id="metiers" aria-labelledby="titre-metiers" className="border-t border-line py-20 sm:py-28" data-floor="1">
        <div className="wrap">
          <Label n="01">Rez-de-chaussée · Nos métiers</Label>
          <h2 id="titre-metiers" className="h2 mt-6 max-w-3xl" data-reveal>{fr("Plomberie, gaz et chauffage, par la même équipe")}</h2>
          <ul className="mt-14 border-t border-line">
            {trades.map((t, i) => (
              <li key={t.t} className="border-b border-line" data-reveal style={d(i * 70)}>
                <Link href={t.href} className="row-link grid items-start gap-x-8 gap-y-4 py-8 sm:py-10 lg:grid-cols-12">
                  <span className="num text-[0.8rem] text-ink-faint lg:col-span-1 lg:pt-3">{t.n}</span>
                  <span className="row-title block text-[2rem] font-light leading-none tracking-tight text-ink sm:text-[2.5rem] lg:col-span-4">{t.t}</span>
                  <span className="block lg:col-span-6 lg:pt-2">
                    <span className="block max-w-md text-[1.02rem]">{fr(t.d)}</span>
                    <span className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-[0.9rem] text-ink">
                      {t.items.map((it) => <span key={it} className="whitespace-nowrap">— {it}</span>)}
                    </span>
                  </span>
                  <span className="hidden items-center justify-end lg:col-span-1 lg:flex">
                    <ArrowIcon className="row-arrow h-5 w-5 shrink-0 text-ink-faint" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 1er étage : le gaz */}
      <section aria-labelledby="titre-gaz" className="border-t border-line py-20 sm:py-28" data-floor="2">
        <div className="wrap grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <Label n="02">1er étage · Le gaz</Label>
            <h2 id="titre-gaz" className="h2 mt-6" data-reveal>{fr("Certifiée Professionnel du Gaz")}</h2>
            <div className="prose-c mt-8 max-w-xl text-[1.1rem]" data-reveal>
              <p>{fr("Le gaz ne pardonne pas l'approximation. EBL détient la certification Professionnel du Gaz, signe de qualité pour l'installation et la maintenance des systèmes au gaz, et prend en charge les fuites de gaz.")}</p>
              <p>{fr("Cuisinière, chaudière, chauffe-eau : la colonne d'eau monte, le gaz suit le même chemin. Une seule entreprise connaît les deux réseaux de votre immeuble.")}</p>
            </div>
            <div className="mt-8"><Link href={PATHS.gas} className="link-line">Le gaz chez EBL <ArrowIcon /></Link></div>
          </div>
          <div className="lg:col-span-6"><Photo id="outils" className="aspect-[4/3]" caption="Chaque installation au gaz commence par un contrôle sur place." /></div>
        </div>
      </section>

      {/* 2e étage : le quartier */}
      <section aria-labelledby="titre-quartier" className="border-t border-line py-20 sm:py-28" data-floor="3">
        <div className="wrap">
          <Label n="03">2e étage · Le quartier</Label>
          <h2 id="titre-quartier" className="h2 mt-6 max-w-3xl" data-reveal>{fr("Alésia, Pernety, Plaisance, Montparnasse : le 14e, immeuble après immeuble")}</h2>
          <div className="prose-c mt-8 max-w-2xl" data-reveal>
            <p>{fr("Pierre de taille près d'Alésia, ateliers d'artistes autour de Montparnasse, immeubles en brique le long des boulevards des Maréchaux : le 14e réunit plusieurs siècles de plomberie. L'entreprise y travaille depuis 1978 et s'étend aux arrondissements et aux communes voisines.")}</p>
          </div>
          <ul className="mt-12 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {localPages.map((p) => (
              <li key={p.slug} className="border-b border-line">
                <Link href={p.path} className="row-link flex items-center justify-between gap-3 py-4 text-[1rem] text-ink">
                  <span className="row-title">{p.crumb}</span> <ArrowIcon className="row-arrow h-4 w-4 shrink-0 text-ink-faint" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3e étage : plus de 45 ans */}
      <section id="entreprise" aria-labelledby="titre-entreprise" className="scroll-mt-24 border-t border-line py-20 sm:py-28" data-floor="4">
        <div className="wrap grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-6">
            <Label n="04">3e étage · L&apos;entreprise</Label>
            <h2 id="titre-entreprise" className="h2 mt-6" data-reveal>{fr("Plus de 45 ans de métier, depuis 1978")}</h2>
            <div className="prose-c mt-8 max-w-xl text-[1.1rem]" data-reveal>
              {about.paras.map((p) => <p key={p.slice(0, 30)}>{fr(p)}</p>)}
            </div>
            <ol className="mt-12 grid grid-cols-3 gap-5 border-t border-line" data-reveal>
              {[["1978", "Inscription au registre de Paris"], ["14e", "5 rue d'Alésia, toujours le même quartier"], ["PG", "Certification Professionnel du Gaz"]].map(([y, t]) => (
                <li key={y} className="pt-5">
                  <p className="num text-[1.7rem] font-extralight leading-none text-ink sm:text-[2.3rem]">{y}</p>
                  <p className="mt-3 text-[0.86rem] leading-snug">{t}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="lg:col-span-6"><Photo id="collecteur" className="aspect-[4/3] lg:aspect-[5/6]" caption="Des gestes précis, du collecteur de chaufferie à l’évier." /></div>
        </div>
      </section>

      <section aria-labelledby="titre-clients" className="border-t border-line py-20 sm:py-28">
        <div className="wrap">
          <Label>Pour qui</Label>
          <h2 id="titre-clients" className="h2 mt-6 max-w-3xl" data-reveal>{fr("Particuliers, commerces et syndics : une même exigence")}</h2>
          <div className="mt-14 grid gap-x-12 gap-y-12 md:grid-cols-3">
            {clients.map((c, i) => (
              <div key={c.t} className="border-t border-ink/80 pt-7" data-reveal style={d(i * 90)}>
                <p className="text-[1.6rem] font-light text-ink">{c.t}</p>
                <p className="mt-4">{fr(c.d)}</p>
              </div>
            ))}
          </div>
          <p className="mt-14 text-[0.95rem] text-ink-soft">
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
