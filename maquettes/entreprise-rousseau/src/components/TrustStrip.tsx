import { business } from "@/lib/site";

const items = [
  { big: business.foundingYear, label: "Entreprise familiale installée à Paris" },
  { big: "3 métiers", label: "Plomberie, chauffage, salles de bains" },
  { big: "Paris 14e", label: business.address.street },
  { big: business.siren, label: "Numéro SIREN" },
];

export function TrustStrip() {
  return (
    <section aria-label="Repères de confiance" className="border-b border-line bg-paper-deep">
      <ul className="container-x grid grid-cols-2 gap-x-6 gap-y-8 py-10 lg:grid-cols-4">
        {items.map((item) => (
          <li key={item.label} className="border-l-2 border-copper pl-4">
            <p className="font-display text-2xl font-semibold leading-tight sm:text-3xl">{item.big}</p>
            <p className="mt-1 text-sm text-ink-soft">{item.label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
