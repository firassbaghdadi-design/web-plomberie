import Link from "next/link";
import { PATHS } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="py-32 sm:py-44">
      <div className="wrap">
        <p className="label text-accent">Erreur 404</p>
        <h1 className="mt-6 text-5xl sm:text-7xl">Cette page n&apos;existe pas.</h1>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="btn-primary">Retour à l&apos;accueil</Link>
          <Link href={PATHS.contact} className="btn-line">Devis gratuit</Link>
        </div>
      </div>
    </section>
  );
}
