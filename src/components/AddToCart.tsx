import type { ClickProps } from "../interface";
import deleteIcon from "/assets/icon-remove-item.svg";
import emptyCart from "/assets/illustration-empty-cart.svg";
const AddToCart = ({ items, onItemDelete }: ClickProps) => {
  return (
    <div className="bg-white rounded-md shadow-xs h-fit px-4 py-8">
      <h2 className="text-md sm:text-lg md:text-xl font-bold text-red-700 mb-4 md:mb-8">
        Your Cart ({items?.length})
      </h2>

      {items?.length === 0 ? (
        <div className="flex flex-col items-center justify-center">
          <img src={emptyCart} alt="empty cart" className="mb-4" />
          <p>Your added items will appear here</p>
        </div>
      ) : (
        items?.map((item) => (
          <div className="flex-v-center justify-between" key={item.id}>
            <div className="flex flex-col space-y-2">
              <p>{item.name}</p>
              <div className="flex gap-x-2">
                <p className="text-sm">2x</p>
                <p className="text-sm">@ $7.00</p>
                <p className="text-sm">$14.00</p>
              </div>
            </div>
            <div
              className="h-5 w-5 flex items-center justify-center rounded-full border border-gray-500/30 cursor-pointer"
              onClick={() => onItemDelete?.(item.id ?? 0)}
            >
              <img src={deleteIcon} alt="I am a delete icon" />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AddToCart;
