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
    <div className="relative flex flex-col lg:flex-row justify-center items-center overflow-x-auto">
      <div className="flex w-full  justify-between items-center bg-white shadow-md px-4 py-3 lg:px-20 ">
        <h1 className="flex-shrink-0 font-sen text-[2rem] font-semibold pl-5">
          <img src={sta} alt="Logo" className="h-auto w-[200px] lg:w-[200px]" />
        </h1>
        <div className="lg:hidden flex flex-col items-center px-10 overflow-x-auto">
          <button
            onClick={toggleMenu}
            className="text-primary text-xl lg:text-2xl"
            aria-label="Toggle menu"
          >
            {isOpen ? '✖️' : '☰'}
          </button>
        </div>
        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:w-auto flex-col lg:flex-row items-center lg:items-center gap-4 lg:gap-10 font-semibold text-primary tracking-wider ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "block py-1 text-primary border-b-2 border-primary text-[1.25rem]"
                : "block py-1 text-primary hover:border-primary hover:border-b-2"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "block py-1 text-primary border-b-2 border-primary text-[1.25rem]"
                : "block py-1 text-primary hover:border-primary hover:border-b-2"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "block py-1 text-primary border-b-2 border-primary text-[1.25rem]"
                : "block py-1 text-primary hover:border-primary hover:border-b-2"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "block py-1 text-primary border-b-2 border-primary text-[1.25rem]"
                : "block py-1 text-primary hover:border-primary hover:border-b-2"
            }
          >
            Contact
          </NavLink>
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      <div
        className={`lg:hidden fixed inset-0 bg-white shadow-lg transition-transform duration-300 ease-in-out ${isOpen ? "translate-y-0" : "-translate-y-full"} z-50`}
        aria-hidden={!isOpen}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-primary text-2xl"
          aria-label="Close menu"
        >
          ✖️
        </button>
        <div className="flex flex-col items-center mt-16">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "block py-4 text-primary border-b-2 border-primary text-[1.25rem]"
                : "block py-4 text-primary"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "block py-4 text-primary border-b-2 border-primary text-[1.25rem]"
                : "block py-4 text-primary"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "block py-4 text-primary border-b-2 border-primary text-[1.25rem]"
                : "block py-4 text-primary"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "block py-4 text-primary border-b-2 border-primary text-[1.25rem]"
                : "block py-4 text-primary"
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
