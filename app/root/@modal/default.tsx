// import {useCartStore} from "@/store/cartStore"

function Default() {
  // const cart = useCartStore((state) => state.cart)

  return (
    <div className="flex flex-col w-full">
      {/* {Array.fill(cart.length).map((i, _) => ( */}

      <div
        // key={i}
        className="flex space-x-2"
      >
        <div className="rounded-full flex-shrink-0 h-16 w-16 ring-4 ring-gray-500 animate-spin shadow-lg" />

        <div className="animate-pulse flex-grow h-16 w-full rounded-xl" />
      </div>

      {/* ) )}  */}
    </div>
  );
}
export default Default;
