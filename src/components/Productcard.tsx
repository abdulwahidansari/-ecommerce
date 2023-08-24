import p1 from "/public/p1.webp";
import Image, { StaticImageData } from "next/image";
import React from "react";
import fc from "react";
// import AddToCart from './AddToCart';

function Productcard(props: {
  title: string;
  price: number;
  category: string;
  img: StaticImageData;
}) {
  return (
    <div className="py-5">
      <Image src={props.img} alt="product" />
      <h3 className="mt-3 text-lg font-bold">{props.title}</h3>
      <p className="text-lg font-bold">${props.price}</p>
      <p className="text-lg font-bold">

        Category { " " }
        <span className="text-base font-normal capitalize"> {props.category}{" "}
        </span>
      </p>
      {/* <AddtoCart/> */}
    </div>
  );
}

export default Productcard;
