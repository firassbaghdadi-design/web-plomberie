import { business } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink pb-28 pt-14 text-paper/85 lg:pb-14">
      <div className="container-x grid gap-10 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-semibold text-paper">{business.name}</p>
          <p className="mt-2 text-sm">{business.tagline}</p>
        </div>
        <address className="text-sm not-italic leading-7">
          {business.address.street}
          <br />
          {business.address.postalCode} {business.address.city}
          <br />
          <a href={`tel:${business.phoneTel}`} className="font-semibold text-paper underline underline-offset-4">
            {business.phoneDisplay}
          </a>
          {business.email ? (
            <>
              <br />
              <a href={`mailto:${business.email}`} className="underline underline-offset-4">
                {business.email}
              </a>
            </>
          ) : null}
        </address>
        <p className="text-sm leading-7">
          {business.legalName}
          <br />
          SIREN {business.siren}
          <br />
          Entreprise familiale depuis {business.foundingYear}
        </p>
      </div>
    </footer>
  );
}
