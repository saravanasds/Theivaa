import React from 'react'
import AboutCEO from '../Pages/AboutComponents/AboutCEO' 
import AboutOverview from '../Pages/AboutComponents/AboutOverview' 
import AboutOffers from '../Pages/AboutComponents/AboutOffers' 
import bg2 from '../assets/HomeImages/bg2.jpeg'


const About = () => {
  return (
    <div className=' w-full h-auto'>
      <div className='w-full h-[450px] bg-center bg-cover object-cover hidden lg:block' style={{
          backgroundImage: `url(${bg2})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment:"fixed"
        }}>
          
        <div className='w-full h-[450px] bg-primary bg-opacity-20 backdrop-blur-[1px] bg-center bg-cover object-cover text-center pt-44'>
        <h2 className='text-5xl font-bold text-white tracking-wider 'style={{ textShadow: "3px 3px 0px rgba(0,0,0,0.9)" }}>About Us</h2>
          </div>
        
     </div>
     <AboutCEO/>
     <AboutOverview/>
     <AboutOffers/>
     
     <div className="w-full h-auto bg-gray-200 text-primary font-semibold lg:text-3xl  text-center tracking-wider lg:px-20 mb-20 lg:py-20 px-10 py-10">
        
        <h2 className="tracking-wider">"An investment in<span className="text-secondary">knowledge</span> pays the best interest."</h2>
        
      </div>
      
    </div>
  )
}

export default About