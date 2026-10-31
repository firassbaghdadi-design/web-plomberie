export function JsonLd({ nodes }: { nodes: object[] }) {
  const data = { "@context": "https://schema.org", "@graph": nodes };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
