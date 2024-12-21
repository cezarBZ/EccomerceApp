import { create } from "zustand";
import { IProduct } from "@/interfaces/product";
import { productsMock } from "@/mocks/productMock";
interface CartProduct extends IProduct {
  quantity: number;
}

interface ShoppingCartState {
  items: CartProduct[];
  addItem: () => void;
  removeItem: () => void;
}

export const useShoppingCartStore = create<ShoppingCartState>((set, state) => ({
  items: productsMock.map((product) => ({ ...product, quantity: 1 })),
  addItem: () => {},
  removeItem: () => {},
}));
