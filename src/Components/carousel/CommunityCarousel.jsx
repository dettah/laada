import React, { useState } from 'react';
import market1 from '../../assets/market1.png'
import market2 from '../../assets/market2.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'



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
    <div className="relative overflow-hidden mx-10 px-2 py-5 h-">
      <div className="flex pl-2 gap-10 border justify-around" style={{ transform: `translateX(-${currentSlide * 10}%)`, transition: 'transform 0.5s ease' }}>

        {images.map((image, index) => (
          <div>
            <h3>Groceries</h3>
            <img key={index} src={image} alt={`Slide ${index + 1}`} className="max-w-[370px]" />
          </div>
        ))}
      </div>

      <button className="absolute top-[calc(100% + 20px)] left-0 transform -translate-y-1/2" onClick={prevSlide}>
        previous
        <FontAwesomeIcon icon="fa-duotone fa-circle-chevron-left" />

      </button>
      <button className="absolute top-[calc(100% + 50px)] right-0 transform -translate-y-1/2" onClick={nextSlide}>
        Next<FontAwesomeIcon icon="fa-duotone fa-circle-chevron-right" />
      </button>
    </div>
  );
};

export default Carousel;
