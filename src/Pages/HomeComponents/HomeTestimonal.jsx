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
    <div className="  w-full flex flex-col justify-center items-center py-20 text-center  bg-[#fcf7f7] gap-10 px-10">
        <h2 className="lg:text-5xl text-3xl font-bold  text-primary border-b-2 border-secondary  pb-3">Testimonial</h2>
      <div className="w-full h-full lg:w-[80%] lg:h-auto gap-5 rounded-xl cursor-pointer"
      data-aos="fade-right" 
    data-aos-duration="800" 
    data-aos-delay="200" 
    data-aos-easing="ease-in-out">
        <Slider {...settings}>
          {testimonials.map((image, index) => (
            <div
              key={index}
              className=" rounded-xl border-2 border-primary flex justify-center items-center max-w-[350px] h-auto lg:py-14 lg:px-10 py-8 px-3 gap-10"
            >
            <div  className="flex justify-center items-center lg:mb-5">
            <img
                src={image.img}
                // alt={`Image ${index + 1}`}
                className="lg:w-[150px] lg:h-[150px] w-[100px] h-[100px] object-cover rounded-full mb-5 border-2 p-2 border-primary hover:scale-[1.2] transfrom transition-all"
              />
            </div>
             
              <div>
              <h2 className="lg:text-2xl text-xl font-bold text-primary  tracking-wider mb-3">{image.h}</h2>
              <h2 className="lg:text-base text-sm text-primary  tracking-wider leading-noraml">{image.p}</h2>
              </div>
              
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeTestimonial;
