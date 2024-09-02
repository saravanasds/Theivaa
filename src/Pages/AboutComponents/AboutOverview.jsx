import React from 'react'

const AboutOverview = () => {
  return (
    <>
    <div className=' container mx-auto w-full h-auto flex flex-col justify-center items-center lg:pt-10 lg:pb-10 px-8'data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="300">
            <h2 className='text-center text-2xl lg:text-5xl font-bold tracking-wider lg:mb-10 mb-5 text-primary border-b-2 border-secondary pb-2'>Academy's Overview</h2>
       <div className='w-full h-auto lg:px-10 px-5 text-white bg-primary lg:py-10 py-5 lg:gap-10 rounded-lg'>
       <div className='w-full h-auto'>
         <p className='lg:text-base text-sm tracking-wider'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quasi nisi, voluptatem et voluptas eos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nam ad odit quidem sunt voluptatem?Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quasi nisi, voluptatem et voluptas eos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nam ad odit quidem sunt voluptatem?</p>
        </div>
        <h2 className='w-full h-auto  text-center text-secondary  lg:text-4xl text-xl font-bold tracking-wider py-10'>"we will create a better future for you"</h2>
        <div className='flex lg:flex-row flex-col w-full gap-10 lg:text-base text-sm tracking-wider'>
        <p className='lg:w-[50%] w-full h-auto '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quasi nisi, voluptatem et voluptas eos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quasi nisi, voluptatem et voluptas eos.</p>
        <p className='lg:w-[50%] w-full h-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nam ad odit quidem sunt voluptatem?Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quasi nisi, voluptatem et voluptas eos.</p>
        </div>
       </div>
    </div>
    </>
  )
}

export default AboutOverview