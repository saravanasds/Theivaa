import React from 'react'

const AboutOverview = () => {
  return (
    <>
    <div className=' container mx-auto w-full h-auto flex flex-col justify-center items-center pt-10 pb-10'>
            <h2 className='text-center text-3xl lg:text-5xl font-bold tracking-wider mb-10 text-primary border-b-2 border-secondary pb-2'>Academy's Overview</h2>
       <div className='w-full h-auto px-10 text-white bg-primary py-10 gap-10'>
       <div className='w-full h-auto'>
         <p className='lg:text-lg tracking-wider'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quasi nisi, voluptatem et voluptas eos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nam ad odit quidem sunt voluptatem?Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quasi nisi, voluptatem et voluptas eos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nam ad odit quidem sunt voluptatem?</p>
        </div>
        <h2 className='w-full h-auto  text-center text-secondary  text-4xl font-bold tracking-wider py-10'>"we will create a better future for you"</h2>
        <div className='flex lg:flex-row flex-col w-full gap-10 lg:text-lg tracking-wider'>
        <p className='lg:w-[50%] w-full h-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quasi nisi, voluptatem et voluptas eos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quasi nisi, voluptatem et voluptas eos.</p>
        <p className='lg:w-[50%] w-full h-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nam ad odit quidem sunt voluptatem?Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quasi nisi, voluptatem et voluptas eos.</p>
        </div>
       </div>
    </div>
    </>
  )
}

export default AboutOverview