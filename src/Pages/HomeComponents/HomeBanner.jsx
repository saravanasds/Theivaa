import React from "react";
import building from "../../assets/HomeImages/bgmen1.jpeg";
import { TiTick } from "react-icons/ti";


const HomeBanner = () => {
  const banner = [
    { heading: "52+", para: "Certified Teachers" },
    { heading: "164+", para: "Trained Experts" },
    { heading: "38+", para: "Branches" },
    { heading: "100+", para: "Learned Students" },
  ];

  return (
    <>
      <div
        className="w-full h-[600px]"
        style={{
          backgroundImage: `url(${building})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment:"fixed"
        }}
      >
        <div className="w-full h-[600px] text-center flex flex-col justify-center lg:items-end items-center  bg-[rgba(0,136,144,0.7)] lg:pr-16 pr-0">
           
        <h2 className="lg:w-[60%] w-full text-secondary font-bold lg:text-6xl md:text-5xl text-4xl tracking-wider mb-8 leading-tight  flex gap-5 md:px-10"><TiTick className="lg:text-5xl border-4 border-secondary mt-2 w-[20%] h-[50%] ml-5 rounded-full  hidden lg:block" />Take the right step, do the big things.</h2>
        
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4  gap-5 text-center">
           
            {banner.map((count, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center text-white py-5 "
              >
                <h2 className="text-5xl mb-3 font-bold tracking-wider">{count.heading}</h2>
                <h2 className="text-xl tracking-wider font-semibold">{count.para}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
