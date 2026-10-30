/** Angle de la graduation k (0 à n-1) sur le cadran : les numéros de section s'étalent entre -120° et +120°. */
export const gradAngle = (k: number, n: number) => (n <= 1 ? 0 : -120 + (240 * k) / (n - 1));
