export const DEFAULT_VAT_RATE = 20;

export function computeTax(amount: number, rate: number = DEFAULT_VAT_RATE): number {
  return Math.round((amount * rate) / 100);
}
