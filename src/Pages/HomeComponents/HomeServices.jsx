import React from 'react'

const HomeServices = ({icon,heading,description}) => {
  return (
  <>
  <div className='w-full min-h-[300px] border-2 border-primary rounded-xl flex flex-col justify-center items-center lg:p-[2rem] shadow-lg hover:scale-[1.1] hover:shadow-xl transform transition-all duration-300'>
    <h3 className='mb-8 font-bold text-white text-[3rem] border-2 bg-primary rounded-full p-[2rem] hover:text-secondary'>{icon}</h3>
    <h3 className='mb-2 font-bold text-[1.25rem] text-primary'>{heading}</h3>
    <h3 className='text-[1rem] text-gray-500 '>{description}</h3>
  </div>
  
  </>
  )
}

export default HomeServices