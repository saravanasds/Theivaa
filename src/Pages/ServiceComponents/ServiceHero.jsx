import React from 'react'
import bg2 from '../../assets/HomeImages/footer.jpeg'

const ServiceHero = () => {
  return (
    <>
     <div className='w-full min-h-[450px]' 
     style={{
          backgroundImage: `url(${bg2})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment:"fixed"
        }}>
          <div className='w-full min-h-[450px] bg-primary bg-opacity-20 backdrop-blur-[1px] text-center pt-44'>
              <h2 className='text-5xl font-bold text-white tracking-wider 'style={{ textShadow: "3px 3px 0px rgba(0,0,0,0.9)" }}>Shree Theivaa Academy</h2>
              {/* <p className='text-2xl font-semibold text-white tracking-wider mb-10'style={{ textShadow: "2px 2px 2px rgba(0,0,0,0.7)" }}>We will create a better future for You!</p>
              <div className='flex justify-center items-center gap-16 text-lg font-bold text-primary tracking-wider 'style={{ textShadow: "0px 0px 2px rgba(255,255,255,0.7)" }}>
              <p>Home</p>
              <p>About</p>
              <p>Services</p>
              <p>Contact</p>
              </div> */}
          </div>
          
   </div>
    
    </>
  )
}

export default ServiceHero