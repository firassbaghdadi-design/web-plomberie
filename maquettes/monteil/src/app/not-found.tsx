import Link from "next/link";

export default function NotFound() {
  return (
    <section className="under-head wrap py-32">
      <p className="label">Erreur 404</p>
      <h1 className="mt-6 text-[2.6rem] sm:text-[4rem]">Cette page n'existe pas, <span className="ital">ou plus.</span></h1>
      <Link href="/" className="btn-primary mt-10">Retour à l'accueil</Link>
    </section>
  );
}
