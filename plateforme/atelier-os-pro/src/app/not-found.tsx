import Link from "next/link";

export default function Introuvable() {
  return (
    <main className="flex min-h-[70dvh] flex-col items-center justify-center px-5 text-center">
      <p className="sur-titre mb-2">Erreur 404</p>
      <h1 className="titre-page mb-3">Page introuvable</h1>
      <p className="mb-6 text-doux">Cette page n&apos;existe pas, ou vous n&apos;y avez pas accès.</p>
      <Link href="/" className="btn btn-primaire">
        Retour à l&apos;accueil
      </Link>
    </main>
  );
}
