import { etatEnvoyeur } from "@/lib/sender";
import { readDb, stockage } from "@/lib/db";
import { Deconnexion, FormObjectif } from "@/components/Formulaires";
import { Titre } from "@/components/ui";
import { ImportCsv } from "@/components/ImportCsv";
import { Icone } from "@/components/Icone";

export const dynamic = "force-dynamic";
export const metadata = { title: "Réglages" };

export default async function Reglages() {
  const e = await etatEnvoyeur();
  const stock = stockage();
  const db = await readDb();
  const lignes: Array<[string, string]> = [
    ["Envoi d'e-mails", e.active ? "Activé" : "Désactivé"],
    ["Transport", e.transportBranche ? "Branché" : "Pas encore branché (Gmail ou Resend)"],
    ["Limite", `${e.maxParJour} par jour, ${e.envoyesAujourdhui} aujourd'hui`],
    ["Créneaux", `${e.creneauxLabel}, jamais le week-end`],
    ["Stockage", stock === "vercel-blob" ? "Vercel Blob (durable)" : "Fichier local (développement)"],
  ];
  return (
    <div className="fondu">
      <h1 className="titre-page">Réglages</h1>
      <Titre>Objectif</Titre>
      <div className="carte">
        <FormObjectif objectif={db.reglages.objectifMensuel} />
      </div>
      <p className="mt-3 px-1 text-[13px] text-doux">Suivi sur le tableau de bord : chiffre d&apos;affaires signé du mois en cours.</p>

      <Titre>Importer des prospects</Titre>
      <div className="carte">
        <ImportCsv />
      </div>
      <p className="mt-3 px-1 text-[13px] text-doux">
        Séparateur point-virgule ou virgule. Colonne « entreprise » obligatoire ; les autres sont reconnues par leur nom (dirigeant, e-mail, téléphone, ville, site…).
        Un aperçu s&apos;affiche avant tout import ; les doublons (même nom d&apos;entreprise ou même e-mail) sont ignorés.
      </p>

      <Titre>Exporter</Titre>
      <div className="carte flex flex-wrap items-center justify-between gap-3 p-5">
        <span className="text-[14.5px]">Tous les prospects, toutes les colonnes</span>
        <a href="/api/v1/prospects/export" download className="btn btn-petit" data-export>
          <Icone nom="telecharger" className="h-4 w-4" /> Exporter en CSV
        </a>
      </div>

      <Titre>Envoi d&apos;e-mails</Titre>
      <div className="carte overflow-hidden">
        {lignes.map(([k, v]) => (
          <div key={k} className="rang items-start !gap-4">
            <span className="w-32 shrink-0 text-[13.5px] text-doux">{k}</span>
            <span className="flex-1">{v}</span>
          </div>
        ))}
      </div>
      <p className="mt-3 px-1 text-[13px] text-doux">Aucun e-mail ne part depuis cette application tant que l&apos;envoyeur n&apos;est pas activé et branché.</p>
      <div className="mt-8 max-w-xs">
        <Deconnexion />
      </div>
    </div>
  );
}
