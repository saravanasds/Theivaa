import React from "react";
import sta from "../assets/HomeImages/STA.png";
import { FaPhone } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { PiPhoneCallFill } from "react-icons/pi";
import bgblack1 from "../assets/HomeImages/bgblack1.jpg";

const Footer = () => {
  const data = [
    {
      icon: <IoLogoWhatsapp />,
      link: "https://wa.me/919843070216?text=Hello%20Sir,%20I%20am%20interested%20in%20your%20service",
      target:"_blank"
    },

    {
      icon: <RiInstagramFill />,
      link: "https://www.instagram.com/_shree_theivaa_academy?igsh=MWtiYjJiM3NtM2Mwcw==",
      target:"_blank"
    },
    {
      icon: <FaFacebook />,
      link: "https://www.facebook.com/share/6wFB8QicjNrfhTpu/?mibextid=qi2Omg",
      target:"_blank"
    },
    {
      icon: <PiPhoneCallFill />,
      link: "/contact",
      target:"_self"
    },
  ];
  return (
    <>
      <div
        className="w-full lg:h-[450px] flex flex-col justify-center items-center p-10 "
        style={{
          backgroundImage: `url(${bgblack1})`,
          backgroundPositions: "bottom",
          backgroundSize: "cover",
        }}
      >
        {" "}
        <div className="w-full  bg-opacity-10 backdrop-blur-[1px] text-center pt-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 border-[1px] lg:px-5 py-5 md:p-10 lg:gap-10 text-white rounded-lg">
          <div className="flex-shrink-0 font-sen tracking-wider px-10 ">
            <img
              src={sta}
              alt="Logo"
              className="h-auto w-[250px] lg:h-20 lg:w-[500px]  text-center  p-2 hover:scale-[1.1] transform transition-all cursor-pointer "
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
              <p className="flex gap-3 lg:text-base ">98430 70216</p>
              <p className="flex gap-3 py-3 lg:text-base">technoschoolpalani@gmail.com</p>
              <p className="flex gap-3 lg:text-base text-center">
                134/3 sakthi kalyana mandabam, Palani-624601.
              </p>
            </div>
          </div>
          <div>
            <h2 className="lg:text-2xl text-xl text-secondary lg:mb-5 mb-3 text-center tracking-wider">
              Quick Links
            </h2>
            <div className="flex flex-row lg:flex-col justify-center items-center  px-16 lg:px-0 lg:gap-5 gap-2 lg:text-base  lg:py-0 text-white tracking-wider text-sm">
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
            <div className="grid lg:grid-cols-2 grid-cols-4 gap-4 px-16 ">
              {data.map((icon1, index) => (
                <div
                  key={index}
                  className=" flex justify-center items-center text-white  py-2"
                >
                  <h2
                    className="lg:text-4xl text-lg lg:mb-2 font-bold tracking-wider text-white hover:text-red hover:bg-white transform transition-all duration-500 hover:-translate-y-1 hover:duration-300 rounded-lg p-[0.5]"
                    style={{ textShadow: "0px 2px 1px rgba(255,255,255,0.7)" }}
                  >
                    <a href={icon1.link} target={icon1.target}>{icon1.icon}</a>
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full  flex flex-col lg:flex-row lg:justify-between text-center lg:px-20 px-3  text-white text-xs tracking-wider lg:text-base mt-2">
          <p className="">All rights reserved 2024.</p>
          <p>
            Created by{" "}
            <span className="border-b-2 border-transparent hover:border-secondary lg:text-base text-xs">
              <a href="https://sdstechzone.in/" target="_blank">SDS Technologies.</a>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
