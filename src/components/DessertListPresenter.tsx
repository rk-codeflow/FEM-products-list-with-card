import AddToCart from "./AddToCart";
import type { ClickProps } from "../interface";
import Card from "./Card";
const DessertListPresenter = ({ desserts, handleItemAdd }: ClickProps) => {
  return (
    <div className="grid lg:grid-cols-[2fr_1fr] gap-y-6 gap-x-8">
      <div className="">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Desserts</h2>
        <Card desserts={desserts} onItemAdd={handleItemAdd} />
      </div>
      <AddToCart />
    </div>
  );
};

export default DessertListPresenter;
