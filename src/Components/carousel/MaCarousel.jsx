import React, { useState, useEffect } from 'react';
import arrowBack from '../../assets/left_arrow.png';
import arrowForward from '../../assets/right_arrow.png';

const MaCarousel = ({ slides }) => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(goToNextSlide, 2000); // Auto scroll every two seconds
        return () => clearInterval(interval); // Clean up the interval on unmount
    }, [currentSlideIndex]); // Run effect whenever currentSlideIndex changes

    const goToPreviousSlide = () => {
        setCurrentSlideIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    const goToNextSlide = () => {
        setCurrentSlideIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="w-[70%] relative overflow-x-hidden overflow-y-visible pb-32 pt-60 px-20 ">
            <div className="flex justify-center items-center">
                <button className="absolute top-[90%] right-[180px] transform -translate-y-1/2 transition-transform duration-300 hover:scale-110" onClick={goToPreviousSlide}>
                    <img src={arrowBack} alt="less than" />
                </button>
                <button className="absolute top-[90%] right-[80px] transform -translate-y-1/2 transition-transform duration-1000 hover:scale-110" onClick={goToNextSlide}>
                    <img src={arrowForward} alt="Greater than sign" />
                </button>
                <div className="relative">
                    <img src={slides[currentSlideIndex].imageUrl} alt={slides[currentSlideIndex].text} className="block max-w-full mx-auto" />
                    <div className='absolute top-[-150px] left-0 w-full text-center '>
                        <h2 className="mt-4 text-4xl inline leading-[1.5]" data-aos='fade-up'> {slides[currentSlideIndex].text}</h2>
                        <h2 className="mt-4 text-4xl text-[#E01A4F] inline" data-aos='fade-up'><br /> {slides[currentSlideIndex].text2}</h2>
                        <h2 className="inline mt-4 text-4xl" data-aos='fade-up'> {slides[currentSlideIndex].text3}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MaCarousel;
