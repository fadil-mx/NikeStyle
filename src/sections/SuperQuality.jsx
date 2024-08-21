import React from "react";
import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="max-container flex justify-between items-center max-lg:flex-col gap-10 w-full"
    >
      <div className="flex flex-1  flex-col gap-8 ">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          We Provide You <span className="text-coral-red"> Super Quality</span>{" "}
          Shoe
        </h2>
        <p className="lg:max-w-lg font-montserrat text-slate-gray">
          We are committed to providing you with the best quality products. Our
          team of experts ensures that every product is made with the finest
          materials and craftsmanship. We take pride in delivering superior
          quality that you can trust.
        </p>
        <div>
          <button
            className="bg-coral-red flex justify-center gap-2 px-7 py-3 rounded-full border-coral-red
        text-white leading-none items-center border font-montserrat font-bold"
          >
            Shop Now
            <img className="ml-2 rounded-full w-5 h-5" src={arrowRight} />
          </button>
        </div>
      </div>



     <div className='flex-1 flex justify-center items-center'>
        <img
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;
