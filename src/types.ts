// Tous les montants sont en centimes pour éviter les erreurs de virgule flottante.

export interface CartItem {
  name: string;
  unitPrice: number; // centimes HT
  quantity: number;
}

export interface CartTotal {
  subtotal: number; // HT avant remise
  discount: number;
  tax: number;
  total: number; // TTC
}
