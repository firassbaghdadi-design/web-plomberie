import Link from "next/link";
import * as A from "@/app/actions";
import { FormulaireJeton } from "@/components/Reglages";
import { EnTete, Titre, Vide } from "@/components/ui";
import { depuis } from "@/lib/format";
import { contexteInterface, optionsMembres, peutEcrire } from "@/lib/serveur";
import { listerJetons } from "@/lib/services/comptes";
import { redirect } from "next/navigation";

export const metadata = { title: "Jetons API" };

export default async function Jetons() {
  const ctx = await contexteInterface();
  if (!peutEcrire(ctx, "jetons", "lire")) redirect("/reglages");
  const [jetons, { noms }] = await Promise.all([listerJetons(ctx), optionsMembres(ctx)]);
  const actifs = jetons.filter((j) => !j.revoqueLe);
  const revoques = jetons.filter((j) => j.revoqueLe);
  return (
    <div className="fondu mx-auto max-w-2xl">
      <EnTete titre="Jetons API" retour={{ href: "/reglages", label: "Réglages" }} />
      <p className="-mt-4 mb-6 px-1 text-[14.5px] text-doux">
        Un jeton permet à un outil externe (ou à l&apos;IA) de piloter Atelier OS par l&apos;API, avec les droits de la personne qui l&apos;a créé, limités à sa portée.{" "}
        <Link href="/docs" className="text-terre">
          Documentation
        </Link>
      </p>
      <div className="carte overflow-hidden">
        <FormulaireJeton />
      </div>
      <Titre>Jetons actifs</Titre>
      <div className="carte overflow-hidden">
        {actifs.length === 0 ? (
          <Vide>Aucun jeton actif.</Vide>
        ) : (
          <ul className="divide-y divide-trait/70">
            {actifs.map((j) => (
              <li key={j.id} className="flex items-center gap-3 px-5 py-3.5">
                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium">{j.nom}</p>
                  <p className="truncate text-[13px] text-doux">
                    <code className="font-mono">{j.prefixe}_••••</code> · {j.portees.join(", ")} · {noms[j.utilisateurId] ?? "—"} · {j.dernierUsageLe ? `utilisé ${depuis(j.dernierUsageLe)}` : "jamais utilisé"}
                  </p>
                </div>
                <form action={A.revoquerJetonAction}>
                  <input type="hidden" name="id" value={j.id} />
                  <button className="btn-texte !text-[13px]">Révoquer</button>
                </form>
              </li>
            ))}
          </ul>
        )}
      </div>
      {revoques.length > 0 && (
        <>
          <Titre>Révoqués</Titre>
          <div className="carte divide-y divide-trait/70 overflow-hidden opacity-60">
            {revoques.map((j) => (
              <p key={j.id} className="px-5 py-3 text-[14px]">
                {j.nom} <span className="text-doux">· {j.prefixe} · révoqué {depuis(j.revoqueLe!)}</span>
              </p>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
