import Link from "next/link";
import * as A from "@/app/actions";
import { Icone } from "@/components/Icone";
import { Bientot, EnTete, Titre } from "@/components/ui";
import { GROUPES, MODULES } from "@/lib/modules";
import { contexteInterface } from "@/lib/serveur";

export const metadata = { title: "Plus" };

export default async function Plus() {
  const ctx = await contexteInterface();
  const dirigeant = ctx.role === "dirigeant" || ctx.adminPlateforme;
  const groupes = (["bientot", "organisation"] as const).map((g) => ({ g, liste: MODULES.filter((m) => m.groupe === g && (!m.dirigeant || dirigeant)) }));
  return (
    <div className="fondu mx-auto max-w-2xl">
      <EnTete titre="Plus" />
      {groupes.map(({ g, liste }) => (
        <section key={g}>
          <Titre>{GROUPES[g]}</Titre>
          <div className="carte divide-y divide-trait/70 overflow-hidden">
            {liste.map((m) => (
              <Link key={m.id} href={m.href} className="flex items-center gap-3.5 px-5 py-3.5 transition-colors hover:bg-creux/60">
                <Icone nom={m.icone} className={`h-[21px] w-[21px] ${m.bientot ? "text-pale" : "text-doux"}`} />
                <span className={`flex-1 ${m.bientot ? "text-doux" : ""}`}>{m.label}</span>
                {m.bientot ? <Bientot /> : <Icone nom="retour" className="h-4 w-4 rotate-180 text-pale" />}
              </Link>
            ))}
            {g === "organisation" && ctx.adminPlateforme && (
              <Link href="/organisations" className="flex items-center gap-3.5 px-5 py-3.5 transition-colors hover:bg-creux/60">
                <Icone nom="etincelle" className="h-[21px] w-[21px] text-doux" />
                <span className="flex-1">Organisations</span>
                <Icone nom="retour" className="h-4 w-4 rotate-180 text-pale" />
              </Link>
            )}
          </div>
        </section>
      ))}
      <form action={A.seDeconnecter} className="mt-8">
        <button className="btn w-full">Se déconnecter</button>
      </form>
    </div>
  );
}
