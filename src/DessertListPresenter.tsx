import AddToCart from "./AddToCart";
import type { DessertCardProps } from "./interface";
import addToCart from "/assets/icon-add-to-cart.svg";
const DessertListPresenter = ({ desserts, loading }: DessertCardProps) => {
  return (
    <div className="grid md:grid-cols-[2fr_1fr] gap-y-6 gap-x-8">
      <div className="">
        <h2 className="text-md sm:text-3xl font-bold mb-8">Desserts</h2>
        <div className="grid sm:grid-cols-3 gap-y-6 gap-x-3">
          {desserts.map((dessert) => {
            const { id, name, category, price, image } = dessert;
            return (
              <div key={id}>
                <img src={image.desktop} alt="dessert" className="rounded-lg" />
                <div className="flex-h-center relative -top-5">
                  <button className="flex-v-center rounded-2xl bg-white text-xs border border-gray-950 px-6 py-2 cursor-pointer">
                    <img src={addToCart} alt="add to cart" /> Add to Cart
                  </button>
                </div>
                <p className="text-xs">{category}</p>
                <p className="text-sm">{name}</p>
                <p className="text-sm">${price}</p>
              </div>
            );
          })}
        </div>
      </div>
      <AddToCart />
    </div>
  );
};

export default DessertListPresenter;
