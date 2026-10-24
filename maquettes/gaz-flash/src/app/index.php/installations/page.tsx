import Link from "next/link";
import { CallStrip, Eyebrow, Faq, PageHead, SeeAlso } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { Polaroid } from "@/components/Photo";
import { ArrowIcon } from "@/components/Icons";
import { PATHS, ranges } from "@/lib/site";
import { pageMeta, pageNodes } from "@/lib/seo";

const path = PATHS.installs;
export const metadata = pageMeta(path);

const start = [
  { when: "Vous voulez mieux régler le chauffage sans changer de chaudière", to: PATHS.regulation, label: "A, la régulation" },
  { when: "Votre problème, c'est l'eau chaude", to: PATHS.waterHeater, label: "B, le chauffe-eau gaz" },
  { when: "Vous remplacez une chaudière et visez un rendement élevé", to: PATHS.condensing, label: "C, la condensation" },
  { when: "Vous remplacez une chaudière dans un logement ancien, avec peu de place", to: PATHS.lowTemp, label: "D, la basse température" },
];

export default function InstallationsPage() {
  return (
    <>
      <PageHead
        path={path}
        aside={<Polaroid id="heroInstall" alt="Illustration : vous en rêvez, nous vous l'installons" caption="Vous en rêvez, on l'installe" ratio="4 / 3" sizes="(min-width:1024px) 400px, 90vw" rotate={2} priority />}
      />

      <section className="wrap mt-16" aria-labelledby="gammes">
        <Eyebrow>Les gammes</Eyebrow>
        <h2 id="gammes" className="mt-1">Quatre familles, de A à D</h2>
        <p className="mt-3 max-w-[62ch] text-ink-soft">
          Avec une chaudière gaz conventionnelle, la sensation de confort est optimale et les rendements sont élevés. Par rapport à une chaudière d'ancienne génération, la consommation est réduite. Gaz Flash s'ajuste à tous les besoins de chauffage et de production d'eau chaude sanitaire.
        </p>
        <div className="mt-12 space-y-16">
          {ranges.map((range, index) => (
            <article key={range.path} className={`grid items-center gap-8 md:grid-cols-2 ${index % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <Link href={range.path} aria-hidden="true" tabIndex={-1} className="block">
                <Polaroid id={range.image} alt={`Illustration : ${range.title.toLowerCase()}`} caption={range.title} ratio="1500 / 630" sizes="(min-width:768px) 520px, 90vw" rotate={index % 2 ? 1.2 : -1.2} />
              </Link>
              <div className="prose-gf">
                <p className="hand text-[1.9rem] leading-none text-red-btn">{range.letter}</p>
                <h3 className="!mt-0 text-[1.7rem]">
                  <Link href={range.path} className="text-ink-2 no-underline hover:underline">{range.title}</Link>
                </h3>
                <p>{range.intro}</p>
                <p className="label text-ink-soft">{Array.from(new Set(range.products.map((p) => p.brand))).join(" · ")}</p>
                <p>
                  <Link href={range.path} className="link-arrow">
                    Voir les modèles et comment choisir <ArrowIcon className="h-4 w-4" />
                  </Link>
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="wrap mt-24" aria-labelledby="debut">
        <h2 id="debut">Par quelle gamme commencer ?</h2>
        <ul className="ruled mt-6">
          {start.map((s) => (
            <li key={s.to} className="grid gap-1 py-4 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] sm:gap-8">
              <p className="font-display text-[1.15rem] font-semibold text-ink-2">{s.when}</p>
              <p>
                <Link href={s.to} className="link-arrow">
                  {s.label} <ArrowIcon className="h-4 w-4" />
                </Link>
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-[62ch] text-ink-soft">
          Le bon choix dépend de votre logement : seul un diagnostic permet de trancher entre ces familles. Gaz Flash le réalise avant de vous conseiller, puis chiffre l'installation dans un devis.
        </p>
      </section>

      <Faq keyName="installs" />
      <SeeAlso
        links={[
          { path: PATHS.install, text: "Le service d'installation", why: "Les étapes, du diagnostic à la mise en route, et la garantie." },
          { path: PATHS.brands, text: "Marques et modèles", why: "Quelle marque pour quel modèle, avec les liens vers chaque gamme." },
          { path: PATHS.prices, text: "Nos tarifs d'entretien", why: "Après la pose, l'entretien annuel : les prix affichés." },
        ]}
      />
      <CallStrip title="Quelle installation pour votre logement ?" text="Gaz Flash réalise un diagnostic et vous conseille la solution la plus adaptée." />
      <JsonLd nodes={pageNodes(path, { faq: "installs" })} />
    </>
  );
}
