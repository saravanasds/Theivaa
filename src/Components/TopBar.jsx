import React from 'react'
import { MdLocationPin } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

const TopBar = () => {
  return (
    <>
            
            <div class="w-full h-auto flex  justify-center items-center">
        <div class="w-full bg-primary text-white font-medium lg:py-3 py-2 px-5  text-lg tracking-wider">
            <div class="w-full flex  lg:flex-row justify-center items-center gap-5">
             
                <div class="w-full lg:w-1/2 flex lg:flex-row justify-center items-center gap-5  ">
                    <small class="flex justify-center items-center gap-2 text-secondary">
                        <MdLocationPin className='lg:text-lg hidden lg:block' />
                        <a href="#" class="text-white text-sm hidden lg:text-base lg:block">Palani-624601</a>
                    </small>
                    <small class="flex justify-center items-center gap-2 text-secondary">
                        <FaPhone className='lg:text-lg '/>
                        <a href="#" class="text-white tracking-[0.05em] lg:text-base text-xs">9994500216</a>
                    </small>
                </div>
               
                <div class="w-full lg:w-1/2 flex lg:flex-row justify-center items-center gap-2 text-secondary text-center">
                      <IoMdMail className='lg:text-lg text-sm'/>
                    <a href="#" class="text-white tracking-[0.05em] lg:text-base text-xs">technoschoolpalani@gmail.com</a>
                  
                </div>
            </div>
        </div>
    </div>
           
    
    </>
  )
}

export default TopBar

// padding: 1rem; /* Equivalent to p-3 in Tailwind */
//   font-size: 1.125rem; /* Equivalent to text-lg in Tailwind */
//   border-radius: 0.5rem; /* Equivalent to rounded-lg in Tailwind */
//   letter-spacing: 0.05em; /* Equivalent to tracking-wider in Tailwind */