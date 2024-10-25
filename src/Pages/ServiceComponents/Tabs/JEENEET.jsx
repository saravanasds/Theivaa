import React from 'react';

import { FaArrowLeft } from "react-icons/fa6";


function JEENEET() {
  return (
    <div className="container mx-auto p-6">
      {/* Page Title */}
      <h1 className="lg:text-4xl  text-xl font-bold text-center mb-10 uppercase text-darkred">JEE & NEET Courses</h1>

      {/* Course Information Section */}
      <section className="mb-10 "data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200">
        {/* <h2 className="lg:text-2xl text-xl font-bold mb-5 tracking-wider text-primary">Offline Classroom Courses  </h2> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 "data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200">
          <div className="p-6 border-pink-700 border-[1px] rounded-lg shadow-lg hover:shadow-2xl bg-pink-500 text-white"data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200">
            {/* <h2 className="lg:text-xl text-lg font-bold mb-2 ">JEE-Main</h2>
            <p className="lg:text-lg text-sm mb-2 font-semibold ">Course Details :</p> */}
            <p className="lg:text-base text-sm tracking-wider">JEE, short for Joint Entrance Examination, is a national-level entrance examination conducted in 
India for students who wish to get admitted in undergrad engineering or architecture programs at 
the Indian Institutes of Technology (IITs), National Institutes of Technology (NITs), Indian 
Institutes of Information Technology (IIITs), and other government-funded engineering colleges 
in India. .</p>
          </div>

          <div className="p-6 border-orange-700 border-[1px] rounded-lg shadow-lg hover:shadow-2xl bg-orange-500 text-white"data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="300">
            {/* <h2 className="lg:text-xl text-lg font-bold mb-2 ">JEE-Main + Advanced</h2>
            <p  className="lg:text-lg text-sm mb-2 font-semibold ">Course Details :</p> */}
            <p className="lg:text-base text-sm tracking-wider">National Entrance Eligibility Test (UG) is the new qualifying entrance exam notified 
under “Higher Medical Education Regulations, 1997 and BDS Course Regulations, 2007” by 
the Council of India, as published in the Special Gazette of India on December 21, 2010 and 15 
February 2012 and the Dental Council of India as published in the Special Gazette of India on
May 31, 2012. The full form of JEE and NEET is Joint Entrance Examination and National 
Entrance cum Eligibility Test respectively. </p>
          </div>

          <div className="p-6 border-blue-700 border-[1px] rounded-lg shadow-lg hover:shadow-2xl bg-blue-500 text-white"data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200">
            {/* <h2 className="lg:text-xl text-lg font-bold mb-2 ">NEET-UG</h2>
            <p  className="lg:text-lg text-sm mb-2 font-semibold ">Course Details :</p> */}
            <p className="lg:text-base text-smtracking-wider">
            Whenever a student prepares for these exams either 
JEE or NEET, then firstly he thinks “Which is harder JEE or NEET?” The Joint Entrance 
Examination (JEE) and the National Eligibility and Entrance Test (NEET) are highly competitive 
exams in India. JEE evaluates candidates for admission to engineering programs and is known 
for its complex questions in math and science. </p>
          </div>

          <div className="p-6 border-gray-700 border-[1px] rounded-lg shadow-lg hover:shadow-2xl bg-gray-500 text-white"data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="300">
            {/* <h2 className="lg:text-xl text-lg font-bold mb-2v ">Pre-Foundation (8th to 10th)</h2>
            <p  className="lg:text-lg text-sm  mb-2 font-semibold ">Course Details :</p> */}
            <p className="lg:text-base text-sm tracking-wider">On the other hand, NEET is for medical and 
dental admissions and focuses on biology, chemistry and physics. Both exams are famous for 
their difficulty, strict syllabus and fierce competition among candidates. Success requires 
thorough preparation and a solid understanding of the basic concepts of these subjects in 
both JEE and NEET.
</p>
          </div>
        </div>
      </section>

      {/* Live Online Courses Section */}

      <section className="lg:mb-20 mb-10 lg:pt-16">
        <h2 className="text-2xl font-bold mb-5 tracking-wider text-primary lg:mb-5">Live Online Courses  </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6"data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200">
          <div className="p-6 border-yellow-700 border-[1px] rounded-lg shadow-lg hover:shadow-2xl bg-yellow-500 text-white "data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200">
            <h3 className="text-xl font-bold mb-2 ">JEE-Main (Online)</h3>
            <p  className="lg:text-lg text-sm  mb-2 font-semibold ">Course Details :</p>
            <p className="lg:text-base text-sm tracking-wider">Available for live online learning, this course offers expert guidance and flexibility, allowing students to interact in real-time, receive personalized support, and adapt their study schedule to fit their needs. It includes access to recorded sessions, interactive tools, and ongoing assessments to track progress and ensure a comprehensive learning experience.</p>
          </div>

          <div className="p-6 border-violet-700 border-[1px] rounded-lg shadow-lg hover:shadow-2xl  bg-violet-500  text-white"data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="300">
            <h3 className="text-xl font-bold mb-2">JEE-Main + Advanced (Online)</h3>
            <p  className="lg:text-lg text-sm  mb-2 font-semibold ">Course Details :</p>
            <p className="lg:text-base text-sm tracking-wider">
            A live online course for JEE Main and Advanced includes real-time expert interaction, personalized guidance, and comprehensive resources. It features extensive study materials, practice tests, mock exams, and flexible scheduling with access to recorded classes for additional support.</p>
          </div>

          <div className="p-6 border-pink-900 border-[1px] rounded-lg shadow-lg hover:shadow-2xl bg-darkred text-white"data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200">
            <h3 className="text-xl font-bold mb-2">NEET-UG (Online)</h3>
            <p  className="lg:text-lg text-sm  mb-2 font-semibold ">Course Details :</p>
            <p className="lg:text-base text-sm tracking-wider">The online NEET-UG course features interactive sessions and real-time problem-solving with expert instructors. It provides extensive study materials, practice questions, and mock tests. Students receive personalized feedback and support, and the course offers flexible scheduling and access to recorded classes for additional review and convenience.</p>
          </div>

          <div className="p-6 border-green-700 border-[1px] rounded-lg shadow-lg hover:shadow-2xl bg-green-500 text-white"data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="300">
            <h3 className="text-xl font-bold mb-2">Pre-Foundation (6th to 10th)</h3>
            <p  className="lg:text-lg text-sm  mb-2 font-semibold ">Course Details :</p>
            <p className="lg:text-base text-sm tracking-wider">
            Live online classes for younger students build a strong JEE/NEET foundation with interactive lessons, expert guidance, engaging materials, and flexible scheduling. The program includes real-time feedback, practice sessions, and recorded classes for additional review.</p>
          </div>
        </div>
      </section>

      {/* Gurcharanam Advantages */}
      <section className=" w-full lg:mb-10 mb-8  tracking-wider flex lg:flex-row flex-col justify-center items-center"data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200">
     
          <div className='lg:w-1/2 mb-5'>
          <h2 className="lg:text-2xl text-xl font-semibold mb-5 text-darkred">Why Choose Shree Theivaa Academy?</h2>
        <ul className="lg:text-base text-sm text-gray-700 ml-6 mt-4 list-disc">
          <li>Comprehensive Study Material with rich content to cover all subjects.</li>
          <li>Highly Qualified Faculty with decades of experience in teaching.</li>
          <li>Use of Advanced Technologies to provide quality education both offline and online.</li>
          <li>Regular Mock Tests and performance reviews to help students track their progress.</li>
        </ul>
          </div>
        <div className="lg:w-1/2 text-center "data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200">
          <button className="text-center px-8 lg:px-20 lg:py-3 py-2 mb-5 lg:text-lg text-sm font-medium text-white hover:bg-primary bg-red lg:mt-10 rounded-lg transform transition-all duration-300">
            <a href="https://gurcharanamacademy.in/">View More JEE & NEET</a>
          </button>
        
        </div>


        
      </section>

      {/* Footer Section */}
     

        <div className="flex justify-center items-center  pb-5">
          <button className="lg:px-6 lg:py-2 px-3 py-1 bg-primary hover:bg-red  text-white lg:text-base text-sm font-semibold tracking-wider rounded-lg">
            <a href="/services" className="flex gap-3">
              <FaArrowLeft className="mt-1" />
              Go Back
            </a>
          </button>
        </div>
    </div>
  );
}

export default JEENEET;
