import React from "react";
import ServiceHero from "./ServiceComponents/ServiceHero";
import ServiceFlip from "./ServiceComponents/ServiceFlip";

import fingerprint1 from "../assets/HomeImages/fingerprint1.jpeg";
import consult1 from "../assets/HomeImages/consult1.jpeg";
import paint from "../assets/HomeImages/paint.jpeg";
import tia1 from "../assets/HomeImages/tia1.jpeg";
import kids1 from "../assets/HomeImages/kids1.jpeg";
import AISECT from "../assets/HomeImages/AISECT.jpeg";
import bg3 from "../assets/HomeImages/bg3.jpg";
import bg5 from "../assets/HomeImages/bg5.jpeg";

const Services = () => {
  return (
    <div className="w-full h-auto">
      <ServiceHero/>
       <div className="lg:p-10 p-5 flex flex-col justify-center items-center text-center">
        <h2 className="lg:w-3/4 text-center font-bold lg:text-3xl text-xl tracking-wider text-darkred pt-10 mb-5">OUR SERVICES</h2>
        <p className="lg:w-full lg:text-lg text-sm text-gray-700 tracking-wider lg:px-5">We provide a range of specialized services designed to empower you with the latest skills and knowledge in technology. Explore our offerings below to see how we can support your professional growth and business success.</p>
       </div>
      <div className="lg:w-full lg:h-auto px-8 pb-8 pt-8 lg:px-20 lg:pb-20 lg:pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 object-cover">
        <ServiceFlip
          frontContent="DMIT"
          backContent="(Dermatoglyphics Multiple Intelligence Test)"
          backContent2="DMIT is a helps in understanding an individuals potential and personality"
          backColor="bg-red-500"
          backgroundImage={fingerprint1}
          backgroundImageback={paint}
          button="View Details"
          link="./DMIT"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="300"
        />
        <ServiceFlip
          frontContent="TIA"
          backContent="Talent Initiators and Talent Accelerators "
          backContent2="We focus on the initial stages of talent discovery and development."
          frontColor="bg-green-500"
          backColor="bg-yellow-500"
          backgroundImage={tia1}
          backgroundImageback={paint}
          button="View Details"
          link="./TIA"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="400"
        />
        <ServiceFlip
          frontContent="IGEN"
          backContent=" Intelligent Growth and Enhanced Networking "
          backContent2="We involves strategies and resources designed to foster growth, innovation, and connectivity"
          frontColor="bg-green-500"
          backColor="bg-yellow-500"
          backgroundImage={kids1}
          backgroundImageback={paint}
          button="View Details"
          link="./IGEN"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="500"
        />
        <ServiceFlip
          frontContent="IT and ITes"
          backContent="Information Technology and IT-Enabled-Services"
          backContent2="IT plays a crucial role in modern businesses, facilitating operations, communication, and innovation."
          backColor="bg-yellow-500"
          backgroundImage={AISECT}
          backgroundImageback={paint}
          button="View Details"
          link="./AISEC"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="300"
        />
        <ServiceFlip
          frontContent="CWEECE"
          backContent="CWEECE"
          backContent2="Empowering youth means equipping them with the tools and confidence to unlock their full potential."
          backColor="bg-yellow-500"
          backgroundImage={bg3}
          backgroundImageback={paint}
          button="View Details"
          link="./CWEECE"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="400"
        />
        <ServiceFlip
          frontContent="JEE & NEET"
          backContent="JEE  and NEET "
          backContent2="JEE and NEET are entrance exams for engineering and medical college admissions in India, testing knowledge in relevant subjects."
          backColor="bg-yellow-500"
          backgroundImage={bg5}
          backgroundImageback={paint}
          button="View Details"
          link="./JEENEET"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="400"
        />
        <ServiceFlip
          frontContent="CONSULTANCY"
          backContent="EDUCATION CONSULTANCY"
          backContent2="We optimize operations, and achieve strategic goals."
          backColor="bg-yellow-500"
          backgroundImage={consult1}
          backgroundImageback={paint}
          button="View Details"
          link="./Consultancy"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="400"
        />
      </div>
    </div>
  );
};

export default Services;
