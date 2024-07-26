import { Carousel } from "@/components";

import { getProduct } from "@/utils/constants";

import notFound from "next";

import { PopulateCart } from "@/components";

type ProductProps = {
  searchParams: {
    url: string;
  };
};

async function ProductDetails({ searchParams: { url } }: ProductProps) {
  const product = getProduct(url);

  if (!product) return notFound();

  return (
    <div className="p-6 lg:p-10 flex flex-col">
      <div className="h-[50vh] grid lg:grid-cols-2]">
        <div>
          <Carousel images={product.images} title={product.title} />
        </div>

        <div className="w-full space-y-5">
          <h1 className="font-bold text-4xl">{product.title}</h1>

          <div className="space-x-2 flex">
            {product.breadcrumbs.map((breadcrumb, i) => (
              <div
                key={breadcrumb + i}
                className="w-auto top-2 right-2 rounded-full h-4 ring-4 ring-gray-500 bg-black text-white shadow-md bg-gray-100"
              >
                {breadcrumb}
              </div>
            ))}
          </div>

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

          <p className="text-2xl font-bold mt-2">
            {product.currency} {product.price}
          </p>

          <PopulateCart product={product} />
        </div>
      </div>

      <div className="my-6 max-w-7xl p-6">
        <div
          dangerouslySetInnerHTML={{ _html: product.description }}
          className="py-6"
        />

        <hr />

        <h3 className="font-bold text-2xl pt-10">Specifications</h3>

        <table>
          <thead>
            <tr>
              <th>Specification:</th>

              <th>Value</th>
            </tr>
          </thead>

          <tbody>
            {product.specifications.map((spec) => (
              <tr key={spec.key}>
                <td>{spec.key}</td>

                <td>{spec.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductDetails;
