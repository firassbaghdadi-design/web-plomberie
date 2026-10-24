// Bloque la mise en ligne indexable tant que les mentions légales ne sont pas complètes.
const indexable = process.env.NEXT_PUBLIC_INDEXABLE === "true";
const required = {
  NEXT_PUBLIC_LEGAL_NAME: "dénomination ou nom de l'entreprise",
  NEXT_PUBLIC_LEGAL_FORM: "forme juridique (micro-entreprise, EURL, SASU…)",
  NEXT_PUBLIC_LEGAL_SIREN: "numéro SIREN",
  NEXT_PUBLIC_LEGAL_ADDRESS: "adresse professionnelle ou de domiciliation",
  NEXT_PUBLIC_LEGAL_DIRECTOR: "directeur de la publication",
  NEXT_PUBLIC_CONTACT_EMAIL: "adresse e-mail de contact",
};
const missing = Object.entries(required).filter(([key]) => !(process.env[key] ?? "").trim());
if (indexable && missing.length) {
  console.error("\n[mentions légales] Build indexable refusé : variables manquantes.\n");
  for (const [key, label] of missing) console.error(`  - ${key} : ${label}`);
  console.error("\nRenseignez-les dans Vercel (Settings, Environment Variables) ou laissez NEXT_PUBLIC_INDEXABLE non défini.\n");
  process.exit(1);
}
if (!indexable && missing.length) console.log(`[mentions légales] ${missing.length} information(s) à compléter avant la mise en ligne indexable.`);
