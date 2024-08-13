import React from "react";
import girl from "../../assets/HomeImages/girl3.jpg";

const AboutCEO = () => {
  return (
    <>
      <div className="container mx-auto w-full h-auto flex flex-col lg:flex-row justify-center items-center py-20">
        <div className="w-[80%] h-auto flex flex-col lg:flex-row md:flex-row justify-center items-center ">
          <div className="lg:w-[40%] w-full h-auto ">
            <img
              src={girl}
              alt=""
              className="w-full h-[500px] rounded-sm"
            />
          </div>
          <div className="lg:w-[60%] w-full h-auto flex flex-col justify-center items-center lg:text-start text-center lg:items-start px-10 pt-10 lg:pt-0">
          <h3 className="text-3xl font-bold text-secondary mb-5">Mr.Jeganathan</h3>
            <h2 className="text-xl font-semibold text-primary mb-5">CEO of Theivaa Academy</h2>
            <p className="text-lg  text-gray-500 mb-3">
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
