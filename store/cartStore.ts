import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { Product } from "@/types.d.ts";

interface CartState {
  cart: product[];
  populateCart: (product: Product) => void;
  depleteCart: (product: Product) => void;
}

const useCartStore = (create<CartState> = () => {
  devtools(
    persist(
      (set: any, get: any) => ({
        cart: [],

        populateCart: (product: any) => {
          set((state: any) => ({
            cart: [...state.cart, product],
          }));
        },
        depleteCart: (product: any, state: any) => {
          const productToDelete = get().cart.findIndex(
            (p: any) => p.meta.sku === product?.meta?.sku
          );

          const adjustedCart = [...state.cart];
          adjustedCart?.splice(productToDelete, 1);

          set(() => ({
            cart: [adjustedCart],
            // return {adjustedCart}
          }));
        },
      })

      //  name: "shopping-cart"
    )
  );
});

export default useCartStore;
