import { PageHeader } from "@/components/Sections";
import { legal, TODO } from "@/lib/legal";
import { agency, PATHS } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

const title = "Politique de confidentialité | Atelier Truelle";
const description = "Données collectées par le formulaire de contact d'Atelier Truelle, durée de conservation, destinataires et droits.";

export const metadata = pageMeta({ title, description, path: PATHS.privacy });

const rows = [
  ["Responsable du traitement", `${legal.name || agency.name}${legal.form ? `, ${legal.form}` : ""}${legal.siren ? `, SIREN ${legal.siren}` : ""}`],
  ["Contact pour vos données", agency.email],
] as const;

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Vos données" title="Politique de confidentialité." lead="Ce que nous faisons des informations que vous nous envoyez, en quelques lignes." crumbs={[{ name: "Accueil", href: "/" }, { name: "Confidentialité" }]} />
      <section className="section">
        <div className="container-x max-w-3xl space-y-12">
          <div>
            <h2 className="text-2xl sm:text-3xl">Qui est responsable ?</h2>
            <dl className="mt-5 grid grid-cols-[12rem_1fr] gap-x-4 gap-y-3">
              {rows.map(([k, val]) => (
                <div key={k} className="contents">
                  <dt className="font-bold text-ardoise">{k}</dt>
                  <dd>{val}</dd>
                </div>
              ))}
            </dl>
            {!legal.name ? <p className="mt-4 text-sm"><span className="rounded bg-terre-tint px-1.5 text-terre-dark">{TODO}</span> : dénomination, forme juridique et SIREN du responsable.</p> : null}
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl">Quelles données, pour quoi ?</h2>
            <p className="mt-5">Le formulaire de contact collecte votre nom, votre adresse e-mail et votre message. Vous pouvez aussi indiquer votre entreprise, votre téléphone et l'adresse de votre site. Ces informations servent uniquement à répondre à votre demande et, si vous y donnez suite, à préparer une maquette et un devis. Base légale : votre consentement, que vous donnez en cochant la case du formulaire, puis l'exécution de mesures précontractuelles.</p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl">Combien de temps ?</h2>
            <p className="mt-5">Trois ans à compter de notre dernier échange, puis suppression. Si vous ne donnez pas suite, vos informations ne sont pas utilisées à d'autres fins.</p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl">Qui reçoit ces données ?</h2>
            <p className="mt-5">Uniquement l'éditeur du site. Deux prestataires techniques interviennent : Vercel, qui héberge le site, et Resend, qui transmet les messages du formulaire par e-mail. Ces prestataires peuvent traiter des données hors de l'Union européenne ; ils fournissent des garanties contractuelles à ce titre. Vos données ne sont ni vendues ni louées.</p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl">Cookies</h2>
            <p className="mt-5">Ce site n'utilise ni cookie de mesure d'audience, ni cookie publicitaire.</p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl">Vos droits</h2>
            <p className="mt-5">
              Vous pouvez demander l'accès à vos données, leur rectification, leur effacement, la limitation ou l'opposition à leur traitement, et retirer votre consentement à tout moment, en écrivant à{" "}
              <a href={`mailto:${agency.email}`} className="underline">
                {agency.email}
              </a>
              . Vous pouvez aussi saisir la CNIL (cnil.fr).
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
