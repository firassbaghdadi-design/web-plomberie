// Données de démonstration (idempotent : peut être relancé sans doublon).
import { creerBasePGlite, creerBasePostgres, migrer } from "../src/db";
import { seed } from "../src/db/seed";

const db = process.env.DATABASE_URL ? await creerBasePostgres(process.env.DATABASE_URL) : await creerBasePGlite(process.env.PGLITE_DIR || ".data/pglite");
await migrer(db);
await seed(db);
console.log("Données de démonstration en place.");
process.exit(0);
