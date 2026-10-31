import Link from "next/link";
import { photoFor, workPhotos } from "@/lib/photos";
import { PATHS, business } from "@/lib/site";
import { works } from "@/lib/works";
import { Drums } from "./Drums";
import { Folio } from "./Sections";
import { Img } from "./Img";

const year = new Date().getFullYear();

/** Frise de l'histoire : chaque date est un relevé du compteur. */
export function Timeline() {
  const rows = [
    { v: "1880", t: "Fondation de Bastien", d: "Née sous le nom de Le Bey, la maison se développe autour de la couverture et de la plomberie." },
    { v: "1886", t: "Fondation de Trebulle", d: "Entreprise de couverture-plomberie installée au 88, boulevard de Picpus, à Paris." },
    { v: "1960", t: "Robert Bastien reprend la maison", d: "André Bastien l'avait reprise dans les années 1930 ; Édouard Bastien la dirige depuis 1997." },
    { v: "2010", t: "Bastien rachète Trebulle", d: "Les deux maisons se rapprochent et deviennent Bastien & Trebulle." },
  ];
  return (
    <ol className="border-t border-line">
      {rows.map((r, i) => (
        <li key={r.v} className="grid items-center gap-x-10 gap-y-3 border-b border-line py-8 sm:grid-cols-[minmax(0,20rem)_1fr]" data-reveal style={{ ["--d" as string]: `${i * 70}ms` }}>
          <Drums value={r.v} size="clamp(2.4rem, 7vw, 3.4rem)" />
          <div><p className="text-[1.25rem] text-fg">{r.t}</p><p className="mt-1 max-w-xl">{r.d}</p></div>
        </li>
      ))}
    </ol>
  );
}

function History({ n }: { n: string }) {
  const photo = photoFor({ theme: "histoire" });
  return (
    <Folio n={n} rubrique="Les dates" labelledBy="titre-dates">
      <h2 id="titre-dates" className="h2 max-w-3xl" data-reveal>Quatre dates, lues comme un compteur.</h2>
      <div className="mt-12 grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7"><Timeline /></div>
        <div className="lg:col-span-5" data-reveal>
          <div className="grid grid-cols-2 gap-8 border-t border-line pt-8">
            <div><p className="label mb-3">Générations</p><Drums value="5" size="3rem" /></div>
            <div><p className="label mb-3">Depuis</p><Drums value={String(year - 1880)} size="3rem" unit="ans" /></div>
          </div>
          <Img photo={photo} className="mt-10 aspect-[4/3]" />
        </div>
      </div>
    </Folio>
  );
}

function Works({ n }: { n: string }) {
  return (
    <Folio n={n} rubrique="Les chantiers" labelledBy="titre-chantiers">
      <h2 id="titre-chantiers" className="h2 max-w-3xl" data-reveal>Vingt chantiers, de la rue Gros à la rive gauche.</h2>
      <p className="mt-6 max-w-2xl" data-reveal>Filtrés comme sur le site actuel : plomberie et salles de bains d&apos;un côté, couverture et zinguerie de l&apos;autre. Les huit premières fiches sont détaillées.</p>
      <ol className="mt-14 space-y-16">
        {works.filter((w) => w.context).map((w, i) => {
          const ph = workPhotos(w.slug, 3);
          return (
            <li key={w.slug} className="grid gap-8 border-t border-line pt-10 lg:grid-cols-12 lg:gap-14" data-reveal>
              <div className="lg:col-span-5">
                <p className="label !text-accent">{w.trade}</p>
                <h3 className="mt-4 text-[1.8rem] sm:text-[2.2rem]">{w.title}</h3>
                <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
                  <div><dt className="label">Lieu</dt><dd className="mt-1 text-fg">{w.place}</dd></div>
                  <div><dt className="label">Type</dt><dd className="mt-1 text-fg">{w.type}</dd></div>
                </dl>
                <p className="mt-6 text-sm text-fg-faint">{w.client}</p>
                <p className="num mt-6 text-sm text-fg-faint">Réalisation {String(i + 1).padStart(2, "0")} / 20</p>
              </div>
              <div className="space-y-5 lg:col-span-7">
                <div className="grid grid-cols-3 gap-3">
                  {(ph.length ? ph : [{ src: null, alt: "", credit: "none" as const }]).map((p, j) => (
                    <Img key={j} photo={p} alt={`${w.title}, ${w.trade.toLowerCase()}, ${w.place}`} className={j === 0 && ph.length > 1 ? "col-span-3 aspect-[16/9]" : "aspect-[4/3] " + (ph.length <= 1 ? "col-span-3" : "")} />
                  ))}
                </div>
                <p>{w.context}</p>
                <p>{w.work}</p>
              </div>
            </li>
          );
        })}
      </ol>
      <div className="mt-20">
        <p className="label">Autres chantiers de la galerie</p>
        <ul className="mt-6 grid border-t border-line sm:grid-cols-2">
          {works.filter((w) => !w.context).map((w) => (
            <li key={w.slug} className="flex items-baseline justify-between gap-4 border-b border-line py-4 sm:odd:pr-8 sm:even:pl-8">
              <span className="text-fg">{w.title}</span>
              <span className="shrink-0 text-sm text-fg-faint">{w.place} · {w.trade.split(" et ")[0]}</span>
            </li>
          ))}
        </ul>
      </div>
    </Folio>
  );
}

const partners = [
  { name: "Verzotti", site: "www.verzotti.fr", text: "Créée en 1921, l'entreprise Verzotti complète l'offre de Bastien & Trebulle en matière de ravalement, peinture et maçonnerie, forte d'une vingtaine de salariés tous spécialisés dans leurs domaines historiques." },
  { name: "Virtuose", site: "www.virtuose-groupe.com", text: "Fidèle à l'exigence des anciens, Virtuose est un groupement d'entreprises indépendantes résolument contemporain et tourné vers l'avenir. Intervenant en France comme à l'étranger, ces sociétés, spécialisées dans l'artisanat d'excellence, s'illustrent dans les métiers du bâtiment, de l'habitat et de la décoration." },
  { name: "Bath Shop", site: "www.bathshop.fr", text: "Plus qu'une boutique, Bath Shop décline la salle de bains de A à Z depuis 40 ans et propose le meilleur choix de produits. Son bureau d'étude conçoit et personnalise votre projet salle de bains sur-mesure en toute sérénité." },
];

function Partners({ n }: { n: string }) {
  return (
    <Folio n={n} rubrique="Les partenaires" labelledBy="titre-partenaires">
      <h2 id="titre-partenaires" className="h2 max-w-3xl" data-reveal>Trois maisons qui prolongent le chantier.</h2>
      <ul className="mt-12 border-t border-line">
        {partners.map((p) => (
          <li key={p.name} className="grid gap-4 border-b border-line py-9 lg:grid-cols-12" data-reveal>
            <h3 className="text-[1.7rem] lg:col-span-4">{p.name}</h3>
            <div className="lg:col-span-8">
              <p className="max-w-2xl">{p.text}</p>
              <a href={`https://${p.site}/`} target="_blank" rel="noopener" className="link-line mt-4 inline-block text-sm">{p.site}</a>
            </div>
          </li>
        ))}
      </ul>
    </Folio>
  );
}

function Emergency({ n }: { n: string }) {
  return (
    <Folio n={n} rubrique="Les relevés" labelledBy="titre-releves" tone="paper">
      <h2 id="titre-releves" className="h2 max-w-3xl" data-reveal>Deux heures, vingt-quatre heures, sept jours.</h2>
      <div className="mt-12 grid gap-12 sm:grid-cols-3">
        <div data-reveal><p className="label mb-4">Intervention en région parisienne</p><Drums value="2" size="3.6rem" unit="h" /><p className="mt-5 text-sm">Pour les urgences plomberie, selon le site actuel.</p></div>
        <div data-reveal><p className="label mb-4">Astreinte</p><Drums value="24" size="3.6rem" unit="h" /><p className="mt-5 text-sm">Tous les jours, dimanches et jours fériés compris.</p></div>
        <div data-reveal><p className="label mb-4">Jours par semaine</p><Drums value="7" size="3.6rem" unit="j" /><p className="mt-5 text-sm">Avec un tarif forfaitaire annoncé à l&apos;avance.</p></div>
      </div>
      <p className="mt-14">
        <a href={`tel:${business.phoneTel}`} className="num text-[2rem] tracking-tight text-fg transition hover:text-accent sm:text-[3rem]" data-track="cta_tel">{business.phoneDisplay}</a>
        <Link href={PATHS.contact} className="link-line ml-6 hidden text-sm sm:inline">ou un devis par écrit</Link>
      </p>
    </Folio>
  );
}

export function Extra({ kind, n }: { kind: "histoire" | "realisations" | "partenaires" | "depannage"; n: string }) {
  if (kind === "histoire") return <History n={n} />;
  if (kind === "realisations") return <Works n={n} />;
  if (kind === "partenaires") return <Partners n={n} />;
  return <Emergency n={n} />;
}
