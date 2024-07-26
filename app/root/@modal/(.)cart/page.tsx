import { Cart } from "@/components";

function CartInterception() {
  return (
    <div className="flex p-20 bg-gray-500/40 backdrop-blur-lg">
      <Cart parallel={true} />
    </div>
  );
}
export default CartInterception;
