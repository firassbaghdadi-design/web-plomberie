import Link from "next/link";
import { CtaBand, PageHero } from "@/components/Sections";
import { JsonLd } from "@/components/JsonLd";
import { Logo, Photo } from "@/components/Photo";
import { ArrowIcon } from "@/components/Icons";
import { PATHS, YEARS, brandLogos, business, reasons } from "@/lib/site";
import { breadcrumbNode, pageMeta, rootCrumb, webPageNode } from "@/lib/seo";

const title = "L'entreprise Gaz Flash : valeurs, engagements, RGE";
const description =
  "Chauffagiste à Paris 18e depuis 1965, Gaz Flash est Professionnel du Gaz et Qualibat RGE, reconnu par les grandes marques. Découvrez ses valeurs et engagements.";
const crumbs = [rootCrumb, { name: "L'entreprise", path: PATHS.company }];

export const metadata = pageMeta({ title, description, path: PATHS.company });

export default function CompanyPage() {
  return (
    <>
      <PageHero
        crumbs={crumbs}
        eyebrow="L'entreprise"
        title="Nos valeurs et nos engagements"
        lead={`Gaz Flash entretient et dépanne les appareils de chauffage au gaz depuis 1965, soit ${YEARS} ans d'activité à Paris et en petite couronne. L'entreprise est certifiée Professionnel du Gaz et Qualibat RGE.`}
        image="heroTeam"
      />

      <section className="container-x pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="h-section" data-reveal="">Six engagements</h2>
            <ol className="mt-10 space-y-8">
              {reasons.map((reason, index) => (
                <li key={reason.title} className="grid grid-cols-[auto_1fr] gap-5" data-reveal="">
                  <span className="font-display text-6xl font-extrabold leading-none text-flame">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-3xl uppercase">{reason.title}</h3>
                    <p className="mt-1 text-coal-soft">{reason.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <aside className="space-y-6" data-reveal="">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[4px]">
              <Photo id="heroTrust" alt="" sizes="(min-width:1024px) 420px, 100vw" />
            </div>
            <div className="card p-6">
              <h2 className="text-3xl">Certifications</h2>
              <p className="mt-2 text-sm text-coal-soft">Gaz Flash est certifiée :</p>
              <ul className="mt-4 space-y-4">
                <li className="flex items-center gap-4">
                  <Logo id="certQualibat" alt="Qualibat RGE" className="h-14 w-auto" width={120} height={56} />
                  <span className="font-semibold">Qualibat RGE</span>
                </li>
                <li className="flex items-center gap-4">
                  <Logo id="certPdg" alt="Professionnel du Gaz" className="h-14 w-auto" width={120} height={56} />
                  <span className="font-semibold">Professionnel du Gaz</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="mt-28 bg-cream-deep py-20" aria-labelledby="station-title">
        <div className="container-x">
          <p className="eyebrow" data-reveal="">Constructeurs</p>
          <h2 id="station-title" className="h-section mt-3 max-w-3xl" data-reveal="">Station technique agréée</h2>
          <p className="mt-5 max-w-2xl text-coal-soft" data-reveal="">Reconnue par les plus grandes marques, l'entreprise intervient sur les gammes de plusieurs constructeurs.</p>
          <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {brandLogos.map((brand) => (
              <li key={brand.id} className="flex h-28 items-center justify-center rounded-[4px] border border-line bg-white p-6" data-reveal="">
                <Logo id={brand.id} alt={brand.name} className="max-h-16 w-auto max-w-full object-contain" width={160} height={64} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-x pt-24">
        <div className="card flex flex-wrap items-center justify-between gap-6 p-8" data-reveal="">
          <div>
            <h2 className="text-4xl">{business.legalName}</h2>
            <p className="mt-2 text-coal-soft">{business.legal.form} · {business.address.street}, {business.address.postalCode} {business.address.city}</p>
          </div>
          <Link href={PATHS.legal} className="inline-flex items-center gap-2 font-semibold text-flame-dark underline underline-offset-4">
            Mentions légales <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <div className="pt-28"><CtaBand /></div>
      <JsonLd nodes={[webPageNode({ title, description, path: PATHS.company }), breadcrumbNode(crumbs)]} />
    </>
  );
}
