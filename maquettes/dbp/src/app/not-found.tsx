import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap py-32">
      <p className="giant text-[40vw] lg:text-[22rem]" aria-hidden="true">404<span className="deg">°</span></p>
      <h1 className="mt-8 text-[2.6rem] sm:text-[4rem]">Cette page n'existe pas, ou plus.</h1>
      <Link href="/" className="btn-primary mt-10">Retour à l'accueil</Link>
    </section>
  );
}
