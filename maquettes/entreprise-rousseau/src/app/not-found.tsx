import Link from "next/link";
import type { Metadata } from "next";
import { Bubbles } from "@/components/Ocean";
import { PATHS, business, copy } from "@/lib/site";

export const metadata: Metadata = { title: "Page introuvable", robots: { index: false, follow: false } };

export default function NotFound() {
  return (
    <section className="ocean relative flex min-h-screen items-center overflow-hidden text-white">
      <Bubbles />
      <div className="container-x relative py-32">
        <p className="eyebrow-light">Erreur 404</p>
        <h1 className="mt-4 max-w-3xl text-5xl !text-white sm:text-7xl">{copy.common.notFoundTitle}</h1>
        <p className="lead mt-6 max-w-xl !text-white/85">Le lien est peut-être ancien. Retrouvez nos services ou appelez-nous directement, nous vous répondons.</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link href="/" className="btn-amber">
            Retour à l'accueil
          </Link>
          <Link href={PATHS.plumbing} className="btn-ghost-light">
            Nos services plomberie
          </Link>
          <a href={`tel:${business.phoneTel}`} className="btn-ghost-light">
            {business.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
