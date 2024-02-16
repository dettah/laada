import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CaretUpIcon from './CaretDownIcon'
import CaretDownIcon from './CaretUpIcon'


const NavAbout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleClickOutside = () => {
      if (!isHovered) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isHovered]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center space-x-1 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E01A4F]"
        onClick={toggleDropdown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span>About Us</span>
        <span className="ml-1">
          {isOpen ? <CaretDownIcon /> : <CaretUpIcon />}
        </span>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-fit bg-[#EBEBEB] border border-gray-200 rounded-md shadow-lg z-10 flex flex-col ">
          {/* please enter and update dropdown content here */}


          <Link to={"/about/"}>

            <button className='border border-t-0 border-white text-[#E01A4F] p-4 text-xl hover:bg-white w-80'>
              Who we are
            </button>
          </Link>

          <Link to={"/product/"}>

            <button className='border border-t-0 border-white p-4 text-xl text-[#E01A4F] hover:bg-white w-80'>
              Our products
            </button>
          </Link>

        
        </div>
      )}
    </div>
  );
};
export default NavAbout