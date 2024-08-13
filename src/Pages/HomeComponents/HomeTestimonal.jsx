import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sta from "../../assets/HomeImages/Homedu.jpg";
import sta1 from "../../assets/HomeImages/bgmen1.jpeg";

const HomeTestimonial = () => {

  const [active,setActive] = useState ();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768, // For tablets and small screens
        settings: {
          slidesToShow: 1, // Show 2 slides
        },
      },
      {
        breakpoint: 1024, // For laptops and medium screens
        settings: {
          slidesToShow: 2, // Show 3 slides
        },
      },
    ],
  };

  const testimonials = [
    {
      img: sta,
      h: "James Anderson",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis libero commodi accusamus placeat magni repudiandae iusto.",
    },
    {
      img: sta1,
      h: "Harry Smith",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis libero commodi accusamus placeat magni repudiandae iusto.",
    },
    {
      img: sta,
      h: "James Anderson",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus omnis libero commodi accusamus placeat magni repudiandae iusto.",
    },
    
  ];

  return (
    <div className="  w-full flex flex-col justify-center items-center py-20 text-center  bg-[rgba(248,248,248)] gap-10">
        <h2 className="text-5xl font-bold text-primary border-b-2 border-secondary  pb-3">Testimonial</h2>
      <div className="w-full h-full lg:w-[80%] lg:h-auto gap-5 rounded-xl">
        <Slider {...settings}>
          {testimonials.map((image, index) => (
            <div
              key={index}
              className=" rounded-xl bg-[rgba(0,136,144,0.7)] border-2 border-white flex justify-center items-center max-w-[350px] h-auto py-14 px-10  gap-8 "
            >
            <div  className="flex justify-center items-center mb-5">
            <img
                src={image.img}
                // alt={`Image ${index + 1}`}
                className="w-[150px] h-[150px] object-cover rounded-full mb-5 border-2 p-2 border-white hover:scale-[1.2] transfrom transition-all"
              />
            </div>
             
              <div>
              <h2 className="text-2xl font-bold text-white tracking-wider mb-3">{image.h}</h2>
              <h2 className="text-md text-white tracking-wider ">{image.p}</h2>
              </div>
              
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeTestimonial;
