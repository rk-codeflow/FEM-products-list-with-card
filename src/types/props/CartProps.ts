import type { CartItem } from "../cart/CartItem";

export interface CartProps {
  items: CartItem[];
  onItemDelete: (id: number) => void;
}
