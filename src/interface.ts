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

export interface DessertCardProps {
  desserts: DessertListProps[];
  loading?: boolean;
  handleItemAdd: (id: number) => void;
  onItemAdd: () => void;
}

export interface ClickProps {
  desserts: DessertListProps[];
  handleItemAdd?: (id: number) => void;
  onItemAdd?: (id: number) => void;
}
