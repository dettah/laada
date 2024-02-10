import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carou from '../../assets/carousel.png'
import arrow from '../../assets/arrow.png'

const CarouselSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className="mx-auto max-w-screen-full px-0">
      <div className=" p-[15px] w-[324px] h-[120px] shadow-md">
        <div className=' float-left'> <img src={Carou} alt="carousel img" /></div>
        <div className='w-[172px] text-[12px] h-[102px] float-right mb-40 flex flex-col items-start'>
          <h3 className='text-[14px] font-bold'> Cilantro Abuja</h3>
          <p>indian Restaurant</p>
          <p>Maitama, Abuja NG</p>
          <button className='flex items-center mt-1 gap-2 justify-center text-[#E01A4F] h-[28px] w-[103px] rounded border border-green-500 '>View now <img src={arrow} alt="carousel img" /></button>
        </div>
      </div> 

      <div className=" p-[15px] w-[324px] h-[120px] shadow-md">
        <div className=' float-left'> <img src={Carou} alt="carousel img" /></div>
        <div className='w-[172px] text-[12px] h-[102px] float-right mb-40 flex flex-col items-start'>
          <h3 className='text-[14px] font-bold'> Cilantro Abuja</h3>
          <p>indian Restaurant</p>
          <p>Maitama, Abuja NG</p>
          <button className='flex items-center mt-1 gap-2 justify-center text-[#E01A4F] h-[28px] w-[103px] rounded border border-green-500 '>View now <img src={arrow} alt="carousel img" /></button>
        </div>
      </div> 

      <div className=" p-[15px] w-[324px] h-[120px] shadow-md">
        <div className=' float-left'> <img src={Carou} alt="carousel img" /></div>
        <div className='w-[172px] text-[12px] h-[102px] float-right mb-40 flex flex-col items-start'>
          <h3 className='text-[14px] font-bold'> Cilantro Abuja</h3>
          <p>indian Restaurant</p>
          <p>Maitama, Abuja NG</p>
          <button className='flex items-center mt-1 gap-2 justify-center text-[#E01A4F] h-[28px] w-[103px] rounded border border-green-500 '>View now <img src={arrow} alt="carousel img" /></button>
        </div>
      </div> 

      <div className=" p-[15px] w-[324px] h-[120px] shadow-md">
        <div className=' float-left'> <img src={Carou} alt="carousel img" /></div>
        <div className='w-[172px] text-[12px] h-[102px] float-right mb-40 flex flex-col items-start'>
          <h3 className='text-[14px] font-bold'> Cilantro Abuja</h3>
          <p>indian Restaurant</p>
          <p>Maitama, Abuja NG</p>
          <button className='flex items-center mt-1 gap-2 justify-center text-[#E01A4F] h-[28px] w-[103px] rounded border border-green-500 '>View now <img src={arrow} alt="carousel img" /></button>
        </div>
      </div> 
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default CarouselSlider;
