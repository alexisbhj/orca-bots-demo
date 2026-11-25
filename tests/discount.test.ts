import { describe, expect, it } from "vitest";
import { computeDiscount } from "../src/discount";

describe("computeDiscount", () => {
  it("applique un pourcentage simple", () => {
    expect(computeDiscount(10000, 10)).toBe(1000);
  });

  it("arrondit la remise au centime le plus proche", () => {
    expect(computeDiscount(1999, 10)).toBe(200); // 199,9 → 200
  });

  it("renvoie 0 sans remise", () => {
    expect(computeDiscount(5000, 0)).toBe(0);
  });

  it("refuse une remise hors bornes", () => {
    expect(() => computeDiscount(5000, 120)).toThrow();
    expect(() => computeDiscount(5000, -5)).toThrow();
  });
});
