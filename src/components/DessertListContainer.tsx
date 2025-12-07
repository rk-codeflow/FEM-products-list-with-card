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
      quantity: 1,
    };
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
  };

  const handleCartItemDelete = (id: number) => {
    const filtered = items.filter((item) => item.id !== id);
    setItems(filtered);
  };
  return (
    <DessertListPresenter
      desserts={dessert}
      handleItemAdd={handleItemAdd}
      handleCartItemDelete={handleCartItemDelete}
      items={items}
    />
  );
};

export default DessertListContainer;
