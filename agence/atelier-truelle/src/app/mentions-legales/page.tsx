import { PageHeader } from "@/components/Sections";
import { legal, TODO } from "@/lib/legal";
import { agency, PATHS } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

const title = "Mentions légales | Atelier Truelle";
const description = "Éditeur, directeur de la publication, hébergeur et conditions d'utilisation du site Atelier Truelle.";

export const metadata = pageMeta({ title, description, path: PATHS.legal });

const v = (value: string) => value || <span className="rounded bg-terre-tint px-1.5 text-terre-dark">{TODO}</span>;

export default function Page() {
  return (
    <>
      <PageHeader eyebrow="Informations légales" title="Mentions légales." lead="Informations sur l'éditeur et l'hébergeur de ce site, conformément à la loi pour la confiance dans l'économie numérique." crumbs={[{ name: "Accueil", href: "/" }, { name: "Mentions légales" }]} />
      <section className="section">
        <div className="container-x max-w-3xl space-y-12">
          <div>
            <h2 className="text-2xl sm:text-3xl">Éditeur du site</h2>
            <dl className="mt-5 grid grid-cols-[10rem_1fr] gap-x-4 gap-y-3">
              <dt className="font-bold text-ardoise">Nom commercial</dt>
              <dd>{agency.name}</dd>
              <dt className="font-bold text-ardoise">Dénomination</dt>
              <dd>{v(legal.name)}</dd>
              <dt className="font-bold text-ardoise">Forme juridique</dt>
              <dd>{v(legal.form)}</dd>
              <dt className="font-bold text-ardoise">SIREN</dt>
              <dd>{v(legal.siren)}</dd>
              {legal.vat ? (
                <>
                  <dt className="font-bold text-ardoise">TVA intracommunautaire</dt>
                  <dd>{legal.vat}</dd>
                </>
              ) : null}
              <dt className="font-bold text-ardoise">Adresse</dt>
              <dd>{v(legal.address)}</dd>
              <dt className="font-bold text-ardoise">E-mail</dt>
              <dd>
                <a href={`mailto:${agency.email}`} className="underline">
                  {agency.email}
                </a>
              </dd>
              {agency.phoneTel ? (
                <>
                  <dt className="font-bold text-ardoise">Téléphone</dt>
                  <dd>{agency.phoneDisplay}</dd>
                </>
              ) : null}
            </dl>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl">Directeur de la publication</h2>
            <p className="mt-5">{v(legal.director)}</p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl">Hébergeur</h2>
            <p className="mt-5">
              Vercel Inc., États-Unis, <a href="https://vercel.com" className="underline">vercel.com</a>. L'adresse postale et les coordonnées de l'hébergeur sont à reporter ici avant la mise en ligne, d'après les informations légales publiées par Vercel.
            </p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl">Propriété intellectuelle</h2>
            <p className="mt-5">Les textes, le logo et les éléments graphiques de ce site sont la propriété de leur éditeur. Toute reproduction sans autorisation est interdite. Les logos et photos des entreprises citées restent la propriété de leurs titulaires.</p>
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl">Données personnelles</h2>
            <p className="mt-5">
              Le traitement des données saisies dans le formulaire de contact est décrit dans la <a href={PATHS.privacy} className="underline">politique de confidentialité</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
