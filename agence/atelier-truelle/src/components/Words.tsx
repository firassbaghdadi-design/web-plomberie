/** Titre dont les mots apparaissent l'un après l'autre. Le texte reste lisible sans animation. */
export function Words({ text, className = "", startDelay = 0 }: { text: string; className?: string; startDelay?: number }) {
  return (
    <span className={className}>
      {text.split(" ").map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden align-bottom">
          <span className="word inline-block" style={{ ["--d" as string]: `${startDelay + i * 70}ms` }}>
            {word}&nbsp;
          </span>
        </span>
      ))}
    </span>
  );
}
