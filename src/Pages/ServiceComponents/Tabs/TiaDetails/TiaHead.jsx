import React, { useState } from 'react';



const TiaHead = () => {
  const [activeId, setActiveId] = useState('#brain');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle menu toggle

  const menuItems = [
    { id: "#brain", text: "Brain" },
    { id: "#edge", text: "Edge" },
    { id: "#play", text: "Play" },
    { id: "#mock", text: "Mock" },
    { id: "#test Hub", text: "Test Hub" },
    { id: "#media", text: "Medias" },
    { id: "#shewin", text: "Shewin" },
  ];

  return (
    <>
      {/* Navigation */}
      <nav className="w-full h-auto py-5 bg-primary shadow-lg sticky top-0">
        <div className="container mx-auto flex justify-between items-center px-6">
          {/* Logo */}
          <div className="text-red text-2xl font-bold">
            <span>TIA</span>
          </div>
            
           
          {/* Hamburger Menu for Mobile */}
          <div className="block lg:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-white text-2xl focus:outline-none"
            >
              {isMenuOpen ? '×' : '☰'}
            </button>
          </div>

          {/* Menu Items */}
          <ul className={`lg:flex lg:space-x-4 lg:items-center absolute lg:relative bg-primary w-full lg:w-auto transition-transform duration-300 ease-in-out ${isMenuOpen ? 'top-16 left-0' : 'top-[-400px] lg:top-0 lg:left-0'}`}>
            {menuItems.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                  setActiveId(item.id);
                  setIsMenuOpen(false);
                   // Close the menu when an item is clicked (mobile)
                }}
                className={`text-lg font-semibold py-2 px-4 rounded-lg transform transition-transform duration-300 ease-in-out 
                  ${activeId === item.id ? 'bg-yellow-500 text-gray-900' : 'text-white hover:bg-yellow-500 hover:text-gray-900'}`}
                  data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="200"
              >
                <a href={item.id}>{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default TiaHead;
