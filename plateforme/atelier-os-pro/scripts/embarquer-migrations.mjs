// Embarque les migrations SQL versionnées (./drizzle) dans un module TypeScript,
// pour qu'elles voyagent dans le bundle serveur (Vercel) sans dépendre du disque.
import { readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

const racine = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const journal = JSON.parse(readFileSync(path.join(racine, "drizzle/meta/_journal.json"), "utf8"));
const migrations = journal.entries.map((e) => {
  const sqlTexte = readFileSync(path.join(racine, "drizzle", `${e.tag}.sql`), "utf8");
  return { tag: e.tag, empreinte: createHash("sha256").update(sqlTexte).digest("hex"), sql: sqlTexte };
});
const sortie = `// Fichier généré par scripts/embarquer-migrations.mjs — ne pas modifier à la main.
export const MIGRATIONS: { tag: string; empreinte: string; sql: string }[] = ${JSON.stringify(migrations, null, 2)};
`;
writeFileSync(path.join(racine, "src/db/migrations.generated.ts"), sortie);
console.log(`${migrations.length} migration(s) embarquée(s).`);
