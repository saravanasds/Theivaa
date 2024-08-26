import React from 'react'
import bg2 from '../../assets/HomeImages/footer.jpeg'

const ServiceHero = () => {
  return (
    <>
     <div className='w-full min-h-[400px]' 
     style={{
          backgroundImage: `url(${bg2})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment:"fixed"
        }}>
          <div className='w-full min-h-[450px] bg-primary bg-opacity-20 backdrop-blur-[1px] text-center pt-44'>
              <h2 className='text-5xl font-bold text-white tracking-wider 'style={{ textShadow: "3px 3px 0px rgba(0,0,0,0.9)" }}data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="300">Shree Theivaa Academy</h2>
              
          </div>
          
   </div>
    
    </>
  )
}

export default ServiceHero