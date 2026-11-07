import { estModeDemo } from "@/db";
import { Navigation } from "@/components/Navigation";
import { eclaircir, hexEnRgb } from "@/lib/couleurs";
import { ROLE_LABEL } from "@/lib/format";
import { enteteInterface } from "@/lib/serveur";

export const dynamic = "force-dynamic";

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const { ctx, organisation, organisations } = await enteteInterface();
  const style = {
    "--marque": hexEnRgb(organisation.couleurPrincipale) ?? undefined,
    "--marque-sombre": eclaircir(organisation.couleurPrincipale) ?? undefined,
  } as React.CSSProperties;
  return (
    <div className="theme-org min-h-[100dvh]" style={style}>
      <Navigation
        infos={{
          organisation: { id: organisation.id, nom: organisation.nom, logoUrl: organisation.logoUrl },
          organisations: organisations.map((o) => ({ id: o.id, nom: o.nom })),
          utilisateur: { nom: ctx.utilisateur.nom, email: ctx.utilisateur.email },
          roleLabel: ctx.adminPlateforme ? "Admin plateforme" : ROLE_LABEL[ctx.role],
          dirigeant: ctx.role === "dirigeant" || ctx.adminPlateforme,
          admin: ctx.adminPlateforme,
        }}
      />
      <div className="lg:pl-[256px]">
        {estModeDemo() && (
          <div role="note" className="border-b border-trait/60 bg-creux/70 px-4 py-2 text-center text-[12.5px] text-doux">
            <span className="font-semibold text-encre">Mode démo</span> — base embarquée : les modifications peuvent être réinitialisées à tout moment.
          </div>
        )}
        <main className="mx-auto max-w-[1040px] px-4 pb-32 pt-6 sm:px-6 lg:px-10 lg:pb-16 lg:pt-10">{children}</main>
      </div>
    </div>
  );
}
