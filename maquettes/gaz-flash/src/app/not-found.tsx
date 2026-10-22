import Link from "next/link";
import { PATHS } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="hero diagonal-bottom pb-28 pt-44">
      <div className="container-x">
        <p className="eyebrow !text-ember">Erreur 404</p>
        <h1 className="mt-4 text-[clamp(3rem,8vw,6rem)]">Cette page n'existe pas</h1>
        <p className="mt-6 max-w-xl text-lg text-white/85">Le lien est peut-être ancien. Retrouvez nos services, nos tarifs ou appelez-nous directement.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href={PATHS.home} className="btn btn-flame">Retour à l'accueil</Link>
          <Link href={PATHS.services} className="btn btn-line text-white">Nos services</Link>
        </div>
      </div>
    </section>
  );
}
