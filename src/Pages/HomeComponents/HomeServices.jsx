import React from 'react'

const HomeServices = ({icon,heading,description}) => {
  return (
  <>
  <div className='w-full min-h-[300px] lg:h-auto border-2 border-primary rounded-xl flex flex-col justify-center items-center lg:p-[2rem] px-5 py-5  shadow-lg hover:scale-[1.1] hover:shadow-xl transform transition-all duration-300'>
    <h3 className='mb-8 font-bold text-white lg:text-[3rem] text-4xl border-2 bg-primary rounded-full lg:p-[2rem] p-5 hover:text-secondary'>{icon}</h3>
    <h3 className='mb-2 font-bold lg:text-[1.25rem] text-lg text-primary'>{heading}</h3>
    <h3 className='lg:text-[1rem] text-sm  text-gray-500 tracking-wider leading-normal'>{description}</h3>
  </div>
  
  </>
  )
}

export default HomeServices