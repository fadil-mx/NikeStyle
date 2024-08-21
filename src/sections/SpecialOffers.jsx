import React from "react";
import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";

const SpecialOffers = () => {
  return (
    <section className="flex items-center justify-between max-xl:flex-col max-container gap-8">
      <div>
        <img src={offer} alt="offer" width={776} height={687} />
      </div>

      <div className="flex flex-1  flex-col gap-8 ">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          <span className="text-coral-red"> Special</span> Offer
        </h2>
        <p className="mt-4 info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6 info-text">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="flex gap-5 ">
          <button
            className="bg-coral-red flex justify-center gap-2 px-7 py-3 rounded-full border-coral-red
        text-white leading-none items-center border font-montserrat font-bold"
          >
            Shop Now
            <img className="ml-2 rounded-full w-5 h-5" src={arrowRight} />
          </button>
          <button className=" border-slate-500 border-2 px-7 py-3 rounded-full bg-transparent text-slate-600">Learn more</button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
