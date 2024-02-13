import React from 'react'


const StoreCards = ({ image, name }) => {
    return (

        <div className='border h-fit w-[29.7%] mb-10 p-2 mt-2 text-left rounded  '>
            <img src={image} alt="market items" className='rounded-[10px]  ' />
            <div className='my-2 flex justify-between'>
                <h4 className='text-[24px]'>{name}</h4>
                <button className='bg-[#E01A4F] rounded-[6px] text-white px-6 py-[8px]'>Contact us</button>
            </div>

        </div>
    )
}

export default StoreCards