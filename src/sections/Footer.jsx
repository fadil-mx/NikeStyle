import React from "react";
import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, products, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="flex gap-[5%]  max-md:flex-col max-md:gap-16  ">
      <div>
        <img src={footerLogo} alt="footer logo" width={150} height={46} />
        <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
          Get shoes ready for the new term at your nearest Nike store. Find Your
          perfect Size In Store. Get Rewards
        </p>
        <div className="flex justify-start gap-4">
          {socialMedia.map((icons, index) => {
            return (
              <div key={index} className="mt-2">
                <img
                  src={icons.src}
                  alt={icons.alt}
                  width={28}
                  height={24}
                  className="bg-white rounded-full p-1"
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-white'>
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray'
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
    </footer>
  );
};

export default Footer;
