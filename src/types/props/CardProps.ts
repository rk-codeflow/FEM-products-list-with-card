import type { Dessert } from "../dessert/dessert";

export interface CardProps {
  desserts: Dessert[];
  onItemAdd: (dessert: Dessert) => void;
}
