import Link from "next/link";
import { tableauDeBord } from "@/lib/service";
import { STATUT_LABEL } from "@/lib/types";
import { Chiffre, Titre, Vide } from "@/components/ui";
import { formatJour } from "@/lib/dates";

export const dynamic = "force-dynamic";
export const metadata = { title: "Tableau de bord" };

const ETIQUETTE_ACTION = { appel: "Appel", relance: "Relance", envoi: "Envoi" } as const;

export default async function Accueil() {
  const t = await tableauDeBord();
  const max = Math.max(1, ...t.entonnoir.map((e) => e.nombre));

  return (
    <div className="fondu">
      <p className="sur-titre mb-1.5">{formatJour(t.date)}</p>
      <h1 className="titre-page mb-8">Tableau de bord</h1>

      <div className="grid grid-cols-[minmax(0,1fr)] gap-4 md:grid-cols-2">
        <section className="carte p-6">
          <h2 className="sur-titre mb-5">Aujourd&apos;hui</h2>
          <div className="grid grid-cols-3 gap-y-6">
            <Chiffre valeur={t.jour.emailsEnvoyes} label="E-mails envoyés" />
            <Chiffre valeur={t.jour.ouvertures} label="Ouvertures" />
            <Chiffre valeur={t.jour.reponses} label="Réponses" />
            <Chiffre valeur={t.appelsAFaire} label="Appels à faire" accent={t.appelsAFaire > 0} />
            <Chiffre valeur={t.relancesDues} label="Relances dues" />
            <Chiffre valeur={t.jour.rendezVous} label="Rendez-vous" />
          </div>
        </section>
        <section className="carte p-6">
          <h2 className="sur-titre mb-5">Cette semaine</h2>
          <div className="grid grid-cols-3 gap-y-6">
            <Chiffre valeur={t.semaine.emailsEnvoyes} label="E-mails envoyés" />
            <Chiffre valeur={t.semaine.ouvertures} label="Ouvertures" />
            <Chiffre valeur={t.semaine.reponses} label="Réponses" />
            <Chiffre valeur={t.semaine.appelsFaits} label="Appels faits" />
            <Chiffre valeur={t.semaine.clics} label="Clics" />
            <Chiffre valeur={t.semaine.rendezVous} label="Rendez-vous" />
          </div>
        </section>
      </div>

      <div className="mt-10 grid grid-cols-[minmax(0,1fr)] gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
        <section>
          <Titre>À faire aujourd&apos;hui</Titre>
          <div className="carte overflow-hidden">
            {t.aFaire.length === 0 ? (
              <Vide>Rien à faire pour l&apos;instant.</Vide>
            ) : (
              t.aFaire.map((a, i) => (
                <Link key={`${a.prospectId}-${a.genre}-${a.relanceId ?? i}`} href={`/prospects/${a.prospectId}`} className="rang">
                  <span className="w-[58px] shrink-0 text-[12px] font-medium uppercase tracking-wide text-doux">{ETIQUETTE_ACTION[a.genre]}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-medium">{a.entreprise}</span>
                    <span className="block truncate text-[13.5px] text-doux">
                      {a.titre} · {a.detail}
                    </span>
                  </span>
                  {a.urgence >= 2 && <span className="h-2 w-2 shrink-0 rounded-full bg-terre" aria-label="Urgent" />}
                </Link>
              ))
            )}
          </div>
        </section>

        <section>
          <Titre droite={<span className="text-[13px] text-doux">{t.totaux.prospects} prospects</span>}>Parcours</Titre>
          <div className="carte px-5 py-3">
            {t.entonnoir.map((e) => (
              <Link key={e.statut} href={`/prospects?statut=${e.statut}`} className="group block py-2.5">
                <div className="mb-1.5 flex items-baseline justify-between text-[14px]">
                  <span className={e.statut === "signe" ? "font-medium text-terre" : ""}>{STATUT_LABEL[e.statut]}</span>
                  <span className="tabular-nums text-doux">{e.nombre}</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-creux">
                  <div
                    className={`h-full rounded-full transition-all duration-200 ${e.statut === "signe" ? "bg-terre" : e.statut === "perdu" ? "bg-pale" : "bg-encre/70 group-hover:bg-encre"}`}
                    style={{ width: `${(e.nombre / max) * 100}%` }}
                  />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
