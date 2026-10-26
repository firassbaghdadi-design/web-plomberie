import Link from "next/link";
import { CallStrip, Faq, Page, PageHead, PhoneNote, SeeAlso } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { Logo } from "@/components/Photo";
import { ArrowIcon } from "@/components/Icons";
import { PATHS, brands } from "@/lib/site";
import { pageMeta, pageNodes } from "@/lib/seo";

const path = PATHS.brands;
export const metadata = pageMeta(path);

export default function BrandsPage() {
  return (
    <>
      <PageHead path={path} />
      <Page aside={<PhoneNote rotate={1} />}>
        <h2 className="!mt-0">Pourquoi la marque compte</h2>
        <p>
          Sur une chaudière, la marque décide des pièces, des régulations compatibles et de la documentation de l'installateur. Gaz Flash se présente comme reconnue par les plus grandes marques et intervenant sur les gammes de plusieurs constructeurs. Voici, marque par marque, ce que l'entreprise cite sur son site.
        </p>

        <h2>Les marques citées par Gaz Flash</h2>
        {brands.map((brand) => (
          <section key={brand.name} aria-labelledby={`marque-${brand.name.replace(/\s/g, "-")}`} className="border-t-[1.5px] border-line pt-6">
            <div className="flex flex-wrap items-center gap-5">
              {brand.id ? (
                <span className="flex h-16 w-36 items-center justify-center px-3 opacity-80 grayscale">
                  <Logo id={brand.id} alt={`Logo ${brand.name}`} className="max-h-11 w-auto max-w-full object-contain" width={130} height={44} />
                </span>
              ) : null}
              <h3 id={`marque-${brand.name.replace(/\s/g, "-")}`} className="!mt-0 text-[1.7rem]">{brand.name}</h3>
            </div>
            {brand.items.length > 0 ? (
              <ul>
                {brand.items.map((item) => (
                  <li key={item.label}>
                    {item.label}, voir <Link href={item.path}>{item.path === PATHS.prices ? "Nos tarifs" : item.path === PATHS.regulation ? "Régulation et thermostat" : item.path === PATHS.waterHeater ? "Chauffe-eau gaz" : item.path === PATHS.condensing ? "Chaudière à condensation" : "Chaudière basse température"}</Link>
                  </li>
                ))}
              </ul>
            ) : null}
            {brand.note ? <p>{brand.note}</p> : null}
            {brand.href ? (
              <p>
                <a href={brand.href} target="_blank" rel="noopener noreferrer" className="link-arrow">
                  Site du constructeur <ArrowIcon className="h-4 w-4" />
                </a>
              </p>
            ) : null}
          </section>
        ))}

        <h2>Votre marque n'est pas dans la liste ?</h2>
        <p>
          Cette liste reprend ce que Gaz Flash cite sur son site, elle n'est pas exhaustive. Pour un autre constructeur ou un modèle ancien, donnez la marque et le modèle de votre appareil au standard, ou écrivez via la page <Link href={PATHS.contact}>Contact</Link> : on vous dira si l'entretien, le dépannage ou le remplacement sont possibles.
        </p>
      </Page>

      <Faq keyName="brands" />
      <SeeAlso
        links={[
          { path: PATHS.installs, text: "Les gammes d'installation", why: "Régulation, chauffe-eau, condensation, basse température." },
          { path: PATHS.company, text: "L'entreprise", why: "La station technique, les certifications annoncées, les informations légales." },
          { path: PATHS.prices, text: "Nos tarifs d'entretien", why: "Un prix affiché pour les chaudières, la condensation et les chauffe-bains." },
        ]}
      />
      <CallStrip type="installation" title="Quelle marque pour votre logement ?" text="Gaz Flash réalise un diagnostic et vous conseille dans sa gamme." />
      <JsonLd nodes={pageNodes(path, { faq: "brands" })} />
    </>
  );
}
