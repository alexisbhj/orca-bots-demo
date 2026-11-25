import { describe, expect, it } from "vitest";
import { computeCart, computeSubtotal } from "../src/cart";
import { formatEuros } from "../src/money";

const items = [
  { name: "Clavier", unitPrice: 4999, quantity: 1 },
  { name: "Câble USB-C", unitPrice: 999, quantity: 2 },
];

describe("panier", () => {
  it("calcule le sous-total", () => {
    expect(computeSubtotal(items)).toBe(6997);
  });

  it("gère un panier vide", () => {
    expect(computeCart([])).toEqual({ subtotal: 0, discount: 0, tax: 0, total: 0 });
  });

  it("calcule le total TTC sans remise", () => {
    expect(computeCart(items).total).toBe(8396);
  });

  it("calcule le total TTC avec remise", () => {
    expect(computeCart(items, 10)).toEqual({
      subtotal: 6997,
      discount: 700,
      tax: 1259,
      total: 7556,
    });
  });

  it("formate un montant en euros", () => {
    expect(formatEuros(7556)).toBe("75,56 €");
  });
});
