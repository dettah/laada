import React, { useState } from 'react';
import market1 from '../../assets/market1.png'
import market2 from '../../assets/market2.png'
import arrowBack from '../../assets/left_arrow.png'

import arrowForward from '../../assets/right_arrow.png'



const images = [market1, market2, market1, market2];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative overflow-hidden mx-10  py-20  h-[calc(fit +)]">
      <div className="flex gap-10 justify-around pl-[430px]" style={{ transform: `translateX(-${currentSlide * 10}%)`, transition: 'transform 0.5s ease' }}>

        {images.map((image, index) => (
          <div className='shadow-md ring-1 ring-gray-200 px-3 pb-3'>
            <h2 className='text-3xl font-semibold text-left py-2'>Groceries</h2>
            <img key={index} src={image} alt={`Slide ${index + 1}`} className="max-w-[370px]" />
          </div>
        ))}
      </div>

      <button className="absolute top-[90%] right-[60px] transform -translate-y-1/2" onClick={prevSlide}>
        <img src={arrowBack} alt="" />

      </button>
      <button className="absolute top-[90%] right-0 transform -translate-y-1/2" onClick={nextSlide}>
      <img src={arrowForward} alt="" />
      </button>
    </div>
  );
};

export default Carousel;
