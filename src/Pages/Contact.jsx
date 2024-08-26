import { MdLocationPin } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import bg4 from "../assets/HomeImages/bg4.jpeg";

import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API or email service)
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full mx-auto bg-center bg-white  rounded-lg ">
      <div
        className="w-full h-[450px] bg-center bg-cover object-cover"
        style={{
          backgroundImage: `url(${bg4})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="w-full h-[450px] bg-primary bg-opacity-20 backdrop-blur-[1px] bg-center bg-cover object-cover text-center pt-44">
          <h2
            className="lg:text-5xl text-3xl font-bold text-white tracking-wider "
            style={{ textShadow: "3px 3px 0px rgba(0,0,0,0.9)" }}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            Contact Us
          </h2>
        </div>
      </div>
      <div className="py-20">
        <h1 className="lg:text-3xl text-xl font-semibold mb-6 text-center text-primary tracking-wider">
          Contact Us
        </h1>

        <div className="mb-8 flex flex-col justify-center items-center "data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="300">
          <p className="lg:text-base text-sm px-3 mb-4 text-center text-primary tracking-wider">
            We'd love to hear from you! Here’s how you can reach us:
          </p>
          <div className=" grid grid-cols-1 lg:grid-cols-3 lg:py-10 gap-16 lg:px-20 py-3">
            <div className="flex flex-col justify-center items-center ">
              <MdLocationPin className="lg:text-5xl text-3xl text-secondary text-center mb-5" />
              <p className="text-primary text-sm font-medium text-center">
                Location
                <br />
                Palani-624601
              </p>
            </div>

            <div className="flex flex-col justify-center items-center ">
              <FaPhone className="lg:text-5xl text-3xl text-secondary  mb-5" />
              <p className="text-primary text-sm font-medium text-center tracking-wider">
                Phone
                <br />
                9871220968
              </p>
            </div>

            <div className="flex flex-col justify-center items-center ">
              <IoMdMail className="lg:text-5xl text-3xl text-secondary text-center mb-5" />
              <p className="text-primary text-sm font-medium text-center tracking-wider">
                Email
                <br />
                contact@company.com
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl h-auto mx-auto shadow-md shadow-primary border-2 py-10 px-10 rounded-lg border-primary "data-aos="fade-right"
          data-aos-duration="800"
          data-aos-delay="300">
          <h2 className="lg:text-2xl  text-xl font-semibold mb-4 text-primary text-center tracking-wider">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-medium mb-2 tracking-wider"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition duration-300 ease-in-out"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-medium mb-2 tracking-wider"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition duration-300 ease-in-out"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-medium mb-2 tracking-wider"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Your Message"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition duration-300 ease-in-out"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-md tracking-wider hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary transition duration-300 ease-in-out"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
