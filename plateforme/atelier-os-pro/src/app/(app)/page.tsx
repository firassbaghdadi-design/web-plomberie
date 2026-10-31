import Link from "next/link";
import { Icone } from "@/components/Icone";
import { ListeTaches } from "@/components/ListeTaches";
import { Bientot, Chiffre, Titre, Vide } from "@/components/ui";
import { FilActivite } from "@/components/FilActivite";
import { MODULES } from "@/lib/modules";
import { STATUT_CHANTIER_LABEL, aujourdhuiParis, jourLong } from "@/lib/format";
import { contexteInterface } from "@/lib/serveur";
import { maJournee, tableauDeBord } from "@/lib/services/crm";
import { listerMembres } from "@/lib/services/comptes";

export const metadata = { title: "Accueil" };

const ORDRE = ["a_qualifier", "en_devis", "planifie", "en_cours", "en_pause"] as const;

function salutation() {
  const h = Number(new Intl.DateTimeFormat("en-GB", { hour: "2-digit", hourCycle: "h23", timeZone: "Europe/Paris" }).format(new Date()));
  return h < 18 ? "Bonjour" : "Bonsoir";
}

export default async function Accueil() {
  const ctx = await contexteInterface();
  const [t, j, membres] = await Promise.all([tableauDeBord(ctx), maJournee(ctx, aujourdhuiParis()), listerMembres(ctx)]);
  const noms = Object.fromEntries(membres.map((m) => [m.utilisateurId, m.utilisateur.nom]));
  const prenom = ctx.utilisateur.nom.split(" ")[0];
  const urgentes = [...j.enRetard, ...j.aujourdhui].slice(0, 6);
  const maxStatut = Math.max(1, ...ORDRE.map((s) => t.chantiersParStatut[s] ?? 0));

  return (
    <div className="fondu">
      <p className="sur-titre mb-1.5">{jourLong()}</p>
      <h1 className="titre-page mb-8">
        {salutation()}, {prenom}
      </h1>

      <section className="carte p-6" aria-label="En bref">
        <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4">
          <Chiffre valeur={t.tachesDuJour} label="À faire aujourd'hui" accent={t.tachesDuJour > 0} href="/taches" />
          <Chiffre valeur={t.tachesEnRetard} label="Tâches en retard" href="/taches" />
          <Chiffre valeur={t.chantiersActifs} label="Chantiers actifs" href="/chantiers?statut=en_cours" />
          <Chiffre valeur={t.clients} label="Clients" href="/clients" />
        </div>
      </section>

      <div className="mt-10 grid grid-cols-[minmax(0,1fr)] gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <section>
          <Titre
            droite={
              <Link href="/taches" className="btn-texte">
                Ma journée
              </Link>
            }
          >
            À faire
          </Titre>
          <div className="carte overflow-hidden">
            {urgentes.length === 0 ? <Vide>Rien d&apos;urgent. Belle journée.</Vide> : <ListeTaches taches={urgentes} chemin="/" />}
          </div>

          <Titre
            droite={
              <Link href="/chantiers" className="btn-texte">
                Tout voir
              </Link>
            }
          >
            Chantiers
          </Titre>
          <div className="carte p-5">
            <ul className="space-y-3">
              {ORDRE.map((s) => {
                const n = t.chantiersParStatut[s] ?? 0;
                return (
                  <li key={s}>
                    <Link href={`/chantiers?statut=${s}`} className="group grid grid-cols-[110px_minmax(0,1fr)_28px] items-center gap-3 text-[14px]">
                      <span className="text-doux group-hover:text-encre">{STATUT_CHANTIER_LABEL[s]}</span>
                      <span className="h-2 overflow-hidden rounded-full bg-creux">
                        <span className="block h-full rounded-full bg-terre transition-all duration-500" style={{ width: `${(n / maxStatut) * 100}%`, opacity: n ? 1 : 0 }} />
                      </span>
                      <span className="text-right font-medium tabular-nums">{n}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section>
          <Titre>Activité récente</Titre>
          <div className="carte overflow-hidden">
            <FilActivite activites={t.activiteRecente} noms={noms} avecLiens />
          </div>
        </section>
      </div>

      <Titre>Bientôt dans Atelier OS</Titre>
      <div className="grid grid-cols-[minmax(0,1fr)] gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {MODULES.filter((m) => m.bientot).map((m) => (
          <Link key={m.id} href={m.href} className="carte group flex items-start gap-4 p-5 transition-shadow duration-200 hover:shadow-haut">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-creux text-doux">
              <Icone nom={m.icone} className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="flex items-center gap-2">
                <span className="font-semibold tracking-tight">{m.label}</span>
                <Bientot />
              </span>
              <span className="mt-1 block text-[13.5px] leading-snug text-doux">{m.resume}</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
