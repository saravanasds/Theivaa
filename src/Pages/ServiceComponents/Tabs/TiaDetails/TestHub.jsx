import React from "react";
import test from "../../../../assets/HomeImages/test.jpeg";

const TestHub = () => {
  const Test = [
    {
      title: "BENEFITS :",
      details: [
        "Free from fear when appearing in competitive exams",
        " Security and confidentiality",
        " Time management",
        " Be familiar with the structure of the exam",
        " Can be easily accessed 24/7 over the open test period",
        "comfort with the exams without fear",
      ],
    },
  ];
  return (
    <>
      <div className="border-b-2 border-primary py-10 lg:px-10 px-5">
        <div
          className="flex justify-center items-center pb-10 "
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <p className="lg:w-1/2 px-5 h-auto text-center lg:text-lg text-sm text-primary tracking-wider">
          <span className="text-darkred font-semibold lg:text-lg tracking-wider">TIA-TEST HUB</span>  offers extensive past exam papers for tests like JEE,
            NEET, and Olympiads. Practice with unlimited tests, get instant
            scores, and receive guidance from experts to improve your
            performance and manage your time effectively.
          </p>
        </div>
        <div className="flex lg:flex-row flex-col justify-center gap-10">
          <img src={test} alt="" className="lg:w-1/2 lg:h-80 shadow-lg rounded-2xl object-cover" data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="200"/>

          <div className=" lg:w-1/2 flex flex-col justify-center py-10">
            {Test.map((test1, index) => (
              <div key={index} className=""data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="200">
                <h2 className="lg:text-xl text-lg font-semibold tracking-wider text-darkred mb-3">
                  {test1.title}
                </h2>
                <ul className="lg:text-base text-sm tracking-wider text-gray-700 leading-tight list-disc mb-5 pl-5 ">
                  {test1.details.map((test2, detailIndex) => (
                    <li key={detailIndex}>{test2}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TestHub;
