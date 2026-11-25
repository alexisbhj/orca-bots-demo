export function computeDiscount(subtotal: number, percent: number): number {
  if (percent < 0 || percent > 100) {
    throw new Error("La remise doit être comprise entre 0 et 100 %");
  }
  return Math.round((subtotal * percent) / 100);
}
