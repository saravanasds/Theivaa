import React from 'react'
import { MdLocationPin } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="w-full h-auto sticky top-0 bg-primary text-white font-medium lg:py-3 py-2 px-5 text-lg tracking-wider">
      <div className="flex  justify-between items-center ">
        <div className="flex items-center gap-2 text-secondary">
          <IoMdMail className='lg:text-lg text-sm' />
          <a href="#" className="text-white tracking-[0.05em] lg:text-base text-[10px]">technoschoolpalani@gmail.com</a>
        </div>

        <div className="flex items-center gap-5 text-secondary">
          <small className=" items-center gap-2 lg:block hidden">
            <MdLocationPin className='lg:text-lg text-[15px]' />
            <a href="#" className="text-white text-sm lg:text-base">Palani-624601</a>
          </small>
          <small className="flex items-center gap-2">
            <FaPhone className='lg:text-lg text-[15px]' />
            <a href="#" className="text-white tracking-[0.05em] lg:text-base text-[10px]">9994500216</a>
          </small>
        </div>
      </div>
    </div>
  )
}

export default TopBar
