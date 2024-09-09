import React from "react";
import cw from "../../../assets/HomeImages/cw.png";
import bgcw from "../../../assets/HomeImages/bgcw.jpeg";

import { FaArrowLeft } from "react-icons/fa6";

function CWEECE() {
  const cweece = [
    {
      title: "Montessari TTC",
    },

    {
      title: "Pre-primary TTc",
    },

    {
      title: "Arabic Primary TTC",
    },

    {
      title: "Aviation Courses",
    },
    {
      title: "Life Enrichment",
    },

    {
      title: "Psychology Courses",
    },

    {
      title: "Fashion Beauty",
    },

    {
      title: "English Courses",
    },
    {
      title: "Accounting Courses",
    },

    {
      title: "Artisry Courses",
    },

    {
      title: "Multimedia Courses",
    },

    {
      title: "Coaching Courses",
    },
  ];

  return (
    <>
      <div className="w-full h-auto flex flex-col justify-center items-center pb-10">
        <div
          className="w-full lg:h-[400px] h-[300px]  mb-5"
          style={{
            backgroundImage: `url(${bgcw})`,
            backgroundPositions: "bottom",
            backgroundSize: "cover",
          }}
        >
          {" "}
          <div className="w-full lg:h-[400px] h-[300px] bg-primary bg-opacity-10 backdrop-blur-[1px] text-center pt-44"></div>
        </div>
      </div>
      <h2 className="lg:text-3xl  text-xl text-darkred text-center font-bold px-5">
        Empowering youth unlocks their full potential.
      </h2>

      <div className="flex lg:flex-row flex-col p-5">
        <h2 className=" lg:pl-10 pl-5 lg:w-full lg:text-lg text-medium  text-primary tracking-wider mb-5 text-center lg:py-10 ">
          The core of today's educational framework is its multi-disciplinary
          approach, which allows students to excel in both academic and
          non-academic domains. By offering diverse specializations, modern
          programs are designed to help learners achieve their goals.
          Additionally, contemporary research is integrated into educational
          systems, and the potential of digital learning is fully harnessed
          across all learning modules.We are dedicated to delivering education
          to students through creative and innovative methods.
          <h2 className="lg:text-2xl  text-lg text-darkred text-center font-semibold pt-10 mb-3 ">
            Empowering the Future Through Innovative Education
          </h2>
          <p className="lg:text-lg text-sm text-gray-700 tracking-wider mb-3">
            A key element of today's educational landscape is a
            multi-disciplinary approach. Theivaa fosters excellence in both
            academic and extracurricular areas, helping learners achieve their
            goals through modern specializations. Our programs integrate
            contemporary research and make full use of digital learning tools.
            At Theivaa, we are dedicated to using innovative methods to educate
            and inspire our students.
          </p>
          <h2 className="lg:text-2xl  text-lg text-darkred text-center font-semibold pt-8 mb-5">
            Offering Exceptional Online Courses
          </h2>
          <p className="lg:text-base text-sm text-gray-700 tracking-wider mb-5">
            Theivaa, India’s leading digital vocational institute, is at the
            forefront of accessible 21st-century education. Catering to digital
            natives, Theivaa offers cutting-edge online programs and effective
            teacher training. The institute goes beyond traditional methods by
            focusing on empowering women in IT, Management, Arts, and Teaching,
            and supporting holistic child development.
          </p>
          <p className="lg:text-base text-sm text-gray-700 tracking-wider mb-3">
            With a nationwide presence, Theivaa is the top choice for online
            learners, utilizing a multi-disciplinary approach. Committed to
            pre-primary teacher education and accredited by Suresh Gyan Vihar
            University, Theivaa provides valid certificates that reflect its
            dedication to innovation and empowerment.
          </p>
        </h2>
        <img src={cw} alt="" className="lg:w-1/2 h-auto " />
      </div>
      <div className=" bg-gradient-to-r  py-5">
        <div className="flex lg:flex-row flex-col justify-center items-center">
          <div className="lg:w-full">
            <h2 className="lg:text-3xl text-xl font-semibold  text-darkred tracking-wider mb-5 text-center uppercase">
              Providing Courses
            </h2>
            <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 justify-center items-center py-5 px-8">
              {cweece.map((c, index) => (
                <div className=" flex flex-col justify-center items-center uppercase ">
                  <div className="font-semibold   bg-white  text-primary transform transition-all tracking-wider mb-3 lg:py-2 lg:px-5 rounded-lg w-[90%] shadow-md hover:shadow-red border-red border-[1px]">
                    <h2 className="lg:text-lg text-sm px-3 py-2 text-center">
                      {c.title}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center py-10">
              <button className=" lg:px-24 lg:py-3 px-3 py-1 bg-primary hover:bg-red transform transition-all text-white lg:text-lg text-sm font-semibold tracking-wider rounded-lg">
                <a href="https://cweece.com/" className="flex gap-3">
                  View More
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center lg:py-5 pb-5">
          <button className="lg:px-6 lg:py-2 px-3 py-1 bg-primary hover:bg-red  text-white lg:text-base text-sm font-semibold tracking-wider rounded-lg">
            <a href="/services" className="flex gap-3">
              <FaArrowLeft className="mt-1" />
              Go Back
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default CWEECE;
