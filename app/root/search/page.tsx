import { getSearch } from "@/utils/constants";

type SearchProps = {
  searchParams: { q: string };
};

async function SearchPage({ searchParams: { q } }: SearchProps) {
  const results = await getSearch(q);

  return (
    <div className="p-15">
      <h1 className="text-4xl mb-2"> Showing results for {q} </h1>

      <h2 className="mb-5 text-gray-500">
        {results?.content.total_results} results{" "}
      </h2>

      <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5">
        {results?.content.organic.map((result) => (
          <li key={result.product_id}>
            <Product product={result} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchPage;
