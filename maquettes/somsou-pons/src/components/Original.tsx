import Image from "next/image";
import { siteSrc } from "@/lib/photos";
import { BeforeAfter } from "./BeforeAfter";
import { depannageList, historique, metiersIntro, metiersLead, metiersList, organigramme, pgText, qualibatText, qualifIntro, rgeText } from "@/lib/original";

/** Mention discrète : ce bloc reprend mot pour mot le site actuel de l'entreprise. */
function Source() {
  return <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft/70">Texte repris du site actuel somsoupons.fr</p>;
}

export function Historique() {
  return (
    <section aria-labelledby="titre-historique" className="section pt-0">
      <div className="container-x grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <div data-reveal>
          <p className="eyebrow">Historique</p>
          <h2 id="titre-historique" className="mt-4 text-4xl sm:text-5xl">
            L'histoire racontée <em>par la maison</em>
          </h2>
        </div>
        <div data-reveal className="border-l-2 border-amber pl-8">
          {historique.map((p, i) => (
            <p key={p} className={i === 0 ? "font-display text-2xl leading-snug text-ink" : "mt-5 text-lg"}>
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
    <section aria-labelledby="titre-equipe" className="section" style={{ background: "var(--paper-2)" }}>
      <div className="container-x">
        <p className="eyebrow" data-reveal>
          Organigramme
        </p>
        <h2 id="titre-equipe" data-reveal className="mt-4 text-4xl sm:text-5xl">
          Une maison, une famille, des visages
        </h2>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {organigramme.map((m, i) => (
            <li key={`${m.name}-${m.role}`} data-reveal style={{ ["--d" as string]: `${i * 70}ms` }} className="flex items-center gap-5 rounded-[1.4rem] border border-line bg-paper p-6">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand font-display text-xl font-bold text-white">
                {m.name.split(" ").map((w) => w[0]).join("")}
              </span>
              <span>
                <span className="block font-display text-xl font-semibold text-ink">{m.name}</span>
                <span className="block text-sm">{m.role}</span>
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
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div data-reveal>
          <p className="eyebrow">Nos métiers</p>
          <h2 id="titre-liste" className="mt-4 text-4xl sm:text-5xl">{metiersIntro}</h2>
          <p className="mt-6 text-lg">{metiersLead}</p>
          <div className="mt-8 rounded-[1.4rem] p-6 text-white" style={{ background: "var(--green)" }}>
            <p className="font-display text-2xl font-semibold">Un service de dépannage rapide</p>
            <ul className="mt-3 space-y-1">
              {depannageList.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
          <Source />
        </div>
        <ol data-reveal className="divide-y divide-line border-y border-line">
          {metiersList.map((m, i) => (
            <li key={m.name} className="grid grid-cols-[2.6rem_1fr] gap-3 py-4">
              <span className="pt-1 text-xs font-bold tracking-[0.18em] text-amber-action">{String(i + 1).padStart(2, "0")}</span>
              <span>
                <span className="block font-display text-xl font-semibold text-ink sm:text-2xl">{m.name}</span>
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
export function Realisations({ limit }: { limit?: number }) {
  const items = realisations.filter((r) => siteSrc(r.key)).slice(0, limit ?? 5);
  if (!items.length) return null;
  return (
    <section aria-labelledby="titre-realisations" className="section">
      <div className="container-x">
        <p className="eyebrow" data-reveal>
          Avant / après
        </p>
        <h2 id="titre-realisations" data-reveal className="mt-4 text-4xl sm:text-5xl">
          Nos réalisations en images
        </h2>
        <p data-reveal className="mt-5 max-w-xl text-lg">Faites glisser le curseur pour passer de l'avant à l'après.</p>
        <ul className="mt-12 grid gap-6 lg:grid-cols-2">
          {items.map((r, i) => (
            <li key={r.key} data-reveal style={{ ["--d" as string]: `${i * 80}ms` }} className="rounded-[1.4rem] border border-line bg-white p-2">
              <BeforeAfter src={siteSrc(r.key)!} width={r.w} split={r.split} gap={r.gap} alt={`Chantier Somsou-Pons (photo ${i + 1})`} />
            </li>
          ))}
        </ul>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft/70">Photos publiées par l'entreprise sur son site actuel</p>
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
        <h2 id="titre-qualif-site" data-reveal className="text-4xl sm:text-5xl">{qualifIntro}</h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {blocks.map((b, i) => (
            <article key={b.title} data-reveal style={{ ["--d" as string]: `${i * 90}ms` }} className="flex flex-col gap-5 rounded-[1.4rem] border border-line bg-white p-7">
              {siteSrc(b.logo) ? <Image src={siteSrc(b.logo)!} alt={`Logo ${b.title}`} width={b.w} height={b.h} className="h-16 w-auto self-start" /> : null}
              <h3 className="text-2xl">{b.title}</h3>
              <p>{b.text}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft/70">Textes repris du site actuel somsoupons.fr</p>
      </div>
    </section>
  );
}
