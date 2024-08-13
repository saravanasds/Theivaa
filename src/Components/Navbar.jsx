import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../src/index.css";
import sta from '../assets/HomeImages/STA.png'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center">
      <div className="flex w-full lg:h-[10%] justify-between items-center bg-white shadow-md px-4 py-4 lg:px-20 lg:py-4">
        <h1 className="flex-shrink-0 font-sen text-[2rem] font-semibold pl-5">
          <img src={sta} alt="Logo" className="h-auto w-[200px] lg:w-[250px]" />
        </h1>
        <div className="lg:hidden flex flex-col items-center px-10">
          <button
            onClick={toggleMenu}
            className="text-primary text-2xl"
            aria-label="Toggle menu"
          >
            {isOpen ? '✖️' : '☰'}
          </button>
        </div>
        <div
          className={`lg:flex lg:w-auto flex-col lg:flex-row items-center lg:items-center gap-4 lg:gap-10 font-semibold text-primary tracking-wider ${isOpen ? "block" : "hidden"}`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "block py-1 text-primary border-b-2 border-primary text-[1.25rem]"
                : "block py-1 text-primary"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "block py-1 text-primary border-b-2 border-primary text-[1.25rem]"
                : "block py-1 text-primary"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "block py-1 text-primary border-b-2 border-primary text-[1.25rem]"
                : "block py-1 text-primary"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "block py-1 text-primary border-b-2 border-primary text-[1.25rem]"
                : "block py-1 text-primary"
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
