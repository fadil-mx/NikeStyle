import React from 'react';
import  CustomerReviews from './sections/CustomerReviews';
import  Footer from './sections/Footer';
import  Hero from './sections/Hero';
import  PopularProdect from './sections/PopularProduct';
import  Services from './sections/services';
import  SpecialOffers from './sections/SpecialOffers';
import  Subscribe from './sections/Subscribe';
import  SuperQuality from './sections/SuperQuality';
import Navbar from './assets/cpmponents/navbar/Navbar';


export default function App() {
  return (
   <main className='relative'>
    <Navbar/>
    <section className=" xl:padding-l wide:padding-r paddig-b"><Hero/></section>
    <section className="padding"> <PopularProdect/></section>
    <section className="padding"> <SuperQuality/></section>
    <section className="padding-x py-10"> <Services/></section>
    <section className="padding"> <SpecialOffers/></section>
    <section className="padding bg-pale-blue"> <CustomerReviews/></section>
    <section className="padding-x sm:py-32 py-16 w-full"> <Subscribe/></section>
    <section className="padding-x bg-black padding-x padding-t pb-8 "><Footer/></section>
   </main>
  )
}