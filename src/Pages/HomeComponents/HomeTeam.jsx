import React from "react";


const HomeTeam = ({ icon, heading, description }) => {

  return (
    <>
      <div className="container mx-auto w-full lg:h-[200px] h-auto flex flex-col rounded-xl justify-center items-center lg:p-10 shadow-lg px-5 py-8 hover:scale-[1.1] hover:shadow-xl transform transition-all duration-300">
         <h2 className="mb-[1rem] font-bold lg:text-[1.75rem] text-xl text-darkred tracking-wider">{heading}</h2>
          <h2 className='lg:text-[1rem] text-sm  tracking-wider text-gray-500 leading-normal'>{description}</h2>
        </div>
      
    </>
  );
};

export default HomeTeam;
