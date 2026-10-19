import { faq } from "@/lib/site";

export function Faq() {
  return (
    <section id="questions" aria-labelledby="titre-faq" className="py-16 sm:py-24">
      <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="eyebrow">Questions fréquentes</p>
          <h2 id="titre-faq" className="mt-3 text-3xl font-semibold sm:text-4xl">
            Vos questions sur la plomberie à Paris
          </h2>
        </div>
        <div className="divide-y divide-line border-y border-line">
          {faq.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 font-display text-xl font-semibold [&::-webkit-details-marker]:hidden">
                {item.q}
                <span aria-hidden="true" className="text-2xl text-copper-dark transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-ink-soft">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
