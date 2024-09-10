import React from "react";
import children from "../../../assets/HomeImages/children.png";
import student from "../../../assets/HomeImages/student.png";
import employee from "../../../assets/HomeImages/employee.png";
import brain from "../../../assets/HomeImages/brain.jpg";
import herofingerprint from "../../../assets/HomeImages/herofingerprint.jpeg";
import anim from "../../../assets/HomeImages/anim.jpg";

import { VscDebugBreakpointLog } from "react-icons/vsc";
import { FaArrowLeft } from "react-icons/fa6";

const DMIT = () => {
  const data = [
    {
      img: children,
      h: "DMIT for Children",
      h1: "Age group 3 to 10 years",
      p: "Know your child Inborn Talent. Identify best learning style for your child. Select Activities based upon their innate potential. Identify your child Multiple Intelligence. Improve relationship between parents and children.",
    },
    {
      img: student,
      h: "DMIT for Career Guidance",
      h1: "Age group 16 years and above",
      p: "Know Your Personality Types. Develop your core competencies. Recognize your Multiple Intelligence. Know your Strength and weakness based on MI Theory. Find the most suitable learning and leadership Qualities",
    },
    {
      img: employee,
      h: "DMIT for Employees",
      h1: "Corporates Human Resource",
      p: "Find the right Employee for the right job. Pre-Employments Screening. Know your employee Personal potentials IQ-AQ-EQ-SQ-CQ. Discover Leadership, Planning and execution Qualities.",
    },
  ];

  return (
    <>
      <div className="w-full h-auto ">
        <div
          className="w-full lg:h-[450px] h-[300px] mb-10"
          style={{
            backgroundImage: `url(${herofingerprint})`,
            backgroundPositions: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="w-full lg:h-[450px] h-[300px] bg-primary bg-opacity-10 backdrop-blur-[1px] text-center pt-44"></div>
        </div>
        {/* // DMIT */}
        <h2 className="lg:text-3xl text-xl text-center lg:text-left flex flex-col justify-center items-center  font-bold text-darkred px-5 mb-5">
          Dermatoglyphics Multiple Intelligence Test (DMIT)
        </h2>

        <div className="w-full h-82 flex flex-col lg:flex-row lg:px-10">
          <div
            className="lg:w-1/2 h-auto  flex flex-col justify-center lg:p-5 px-5 text-center lg:text-left"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            <h2 className="lg:text-3xl text-xl font-semibold  text-primary text-center lg:text-left mb-5">
              What is DMIT ?
            </h2>
            <p className="tracking-wider leading-loose lg:text-base text-sm mb-5 text-gray-600">
              Dermatoglyphics Multiple Intelligence Test (DMIT) The full form of
              DMIT is, Dermatoglyphics Multiple Intelligence Test. It is a
              scientific study associated with fingerprint patterns and brain
              lobes. This will helps in understanding a unique inborn potential
              and personality. DMIT Test Technique has long been developed by
              scientist Dr.Howard Gardner and medical experts. DMIT Analysis
              will be based on Neuroscience and Multiple Intelligence Theory.
              Know your Strength and weakness by DMIT Test Report based on
              Dermatoglyphics and brain analysis.{" "}
            </p>
            <button className=" lg:w-1/2 lg:px-10 lg:py-2 mt-5 px-5 py-1 lg:text-base text-sm  bg-primary tracking-wider text-white font-medium rounded-lg hover:scale-[1.1] transform transition-all hover:bg-red">
              <a href="https://dmitlab.in/">Read More</a>
            </button>
          </div>
          <img
            src={anim}
            alt=""
            className="lg:w-1/2 lg:h-82 lg:p-16 md:px-10 md:py-10 px-5 py-5 object-cover"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="300"
          />
        </div>

        {/* //DMIT catagory */}
        <div
          className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full h-auto gap-5 text-center pt-10 pb-20"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="300"
        >
          {data.map((d) => (
            <div className="w-full h-auto  tracking-wider lg:pt-5 pb-10 lg:px-3 px-8  flex flex-col justify-center items-center  hover:shadow-2xl lg:shadow-lg lg:border-2 rounded-lg hover:border-darkred">
              <div className="h-[60%]">
                {" "}
                <img
                  src={d.img}
                  alt=""
                  className="w-full h-[250px] text-center object-cover"
                />
              </div>
              <div className="h-[40%] pb-5">
                {" "}
                <p className="lg:text-xl text-lg font-semibold text-primary mb-2">
                  {d.h}
                </p>
                <p className="lg:text-lg text-sm   text-primary mb-5">{d.h1}</p>
                <p className="text-gray-500 lg:text-base text-sm">{d.p}</p>
              </div>
            </div>
          ))}
        </div>
        <div
          className="w-full lg:h-[400px] h-[300px]"
          style={{
            backgroundImage: `url(${brain})`,
            backgroundAttachment: "fixed",
            backgroundPositions: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="flex lg:flex-row flex-col lg:w-full lg:px-10 lg:py-10 gap-10 px-8 py-5 ">
          <p
            className="lg:w-1/2 h-auto "
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            <div className="flex lg:flex-col lg:justify-start justify-center">
              {" "}
              <b className=" lg:text-2xl text-lg text-primary tracking-wider">
                Fingerprints and Brain Connection
              </b>
            </div>
            <p className="lg:text-base text-sm tracking-wider  text-gray-700 lg:mt-6 mt-3">
              Fingerprints truly are closely associated with the infant’s mind
              development. Fingerprints are usually developed during the 13th to
              19th week of an embryo. Fingerprints start to develop inside the
              embryo from 13th Week. In fact it gets formed by 24th week. Many
              research papers have got elaborated with link between fingerprint
              patterns and Human Brain lobes.
            </p>
            <div className="lg:py-5 pt-5">
              <h2 className="lg:text-2xl text-lg font-bold text-primary mb-5 tracking-wider ">
                Theory of Multiple Intelligence Test
              </h2>
              <ul className="lg:text-base text-sm pl-5 text-gray-700 tracking-wider list-disc">
                <li>Logical Intelligence (Reasoning Smart)</li>
                <li>Linguistic Intelligence (Word Smart)</li>
                <li>Musical Intelligence (Musical Smart)</li>
                <li>Naturalist Intelligence (Nature Smart)</li>
                <li>Existential Intelligence (Phil Smart)</li>
                <li>Intrapersonal Intelligence (Self Smart)</li>
                <li>Bodily-Kinesthetic Intelligence (Body Smart)</li>
                <li>Interpersonal Intelligence (People Smart)</li>
                <li>Spatial Intelligence (Picture Smart)</li>
              </ul>
            </div>
          </p>
          <p
            className="lg:w-1/2 h-auto tracking-wider lg:leading-loose"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            <div className=" lg:text-left">
             
              <b className="lg:text-2xl text-lg text-primary tracking-wider">
                Fingerprints and Brain Lobes
              </b>
            </div>
            <ul className=" list-disc mt-2 text-sm lg:text-base text-gray-700 ">
              <li className="flex justify-start items-center gap-3 p-2 ">
               
                Brain Lobes can be analyzed depending on formation and amount of
                ridge present in the fingerprints.
              </li>
              <li className="flex justify-start items-center gap-3 p-2">
                Medical experts confirmed that each person’s fingerprints are
                unique and no one has the same.
              </li>
              <li className="flex justify-start items-center gap-3 p-2">
                Fingerprints demonstrate different types of characteristics,
                even in identical twin babies.
              </li>
              <li className="flex justify-start items-center gap-3 p-2">
                The syndication of fingerprints is recognized as a
                representation of human brain cells.
              </li>
              <li className="flex justify-start items-center gap-3 p-2">
                Fingerprint development depends on the proportion and
                distribution of brain lobes.
              </li>
              <li className="flex justify-start items-center gap-3 p-2">
                Children with learning difficulties will have different
                fingerprints in comparison to talented children.
              </li>
            </ul>
          </p>
        </div>
        <div></div>
        <div
          className="flex justify-center items-center lg:py-10 py-5"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="300"
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
};

export default DMIT;
