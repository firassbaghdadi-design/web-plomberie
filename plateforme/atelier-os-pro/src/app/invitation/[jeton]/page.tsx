import Link from "next/link";
import { base } from "@/db";
import { Marque } from "@/components/Marque";
import { FormulaireInvitation } from "@/components/FormulairesSession";
import { ROLE_LABEL } from "@/lib/format";
import { consulterInvitation } from "@/lib/services/comptes";

export const metadata = { title: "Invitation" };
export const dynamic = "force-dynamic";

export default async function Invitation({ params }: { params: { jeton: string } }) {
  const inv = await consulterInvitation(await base(), params.jeton);
  return (
    <main className="flex min-h-[100dvh] items-center justify-center px-5 py-10">
      <div className="fondu w-full max-w-[380px]">
        <Marque />
        {inv ? (
          <>
            <h1 className="mb-1 text-center text-[24px] font-semibold tracking-tight">Rejoindre {inv.organisation}</h1>
            <p className="mb-8 text-center text-doux">Vous êtes invité·e comme {ROLE_LABEL[inv.role].toLowerCase()}.</p>
            <FormulaireInvitation jeton={params.jeton} email={inv.email} compteExistant={inv.compteExistant} />
          </>
        ) : (
          <>
            <h1 className="mb-2 text-center text-[24px] font-semibold tracking-tight">Lien expiré</h1>
            <p className="mb-8 text-center text-doux">Cette invitation n&apos;est plus valable. Demandez un nouveau lien à votre dirigeant.</p>
            <Link href="/connexion" className="btn w-full">
              Aller à la connexion
            </Link>
          </>
        )}
      </div>
    </main>
  );
}
