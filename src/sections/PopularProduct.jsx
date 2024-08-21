import React from "react";
import { products } from "../constants";
import { star } from "../assets/icons";

const Prodect = () => {
  return (
    <section id="products" className=" max-container max-sm:mt-12 lg:ml-2">
      <div className=" flex flex-col justify-center gap-5">
        <h2 className="font-palanquin text-4xl font-bold"> Our <span className="text-coral-red">Popular</span>  Products</h2>
        <p className="lg:max-w-lg font-montserrat text-slate-gray">Immerse yourself in unparalleled quality and style with our premium selections. Explore a realm of comfort, cutting-edge design, and exceptional value.</p>
        <div className="mt-16 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-14 sm:gap-1">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col flex-1  w-full max-sm:w-full gap-2">
              <img src={product.imgURL} alt="error" className=" w-[280px] h-[280px]" />
              <div className="flex mt-3 justify-start gap-5">
                <img src={star} alt="star" width={24} height={24} />
                <p className="font-montserrat text-xl leading-normal text-slate-gray ">4.5</p>
              </div>
              <h3 className="font-palanquin text-2xl leading-normal font-bold">{product.name}</h3>
              <p  className="font-montserrat text-coral-red font-semibold ">{product.price}</p>
            </div>
          ))}
        </div>
        </div>
    </section>
  ); 
};

export default Prodect;
