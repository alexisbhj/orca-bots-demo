import { describe, expect, it } from "vitest";
import { computeTax } from "../src/tax";

describe("computeTax", () => {
  it("applique la TVA à 20 % par défaut", () => {
    expect(computeTax(10000)).toBe(2000);
  });

  it("accepte un taux réduit", () => {
    expect(computeTax(10000, 5.5)).toBe(550);
  });
});
