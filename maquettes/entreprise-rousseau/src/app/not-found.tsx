import Link from "next/link";
import type { Metadata } from "next";
import { business } from "@/lib/site";

export const metadata: Metadata = { title: "Page introuvable", robots: { index: false, follow: false } };

export default function NotFound() {
  return (
    <main id="contenu" className="container-x flex min-h-screen flex-col items-start justify-center gap-6 py-24">
      <p className="eyebrow">Erreur 404</p>
      <h1 className="text-4xl sm:text-5xl">Cette page n'existe pas (ou plus).</h1>
      <p className="max-w-xl text-ink-soft">
        Le lien est peut-être ancien. Revenez à l'accueil ou appelez-nous directement, nous vous répondons.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link href="/" className="btn-primary">
          Retour à l'accueil
        </Link>
        <a href={`tel:${business.phoneTel}`} className="btn-ghost">
          Appeler le {business.phoneDisplay}
        </a>
      </div>
    </main>
  );
}
