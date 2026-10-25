const fmtEuros = new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

/** 1490 → « 1 490 € » */
export const euros = (n: number) => fmtEuros.format(n);
