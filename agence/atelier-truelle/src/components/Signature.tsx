/** Petite truelle dessinée à la main, utilisée comme signature. */
export function Signature({ className = "h-14 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 70" className={className} aria-hidden="true" fill="none" stroke="#8F3624" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 52c14-6 26-34 40-30 10 3 2 24-6 26 16-2 34-26 46-22 9 3 0 18-6 20 12 1 30-14 40-12 6 1 6 8 2 12" />
      <path d="M150 58c14-2 30-4 62-6" />
      <path d="M170 18l26 22-14 6z" fill="#F3DDD5" />
      <path d="M196 40l8 14" />
    </svg>
  );
}
