import * as A from "@/app/actions";
import { BasculerActif, FormulaireInvitationEquipe, SelectRole } from "@/components/Equipe";
import { Avatar, EnTete, Titre, Vide } from "@/components/ui";
import { ROLE_LABEL, depuis } from "@/lib/format";
import { contexteInterface, peutEcrire } from "@/lib/serveur";
import { listerInvitations, listerMembres } from "@/lib/services/comptes";

export const metadata = { title: "Équipe" };

const DESCRIPTION_ROLES = [
  { role: "Dirigeant", texte: "Voit et décide de tout : équipe, réglages, jetons API." },
  { role: "Chargé d'affaires", texte: "Gère ses clients et ses chantiers, consulte le reste." },
  { role: "ADV", texte: "Gère clients, devis, factures et relances. Consulte les chantiers." },
];

export default async function Equipe() {
  const ctx = await contexteInterface();
  const gerer = peutEcrire(ctx, "membres", "modifier");
  const [membres, invitations] = await Promise.all([listerMembres(ctx), gerer ? listerInvitations(ctx) : Promise.resolve([])]);

  return (
    <div className="fondu mx-auto max-w-3xl">
      <EnTete titre="Équipe" />
      <div className="carte overflow-hidden">
        <ul className="divide-y divide-trait/70">
          {membres.map((m) => (
            <li key={m.id} className={`flex flex-wrap items-center gap-3 px-5 py-3.5 ${m.actif ? "" : "opacity-55"}`}>
              <Avatar nom={m.utilisateur.nom} />
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium">
                  {m.utilisateur.nom}
                  {m.utilisateurId === ctx.utilisateurId && <span className="ml-1.5 text-doux">(vous)</span>}
                </p>
                <p className="truncate text-[13px] text-doux">
                  {m.utilisateur.email}
                  {m.derniereConnexionLe ? ` · vu ${depuis(m.derniereConnexionLe)}` : " · jamais connecté"}
                </p>
              </div>
              {gerer && m.utilisateurId !== ctx.utilisateurId ? (
                <div className="flex items-center gap-3">
                  <SelectRole id={m.id} role={m.role} />
                  <BasculerActif id={m.id} actif={m.actif} />
                </div>
              ) : (
                <span className="pastille">{m.actif ? ROLE_LABEL[m.role] : "Désactivé"}</span>
              )}
            </li>
          ))}
        </ul>
      </div>

      {gerer && (
        <>
          <Titre>Inviter quelqu&apos;un</Titre>
          <div className="carte overflow-hidden">
            <FormulaireInvitationEquipe />
          </div>
          <Titre>Invitations en attente</Titre>
          <div className="carte overflow-hidden">
            {invitations.length === 0 ? (
              <Vide>Aucune invitation en attente.</Vide>
            ) : (
              <ul className="divide-y divide-trait/70">
                {invitations.map((i) => (
                  <li key={i.id} className="flex items-center gap-3 px-5 py-3.5">
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-medium">{i.email}</p>
                      <p className="text-[13px] text-doux">
                        {ROLE_LABEL[i.role]} · {i.expireLe < new Date() ? "expirée" : `envoyée ${depuis(i.creeLe)}`}
                      </p>
                    </div>
                    <form action={A.annulerInvitationAction}>
                      <input type="hidden" name="id" value={i.id} />
                      <button className="btn-texte !text-[13px]">Annuler</button>
                    </form>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
      )}

      <Titre>Les rôles</Titre>
      <div className="carte divide-y divide-trait/70 overflow-hidden">
        {DESCRIPTION_ROLES.map((r) => (
          <div key={r.role} className="px-5 py-3.5">
            <p className="font-medium">{r.role}</p>
            <p className="text-[14px] text-doux">{r.texte}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
