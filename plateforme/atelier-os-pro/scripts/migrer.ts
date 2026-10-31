// Applique les migrations versionnées sur la base courante (DATABASE_URL ou PGlite local).
import { creerBasePGlite, creerBasePostgres, migrer } from "../src/db";

const db = process.env.DATABASE_URL ? await creerBasePostgres(process.env.DATABASE_URL) : await creerBasePGlite(process.env.PGLITE_DIR || ".data/pglite");
const faites = await migrer(db);
console.log(faites.length ? `Migrations appliquées : ${faites.join(", ")}` : "Base à jour.");
process.exit(0);
