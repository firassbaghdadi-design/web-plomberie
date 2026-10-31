import Link from "next/link";
import { Brief, CtaBand, FaqList, LocalBlock, PageHero, fr } from "@/components/Sections";
import { Raccord } from "@/components/Raccord";
import { ArrowIcon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { home, trades } from "@/lib/content";
import { allPages } from "@/lib/pages";
import { pageMeta, webPageNode } from "@/lib/seo";
import { PATHS, business } from "@/lib/site";
import type { Page } from "@/lib/types";

export const metadata = pageMeta({ title: home.title, description: home.description, path: "/" });

const hero: Page = {
  path: "/",
  title: home.title,
  description: home.description,
  h1: "Plombier à Paris 15e",
  kicker: "Entreprise Charles Pereira · depuis 2008",
  lead: "Plomberie, recherche de fuite, débouchage, chauffe-eau et chauffage. Une entreprise du boulevard Garibaldi, pour les appartements, les commerces et les copropriétés.",
  brief: home.brief,
  contactType: "plomberie",
  crumb: "Accueil",
  approach: "",
  sections: [],
  faq: [],
  ctaTitle: "",
  ctaText: "",
  facts: [
    { label: "Fondée en", value: "2008" },
    { label: "Siège", value: "Bd Garibaldi" },
    { label: "Google", value: "4,3/5" },
  ],
};

const zones = ["/plombier-paris-7", "/plombier-paris-14", "/plombier-paris-16", "/plombier-issy-les-moulineaux", "/plombier-boulogne-billancourt"];

export default function HomePage() {
  const zonePages = zones.map((p) => allPages.find((x) => x.path === p)!);
  return (
    <>
      <PageHero page={hero} crumbs={[]} home />
      <Brief text={home.brief} photo="immeuble" caption="Paris 15e : derrière chaque façade, un réseau à entretenir" />

      <Raccord n="02" index={1} labelledBy="titre-metiers">
        <h2 id="titre-metiers" className="h2 max-w-3xl" data-reveal>{fr("Quatre départs, un seul réseau")}</h2>
        <p className="mt-6 max-w-2xl">Du robinet qui goutte à la colonne d&apos;un immeuble, tout part du même savoir-faire : lire une installation, comprendre où va l&apos;eau, et intervenir proprement.</p>
        <ul className="mt-12 border-t border-line">
          {trades.map((t) => (
            <li key={t.href} className="border-b border-line">
              <Link href={t.href} className="row-link grid items-baseline gap-x-8 gap-y-2 py-8 sm:grid-cols-[3rem_minmax(0,1fr)_minmax(0,1fr)_auto]">
                <span className="num text-[0.85rem] text-accent">{t.n}</span>
                <span className="row-title text-[1.6rem] font-light leading-tight text-ink sm:text-[2.1rem]">{t.title}</span>
                <span className="max-w-md text-[0.98rem]">{t.text}</span>
                <ArrowIcon className="row-arrow hidden h-5 w-5 text-ink-faint sm:block" />
              </Link>
            </li>
          ))}
        </ul>
      </Raccord>

      <Raccord n="03" index={2} labelledBy="titre-entreprise">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 id="titre-entreprise" className="h2" data-reveal>{fr("Une entreprise du 15e depuis 2008")}</h2>
            <div className="prose-mt mt-8 max-w-2xl">
              <p>L&apos;Entreprise Charles Pereira est une société à responsabilité limitée immatriculée à Paris en 2008. Son siège est au 26, boulevard Garibaldi, dans le 15e arrondissement, à proximité de Cambronne. Une agence est également référencée à Sartrouville, dans les Yvelines.</p>
              <p>Son activité enregistrée est celle des travaux d&apos;installation d&apos;eau et de gaz en tous locaux. Les annuaires publics la présentent comme plombier et chauffagiste, pour le dépannage comme pour l&apos;installation.</p>
              <p>Sur Google, la fiche de l&apos;entreprise affiche une note de {business.googleRating} ({business.googleCount}, relevé d&apos;{business.googleDate}).</p>
            </div>
          </div>
          <dl className="grid content-start gap-8 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            <div className="border-t border-line pt-5"><dt className="label">Forme</dt><dd className="mt-2 text-ink">SARL au capital de 10 000 €<br />{business.rcs}</dd></div>
            <div className="border-t border-line pt-5"><dt className="label">Siège</dt><dd className="mt-2 text-ink">{business.address.street}<br />{business.address.postalCode} Paris</dd></div>
            <div className="border-t border-line pt-5"><dt className="label">Agence</dt><dd className="mt-2 text-ink">{business.agency}</dd></div>
          </dl>
        </div>
      </Raccord>

      <Raccord n="04" index={3} labelledBy="titre-zones">
        <h2 id="titre-zones" className="h2 max-w-3xl" data-reveal>{fr("Dans le 15e et les quartiers voisins")}</h2>
        <p className="mt-6 max-w-2xl">Le 15e est le premier terrain de l&apos;entreprise. Les arrondissements et les communes qui l&apos;entourent sont à portée : chacun a ses immeubles, ses contraintes et sa page.</p>
        <ul className="mt-12 border-t border-line">
          {zonePages.map((p) => (
            <li key={p.path} className="border-b border-line">
              <Link href={p.path} className="row-link flex items-center justify-between gap-6 py-6">
                <span className="row-title block">
                  <span className="label block">{p.kicker}</span>
                  <span className="mt-2 block text-[1.25rem] font-light leading-snug text-ink sm:text-[1.6rem]">{fr(p.h1)}</span>
                </span>
                <ArrowIcon className="row-arrow h-5 w-5 shrink-0 text-ink-faint" />
              </Link>
            </li>
          ))}
        </ul>
      </Raccord>

      <FaqList items={home.faq} title="Questions fréquentes sur l'entreprise" n="05" index={4} />
      <LocalBlock contactType="plomberie" approach="Le siège est sur le boulevard Garibaldi, près de Cambronne et de Sèvres-Lecourbe : le plombier du quartier, avec une adresse connue." n="06" index={5} />
      <CtaBand title="Un plombier à Paris 15e, à votre service." text="Décrivez votre demande, joignez des photos : l'Entreprise Charles Pereira vous répond." contactType="plomberie" n="07" index={6} />
      <JsonLd nodes={[webPageNode({ title: home.title, description: home.description, path: "/" }), { "@type": "FAQPage", mainEntity: home.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }]} />
    </>
  );
}
