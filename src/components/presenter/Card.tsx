import addToCart from "/assets/icon-add-to-cart.svg";
import increment from "/assets/icon-increment-quantity.svg";
import decrement from "/assets/icon-decrement-quantity.svg";
import type { CardProps } from "../../types/props/CardProps";

const Card = ({ desserts, onItemAdd }: CardProps) => {
  return (
    <div className="grid sm:grid-cols-3 gap-y-6 gap-x-3">
      {desserts?.map((dessert) => {
        const { id, name, category, price, image } = dessert;
        return (
          <div key={id}>
            <img src={image.desktop} alt="dessert" className="rounded-lg" />
            <div className="flex-h-center relative -top-5">
              <button
                className="cart-btn bg-white cursor-pointer"
                onClick={() => onItemAdd?.(dessert)}
              >
                <img src={addToCart} alt="add to cart" /> Add to Cart
              </button>

              <button className="cart-btn justify-between w-full bg-yellow-600">
                <div className="h-4 w-4 rounded-full flex-center border border-white cursor-pointer">
                  <img src={increment} alt="increment" />
                </div>
                <span>1</span>
                <div className="h-4 w-4 rounded-full flex-center border border-white cursor-pointer">
                  <img src={decrement} alt="decrement" />
                </div>
              </button>
            </div>
            <p className="text-xs">{category}</p>
            <p className="text-sm">{name}</p>
            <p className="text-sm">${price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
