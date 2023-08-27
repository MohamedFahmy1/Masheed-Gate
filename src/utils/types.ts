import { StaticImageData } from "next/image";

export interface productsData {
  name: string;
  img: StaticImageData;
  price: number;
  availability?: boolean;
}
[];
export interface categories {
  title: string;
  products: {
    name: string;
    imageSrc: string;
  }[];
}
[];
