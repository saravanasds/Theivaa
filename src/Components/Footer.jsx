import React from "react";
import sta from "../assets/HomeImages/STA.png";
import { FaPhone } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <div className="w-full min-h-auto bg-primary text-white flex flex-col justify-center items-center pt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-20 lg:px-20 md:p-10 lg:py-8 gap-10">
          <div className="flex-shrink-0 font-sen tracking-wider px-10">
            <img
              src={sta}
              alt="Logo"
              className="h-auto w-[200px] lg:w-[250px] bg-white p-3 hover:scale-[1.1] transform transition-all"
            />
            <p className="py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae veniam perferendis optio accusantium quis repellendus quos illum ipsa autem tenetur.
            </p>
            <div className=""><IoLogoWhatsapp className="text-5xl rounded-full p-2 bg-white text-primary  border-2  border-secondary hover:text-secondary hover:border-primary"/></div>
       
          </div>
          <address className="px-10 lg:px-0">
            <h2 className="text-2xl font-semidold mb-8 text-center hover:text-secondary">Get in Touch</h2>
              <p className="flex gap-3 ">
                <FaPhone className=" text-secondary mt-1 "/>
                9876543110
              </p>
              <p className="flex gap-3 py-3">
                <IoMdMail className=" text-secondary  mt-1 "/>
                Email@Example.com
              </p>
              <p className="flex gap-3 ">
                <MdLocationPin className=" text-secondary  mt-1 "/>
                134/3 sakthi kalyana mandabam, Palani-624601.
              </p>
            </address>
            <div>
            <h2 className="text-2xl font-semidold mb-5 text-center hover:text-secondary ">Quick Links</h2>
          <div
            className="flex flex-row lg:flex-col justify-center items-center gap-5 lg:text-lg py-6 lg:py-0 text-white tracking-wider "
            // style={{ textShadow: "0px 0px 2px rgba(0,0,0,0.7)" }}
          >
          
            <p className="border-b-2 border-primary hover:border-b-2 hover:border-secondary">
              <a href="/">Home</a>
            </p>
            <p className="border-b-2 border-primary hover:border-b-2 hover:border-secondary">
              <a href="/about">About</a>
            </p>
            <p className="border-b-2 border-primary hover:border-b-2 hover:border-secondary">
              <a href="/services">Services</a>
            </p>
            <p className="border-b-2 border-primary hover:border-b-2 hover:border-secondary">
              <a href="/contact">Contact</a>
            </p>
          </div>
            </div>
        </div>
        <div className="w-full  flex justify-between lg:px-20 px-5 py-3 border-t-2 border-white">
          <p>All rights reserved 2024.</p>
          <p>
            Created by{" "}
            <span className="border-b-2 border-primary hover:border-secondary">
              <a href="">SDS Technologies.</a>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
