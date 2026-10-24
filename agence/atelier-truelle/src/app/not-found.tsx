import Link from "next/link";
import type { Metadata } from "next";
import { PATHS } from "@/lib/site";

export const metadata: Metadata = { title: "Page introuvable", robots: { index: false, follow: false } };

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center">
      <div className="container-x py-24">
        <p className="eyebrow">Erreur 404</p>
        <h1 className="mt-4 max-w-3xl text-5xl sm:text-7xl">Cette page n'existe pas (ou plus).</h1>
        <p className="mt-6 max-w-xl text-lg">Le lien est peut-être ancien. Retrouvez nos services ou écrivez-nous.</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link href="/" className="btn-primary">
            Retour à l'accueil
          </Link>
          <Link href={PATHS.services} className="btn-ghost">
            Nos services
          </Link>
        </div>
      </div>
    </section>
  );
}
