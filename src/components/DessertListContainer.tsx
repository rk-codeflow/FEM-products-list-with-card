import { useEffect, useState } from "react";
import DessertListPresenter from "./DessertListPresenter";
import type { DessertListProps } from "../interface";

const DessertListContainer = () => {
  const [dessert, setDessert] = useState<DessertListProps[]>([]);
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

  const handleItemAdd = (id: number) => {
    console.log("item clicked", id);
  };

  return (
    <DessertListPresenter desserts={dessert} handleItemAdd={handleItemAdd} />
  );
};

export default DessertListContainer;
