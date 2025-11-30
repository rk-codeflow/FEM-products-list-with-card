import emptyCart from "/assets/illustration-empty-cart.svg";
const AddToCart = () => {
  return (
    <div className="bg-white rounded-md shadow-xs h-fit px-4 py-8">
      <h2 className="text-md sm:text-lg md:text-xl font-bold text-red-700 mb-4 md:mb-8">
        Your Cart (0)
      </h2>
      <div className="flex flex-col items-center justify-center">
        <img src={emptyCart} alt="empty cart" className="mb-4" />
        <p>Your added items will appear here</p>
      </div>
    </div>
  );
};

export default AddToCart;
