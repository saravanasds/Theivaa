import React from "react";


const HomeTeam = ({ icon, heading, description }) => {

  return (
    <>
      <div className="container mx-auto w-full h-auto flex flex-col rounded-xl justify-center items-center border-2 border-primary p-10 shadow-lg hover:scale-[1.1] hover:shadow-xl transform transition-all duration-300">
         <h2 className="mb-[1rem] font-bold text-[1.75rem] text-primary tracking-wider">{heading}</h2>
          <h2 className='text-[1rem] tracking-wider text-gray-500'>{description}</h2>
        </div>
      
    </>
  );
};

export default HomeTeam;
