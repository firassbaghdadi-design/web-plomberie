import Image from "next/image";
import { siteSrc } from "@/lib/photos";
import { BeforeAfter } from "./BeforeAfter";
import { Mark } from "./Mosaic";
import { depannageList, historique, metiersIntro, metiersLead, metiersList, organigramme, pgText, qualibatText, qualifIntro, rgeText } from "@/lib/original";

/** Mention discrète : ce bloc reprend mot pour mot le site actuel de l'entreprise. */
function Source() {
  return <p className="caption mt-8 !text-[0.66rem]">Texte repris du site actuel somsoupons.fr</p>;
}

export function Historique() {
  return (
    <section aria-labelledby="titre-historique" className="section pt-0">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div data-reveal className="lg:col-span-5">
          <p className="eyebrow">Historique</p>
          <h2 id="titre-historique" className="h-sec mt-6">
            L'histoire racontée <em>par la maison</em>
          </h2>
        </div>
        <div data-reveal className="lg:col-span-7">
          {historique.map((p, i) => (
            <p key={p} className={i === 0 ? "text-[1.5rem] font-light leading-snug text-ink sm:text-[1.75rem]" : "mt-5 text-[1.06rem]"}>
              {p}
            </p>
          ))}
          <Source />
        </div>
      </div>
    </section>
  );
}

export function Organigramme() {
  return (
    <section aria-labelledby="titre-equipe" className="section">
      <div className="container-x">
        <p className="eyebrow" data-reveal>
          Organigramme
        </p>
        <h2 id="titre-equipe" data-reveal className="h-sec mt-6 max-w-3xl">
          Une maison, une famille, des visages
        </h2>
        <ul className="mt-14 grid gap-x-10 border-b border-line sm:grid-cols-2 lg:grid-cols-3">
          {organigramme.map((m, i) => (
            <li key={`${m.name}-${m.role}`} data-reveal style={{ ["--d" as string]: `${(i % 3) * 70}ms` }} className="flex items-baseline gap-4 border-t border-line py-6">
              <span aria-hidden="true" className="inline-block h-[7px] w-[7px] shrink-0 -translate-y-[3px]" style={{ background: i === 0 ? "var(--orange)" : "var(--green)" }} />
              <span>
                <span className="block text-[1.35rem] font-light text-ink">{m.name}</span>
                <span className="block text-[0.95rem]">{m.role}</span>
              </span>
            </li>
          ))}
        </ul>
        <Source />
      </div>
    </section>
  );
}

export function MetiersOriginal() {
  return (
    <section aria-labelledby="titre-liste" className="section pt-0">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div data-reveal className="lg:col-span-5">
          <p className="eyebrow">Nos métiers</p>
          <h2 id="titre-liste" className="h-sub mt-6">{metiersIntro}</h2>
          <p className="mt-6 text-[1.06rem]">{metiersLead}</p>
          <div className="mt-10 border-t border-amber pt-6">
            <p className="text-[1.45rem] font-light text-ink">Un service de dépannage rapide</p>
            <ul className="mt-3 space-y-1.5">
              {depannageList.map((d) => (
                <li key={d} className="flex items-baseline gap-3">
                  <span aria-hidden="true" className="inline-block h-[5px] w-[5px] shrink-0 -translate-y-[3px] bg-amber" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <Source />
        </div>
        <ol data-reveal className="border-b border-line lg:col-span-7">
          {metiersList.map((m, i) => (
            <li key={m.name} className="grid grid-cols-[2.6rem_1fr] gap-3 border-t border-line py-4">
              <span className="pt-1.5 text-xs font-medium tracking-[0.16em] text-ink-soft">{String(i + 1).padStart(2, "0")}</span>
              <span>
                <span className="block text-[1.35rem] font-light text-ink sm:text-[1.5rem]">{m.name}</span>
                {m.detail ? <span className="block text-[0.98rem]">{m.detail}</span> : null}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// Montages 922 × 303 px : avant de 0 à 456 px, filet blanc, après de 466 à 922 px.
const realisations = [1, 2, 3, 4].map((n) => ({ key: `realisation-${n}`, w: 922, split: 456, gap: 10 }));

/** « Nos réalisations en images » : les photos avant / après publiées par l'entreprise. */
export function Realisations({ limit, n, total }: { limit?: number; n?: number; total?: number }) {
  const items = realisations.filter((r) => siteSrc(r.key)).slice(0, limit ?? 5);
  if (!items.length) return null;
  return (
    <section aria-labelledby="titre-realisations" className="section">
      <div className="container-x">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div data-reveal className="lg:col-span-7">
            {n && total ? <Mark n={n} total={total} label="Avant / après" /> : <p className="eyebrow">Avant / après</p>}
            <h2 id="titre-realisations" className="h-sec mt-6">
              Nos réalisations en images
            </h2>
          </div>
          <p data-reveal className="text-[1.08rem] lg:col-span-5">Faites glisser le curseur pour passer de l'avant à l'après.</p>
        </div>
        <ul className="mt-14 grid gap-x-8 gap-y-12 lg:grid-cols-2">
          {items.map((r, i) => (
            <li key={r.key} data-reveal style={{ ["--d" as string]: `${i * 90}ms` }}>
              <BeforeAfter src={siteSrc(r.key)!} width={r.w} split={r.split} gap={r.gap} alt={`Chantier Somsou-Pons (photo ${i + 1})`} />
              <p className="caption mt-4">Chantier {String(i + 1).padStart(2, "0")}</p>
            </li>
          ))}
        </ul>
        <p className="caption mt-8 !text-[0.66rem]">Photos publiées par l'entreprise sur son site actuel</p>
      </div>
    </section>
  );
}

export function QualifOriginal() {
  const blocks = [
    { title: "Certification Qualibat", text: qualibatText, logo: "logo-qualibat", w: 113, h: 113 },
    { title: "Certification Professionnel du Gaz", text: pgText, logo: "logo-pg", w: 113, h: 96 },
    { title: "Mention RGE, Reconnu Garant de l'Environnement", text: rgeText, logo: "logo-rge", w: 113, h: 68 },
  ];
  return (
    <section aria-labelledby="titre-qualif-site" className="section pt-0">
      <div className="container-x">
        <h2 id="titre-qualif-site" data-reveal className="h-sub max-w-3xl">{qualifIntro}</h2>
        <div className="mt-12 grid gap-x-10 gap-y-4 lg:grid-cols-3">
          {blocks.map((b, i) => (
            <article key={b.title} data-reveal style={{ ["--d" as string]: `${i * 90}ms` }} className="flex flex-col gap-5 border-t border-line pt-7">
              {siteSrc(b.logo) ? <Image src={siteSrc(b.logo)!} alt={`Logo ${b.title}`} width={b.w} height={b.h} className="h-14 w-auto self-start" /> : null}
              <h3 className="text-[1.5rem]">{b.title}</h3>
              <p>{b.text}</p>
            </article>
          ))}
        </div>
        <p className="caption mt-8 !text-[0.66rem]">Textes repris du site actuel somsoupons.fr</p>
      </div>
    </section>
  );
}
