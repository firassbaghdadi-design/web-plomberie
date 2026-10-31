import Link from "next/link";
import { ArrowIcon } from "@/components/Icons";
import { Img } from "@/components/Img";
import { JsonLd } from "@/components/JsonLd";
import { Brief, CtaBand, CtaButtons, FaqList, LocalBlock, Rating, Station } from "@/components/Sections";
import { ZoneMap } from "@/components/ZoneMap";
import { home } from "@/lib/content";
import { localPages } from "@/lib/local";
import { imgSrc, photoAlt } from "@/lib/photos";
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

const d = (ms: number) => ({ ["--d" as string]: `${ms}ms` });

/** Photo légendée façon magazine : coins presque droits, petite légende dessous. */
function Photo({ id, className = "", caption }: { id: string; className?: string; caption?: string }) {
  return (
    <figure>
      <div data-mask className="img-zoom overflow-hidden rounded-[4px]">
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
      {/* Héros : titre très grand et fin, la veilleuse s'allume à côté de l'accroche */}
      <section className="relative">
        <div className="wrap grid gap-x-14 pt-10 sm:pt-14 lg:grid-cols-12 lg:pt-16">
          <div className="lg:col-span-8 lg:row-start-1">
            <p className="label max-w-[17rem] text-blue sm:max-w-none" data-heat-start>Votre partenaire de confiance sur Paris depuis 1985</p>
            <h1 className="mt-7 text-[2.5rem] leading-[1.02] sm:text-[4rem] lg:text-[4.4rem] xl:text-[5.15rem]">
              <span className="line-up"><span>Chauffagiste à Paris&nbsp;9&nbsp;:</span></span>
              <span className="line-up"><span style={d(120)} className="text-blue">installation et entretien</span></span>
              <span className="line-up"><span style={d(240)} className="text-blue">de chaudières gaz</span></span>
            </h1>
          </div>
          <figure className="fade-in mt-10 lg:col-span-4 lg:col-start-9 lg:row-span-2 lg:row-start-1 lg:mt-1" style={d(300)}>
            <div className="overflow-hidden rounded-[4px]">
              <Img id="toits" alt={photoAlt("toits")} priority className="aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5]" imgClassName="slow-zoom" />
            </div>
            <figcaption className="mt-3 flex justify-between gap-4 text-[0.78rem] text-ink-faint">
              <span>{photoAlt("toits")}</span>
              <span className="num shrink-0 lg:hidden">Paris 9e</span>
            </figcaption>
            <div className="mt-8 border-t border-line pt-6"><Rating /></div>
          </figure>
          <div className="mt-10 grid gap-x-12 lg:col-span-8 lg:row-start-2 lg:mt-12 lg:grid-cols-8">
            <p className="fade-in text-[1.08rem] leading-relaxed lg:col-span-5" style={d(450)}>
              SERAGAZ est votre partenaire de confiance au service de votre confort thermique. Spécialistes du chauffage à Paris 9, nous vous proposons des interventions complètes pour assurer la performance de vos équipements et de votre sécurité.
            </p>
            <div className="fade-in mt-9 lg:col-span-8" style={d(550)}><CtaButtons /></div>
          </div>
        </div>
        <div className="wrap">
          <dl className="mt-14 grid grid-cols-2 border-t border-line sm:grid-cols-4 lg:mt-16">
            {[["Famille", "Depuis 1903"], ["SERAGAZ", "Fondée en 1985"], ["Réseau", "Partenaire GRDF"], ["Qualifications", "RGE · PG PMG"]].map(([k, v]) => (
              <div key={k} className="py-6 pr-4">
                <dt className="label">{k}</dt>
                <dd className="mt-2 text-[1.2rem] font-light leading-tight text-navy sm:text-[1.4rem]">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Brief text={home.brief} />

      {/* 01 — Services */}
      <section aria-labelledby="titre-services" className="border-t border-line py-20 sm:py-32">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:pr-8">
            <Station n="01">Nos services</Station>
            <h2 id="titre-services" className="h2 mt-6" data-reveal>Faites confiance à SERAGAZ pour votre chauffage à Paris</h2>
            <p className="mt-7 max-w-md" data-reveal>Nos services regroupent l'installation, l'entretien, le dépannage, le ramonage et le désembouage : tout ce qui touche à votre chaudière et à votre production d'eau chaude au gaz.</p>
          </div>
          <ul className="border-t border-line lg:col-span-7">
            {services.map((s, i) => (
              <li key={s.href} className="border-b border-line" data-reveal style={d(i * 70)}>
                <Link href={s.href} className="row-link flex items-start gap-6 py-7 sm:gap-10 sm:py-8">
                  <span className="num pt-1.5 text-[0.8rem] text-ink-faint">{s.n}</span>
                  <span className="row-title flex-1">
                    <span className="block text-[1.3rem] font-light leading-snug text-navy sm:text-[1.6rem]">{s.t}</span>
                    <span className="mt-2 block text-[0.95rem]">{s.d}</span>
                  </span>
                  <ArrowIcon className="row-arrow mt-2 h-5 w-5 shrink-0 text-ink-faint" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 02 — Expertise */}
      <section aria-labelledby="titre-expertise" className="border-t border-line py-20 sm:py-32">
        <div className="wrap grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Photo id="atelier" className="aspect-[4/5]" />
            <p className="mt-8 flex items-baseline gap-4 border-t border-line pt-6">
              <span className="num text-[4rem] font-extralight leading-none tracking-tight text-blue">40+</span>
              <span className="label">ans d'expertise</span>
            </p>
          </div>
          <div className="lg:col-span-7">
            <Station n="02">Notre expertise</Station>
            <h2 id="titre-expertise" className="h2 mt-6" data-reveal>Plus de 40 ans à Paris et en petite couronne</h2>
            <div className="prose-sg mt-7 max-w-xl" data-reveal>
              <p>Nous intervenons depuis plus de 40 ans à Paris et la petite couronne pour assurer le bon fonctionnement et la longévité de vos installations de chauffage et appareils à gaz type chauffe-eau, chaudière.</p>
              <p>Grâce à notre expertise et notre savoir-faire, vous pouvez compter sur nous pour vous conseiller et vous accompagner dans toutes interventions liées à votre chauffage et votre production d'eau chaude.</p>
              <p>Contactez-nous et profitez d'une installation en bonne santé et d'un logement bien chauffé. Nos chauffagistes à Paris 9 s'occupent de tout.</p>
            </div>
            <ol className="mt-12 grid grid-cols-3 gap-6" data-reveal>
              {[["1903", "Franche Industries, par Henri Franche"], ["1985", "Jean-Marie Franche fonde SERAGAZ"], ["Aujourd'hui", "Jérémy Franche, même adresse"]].map(([y, t]) => (
                <li key={y} className="border-t border-line pt-5">
                  <p className="num text-[1.5rem] font-extralight leading-none text-navy sm:text-[2.4rem]">{y}</p>
                  <p className="mt-3 text-[0.88rem] leading-snug">{t}</p>
                </li>
              ))}
            </ol>
            <Link href={PATHS.presentation} className="link-line mt-12">En savoir plus <ArrowIcon /></Link>
          </div>
        </div>
      </section>

      {/* 03 — Installation */}
      <section aria-labelledby="titre-installation" className="border-t border-line py-20 sm:py-32">
        <div className="wrap grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-6">
            <Station n="03">Installation et remplacement</Station>
            <h2 id="titre-installation" className="h2 mt-6" data-reveal>Améliorez votre confort et votre sécurité avec une nouvelle chaudière</h2>
            <div className="prose-sg mt-7" data-reveal>
              <p>Profitez d'une production de chauffage et d'eau chaude performante et économique grâce à nos solutions adaptées à votre besoin.</p>
              <p>Pour un logement bien chauffé, de l'eau chaude stable et des économies d'énergie, l'installation ou le remplacement de votre chaudière est très important. Nous vous accompagnons dans le choix de la solution et du modèle le plus adapté à votre logement.</p>
            </div>
            <ul className="mt-9 border-b border-line" data-reveal>
              {["Installation de chaudières à gaz performantes et économiques.", "Remplacement de votre ancienne chaudière par un modèle plus récent, plus écologique et plus sûr.", "Conseils personnalisés pour choisir l'équipement idéal.", "Mise en service et réglages optimisés pour un rendement énergétique optimal."].map((t) => (
                <li key={t} className="flex gap-4 border-t border-line py-4 text-ink"><span className="mt-[0.8em] h-px w-4 shrink-0 bg-green" aria-hidden="true" />{t}</li>
              ))}
            </ul>
            <Link href={`${PATHS.contact}?demande=remplacement`} className="btn-primary mt-10" data-track="cta_devis">Demander un devis ou une intervention <ArrowIcon /></Link>
          </div>
          <div className="lg:col-span-6">
            <Photo id="accueil" className="aspect-[4/3] lg:aspect-[4/5]" />
          </div>
        </div>
      </section>

      {/* 04 — Entretien et dépannage : chiffres ADEME */}
      <section aria-labelledby="titre-entretien" className="border-t border-line py-20 sm:py-32">
        <div className="wrap">
          <div className="max-w-3xl">
            <Station n="04">Entretien et dépannage à Paris 9</Station>
            <h2 id="titre-entretien" className="h2 mt-6" data-reveal>Optimisez votre chauffage avec notre entretien et dépannage</h2>
            <p className="mt-7 max-w-2xl text-lg" data-reveal>Un appareil bien entretenu consomme moins, dure plus longtemps et tombe moins souvent en panne. En cas de dysfonctionnement, notre service de dépannage intervient rapidement.</p>
          </div>
          <dl className="mt-16 grid gap-x-12 sm:grid-cols-3">
            {[["−15 %", "de consommation, jusqu'à, pour un appareil bien entretenu"], ["×3", "la durée de vie de la chaudière"], ["5 fois", "moins de pannes"]].map(([k, v], i) => (
              <div key={k} className="border-t border-line py-8" data-reveal style={d(i * 100)}>
                <dt className="num whitespace-nowrap text-[4rem] font-extralight leading-none tracking-tight text-blue sm:text-[4.6rem] lg:text-[5.6rem]">{k}</dt>
                <dd className="mt-4 max-w-[16rem]">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="text-[0.78rem] text-ink-faint">Source citée par SERAGAZ : ADEME.</p>
          <div className="mt-20 grid items-start gap-14 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <Photo id="intervention" className="aspect-[4/5]" />
            </div>
            <div className="lg:col-span-7 lg:pt-4">
              <ul className="border-b border-line">
                {[
                  ["Entretien annuel obligatoire", "Avec nettoyage et vérification complète."],
                  ["Diagnostic précis", "Et réparation rapide en cas de panne."],
                  ["Intervention d'urgence", "En souscrivant un contrat d'entretien, vous êtes prioritaire en cas de panne, pour assurer votre confort sans attendre."],
                  ["Ramonage du conduit", "De cheminée pour les chaudières à tirage naturel, pour garantir votre sécurité."],
                ].map(([t, x], i) => (
                  <li key={t} className="grid gap-2 border-t border-line py-7 sm:grid-cols-[3rem_1fr]" data-reveal style={d(i * 80)}>
                    <span className="num pt-1 text-[0.8rem] text-ink-faint">{String(i + 1).padStart(2, "0")}</span>
                    <span>
                      <span className="block text-[1.3rem] font-light text-navy sm:text-[1.5rem]">{t}</span>
                      <span className="mt-1.5 block">{x}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex flex-col gap-4">
                <Link href={PATHS.repair} className="link-line self-start">Entretien et dépannage <ArrowIcon /></Link>
                <p className="text-ink-faint">Faites des économies, prolongez la durée de vie et sécurisez votre installation gaz.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05 et 06 — Ramonage, désembouage */}
      <section aria-labelledby="titre-ramonage" className="border-t border-line py-20 sm:py-32">
        <div className="wrap grid gap-20 lg:grid-cols-2 lg:gap-16">
          <article>
            <Photo id="cheminees" className="aspect-[4/3]" />
            <Station n="05" className="mt-10">Ramonage</Station>
            <h2 id="titre-ramonage" className="mt-5 text-[1.9rem] sm:text-[2.4rem]">Assurez la sécurité de vos installations avec notre service de ramonage</h2>
            <p className="mt-6">Le ramonage est essentiel pour assurer votre sécurité et le bon fonctionnement de vos équipements. C'est une obligation légale et indispensable pour vos assurances. Protégez votre logement avec notre service de ramonage efficace et professionnel : ramonage de cheminées pour éviter les risques d'incendie, ramonage du conduit pour améliorer le rendement énergétique, nettoyage complet des conduits pour prévenir les obstructions, attestation de ramonage conforme aux normes en vigueur.</p>
            <Link href={PATHS.sweeping} className="link-line mt-8">Le ramonage <ArrowIcon /></Link>
          </article>
          <article className="lg:mt-40">
            <Photo id="vanne" className="aspect-[4/3]" />
            <Station n="06" className="mt-10">Désembouage et détartrage</Station>
            <h2 className="mt-5 text-[1.9rem] sm:text-[2.4rem]">Réalisez le désembouage et le détartrage de vos installations de chauffage</h2>
            <p className="mt-6">Avec le temps, le calcaire et les boues s'accumulent dans vos circuits de chauffage et votre chaudière, réduisant leur efficacité et provoquant une surconsommation de gaz et des pannes. Nos services de désembouage et de détartrage rétablissent la performance de votre installation : détartrage de chaudière, désembouage du circuit, entretien préventif et diagnostic complet pour identifier les points de blocage et proposer des solutions adaptées.</p>
            <Link href={PATHS.descaling} className="link-line mt-8">Le désembouage <ArrowIcon /></Link>
          </article>
        </div>
      </section>

      {/* 07 — Contrat d'entretien : la ligne de chaleur atteint la température idéale */}
      <section aria-labelledby="titre-contrat" className="border-t border-line bg-gradient-to-b from-white via-green-tint/60 to-white py-20 sm:py-32">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:pr-8">
            <Station n="07" ideal>Contrat d'entretien</Station>
            <h2 id="titre-contrat" className="h2 mt-6" data-reveal>Prenez soin de votre chaudière gaz avec nos contrats d'entretien à Paris 9</h2>
            <p className="mt-7" data-reveal>Pour garantir le bon fonctionnement de votre chaudière toute l'année, nous vous proposons des contrats d'entretien adaptés à vos besoins. Avec nos contrats d'entretien, vous bénéficiez d'une installation performante et d'une tranquillité d'esprit totale.</p>
            <Link href={PATHS.maintenance} className="btn-primary mt-10">Le contrat d'entretien <ArrowIcon /></Link>
          </div>
          <ol className="grid gap-x-10 sm:grid-cols-2 lg:col-span-7">
            {[
              "Interventions prioritaires en cas de panne pour limiter l'attente.",
              "Main-d'œuvre et déplacement illimités inclus ; seules les pièces détachées en supplément.",
              "Visite de contrôle annuelle, conforme à la demande de votre assurance.",
              "Nettoyage approfondi selon la norme NF X50-010.",
              "Tarif préférentiel sur le ramonage des chaudières à tirage naturel.",
              "Conseils personnalisés pour optimiser votre consommation.",
            ].map((t, i) => (
              <li key={t} className="border-t border-green/40 py-6" data-reveal style={d(i * 60)}>
                <span className="num text-[1.9rem] font-extralight leading-none text-green-deep">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-3 text-ink">{t}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Marques */}
      <section aria-labelledby="titre-marques" className="border-t border-line py-16">
        <div className="wrap">
          <h2 id="titre-marques" className="label text-center leading-relaxed">Station technique et entreprise référencée chez les fabricants</h2>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {brandLogos.map((b) => {
              const src = imgSrc(b.key);
              return (
                <li key={b.key} className="flex h-10 items-center">
                  {src ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={src} alt={b.name} loading="lazy" className="max-h-10 w-auto max-w-[7.5rem] object-contain opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0" />
                  ) : (
                    <span className="text-[1.05rem] font-light tracking-wide text-ink-faint">{b.name}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* 08 — Zone */}
      <section aria-labelledby="titre-zone" className="border-t border-line py-20 sm:py-32">
        <div className="wrap grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Station n="08">Zone d'intervention autour de Paris 9</Station>
            <h2 id="titre-zone" className="h2 mt-6" data-reveal>SERAGAZ se déplace dans un rayon de 15 km autour de Paris 9</h2>
            <p className="mt-7" data-reveal>Tout Paris, du 1er au 20e arrondissement, et les communes voisines : {business.areaList.slice(1).join(", ")}.</p>
            <ul className="mt-10 grid border-t border-line sm:grid-cols-2 sm:gap-x-8">
              {localPages.map((p) => (
                <li key={p.slug} className="border-b border-line">
                  <Link href={p.path} className="row-link flex items-center justify-between gap-3 py-3.5 text-[0.95rem] text-ink">
                    <span className="row-title">{p.crumb}</span> <ArrowIcon className="row-arrow h-4 w-4 shrink-0 text-ink-faint" />
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
