import { FC } from "react";

import { Organic } from "@/types";

import Link from "next/link";
import Image from "next/image";

import { StarIcon } from "lucide-react";

type ProductProps = {
  product: Organic;
};

const Product: FC<ProductProps> = ({ product }: ProductProps) => {
  return (
    <Link
      href={{
        pathname: "/product",

        query: { url: product.url },
      }}
      className="relative flex flex-col h-full rounded-2xl border-2 p-4"
    >
      <Image
        src={product.image}
        className=""
        width={200}
        height={200}
        alt={product.title}
      />

      <p className="text-xl font-bold">
        {product.price.currency}
        {product.price.price}
      </p>

      {product.badge && (
        <div className="w-fit absolute top-2 right-2 rounded-full w-8 h-4 ring-4 ring-gray-500 bg-black text-white ">
          {product.badge}
        </div>
      )}

      <p className="font-light">{product.title} </p>

      {product.rating && (
        <p className="text-orange-500 text-md">
          {" "}
          {product.rating.rating}
          {Array.fill(Math.ceil(product.rating.rating)).map((_, i) => (
            <span className="font-bold text-lg">
              <StarIcon />
            </span>
          ))}
          <span className="text-gray-500">{product.rating.count} </span>
        </p>
      )}
    </Link>
  );
};

export default Product;
