import { services } from "@/lib/site";

export function Services() {
  return (
    <section id="services" aria-labelledby="titre-services" className="py-16 sm:py-24">
      <div className="container-x">
        <p className="eyebrow">Nos services</p>
        <h2 id="titre-services" className="mt-3 max-w-3xl text-3xl font-semibold sm:text-4xl">
          Quels services propose un plombier chauffagiste à Paris 14e ?
        </h2>
        <p className="mt-5 max-w-2xl text-lg text-ink-soft">
          Un plombier chauffagiste répare et installe les réseaux d'eau, les appareils sanitaires et le chauffage. Entreprise Rousseau couvre trois métiers : la plomberie et le dépannage, le chauffage, et l'aménagement de salles de bains.
        </p>
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <li key={service.id} id={service.id} className="flex flex-col rounded-2xl border border-line bg-white p-7">
              <span className="font-display text-sm font-semibold text-copper-dark">0{index + 1}</span>
              <h3 className="mt-3 text-2xl font-semibold leading-snug">{service.title}</h3>
              <p className="mt-3 text-ink-soft">{service.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
