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
      heading: "Expert Educational Consultancy ",
      description:
        "We boost academic achievement with our specialized consultancy services for schools and individual learners.Tailored for schools and learners, our expertise boosts educational outcomes and institutional efficiency.",
    },
    {
      icon: <BsChatSquareQuoteFill />,
      heading: "Advanced IT & ITes Solutions",
      description:
        "Stay ahead in the digital era with our cutting-edge IT services and solutions. We provide robust tech support, innovative software solutions, and strategic IT consulting to drive your business forward.",
    },
    {
      icon: <AiFillProduct />,
      heading: "Unlock Your Potential with DMIT",
      description:
        "Discover your unique strengths and potential through our DMIT services. By analyzing fingerprint patterns, we provide personalized insights into your multiple intelligences and career suitability.",
    },
    {
      icon: <RiFireFill/>,
      heading: "Empowering Women for Success",
      description:
        "Engage with our initiatives dedicated to advancing women's rights and opportunities. Access our resources, training, and support to empower women to achieve personal and professional success.",
    },
    {
      icon: <FaLightbulb />,
      heading: "NEET and JEE Guidance",
      description:
        "Prepare for the NEET & JEE with confidence using our comprehensive resources and expert guidance. We offer study materials, practice tests, and strategic insights to help you excel in the entrance exam.",
    },
    {
      icon: <RiBuilding2Fill />,
      heading: "Talent Development Programs",
      description:
        "Unlock and nurture young talents with our specialized programs designed to initiate, accelerate, and enhance their skills and potential.We offer cutting-edge resources and strategies.",
    },
  ];

  return (
    <>
      <div className="mx-auto flex flex-col justify-center items-center bg-[rgba(248,248,248)]  lg:px-20 px-8 gap-5 py-10 pb-20">
            <h2 className="lg:text-5xl text-3xl font-bold text-primary border-b-2 border-secondary pt-10 pb-3 text-center"data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="300">Thinks You Get </h2>
        <div className="w-full min-h-[250px] grid grid-cols-1 lg:px-10  md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10 ">
          {Benefits.map((ben, index) => (
            <div
              key={index}
              className="flex flex-col  justify-center items-center text-center border-2 border-primary  rounded-xl lg:py-8 lg:px-10 py-7 px-5 bg-white text-gray-700 shadow-lg hover:scale-[1.1] hover:shadow-xl transform transition-all duration-300"
              data-aos="fade-down"
          data-aos-duration="800"
          data-aos-delay="300"
            >
              <h1 className="lg:text-5xl text-3xl  text-secondary mb-5">{ben.icon}</h1>
              <h1 className="lg:text-2xl text-xl font-bold mb-4 tracking-wider text-darkred">{ben.heading}</h1>
              <h1 className="lg:text-base text-sm  text-gray-500 tracking-wider leading-normal">{ben.description}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Homebenefits;
