import { useEffect, useState } from "react";
import DessertListPresenter from "./DessertListPresenter";
import type { CartItemProps, DessertListProps } from "../interface";

const DessertListContainer = () => {
  const [dessert, setDessert] = useState<DessertListProps[]>([]);
  const [items, setItems] = useState<CartItemProps[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchLists = async () => {
    try {
      setLoading(true);
      const res = await fetch("/data/products.json");
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const lists = await res.json();
      console.log({ lists });
      setDessert(lists);
    } catch (error) {
      console.log("Error displaying data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLists();
  }, []);

  const handleItemAdd = (item: CartItemProps) => {
    const newItem = {
      id: item.id,
      name: item.name,
    };
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    console.log({ updatedItems });
  };

  return (
    <DessertListPresenter
      desserts={dessert}
      handleItemAdd={handleItemAdd}
      items={items}
    />
  );
};

export default DessertListContainer;
