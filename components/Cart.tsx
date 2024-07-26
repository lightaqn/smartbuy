import Image from "next/image";

import { currency, LoadingSpinner } from "@/utils/constants";

import { FC } from "react";

import { ArrowForwardIcon, ShoppingCartIcon } from "lucide-react";

import { useCartStore } from "@/store/cartStore";

import { groupedItemsBySKU, getCartTotal } from "@utils/constants";

import { PopulateCart } from "@/components";

type CartProps = {
  parallel?: boolean;
  loading?: boolean;
};

type CartItemsProps = {
  id: string;
  image: string;
  title: string;
  price: number;
};

const Cart: FC<CartProps> = ({ parallel, loading }: CartProps) => {
  let shipping = 5.0;

  let tax = 5.0;

  const cart = useCartStore((state: any) => state.cart);

  const groupedCartItems = groupedItemsBySKU(cart);

  const cartTotal = getCartTotal(cart);

  if (loading) {
    return (
      <div className="">
        {Array.fill(cart.length).map((_, i) => (
          <div key={i} className="flex space-x-2">
            <div className="rounded-full flex-shrink-0 h-16 w-16 ring-4 ring-gray-500 animate-spin shadow-lg" />

            <div className="animate-pulse flex-grow h-16 w-full rounded-xl" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`p-10 grid {!parallel && "lg:grid-cols-3" } `}>
      <div
        className={` ${
          !parallel && "lg:col-span-2"
        } flex justify-between border-b-8 border-gray-500 hover:border-red-500`}
      >
        <h3 className="uppercase text-3xl text-red-500 text-left tracking-tight leading-6">
          <span className="mr-2">
            <ShoppingCartIcon className="text-3xl " />
          </span>{" "}
          Cart
        </h3>

        <h3 className={`${!parallel ? "hidden" : "block justify-end"} `}>
          {cartTotal}{" "}
        </h3>
      </div>

      <div className="h-auto overflow-auto space-y-3 flex flex-col">
        {Object.keys(groupedCartItems).map((sku) => {
          const item = groupedCartItems[sku][0];

          const cartRowTotal = getCartTotal(groupedCartItems[sku]);

          return <CartRow key={sku} item={item} rowTotal={cartRowTotal} />;
        })}
      </div>

      {parallel ? (
        <div className="sticky">
          <button className="button flex text-red-500 hover:text-white bg-white border-2 border-red-500 h-16">
            {loading ? <LoadingSpinner /> : "CHECKOUT"}{" "}
          </button>
        </div>
      ) : (
        <div className="col-span-full lg:col-span-1 rounded-2xl shadow-lg bg-red-300 p-4 space-y-2 h-auto lg:h-full">
          <div className="flex rounded-full h-16">
            <input
              className="button outline-none border-none placeholder-gray-400 text-gray-700 text-2xl flex-grow h-full w-full"
              placeholder="Promo Code"
              name="promo"
              type="text"
              onChange={() => {}}
            />

            <ArrowForwardIcon className="flex-shrink-0 justify-end" />
          </div>

          <div className="space-y-2 text-2xl text-red-700">
            <p className="flex justify-between py-4">
              <span>Subtotal:</span>

              <span className="font-bold"> {cartTotal}</span>
            </p>

            <p className="flex justify-between py-4">
              <span>Shipping:</span>

              <span className="font-bold">
                {tax ? currency + shipping : "TBD"}{" "}
              </span>
            </p>

            <p className="flex justify-between py-4">
              <span>Tax:</span>

              <span className="font-bold">{tax ? currency + tax : "TBD"} </span>
            </p>

            <p className="flex justify-between border-t-4 border-gray-300 py-4 font-extrabold">
              <span>Estimated Total: </span>

              <span>
                {currency} {cartTotal} + {shipping} + {tax}{" "}
              </span>
            </p>
          </div>

          <button className="button w-full h-16 my-4 rounded-full bg-white text-gray-700 hover:text-red-500">
            {" "}
            Continue to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

type CartRowProps = {
  item?: any;
  sku?: string;
  rowTotal?: number;
};

const CartRow: FC<CartRowProps> = (
  { item, sku, rowTotal }: CartRowProps,
  index
) => (
  <>
    {item.length > 0 && (
      <div
        className={`flex shadow-md gap-x-4 hover:shadow-lg ${
          index % 2 === 1
            ? "bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 text-gray-900"
            : "bg-white text-700"
        } `}
      >
        <div className="">
          {item.image[0] && (
            <Image
              src={item.image[0]}
              className="rounded-full"
              width={200}
              height={200}
              alt={`${item.title} + " " + ${sku}`}
              layout="responsive"
              objectFit="contain"
            />
          )}
        </div>

        <div className=" flex-shrink-0 min-w-lg">
          <PopulateCart product={item} />
          <p>
            {" "}
            <span>{cart?.length ? rowTotal : 0} </span>
          </p>
        </div>

        <div className="flex-grow flex flex-col">
          <p className="font-bold text-xl line-clamp-2">{item.title}</p>

          <div
            dangerouslySetInnerHTML={{ __html: item.description }}
            className="line-clamp-1 mt-2 text-md"
          />
        </div>
      </div>
    )}
  </>
);

export default Cart;
