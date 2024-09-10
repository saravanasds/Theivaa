import React from "react";
import she from "../../../../assets/HomeImages/she.jpeg";

const Shewin = () => {
  return (
    <>
      <div className="border-b-2 border-primary py-10 lg:px-10 px-5">
        <div className="flex justify-center items-center lg:pb-10 pb-5 "data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200">
          <p className="lg:w-full px-5 h-auto text-center lg:text-lg text-sm text-primary tracking-wider">
          <span className="text-darkred font-semibold lg:text-lg tracking-wider">TIA-SHEWIN</span> connects women across careers, offering mentorship and
            support. Founded by Dr. Sheeba Joseph, it helps women overcome
            gender disparities and turn their dreams into reality. We provide
            training and ongoing support for various business ventures.
          </p>
        </div>

        <div className="flex lg:flex-row flex-col justify-center lg:gap-8 gap-5">
          <img src={she} alt="" className="lg:w-1/2 lg:h-96  shadow-lg rounded-2xl object-cover" data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="200"/>
          <div>
          <p className="lg:w-full lg:h-auto lg:text-base text-sm text-gray-700 tracking-wider"data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="200">
            SHEWIN is a platform for women to mentor each other, share
            expertise, and achieve personal and professional growth. Founded by
            Dr. Sheeba Joseph, who has a PhD in entrepreneurship, SHEWIN aims to
            address gender disparities and support women in various fields.
            Whether you want to start a bakery, run a Montessori, or become a
            beauty therapist, SHEWIN provides training, support, and ongoing
            updates to help you succeed. Join us to realize your dreams and make
            a difference together.
          </p>
          <div className="w-full lg:text-left text-center"><button className="text-center lg:px-14 px-8 lg:py-3 py-2 lg:text-lg text-sm font-semibold text-white hover:bg-primary bg-red lg:mt-10 rounded-lg transform transition-all duration-300"><a href="https://tiaedu.in/">View More about TIA</a></button></div>
        </div>
          </div>
        
      </div>
    </>
  );
};

export default Shewin;
