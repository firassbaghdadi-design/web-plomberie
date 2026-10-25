import Link from "next/link";
import { PATHS } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="bg-night py-32 text-white">
      <div className="wrap">
        <p className="label text-flame">Erreur 404</p>
        <h1 className="mt-4 text-5xl font-semibold sm:text-7xl">Cette page n'existe pas.</h1>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="btn-flame">Retour à l'accueil</Link>
          <Link href={PATHS.contact} className="btn-light">Devis gratuit</Link>
        </div>
      </div>
    </section>
  );
}
