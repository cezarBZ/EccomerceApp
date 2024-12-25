import { create } from "zustand";
import { IProduct } from "@/interfaces/product";
import { productsMock } from "@/mocks/productMock";
import { subscribeWithSelector } from "zustand/middleware";
export interface CartProduct extends IProduct {
  quantity: number;
}

interface ShoppingCartState {
  items: CartProduct[];
  totalPrice: number;
  addItem: (product: IProduct | undefined) => void;
  removeItem: (productId: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
}

export const useShoppingCartStore = create<ShoppingCartState>()(
  subscribeWithSelector((set, get) => ({
    items: [],
    totalPrice: 0,
    addItem: (product) => {
      if (product) {
        set((state) => {
          const existingProduct = state.items.find(
            (item) => item.id === product.id
          );

          if (existingProduct) {
            return {
              items: state.items.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }

          return { items: [...state.items, { ...product, quantity: 1 }] };
        });
      }
    },
    increaseQuantity: (productId) =>
      set((state) => ({
        items: state.items.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      })),
    decreaseQuantity: (productId) =>
      set((state) => {
        const existingProduct = state.items.find(
          (item) => item.id === productId
        );

        if (existingProduct && existingProduct.quantity > 1) {
          return {
            items: state.items.map((item) =>
              item.id === productId
                ? { ...item, quantity: item.quantity - 1 }
                : item
            ),
          };
        }

        return { items: state.items.filter((item) => item.id !== productId) };
      }),
    removeItem: (productId) =>
      set((state) => ({
        items: state.items.filter((item) => item.id !== productId),
      })),
  }))
);

useShoppingCartStore.subscribe(
  (state) => state.items,
  (items) => {
    if (items.length > 0) {
      const price = items
        .map((product) => product.price * product.quantity)
        .reduce((pv, crr) => crr + pv);
      return useShoppingCartStore.setState({ totalPrice: price });
    }
    return useShoppingCartStore.setState({ totalPrice: 0 });
  }
);
