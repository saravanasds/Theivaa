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
          <div
            className="w-full lg:h-[400px] h-[300px] bg-primary bg-opacity-10 backdrop-blur-[1px] text-center pt-36 lg:text-5xl text-3xl font-bold text-white tracking-wider px-10"
            style={{ textShadow: "3px 3px 0px rgba(0,0,0,0.9)" }}
            data-aos="fade-up"
          >
            CWEECE
          </div>
        </div>
      </div>
      <h2
        className="lg:text-3xl  text-lg text-darkred text-center font-bold px-5"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
      >
        Empowering youth unlocks their full potential.
      </h2>

      <div className="flex lg:flex-row flex-col justify-center items-center p-5">
        <h2
          className=" lg:pl-10 pl-5 lg:w-full lg:text-lg text-sm text-medium  text-primary tracking-wider mb-5 text-center lg:py-10 "
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
        >
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
          <p
            className="lg:text-base text-sm text-gray-700 tracking-wider mb-3 leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            A key element of today's educational landscape is a
            multi-disciplinary approach. Theivaa fosters excellence in both
            academic and extracurricular areas, helping learners achieve their
            goals through modern specializations. Our programs integrate
            contemporary research and make full use of digital learning tools.
            At Theivaa, we are dedicated to using innovative methods to educate
            and inspire our students.
          </p>
          <h2
            className="lg:text-3xl  text-lg text-darkred text-center font-bold pt-8 mb-5"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            CWEECE
          </h2>
          <p
            className="lg:text-base text-sm text-gray-700 tracking-wider mb-5 leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            CWEECE, India’s leading digital vocational institute, pioneers
            accessible 21st-century education. Tailoring programs for digital
            natives, CWEECE ensures up-to-date online education and effective
            teacher training. Beyond norms, the institute prioritizes empowering
            women in IT, Management, Arts, and Teaching, contributing to
            holistic child development. With nationwide impact, CWEECE is the
            preferred choice for online learners, employing a multi-disciplinary
            approach. Committed to pre-primary teacher education, recognized by
            Suresh Gyan Vihar University, CWEECE guarantees valid certificates,
            embodying innovation and empowerment.
          </p>
          <p
            className="lg:text-base text-sm text-gray-700 tracking-wider mb-3 leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            The modern era emphasizes women empowerment, with nations and
            communities actively seeking ways to tap into the latent talents of
            half the population. Empowering women not only enriches them but
            also contributes to the proper nurturing and development of future
            generations. CWEECE is dedicated to uplifting women's potential,
            focusing on enhancing skills in IT, Management, Arts, and Teaching.
            The present-day world witnessed drastic changes in teacher
            education. Most modern technologies and digital revolution made it
            very effective than before. CWEECE's teacher training programs
            ensure innovations and technological advancements.
          </p>
        </h2>
        <img
          src={cw}
          alt=""
          className="lg:w-1/2 h-auto object-cover"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="200"
        />
      </div>
      <div className=" bg-gradient-to-r  py-5">
        <div className="flex lg:flex-row flex-col justify-center items-center">
          <div className="lg:w-full">
            <h2
              className="lg:text-3xl text-xl font-semibold  text-darkred tracking-wider mb-5 text-center uppercase"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              Providing Courses
            </h2>
            <div
              className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-5 gap-3 justify-center items-center lg:py-5 lg:px-8 px-4"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              {cweece.map((c, index) => (
                <div className=" flex flex-col justify-center items-center uppercase ">
                  <div
                    className="font-semibold   bg-white  text-primary transform transition-all tracking-wider mb-3 lg:py-2 lg:px-5 rounded-lg w-[90%] shadow-md hover:shadow-red border-red border-[1px]"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="200"
                  >
                    <h2 className="lg:text-lg text-sm px-3 py-2 text-center">
                      {c.title}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
            <div
              className="flex justify-center items-center lg:py-10 py-5"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <button className=" lg:px-24 lg:py-3 px-4 py-2 bg-primary hover:bg-red transform transition-all text-white lg:text-lg text-sm font-semibold tracking-wider rounded-lg">
                <a href="https://cweece.com/" className="flex gap-3">
                  View More
                </a>
              </button>
            </div>
          </div>
        </div>
        <div
          className="flex justify-center items-center lg:py-5 pb-5"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
        >
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
