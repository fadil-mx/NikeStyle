import React from 'react'
import {reviews} from '../constants' 
import { star } from "../assets/icons";

const CustomerReviews = () => {
  return (
    <div className='max-container '>

      <h2 className="font-palanquin capitalize text-4xl font-bold text-center">
          What Our <span className="text-coral-red"> Customer </span>
           Says?
        </h2>
        <p className=" m-auto mt-4 max-w-lg  text-center info-text">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
        </p>
     
      <div className='flex items-center justify-center max-sm:flex-col  max-sm:gap-32 gap-[19%] mt-20'>
        {reviews.map((review, index) => {
          return(
            <div key={index} className='flex justify-center flex-col items-center' >
              <img src={review.imgURL} alt="images" width={100} height={200} className='rounded-full'/>
              <p className=" mt-6 max-w-sm text-center info-text">{review.feedback}</p>
              <div className="flex mt-3 justify-between gap-5">
                <img src={star} alt="star" width={24} height={24} />
                <p className="font-montserrat text-xl leading-normal text-slate-gray ">4.5</p>
              </div>
              <h2 className='font-bold text-lg mt-2'>{review.customerName}</h2>
            </div>

          )
        })}
      </div>
    </div>
  )
}

export default CustomerReviews
