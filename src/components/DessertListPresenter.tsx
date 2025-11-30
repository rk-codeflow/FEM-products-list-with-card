import AddToCart from "./AddToCart";
import type { DessertCardProps } from "../interface";
import Card from "./Card";
const DessertListPresenter = ({ desserts }: DessertCardProps) => {
  return (
    <div className="grid lg:grid-cols-[2fr_1fr] gap-y-6 gap-x-8">
      <div className="">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Desserts</h2>
        <Card desserts={desserts} />
      </div>
      <AddToCart />
    </div>
  );
};

export default DessertListPresenter;
