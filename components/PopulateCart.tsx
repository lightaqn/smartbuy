import { useCartStore } from "@/store/cartStore";

import { Product } from "@/types/ProductTypings";

type PopulateCartProps = {
  product: Product;
};

const PopulateCart = ({ product }: PopulateCartProps) => {
  const [populateCart, cart, depleteCart] = useCartStore((state) => [
    state.cart,
    state.populateCart,
    state.depleteCart,
  ]);

  const cartPopulation = cart.filter(
    (p) => p.meta.sku === product.meta.sku
  ).length;

  const handlePopulateCart = () => {
    populateCart(product);
  };

  const handleDepleteCart = () => {
    depleteCart(product);
  };

  if (cartPopulation > 0) {
    return (
      <div className="flex space-x-5 items-center">
        <button className="button" onClick={handleDepleteCart}>
          -
        </button>

        <span>{cartPopulation}</span>

        <button className="button" onClick={handlePopulateCart}>
          +
        </button>
      </div>
    );
  }

  return (
    <button onClick={handlePopulateCart} className="button">
      Add to Cart
    </button>
  );
};

export default PopulateCart;
