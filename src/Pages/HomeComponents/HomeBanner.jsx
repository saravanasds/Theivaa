import React from "react";
import building from "../../assets/HomeImages/bgmen1.jpeg";
import { TiTick } from "react-icons/ti";

const HomeBanner = () => {
  const banner = [
    { heading: "TIA" },
    { heading: "AISECT" },
    { heading: "DMIT" },
    // { heading: "100+", },
  ];

  //para: "Certified Teachers"

  return (
    <>
      <div
        className="w-full lg:h-[600px] h-[400px]"
        style={{
          backgroundImage: `url(${building})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="w-full lg:h-[600px] h-[400px] text-center flex flex-col justify-center lg:items-end items-center  bg-[rgba(0,136,144,0.7)] lg:pr-16   py-10 px-5 lg:py-8 lg:px-3">
          <div className="lg:w-1/2 h-[400px] border-2 border-secondary rounded-lg flex flex-col justify-center lg:items-center items-center lg:px-10 lg:py-8 px-5 shadow-lg"data-aos="fade-up" 
  data-aos-duration="800" 
  data-aos-delay="300" 
  data-aos-easing="ease-in-out">
          <h2 className="lg:w-full w-full text-white font-bold lg:text-6xl md:text-5xl text-2xl px-3 lg:px-0 tracking-wider lg:mb-8 mb-2  flex gap-5 md:px-10 leading-normal "style={{textShadow:"0px 2px 4px rgba(0,0,0,0.7)"}}>
            <TiTick className="lg:text-5xl md:text-center border-4 border-secondary mt-2 w-[20%] h-[50%] ml-5 rounded-full  hidden lg:block" />
            Our Trusted Partners 
          </h2>
          <p className="lg:text-lg text-sm tracking-wider text-white text-center mb-5">At Shree Theivaa Academy, we partner with industry leaders to offer cutting-edge educational experiences, integrating their expertise to keep our programs innovative and exceptional.</p>

          <div className="lg:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 lg:gap-5 ">
            {banner.map((count, index) => (
              <div
                key={index}
                className="flex flex-col justify-center lg:items-end text-white lg:py-5 lg:px-10"
              >
                <h2 className="lg:text-3xl  text-xl mb-3 font-bold tracking-wider text-darkred "style={{textShadow:"0px 2px 1px rgba(255,255,255,0.7)"}}>
                  {count.heading}
                </h2>
                {/* <h2 className="lg:text-xl text-sm tracking-wider font-semibold">{count.para}</h2> */}
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
