import React from "react";
import { servicess } from "../constants";

const services = () => {
  return (
    <section className="max-container flex justify-between gap-9 max-sm:flex-col">
      {servicess.map((service, index) => {
        return (
          <div
            key={index}
            className="flex-1  w-full rounded-[20px] shadow-3xl px-10 py-16"
          >
            <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
              <img src={service.imgURL} alt="service" width={24} height={24} />
            </div>
            <h1 className="mt-5 font-bold text-2xl font-palanquin">
              {service.label}
            </h1>
            <p className="font-montserrat text-gray-500 mt-5 break-words text-lg">
              {service.subtext}
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default services;
