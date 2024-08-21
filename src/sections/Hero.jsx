import React, { useEffect } from "react";
import { arrowRight } from "../assets/icons";
import { statistics, shoes } from "../constants";
import { bigShoe1 } from "../assets/images";

const Hero = () => {
const [ Bigshoeimg, setBigShoeImg] = React.useState(bigShoe1);

useEffect(() => {console.log(Bigshoeimg);
},[setBigShoeImg]);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center 
   min-h-screen gap-10 max-container  "
    >
      <div
        className="relative xl:w-2/5 flex flex-col justify-center items-start
       w-full max-xl:padding-x pt-28"
      >
        <p className="text-xl text-coral-red font-montserrat">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 ">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike </span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-11 mb-14 sm:max-w-sm">
          Discover stylish nike arrivels.quality comfort,and innovation for your
          active life
        </p>
        <button
          className="bg-coral-red flex justify-center gap-2 px-7 py-3 rounded-full border-coral-red
        text-white leading-none items-center border font-montserrat font-bold"
        >
          Shop Now
          <img className="ml-2 rounded-full w-5 h-5" src={arrowRight} />
        </button>
        <div className="flex justify-start items-start flex-wrap w-ful  mt-10   gap-16">
          {statistics.map((items, index) => (
            <div key={index} className="">
              <p className="font-bold text-4xl font-palanquin">{items.value}</p>
              <p className="leading-7  font-montserrat text-slate-gray ">
                {items.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="realtive flex-1  flex justify-center items-center xl:min-h-screen
      max-lg:py-40 bg-primary bg-hero bg-cover bg-center"
      >
        <img
          src={Bigshoeimg}
          width={610} 
          height={500}
          className="object-contain relative z-10"
          alt="shoe"
        />
        <div className="flex sm:gap-6 gap-4 absolute top-[14%] max-lg:top-[1550px] max-xl:top-[1240px] sm:px-6">
          {shoes.map((items,index) => (
            <div key={items} onClick={()=>{setBigShoeImg(items.thumbnail)}}  className={`border-2 ${Bigshoeimg === items.thumbnail ? "border-coral-red" : "border-transparent"} rounded-xl cursor-pointer max-sm:flex-1`}>
              <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl">
              <img src={items.thumbnail} alt="error" width={127} height={103} className="object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
