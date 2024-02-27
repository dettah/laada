import React from 'react'
import { Link } from 'react-router-dom'
const MarketCard = ({ title, image, text, showTitle, showButton }) => {
  return (

    <div className='shadow-lg border border-gray-300 border-opacity-30 h-fit px-4 py-2 text-left rounded-[10px]  '>
      {showTitle && <h3 className='text-[24px] mt-4 '>{title}</h3>}
        <img src={image} alt="market items" className='rounded-[10px] h-[16rem] object-cover object-center w-full' />
      <div className='flex justify-between items-center py-2'>
        <h4 className='text-[24px]'>{text}</h4>

        {showButton && <Link to={"/ma"}>
          <a className='py-2 px-3 text-white bg-red-500 rounded-md cursor-pointer whitespace-nowrap '>Contact Us</a>
        </Link>}
      </div>
    </div>
  )
}

export default MarketCard