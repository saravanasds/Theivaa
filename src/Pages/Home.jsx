// Homecomponents.jsx
import React from "react";
import HomeHero from "./HomeComponents/HomeHero";
import HomeServices from "./HomeComponents/HomeServices";
import HomeTeam from "./HomeComponents/HomeTeam";
import Homedu from "../assets/HomeImages/Homedu.jpg";
import Homebenefits from "./HomeComponents/Homebenefits";
import HomeBanner from "./HomeComponents/HomeBanner";
import HomeTestimonal from "./HomeComponents/HomeTestimonal";




import { GoBook } from "react-icons/go";
import { PiStudent } from "react-icons/pi";
import { PiChalkboardTeacher } from "react-icons/pi";
import { IoMdFingerPrint } from "react-icons/io";

const Homecomponents = () => {
  const Home = [
    {
      icon: (
        <IoMdFingerPrint />
      ),
      heading: "DMIT",
      description:
        "(DMIT) is a helps in understanding an individuals potential and personality",
    },
    {
      icon: (
        <PiChalkboardTeacher />
      ),
      heading: "TIA",
      description:
        "Calculate every possible risk in your business, take control over them.",
    },
    {
      icon: (
        <PiStudent  />
      ),
      heading: "I Gen",
      description:
        "Know the market before taking any step, reduce risks before you go.",
    },
    {
      icon: <GoBook/>,
      heading: " Consultancy",
      description:
        "We play crucial role in supporting educational institutions.",
    },
  ];

  const Team = [
    {
      // icon: <IoIosPeople className="text-[2rem]" />,
      heading: "Awesome Team",
      description:
        "Before talking destination, we shine a spotlight across your organization to fully understand it.",
    },
    {
      // icon: <IoMdChatbubbles className="text-[2rem]" />,
      heading: "Excellent Support",
      description:
        "If you face any trouble, you can always let our dedicated support team help you. They are ready for you 24/7.",
    },
    {
      // icon: <FaBoltLightning className="text-[2rem]" />,
      heading: "Faster Performance",
      description:
        "We develop a systematic well-ordered process of analysis, from concept through implementation..",
    },
  ];

  return (
    <div className="w-full h-auto overflow-x-auto ">
      {/* // HomeHero Section Start  */}

      <HomeHero />

      {/* // HomeHero Section End */}

      {/* // HomeService Section Start */}

      <div className="container mx-auto flex  flex-col justify-center items-center lg:pt-[2rem] pb-[5rem]">
        <div className="text-center lg:py-[3rem] px-10 py-8 lg:px-0 lg:w-[50%]" data-aos="fade-up" duration="400">
          <h2 className="lg:text-[2rem] text-lg font-bold tracking-[0.05em] mb-3 lg:mb-5 text-primary leading-normal">
            Welcome to Shree Theivaa Academy
          </h2>
          <p className="lg:text-base text-sm tracking-[0.05em] text-center text-primary leading-normal">
          At Shree Theivaa Academy, we are dedicated to empowering learners of all ages with the knowledge and skills they need to succeed.
          </p>
        </div>
        <div className="grid grid-cols-1 px-10 lg:px-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-center gap-8">
          {Home.map((service, index) => (
            <HomeServices
            className="flex justify-center items-center "
              key={index}
              icon={service.icon}
              heading={service.heading}
              description={service.description}
            />
          ))}
        </div>
      </div>

      {/* // HomeService Section End */}

      {/* // HomeTeam Section Start  */}
          <div className="w-full h-auto mb-[0.75rem] py-10 ">
          <div className=" container mx-auto h-screen bg-cover object-cover flex justify-center items-center  text-lg px-10 lg:px-0 lg:text-4xl font-bold tracking-wider text-center" style={{
            backgroundImage:`url(${Homedu})`,
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
          }}>
            {/* <div className="bg-primary  text-primary p-4 bg-opacity-20 rounded-xl backdrop-blur-lg">"An investment in knowledge pays the best interest."</div> */}
      </div>
      
          </div>
      
      <div className="container mx-auto  grid grid-cols-1  lg:px-10 md:grid-cols-2 lg:grid-cols-3 text-center gap-8 mb-20 px-10">
        {Team.map((teams, index) => (
          <HomeTeam
          className="flex justify-center items-center"
            key={index}
            icon={teams.icon}
            heading={teams.heading}
            description={teams.description}
          />
        ))}
      </div>

      {/* // HomeTeam Section Start  */}

    

      <div className="w-full h-auto bg-primary text-white font-semibold lg:text-3xl text-xl text-center tracking-wider lg:px-20  lg:py-20 px-5 py-8">
        <h2 className="tracking-wider">"An investment in <span className="text-secondary">knowledge</span> pays the best interest."</h2>
      </div>

    

      <Homebenefits />
      <HomeBanner/>
      <HomeTestimonal/>

     


    </div>
  );
};

export default Homecomponents;