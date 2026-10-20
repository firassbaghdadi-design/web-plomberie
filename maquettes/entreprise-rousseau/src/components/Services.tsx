import { images, services } from "@/lib/site";

export function Services() {
  return (
    <section id="services" aria-labelledby="titre-services" className="py-16 sm:py-24">
      <div className="container-x">
        <p className="eyebrow">Nos services</p>
        <h2 id="titre-services" className="mt-3 max-w-3xl text-3xl sm:text-4xl">
          Quels services propose un plombier chauffagiste à Paris 14e ?
        </h2>
        <p className="mt-5 max-w-2xl text-lg">
          Un plombier chauffagiste répare et installe les réseaux d'eau, les appareils sanitaires et le chauffage. Entreprise Rousseau couvre trois métiers : la plomberie et le dépannage, le chauffage et les chaudières, et l'installation ou la rénovation de salles de bains et de douches.
        </p>

        <div className="mt-14 space-y-16">
          {services.map((service, index) => (
            <article key={service.id} id={service.id} className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
              <div>
                <span className="font-display text-sm text-brand-dark">0{index + 1}</span>
                <h3 className="mt-2 text-3xl">{service.title}</h3>
                <p className="mt-3">{service.intro}</p>
                {service.id === "salles-de-bains" ? (
                  <div className="mt-6 grid grid-cols-3 gap-2">
                    {images.bathrooms.map((image) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        key={image.src}
                        src={image.src}
                        alt={image.alt}
                        width={800}
                        height={600}
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        className="aspect-[4/3] w-full bg-paper-deep object-cover"
                      />
                    ))}
                  </div>
                ) : null}
              </div>
              <ul className="divide-y divide-line border-y border-line">
                {service.items.map((item) => (
                  <li key={item.name} className="grid gap-1 py-5 sm:grid-cols-[14rem_1fr] sm:gap-6">
                    <h4 className="font-display text-xl text-ink">{item.name}</h4>
                    <p>{item.text}</p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
