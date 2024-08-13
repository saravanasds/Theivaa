import React from "react";
import { PiShareNetworkFill } from "react-icons/pi";
import { AiFillProduct } from "react-icons/ai";
import { RiFireFill } from "react-icons/ri";
import { FaLightbulb } from "react-icons/fa6";
import { BsChatSquareQuoteFill } from "react-icons/bs";
import { RiBuilding2Fill } from "react-icons/ri";

const Homebenefits = () => {
  const Benefits = [
    {
      icon: <PiShareNetworkFill/>,
      heading: "Creative Support",
      description:
        "We transform brands, grow businesses, and tell brand and product stories in a most creative way.",
    },
    {
      icon: <BsChatSquareQuoteFill />,
      heading: "Creating Experiences",
      description:
        "We cover a large range of creative platforms and digital projects with one purpose: to create experiences.",
    },
    {
      icon: <AiFillProduct />,
      heading: "Product Consulting",
      description:
        "We guide you through the pipelines that generate new products with higher potential and lower risk.",
    },
    {
      icon: <RiFireFill/>,
      heading: "Business Boosting",
      description:
        "We provide energy-efficient and environmentally conservative solutions to our clients to boost their business.",
    },
    {
      icon: <FaLightbulb />,
      heading: "Strategic Approach",
      description:
        "Based on solid strategic framework and real, relevant research, we create prototypes, not presentations.",
    },
    {
      icon: <RiBuilding2Fill />,
      heading: "Logistic Consulting",
      description:
        "We work buy side and sell side to give our clienrts hard hitting answers and focus hard on best opportunities.",
    },
  ];

  return (
    <>
      <div className=" mx-auto flex flex-col justify-center items-center bg-[rgba(248,248,248)]  px-20  gap-5 py-10 pb-20">
            <h2 className="lg:text-5xl text-3xl font-bold text-primary border-b-2 border-secondary pt-10 pb-5">Thinks You Get </h2>
        <div className="w-full h-auto grid grid-cols-1 lg:px-10  md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10 ">
          {Benefits.map((ben, index) => (
            <div
              key={index}
              className="flex flex-col  justify-center items-center text-center border-2 border-primary  rounded-xl py-8 px-10 bg-white text-gray-700 shadow-lg hover:scale-[1.1] hover:shadow-xl transform transition-all duration-300"
            >
              <h1 className="text-5xl  text-secondary mb-5">{ben.icon}</h1>
              <h1 className="text-2xl font-bold mb-4 tracking-wider text-primary">{ben.heading}</h1>
              <h1 className="text-medium tracking-wider">{ben.description}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Homebenefits;
