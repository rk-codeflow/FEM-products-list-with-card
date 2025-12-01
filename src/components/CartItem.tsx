import deleteIcon from "/assets/icon-remove-item.svg";
const CartItem = () => {
  return (
    <div className="flex-v-center justify-between">
      <div className="flex flex-col space-y-2">
        <p>Item</p>
        <div className="flex gap-x-2">
          <p className="text-sm">2x</p>
          <p className="text-sm">@ $7.00</p>
          <p className="text-sm">$14.00</p>
        </div>
      </div>
      <div className="h-5 w-5 flex items-center justify-center rounded-full border border-gray-500/30 cursor-pointer">
        <img src={deleteIcon} alt="I am a delete icon" />
      </div>
    </div>
  );
};

export default CartItem;
