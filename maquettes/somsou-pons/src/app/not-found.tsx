import Link from "next/link";
import { PATHS } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="hero">
      <div className="container-x max-w-3xl">
        <p className="eyebrow">Page introuvable</p>
        <h1 className="mt-5 text-5xl sm:text-6xl">Cette page n'existe pas, ou plus.</h1>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="btn-dark">Revenir à l'accueil</Link>
          <Link href={PATHS.contact} className="btn-amber">Nous écrire</Link>
        </div>
      </div>
    </section>
  );
}
