export interface DessertImage {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}
export interface DessertListProps {
  id: number;
  image: DessertImage;
  name: string;
  category: string;
  price: number;
}

export interface CartItemProps {
  id: number;
  name: string;
  price?: number;
  quantity?: number;
  total?: number;
  handleDelete?: () => void;
}
export interface DessertCardProps {
  desserts: DessertListProps[];
  loading?: boolean;
  handleItemAdd: (item: CartItemProps) => void;
  onItemAdd: (item: CartItemProps) => void;
}

export interface ClickProps {
  desserts?: DessertListProps[];
  quantity?: number;
  handleItemAdd?: (item: CartItemProps) => void;
  onItemAdd?: (item: CartItemProps) => void;
  handleCartItemDelete?: (id: number) => void;
  onItemDelete?: (id: number) => void;
  items?: CartItemProps[];
}
