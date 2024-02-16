import React, { useState } from 'react';
import market1 from '../../assets/market1.png';
import market2 from '../../assets/market2.png';
import arrowBack from '../../assets/left_arrow.png';
import arrowForward from '../../assets/right_arrow.png';

import { Link } from 'react-router-dom';


const images = [market1, market2, market1, market2];
const titles = ['Abuja village market', 'Farm market', 'Orange market', 'Groceries 4'];

const Featured = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative overflow-hidden mx-10 py-20 h-[calc(fit +)]">
      <Link to={"/stores/"}>

      
      <div
        className="flex gap-10 justify-around pl-[430px]"
        style={{ transform: `translateX(-${currentSlide * 10}%)`, transition: 'transform 0.5s ease-in-out' }}
        >
        {images.map((image, index) => (
          <div className="shadow-md ring-1 ring-gray-200 px-3 pb-3 hover:bg-gray-100 hover:scale-105" key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className="max-w-[370px]" />
            <div className='flex justify-between items-center'>
                
            <h2 className="text-2xl font-md text-left py-2">{titles[index]}</h2>
            <button className='bg-[#E01A4F] rounded-[6px] text-white px-6 py-[8px]'>Contact us</button>
            </div>
          </div>
        ))}
      </div>
        </Link>

      <button className="absolute top-[90%] right-[60px] transform -translate-y-1/2 transition-transform duration-300 hover:scale-110" onClick={prevSlide}>
        <img src={arrowBack} alt="" />
      </button>
      <button className="absolute top-[90%] right-0 transform -translate-y-1/2 transition-transform duration-300 hover:scale-110" onClick={nextSlide}>
        <img src={arrowForward} alt="" />
      </button>
    </div>
  );
};

export default Featured;
