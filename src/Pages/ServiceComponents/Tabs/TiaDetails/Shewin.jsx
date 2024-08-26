import React from "react";
import she from "../../../../assets/HomeImages/she.jpeg";

const Shewin = () => {
  return (
    <>
      <div className="border-b-2 border-primary py-10 px-10">
        <div className="flex justify-center items-center pb-10 "data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200">
          <p className="lg:w-1/2 px-5 h-auto text-center lg:text-lg text-sm text-primary tracking-wider">
            SHEWIN connects women across careers, offering mentorship and
            support. Founded by Dr. Sheeba Joseph, it helps women overcome
            gender disparities and turn their dreams into reality. We provide
            training and ongoing support for various business ventures.
          </p>
        </div>

        <div className="flex lg:flex-row flex-col justify-center gap-10">
          <img src={she} alt="" className="lg:w-1/2 lg:h-96" data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="200"/>
          <p className="lg:w-1/2 lg:h-auto lg:text-base text-sm text-gray-700 tracking-wider py-5"data-aos="fade-left"
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
        </div>
      </div>
    </>
  );
};

export default Shewin;
