import { StaticImageData } from "next/image";

export type Product = {
   id: number;
   price: number;
   Name: string;
   category: string;
   image: string | StaticImageData;




};