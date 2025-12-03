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
  id?: number;
  name?: string;
  quantity?: number;
  price?: number;
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
  handleItemAdd?: (item: CartItemProps) => void;
  onItemAdd?: (item: CartItemProps) => void;
  items?: CartItemProps[];
}
