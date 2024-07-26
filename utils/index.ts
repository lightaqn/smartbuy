import { Result } from "@/types/searchTypings.ts";

import { ProductContent, Product } from "@/types/productTypings.ts";

type Currency = {};

let username = process.env.OXYLAB_USERNAME;

let password = process.env.OXYLAB_PASSWORD;

export async function getSearch(searchInput: string) {
  const adjustedUrl = new URL(`https://www.walmart.com/q=${searchInput}`);

  const body = {
    source: "universal_ecommerce",

    url: adjustedUrl.toString(),

    Location: "United States",

    parse: true,
  };

  const response = await fetch("https://realtime.oxylabs.io/v1/queries", {
    method: "POST",

    body: JSON.stringify(body),

    headers: {
      "Content-Type": "application/json",

      Authorization:
        "Basic" + Buffer.from(`${username}:${password}`).toString("base64"),
    },

    next: { revalidate: 60 * 60 * 24 },
  })
    .then((res) => res.json())

    .then((data) => {
      if (data.results.length === 0) return;

      const result: Result = data.results[0];

      return result;
    })
    .catch((error) => console.error(error));

  return response;
}

export async function getProduct(url: string) {
  const adjustedUrl = new URL(`https://www.walmart.com${url}`);

  const body = {
    source: "universal_ecommerce",

    url: adjustedUrl.toString(),

    Location: "United States",

    parse: true,
  };

  const response = await fetch("https://realtime.oxylabs.io/v1/queries", {
    method: "POST",

    body: JSON.stringify(body),

    headers: {
      "Content-Type": "application/json",

      Authorization:
        "Basic" + Buffer.from(`${username}:${password}`).toString("base64"),
    },

    next: { revalidate: 60 * 60 * 24 },
  })
    .then((res) => res.json())

    .then((data) => {
      if (data.results.length === 0) return;

      const result: ProductContent = data.results[0];

      return result;
    })
    .catch((error) => console.error(error));

  return response;
}

export function getCartTotal(products: Product[]): string {
  const sum = products.reduce(
    (acc: number, currentProduct: Product) => acc + currentProduct.price,
    0
  );

  return `${products[0]?.currency && products[0]?.currency} ${sum?.toFixed(
    2
  )} `;
}

export function groupItemsBySKU(
  products: Product[]
): Record<string, Product[]> {
  return products?.reduce(
    (acc: Record<string, Product[]>, currentProduct: Product) => {
      const sku = currentProduct.meta.sku;

      if (!acc[sku]) {
        acc[sku] = [];
      }

      acc[sku].push(currentProduct);

      return acc;
    },
    {}
  );
}

export const adjustedPrice = () => {};

export const currency: Currency = "$";

export const LoadingSpinner = () => {};
