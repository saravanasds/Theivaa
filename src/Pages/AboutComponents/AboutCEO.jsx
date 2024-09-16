import React from "react";
import jeganathan2 from "../../assets/HomeImages/jeganathan2.jpeg";

const AboutCEO = () => {
  return (
    <>
      <div className="container mx-auto w-full h-auto flex flex-col lg:flex-row justify-center items-center lg:py-20 py-10">
        <div className="w-[80%] h-auto flex flex-col lg:flex-row md:flex-row justify-center items-center">
          <div className="lg:w-[40%] w-full h-auto"data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="300">
            <img
              src={jeganathan2}
              alt=""
              className="w-full lg:h-[500px] h-[350px] rounded-xl shadow-lg object-cover"
            />
          </div>
           <div className="lg:w-[60%] w-full h-auto flex flex-col justify-center items-center lg:text-start text-center lg:items-start lg:px-10 pt-10 lg:pt-0"data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="300">
          <h3 className="lg:text-3xl text-xl font-bold text-darkred lg:mb-5 mb-3 uppercase">Mr.Jeganathan</h3>
            <h2 className="lg:text-xl text-base font-semibold text-primary lg:mb-5 mb-3 tracking-wider">CEO of Shree Theivaa Academy</h2>
            <p className="lg:text-lg text-sm  text-gray-500 mb-3 tracking-wider leading-normal">
            As the Chief Executive Officer of Shree Theivaa Academy, Mr.Jeganathan is dedicated to steering our institution towards excellence and innovation in education. With a vision rooted in fostering academic growth and personal development, Mr.Jeganathan leads with a commitment to enhancing the learning experience for students and advancing our institution's mission.
            </p>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCEO;
