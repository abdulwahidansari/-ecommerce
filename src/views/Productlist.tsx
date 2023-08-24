import Productcard from "@/components/Productcard";
import React from "react";
import p1 from "/public/p1.webp";
import { products } from "@/utils/mock";
import { StaticImageData } from "next/image";

const Productlist = () => {
  const productChecks = products.slice(0, 3 );
  return (
    <div className="flex justify-evenly mt-16">
      {productChecks.map((Product) => (
        <
        Productcard key={Product.id} 
        title={Product.Name} 
        price={Product.price} 
        img={Product.image as StaticImageData}
        category={Product.category} />
      ))}
    </div>
  );
};

export default Productlist;
