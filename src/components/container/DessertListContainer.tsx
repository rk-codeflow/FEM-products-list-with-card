import { useEffect, useState } from "react";
import DessertListPresenter from "../presenter/DessertListPresenter";
import type { Dessert } from "../../types/dessert/dessert";
import type { CartItem } from "../../types/cart/CartItem";

const DessertListContainer = () => {
  const [dessert, setDessert] = useState<Dessert[]>([]);
  const [items, setItems] = useState<CartItem[]>([]);
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

  const handleItemAdd = (item: CartItem) => {
    const newItem = {
      id: item.id,
      name: item.name,
      quantity: 1,
    };
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
  };

  const handleItemDelete = (id: number) => {
    const filtered = items.filter((item) => item.id !== id);
    setItems(filtered);
  };
  return (
    <DessertListPresenter
      desserts={dessert}
      handleItemAdd={handleItemAdd}
      handleItemDelete={handleItemDelete}
      items={items}
    />
  );
};

export default DessertListContainer;
