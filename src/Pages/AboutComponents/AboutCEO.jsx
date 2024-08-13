import React from "react";
import girl from "../../assets/HomeImages/girl3.jpg";

const AboutCEO = () => {
  return (
    <>
      <div className="container mx-auto w-full h-auto flex flex-col lg:flex-row justify-center items-center lg:py-20 py-10">
        <div className="w-[80%] h-auto flex flex-col lg:flex-row md:flex-row justify-center items-center ">
          <div className="lg:w-[40%] w-full h-auto ">
            <img
              src={girl}
              alt=""
              className="w-full lg:h-[500px] h-[250px] rounded-sm"
            />
          </div>
          <div className="lg:w-[60%] w-full h-auto flex flex-col justify-center items-center lg:text-start text-center lg:items-start lg:px-10 pt-10 lg:pt-0">
          <h3 className="lg:text-3xl text-xl font-bold text-secondary lg:mb-5 mb-3">Mr.Jeganathan</h3>
            <h2 className="lg:text-xl text-base font-semibold text-primary lg:mb-5 mb-3 tracking-wider">CEO of Theivaa Academy</h2>
            <p className="lg:text-lg text-sm  text-gray-500 mb-3 tracking-wider leading-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. ipsum
              dolor sit amet consectetur adipisicing elitEius, a.Lorem ipsum dolor sit amet consectetur adipisicing elit. ipsum
              dolor sit amet consectetur adipisicing elitEius, a.
            </p>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCEO;
