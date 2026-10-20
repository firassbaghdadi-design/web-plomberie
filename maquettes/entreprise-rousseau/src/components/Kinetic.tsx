export function Kinetic({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={`kinetic ${className}`}>
      {text.split(" ").map((word, index) => (
        <span key={`${word}-${index}`}>
          <span className="w">
            <span style={{ ["--i" as string]: index }}>{word}</span>
          </span>{" "}
        </span>
      ))}
    </span>
  );
}
