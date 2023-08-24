import { products } from "@/utils/mock";
import Productcard from "@/components/Productcard";
import { StaticImageData } from "next/image";

const Allproducts = () => {
  return(

  <div className="flex justify-evenly mt-16">
    {products.map((Product) => (
      <Productcard
        key={Product.id}
        title={Product.Name}
        price={Product.price}
        img={Product.image as StaticImageData}
        category={Product.category}
      />
    ))}
  </div>
  );
};
export default Allproducts;
