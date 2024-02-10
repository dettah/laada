// Carousel.js
import React, { useState } from 'react';

const images = [ /* Your image URLs */ ];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative">
      <img
        src={images[currentImageIndex]}
        alt="Carousel Image"
        className="mx-auto w-full"
      />
      <div className="absolute top-1/2 transform -translate-y-1/2 left-0">
        <button
          onClick={handlePrev}
          className="bg-gray-200 px-3 py-1 rounded-l focus:outline-none"
        >
          Prev
        </button>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-0">
        <button
          onClick={handleNext}
          className="bg-gray-200 px-3 py-1 rounded-r focus:outline-none"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
