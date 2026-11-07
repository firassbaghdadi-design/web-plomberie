export const metadata = { title: "Connexion" };

export default function Connexion({ searchParams }: { searchParams: { erreur?: string; suite?: string } }) {
  return (
    <main className="flex min-h-[100dvh] items-center justify-center px-5">
      <form action="/api/login" method="post" className="fondu w-full max-w-[360px]">
        <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-[18px] bg-terre text-white shadow-haut">
          <svg viewBox="0 0 64 64" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 44 32 18l12 26M25 36h14" />
          </svg>
        </div>
        <h1 className="mb-1 text-center text-[26px] font-semibold tracking-tight">Atelier OS</h1>
        <p className="mb-8 text-center text-doux">Entrez votre mot de passe.</p>
        <input type="hidden" name="suite" value={searchParams.suite ?? "/"} />
        <label className="sr-only" htmlFor="mdp">
          Mot de passe
        </label>
        <input id="mdp" name="motdepasse" type="password" autoComplete="current-password" autoFocus required placeholder="Mot de passe" className="champ text-center" />
        {searchParams.erreur && <p className="mt-3 text-center text-[14px] text-terre">Mot de passe incorrect.</p>}
        <button type="submit" className="btn btn-primaire mt-4 w-full">
          Se connecter
        </button>
      </form>
    </main>
  );
}
