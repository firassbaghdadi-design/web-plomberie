import { estModeDemo } from "@/db";
import { EMAILS } from "@/db/seed";
import { Marque } from "@/components/Marque";
import { FormulaireConnexion } from "@/components/FormulairesSession";

export const metadata = { title: "Connexion" };
export const dynamic = "force-dynamic";

export default function Connexion({ searchParams }: { searchParams: { suite?: string } }) {
  return (
    <main className="flex min-h-[100dvh] items-center justify-center px-5 py-10">
      <div className="fondu w-full max-w-[360px]">
        <Marque />
        <h1 className="mb-1 text-center text-[26px] font-semibold tracking-tight">Atelier OS</h1>
        <p className="mb-8 text-center text-doux">Connectez-vous à votre espace.</p>
        <FormulaireConnexion suite={searchParams.suite ?? "/"} />
        {estModeDemo() && (
          <div className="mt-8 rounded-2xl bg-creux/70 p-4 text-[13px] leading-relaxed text-doux">
            <p className="font-medium text-encre">Mode démo</p>
            <p className="mt-1">
              Dirigeant : <span className="font-mono text-[12.5px]">{EMAILS.dirigeant}</span>
              <br />
              Chargée d&apos;affaires : <span className="font-mono text-[12.5px]">{EMAILS.julie}</span>
              <br />
              ADV : <span className="font-mono text-[12.5px]">{EMAILS.adv}</span>
            </p>
            <p className="mt-1">Mot de passe de démonstration communiqué par Atelier Truelle.</p>
          </div>
        )}
      </div>
    </main>
  );
}
