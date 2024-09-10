import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import emoji from "../../assets/HomeImages/emoji.png";


const HomeTestimonial = () => {

  const [active,setActive] = useState ();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
      img: emoji,
      h: "Karthikeyan",
      p: '"Enrolling at Shree Theivaa Academy was a great decision. The dedicated faculty  and interactive classes made complex concepts easier to grasp , while regular assessments helped to track my progress."',
    },
    {
      img: emoji,
      h: "Naveen Kumar",
      p: '"What sets Shree Theivaa Academy apart is their commitment to nurturing each student’s potential. Their practical approach, and innovative methods have made studying both enjoyable and impactful."',
    },
    {
      img: emoji,
      h: "Aananthi",
      p: '"I am grateful for the guidance from the teachers and staff at Shree Theivaa Academy. Their support has greatly boosted my academic growth. I highly recommend it for a dynamic and supportive learning experience."',
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
              className=" rounded-xl border-2 border-primary flex justify-center items-center max-w-[350px] lg:h-[500px] lg:py-14 lg:px-10 py-10 px-3 gap-10"
            >
            <div  className="flex justify-center items-center lg:mb-5">
            <img
                src={image.img}
                // alt={`Image ${index + 1}`}
                className="lg:w-[150px] lg:h-[150px] w-[100px] h-[100px] object-cover rounded-full mb-5 border-2 p-2 border-primary hover:scale-[1.2] transfrom transition-all"
              />
            </div>
             
              <div>
              <h2 className="lg:text-2xl text-xl font-bold text-darkred  tracking-wider mb-3">{image.h}</h2>
              <h2 className="lg:text-base text-sm text-gray-600 tracking-wider leading-noraml">{image.p}</h2>
              </div>
              
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeTestimonial;
