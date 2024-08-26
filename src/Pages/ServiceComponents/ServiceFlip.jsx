import React from 'react';



const Flip = ({ frontContent, backContent, backContent2,backgroundImage,backgroundImageback,button,link}) => {
  return (
    <div className="card w-full lg:h-[350px] h-60 relative "data-aos="fade-up"
    data-aos-duration="800"
    data-aos-delay="200">
      <div className="flip-card-inner w-full h-full ">
        <div className="flip-card-front text-white font-bold lg:text-3xl text-xl tracking-wider flex items-center justify-center" style={{textShadow:"0px 2px 4px rgba(0,0,0,0.7)"}}>
            <div className=' absolute inset-0 bg-opacity-20 blur-[1px] z-0 rounded-md' style={{backgroundImage:`url(${backgroundImage})`,backgroundPosition:"left",backgroundSize:"cover"}}></div>
          <div className='relative z-10'>{frontContent}</div>
        </div>
        <div className="flip-card-back text-primary text-center lg:px-5 px-5 lg:text-2xl text-lg font-semibold flex flex-col items-center justify-center rounded-md"style={{backgroundImage:`url(${backgroundImageback})`}}>
          {backContent}
          <div className='lg:text-base text-sm mt-5 mb-5'>{backContent2}</div>
         <div className='lg:text-base text-sm font-semibold border-2 rounded-md lg:px-10 lg:py-2 px-5 py-1 bg-primary text-white tracking-wider cursor-pointer'><a href={link}>{button}</a></div>
         
        </div>
      </div>
    </div>
  );
};

export default Flip;
