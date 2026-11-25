import { computeDiscount } from "./discount";
import { computeTax } from "./tax";
import type { CartItem, CartTotal } from "./types";

export function computeSubtotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
}

export function computeCart(items: CartItem[], discountPercent = 0): CartTotal {
  const subtotal = computeSubtotal(items);
  const discount = computeDiscount(subtotal, discountPercent);
  const tax = computeTax(subtotal - discount);
  return { subtotal, discount, tax, total: subtotal - discount + tax };
}
