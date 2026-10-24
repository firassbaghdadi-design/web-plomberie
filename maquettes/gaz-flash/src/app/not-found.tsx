import Link from "next/link";
import { PATHS, business } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="wrap pb-10 pt-14">
      <p className="hand text-[1.8rem] text-red-btn">Erreur 404</p>
      <h1 className="mt-1 max-w-[18ch]">Cette page n'existe pas</h1>
      <p className="mt-5 max-w-[52ch] text-ink-soft">Le lien est peut-être ancien. Retrouvez nos services, nos tarifs, ou appelez directement le standard au {business.phoneDisplay}.</p>
      <ul className="mt-6 flex flex-wrap gap-3">
        <li><Link href={PATHS.home} className="btn">Retour à l'accueil</Link></li>
        <li><Link href={PATHS.services} className="btn btn-ghost">Nos services</Link></li>
        <li><Link href={PATHS.prices} className="btn btn-ghost">Nos tarifs</Link></li>
      </ul>
    </section>
  );
}
