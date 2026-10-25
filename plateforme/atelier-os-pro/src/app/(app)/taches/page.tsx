import { FormulaireTache } from "@/components/Formulaires";
import { ListeTaches } from "@/components/ListeTaches";
import { EnTete, Titre, Vide } from "@/components/ui";
import { aujourdhuiParis, jourLong } from "@/lib/format";
import { contexteInterface, optionsMembres } from "@/lib/serveur";
import { maJournee } from "@/lib/services/crm";

export const metadata = { title: "Ma journée" };

export default async function MaJournee() {
  const ctx = await contexteInterface();
  const [j, { actifs }] = await Promise.all([maJournee(ctx, aujourdhuiParis()), optionsMembres(ctx)]);
  const sections = [
    { titre: "En retard", taches: j.enRetard },
    { titre: "Aujourd'hui", taches: j.aujourdhui },
    { titre: "À venir", taches: j.aVenir },
    { titre: "Sans échéance", taches: j.sansDate },
    { titre: "Faites aujourd'hui", taches: j.faites },
  ].filter((s) => s.taches.length > 0);
  const total = j.enRetard.length + j.aujourdhui.length;

  return (
    <div className="fondu mx-auto max-w-2xl">
      <EnTete surTitre={jourLong()} titre="Ma journée" />
      <p className="-mt-4 mb-6 px-1 text-doux">
        {total === 0 ? "Rien d'urgent aujourd'hui." : `${total} tâche${total > 1 ? "s" : ""} à traiter aujourd'hui${j.enRetard.length ? `, dont ${j.enRetard.length} en retard` : ""}.`}
      </p>
      <div className="carte overflow-hidden">
        <FormulaireTache chemin="/taches" membres={actifs} moi={ctx.utilisateurId} />
      </div>
      {sections.length === 0 && (
        <div className="carte mt-6">
          <Vide>Aucune tâche. Ajoutez-en une ci-dessus.</Vide>
        </div>
      )}
      {sections.map((s) => (
        <section key={s.titre}>
          <Titre>
            {s.titre} <span className="ml-1 text-[15px] font-normal text-pale">{s.taches.length}</span>
          </Titre>
          <div className="carte overflow-hidden">
            <ListeTaches taches={s.taches} chemin="/taches" />
          </div>
        </section>
      ))}
    </div>
  );
}
