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
      heading: "Certified Teacher",
      description: "Our team of experienced and certified educators is dedicated to providing high-quality instruction and personalized support.",
    },
    {
      icon: <LiaChalkboardTeacherSolid />,
      heading: "Creative Lessons",
      description: "We believe that learning should be both effective and enjoyable.",
    },
    {
      icon: <FaLaptop />,
      heading: "Faster Performance",
      description: "Our curriculum is thoughtfully structured to cover essential topics efficiently.",
    },
    {
      icon: <TbFileCertificate />,
      heading: "Regular Classess",
      description: "For those who prefer a traditional classroom setting, we offer regular in-person classes. ",
    },
    {
      icon: <SiKnowledgebase />,
      heading: "Knowledge Improvement",
      description: " By focusing on core concepts and practical applications.",
    },
    {
      icon: <VscSymbolClass />,
      heading: "Online Class",
      description: "Enjoy the flexibility and convenience of learning from anywhere with our online classes.",
    },
  ];
  return (
    <>
      <div className="container mx-auto w-full h-auto lg:pb-20 py-10"data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="300">
        <h2 className="text-2xl lg:text-4xl font-bold text-primary text-center border-b-2 border-secondary lg:pb-5 pb-3">What we Offer</h2>

        <div className="flex flex-col lg:flex-row gap-5 order-2 lg:order-1">
          <div className="lg:w-[50%] w-full  h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-10  py-10"data-aos="fade-right"
          data-aos-duration="800"
          data-aos-delay="300">
            {offers.map((offers, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row justify-center items-center w-full text-center py-3  text-gray-700 shadow-lg hover:shadow-xl transform transition-all gap-5 lg:px-5 md:px-5 px-5 border-2 border-white hover:border-2 hover:border-primary rounded-xl"
              >
                <h1 className="lg:text-5xl text-4xl text-secondary mb-5 flex">
                  {offers.icon}
                </h1>
                <div>
                  <h1 className="lg:text-xl text-lg font-bold mb-4 tracking-wider text-primary">
                    {offers.heading}
                  </h1>
                  <h1 className="lg:text-base text-sm tracking-wider">
                    {offers.description}
                  </h1>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:w-[50%] w-full h-auto p-10 order-1 lg:order-2"data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="300">
            <img src={Homedu} alt="" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutOffers;
