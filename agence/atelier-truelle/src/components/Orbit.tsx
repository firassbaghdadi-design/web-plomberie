import { serviceIcons } from "./Icons";
import { TrowelMark } from "./Logo";
import { services } from "@/lib/site";

/** Anneau « 360° » : les six leviers autour du pictogramme de la marque. Purement décoratif. */
export function Orbit() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]" aria-hidden="true">
      <div className="absolute inset-[8%] rounded-full border-2 border-dashed border-ardoise/20" />
      <div className="absolute inset-[24%] rounded-full border border-line" />
      <div className="absolute inset-[34%] flex items-center justify-center rounded-full bg-ardoise shadow-lift">
        <div className="text-center">
          <TrowelMark className="mx-auto h-14 w-14 sm:h-16 sm:w-16" />
          <p className="mt-2 font-display text-3xl font-extrabold leading-none text-platre sm:text-4xl">360°</p>
        </div>
      </div>
      <div className="orbit-ring absolute inset-0">
        {services.map((s, i) => {
          const Icon = serviceIcons[s.icon];
          const angle = ((360 / services.length) * i - 90) * (Math.PI / 180);
          const left = 50 + 42 * Math.cos(angle);
          const top = 50 + 42 * Math.sin(angle);
          return (
            <div key={s.slug} className="orbit-item absolute flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-line bg-platre-light text-terre-action shadow-card sm:h-16 sm:w-16" style={{ left: `${left.toFixed(2)}%`, top: `${top.toFixed(2)}%` }}>
              <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
