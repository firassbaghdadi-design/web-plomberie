import { business, sister } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink pb-28 pt-14 text-paper/85 lg:pb-14">
      <div className="container-x grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl text-paper">{business.name}</p>
          <p className="mt-2 text-sm">{business.tagline}</p>
        </div>
        <address className="text-sm not-italic leading-7">
          {business.address.street}
          <br />
          {business.address.postalCode} {business.address.city}
          <br />
          <a href={`tel:${business.phoneTel}`} className="font-medium text-paper underline underline-offset-4">
            {business.phoneDisplay}
          </a>
          <br />
          <a href={`mailto:${business.email}`} className="underline underline-offset-4">
            {business.email}
          </a>
        </address>
        <p className="text-sm leading-7">
          {business.legalName} · SIREN {business.siren}
          <br />
          Entreprise sœur : {sister.name}, {sister.city}
        </p>
      </div>
    </footer>
  );
}
