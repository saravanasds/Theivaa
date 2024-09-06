import React from "react";
import hand from "../../../assets/HomeImages/handshake.jpeg";
import consult2 from "../../../assets/HomeImages/consult2.jpeg";
import { FaArrowLeft } from "react-icons/fa6";

const Consultancy = () => {
  const Consultancy = [
    {
      title: "Career Counseling:",
      content: ` Explore career options and develop personalized plans that align with your skills and interests..`,
    },
    {
      title: "University & Course Selection:",
      content: ` Receive expert advice on choosing the right university and course that fits your academic and career goals.`,
    },
    {
      title: "Application Assistance:",
      content: `Get help with preparing and submitting successful applications, including personal statements and interviews.`,
    },
  ];
  const Consultancy2 = [
    {
      title: "Engineering-Tamil Nadu",
      content: "( Chennai , Coimbatore )",
    },
    {
      title: "Medical -Tamil Nadu",
      content: "(Chennai)",
    },
    {
      title: "Medical-(Abroad)",
      content: "(All Country)",
    },
    {
      title: "All Course",
      content: "(Tamil Nadu , Bangalore)",
    },
  ];

  return (
    <>
      <div className="w-full h-auto">
        <div
          className="w-full lg:h-[400px] h-[300px]"
          style={{
            backgroundImage: `url(${consult2})`,
            backgroundPositions: "bottom",
            backgroundSize: "cover",
          }}
        >
          <div className="w-full lg:min-h-[400px] h-[300px] bg-primary bg-opacity-20 backdrop-blur-[1px] text-center pt-44"></div>
        </div>

        <div className="w-full h-auto ">
          <div className="lg:px-10 lg:py-10 px-5 py-5 text-center">
            <h2 className="lg:text-2xl text-xl font-bold text-primary tracking-wider mb-3 uppercase">
              Student Advisory
            </h2>
            <p className="lg:text-lg text-sm  text-gray-700 tracking-wider lg:mb-3 ">
              We provide comprehensive guidance to help students make informed
              decisions about their educational and career paths:
            </p>
          </div>
          <div className="flex lg:flex-row flex-col justify-center items-center gap-10 lg:px-20 lg:py:10 px-5 py-5">
            <img src={hand} alt="" className="lg:w-1/2 shadow-xl" />
            <div>
              {Consultancy.map((consult, index) => (
                <div className="flex flex-col justify-start items-center">
                  <div>
                    <h2 className="lg:text-xl text-xl font-semibold text-darkred tracking-wider mb-3">
                      {consult.title}
                    </h2>
                    <p className="lg:text-base text-sm  text-gray-700 tracking-wider lg:mb-5 mb-3 ">
                      {consult.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:px-20 lg:py-10 px-5 py-5">
          
              <h2 className="lg:text-2xl text-xl font-bold text-primary mb-8 text-center tracking-wider">Our Expert Services</h2>
              <div className="w-full p-3 mb-5 grid lg:grid-cols-2 gap-10">
                {Consultancy2.map((consult1, index) => (
                  <div className=" border-2 shadow-xl text-center py-5 rounded-lg hover:border-2 hover:border-darkred hover:scale-[1.1] transform transition-all duration-500">
                    <h3 className="lg:text-xl text-xl font-semibold text-darkred tracking-wider mb-3 uppercase">
                      {consult1.title}
                    </h3>
                    <p className="lg:text-base text-sm text-gray-700 tracking-wider">
                      {consult1.content}
                    </p>
                  </div>
                ))}
              </div>
           
          </div>
        </div>

        <div className="flex justify-center items-center py-10">
          <button className=" lg:px-6 lg:py-2 px-3 py-1 bg-primary text-white lg:text-base text-sm font-semibold tracking-wider rounded-lg">
            <a href="/services" className="flex gap-3">
              <FaArrowLeft className="mt-1" />
              Go Back
            </a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Consultancy;
