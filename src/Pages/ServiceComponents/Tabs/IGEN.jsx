import React from "react";
import vedic from "../../../assets/HomeImages/vedic.jpg";
import rubic from "../../../assets/HomeImages/rubic.jpeg";
import phonic from "../../../assets/HomeImages/phonic.jpeg";
import abacus from "../../../assets/HomeImages/abacus.jpeg";
import paint from "../../../assets/HomeImages/paint.jpeg";
import robotic from "../../../assets/HomeImages/robotic.jpeg";
import handwrite from "../../../assets/HomeImages/handwrite.jpeg";
import kids from "../../../assets/HomeImages/kids.jpeg";
import sketch from "../../../assets/HomeImages/sketch.jpeg";

import { FaArrowLeft } from "react-icons/fa6";

const IGEN = () => {
  const items = [
    {
      title: "Vedhic Maths Class",
      description:
        "Learn techniques that simplify complex calculations, enhance problem-solving skills, and boost your mathematical agility.",
      imgSrc: vedic,
    },
    {
      title: "Rubic Cube Class",
      description:
        "Master solving techniques, advanced algorithms, and speedcubing skills to elevate your problem-solving abilities.",
      imgSrc: rubic,
    },
    {
      title: "Phonotics Class",
      description:
        "Master pronunciation and sound skills with our Phonotic Classes, designed to boost your speaking and listening abilities.",
      imgSrc: phonic,
    },
    {
      title: "Abacus Maths Class",
      description:
        "Boost mental math skills with our Abacus classes! Learn techniques to perform rapid calculations, enhance concentration, and improve problem-solving abilities.",
      imgSrc: abacus,
    },
    {
      title: "Painting Class",
      description:
        "Explore various techniques, from watercolor to acrylics, and develop your artistic skills in a supportive environment.",
      imgSrc: paint,
    },
    {
      title: "Robotics Class",
      description:
        "Learn to design, build, and program robots, and develop essential skills in technology and engineering.",
      imgSrc: robotic,
    },
    {
      title: "Handwriting Class",
      description:
        " Discover techniques to enhance clarity, style, and legibility, and develop a more elegant and efficient writing style.",
      imgSrc: handwrite,
    },
  ];

  return (
    <>
      <div className="w-full h-auto">
        {/* <div
          className="w-full lg:h-[400px]  bg-red-400"
          style={{
            // backgroundImage: `url(${fingerprint})`,
            backgroundPositions: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="w-full min-h-[400px] bg-[rgba(248,248,248)] bg-opacity-20 backdrop-blur-[5px] text-center pt-44"></div>
        </div> */}
        <div className="w-full h-auto flex flex-col justify-center items-center text-center lg:pb-20 pb-10">
          <div
            style={{
              backgroundImage: `url(${sketch})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className=" lg:px-10 lg:pt-32 w-full h-auto flex justify-center items-center px-10 pt-72"
          >
            <div
              className="lg:w-1/2 h-auto flex flex-col justify-center items-center bg-white bg-opacity-20 backdrop-blur-[1px] text-center lg:px-3 lg:py-16 px-3 py-10 shadow-lg rounded-lg "
              style={{ backgroundAttachment: "fixed" }}
              data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
            >
              <h2 className="lg:text-3xl text-xl font-semibold lg:mb-5 mb-3 text-primary tracking-wider">
                IGEN
              </h2>
              <p className="lg:text-lg text-sm text-primary tracking-wider">
                IGEN-innovation is one such unique learning facility for school
                and college students to understand the principles behind Abacus,
                Vedic Maths, Rubik's cube, Phonics, robotics, and automation.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:p-6 ">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 px-5 py-5 lg:px-10 lg:py-10  bg-white"
            style={{
              backgroundColor: "rgba(246,246,246)",
              backgroundPositions: "center",
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
            }}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-lg shadow-md hover:scale-[1.1] duration-500 transform transition-all"
                data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
              >
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-full lg:h-56 h-44 object-cover rounded-t-lg mb-4 "
                  data-aos="fade-down"
            data-aos-duration="800"
            data-aos-delay="200"
                />
                <h2 className="lg:text-xl text-lg font-bold text-primary mb-2 tracking-wider">
                  {item.title}
                </h2>
                <p className="text-gray-600 mb-4 tracking-wider lg:text-base text-sm">
                  {item.description}
                </p>
                <p className="text-lg font-semibold">{item.price}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-auto flex lg:flex-row flex-col justify-center items-center pt-10 lg:pb-10">
          <div className="lg:w-1/2 h-auto px-10"
          data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="200">
            <h2 className="text-center text-primary lg:text-2xl text-xl font-bold tracking-wider mb-5">
              Unlock Your Child’s Potential with Our Exciting Classes!
            </h2>
            <div>
              <h2 className="lg:text-xl text-lg text-primary font-semibold tracking-wider mb-1">
                Abacus Mastery:
              </h2>
              <p className="lg:text-base text-sm text-gray-600 tracking-wider mb-3">
                Enhance your mental math skills with our Abacus classes! Master
                fast calculation techniques and boost your concentration and
                problem-solving abilities through interactive learning.
              </p>
              <h2 className="lg:text-xl text-lg text-primary font-semibold tracking-wider mb-1">
                Rubik's Cube Challenges:
              </h2>
              <p className="lg:text-base text-sm text-gray-600 tracking-wider mb-3">
                Solve the Rubik's Cube with our expert-led classes! Learn
                efficient solving techniques and advanced algorithms to enhance
                your problem-solving skills and speedcubing abilities.
              </p>
              <h2 className="lg:text-xl text-lg text-primary font-semibold tracking-wider mb-1">
                Phonics Fun:
              </h2>
              <p className="lg:text-base text-sm text-gray-600 tracking-wider mb-3">
                Master reading fundamentals with our Phonics classes! Learn to
                decode words and improve pronunciation through engaging,
                hands-on activities. Build strong literacy skills and boost
                reading confidence.
              </p>
              <h2 className="lg:text-xl text-lg text-primary font-semibold tracking-wider mb-1">
                Robotics:
              </h2>
              <p className="lg:text-base text-sm text-gray-600 tracking-wider mb-3">
                Build and program robots using cutting-edge technology and
                develop key skills in engineering. Enhance your problem-solving
                and creative thinking abilities through hands-on projects and
                real-world applications.
              </p>
              <h2 className="lg:text-xl text-lg text-primary font-semibold tracking-wider mb-1">
                Handwriting:
              </h2>
              <p className="lg:text-base text-sm text-gray-600 tracking-wider mb-3">
                Transform your writing with our Handwriting classes! Enhance
                your penmanship through personalized instruction and effective
                techniques. Develop a more fluid, clear, and elegant writing
                style that stands out.
              </p>
              <h2 className="lg:text-xl text-lg text-primary font-semibold tracking-wider mb-1">
                Painting:
              </h2>
              <p className="lg:text-base text-sm text-gray-600 tracking-wider mb-3">
                Explore diverse techniques and mediums, from watercolors to
                acrylics, while developing your unique artistic style. Enjoy
                hands-on guidance to refine your skills and create beautiful
                artwork.
              </p>
            </div>
          </div>
          <img
            src={kids}
            alt=""
            className="lg:w-1/2 lg:px-10 lg:h-screen rounded-xl  px-5 py-5"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="200"
          />
          
        </div>
        <div className="w-full text-center"><button className="text-center px-8 lg:px-14 lg:py-3 py-2 mb-5 lg:text-lg text-sm font-medium text-white hover:bg-primary bg-red lg:mt-10 rounded-lg transform transition-all duration-300"><a href="https://igeninnovation.com/">View More about IGEN</a></button></div>

        <div className="flex justify-center items-center lg:py-10 pb-5">
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

export default IGEN;
