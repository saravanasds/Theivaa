import React from "react";
import bg1 from "../../assets/HomeImages/bg1.jpeg";
import AOS from "aos";

const HomeHero = () => {
  // useEffect(() => {
  //   AOS.init({ duration: 1000 }); // Initialize AOS animations
  // }, []);

  return (
    <>
      <div
        className="lg:w-full min-h-[80vh] hidden lg:block"
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div
          className="flex flex-col lg:w-[60%]  w-full h-[70vh] justify-center lg:items-start items-center lg:px-24 "
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="300"
        >
          <h2
            className="lg:text-7xl text-3xl text-primary font-bold tracking-wider lg:mb-4 typing-effect"
            style={{ textShadow: "0px 2px 2px rgba(0,0,0,0.7)" }}
          >
            Growth Partners
          </h2>
          <p className="lg:text-xl text-sm text-primary font-semibold tracking-wider lg:mb-8 typing-effect text-center">
            Gain access to specialized knowledge that can help accelerate
            growth.
          </p>
          <button
            className="lg:px-10 px-6 lg:py-3 py-2 text-xl bg-primary text-white border-2 border-white  tracking-wider rounded-xl hover:scale-[1.1] hover:shadow-xl transform transition-all duration-300"
            style={{ boxShadow: "2px 2px 2px rgba(0,0,0,0.7)" }}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Read more
          </button>
        </div>
      </div>
    </>
  );
};

export default HomeHero;

//style={{textShadow:"0px 2px 2px rgba(255,255,255,0.7)"}}
