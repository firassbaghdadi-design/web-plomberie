import { notFound } from "next/navigation";
import { Icone } from "@/components/Icone";
import { Bientot, EnTete } from "@/components/ui";
import { MODULES } from "@/lib/modules";

export function generateMetadata({ params }: { params: { module: string } }) {
  return { title: MODULES.find((m) => m.href === `/bientot/${params.module}`)?.label ?? "Bientôt" };
}

export default function ModuleAVenir({ params }: { params: { module: string } }) {
  const m = MODULES.find((x) => x.bientot && x.href === `/bientot/${params.module}`);
  if (!m) notFound();
  return (
    <div className="fondu mx-auto max-w-2xl">
      <EnTete surTitre={<Bientot />} titre={m.label} />
      <div className="carte p-6 sm:p-8">
        <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-[18px] bg-creux text-terre">
          <Icone nom={m.icone} className="h-7 w-7" />
        </span>
        <p className="text-[18px] leading-snug tracking-tight">{m.resume}</p>
        <ul className="mt-6 space-y-3">
          {m.points?.map((p) => (
            <li key={p} className="flex gap-3 text-[15px] text-doux">
              <Icone nom="coche" className="mt-0.5 h-5 w-5 shrink-0 text-terre" />
              {p}
            </li>
          ))}
        </ul>
        <p className="mt-7 border-t border-trait/70 pt-5 text-[13.5px] text-pale">
          Phase {m.phase} de la feuille de route. Principe : l&apos;IA propose, vous validez — rien ne part sans votre clic.
        </p>
      </div>
    </div>
  );
}
