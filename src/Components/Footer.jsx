import React from "react";
import sta from "../assets/HomeImages/STA.png";
import { FaPhone } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { PiPhoneCallFill } from "react-icons/pi";

const Footer = () => {
  const data = [
    {
      icon: <IoLogoWhatsapp />,
      link: "",
    },
    {
      icon: <FaFacebook />,
      link: "",
    },
    {
      icon: <RiInstagramFill />,
      link: "",
    },
    {
      icon: <PiPhoneCallFill />,
      link: "/contact",
    },
  ];
  return (
    <>
      <div className="w-full min-h-auto bg-primary flex flex-col justify-center items-center pt-10 p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 border-[1px] lg:px-5 py-5 md:p-10 lg:gap-10 text-white rounded-lg">
          <div className="flex-shrink-0 font-sen tracking-wider px-10">
            <img
              src={sta}
              alt="Logo"
              className="h-auto w-[150px] lg:h-20 lg:w-80  text-center bg-white p-2 hover:scale-[1.1] transform transition-all"
            />
            <p className="py-4 text-sm lg:text-base text-center">
              Our mission is to provide top-quality education and support to
              help you achieve your academic and professional goals.
            </p>
          </div>
          <div className="px-5 lg:px-0 text-sm">
            <h2 className="lg:text-2xl text-xl text-center lg:mb-5 mb-3  text-secondary">
              Get in Touch
            </h2>
            <div className=" lg:px-5 flex flex-col justify-center items-center">
              <p className="flex gap-3 lg:text-base ">

                9876543110
              </p>
              <p className="flex gap-3 py-3 lg:text-base">
              
                Email@Example.com
              </p>
              <p className="flex gap-3 lg:text-base text-center">
           
                134/3 sakthi kalyana mandabam, Palani-624601.
              </p>
            </div>
          </div>
          <div>
            <h2 className="lg:text-2xl text-xl text-secondary lg:mb-5 mb-3 text-center tracking-wider">
              Quick Links
            </h2>
            <div
              className="flex flex-row lg:flex-col justify-center items-center  px-16 lg:px-0 lg:gap-5 gap-2 lg:text-base py-6 lg:py-0 text-white tracking-wider text-sm"
             
            >
              <p className="border-b-2 border-transparent hover:border-b-2 hover:border-secondary hover:font-medium">
                <a href="/">Home</a>
              </p>
              <p className="border-b-2 border-transparent hover:border-b-2 hover:border-secondary hover:font-medium">
                <a href="/about">About</a>
              </p>
              <p className="border-b-2 border-transparent hover:border-b-2 hover:border-secondary hover:font-medium">
                <a href="/services">Services</a>
              </p>
              <p className="border-b-2 border-transparent hover:border-b-2 hover:border-secondary hover:font-medium">
                <a href="/contact">Contact</a>
              </p>
            </div>
          </div>
          <div>
            <h2 className="lg:text-2xl text-xl lg:mb-5 text-center tracking-wider mb-3 text-secondary">
              Social Media
            </h2>
            <div className="flex flex-wrap lg:flex-col justify-center">
              {data.map((icon1, index) => (
                <div
                  key={index}
                  className=" flex justify-center items-center text-white lg:px-5 px-4 py-2"
                >
                  <h2
                    className="lg:text-3xl text-lg lg:mb-2 font-bold tracking-wider text-white hover:text-red hover:bg-white transform transition-all duration-500 hover:-translate-y-1 hover:duration-300 rounded-lg p-[0.5]"
                    style={{ textShadow: "0px 2px 1px rgba(255,255,255,0.7)" }}
                  >
                    <a href={icon1.link}>{icon1.icon}</a>
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  flex flex-col lg:flex-row lg:justify-between text-center bg-primary lg:px-20 px-3 py-3 border-t-2 border-white text-white text-xs tracking-wider lg:text-base">
        <p className="mb-1">All rights reserved 2024.</p>
        <p>
          Created by{" "}
          <span className="border-b-2 border-primary hover:border-secondary lg:text-base text-xs">
            <a href="https://sdstechzone.in/">SDS Technologies.</a>
          </span>
        </p>
      </div>
    </>
  );
};

export default Footer;
