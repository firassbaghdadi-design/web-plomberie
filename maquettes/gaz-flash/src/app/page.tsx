import Link from "next/link";
import { Burner } from "@/components/Burner";
import { CtaBand, Faq, ServiceCard } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { Kinetic } from "@/components/Kinetic";
import { Logo, Photo } from "@/components/Photo";
import { ArrowIcon, CheckIcon, ClockIcon, PhoneIcon, PinIcon, StarIcon } from "@/components/Icons";
import { PATHS, YEARS, brandLogos, business, priceGroups, ranges, reasons, reviews, services, shortAnswer } from "@/lib/site";
import { faqNode, pageMeta, webPageNode } from "@/lib/seo";

const title = "Chauffagiste à Paris 18e depuis 1965 : entretien | Gaz Flash";
const description =
  "Gaz Flash entretient, dépanne et installe chaudières, chauffe-eau et régulations gaz à Paris et en petite couronne. Professionnel du Gaz, RGE, tarifs affichés.";

export const metadata = pageMeta({ title, description, path: PATHS.home });

const trust = ["Professionnel du Gaz", "Qualibat RGE", "Installations garanties 2 ans (pièces)", "Tarifs d'entretien affichés"];

export default function HomePage() {
  const loopedBrands = [...brandLogos, ...brandLogos, ...brandLogos, ...brandLogos];

  return (
    <>
      <section className="hero diagonal-bottom pb-32 pt-32 sm:pb-40 sm:pt-40" data-stage="">
        <div className="slash" aria-hidden="true" />
        <span className="since" aria-hidden="true">{`1965`}</span>
        <div className="container-x grid items-center gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <p className="eyebrow !text-ember" data-reveal="">Chauffagiste · Paris 18e · depuis 1965</p>
            <h1 className="h-hero mt-5">
              <Kinetic text="Votre chauffage au gaz," />
              <br />
              <span className="text-ember">
                <Kinetic text="entretenu, dépanné, installé." />
              </span>
            </h1>
            <p className="reponse-bref mt-7 max-w-xl text-lg text-white/85 sm:text-xl" data-reveal="">
              {shortAnswer}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row" data-reveal="">
              <a href={`tel:${business.phoneTel}`} data-track="phone_call_click" className="btn btn-flame pulse">
                <PhoneIcon />
                {business.phoneDisplay}
              </a>
              <Link href={PATHS.contact} className="btn btn-line text-white">
                Demander un devis
                <ArrowIcon />
              </Link>
            </div>
            <ul className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/75" data-reveal="">
              <li className="flex items-center gap-2"><ClockIcon className="h-5 w-5 text-ember" />Lundi au vendredi · 8 h – 12 h 30 · 13 h 30 – 17 h</li>
              <li className="flex items-center gap-2"><PinIcon className="h-5 w-5 text-ember" />Paris, 93, 92, 94</li>
            </ul>
          </div>
          <div className="mx-auto aspect-square w-full max-w-[460px]" aria-hidden="false">
            <Burner />
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-14 sm:-mt-16" aria-label="Garanties et certifications">
        <div className="container-x">
          <ul className="grid gap-px overflow-hidden rounded-[4px] bg-line shadow-lift sm:grid-cols-2 lg:grid-cols-4" data-reveal="">
            {trust.map((item) => (
              <li key={item} className="flex items-center gap-3 bg-white px-5 py-5 font-semibold">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-flame-btn text-white">
                  <CheckIcon className="h-4 w-4" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-x pt-24" aria-labelledby="services-title">
        <div className="flex flex-wrap items-end justify-between gap-6" data-reveal="">
          <div>
            <p className="eyebrow">Nos services</p>
            <h2 id="services-title" className="h-section mt-3 max-w-2xl">Un seul interlocuteur, de la visite annuelle à la pose</h2>
          </div>
          <Link href={PATHS.services} className="inline-flex items-center gap-2 font-display text-xl font-bold uppercase tracking-wider text-flame-dark">
            Tous nos services <ArrowIcon />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {Object.values(services).map((service, index) => (
            <ServiceCard key={service.key} service={service} index={index} />
          ))}
        </div>
      </section>

      <section className="mt-28 bg-coal-2 py-24 text-white diagonal-both" aria-labelledby="chiffres-title">
        <h2 id="chiffres-title" className="sr-only">Gaz Flash en quelques repères</h2>
        <div className="container-x grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: YEARS, suffix: " ans", label: "d'activité dans le chauffage, depuis 1965", decimals: 0 },
            { value: 4, suffix: "", label: "territoires couverts : Paris, 93, 92 et 94", decimals: 0 },
            { value: 2, suffix: " ans", label: "de garantie sur les pièces des installations", decimals: 0 },
            { value: business.googleRating.value, suffix: "/5", label: `sur Google, d'après ${business.googleRating.count} avis`, decimals: 1 },
          ].map((stat) => (
            <div key={stat.label} data-reveal="">
              <p className="font-display text-7xl font-extrabold leading-none text-ember sm:text-8xl">
                <span data-count={stat.value} data-decimals={stat.decimals} data-suffix={stat.suffix}>
                  {String(stat.value).replace(".", ",")}
                  {stat.suffix}
                </span>
              </p>
              <p className="mx-auto mt-3 max-w-[16rem] text-white/75">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pt-24" aria-labelledby="tarifs-title">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div data-reveal="left">
            <p className="eyebrow">Des tarifs affichés</p>
            <h2 id="tarifs-title" className="h-section mt-3">Vous savez ce que vous payez avant d'appeler</h2>
            <p className="mt-6 text-lg text-coal-soft">
              Entretien annuel de chaudière, forfait révision sans engagement, ramonage : les prix TTC sont publiés, avec la différence entre Paris 18e et le reste de Paris et de la petite couronne. Le contrat d'entretien inclut tous les dépannages en main-d'œuvre et déplacement, hors pièces.
            </p>
            <Link href={PATHS.prices} className="btn btn-dark mt-8">
              Voir tous les tarifs <ArrowIcon />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2" data-reveal="">
            <div className="card border-t-[6px] border-t-flame p-7">
              <p className="font-display text-xl font-semibold uppercase tracking-wider text-coal-soft">Chaudière · forfait révision</p>
              <p className="mt-2 font-display text-7xl font-extrabold leading-none text-coal">
                {priceGroups[0].review.paris18}<small className="ml-1 font-sans text-sm font-semibold text-coal-soft">TTC</small>
              </p>
              <p className="mt-3 text-sm text-coal-soft">Paris 18e, sans engagement, attestation remise. {priceGroups[0].review.other} TTC ailleurs à Paris et en petite couronne.</p>
            </div>
            <div className="card border-t-[6px] border-t-coal bg-coal-2 p-7 text-white">
              <p className="font-display text-xl font-semibold uppercase tracking-wider text-white/70">Chaudière · contrat annuel</p>
              <p className="mt-2 font-display text-7xl font-extrabold leading-none text-ember">
                {priceGroups[0].contract.paris18}<small className="ml-1 font-sans text-sm font-semibold text-white/70">TTC</small>
              </p>
              <p className="mt-3 text-sm text-white/75">Paris 18e, dépannages inclus (hors pièces), intervention prioritaire. {priceGroups[0].contract.other} TTC ailleurs.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-x pt-28" aria-labelledby="raisons-title">
        <div data-reveal="">
          <p className="eyebrow">Pourquoi Gaz Flash</p>
          <h2 id="raisons-title" className="h-section mt-3 max-w-3xl">Six raisons de nous confier votre chauffage</h2>
        </div>
        <ol className="mt-12 grid gap-x-10 gap-y-9 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <li key={reason.title} className="relative border-t-2 border-coal pt-5" data-reveal="" style={{ ["--d" as string]: index % 3 }}>
              <span className="font-display text-6xl font-extrabold leading-none text-flame/90">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 text-3xl uppercase">{reason.title}</h3>
              <p className="mt-2 text-coal-soft">{reason.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-28 overflow-hidden bg-cream-deep py-20" aria-labelledby="marques-title">
        <div className="container-x" data-reveal="">
          <p className="eyebrow">Constructeurs</p>
          <h2 id="marques-title" className="h-section mt-3 max-w-3xl">Des marques que nous connaissons de l'intérieur</h2>
        </div>
        <div className="marquee relative mt-12 overflow-hidden" aria-hidden="true">
          <div className="marquee-track items-center gap-6 pl-6">
            {loopedBrands.map((brand, index) => (
              <div key={`${brand.id}-${index}`} className="flex h-28 w-64 shrink-0 items-center justify-center rounded-[4px] border border-line bg-white px-8">
                <Logo id={brand.id} alt="" className="max-h-16 w-auto max-w-full object-contain" width={180} height={64} />
              </div>
            ))}
          </div>
        </div>
        <p className="container-x mt-8 text-sm text-coal-soft">Frisquet, Chaffoteaux, Saunier Duval, ELM Leblanc, De Dietrich : marques présentées sur le site de l'entreprise. Styx pour les accumulateurs à gaz.</p>
      </section>

      <section className="container-x pt-24" aria-labelledby="gammes-title">
        <div className="flex flex-wrap items-end justify-between gap-6" data-reveal="">
          <div>
            <p className="eyebrow">Installations</p>
            <h2 id="gammes-title" className="h-section mt-3 max-w-2xl">Quatre gammes, un diagnostic pour choisir la bonne</h2>
          </div>
          <Link href={PATHS.installs} className="inline-flex items-center gap-2 font-display text-xl font-bold uppercase tracking-wider text-flame-dark">
            Voir les installations <ArrowIcon />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {ranges.map((range, index) => (
            <Link key={range.path} href={range.path} className="lift zoom group relative isolate flex min-h-[300px] items-end overflow-hidden rounded-[4px] text-white" data-reveal="" style={{ ["--d" as string]: index % 2 }}>
              <Photo id={range.image} alt="" sizes="(min-width:768px) 560px, 100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-coal-2 via-coal-2/60 to-coal-2/10" />
              <div className="relative p-7">
                <span className="font-display text-xl font-bold tracking-widest text-ember">{range.letter}</span>
                <h3 className="text-4xl uppercase">{range.title}</h3>
                <p className="mt-2 max-w-md text-[0.95rem] text-white/80">{range.products.map((p) => p.brand).join(" · ")}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-x pt-28" aria-labelledby="avis-title">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.4fr]">
          <div data-reveal="">
            <p className="eyebrow">Avis Google</p>
            <h2 id="avis-title" className="h-section mt-3">Ce que disent nos clients</h2>
            <p className="mt-6 flex items-center gap-4">
              <span className="font-display text-6xl font-extrabold leading-none text-coal">{String(business.googleRating.value).replace(".", ",")}</span>
              <span>
                <span className="flex text-ember" aria-hidden="true">
                  {Array.from({ length: 4 }, (_, i) => <StarIcon key={i} className="h-5 w-5" />)}
                </span>
                <span className="text-sm text-coal-soft">sur 5, d'après {business.googleRating.count} avis Google</span>
              </span>
            </p>
            <a href={business.mapsUrl} rel="noopener noreferrer" target="_blank" className="mt-5 inline-flex items-center gap-2 font-semibold text-flame-dark underline underline-offset-4">
              Lire tous les avis sur Google <ArrowIcon className="h-4 w-4" />
            </a>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {reviews.map((review, index) => (
              <figure key={review.author} className="card flex flex-col p-6" data-reveal="" style={{ ["--d" as string]: index }}>
                <div className="flex text-ember" aria-label="5 étoiles sur 5">
                  {Array.from({ length: 5 }, (_, i) => <StarIcon key={i} className="h-4 w-4" />)}
                </div>
                <blockquote className="mt-3 flex-1 text-[0.97rem]">« {review.text} »</blockquote>
                <figcaption className="mt-4 text-sm text-coal-soft">
                  <strong className="text-coal">{review.author}</strong> · avis Google · {review.when.toLowerCase()}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <div className="pt-28">
        <Faq keyName="home" />
      </div>

      <div className="pt-28">
        <CtaBand />
      </div>

      <JsonLd nodes={[webPageNode({ title, description, path: PATHS.home }), faqNode("home")]} />
    </>
  );
}
