import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap py-40">
      <p className="cap">Erreur 404</p>
      <h1 className="mt-6 text-[2.6rem] sm:text-[4rem]">Cette page n'existe pas, ou plus.</h1>
      <Link href="/" className="btn-cuivre mt-10">Retour à l'accueil</Link>
    </section>
  );
}
