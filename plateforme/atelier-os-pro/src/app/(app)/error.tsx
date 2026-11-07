"use client";

export default function Erreur({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="carte mx-auto mt-10 max-w-md p-8 text-center">
      <h1 className="mb-2 text-[22px] font-semibold tracking-tight">Un souci est survenu</h1>
      <p className="mb-6 text-doux">{error.message.includes("droits") ? error.message : "La page n'a pas pu se charger. Réessayez dans un instant."}</p>
      <button onClick={reset} className="btn btn-primaire">
        Réessayer
      </button>
    </div>
  );
}
