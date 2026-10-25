import { etatEnvoyeur } from "@/lib/sender";
import { stockage } from "@/lib/db";
import { Deconnexion } from "@/components/Formulaires";

export const dynamic = "force-dynamic";
export const metadata = { title: "Réglages" };

export default async function Reglages() {
  const e = await etatEnvoyeur();
  const stock = stockage();
  const lignes: Array<[string, string]> = [
    ["Envoi d'e-mails", e.active ? "Activé" : "Désactivé"],
    ["Transport", e.transportBranche ? "Branché" : "Pas encore branché (Gmail ou Resend)"],
    ["Limite", `${e.maxParJour} par jour, ${e.envoyesAujourdhui} aujourd'hui`],
    ["Créneaux", `${e.creneauxLabel}, jamais le week-end`],
    ["Stockage", stock === "vercel-blob" ? "Vercel Blob (durable)" : "Fichier local (développement)"],
  ];
  return (
    <div className="fondu">
      <h1 className="titre-page mb-8">Réglages</h1>
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
