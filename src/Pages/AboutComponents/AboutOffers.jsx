import React from "react";
import { MdEmojiObjects } from "react-icons/md";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FaLaptop } from "react-icons/fa";
import { TbFileCertificate } from "react-icons/tb";
import { SiKnowledgebase } from "react-icons/si";
import { VscSymbolClass } from "react-icons/vsc";
import Homedu from "../../assets/HomeImages/portrait.jpeg";

const AboutOffers = () => {
  const offers = [
    {
      icon: <MdEmojiObjects />,
      heading: "Faster Performance",
      description: "We develop a systematic well-ordered process of analysis",
    },
    {
      icon: <LiaChalkboardTeacherSolid />,
      heading: "Faster Performance",
      description: "We develop a systematic well-ordered process of analysis.",
    },
    {
      icon: <FaLaptop />,
      heading: "Faster Performance",
      description: "We develop a systematic well-ordered process of analysis",
    },
    {
      icon: <TbFileCertificate />,
      heading: "Faster Performance",
      description: "We develop a systematic well-ordered process of analysis",
    },
    {
      icon: <SiKnowledgebase />,
      heading: "Faster Performance",
      description: "We develop a systematic well-ordered process of analysis",
    },
    {
      icon: <VscSymbolClass />,
      heading: "Faster Performance",
      description: "We develop a systematic well-ordered process of analysis",
    },
  ];
  return (
    <>
      <div className="container mx-auto w-full h-auto py-20">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary text-center border-b-2 border-secondary pb-5">What we Offer</h2>

        <div className="flex flex-col lg:flex-row gap-5 order-2 lg:order-1">
          <div className="lg:w-[50%] w-full  h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-10  py-10">
            {offers.map((offers, index) => (
              <div
                key={index}
                className="flex justify-center items-center w-full text-center py-3  text-gray-700 shadow-lg hover:shadow-xl transform transition-all gap-5 lg:px-5 md:px-5 px-5 border-2 border-white hover:border-2 hover:border-primary rounded-xl"
              >
                <h1 className="text-5xl text-secondary mb-5 flex">
                  {offers.icon}
                </h1>
                <div>
                  <h1 className="text-xl font-bold mb-4 tracking-wider text-primary">
                    {offers.heading}
                  </h1>
                  <h1 className="text-medium tracking-wider">
                    {offers.description}
                  </h1>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:w-[50%] w-full h-auto p-10 order-1 lg:order-2">
            <img src={Homedu} alt="" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutOffers;
