import Link from "next/link";
import { Gauge } from "@/components/Gauge";
import { ArrowIcon, CheckIcon, FlameMark } from "@/components/Icons";
import { Img } from "@/components/Img";
import { JsonLd } from "@/components/JsonLd";
import { Brief, CtaBand, CtaButtons, FaqList, LocalBlock } from "@/components/Sections";
import { ZoneMap } from "@/components/ZoneMap";
import { home } from "@/lib/content";
import { localPages } from "@/lib/local";
import { commonsAlt, imgSrc } from "@/lib/photos";
import { PATHS, brandLogos, business, type Faq } from "@/lib/site";
import { faqNode, pageMeta, webPageNode } from "@/lib/seo";

export const metadata = pageMeta({ title: home.title, description: home.description, path: "/" });

const services = [
  { href: PATHS.replacement, n: "01", t: "Installation et remplacement de chauffe-eau et chaudières gaz", d: "Étude du logement, choix du modèle, pose, mise en service." },
  { href: PATHS.repair, n: "02", t: "Entretien annuel et dépannage de chaudières à gaz", d: "Nettoyage complet, attestation, diagnostic et réparation." },
  { href: PATHS.sweeping, n: "03", t: "Ramonage du conduit de cheminée des chaudières à gaz", d: "Chaudières à tirage naturel, attestation pour l'assurance." },
  { href: PATHS.descaling, n: "04", t: "Désembouage et détartrage des circuits de chauffage", d: "Radiateurs froids en bas, bruits, surconsommation." },
  { href: PATHS.meter, n: "05", t: "Déplacement de compteur gaz", d: "Partenaire GRDF : rénovation, sécurité, commodité." },
];

const faq: Faq[] = [
  {
    q: "Où se trouve SERAGAZ et quels sont ses horaires ?",
    a: "Au 69 rue de Dunkerque, 75009 Paris. Le site de l'entreprise indique une ouverture du lundi au vendredi de 7 h 30 à 17 h 30, et une permanence téléphonique au 01 42 80 03 01 de 8 h à 12 h et de 14 h à 17 h.",
  },
  {
    q: "Dans quelles villes SERAGAZ intervient-elle ?",
    a: "Dans les vingt arrondissements de Paris et en petite couronne, dans un rayon de 15 km autour du 9e : Clichy, Levallois-Perret, Boulogne-Billancourt, Le Pré-Saint-Gervais, Saint-Mandé et Vincennes sont citées par l'entreprise.",
  },
  {
    q: "Le devis est-il gratuit ?",
    a: "Oui, la demande de devis est gratuite. Décrivez votre besoin, l'adresse et votre appareil dans le formulaire de contact, photos à l'appui si vous le souhaitez, ou appelez directement l'équipe aux heures de permanence.",
  },
  {
    q: "Quelles qualifications SERAGAZ possède-t-elle ?",
    a: "L'entreprise se présente comme Partenaire GRDF, qualifiée RGE par Qualibat et titulaire de l'appellation PG PMG, Professionnel Gaz installation et maintenance, régulièrement auditée par Qualigaz. Elle est aussi station technique pour plusieurs fabricants de chaudières.",
  },
];

export default function HomePage() {
  const nodes = [webPageNode({ title: home.title, description: home.description, path: "/" }), faqNode(faq)];
  return (
    <>
      {/* Héros */}
      <section className="relative overflow-hidden bg-night text-white">
        <div className="grid-lines absolute inset-0" aria-hidden="true" />
        <div data-mask className="absolute inset-y-0 right-0 hidden w-[42%] lg:block">
          <Img id="toits" alt={commonsAlt("toits")} priority className="absolute inset-0" imgClassName="ken" />
          <div className="absolute inset-0 bg-gradient-to-r from-night via-night/30 to-transparent" aria-hidden="true" />
        </div>
        <div className="wrap relative grid min-h-[calc(100svh-8rem)] content-center gap-12 py-14 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-7">
            <p className="label flex items-center gap-3 text-flame">
              <span className="h-px w-8 bg-flame" aria-hidden="true" /> Votre partenaire de confiance sur Paris depuis 1985
            </p>
            <h1 className="mt-6 text-[2.5rem] font-semibold sm:text-6xl xl:text-[4.1rem]">
              <span className="line-up"><span>Chauffagiste à Paris&nbsp;9&nbsp;:</span></span>
              <span className="line-up"><span style={{ ["--d" as string]: "120ms" }} className="text-white/55">installation et entretien</span></span>
              <span className="line-up"><span style={{ ["--d" as string]: "240ms" }}>de chaudières gaz</span></span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-white/75 sm:text-xl">
              SERAGAZ est votre partenaire de confiance au service de votre confort thermique. Spécialistes du chauffage à Paris 9, nous vous proposons des interventions complètes pour assurer la performance de vos équipements et de votre sécurité.
            </p>
            <div className="mt-10"><CtaButtons light /></div>
          </div>
          <div className="relative lg:hidden">
            <Img id="toits" alt={commonsAlt("toits")} className="h-64 rounded-[1.5rem] sm:h-80" imgClassName="ken" />
            <Gauge className="absolute -bottom-8 right-4 h-28 w-28 drop-shadow-2xl" />
          </div>
          <div className="flex flex-col items-stretch gap-5 lg:col-span-4 lg:col-start-9 lg:items-end">
            <Gauge className="hidden h-36 w-36 shrink-0 drop-shadow-2xl lg:block" />
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/15 shadow-plate backdrop-blur lg:w-80">
              {[["Famille", "Depuis 1903"], ["SERAGAZ", "Fondée en 1985"], ["Réseau", "Partenaire GRDF"], ["Qualifications", "RGE · PG PMG"]].map(([k, v]) => (
                <div key={k} className="bg-night/85 px-4 py-3.5">
                  <dt className="label text-[0.6rem] text-white/50">{k}</dt>
                  <dd className="mt-0.5 font-display text-[1.05rem] font-semibold leading-tight">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <Brief text={home.brief} />

      {/* Services */}
      <section aria-labelledby="titre-services" className="bg-paper py-20 sm:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="label text-blue" data-reveal>Nos services</p>
            <h2 id="titre-services" className="mt-4 text-4xl font-semibold text-night sm:text-6xl" data-reveal>Faites confiance à SERAGAZ pour votre chauffage à Paris</h2>
            <p className="mt-6 text-ink-soft" data-reveal>Nos services regroupent l'installation, l'entretien, le dépannage, le ramonage et le désembouage : tout ce qui touche à votre chaudière et à votre production d'eau chaude au gaz.</p>
          </div>
          <ul className="border-t border-line lg:col-span-7">
            {services.map((s, i) => (
              <li key={s.href} className="border-b border-line" data-reveal style={{ ["--d" as string]: `${i * 70}ms` }}>
                <Link href={s.href} className="row-link group relative flex items-center gap-5 overflow-hidden py-6 sm:gap-8 sm:py-7">
                  <span className="row-fill absolute inset-0 bg-white" aria-hidden="true" />
                  <span className="relative font-display text-sm font-semibold text-blue">{s.n}</span>
                  <span className="relative flex-1">
                    <span className="block font-display text-xl font-semibold leading-snug text-night sm:text-2xl">{s.t}</span>
                    <span className="mt-1 block text-[0.95rem] text-ink-soft">{s.d}</span>
                  </span>
                  <span className="row-arrow relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-white text-blue"><ArrowIcon /></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Expertise */}
      <section aria-labelledby="titre-expertise" className="bg-white py-20 sm:py-28">
        <div className="wrap grid items-center gap-12 lg:grid-cols-12">
          <div className="relative lg:col-span-6">
            <div data-mask className="overflow-hidden rounded-[1.75rem]">
              <Img id="atelier" alt="Technicien SERAGAZ au travail (photo publiée par l'entreprise)" className="aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]" />
            </div>
            <div className="absolute -bottom-6 left-6 rounded-2xl bg-night px-6 py-5 text-white shadow-plate sm:left-auto sm:right-[-1.5rem]">
              <p className="font-display text-6xl font-semibold leading-none text-flame">40<span className="text-white">+</span></p>
              <p className="label mt-2 text-white/60">ans d'expertise</p>
            </div>
          </div>
          <div className="lg:col-span-6 lg:pl-8">
            <p className="label text-blue" data-reveal>Notre expertise</p>
            <h2 id="titre-expertise" className="mt-4 text-4xl font-semibold text-night sm:text-5xl" data-reveal>Plus de 40 ans à Paris et en petite couronne</h2>
            <div className="prose-sg mt-6 text-ink-soft" data-reveal>
              <p>Nous intervenons depuis plus de 40 ans à Paris et la petite couronne pour assurer le bon fonctionnement et la longévité de vos installations de chauffage et appareils à gaz type chauffe-eau, chaudière.</p>
              <p>Grâce à notre expertise et notre savoir-faire, vous pouvez compter sur nous pour vous conseiller et vous accompagner dans toutes interventions liées à votre chauffage et votre production d'eau chaude.</p>
              <p>Contactez-nous et profitez d'une installation en bonne santé et d'un logement bien chauffé. Nos chauffagistes à Paris 9 s'occupent de tout.</p>
            </div>
            <ol className="mt-10 grid grid-cols-3 gap-4 border-t border-line pt-8" data-reveal>
              {[["1903", "Franche Industries, par Henri Franche"], ["1985", "Jean-Marie Franche fonde SERAGAZ"], ["Aujourd'hui", "Jérémy Franche, même adresse"]].map(([y, t]) => (
                <li key={y}><p className="font-display text-2xl font-semibold text-night sm:text-3xl">{y}</p><p className="mt-1 text-sm text-ink-soft">{t}</p></li>
              ))}
            </ol>
            <Link href={PATHS.presentation} className="btn-line mt-10">En savoir plus <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      {/* Installation */}
      <section aria-labelledby="titre-installation" className="bg-paper py-20 sm:py-28">
        <div className="wrap grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="label text-blue" data-reveal>Installation et remplacement</p>
            <h2 id="titre-installation" className="mt-4 text-4xl font-semibold text-night sm:text-5xl" data-reveal>Améliorez votre confort et votre sécurité avec une nouvelle chaudière</h2>
            <div className="prose-sg mt-6 text-ink-soft" data-reveal>
              <p>Profitez d'une production de chauffage et d'eau chaude performante et économique grâce à nos solutions adaptées à votre besoin.</p>
              <p>Pour un logement bien chauffé, de l'eau chaude stable et des économies d'énergie, l'installation ou le remplacement de votre chaudière est très important. Nous vous accompagnons dans le choix de la solution et du modèle le plus adapté à votre logement.</p>
            </div>
            <ul className="mt-7 grid gap-3" data-reveal>
              {["Installation de chaudières à gaz performantes et économiques.", "Remplacement de votre ancienne chaudière par un modèle plus récent, plus écologique et plus sûr.", "Conseils personnalisés pour choisir l'équipement idéal.", "Mise en service et réglages optimisés pour un rendement énergétique optimal."].map((t) => (
                <li key={t} className="flex gap-3"><span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-flame text-night"><CheckIcon className="h-3 w-3" /></span>{t}</li>
              ))}
            </ul>
            <Link href={`${PATHS.contact}?demande=remplacement`} className="btn-primary mt-9">Demander un devis ou une intervention <ArrowIcon /></Link>
          </div>
          <div data-mask className="overflow-hidden rounded-[1.75rem] lg:col-span-6">
            <Img id="accueil" alt="Intervention SERAGAZ sur une chaudière gaz (photo publiée par l'entreprise)" className="aspect-[3/2]" />
          </div>
        </div>
      </section>

      {/* Entretien et dépannage : chiffres ADEME */}
      <section aria-labelledby="titre-entretien" className="relative overflow-hidden bg-night py-20 text-white sm:py-28">
        <div className="grid-lines absolute inset-0" aria-hidden="true" />
        <div className="wrap relative">
          <div className="max-w-3xl">
            <p className="label text-flame" data-reveal>Entretien et dépannage à Paris 9</p>
            <h2 id="titre-entretien" className="mt-4 text-4xl font-semibold sm:text-6xl" data-reveal>Optimisez votre chauffage avec notre entretien et dépannage</h2>
            <p className="mt-6 text-lg text-white/70" data-reveal>Un appareil bien entretenu consomme moins, dure plus longtemps et tombe moins souvent en panne. En cas de dysfonctionnement, notre service de dépannage intervient rapidement.</p>
          </div>
          <dl className="mt-14 grid gap-px overflow-hidden rounded-[1.5rem] bg-white/10 sm:grid-cols-3">
            {[["−15 %", "de consommation, jusqu'à, pour un appareil bien entretenu"], ["×3", "la durée de vie de la chaudière"], ["5 fois", "moins de pannes"]].map(([k, v], i) => (
              <div key={k} className="bg-night-2 p-8 sm:p-10" data-reveal style={{ ["--d" as string]: `${i * 100}ms` }}>
                <dt className="font-display text-6xl font-semibold text-flame sm:text-7xl">{k}</dt>
                <dd className="mt-3 text-white/70">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm text-white/45">Source citée par SERAGAZ : ADEME.</p>
          <ul className="mt-14 grid gap-px overflow-hidden rounded-[1.5rem] bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Entretien annuel obligatoire", "Avec nettoyage et vérification complète."],
              ["Diagnostic précis", "Et réparation rapide en cas de panne."],
              ["Intervention d'urgence", "En souscrivant un contrat d'entretien, vous êtes prioritaire en cas de panne, pour assurer votre confort sans attendre."],
              ["Ramonage du conduit", "De cheminée pour les chaudières à tirage naturel, pour garantir votre sécurité."],
            ].map(([t, d], i) => (
              <li key={t} className="bg-night p-7" data-reveal style={{ ["--d" as string]: `${i * 80}ms` }}>
                <FlameMark className="h-7 w-6" />
                <p className="mt-5 font-display text-xl font-semibold">{t}</p>
                <p className="mt-2 text-white/65">{d}</p>
              </li>
            ))}
          </ul>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link href={PATHS.repair} className="btn-flame">Entretien et dépannage <ArrowIcon /></Link>
            <p className="text-white/60">Faites des économies, prolongez la durée de vie et sécurisez votre installation gaz.</p>
          </div>
        </div>
      </section>

      {/* Ramonage + désembouage */}
      <section aria-labelledby="titre-ramonage" className="bg-white py-20 sm:py-28">
        <div className="wrap grid gap-16 lg:grid-cols-2 lg:gap-12">
          <article>
            <div data-mask className="overflow-hidden rounded-[1.75rem]">
              <Img id="cheminees" alt={commonsAlt("cheminees")} className="aspect-[4/3]" />
            </div>
            <p className="label mt-8 text-blue">Ramonage</p>
            <h2 id="titre-ramonage" className="mt-3 text-3xl font-semibold text-night sm:text-4xl">Assurez la sécurité de vos installations avec notre service de ramonage</h2>
            <p className="mt-5 text-ink-soft">Le ramonage est essentiel pour assurer votre sécurité et le bon fonctionnement de vos équipements. C'est une obligation légale et indispensable pour vos assurances. Protégez votre logement avec notre service de ramonage efficace et professionnel : ramonage de cheminées pour éviter les risques d'incendie, ramonage du conduit pour améliorer le rendement énergétique, nettoyage complet des conduits pour prévenir les obstructions, attestation de ramonage conforme aux normes en vigueur.</p>
            <Link href={PATHS.sweeping} className="btn-line mt-7">Le ramonage <ArrowIcon /></Link>
          </article>
          <article className="lg:mt-32">
            <div data-mask className="overflow-hidden rounded-[1.75rem]">
              <Img id="toits-large" alt={commonsAlt("toits-large")} className="aspect-[4/3]" />
            </div>
            <p className="label mt-8 text-blue">Désembouage et détartrage</p>
            <h2 className="mt-3 text-3xl font-semibold text-night sm:text-4xl">Réalisez le désembouage et le détartrage de vos installations de chauffage</h2>
            <p className="mt-5 text-ink-soft">Avec le temps, le calcaire et les boues s'accumulent dans vos circuits de chauffage et votre chaudière, réduisant leur efficacité et provoquant une surconsommation de gaz et des pannes. Nos services de désembouage et de détartrage rétablissent la performance de votre installation : détartrage de chaudière, désembouage du circuit, entretien préventif et diagnostic complet pour identifier les points de blocage et proposer des solutions adaptées.</p>
            <Link href={PATHS.descaling} className="btn-line mt-7">Le désembouage <ArrowIcon /></Link>
          </article>
        </div>
      </section>

      {/* Contrat d'entretien */}
      <section aria-labelledby="titre-contrat" className="bg-blue-mist py-20 sm:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="label text-blue" data-reveal>Contrat d'entretien</p>
            <h2 id="titre-contrat" className="mt-4 text-4xl font-semibold text-night sm:text-5xl" data-reveal>Prenez soin de votre chaudière gaz avec nos contrats d'entretien à Paris 9</h2>
            <p className="mt-6 text-ink-soft" data-reveal>Pour garantir le bon fonctionnement de votre chaudière toute l'année, nous vous proposons des contrats d'entretien adaptés à vos besoins. Avec nos contrats d'entretien, vous bénéficiez d'une installation performante et d'une tranquillité d'esprit totale.</p>
            <Link href={PATHS.maintenance} className="btn-primary mt-9">Le contrat d'entretien <ArrowIcon /></Link>
          </div>
          <ol className="grid gap-px overflow-hidden rounded-[1.5rem] border border-line bg-line sm:grid-cols-2 lg:col-span-7">
            {[
              "Interventions prioritaires en cas de panne pour limiter l'attente.",
              "Main-d'œuvre et déplacement illimités inclus ; seules les pièces détachées en supplément.",
              "Visite de contrôle annuelle, conforme à la demande de votre assurance.",
              "Nettoyage approfondi selon la norme NF X50-010.",
              "Tarif préférentiel sur le ramonage des chaudières à tirage naturel.",
              "Conseils personnalisés pour optimiser votre consommation.",
            ].map((t, i) => (
              <li key={t} className="bg-white p-6" data-reveal style={{ ["--d" as string]: `${i * 60}ms` }}>
                <span className="font-display text-3xl font-semibold text-blue/25">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-2 text-ink">{t}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Marques */}
      <section aria-labelledby="titre-marques" className="border-y border-line bg-white py-14">
        <div className="wrap">
          <h2 id="titre-marques" className="label text-center text-ink-faint">Station technique et entreprise référencée chez les fabricants</h2>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {brandLogos.map((b) => {
              const src = imgSrc(b.key);
              return (
                <li key={b.key} className="flex h-12 items-center">
                  {src ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={src} alt={b.name} loading="lazy" className="max-h-12 w-auto max-w-[8rem] object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0" />
                  ) : (
                    <span className="font-display text-lg font-semibold text-ink-faint">{b.name}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Zone */}
      <section aria-labelledby="titre-zone" className="relative overflow-hidden bg-night py-20 text-white sm:py-28">
        <div className="grid-lines absolute inset-0" aria-hidden="true" />
        <div className="wrap relative grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="label text-flame" data-reveal>Zone d'intervention autour de Paris 9</p>
            <h2 id="titre-zone" className="mt-4 text-4xl font-semibold sm:text-5xl" data-reveal>SERAGAZ se déplace dans un rayon de 15 km autour de Paris 9</h2>
            <p className="mt-6 text-white/70" data-reveal>Tout Paris, du 1er au 20e arrondissement, et les communes voisines : {business.areaList.slice(1).join(", ")}.</p>
            <ul className="mt-8 grid gap-2 sm:grid-cols-2">
              {localPages.map((p) => (
                <li key={p.slug}>
                  <Link href={p.path} className="group flex items-center justify-between gap-3 rounded-xl border border-white/10 px-4 py-3 text-[0.95rem] transition hover:border-flame hover:bg-white/5">
                    {p.crumb} <ArrowIcon className="h-4 w-4 text-flame transition group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7" data-reveal><ZoneMap /></div>
        </div>
      </section>

      <FaqList items={faq} />
      <LocalBlock />
      <CtaBand title="Un projet, une panne, un entretien ?" text="Demandez votre devis gratuit à l'équipe de la rue de Dunkerque." />
      <JsonLd nodes={nodes} />
    </>
  );
}
