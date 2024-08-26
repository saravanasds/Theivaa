import React from "react";

const Edge = () => {
  const courseDetails = [
    {
      title: "Course Objective",
      details: [
        "Covers Maths, Physics, Chemistry, and Biology.",
        "Aims for a deep understanding of concepts.",
        "Focuses on applying concepts to real-life situations.",
        "Ensures students effectively grasp and use the concepts.",
        "Prepares students to excel in TIA-Edge tests.",
        "Taught by skilled and professional teachers.",
      ],
    },
    {
      title: "Course Structure",
      details: [
        "Divided into three phases.",
        "Provides workbooks and study materials.",
        "Includes Maths, Physics, Chemistry, and Biology.",
        "Includes unit tests, cyclic tests, weekly tests, and term tests.",
        "Features regular feedback and test analysis sessions.",
      ],
    },
  ];

  return (
    <>
      <div className="border-b-2 border-primary py-10 ">
        
        <div className="flex justify-center items-center pb-10"data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200">
          <p className="lg:w-1/2 px-10 h-auto text-center lg:text-lg text-sm text-primary tracking-wider">
            TIA-Edge helps students achieve their dreams by providing training
            for competitive exams like NEET, IIT-JEE, NTSE, and Olympiads. Our
            expert team offers top-quality education using specialized training
            methods to enhance students' skills and help them reach their goals.
          </p>
        </div>
        <div className=" w-full flex lg:flex-row flex-col justify-around items-center px-10 gap-5">
          {courseDetails.map((courseDetail, index) => (
            <div key={index} className=""data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="3200">
              <h2 className="lg:text-xl text-lg font-semibold tracking-wider text-red mb-3">
                {courseDetail.title}
              </h2>
              <ul className="lg:text-base text-sm tracking-wider text-gray-700 leading-tight list-disc pl-5"data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="200">
                {courseDetail.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Edge;
