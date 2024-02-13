import React from 'react'

const CoreValueCard = ({title, text, imageUrl}) => {
    
    return (

        <div className='flex justify-between mx-20 mt-20 mb-40 text-right'>
            <div>
                <h2 className=' text-6xl mb-10 '>{title}</h2>
                <p className='w-[436px] text-3xl leading-[1.5] '>{text}</p>
            </div>
            <img src={`${imageUrl}`} alt="" className='w-[600px]'/>
        </div>
    )
}

export default CoreValueCard