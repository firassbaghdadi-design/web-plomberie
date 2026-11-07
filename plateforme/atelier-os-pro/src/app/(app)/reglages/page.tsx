import Link from "next/link";
import { Icone } from "@/components/Icone";
import { FormulaireMotDePasse, FormulaireOrganisation } from "@/components/Reglages";
import { EnTete, Titre } from "@/components/ui";
import { contexteInterface, peutEcrire } from "@/lib/serveur";
import { obtenirOrganisation } from "@/lib/services/comptes";
import { ROLE_LABEL } from "@/lib/format";
import * as A from "@/app/actions";

export const metadata = { title: "Réglages" };

export default async function Reglages() {
  const ctx = await contexteInterface();
  const o = await obtenirOrganisation(ctx);
  const dirigeant = peutEcrire(ctx, "organisation", "modifier");
  return (
    <div className="fondu mx-auto max-w-2xl">
      <EnTete titre="Réglages" />
      <Titre>Entreprise</Titre>
      <div className="carte p-5 sm:p-7">
        {!dirigeant && <p className="mb-4 text-[14px] text-doux">Seul le dirigeant peut modifier ces informations.</p>}
        <FormulaireOrganisation o={o} lectureSeule={!dirigeant} />
      </div>

      <Titre>Intégrations</Titre>
      <div className="carte divide-y divide-trait/70 overflow-hidden">
        {dirigeant && (
          <Link href="/reglages/jetons" className="flex items-center gap-3 px-5 py-4 transition-colors hover:bg-creux/60">
            <Icone nom="cle" className="h-5 w-5 text-doux" />
            <span className="flex-1">Jetons API</span>
            <Icone nom="retour" className="h-4 w-4 rotate-180 text-pale" />
          </Link>
        )}
        <Link href="/docs" className="flex items-center gap-3 px-5 py-4 transition-colors hover:bg-creux/60">
          <Icone nom="docs" className="h-5 w-5 text-doux" />
          <span className="flex-1">Documentation de l&apos;API</span>
          <Icone nom="retour" className="h-4 w-4 rotate-180 text-pale" />
        </Link>
      </div>

      <Titre>Mon compte</Titre>
      <div className="carte p-5 sm:p-7">
        <p className="mb-4 text-[14.5px]">
          <span className="font-medium">{ctx.utilisateur.nom}</span>
          <span className="text-doux">
            {" "}
            · {ctx.utilisateur.email} · {ctx.adminPlateforme ? "Admin plateforme" : ROLE_LABEL[ctx.role]}
          </span>
        </p>
        <FormulaireMotDePasse />
      </div>
      <form action={A.seDeconnecter} className="mt-6 text-center lg:hidden">
        <button className="btn w-full">Se déconnecter</button>
      </form>
    </div>
  );
}
