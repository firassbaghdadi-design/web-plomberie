import { business, googleReviews } from "@/lib/site";

const items = [
  { big: "+ de 80 ans", label: "d'expérience à Paris et en région parisienne" },
  { big: `${googleReviews.rating.toString().replace(".", ",")}/5`, label: `sur Google, ${googleReviews.count} avis` },
  { big: "Pros et syndics", label: "particuliers, professionnels, copropriétés" },
  { big: business.siren, label: `SIREN · ${business.address.street}` },
];

export function TrustStrip() {
  return (
    <section aria-label="Repères de confiance" className="border-b border-line bg-paper-deep">
      <ul className="container-x grid grid-cols-2 gap-x-6 gap-y-8 py-10 lg:grid-cols-4">
        {items.map((item) => (
          <li key={item.label} className="border-l-2 border-brand pl-4">
            <p className="font-display text-2xl leading-tight text-ink sm:text-[1.7rem]">{item.big}</p>
            <p className="mt-1 text-sm">{item.label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
