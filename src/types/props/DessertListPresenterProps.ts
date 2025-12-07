import type { CartItem } from "../cart/CartItem";
import type { Dessert } from "../dessert/dessert";

export interface DessertListPresenterProps {
  desserts: Dessert[];
  items: CartItem[];
  handleItemAdd: (dessert: Dessert) => void;
  handleItemDelete: (id: number) => void;
}
