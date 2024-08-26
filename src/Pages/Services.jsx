import React from 'react'
import ServiceHero from './ServiceComponents/ServiceHero'
import ServiceFlip from './ServiceComponents/ServiceFlip'

import fingerprint1 from "../assets/HomeImages/fingerprint1.jpeg"
import consult1 from "../assets/HomeImages/consult1.jpeg"
import paint from "../assets/HomeImages/paint.jpeg"
import tia1 from "../assets/HomeImages/tia1.jpeg"
import kids1 from "../assets/HomeImages/kids1.jpeg"
import AISECT from "../assets/HomeImages/AISECT.jpeg"

const Services = () => {
  return (
    <div className='w-full h-auto'>
      <ServiceHero/>
       
       <div className="lg:w-full lg:h-auto px-8 pb-8 pt-8 lg:px-20 lg:pb-20 lg:pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
        frontContent="AISECT" 
        backContent="AISEC EDUCATION" 
        backContent2="International Association of Students in Economic and Commercial Sciences"  
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
  )
}

export default Services