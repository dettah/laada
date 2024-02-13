import React from 'react'
const MarketCard = ({title, image, text}) => {
  return (

    <div className='border h-fit w-[29.7%] px-3 text-left rounded  '>
        <h3 className='text-[24px] mt-4 '>{title}</h3>
        <img src={image} alt="market items" className='rounded-[10px]  ' />
        <h4 className='text-[24px]'>{text}</h4>
        

    </div>
  )
}

export default MarketCard