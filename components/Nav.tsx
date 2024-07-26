import Link from "next/link";

import Image from "next/image";

import { SearchIcon, PersonIcon, CartIcon, ServiceIcon } from "lucide-react";

import { useState, FC, FormEvent } from "react";

import { useCartStore } from "@/store/cartStore";

import { getCartTotal } from "@/utils/constants";

import { useRouter } from "next/navigation";

type NavProps = {};

const Nav: FC<NavProps> = ({}: NavProps) => {
  const [reveal, setReveal] = useState(false);

  const cart = useCartStore((state: any) => state.cart);

  const cartTotal = getCartTotal(cart);

  const router = useRouter();

  const handleProductSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = e.currentTarget.input.value;

    router.push(`/search/q=${input}`);
  };

  return (
    <header
      className={`grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mx-4 gap-x-3 bg-white w-full h-[10vh] ${
        reveal && "grid-cols-3 relative pl-6"
      } `}
    >
      <Link href={"/"} className="col-span-1">
        <Image
          src="/smartbuy.png"
          className=""
          alt=""
          height="50"
          width="150"
          objectFit="contain"
          layout="responsive"
        />
      </Link>

      <nav className="space-x-2 col-span-1 grid grid-cols-2 xl:grid-cols-5 2xl:col-span-4">
        <form
          onSubmit={handleProductSearch}
          className="col-span-1 lg:flex xl:col-span-3 items-center justify-center flex-1"
        >
          <input
            className={`${
              reveal
                ? "opacity-100 col-span-full absolute z-10 w-full"
                : "opacity-0"
            } lg:block flex-grow outline-none ring-2 ring-red-500 placeholder-gray-500 text-gray-800 font-medium text-xl px-4 text-center backdrop-blur-lg bg-gray-400/30 rounded-full transition-opacity duration-500`}
            onChange={(e: any) => handleProductSearch(e)}
            placeholder="Search for Products…"
            name="input"
          />

          <button
            type="submit"
            onMouseEnter={(e) => setReveal(true)}
            onMouseLeave={(e) => setReveal(false)}
          >
            <SearchIcon className="text-red-500 flex-shrink-0 text-lg font-bold hover:scale-105 active:scale:95 hover:transform hover:duration-200 hover:ease-out active:ease-in justify-end" />
          </button>
        </form>

        <div className="flex col-span-1 space-x-2 xl:col-span-2">
          <Link
            href="/services"
            className="hover:shadow-md hover:text-red-500
  
  rounded-2xl"
          >
            <p className="hidden xl:block">Services</p>

            <ServiceIcon className="text-lg lg:text-xl hover:transition hover:transform hover:duration-250 hover:ease-in-out hover:scale-105 active:ease-in active:scale-95" />
          </Link>

          <Link
            href="/accounts"
            className="hover:shadow-md hover:text-red-500 rounded-2xl"
          >
            <p className="hidden xl:block">Accounts</p>

            <PersonIcon className="text-lg lg:text-xl hover:transition hover:transform hover:duration-250 hover:ease-in-out hover:scale-105 active:ease-in active:scale-95" />
          </Link>

          <Link
            href="/cart"
            className="hover:shadow-md rounded-2xl hover:text-red-500"
          >
            <p className="hidden xl:block">Cart</p>

            <div className="relative">
              <CartIcon className="text-lg lg:text-xl hover:transition hover:transform hover:duration-250 hover:ease-in-out hover:scale-105 active:ease-in active:scale-95" />

              <div
                className={`absolute animate-bounce rounded-full translate-y-1 text-center font-bold text-gray-500 ${
                  cart.length > 0 &&
                  "text-red-500 hover:bg-red-500 hover:text-white"
                } `}
              >
                {cartTotal}{" "}
                <span className="text-lime-500">
                  {cart.length > 0 ? `${cart.length} items` : "No item"}{" "}
                </span>
              </div>
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
