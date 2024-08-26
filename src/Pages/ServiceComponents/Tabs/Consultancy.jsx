import React from 'react'



import { FaArrowLeft } from "react-icons/fa6";

const Consultancy = () => {
  return (
   <>
     <div className='w-full h-auto'>
     <div
          className="w-full lg:h-[400px] lg:mb-5"
          style={{
           
            backgroundPositions: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="w-full min-h-[400px] bg-primary bg-opacity-20 backdrop-blur-[5px] text-center pt-44"></div>
        </div>
        <div className="flex justify-center items-center py-10">
          <button className=" lg:px-6 lg:py-2 px-3 py-1 bg-primary text-white lg:text-base text-sm font-semibold tracking-wider rounded-lg">
            <a href="/services" className="flex gap-3">
              <FaArrowLeft className="mt-1" />
              Go Back
            </a>
          </button>
        </div>
     </div>
   </>
  )
}

export default Consultancy