import React from "react";
import AboutCEO from "../Pages/AboutComponents/AboutCEO";
import AboutOverview from "../Pages/AboutComponents/AboutOverview";
import AboutOffers from "../Pages/AboutComponents/AboutOffers";
import bg2 from "../assets/HomeImages/bg2.jpeg";
import certi from "../assets/HomeImages/certificate.png";

const About = () => {
  return (
    <div className=" w-full h-auto">
      <div
        className="w-full h-[450px] bg-center bg-cover object-cover hidden lg:block"
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="w-full h-[450px] bg-primary bg-opacity-20 backdrop-blur-[1px] bg-center bg-cover object-cover text-center pt-44">
          <h2
            className="lg:text-6xl text-2xl font-bold text-white tracking-wider "
            style={{ textShadow: "3px 3px 0px rgba(0,0,0,0.9)" }}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            About Us
          </h2>
        </div>
      </div>
      <AboutCEO />
      <AboutOverview />
      <AboutOffers />

      <div
        className="w-full h-auto bg-primary  text-center tracking-wider lg:px-10  lg:py-10 px-10 py-10"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="300"
      >
        <div className="flex lg:flex-row flex-col gap-20 bg-white lg:py-10 px-5 py-5 rounded-xl">
          <div className="flex flex-col ">
            <h2 className="lg:text-3xl text-xl font-semibold text-darkred tracking-wider mb-5">
              "Earn a Career certificate with Shree Theivaa Academy."
            </h2>
            <p className="lg:text-base text-sm mb-10">
              This certificate is awarded in recognition of their dedication and
              achievement in completing the course requirements.
            </p>
            <h2 className=" lg:text-3xl text-xl font-semibold text-darkred tracking-wider mb-5">
              Benefits of Certification
            </h2>
            <ul className="lg:text-base text-sm">
              <li>Demonstrate your commitment and expertise in your field.</li>
              <li>Enhance your resume and open up new career opportunities.</li>
              <li>
                Show that you have met the industry standards and requirements.
              </li>
            </ul>
          </div>
          <img src={certi} alt="" className="lg:w-1/3 object-cover" />
        </div>
      </div>

      {/* //final About */}

      <div
        className="w-full h-auto text-primary font-semibold text-center tracking-wider lg:py-36 py-10"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="300"
      >
        <div className="lg:mb-10 mb-5 px-5">
          <h2 className="lg:text-4xl text-xl font-mono tracking-wider mb-3">
            Get Involved
          </h2>
          <p className="lg:text-lg text-sm text-gray-500 tracking-wider">
          Join our vibrant community of learners and educators! We offer
          various ways to get involved:
          </p>
        </div>
        <div className="flex flex-col justify-center items-center px-8">
          <div className="lg:w-1/2 text-center border-2 py-10 bg-slate-100 shadow-lg rounded-md">
            <div className="lg:mb-8 mb-5 px-3">
              <h3 className="lg:text-xl text-lg text-darkred font-semibold tracking-wider uppercase mb-2">
                Volunteer
              </h3>
              <p className="lg:text-lg text-sm text-gray-700 tracking-wider">
              Contribute your time and skills to help support our mission.
              </p>
            </div>
            <div className="px-3">
              <h3 className="lg:text-xl text-lg text-darkred font-semibold tracking-wider uppercase mb-2">
                Partnerships
              </h3>
              <p className="lg:text-lg text-sm text-gray-700 tracking-wider">
              Collaborate with us to enhance educational opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
