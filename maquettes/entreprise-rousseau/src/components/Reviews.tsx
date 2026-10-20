import { business, googleReviews } from "@/lib/site";
import { Stars } from "./Icons";

export function Reviews() {
  const rating = googleReviews.rating.toString().replace(".", ",");
  return (
    <section id="avis" aria-labelledby="titre-avis" className="border-y border-line bg-paper-deep py-16 sm:py-24">
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div>
            <p className="eyebrow">Avis clients</p>
            <h2 id="titre-avis" className="mt-3 text-3xl sm:text-4xl">
              Que disent les clients d'Entreprise Rousseau ?
            </h2>
            <p className="mt-5 flex items-center gap-3">
              <span className="font-display text-5xl text-ink">{rating}</span>
              <span>
                <Stars className="h-5 w-5" />
                <span className="mt-1 block text-sm">sur 5 · {googleReviews.count} avis Google</span>
              </span>
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                Lire les avis sur Google<span className="sr-only"> (s'ouvre dans un nouvel onglet)</span>
              </a>
              <a href={business.reviewUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                Donner votre avis<span className="sr-only"> (s'ouvre dans un nouvel onglet)</span>
              </a>
            </div>
          </div>
          <ul className="grid gap-4 md:grid-cols-1">
            {googleReviews.quotes.map((quote) => (
              <li key={quote.author} className="border border-line bg-paper p-6">
                <Stars />
                <blockquote className="mt-3 text-ink">« {quote.text} »</blockquote>
                <p className="mt-3 text-sm">
                  {quote.author} · avis Google, {quote.date}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-8 text-xs">Note et nombre d'avis relevés sur la fiche Google de l'entreprise le {googleReviews.observed}.</p>
      </div>
    </section>
  );
}
