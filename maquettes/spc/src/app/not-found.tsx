import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap pb-32 pt-[calc(var(--head-h)+5rem)]">
      <p className="label">Erreur 404</p>
      <h1 className="mt-6 text-[2.6rem] sm:text-[4rem]">Cette page n&apos;existe pas, ou plus.</h1>
      <Link href="/" className="btn-solid mt-10">Retour à l&apos;accueil</Link>
    </section>
  );
}
