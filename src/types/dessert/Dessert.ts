interface DessertImage {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
}

export interface Dessert {
  id: number;
  image: DessertImage;
  name: string;
  category: string;
  price: number;
}
