import { business, mapsUrl } from "@/lib/site";
import { PhoneIcon, PinIcon } from "./Icons";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="titre-contact" className="border-y border-line bg-paper-deep py-16 sm:py-24">
      <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow">Secteur et contact</p>
          <h2 id="titre-contact" className="mt-3 text-3xl font-semibold sm:text-4xl">
            Dans quels secteurs intervenons-nous ?
          </h2>
          <p className="mt-5 text-lg text-ink-soft">
            Nous intervenons à Paris, avec le 14e arrondissement comme point d'attache, et en proche banlieue sud : l'entreprise compte des établissements à {business.establishments.join(" et ")}.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Zones d'intervention">
            {["Paris 14e", "Paris", ...business.establishments].map((zone) => (
              <li key={zone} className="rounded-full border border-ink/20 bg-paper px-4 py-1.5 text-sm font-medium">
                {zone}
              </li>
            ))}
          </ul>
        </div>

        <address className="rounded-2xl border border-line bg-white p-7 not-italic sm:p-9">
          <p className="font-display text-2xl font-semibold">{business.name}</p>
          <a
            href={`tel:${business.phoneTel}`}
            data-track="phone_call_click"
            className="mt-5 flex items-center gap-3 font-display text-3xl font-semibold text-copper-dark hover:underline sm:text-4xl"
          >
            <PhoneIcon className="h-7 w-7 shrink-0" />
            {business.phoneDisplay}
          </a>
          <p className="mt-5 flex gap-3 text-ink-soft">
            <PinIcon className="mt-1 h-5 w-5 shrink-0 text-copper-dark" />
            <span>
              {business.address.street}
              <br />
              {business.address.postalCode} {business.address.city}
            </span>
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={`tel:${business.phoneTel}`} data-track="phone_call_click" className="btn-primary">
              Appeler maintenant
            </a>
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              Voir l'itinéraire<span className="sr-only"> (s'ouvre dans un nouvel onglet)</span>
            </a>
          </div>
        </address>
      </div>
    </section>
  );
}
