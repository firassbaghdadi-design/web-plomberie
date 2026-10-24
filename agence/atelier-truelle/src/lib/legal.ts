const env = (key: string) => (process.env[key] ?? "").trim();

export const legal = {
  name: env("NEXT_PUBLIC_LEGAL_NAME"),
  form: env("NEXT_PUBLIC_LEGAL_FORM"),
  siren: env("NEXT_PUBLIC_LEGAL_SIREN"),
  address: env("NEXT_PUBLIC_LEGAL_ADDRESS"),
  director: env("NEXT_PUBLIC_LEGAL_DIRECTOR"),
  vat: env("NEXT_PUBLIC_LEGAL_VAT"),
};

export const TODO = "à compléter avant la mise en ligne";

export const legalComplete = Boolean(legal.name && legal.form && legal.siren && legal.address && legal.director);
