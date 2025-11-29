import type { DessertCardProps } from "./interface";
import addToCart from "/assets/icon-add-to-cart.svg";
const DessertListPresenter = ({ desserts, loading }: DessertCardProps) => {
  return (
    <>
      <h2 className="text-md sm:text-3xl font-bold mb-4">Desserts</h2>
      <div className="grid sm:grid-cols-3">
        {desserts.map((dessert) => {
          const { id, name, category, price, image } = dessert;
          return (
            <div className="relative " key={id}>
              <img
                src={image.desktop}
                alt="dessert"
                className="h-40 w-40 rounded"
              />
              <div className="flex-h-center">
                <button className="flex-v-center rounded-lg bg-white text-xs border border-gray-950 p-2 cursor-pointer">
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
    </>
  );
};

export default DessertListPresenter;
