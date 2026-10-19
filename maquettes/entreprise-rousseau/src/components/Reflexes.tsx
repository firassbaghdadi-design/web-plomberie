import { business, reflexes } from "@/lib/site";
import { PhoneIcon } from "./Icons";

export function Reflexes() {
  return (
    <section id="fuite" aria-labelledby="titre-fuite" className="bg-ink py-16 text-paper sm:py-24">
      <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-copper-light">Urgence</p>
          <h2 id="titre-fuite" className="mt-3 text-3xl font-semibold !text-paper sm:text-4xl">
            Que faire en cas de fuite d'eau avant l'arrivée du plombier ?
          </h2>
          <p className="mt-5 text-lg text-paper/80">
            Coupez l'arrivée d'eau au robinet d'arrêt général, mettez hors tension les appareils proches de l'eau, puis limitez les dégâts et appelez un plombier. Ces gestes réduisent les dégâts en quelques minutes.
          </p>
          <a href={`tel:${business.phoneTel}`} data-track="phone_call_click" className="btn mt-8 bg-paper text-ink hover:bg-copper-light">
            <PhoneIcon />
            Appeler le {business.phoneDisplay}
          </a>
        </div>
        <ol className="space-y-4">
          {reflexes.map((step, index) => (
            <li key={step} className="flex gap-4 rounded-xl border border-paper/15 bg-paper/5 p-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-copper-light font-display text-lg font-semibold text-ink">
                {index + 1}
              </span>
              <span className="pt-0.5">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
