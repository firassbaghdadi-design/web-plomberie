import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";
import { HeroDial } from "@/components/HeroDial";
import { Img } from "@/components/Img";
import { JsonLd } from "@/components/JsonLd";
import { Brief, CtaBand, CtaButtons, FaqList, Label, LocalBlock, d, fr } from "@/components/Sections";
import { about, home } from "@/lib/content";
import { localPages } from "@/lib/local";
import { imgSrc, photoAlt, sitePhotos } from "@/lib/photos";
import { PATHS, business, type Faq } from "@/lib/site";
import { faqNode, pageMeta, webPageNode } from "@/lib/seo";

export const metadata = pageMeta({ title: home.title, description: home.description, path: "/" });

const trades = [
  { href: PATHS.plumbing, n: "01", t: "Plomberie", d: "Sanitaire, robinetterie et tuyauterie : l'eau amenée, distribuée et évacuée comme il faut.", items: ["Sanitaire", "Robinetterie", "Tuyauterie"], photo: "cle" },
  { href: PATHS.repair, n: "02", t: "Dépannage", d: "Fuite, canalisation bouchée, panne d'eau : les bons réflexes, puis un plombier du quartier.", items: ["Fuite d'eau", "Canalisation bouchée", "WC qui coule"], photo: "robinet" },
  { href: PATHS.bathroom, n: "03", t: "Salle de bains", d: "Douche, baignoire, vasque : la plomberie d'une pièce d'eau pensée avant le carrelage.", items: ["Douche", "Baignoire", "Évacuations"], photo: "lavabo" },
];

const clients = [
  { t: "Particuliers", d: "Un appartement, une salle de bains à refaire ou une fuite à arrêter : l'équipe vient chez vous, sur rendez-vous." },
  { t: "Commerces et bureaux", d: "Les locaux d'activité du quartier : l'intervention s'organise selon vos horaires d'ouverture." },
  { t: "Copropriétés", d: "Colonnes, descentes et parties communes : un interlocuteur qui sait distinguer ce qui relève du logement et de l'immeuble." },
];

const faq: Faq[] = [
  {
    q: "Où se trouve Houdry-Grenot ?",
    a: "Dans le 17e arrondissement de Paris, 75017. L'entreprise se joint au 01 53 06 97 97 ou par e-mail à plomberie@houdry-grenot.com. L'adresse de rue précise est communiquée lors de la prise de rendez-vous.",
  },
  {
    q: "Depuis quand l'entreprise existe-t-elle ?",
    a: "Houdry-Grenot a été fondée en 1996 et est installée à Paris dans le 17e arrondissement. Elle réunit une équipe étoffée de professionnels de la plomberie.",
  },
  {
    q: "Quels sont les métiers de Houdry-Grenot ?",
    a: "La plomberie : sanitaire, robinetterie et tuyauterie, le dépannage des fuites et des pannes d'eau, et la plomberie des salles de bains rénovées. L'entreprise travaille pour les particuliers, les commerces et les copropriétés.",
  },
  {
    q: "Comment prendre rendez-vous ?",
    a: "Par téléphone au 01 53 06 97 97, ou par le formulaire de contact en décrivant votre demande et l'adresse du lieu, photos à l'appui si vous le souhaitez. L'entreprise vous recontacte pour fixer le rendez-vous.",
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
  const years = new Date().getFullYear() - Number(business.founded);
  const own = sitePhotos;
  const marks = own.length >= 2 ? 5 : 4;
  const heroSrc = own[0]?.src ?? imgSrc("facade");
  return (
    <>
      {/* Héros : une photo dans le verre d'un manomètre ; les graduations sont les numéros de section. */}
      <section className="relative">
        <div className="wrap grid items-center gap-x-10 pb-14 pt-2 sm:pt-8 lg:grid-cols-12 lg:pb-20 lg:pt-12">
          <div className="mx-auto mb-4 w-full max-w-[17.5rem] sm:max-w-[24rem] lg:order-last lg:col-span-5 lg:mb-0 lg:max-w-none">
            <HeroDial src={heroSrc} alt="Cadran de manomètre dont le verre montre un immeuble parisien" marks={marks} labels={Array.from({ length: marks }, (_, k) => String(k + 1).padStart(2, "0"))} />
          </div>
          <div className="flex flex-col lg:col-span-7">
            <p className="label fade-in text-accent" style={d(80)}>Plomberie · Paris 17e · depuis {business.founded}</p>
            <h1 className="mt-6 text-[2.55rem] font-[250] leading-[1.02] sm:text-[4rem] xl:text-[4.7rem]">
              <span className="line-up"><span>Plombier</span></span>
              <span className="line-up"><span style={d(140)} className="text-accent">à Paris 17e</span></span>
            </h1>
            <p className="fade-in mt-8 max-w-xl text-[1.08rem] leading-relaxed sm:text-[1.2rem]" style={d(450)}>
              Depuis {business.founded}, Houdry-Grenot dépanne, installe et rénove la plomberie des appartements, des commerces et des immeubles du quartier.
            </p>
            <div className="fade-in mt-9" style={d(600)}><CtaButtons /></div>
          </div>
        </div>
        <div className="wrap">
          <dl className="grid grid-cols-2 border-t border-line sm:grid-cols-4">
            {[
              [business.founded, "Création de l'entreprise"],
              [`${years} ans`, "Au service du 17e"],
              ["3 métiers", "Plomberie, dépannage, salle de bains"],
              ["75017", "Paris"],
            ].map(([k, v], i) => (
              <div key={v} className="py-6 pr-4" data-reveal style={d(i * 80)}>
                <dt className="num text-[1.7rem] font-extralight leading-none tracking-tight text-ink sm:text-[2.4rem]">{k}</dt>
                <dd className="label mt-3">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Brief text={home.brief} />

      <section id="entreprise" aria-labelledby="titre-entreprise" className="scroll-mt-24 border-t border-line py-20 sm:py-32">
        <div className="wrap grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-6">
            <Label n="01">L&apos;entreprise</Label>
            <h2 id="titre-entreprise" className="h2 mt-6" data-reveal>{fr("Qui sommes-nous ?")}</h2>
            <div className="prose-c mt-8 max-w-xl text-[1.1rem]" data-reveal>
              {about.paras.map((p) => <p key={p.slice(0, 30)}>{fr(p)}</p>)}
            </div>
            <ol className="mt-12 grid grid-cols-3 gap-5 border-t border-line" data-reveal>
              {[[business.founded, "Création de l'entreprise"], ["17e", "Installée dans l'arrondissement"], ["3", "Clientèles : particuliers, commerces, copropriétés"]].map(([y, t]) => (
                <li key={y} className="pt-5">
                  <p className="num text-[1.7rem] font-extralight leading-none text-ink sm:text-[2.4rem]">{y}</p>
                  <p className="mt-3 text-[0.86rem] leading-snug">{t}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="lg:col-span-6">
            <Photo id="cle" className="aspect-[4/3] lg:aspect-[5/6]" caption="Une clé, un raccord, un contrôle sous pression." />
          </div>
        </div>
      </section>

      <section aria-labelledby="titre-metiers" className="border-t border-line py-20 sm:py-32">
        <div className="wrap">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Label n="02">Nos métiers</Label>
              <h2 id="titre-metiers" className="h2 mt-6" data-reveal>Plomberie, dépannage et salle de bains</h2>
            </div>
            <p className="max-w-lg self-end text-[1.08rem] lg:col-span-6 lg:col-start-7" data-reveal>
              {about.description}
            </p>
          </div>
          <ul className="mt-16 border-t border-line">
            {trades.map((t, i) => (
              <li key={t.t} className="border-b border-line" data-reveal style={d(i * 70)}>
                <Link href={t.href} className="row-link grid items-start gap-x-10 gap-y-4 py-8 sm:py-10 lg:grid-cols-12">
                  <span className="num text-[0.8rem] text-ink-faint lg:col-span-1 lg:pt-3">{t.n}</span>
                  <span className="row-title block text-[2rem] font-light leading-none tracking-tight text-ink sm:text-[2.6rem] lg:col-span-4">{t.t}</span>
                  <span className="block lg:col-span-5 lg:pt-2">
                    <span className="block max-w-md text-[1.02rem]">{fr(t.d)}</span>
                    <span className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 text-[0.9rem] text-ink">
                      {t.items.map((it) => <span key={it} className="whitespace-nowrap">— {it}</span>)}
                    </span>
                  </span>
                  <span className="hidden items-center justify-end gap-6 lg:col-span-2 lg:flex">
                    <span className="h-14 w-20 overflow-hidden rounded-[2px] opacity-0 transition duration-500 [.row-link:hover_&]:opacity-100">
                      <Img id={t.photo} alt="" className="h-full w-full" />
                    </span>
                    <ArrowIcon className="row-arrow h-5 w-5 shrink-0 text-ink-faint" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="titre-quartier" className="border-t border-line py-20 sm:py-32">
        <div className="wrap grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Label n="03">Le quartier</Label>
            <h2 id="titre-quartier" className="h2 mt-6" data-reveal>Du 17e aux arrondissements voisins</h2>
          </div>
          <div className="prose-c max-w-xl self-end lg:col-span-5 lg:col-start-8" data-reveal>
            <p>Un manomètre mesure la pression dans un réseau : trop faible, l&apos;eau n&apos;arrive plus ; trop forte, les joints souffrent. Le bon plombier cherche le juste réglage, celui qui dure.</p>
            <p>Installée dans le 17e depuis {business.founded}, Houdry-Grenot connaît les immeubles des Batignolles, des Ternes et des Épinettes, et se déplace aussi dans les quartiers voisins.</p>
          </div>
          <div className="lg:col-span-12">
            <div className="mt-8 grid gap-8 border-t border-line pt-10 lg:grid-cols-12">
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
        </div>
      </section>

      <section aria-labelledby="titre-clients" className="border-t border-line py-20 sm:py-32">
        <div className="wrap">
          <Label n="04">Pour qui</Label>
          <h2 id="titre-clients" className="h2 mt-6 max-w-3xl" data-reveal>{fr("Particuliers, commerces et copropriétés : une même exigence")}</h2>
          <div className="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-3">
            {clients.map((c, i) => (
              <div key={c.t} className="border-t border-ink/80 pt-7" data-reveal style={d(i * 90)}>
                <p className="text-[1.6rem] font-light text-ink">{c.t}</p>
                <p className="mt-4">{fr(c.d)}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 grid items-end gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Photo id="robinet" className="aspect-[16/10]" caption="Chaque intervention commence par un constat sur place." />
            </div>
            <div className="lg:col-span-5">
              <p className="text-[1.35rem] font-light leading-snug text-ink sm:text-[1.6rem]" data-reveal>Organisez votre rendez-vous en nous contactant.</p>
              <div className="mt-8"><CtaButtons label="Demander un devis" /></div>
            </div>
          </div>
        </div>
      </section>

      {own.length >= 2 ? (
        <section aria-labelledby="titre-images" className="border-t border-line py-20 sm:py-28">
          <div className="wrap">
            <Label n="05">En images</Label>
            <h2 id="titre-images" className="h2 mt-6" data-reveal>Les chantiers de l&apos;entreprise</h2>
            <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {own.slice(0, 6).map((p, i) => (
                <li key={p.src} data-mask className="overflow-hidden rounded-[3px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.src} alt={p.alt || `Photo publiée par Houdry-Grenot (${i + 1})`} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <FaqList items={faq} />
      <LocalBlock />
      <CtaBand title="Une fuite, un projet, une question ?" text="Organisez votre rendez-vous avec l'équipe de Houdry-Grenot." />
      <JsonLd nodes={nodes} />
    </>
  );
}
