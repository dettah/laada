import React from 'react'

const LatestNewsCard = ({ heading, text, image }) => {
    return (
        <div className=' w-[390px] h-[380px] shadow-md '>
            <img src={image} alt="" className='' />
            <div className='text-left '>
                <h3 className='text-[25px] font-semibold my-2 '>{heading}</h3>
                <p className=' text-xl '>{text}</p>
            </div>
        </div>
    )
}

export default LatestNewsCard