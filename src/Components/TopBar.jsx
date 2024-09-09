import React from 'react'
import { MdLocationPin } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="w-full h-auto sticky top-0 bg-primary text-white font-medium lg:py-3 py-2 px-5 text-lg tracking-wider">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-secondary">
          <IoMdMail className='lg:text-lg text-sm' />
          <a href="#" className="text-white tracking-[0.05em] lg:text-base text-xs">technoschoolpalani@gmail.com</a>
        </div>

        <div className="flex items-center gap-5 text-secondary">
          <small className="flex items-center gap-2">
            <MdLocationPin className='lg:text-lg' />
            <a href="#" className="text-white text-sm lg:text-base">Palani-624601</a>
          </small>
          <small className="flex items-center gap-2">
            <FaPhone className='lg:text-lg' />
            <a href="#" className="text-white tracking-[0.05em] lg:text-base text-xs">9994500216</a>
          </small>
        </div>
      </div>
    </div>
  )
}

export default TopBar
