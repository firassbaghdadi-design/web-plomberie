import { steps } from "@/lib/site";

export function Process() {
  return (
    <section id="methode" aria-labelledby="titre-methode" className="py-16 sm:py-24">
      <div className="container-x">
        <p className="eyebrow">Notre méthode</p>
        <h2 id="titre-methode" className="mt-3 max-w-3xl text-3xl font-semibold sm:text-4xl">
          Comment se déroule une intervention de plomberie ?
        </h2>
        <p className="mt-5 max-w-2xl text-lg text-ink-soft">
          Une intervention se déroule en quatre temps : un appel, une évaluation sur place, un devis accepté avant les travaux, puis l'intervention et sa facture détaillée.
        </p>
        <ol className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="border-t-2 border-ink pt-5">
              <span className="font-display text-4xl font-semibold text-copper-dark">{index + 1}</span>
              <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-ink-soft">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
