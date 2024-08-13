import React from 'react'
import { MdLocationPin } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

const TopBar = () => {
  return (
    <>
            
            <div class="w-full h-auto flex justify-center items-center">
        <div class="w-full bg-primary text-white font-medium py-2 text-lg tracking-wider">
            <div class="w-full flex flex-col lg:flex-row justify-center items-center">
             
                <div class="w-full lg:w-1/2 flex lg:flex-row justify-center items-center gap-5 mb-3 lg:mb-0">
                    <small class="flex justify-center items-center gap-2 text-secondary">
                        <MdLocationPin className='text-lg' />
                        <a href="#" class="text-white">123 Street, New York</a>
                    </small>
                    <small class="flex justify-center items-center gap-2 text-secondary">
                        <FaPhone/>
                        <a href="#" class="text-white tracking-[0.05em]">9876543110</a>
                    </small>
                </div>
               
                <div class="w-full lg:w-1/2 flex lg:flex-row justify-center items-center gap-2 text-secondary text-center">
                      <IoMdMail />
                    <a href="#" class="text-white tracking-[0.05em] text-[1rem]">Email@Example.com</a>
                  
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