import Link from "next/link";
import { CtaBand, FaqList, Process, ReviewsMarquee, Stats } from "@/components/Sections";
import { ArrowIcon, DropIcon, FlameIcon, PhoneIcon, ShowerIcon, Stars, PinIcon, ClockIcon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { Kinetic } from "@/components/Kinetic";
import { Bubbles, Waves } from "@/components/Ocean";
import { Logo, Photo } from "@/components/Photo";
import { breadcrumbNode, faqNode, pageMeta, webPageNode } from "@/lib/seo";
import { PATHS, business, reviews, services, shortAnswer, sister } from "@/lib/site";

const title = `Plombier chauffagiste Paris 14e | ${business.name}`;
const description = `Plombier chauffagiste à Paris 14e depuis plus de 80 ans : dépannage, chaudières, salles de bains et douches. Noté ${reviews.ratingText}/5 sur Google. Appelez le ${business.phoneDisplay}.`;

export const metadata = pageMeta({ title, description, path: "/" });

const icons = { plumbing: DropIcon, heating: FlameIcon, bathrooms: ShowerIcon } as const;
const ticker = ["Urgences", "Remplacement de sanitaires", "Dépannages", "Chaudières à condensation", "Entretien de chaudières", "Radiateurs", "Robinets thermostatiques", "Salles de bains", "Douches", "Syndics de copropriété"];

export default function Home() {
  return (
    <>
      <section data-stage className="ocean relative overflow-hidden pb-44 pt-36 text-white sm:pt-44" aria-labelledby="titre-principal">
        <Bubbles />
        <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="eyebrow-light fade-up" style={{ ["--delay" as string]: "0.05s" }}>
              Plomberie · Chauffage · Salles de bains
            </p>
            <h1 id="titre-principal" className="mt-5 text-[2.7rem] leading-[1.03] !text-white sm:text-6xl lg:text-[4.3rem]">
              <Kinetic text="Plombier à Paris 14e," />
              <span className="block text-brand-light">
                <Kinetic text="Entreprise Rousseau" />
              </span>
            </h1>
            <p className="lead reponse-bref fade-up mt-7 max-w-xl !text-white/85" style={{ ["--delay" as string]: "0.3s" }}>
              <strong className="font-medium text-white">En bref — </strong>
              {shortAnswer}
            </p>
            <div className="fade-up mt-9 flex flex-wrap gap-3" style={{ ["--delay" as string]: "0.45s" }}>
              <a href={`tel:${business.phoneTel}`} data-track="phone_call_click" className="btn-amber pulse !px-8 !py-4 text-lg">
                <PhoneIcon />
                Appeler le {business.phoneDisplay}
              </a>
              <Link href={PATHS.contact} className="btn-ghost-light arrow-link !px-8 !py-4 text-lg">
                Demander un devis
                <ArrowIcon className="h-4 w-4" />
              </Link>
            </div>
            <a href="#avis" className="fade-up mt-9 inline-flex items-center gap-3 text-sm text-white/90 hover:text-white" style={{ ["--delay" as string]: "0.6s" }}>
              <Stars />
              <span>
                <strong className="font-medium text-white">{reviews.ratingText}/5</strong> sur Google · {reviews.count} avis
              </span>
            </a>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="parallax" style={{ ["--depth" as string]: -16 }}>
              <div data-tilt className="float-slow relative aspect-[5/6] overflow-hidden rounded-[2.2rem] border border-white/20 shadow-glow">
                <Photo id="heroShower" alt="Salle de douche" sizes="(min-width:1024px) 45vw, 92vw" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
              </div>
            </div>
            <div className="parallax absolute -bottom-10 -left-4 w-[46%] sm:-left-12" style={{ ["--depth" as string]: 22 }}>
              <div className="float-slower relative aspect-square overflow-hidden rounded-[1.6rem] border-4 border-white shadow-lift">
                <Photo id="bathRenov" alt="Salle de bains" sizes="22vw" />
              </div>
            </div>
            <div className="parallax absolute -right-2 top-8 sm:-right-8" style={{ ["--depth" as string]: 30 }}>
              <div className="float-slow rounded-2xl border border-white/25 bg-white/15 px-5 py-4 backdrop-blur-md">
                <p className="font-display text-3xl text-white">+ de 80 ans</p>
                <p className="mt-1 text-xs text-white/80">à Paris et en région parisienne</p>
              </div>
            </div>
          </div>
        </div>
        <Waves />
      </section>

      <div className="overflow-hidden border-b border-line bg-white py-5" aria-hidden="true">
        <div className="ticker font-display text-xl text-ink/80">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="flex items-center gap-10 whitespace-nowrap">
              {t}
              <span className="h-2 w-2 rounded-full bg-amber" />
            </span>
          ))}
        </div>
      </div>

      <section aria-labelledby="titre-bienvenue" className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div data-reveal="left">
            <p className="eyebrow">Bienvenue</p>
            <h2 id="titre-bienvenue" className="mt-3 text-4xl sm:text-6xl">
              Depuis plus de 80 ans, vos partenaires de confiance.
            </h2>
          </div>
          <div data-reveal="right" className="space-y-5 text-lg">
            <p>Depuis plus de 80 ans, nos entreprises sont vos partenaires de confiance pour tous vos besoins en plomberie, chauffage et salles de bains. Forts de notre expertise sur Paris et la région parisienne, nous nous engageons à vous offrir des solutions de qualité, durables et sur-mesure.</p>
            <p>Nous maîtrisons l'art de la plomberie, du chauffage et de la création de salles de bains. Nous vous accompagnons de la conception à la réalisation, en assurant un travail soigné et conforme à vos attentes. Votre satisfaction est notre priorité.</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="titre-services" className="pb-20 sm:pb-28">
        <div className="container-x">
          <h2 id="titre-services" className="sr-only">
            Nos services
          </h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {(["plumbing", "heating", "bathrooms"] as const).map((key, index) => {
              const s = services[key];
              const Icon = icons[key];
              return (
                <Link key={key} href={s.path} data-reveal style={{ ["--d" as string]: `${index * 120}ms` }} className="card-photo group relative block min-h-[460px] overflow-hidden rounded-[2rem] text-white shadow-lift">
                  <Photo id={s.photo} alt={s.title} sizes="(min-width:1024px) 33vw, 92vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10 transition-opacity duration-500 group-hover:from-ink-2" />
                  <div className="relative flex h-full min-h-[460px] flex-col justify-end p-8">
                    <span className="mb-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/15 backdrop-blur-md">
                      <Icon className="h-7 w-7" />
                    </span>
                    <h3 className="text-4xl !text-white">{s.title}</h3>
                    <p className="mt-3 text-white/85">{s.short}</p>
                    <span className="arrow-link mt-6 inline-flex items-center gap-2 font-medium text-amber">
                      Découvrir
                      <ArrowIcon className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Stats />
      <ReviewsMarquee />
      <Process />

      <section aria-labelledby="titre-galerie" className="pb-20 sm:pb-28">
        <div className="container-x">
          <div data-reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Salles de bains et douches</p>
              <h2 id="titre-galerie" className="mt-3 text-4xl sm:text-5xl">
                Une salle de bains qui vous ressemble.
              </h2>
            </div>
            <Link href={PATHS.bathrooms} className="arrow-link inline-flex items-center gap-2 font-medium text-brand-dark hover:text-ink">
              Voir les salles de bains
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid auto-rows-[200px] grid-cols-2 gap-4 sm:auto-rows-[240px] lg:grid-cols-4">
            {[
              { id: "bathInstall", alt: "Salle de douche", cls: "col-span-2 row-span-2" },
              { id: "showerWide", alt: "Douche", cls: "" },
              { id: "bathAdvice", alt: "Salle de bains", cls: "" },
              { id: "bathWide", alt: "Salle de bains", cls: "col-span-2" },
              { id: "showerWide2", alt: "Douche", cls: "col-span-2 lg:col-span-4" },
            ].map((p, i) => (
              <div key={p.id} data-reveal="zoom" style={{ ["--d" as string]: `${i * 90}ms` }} className={`card-photo relative overflow-hidden rounded-3xl shadow-lift ${p.cls}`}>
                <Photo id={p.id as never} alt={p.alt} sizes="(min-width:1024px) 40vw, 50vw" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="titre-adresses" className="section bg-paper-deep">
        <div className="container-x">
          <p className="eyebrow" data-reveal>
            Deux adresses
          </p>
          <h2 id="titre-adresses" className="mt-3 max-w-3xl text-4xl sm:text-5xl" data-reveal>
            Une même exigence, à Paris 14e et à Bourg-la-Reine.
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {[
              { logo: "logoRousseau" as const, name: business.name, street: business.address.street, zip: `${business.address.postalCode} ${business.address.city}`, tel: business.phoneDisplay, telHref: business.phoneTel, mail: business.email, hours: business.hoursText, photo: "storefrontRousseau" as const },
              { logo: "logoSandrin" as const, name: sister.name, street: sister.street, zip: `${sister.postalCode} ${sister.city}`, tel: sister.phoneDisplay, telHref: sister.phoneTel, mail: sister.email, hours: sister.hoursText, photo: "storefrontSandrin" as const },
            ].map((a, i) => (
              <article key={a.name} data-reveal style={{ ["--d" as string]: `${i * 120}ms` }} className="overflow-hidden rounded-[2rem] border border-line bg-white shadow-lift">
                <div className="card-photo relative aspect-[16/8] bg-brand-tint">
                  <Photo id={a.photo} alt={`Devanture ${a.name}`} sizes="(min-width:1024px) 45vw, 92vw" />
                </div>
                <div className="p-7 sm:p-9">
                  <Logo id={a.logo} alt={a.name} className="h-12 w-auto" width={200} height={48} />
                  <p className="mt-5 flex gap-3">
                    <PinIcon className="mt-1 h-5 w-5 shrink-0 text-brand-dark" />
                    <span>
                      {a.street}, {a.zip}
                    </span>
                  </p>
                  <p className="mt-2 flex gap-3 text-sm">
                    <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-dark" />
                    <span>{a.hours}</span>
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a href={`tel:${a.telHref}`} className="btn-dark">
                      <PhoneIcon /> {a.tel}
                    </a>
                    <a href={`mailto:${a.mail}`} className="btn-ghost">
                      {a.mail}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FaqList keyName="home" title="Vos questions sur la plomberie à Paris" />
      <CtaBand />
      <JsonLd nodes={[webPageNode({ title, description, path: "/" }), breadcrumbNode([{ name: "Accueil", path: "/" }]), faqNode("home")]} />
    </>
  );
}
