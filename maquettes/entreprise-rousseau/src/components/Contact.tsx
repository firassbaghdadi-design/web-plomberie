import { business, images, sister } from "@/lib/site";
import { PhoneIcon, PinIcon } from "./Icons";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="titre-contact" className="border-y border-line bg-paper-deep py-16 sm:py-24">
      <div className="container-x">
        <p className="eyebrow">Secteur et contact</p>
        <h2 id="titre-contact" className="mt-3 max-w-3xl text-3xl sm:text-4xl">
          Où trouver Entreprise Rousseau à Paris 14e ?
        </h2>
        <p className="mt-5 max-w-2xl text-lg">
          Entreprise Rousseau vous accueille au {business.address.street}, à Paris 14e, et intervient à Paris et en région parisienne. Son entreprise sœur {sister.name} est installée à {sister.city}.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <address className="grid gap-0 border border-line bg-paper not-italic sm:grid-cols-[0.9fr_1.1fr]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images.storefront}
              alt={`Devanture d'${business.name}, ${business.address.street}, Paris 14e`}
              width={900}
              height={675}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="aspect-[4/3] h-full w-full bg-paper-deep object-cover sm:aspect-auto"
            />
            <div className="p-6 sm:p-8">
              <p className="font-display text-2xl text-ink">{business.name}</p>
              <a
                href={`tel:${business.phoneTel}`}
                data-track="phone_call_click"
                className="mt-4 flex items-center gap-3 font-display text-3xl text-brand-dark hover:underline"
              >
                <PhoneIcon className="h-6 w-6 shrink-0" />
                {business.phoneDisplay}
              </a>
              <a href={`mailto:${business.email}`} data-track="generate_lead" className="mt-3 block underline underline-offset-4 hover:text-brand-dark">
                {business.email}
              </a>
              <p className="mt-4 flex gap-3">
                <PinIcon className="mt-1 h-5 w-5 shrink-0 text-brand-dark" />
                <span>
                  {business.address.street}
                  <br />
                  {business.address.postalCode} {business.address.city}
                </span>
              </p>
              <p className="mt-4 text-sm">
                <strong className="font-medium text-ink">Bureau ouvert au public :</strong>
                <br />
                {business.hoursText}.
                <br />
                Permanence téléphonique en cas d'absence : laissez votre message.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`tel:${business.phoneTel}`} data-track="phone_call_click" className="btn-primary">
                  Appeler maintenant
                </a>
                <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  Itinéraire<span className="sr-only"> (s'ouvre dans un nouvel onglet)</span>
                </a>
              </div>
            </div>
          </address>

          <address className="border border-line bg-paper p-6 not-italic sm:p-8">
            <p className="eyebrow">Entreprise sœur</p>
            <p className="mt-2 font-display text-2xl text-ink">{sister.name}</p>
            <p className="mt-4 flex gap-3">
              <PinIcon className="mt-1 h-5 w-5 shrink-0 text-brand-dark" />
              <span>
                {sister.street}
                <br />
                {sister.postalCode} {sister.city}
              </span>
            </p>
            <a href={`tel:${sister.phoneTel}`} className="mt-4 block font-display text-2xl text-brand-dark hover:underline">
              {sister.phoneDisplay}
            </a>
            <a href={`mailto:${sister.email}`} className="mt-2 block underline underline-offset-4 hover:text-brand-dark">
              {sister.email}
            </a>
            <p className="mt-4 text-sm">{sister.hoursText}.</p>
          </address>
        </div>
      </div>
    </section>
  );
}
