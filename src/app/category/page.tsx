import { products } from "@/utils/mock";
import Productcard from "@/components/Productcard";
import { StaticImageData } from "next/image";

const getProductsbyCategory =(category: string) => {

    
};


export default function Page ({params}: {params : {slug: string}}){
    return <div> My category: {params.slug}
    </div>;
}